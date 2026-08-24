<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] min-h-screen text-[#1A1A1A]">
    <UiContainer size="md">
      <!-- Header -->
      <div class="space-y-4 text-center mb-16">
        <UiBadge variant="amber" :dot="true">Advisory & Accelerator Application</UiBadge>

        <h1 class="font-display font-black text-4xl sm:text-5xl text-[#1A1A1A] tracking-tight leading-[1.08]">
          APPLY TO WORK WITH <br />
          <span class="text-[#FF7F11]">DIGITAL COACH.</span>
        </h1>

        <p class="text-sm sm:text-base text-[#524F4E] max-w-xl mx-auto leading-relaxed">
          We work selectively with coaches, consultants, trainers, creators, and experts who have genuine domain substance and are ready to build a serious commercial enterprise.
        </p>
      </div>

      <!-- Application Form Container -->
      <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 shadow-xl">
        <div v-if="!isSubmitted" class="space-y-8">
          <!-- Form Steps Header -->
          <div class="flex items-center justify-between pb-4 border-b border-[#EAE4E4] text-xs font-mono text-[#8C8685]">
            <span>Section {{ step }} of 3</span>
            <span class="text-[#FF7F11] font-bold">
              {{ step === 1 ? '1. Background & Domain' : step === 2 ? '2. Business Model & Numbers' : '3. Goals & Commitment' }}
            </span>
          </div>

          <form class="space-y-6" @submit.prevent="handleSubmit">
            <!-- SECTION 1: Personal & Background -->
            <div v-show="step === 1" class="space-y-5 animate-fadeIn">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-mono text-[#8C8685] uppercase mb-1.5 font-bold">Full Name *</label>
                  <input
                    v-model="form.fullName"
                    type="text"
                    required
                    class="w-full px-4 py-3 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#FF7F11]"
                    placeholder="Rahul Sharma"
                  />
                </div>

                <div>
                  <label class="block text-xs font-mono text-[#8C8685] uppercase mb-1.5 font-bold">Work Email Address *</label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#FF7F11]"
                    placeholder="rahul@domain.com"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-mono text-[#8C8685] uppercase mb-1.5 font-bold">WhatsApp / Phone Number *</label>
                  <input
                    v-model="form.whatsapp"
                    type="tel"
                    required
                    class="w-full px-4 py-3 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#FF7F11]"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label class="block text-xs font-mono text-[#8C8685] uppercase mb-1.5 font-bold">LinkedIn Profile or Website</label>
                  <input
                    v-model="form.websiteOrLinkedIn"
                    type="url"
                    class="w-full px-4 py-3 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#FF7F11]"
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-mono text-[#8C8685] uppercase mb-1.5 font-bold">Primary Profile *</label>
                <select
                  v-model="form.primaryRole"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#FF7F11]"
                >
                  <option value="" disabled>Select your primary categorization</option>
                  <option value="Coach">Coach (Executive, Career, Life, Health)</option>
                  <option value="Consultant">Boutique / Enterprise Consultant</option>
                  <option value="Trainer">Corporate / Technical Trainer</option>
                  <option value="Creator">Audience / Knowledge Creator</option>
                  <option value="Professional">Transitioning Corporate Executive</option>
                  <option value="Expert">Domain Specialist / Author</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-mono text-[#8C8685] uppercase mb-1.5 font-bold">Years of Industry / Domain Experience *</label>
                <select
                  v-model="form.yearsOfExperience"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#FF7F11]"
                >
                  <option value="" disabled>Select experience level</option>
                  <option value="1-3 years">1–3 years</option>
                  <option value="4-7 years">4–7 years</option>
                  <option value="8-15 years">8–15 years</option>
                  <option value="15+ years">15+ years of domain expertise</option>
                </select>
              </div>

              <div class="pt-4 flex justify-end">
                <UiButton
                  type="button"
                  variant="primary"
                  size="md"
                  :disabled="!form.fullName || !form.email || !form.whatsapp || !form.primaryRole"
                  @click="step = 2"
                >
                  Continue to Business Model &rarr;
                </UiButton>
              </div>
            </div>

            <!-- SECTION 2: Current Business Model & Revenue -->
            <div v-show="step === 2" class="space-y-5 animate-fadeIn">
              <div>
                <label class="block text-xs font-mono text-[#8C8685] uppercase mb-1.5 font-bold">What is your core subject-matter expertise? *</label>
                <textarea
                  v-model="form.expertiseDescription"
                  rows="2"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#FF7F11]"
                  placeholder="Describe what you teach or consult on, and who your target buyers are..."
                ></textarea>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-mono text-[#8C8685] uppercase mb-1.5 font-bold">Current Monthly Revenue Range *</label>
                  <select
                    v-model="form.currentMonthlyRevenue"
                    required
                    class="w-full px-4 py-3 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#FF7F11]"
                  >
                    <option value="" disabled>Select revenue bracket</option>
                    <option value="Pre-revenue / Launching">Pre-revenue / Launching new advisory</option>
                    <option value="Under ₹1 Lakh / mo">Under ₹1 Lakh / month</option>
                    <option value="₹1 - ₹3 Lakh / mo">₹1 Lakh – ₹3 Lakh / month</option>
                    <option value="₹3 - ₹7 Lakh / mo">₹3 Lakh – ₹7 Lakh / month</option>
                    <option value="₹7 - ₹15 Lakh / mo">₹7 Lakh – ₹15 Lakh / month</option>
                    <option value="₹15 Lakh+ / mo">₹15 Lakh+ / month ($18k+ USD)</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-mono text-[#8C8685] uppercase mb-1.5 font-bold">Current Primary Offer Format *</label>
                  <select
                    v-model="form.currentOfferFormat"
                    required
                    class="w-full px-4 py-3 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#FF7F11]"
                  >
                    <option value="" disabled>Select format</option>
                    <option value="1-on-1 Hourly Sessions">1-on-1 Hourly Sessions</option>
                    <option value="Custom Project Proposals">Custom Scoped Proposals</option>
                    <option value="Low-Ticket Courses">Pre-Recorded Courses (Low-Ticket)</option>
                    <option value="Corporate Retainers">Corporate Workshops / Retainers</option>
                    <option value="No Structured Offer Yet">No structured offer yet</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-xs font-mono text-[#8C8685] uppercase mb-1.5 font-bold">How do you currently acquire most clients? *</label>
                <select
                  v-model="form.clientAcquisitionChannel"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#FF7F11]"
                >
                  <option value="" disabled>Select primary acquisition method</option>
                  <option value="Word of mouth / Referrals">Word of mouth / Organic referrals only</option>
                  <option value="Social Media Content">Posting content on LinkedIn / Instagram</option>
                  <option value="Direct Outreach">Direct cold messaging</option>
                  <option value="Paid Ads">Paid Advertising</option>
                  <option value="No Consistent Channel">No consistent channel currently</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-mono text-[#8C8685] uppercase mb-1.5 font-bold">What is your single biggest bottleneck right now? *</label>
                <textarea
                  v-model="form.biggestBottleneck"
                  rows="2"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#FF7F11]"
                  placeholder="e.g. Unpredictable leads, charging too little, delivery exhaustion, weak conversion..."
                ></textarea>
              </div>

              <div class="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  class="text-xs text-[#8C8685] hover:text-[#FF7F11] font-semibold cursor-pointer"
                  @click="step = 1"
                >
                  &larr; Back
                </button>
                <UiButton
                  type="button"
                  variant="primary"
                  size="md"
                  :disabled="!form.expertiseDescription || !form.currentMonthlyRevenue || !form.biggestBottleneck"
                  @click="step = 3"
                >
                  Continue to Goals &rarr;
                </UiButton>
              </div>
            </div>

            <!-- SECTION 3: Goals, Program Track & Commitment -->
            <div v-show="step === 3" class="space-y-5 animate-fadeIn">
              <div>
                <label class="block text-xs font-mono text-[#8C8685] uppercase mb-1.5 font-bold">What is your primary 12-month revenue goal? *</label>
                <input
                  v-model="form.targetRevenue"
                  type="text"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#FF7F11]"
                  placeholder="e.g. ₹5 Lakh / month or $10,000 USD / month consistently"
                />
              </div>

              <div>
                <label class="block text-xs font-mono text-[#8C8685] uppercase mb-1.5 font-bold">Which Digital Coach program track are you applying for? *</label>
                <select
                  v-model="form.programInterest"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#FF7F11]"
                >
                  <option value="" disabled>Select track</option>
                  <option value="Digital Coach Accelerator">Digital Coach Accelerator (12-Week Intensive)</option>
                  <option value="Growth Lab">Growth Lab (Mastermind & Systems)</option>
                  <option value="Private Advisory">Private Strategic Advisory (1-on-1 Founder Partnership)</option>
                  <option value="Done With You">Done With You (Hands-On Architecture)</option>
                  <option value="Done For You">Done For You (Complete Ecosystem Build)</option>
                  <option value="Not Sure - Recommend Best Track">Not sure yet — recommend based on my audit</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-mono text-[#8C8685] uppercase mb-1.5 font-bold">How many hours per week can you commit to building your business systems? *</label>
                <select
                  v-model="form.timeCommitment"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#FF7F11]"
                >
                  <option value="" disabled>Select weekly commitment</option>
                  <option value="5-10 hours/week">5–10 hours / week</option>
                  <option value="10-20 hours/week">10–20 hours / week</option>
                  <option value="Full Time Focus">Full-time dedicated focus (20+ hours / week)</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-mono text-[#8C8685] uppercase mb-1.5 font-bold">Investment Readiness *</label>
                <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-2">
                  <label class="flex items-start gap-2.5 text-xs text-[#524F4E] cursor-pointer">
                    <input
                      v-model="form.investmentReady"
                      type="checkbox"
                      required
                      class="mt-0.5 rounded text-[#FF7F11] focus:ring-[#FF7F11]"
                    />
                    <span>
                      I understand that Digital Coach is a premium business implementation partnership, not a free course, and I am prepared to invest capital and effort into my business growth.
                    </span>
                  </label>
                </div>
              </div>

              <div class="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  class="text-xs text-[#8C8685] hover:text-[#FF7F11] font-semibold cursor-pointer"
                  @click="step = 2"
                >
                  &larr; Back
                </button>
                <UiButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  :loading="isSubmitting"
                  :disabled="!form.targetRevenue || !form.programInterest || !form.investmentReady"
                >
                  Submit Application for Review &rarr;
                </UiButton>
              </div>
            </div>
          </form>
        </div>

        <!-- Success Confirmation State -->
        <div v-else class="text-center space-y-6 py-10 animate-fadeIn">
          <div class="w-16 h-16 rounded-full bg-[#FFF8F2] border border-[#FF7F11] text-[#FF7F11] flex items-center justify-center mx-auto text-3xl font-bold">
            &check;
          </div>

          <div class="space-y-2">
            <h2 class="font-display font-black text-3xl text-[#1A1A1A]">Application Received</h2>
            <p class="text-sm text-[#524F4E] max-w-md mx-auto">
              Thank you, <strong class="text-[#FF7F11]">{{ form.fullName }}</strong>. Our advisory team will review your business background and reach out via email or WhatsApp within 24 business hours.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] max-w-lg mx-auto text-xs text-[#524F4E] space-y-2 text-left shadow-sm">
            <div class="font-bold text-[#FF7F11] font-mono uppercase">What Happens Next:</div>
            <ol class="space-y-1.5 list-decimal list-inside text-[#524F4E]">
              <li>Our team reviews your experience, positioning, and revenue stage.</li>
              <li>If qualified, we will invite you to a 30-minute diagnostic session.</li>
              <li>We will map out your exact 9-layer implementation blueprint.</li>
            </ol>
          </div>

          <UiButton to="/" variant="secondary" size="md">
            Return to Homepage &rarr;
          </UiButton>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
import { leadService } from '~/services/leadService'
import { useAnalytics } from '~/composables/useAnalytics'

const { track } = useAnalytics()

const step = ref(1)
const isSubmitting = ref(false)
const isSubmitted = ref(false)

const form = reactive({
  fullName: '',
  email: '',
  whatsapp: '',
  websiteOrLinkedIn: '',
  primaryRole: '',
  yearsOfExperience: '',
  expertiseDescription: '',
  currentMonthlyRevenue: '',
  currentOfferFormat: '',
  clientAcquisitionChannel: '',
  biggestBottleneck: '',
  targetRevenue: '',
  programInterest: '',
  timeCommitment: '',
  investmentReady: false
})

const handleSubmit = async () => {
  isSubmitting.value = true
  await leadService.submitApplication(form)
  track('application_submitted', {
    role: form.primaryRole,
    program: form.programInterest
  })
  isSubmitting.value = false
  isSubmitted.value = true
}

useSeoMeta({
  title: 'Apply to Work With Digital Coach — Strategic Advisory',
  description: 'Submit your qualification application to partner with Digital Coach and build the 9-layer business operating system behind your expertise.'
})
</script>
