<template>
  <footer class="bg-[#F5EFEF] border-t border-[#EAE4E4] text-[#524F4E] text-sm relative overflow-hidden">
    <!-- Subtle background radial grid -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#EAE4E4_1px,transparent_1px),linear-gradient(to_bottom,#EAE4E4_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none"></div>

    <!-- Sticky / Lead Teaser Strip -->
    <div class="border-b border-[#EAE4E4] py-12 relative z-10">
      <UiContainer size="xl">
        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-lg">
          <div class="space-y-2 max-w-xl text-center lg:text-left">
            <UiBadge variant="amber" :dot="true">Diagnostic Engine</UiBadge>
            <h3 class="font-display font-black text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight">
              Ready to find the exact bottleneck in your expert business?
            </h3>
            <p class="text-[#524F4E] text-sm sm:text-base leading-relaxed">
              Take the free 5-minute Scorecard to check your positioning, offer, pipeline, and systems.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
            <UiButton to="/scorecard" variant="primary" size="lg" custom-class="shadow-lg shadow-[#FF7F11]/25">
              Take the free Scorecard
            </UiButton>
            <UiButton to="/workshop" variant="secondary" size="lg">
              Join a live workshop
            </UiButton>
          </div>
        </div>
      </UiContainer>
    </div>

    <!-- Main Footer Links Grid -->
    <div class="py-16 relative z-10">
      <UiContainer size="xl">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8">
          <!-- Col 1: Brand -->
          <div class="col-span-2 md:col-span-3 lg:col-span-1 space-y-4">
            <NuxtLink to="/" class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-lg bg-[#FF7F11] flex items-center justify-center shadow-md shadow-[#FF7F11]/25">
                <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span class="font-display font-black text-lg text-[#1A1A1A] tracking-tight">DIGITAL COACH</span>
            </NuxtLink>
            <p class="text-xs text-[#524F4E] leading-relaxed max-w-xs">
              Digital Coach — the business operating system for coaches, consultants, trainers, creators, and experts. Turn real expertise into a business that lasts.
            </p>
            <div class="text-xs space-y-1">
              <div class="flex items-center gap-1.5 text-[#FF7F11] font-bold">
                <span class="w-2 h-2 rounded-full bg-[#FF7F11]"></span>
                Built in India &middot; Ready for the world
              </div>
            </div>
          </div>

          <!-- Col 2: Who We Help -->
          <div class="space-y-3">
            <div class="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">Who We Help</div>
            <ul class="space-y-2 text-xs">
              <li><NuxtLink to="/who-we-help/coaches" class="hover:text-[#FF7F11] transition-colors">Coaches</NuxtLink></li>
              <li><NuxtLink to="/who-we-help/consultants" class="hover:text-[#FF7F11] transition-colors">Consultants</NuxtLink></li>
              <li><NuxtLink to="/who-we-help/trainers" class="hover:text-[#FF7F11] transition-colors">Trainers</NuxtLink></li>
              <li><NuxtLink to="/who-we-help/creators" class="hover:text-[#FF7F11] transition-colors">Creators</NuxtLink></li>
              <li><NuxtLink to="/who-we-help/professionals" class="hover:text-[#FF7F11] transition-colors">Professionals in transition</NuxtLink></li>
              <li><NuxtLink to="/who-we-help/experts" class="hover:text-[#FF7F11] transition-colors">Authors & domain experts</NuxtLink></li>
            </ul>
          </div>

          <!-- Col 3: The System -->
          <div class="space-y-3">
            <div class="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">The System</div>
            <ul class="space-y-2 text-xs">
              <li><NuxtLink to="/what-we-build" class="hover:text-[#FF7F11] transition-colors">The 9 layers</NuxtLink></li>
              <li><NuxtLink to="/how-it-works" class="hover:text-[#FF7F11] transition-colors">How it works</NuxtLink></li>
              <li><NuxtLink to="/programs" class="hover:text-[#FF7F11] transition-colors">Programs & advisory</NuxtLink></li>
              <li><NuxtLink to="/about" class="hover:text-[#FF7F11] transition-colors">Our methodology</NuxtLink></li>
              <li><NuxtLink to="/apply" class="hover:text-[#FF7F11] transition-colors">Apply</NuxtLink></li>
            </ul>
          </div>

          <!-- Col 4: Resources -->
          <div class="space-y-3">
            <div class="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">Resources</div>
            <ul class="space-y-2 text-xs">
              <li><NuxtLink to="/coaching-business" class="hover:text-[#FF7F11] transition-colors">Coaching business basics</NuxtLink></li>
              <li><NuxtLink to="/coaching-business-india" class="hover:text-[#FF7F11] transition-colors">Building for the Indian market</NuxtLink></li>
              <li><NuxtLink to="/coaching-offer" class="hover:text-[#FF7F11] transition-colors">Designing a premium offer</NuxtLink></li>
              <li><NuxtLink to="/get-coaching-clients" class="hover:text-[#FF7F11] transition-colors">Getting clients</NuxtLink></li>
              <li><NuxtLink to="/ai-for-coaches" class="hover:text-[#FF7F11] transition-colors">AI leverage</NuxtLink></li>
              <li><NuxtLink to="/coaching-business-automation" class="hover:text-[#FF7F11] transition-colors">Systems & automation</NuxtLink></li>
            </ul>
          </div>

          <!-- Col 5: Trust -->
          <div class="space-y-3">
            <div class="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">Trust</div>
            <ul class="space-y-2 text-xs">
              <li><NuxtLink to="/privacy-policy" class="hover:text-[#FF7F11] transition-colors">Privacy policy</NuxtLink></li>
              <li><NuxtLink to="/terms" class="hover:text-[#FF7F11] transition-colors">Terms</NuxtLink></li>
              <li><NuxtLink to="/disclaimer" class="hover:text-[#FF7F11] transition-colors">Earnings & methodology disclaimer</NuxtLink></li>
              <li><NuxtLink to="/workshop" class="hover:text-[#FF7F11] transition-colors">Live workshop</NuxtLink></li>
              <li><NuxtLink to="/scorecard" class="hover:text-[#FF7F11] transition-colors">Growth Scorecard</NuxtLink></li>
            </ul>
          </div>
        </div>

        <!-- Bottom Row -->
        <div class="mt-16 pt-8 border-t border-[#EAE4E4] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8C8685]">
          <div>
            &copy; {{ new Date().getFullYear() }} Digital Coach. Built for experts who want a real business.
          </div>
          <div class="flex items-center gap-6">
            <span class="text-[#524F4E]">No unrealistic income claims &middot; Genuine business systems</span>
            <div class="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="hover:text-[#FF7F11] transition-colors" aria-label="LinkedIn">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="hover:text-[#FF7F11] transition-colors" aria-label="YouTube">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="hover:text-[#FF7F11] transition-colors" aria-label="Instagram">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </UiContainer>
    </div>
  </footer>
</template>
