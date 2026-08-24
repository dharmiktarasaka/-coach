<template>
  <div ref="canvasContainerRef" class="relative w-full h-full min-h-[500px] select-none overflow-hidden bg-[#0A0A0A]">
    <canvas ref="canvasRef" class="w-full h-full block cursor-grab active:cursor-grabbing"></canvas>
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import gsap from 'gsap'

const props = defineProps<{
  progress: number // 0.0 (Level 01) to 1.0 (Level 06)
  mouseX?: number
  mouseY?: number
}>()

const emit = defineEmits<{
  (e: 'selectFloor', progress: number): void
}>()

const canvasContainerRef = ref<HTMLElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)

// Scene globals
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let animationFrameId: number

// 3D Objects & Components
let cabinGroup: THREE.Group
let doorLeftGroup: THREE.Group
let doorRightGroup: THREE.Group
let counterweightMesh: THREE.Group
let mainSheaveWheel: THREE.Group
let cableMeshes: THREE.Mesh[] = []
let cityLightsGroup: THREE.Group
let floorDisplayCanvas: HTMLCanvasElement
let floorDisplayTexture: THREE.CanvasTexture
let floorDisplayMesh: THREE.Mesh

// Elevation bounds for 6 vertical levels
const floorYPositions = [-4.0, -0.8, 2.4, 5.6, 8.8, 12.0]
const minY = floorYPositions[0]
const maxY = floorYPositions[5]

const cabinState = {
  y: minY,
  doorProgress: 1, // 0 = closed, 1 = open
  sheaveAngle: 0,
  vibration: 0
}

let prevProgress = 0

const currentLevelIndex = computed(() => {
  const seg = 1 / 5
  const idx = Math.round(props.progress / seg)
  return Math.min(5, Math.max(0, idx))
})

const isAtFloor = computed(() => {
  const seg = 1 / 5
  for (let i = 0; i <= 5; i++) {
    if (Math.abs(props.progress - i * seg) < 0.035) return true
  }
  return false
})

// Procedural Architectural Charcoal & Deep Metal Texture (#262626 Base)
const createArchitecturalCharcoalTexture = () => {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const ctx = canvas.getContext('2d')
  if (!ctx) return new THREE.Texture()

  ctx.fillStyle = '#262626'
  ctx.fillRect(0, 0, 512, 512)

  const imgData = ctx.getImageData(0, 0, 512, 512)
  const data = imgData.data
  for (let x = 0; x < 512; x++) {
    const colVar = (Math.random() - 0.5) * 0.14 * 255
    for (let y = 0; y < 512; y++) {
      const idx = (y * 512 + x) * 4
      const noise = (Math.random() - 0.5) * 10 + colVar
      data[idx] = Math.min(255, Math.max(0, data[idx] + noise + 4))
      data[idx + 1] = Math.min(255, Math.max(0, data[idx + 1] + noise + 2))
      data[idx + 2] = Math.min(255, Math.max(0, data[idx + 2] + noise))
    }
  }
  ctx.putImageData(imgData, 0, 0)

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(2, 2)
  return texture
}

