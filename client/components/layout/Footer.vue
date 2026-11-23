<template>
  <footer class="bg-[#171844] border-t border-[#F8D78B]/20 text-[#EAE2D4] text-sm relative overflow-hidden">
    <div class="py-16 relative z-10">
      <UiContainer size="xl">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8">
          <!-- Col 1: Brand -->
          <div class="col-span-2 md:col-span-3 lg:col-span-1 space-y-4">
            <NuxtLink to="/" class="inline-flex items-center group focus:outline-none" title="The Narayan Presence">
              <img src="/logo-official-dark.png" alt="The Narayan Presence Logo" class="h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105" />
            </NuxtLink>
            <p class="text-xs text-[#EAE2D4]/70 leading-relaxed max-w-xs">
              Conscious mastery, emotional grounding, and purposeful leadership frameworks for the modern practitioner.
            </p>
            <div class="text-xs text-[#F8D78B]">
              &copy; {{ currentYear }} Narayan Presence. All rights reserved.
            </div>
          </div>

          <!-- Col 2: About -->
          <div class="space-y-3">
            <div class="text-xs font-bold uppercase tracking-wider text-[#F8D78B]">About</div>
            <ul class="space-y-2 text-xs">
              <li>
                <NuxtLink to="/about" class="text-[#EAE2D4]/80 hover:text-white transition-colors">About Narayan Presence</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/founder" class="text-[#EAE2D4]/80 hover:text-white transition-colors">Founder Profile</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/methodology" class="text-[#EAE2D4]/80 hover:text-white transition-colors">Our Methodology</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/testimonials" class="text-[#EAE2D4]/80 hover:text-white transition-colors">Testimonials</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Col 3: Offerings -->
          <div class="space-y-3">
            <div class="text-xs font-bold uppercase tracking-wider text-[#F8D78B]">Offerings</div>
            <ul class="space-y-2 text-xs">
              <li>
                <NuxtLink to="/courses" class="text-[#EAE2D4]/80 hover:text-white transition-colors">Courses & Programmes</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/workshops" class="text-[#EAE2D4]/80 hover:text-white transition-colors">1 AM Reset Blueprint</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/coaching" class="text-[#EAE2D4]/80 hover:text-white transition-colors">1-to-1 Coaching</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/membership" class="text-[#EAE2D4]/80 hover:text-white transition-colors">Membership & Circle</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/products" class="text-[#EAE2D4]/80 hover:text-white transition-colors">Books & Digital Products</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Col 4: Resources -->
          <div class="space-y-3">
            <div class="text-xs font-bold uppercase tracking-wider text-[#F8D78B]">Connect & Learn</div>
            <ul class="space-y-2 text-xs">
              <li>
                <NuxtLink to="/community" class="text-[#EAE2D4]/80 hover:text-white transition-colors">Community Overview</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/resources" class="text-[#EAE2D4]/80 hover:text-white transition-colors">Journal & Resources</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/faqs" class="text-[#EAE2D4]/80 hover:text-white transition-colors">FAQs</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="text-[#EAE2D4]/80 hover:text-white transition-colors">Contact</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Col 5: Legal & Safety -->
          <div class="space-y-3">
            <div class="text-xs font-bold uppercase tracking-wider text-[#F8D78B]">Legal & Safety</div>
            <ul class="space-y-2 text-xs">
              <li>
                <NuxtLink to="/privacy-policy" class="text-[#EAE2D4]/80 hover:text-white transition-colors">Privacy Policy</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/terms" class="text-[#EAE2D4]/80 hover:text-white transition-colors">Terms & Conditions</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/refund-policy" class="text-[#EAE2D4]/80 hover:text-white transition-colors">Refund Policy</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/disclaimer" class="text-[#EAE2D4]/80 hover:text-white transition-colors">Disclaimer & Safety</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </UiContainer>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
