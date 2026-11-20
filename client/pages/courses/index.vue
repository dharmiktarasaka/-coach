<template>
  <div class="narayan-subpage courses-page">
    <section class="phero dark grain">
      <i class="aurora" aria-hidden="true"><b></b><b></b><b></b></i>
      <span class="mandala" aria-hidden="true">
        <svg viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle r="98" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <circle r="80" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <circle r="56" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <circle r="36" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" transform="rotate(45)" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" transform="rotate(90)" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" transform="rotate(135)" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
        </svg>
      </span>
      <div class="wrap">
        <p class="crumb"><NuxtLink to="/">Home</NuxtLink> / Programmes</p>
        <p class="eyebrow">All Programmes</p>
        <h1 style="margin-top:22px">Choose a programme <em>aligned</em> with your next step.</h1>
        <p class="lead hero-in">
          Each programme states who it is for, the outcomes, what is included, the time commitment, the format and the fee. Compare before you enrol.
        </p>
      </div>
    </section>

      <UiPageBreadcrumb
        :items="[
          { label: 'Offerings', to: '/courses' },
          { label: 'Courses & Programmes' }
        ]"
        :prev="{ label: 'Our Methodology', to: '/methodology' }"
        :next="{ label: 'Workshops & Events', to: '/workshops' }"
      />

    <!-- Filter Buttons & Programme Rows -->
    <section class="sec">
      <div class="wrap">
        <div class="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-8">
          <button
            type="button"
            class="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            :class="selectedFilter === 'all'
              ? 'bg-[#D9AA55] text-[#0f1233] font-bold shadow-md'
              : (isDark ? 'bg-white/10 text-[#F8F5EF] border border-[#D9AA55]/30 hover:bg-white/20' : 'bg-black/5 text-[#171844] border border-[#EAE2D4] hover:bg-black/10')"
            @click="selectedFilter = 'all'"
          >
            All 11 Programmes
          </button>
          <button
            type="button"
            class="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            :class="selectedFilter === 'academy'
              ? 'bg-[#D9AA55] text-[#0f1233] font-bold shadow-md'
              : (isDark ? 'bg-white/10 text-[#F8F5EF] border border-[#D9AA55]/30 hover:bg-white/20' : 'bg-black/5 text-[#171844] border border-[#EAE2D4] hover:bg-black/10')"
            @click="selectedFilter = 'academy'"
          >
            Presence Academy (7)
          </button>
          <button
            type="button"
            class="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            :class="selectedFilter === 'business'
              ? 'bg-[#D9AA55] text-[#0f1233] font-bold shadow-md'
              : (isDark ? 'bg-white/10 text-[#F8F5EF] border border-[#D9AA55]/30 hover:bg-white/20' : 'bg-black/5 text-[#171844] border border-[#EAE2D4] hover:bg-black/10')"
            @click="selectedFilter = 'business'"
          >
            Presence Business (4)
          </button>
        </div>

        <div class="rows">
          <NuxtLink
            v-for="p in filteredProgrammes"
            :key="p.id"
            :to="'/#' + p.id"
            class="rw"
          >
            <span class="no">{{ p.no }}</span>
            <div class="flex flex-col">
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#D9AA55] mb-1">{{ p.pillar === 'academy' ? 'Presence Academy' : 'Presence Business' }}</span>
              <h3 style="font-family:'Fraunces',serif;color:var(--fg);font-size:20px;line-height:1.3">{{ p.title }}</h3>
            </div>
            <span class="text-sm" style="color:var(--body)">{{ p.desc }}</span>
            <span class="ln text-xs font-semibold px-2.5 py-1 rounded border border-[#D9AA55]/30 text-current whitespace-nowrap">{{ p.duration }}</span>
            <span class="ar text-lg text-[#D9AA55]" aria-hidden="true">→</span>
          </NuxtLink>
        </div>

        <p class="small" style="margin-top:28px;color:var(--muted)">
          Lengths are proposed. Fees and start dates are confirmed before each cohort begins. The 1 AM Reset Blueprint intensive is currently open.
        </p>
      </div>
    </section>
    <!-- CTA -->
    <section class="sec dark grain cta">
      <i class="aurora" aria-hidden="true"><b></b><b></b><b></b></i>
      <span class="mandala" aria-hidden="true"></span>
      <div class="wrap">
        <h2>Still <em>deciding?</em></h2>
        <p class="lead">Describe your situation in two lines. We will suggest where to start.</p>
        <div class="btns" style="margin-top:24px">
          <NuxtLink class="btn btn-gold" to="/contact">Ask which fits <span>→</span></NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTheme } from '~/composables/useTheme'