// Procedural Dark Charcoal Wood / Deck Texture
const createDarkDeckTexture = () => {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const ctx = canvas.getContext('2d')
  if (!ctx) return new THREE.Texture()

  ctx.fillStyle = '#1C1C1C'
  ctx.fillRect(0, 0, 512, 512)

  // Plank seams
  ctx.fillStyle = '#2B2B2B'
  for (let x = 0; x < 512; x += 40) {
    ctx.fillRect(x + 2, 0, 36, 512)
  }

  // Micro grain
  ctx.fillStyle = 'rgba(0,0,0,0.25)'
  for (let i = 0; i < 4000; i++) {
    ctx.fillRect(Math.random() * 512, Math.random() * 512, Math.random() * 3, Math.random() * 10)
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(2, 4)
  return texture
}

// Procedural Warm Amber LED Floor Display (#FF7F11)
const updateDigitalDisplay = (floorNum: number) => {
  if (!floorDisplayCanvas) {
    floorDisplayCanvas = document.createElement('canvas')
    floorDisplayCanvas.width = 128
    floorDisplayCanvas.height = 64
  }
  const ctx = floorDisplayCanvas.getContext('2d')
  if (!ctx) return

  ctx.fillStyle = '#14110E'
  ctx.fillRect(0, 0, 128, 64)

  ctx.strokeStyle = '#382516'
  ctx.lineWidth = 2
  ctx.strokeRect(2, 2, 124, 60)

  ctx.fillStyle = '#FF7F11'
  ctx.shadowColor = '#FF7F11'
  ctx.shadowBlur = 12
  ctx.font = 'bold 36px "JetBrains Mono", monospace, sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  const numStr = floorNum < 10 ? `0${floorNum}` : `${floorNum}`
  ctx.fillText(numStr, 64, 32)

  if (floorDisplayTexture) {
    floorDisplayTexture.needsUpdate = true
  }
}

const initThreeScene = () => {
  if (!canvasRef.value || !canvasContainerRef.value) return

  const width = canvasContainerRef.value.clientWidth
  const height = canvasContainerRef.value.clientHeight

  // 1. Scene setup with rich dark atmospheric environment
  scene = new THREE.Scene()
  scene.background = new THREE.Color('#0A0A0A')
  scene.fog = new THREE.FogExp2('#0A0A0A', 0.015)

  // 2. Camera Setup (Front-facing 4K cinematic perspective)
  camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100)
  camera.position.set(0, -3.1, 7.8)
  camera.lookAt(0, -3.1, 0)

  // 3. Renderer with ACES Filmic Tone Mapping & High Specular Balance
  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    antialias: true,
    alpha: false,
    powerPreference: 'high-performance'
  })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.3

  // 4. Lighting System
  setupCinematicLighting()

  // 5. Build Panoramic Twilight City Skyline & Mountains
  buildCitySkyline()

  // 6. Build Terrace Platform with Charcoal Stone Pillars, Deck, & Railings
  buildTerracePlatform()

  // 7. Build Monumental Glass Elevator Tower Shaft
  buildElevatorTowerShaft()

  // 8. Build Luxury Glass & Charcoal/Amber Elevator Car
  buildGlassElevatorCar()

  // Initial GSAP door state
  animateDoors(1, 0)

  // Start Render Loop
  animate()
}

const setupCinematicLighting = () => {
  // Ambient Soft Night Fill
  const ambientLight = new THREE.AmbientLight('#262626', 1.3)
  scene.add(ambientLight)

  // Warm Amber Key Uplight (#FF7F11 / Warm Cream)
  const deckKeySpot = new THREE.SpotLight('#FFEAD4', 4.5, 30, Math.PI / 3, 0.4, 1.2)
  deckKeySpot.position.set(0, -2.5, 5)
  deckKeySpot.target.position.set(0, -3.5, 0)
  scene.add(deckKeySpot)
  scene.add(deckKeySpot.target)

  // Warm Amber Railing Uplights (#FF7F11)
  const leftRailingLight = new THREE.PointLight('#FF7F11', 2.6, 6)
  leftRailingLight.position.set(-1.8, -3.6, 2.0)
  scene.add(leftRailingLight)

  const rightRailingLight = new THREE.PointLight('#FF7F11', 2.6, 6)
  rightRailingLight.position.set(1.8, -3.6, 2.0)
  scene.add(rightRailingLight)

  // Distant Cool Sky Ambient
  const skyLight = new THREE.DirectionalLight('#3D454A', 1.0)
  skyLight.position.set(0, 10, -10)
  scene.add(skyLight)
}

