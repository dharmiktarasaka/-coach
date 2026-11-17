<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] min-h-screen text-[#1A1A1A]">
    <UiContainer size="lg">
      <div class="space-y-16">
        <!-- Hero Header -->
        <div class="space-y-6 text-center max-w-3xl mx-auto">
          <UiBadge variant="amber" :dot="true">Live Masterclass &bull; Interactive Q&A</UiBadge>

          <h1 class="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight leading-[1.08]">
            WHY YOUR EXPERTISE ISN'T TURNING INTO <br />
            <span class="text-[#FF7F11]">CONSISTENT CLIENTS.</span>
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] leading-relaxed">
            A live, strategic masterclass breaking down the 9-layer business operating system for coaches, consultants, trainers, creators, and domain specialists.
          </p>

          <!-- Workshop Logistics Bar -->
          <div class="p-4 rounded-2xl bg-white border border-[#EAE4E4] inline-flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#1A1A1A] shadow-md font-medium">
            <span class="flex items-center gap-2">
              <span class="text-[#FF7F11] font-bold">&bull;</span> Next Session: Thursday, 7:00 PM IST
            </span>
            <span class="flex items-center gap-2">
              <span class="text-[#FF7F11] font-bold">&bull;</span> Duration: 90 Minutes Live
            </span>
            <span class="flex items-center gap-2">
              <span class="text-[#FF7F11] font-bold">&bull;</span> Format: Interactive Zoom + Live Q&A
            </span>
          </div>
        </div>

        <!-- Workshop Registration Form & Details Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <!-- Left: Agenda & Learning Outcomes (7 cols) -->
          <div class="lg:col-span-7 space-y-8">
            <div class="space-y-4">
              <h3 class="font-display font-black text-2xl text-[#1A1A1A]">What You Will Learn</h3>
              <p class="text-sm text-[#524F4E] leading-relaxed">
                This workshop is designed to diagnose why high-competence experts struggle with sales and offer packaging, and how to construct an engineered business engine.
              </p>
            </div>

            <div class="space-y-4">
              <div
                v-for="item in agendaItems"
                :key="item.title"
                class="p-5 rounded-2xl bg-white border border-[#EAE4E4] space-y-1.5 shadow-sm"
              >
                <div class="flex items-center gap-2">
                  <span class="w-6 h-6 rounded-lg bg-[#FFF8F2] text-[#FF7F11] font-mono text-xs font-bold flex items-center justify-center">
                    {{ item.num }}
                  </span>
                  <h4 class="font-display text-base font-bold text-[#1A1A1A]">{{ item.title }}</h4>
                </div>
                <p class="text-xs text-[#524F4E] pl-8 leading-relaxed">
                  {{ item.description }}
                </p>
              </div>
            </div>

            <div class="p-6 rounded-3xl bg-white border border-[#EAE4E4] space-y-2 shadow-sm">
              <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold">Who Should Attend:</div>
              <p class="text-xs text-[#524F4E] leading-relaxed">
                Coaches, consultants, trainers, creators, and corporate professionals who have authentic subject-matter expertise and want to replace sporadic referrals with structured inbound clients.
              </p>
            </div>
          </div>

          <!-- Right: Registration Box (5 cols) -->
          <div class="lg:col-span-5 bg-white border border-[#FF7F11]/50 rounded-3xl p-8 shadow-xl space-y-6 relative">
            <div v-if="!isRegistered" class="space-y-6">
              <div class="space-y-1 text-center">
                <h3 class="font-display font-black text-2xl text-[#1A1A1A]">Reserve Your Free Seat</h3>
                <p class="text-xs text-[#8C8685]">Limited to 50 participants to allow for live teardowns and Q&A.</p>
              </div>

              <form class="space-y-4" @submit.prevent="handleRegister">
                <div>
                  <label class="block text-xs font-mono text-[#8C8685] uppercase mb-1.5 font-bold">Full Name *</label>
                  <input
                    v-model="form.fullName"
                    type="text"
                    required
                    class="w-full px-4 py-3 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#FF7F11]"
                    placeholder="e.g. Priyesh Patel"
                  />
                </div>

                <div>
                  <label class="block text-xs font-mono text-[#8C8685] uppercase mb-1.5 font-bold">Email Address *</label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#FF7F11]"
                    placeholder="priyesh@example.com"
                  />
                </div>

                <div>
                  <label class="block text-xs font-mono text-[#8C8685] uppercase mb-1.5 font-bold">WhatsApp Number *</label>
                  <input
                    v-model="form.whatsapp"
                    type="tel"
                    required
                    class="w-full px-4 py-3 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#FF7F11]"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label class="block text-xs font-mono text-[#8C8685] uppercase mb-1.5 font-bold">Current Role / Domain *</label>
                  <select
                    v-model="form.currentRole"
                    required
                    class="w-full px-4 py-3 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#FF7F11]"
                  >
                    <option value="" disabled>Select your primary profile</option>
                    <option value="Coach">Coach (1-on-1 / Cohort)</option>
                    <option value="Consultant">Consultant / Advisor</option>
                    <option value="Corporate Trainer">Corporate / Technical Trainer</option>
                    <option value="Knowledge Creator">Knowledge Creator</option>
                    <option value="Transitioning Executive">Transitioning Professional / Executive</option>
                    <option value="Domain Specialist">Specialist / Author</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-mono text-[#8C8685] uppercase mb-1.5 font-bold">Biggest Business Question</label>
                  <textarea
                    v-model="form.biggestQuestion"
                    rows="2"
                    class="w-full px-4 py-2.5 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#FF7F11]"
                    placeholder="e.g. How to transition from hourly billing to high-ticket packages?"
                  ></textarea>
                </div>

                <div class="pt-2">
                  <UiButton type="submit" variant="primary" size="lg" block :loading="isSubmitting">
                    Register for Free Workshop &rarr;
                  </UiButton>
                </div>

                <div class="text-[11px] text-[#8C8685] text-center font-mono">
                  Calendar invite + Zoom link sent to your email immediately.
                </div>
              </form>
            </div>

            <!-- Registered Confirmation State -->
            <div v-else class="text-center space-y-6 py-6 animate-fadeIn">
              <div class="w-16 h-16 rounded-full bg-[#FFF8F2] border border-[#FF7F11] text-[#FF7F11] flex items-center justify-center mx-auto text-3xl font-bold">
                &check;
              </div>

              <div class="space-y-2">
                <h3 class="font-display font-black text-2xl text-[#1A1A1A]">Seat Confirmed!</h3>
                <p class="text-xs sm:text-sm text-[#524F4E]">
                  We have reserved your access for <strong>Thursday at 7:00 PM IST</strong>. Check your inbox (<strong>{{ form.email }}</strong>) for your unique Zoom link and preparation workbook.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] text-xs text-[#524F4E] space-y-2">
                <div class="font-bold text-[#FF7F11]">Preparation Recommendation:</div>
                <p>Complete your 5-minute Business Growth Scorecard before the session so you can follow along with your personalized diagnostic numbers.</p>
              </div>

              <UiButton to="/scorecard" variant="primary" size="md">
                Take Diagnostic Scorecard Now &rarr;
              </UiButton>
            </div>
          </div>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
import { leadService } from '~/services/leadService'
import { useAnalytics } from '~/composables/useAnalytics'

const { track } = useAnalytics()

const isSubmitting = ref(false)
const isRegistered = ref(false)

const form = reactive({
  fullName: '',
  email: '',
  whatsapp: '',
  currentRole: '',
  biggestQuestion: ''
})

const agendaItems = [
  {
    num: '01',
    title: 'The Expertise-to-Asset Dilemma',
    description: 'Why domain experts get trapped in hourly fees and how to transition into codified high-ticket advisory architectures.'
  },
  {
    num: '02',
    title: 'The 9-Layer Business Operating System',
    description: 'An architectural walk-through of each layer from positioning stance to autonomous delivery and AI leverage.'
  },
  {
    num: '03',
    title: 'High-Ticket Offer Packaging in INR & USD',
    description: 'How to structure outcome-driven transformation programs commanding ₹1 Lakh to ₹5 Lakh+ in India, and $3k–$10k internationally.'
  },
  {
    num: '04',
    title: 'Diagnostic Enrollment & Live Q&A Teardowns',
    description: 'A live demonstration of the diagnostic triage script and open breakdown of attendee business bottlenecks.'
  }
]

const handleRegister = async () => {
  isSubmitting.value = true
  await leadService.submitWorkshopRegistration(form)
  track('workshop_registered', {
    role: form.currentRole
  })
  isSubmitting.value = false
  isRegistered.value = true
}

useSeoMeta({
  title: 'Live Growth Masterclass — Why Your Expertise Isn\'t Turning Into Clients',
  description: 'Reserve your free seat for the live 90-minute masterclass on the 9-layer business operating system for coaches, consultants, and experts.'
})
</script>