const { isDark } = useTheme()
const selectedFilter = ref('all')

const programmes = [
  { no: '01', id: 'a-clear-mind', pillar: 'academy', title: 'Clear Mind and Life Clarity', desc: 'The P.A.U.S.E. journey for repeated thoughts, confusion and postponed decisions.', duration: '6 weeks' },
  { no: '02', id: 'a-emotional', pillar: 'academy', title: 'Emotional Awareness and Self-Mastery', desc: 'Name what you feel, find the trigger, choose the response.', duration: '4 weeks' },
  { no: '03', id: 'a-relationships', pillar: 'academy', title: 'Conscious Relationships', desc: 'Listening, expectations, boundaries and repair, with safety first.', duration: '6 weeks' },
  { no: '04', id: 'a-parenting', pillar: 'academy', title: 'Conscious Parenting', desc: 'Understand your own triggers and your child\'s needs. Educational, not clinical.', duration: '6 weeks' },
  { no: '05', id: 'a-21-day', pillar: 'academy', title: '21-Day Conscious Living', desc: 'One theme, one example, one action a day. The easiest place to begin.', duration: '21 days' },
  { no: '06', id: 'a-narayan', pillar: 'academy', title: 'N-A-R-A-Y-A-N Daily Practice', desc: 'Seven short practices for a steady daily routine.', duration: '30 days' },
  { no: '07', id: 'a-108-day', pillar: 'academy', title: '108-Day Narayan Journey', desc: 'A guided path in four phases, with live sessions and community.', duration: '108 days' },
  { no: '08', id: 'b-start-coaching', pillar: 'business', title: 'Start Your Coaching Business', desc: 'Choose a market, shape an offer and get your first clients.', duration: '8 modules' },
  { no: '09', id: 'b-create-course', pillar: 'business', title: 'Create Your Online Course', desc: 'Validate an idea, design the lessons and launch without relying on video.', duration: '10 modules' },
  { no: '10', id: 'b-automate', pillar: 'business', title: 'Automate Your Coaching Business', desc: 'Map the client journey, then automate the follow-up, enrolment and onboarding.', duration: '6 modules' },
  { no: '11', id: 'b-scale', pillar: 'business', title: 'Scale Your Coaching Business', desc: 'An advanced programme for coaches with clients. Opens later.', duration: 'Advanced' }
]

const filteredProgrammes = computed(() => {
  if (selectedFilter.value === 'all') return programmes
  return programmes.filter(p => p.pillar === selectedFilter.value)
})

useHead({
  title: 'Courses & Programmes — Narayan Presence',
  meta: [
    { name: 'description', content: 'Explore all 11 programmes across Presence Academy and Presence Business.' }
  ],
  link: [
    { rel: 'stylesheet', href: '/style.css' }
  ]
})
</script>

<style scoped>
.narayan-subpage {
  font-family: 'DM Sans', -apple-system, sans-serif;
  color: var(--body);
}
.narayan-subpage h1,
.narayan-subpage h2,
.narayan-subpage h3 {
  font-family: 'Fraunces', Georgia, serif;
}
.rw {
  display: grid;
  grid-template-columns: 50px 260px 1fr 140px 30px;
  align-items: center;
  gap: 20px;
  background: var(--card);
  padding: 22px 28px;
  border-radius: 16px;
  border: 1px solid var(--line);
  margin-bottom: 12px;
  text-decoration: none;
  transition: all 0.25s ease;
}
:root[data-theme="dark"] .rw,
html.dark .rw,
[data-theme="dark"] .rw {
  background: #141845;
  border-color: rgba(217, 170, 85, 0.25);
}
:root[data-theme="light"] .rw,
html.light .rw,
[data-theme="light"] .rw {
  background: #ffffff;
  border-color: #EAE2D4;
}
.rw:hover {
  transform: translateY(-2px);
  border-color: #D9AA55;
  box-shadow: 0 8px 24px rgba(23, 24, 68, 0.08);
}
.rw .no {
  font-family: 'Fraunces', serif;
  font-size: 26px;
  color: #D9AA55;
  font-weight: 700;
}
@media (max-width: 900px) {
  .rw {
    grid-template-columns: 40px 1fr;
    gap: 12px;
  }
  .rw .ln,
  .rw .ar {
    display: none;
  }
}
</style>