const buildCitySkyline = () => {
  cityLightsGroup = new THREE.Group()

  // Distant Mountains Silhouette
  const mountainGeo = new THREE.ConeGeometry(24, 8, 5)
  const mountainMat = new THREE.MeshBasicMaterial({ color: '#0C0C0C' })
  
  const m1 = new THREE.Mesh(mountainGeo, mountainMat)
  m1.position.set(-14, -1, -22)
  m1.scale.set(1.4, 1, 0.4)
  cityLightsGroup.add(m1)

  const m2 = new THREE.Mesh(mountainGeo, mountainMat)
  m2.position.set(12, 0, -24)
  m2.scale.set(1.6, 1.2, 0.4)
  cityLightsGroup.add(m2)

  // City Skyline Sparkling Lights (Warm Amber, Copper, Soft Cream)
  const lightsCount = 450
  const lightGeo = new THREE.BufferGeometry()
  const positions = new Float32Array(lightsCount * 3)
  const colors = new Float32Array(lightsCount * 3)

  const colorPalette = [
    new THREE.Color('#FF7F11'), // Warm Amber
    new THREE.Color('#FFA857'), // Soft Copper
    new THREE.Color('#FDE8D0'), // Warm Cream
    new THREE.Color('#E5E5E5'), // Crisp Soft White
    new THREE.Color('#FFB870')  // Radiant Amber
  ]

  for (let i = 0; i < lightsCount; i++) {
    const x = (Math.random() - 0.5) * 36
    const y = (Math.random() - 0.5) * 6 - 3.5
    const z = (Math.random() - 0.5) * 8 - 18

    positions[i * 3] = x
    positions[i * 3 + 1] = y
    positions[i * 3 + 2] = z

    const col = colorPalette[Math.floor(Math.random() * colorPalette.length)]
    colors[i * 3] = col.r
    colors[i * 3 + 1] = col.g
    colors[i * 3 + 2] = col.b
  }

  lightGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  lightGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

  const lightMat = new THREE.PointsMaterial({
    size: 0.09,
    vertexColors: true,
    transparent: true,
    opacity: 0.85
  })

  const cityPoints = new THREE.Points(lightGeo, lightMat)
  cityLightsGroup.add(cityPoints)

  scene.add(cityLightsGroup)
}

const buildTerracePlatform = () => {
  const darkDeckTex = createDarkDeckTexture()
  const charcoalTex = createArchitecturalCharcoalTexture()

  // Architectural Charcoal Parapet Material (#262626)
  const stoneMat = new THREE.MeshStandardMaterial({
    color: '#262626',
    roughness: 0.85,
    metalness: 0.2
  })

  // Deep Charcoal Metal Railing Material
  const railingMat = new THREE.MeshStandardMaterial({
    color: '#1E1E1E',
    roughness: 0.35,
    metalness: 0.9,
    map: charcoalTex
  })

  // Dark Walkway Deck
  const deckGeo = new THREE.BoxGeometry(3.6, 0.3, 7.5)
  const deckMat = new THREE.MeshStandardMaterial({
    roughness: 0.45,
    metalness: 0.3,
    map: darkDeckTex
  })
  const walkwayDeck = new THREE.Mesh(deckGeo, deckMat)
  walkwayDeck.position.set(0, -4.15, 2.5)
  walkwayDeck.receiveShadow = true
  scene.add(walkwayDeck)

  // Recessed Floor Amber LED Lights (#FF7F11) along deck boards
  ;[-1.5, 1.5].forEach((lx) => {
    ;[0.5, 2.0, 3.5, 5.0].forEach((lz) => {
      const ledGlow = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.04, 0.02, 12),
        new THREE.MeshBasicMaterial({ color: '#FF7F11' })
      )
      ledGlow.position.set(lx, -3.98, lz)
      scene.add(ledGlow)
    })
  })

  // Left & Right Carved Charcoal Stone Pillars (#262626)
  ;[-2.4, 2.4].forEach((px) => {
    const stonePillar = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.8, 6.5), stoneMat)
    stonePillar.position.set(px, -3.2, 3.0)
    stonePillar.receiveShadow = true
    scene.add(stonePillar)

    // Cap Trim
    const stoneCap = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.2, 6.6), stoneMat)
    stoneCap.position.set(px, -1.7, 3.0)
    scene.add(stoneCap)
  })

  // Dark Balustrades / Railings along the walkway
  ;[-1.6, 1.6].forEach((rx) => {
    // Top Handrail
    const handrail = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 6.2, 12), railingMat)
    handrail.rotation.x = Math.PI / 2
    handrail.position.set(rx, -2.6, 2.8)
    scene.add(handrail)

    // Vertical pickets
    for (let pz = 0.2; pz <= 5.6; pz += 0.35) {
      const picket = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 1.35, 8), railingMat)
      picket.position.set(rx, -3.3, pz)
      scene.add(picket)
    }
  })
}

const buildElevatorTowerShaft = () => {
  const charcoalTex = createArchitecturalCharcoalTexture()

  const towerFrameMat = new THREE.MeshStandardMaterial({
    color: '#262626',
    roughness: 0.3,
    metalness: 0.92,
    map: charcoalTex
  })

  const glassShaftMat = new THREE.MeshPhysicalMaterial({
    color: '#F0F4F8',
    transparent: true,
    opacity: 0.35,
    roughness: 0.05,
    metalness: 0.2,
    transmission: 0.94,
    ior: 1.52,
    reflectivity: 0.95
  })

  // 4 Structural Columns (#262626)
  const towerHeight = 26
  const colGeo = new THREE.BoxGeometry(0.12, towerHeight, 0.12)
  const colX = 1.35
  const colZ = 1.35

  ;[-colX, colX].forEach((cx) => {
    ;[-colZ, colZ].forEach((cz) => {
      const col = new THREE.Mesh(colGeo, towerFrameMat)
      col.position.set(cx, 4.0, cz - 0.6)
      col.castShadow = true
      scene.add(col)
    })
  })

  // Horizontal Transom Frame Rings
  floorYPositions.forEach((fy) => {
    const ringGeo = new THREE.BoxGeometry(2.8, 0.1, 2.8)
    const ring = new THREE.Mesh(ringGeo, towerFrameMat)
    ring.position.set(0, fy + 1.45, -0.6)
    scene.add(ring)
  })

  // Outer Tower Glass Enclosure Panels
  const backGlass = new THREE.Mesh(new THREE.BoxGeometry(2.6, towerHeight, 0.04), glassShaftMat)
  backGlass.position.set(0, 4.0, -0.6 - colZ)
  scene.add(backGlass)

  const leftGlass = new THREE.Mesh(new THREE.BoxGeometry(0.04, towerHeight, 2.6), glassShaftMat)
  leftGlass.position.set(-colX, 4.0, -0.6)
  scene.add(leftGlass)

  const rightGlass = new THREE.Mesh(new THREE.BoxGeometry(0.04, towerHeight, 2.6), glassShaftMat)
  rightGlass.position.set(colX, 4.0, -0.6)
  scene.add(rightGlass)
}

const buildGlassElevatorCar = () => {
  cabinGroup = new THREE.Group()

  const charcoalTex = createArchitecturalCharcoalTexture()

  const carFrameMat = new THREE.MeshStandardMaterial({
    color: '#262626',
    roughness: 0.25,
    metalness: 0.92,
    map: charcoalTex
  })

  const polishedMirrorMat = new THREE.MeshStandardMaterial({
    color: '#E5E5E5',
    roughness: 0.04,
    metalness: 0.98
  })

  const amberAccentMat = new THREE.MeshStandardMaterial({
    color: '#FF7F11',
    roughness: 0.18,
    metalness: 0.92,
    emissive: '#B34E00',
    emissiveIntensity: 0.25
  })

  const carGlassMat = new THREE.MeshPhysicalMaterial({
    color: '#FAFAFA',
    transparent: true,
    opacity: 0.48,
    roughness: 0.04,
    metalness: 0.1,
    transmission: 0.95,
    ior: 1.52,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05
  })

  const width = 2.3
  const height = 2.7
  const depth = 2.2

  // 1. Cabin Floor Base
  const carBase = new THREE.Mesh(new THREE.BoxGeometry(width, 0.18, depth), carFrameMat)
  carBase.position.set(0, -height / 2, 0)
  carBase.castShadow = true
  cabinGroup.add(carBase)

  const innerFloor = new THREE.Mesh(
    new THREE.BoxGeometry(width - 0.1, 0.04, depth - 0.1),
    new THREE.MeshStandardMaterial({ color: '#1A1A1A', roughness: 0.15, metalness: 0.85 })
  )
  innerFloor.position.set(0, -height / 2 + 0.1, 0)
  innerFloor.receiveShadow = true
  cabinGroup.add(innerFloor)

  // 2. Cabin Roof Canopy
  const carRoof = new THREE.Mesh(new THREE.BoxGeometry(width, 0.18, depth), carFrameMat)
  carRoof.position.set(0, height / 2, 0)
  carRoof.castShadow = true
  cabinGroup.add(carRoof)

  const roofGlass = new THREE.Mesh(new THREE.BoxGeometry(width - 0.4, 0.04, depth - 0.4), carGlassMat)
  roofGlass.position.set(0, height / 2, 0)
  cabinGroup.add(roofGlass)

  // 3. Illuminated Architectural Glass Walls
  const backMirror = new THREE.Mesh(new THREE.BoxGeometry(width - 0.1, height - 0.2, 0.04), polishedMirrorMat)
  backMirror.position.set(0, 0, -depth / 2 + 0.04)
  cabinGroup.add(backMirror)

  // Warm Amber Interior Light Rings on back wall
  ;[-0.5, 0.0, 0.5].forEach((ly) => {
    const ringLight = new THREE.Mesh(
      new THREE.BoxGeometry(width - 0.3, 0.03, 0.02),
      new THREE.MeshBasicMaterial({ color: '#FFB370' })
    )
    ringLight.position.set(0, ly, -depth / 2 + 0.07)
    cabinGroup.add(ringLight)
  })

  // Panoramic Glass Sides
  const sideGlassGeo = new THREE.BoxGeometry(0.04, height - 0.2, depth - 0.1)
  const leftGlass = new THREE.Mesh(sideGlassGeo, carGlassMat)
  leftGlass.position.set(-width / 2 + 0.04, 0, 0)
  cabinGroup.add(leftGlass)

  const rightGlass = new THREE.Mesh(sideGlassGeo, carGlassMat)
  rightGlass.position.set(width / 2 - 0.04, 0, 0)
  cabinGroup.add(rightGlass)

  // 4. Front Door Lintel & Digital Indicator Display (01 in #FF7F11)
  const frontLintel = new THREE.Mesh(new THREE.BoxGeometry(width, 0.42, 0.12), carFrameMat)
  frontLintel.position.set(0, height / 2 - 0.25, depth / 2 - 0.06)
  cabinGroup.add(frontLintel)

  updateDigitalDisplay(1)
  floorDisplayTexture = new THREE.CanvasTexture(floorDisplayCanvas)
  const displayMat = new THREE.MeshBasicMaterial({ map: floorDisplayTexture })
  floorDisplayMesh = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.25, 0.04), displayMat)
  floorDisplayMesh.position.set(0, height / 2 - 0.25, depth / 2 + 0.01)
  cabinGroup.add(floorDisplayMesh)

  // 5. Dual-Panel Center-Opening Sliding Doors
  const doorW = (width - 0.4) / 2
  const doorH = height - 0.55

  // Left Door Group
  doorLeftGroup = new THREE.Group()
  const doorLeftFrame = new THREE.Mesh(new THREE.BoxGeometry(doorW, doorH, 0.06), carFrameMat)
  doorLeftGroup.add(doorLeftFrame)

  const doorLeftGlass = new THREE.Mesh(new THREE.BoxGeometry(doorW - 0.12, doorH - 0.12, 0.04), carGlassMat)
  doorLeftGroup.add(doorLeftGlass)

  const doorLeftHandle = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.8, 0.08), amberAccentMat)
  doorLeftHandle.position.set(doorW / 2 - 0.04, 0, 0)
  doorLeftGroup.add(doorLeftHandle)

  doorLeftGroup.position.set(-doorW / 2 - 0.01, -0.15, depth / 2 - 0.06)
  cabinGroup.add(doorLeftGroup)

  // Right Door Group
  doorRightGroup = new THREE.Group()
  const doorRightFrame = new THREE.Mesh(new THREE.BoxGeometry(doorW, doorH, 0.06), carFrameMat)
  doorRightGroup.add(doorRightFrame)

  const doorRightGlass = new THREE.Mesh(new THREE.BoxGeometry(doorW - 0.12, doorH - 0.12, 0.04), carGlassMat)
  doorRightGroup.add(doorRightGlass)

  const doorRightHandle = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.8, 0.08), amberAccentMat)
  doorRightHandle.position.set(-doorW / 2 + 0.04, 0, 0)
  doorRightGroup.add(doorRightHandle)

  doorRightGroup.position.set(doorW / 2 + 0.01, -0.15, depth / 2 - 0.06)
  cabinGroup.add(doorRightGroup)

  // 6. Warm Interior Ambient Downlights
  const interiorWarmLight = new THREE.PointLight('#FFEAD4', 3.8, 6.5, 1.2)
  interiorWarmLight.position.set(0, height / 2 - 0.3, 0)
  cabinGroup.add(interiorWarmLight)

  // Ceiling Downlight Diffusers
  ;[-0.5, 0.5].forEach((lx) => {
    ;[-0.5, 0.5].forEach((lz) => {
      const downlight = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.06, 0.02, 12),
        new THREE.MeshBasicMaterial({ color: '#FFF5EB' })
      )
      downlight.position.set(lx, height / 2 - 0.09, lz)
      cabinGroup.add(downlight)
    })
  })

  // Position Cabin at Level 01
  cabinGroup.position.set(0, minY, -0.6)
  scene.add(cabinGroup)
}

// GSAP Door Opening / Closing Controller
const animateDoors = (targetOpen: number, duration = 0.8) => {
  gsap.to(cabinState, {
    doorProgress: targetOpen,
    duration,
    ease: 'power2.inOut',
    onUpdate: () => {
      if (!doorLeftGroup || !doorRightGroup) return
      const maxSlide = 0.75
      const offset = cabinState.doorProgress * maxSlide

      doorLeftGroup.position.x = -0.5 - offset
      doorRightGroup.position.x = 0.5 + offset
    }
  })
}

// Watch Scroll / Progress changes
watch(
  () => props.progress,
  (newVal, oldVal) => {
    const isMoving = Math.abs(newVal - (oldVal ?? newVal)) > 0.003

    if (isMoving) {
      if (cabinState.doorProgress > 0.05) {
        animateDoors(0, 0.35)
      }
    }

    if (isAtFloor.value) {
      animateDoors(1, 0.8)
      updateDigitalDisplay(currentLevelIndex.value + 1)
    }
  }
)

const animate = () => {
  animationFrameId = requestAnimationFrame(animate)

  // 1. Smooth interpolation of Elevator Cabin Y position
  const targetCabinY = minY + props.progress * (maxY - minY)
  const deltaY = targetCabinY - cabinState.y
  cabinState.y += deltaY * 0.085

  // Subtle physical vibration during motion
  const speed = Math.abs(deltaY)
  cabinState.vibration = Math.sin(Date.now() * 0.035) * speed * 0.015

  if (cabinGroup) {
    cabinGroup.position.y = cabinState.y + cabinState.vibration
  }

  // 2. Camera tracking following the elevator
  if (camera) {
    const mX = props.mouseX ?? 0
    const mY = props.mouseY ?? 0

    const targetCamX = 0 + mX * 0.6
    const targetCamY = cabinState.y + 0.9 + mY * -0.4
    const targetCamZ = 7.8 + Math.abs(mX) * 0.2

    camera.position.x += (targetCamX - camera.position.x) * 0.05
    camera.position.y += (targetCamY - camera.position.y) * 0.05
    camera.position.z += (targetCamZ - camera.position.z) * 0.05
    camera.lookAt(0, cabinState.y + 0.9, -0.6)
  }

  // 3. Slowly twinkle/rotate city lights
  if (cityLightsGroup) {
    cityLightsGroup.position.y = (cabinState.y - minY) * 0.15
  }

  // 4. Render Scene
  if (renderer && scene && camera) {
    renderer.render(scene, camera)
  }
}

const onResize = () => {
  if (!canvasContainerRef.value || !renderer || !camera) return
  const width = canvasContainerRef.value.clientWidth
  const height = canvasContainerRef.value.clientHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

onMounted(() => {
  if (import.meta.client) {
    initThreeScene()
    window.addEventListener('resize', onResize, { passive: true })
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('resize', onResize)
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
    }
    if (renderer) {
      renderer.dispose()
    }
    gsap.killTweensOf(cabinState)
  }
})
</script>
