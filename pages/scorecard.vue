<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] min-h-screen text-[#1A1A1A]">
    <UiContainer size="lg">
      <!-- State 1: Explanatory Landing Page & Diagnostic Trigger -->
      <div v-if="!isQuizStarted && !isCompleted" class="space-y-16">
        <!-- Hero Header -->
        <div class="space-y-6 text-center max-w-3xl mx-auto">
          <UiBadge variant="amber" :dot="true">100% Free &bull; 5-Minute Assessment</UiBadge>

          <h1 class="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight leading-[1.08]">
            DISCOVER WHAT IS ACTUALLY HOLDING YOUR <br />
            <span class="text-[#FF7F11]">EXPERT BUSINESS BACK.</span>
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] leading-relaxed">
            Answer 8 focused diagnostic questions about your positioning, offer architecture, client acquisition, and business systems. Receive an immediate personalized Growth Score and actionable bottleneck analysis.
          </p>

          <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              class="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FF7F11] hover:bg-[#FF9334] text-white font-bold text-lg shadow-xl shadow-[#FF7F11]/25 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
              @click="startQuiz"
            >
              Start Free Growth Scorecard &rarr;
            </button>
          </div>

          <div class="flex items-center justify-center gap-6 text-xs text-[#8C8685] font-mono pt-2 font-semibold">
            <span>&check; 8 Diagnostic Questions</span>
            <span>&check; Instant Results</span>
            <span>&check; Zero Spam</span>
          </div>
        </div>

        <!-- 3-Column Value Stack -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 rounded-3xl bg-white border border-[#EAE4E4] space-y-3 shadow-md">
            <div class="w-10 h-10 rounded-xl bg-[#FFF8F2] border border-[#FF7F11]/40 flex items-center justify-center text-[#FF7F11] font-bold font-mono">
              01
            </div>
            <h3 class="font-display text-xl font-bold text-[#1A1A1A]">Why This Exists</h3>
            <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
              Most coaches spend months fixing the wrong symptom—posting more social media content when the real bottleneck is an underpriced or unscalable offer.
            </p>
          </div>

          <div class="p-6 rounded-3xl bg-white border border-[#EAE4E4] space-y-3 shadow-md">
            <div class="w-10 h-10 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] flex items-center justify-center text-[#FF7F11] font-bold font-mono">
              02
            </div>
            <h3 class="font-display text-xl font-bold text-[#1A1A1A]">What It Evaluates</h3>
            <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
              Your maturity across 8 core dimensions: Market Positioning, Offer Structure, IP Authority, Inbound Pipeline, Conversion Rate, Delivery Leverage, CRM Systems, and AI.
            </p>
          </div>

          <div class="p-6 rounded-3xl bg-white border border-[#EAE4E4] space-y-3 shadow-md">
            <div class="w-10 h-10 rounded-xl bg-[#FFF8F2] border border-[#FF7F11]/40 flex items-center justify-center text-[#FF7F11] font-bold font-mono">
              03
            </div>
            <h3 class="font-display text-xl font-bold text-[#1A1A1A]">What You Receive</h3>
            <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
              A comprehensive Business Growth Score (0–100), visual pillar breakdown, identification of your primary growth bottleneck, and a tailored 30-day action matrix.
            </p>
          </div>
        </div>

        <!-- Privacy Reassurance -->
        <div class="p-8 rounded-3xl bg-white border border-[#EAE4E4] text-center max-w-3xl mx-auto space-y-3 shadow-sm">
          <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold">Privacy & Data Governance</div>
          <p class="text-xs text-[#524F4E] leading-relaxed">
            Your responses are kept strictly confidential and used solely to calculate your diagnostic benchmark. We will never sell your information or spam your inbox with high-pressure sales calls.
          </p>
        </div>
      </div>

      <!-- State 2: Interactive Diagnostic Quiz Engine -->
      <div v-else-if="isQuizStarted && !isCompleted" class="max-w-3xl mx-auto">
        <!-- Progress Bar & Stepper -->
        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-10 shadow-xl space-y-8">
          <div class="space-y-3">
            <div class="flex items-center justify-between text-xs font-mono text-[#8C8685]">
              <span>Question {{ currentQuestionIndex + 1 }} of {{ questions.length }}</span>
              <span class="text-[#FF7F11] font-bold">{{ Math.round(((currentQuestionIndex + 1) / questions.length) * 100) }}% Complete</span>
            </div>
            <div class="w-full h-2 bg-[#F5EFEF] rounded-full overflow-hidden border border-[#EAE4E4]">
              <div
                class="h-full bg-[#FF7F11] transition-all duration-300 shadow-[0_0_8px_#FF7F11]"
                :style="{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }"
              ></div>
            </div>
          </div>

          <!-- Question Content -->
          <div class="space-y-6">
            <div class="space-y-2">
              <span class="text-xs font-mono uppercase text-[#FF7F11] font-bold bg-[#FFF8F2] px-2.5 py-1 rounded-full border border-[#FF7F11]/40">
                Pillar: {{ currentQuestion.pillar.toUpperCase() }}
              </span>
              <h2 class="font-display text-2xl sm:text-3xl font-bold text-[#1A1A1A] pt-2">
                {{ currentQuestion.question }}
              </h2>
              <p class="text-xs sm:text-sm text-[#524F4E]">
                {{ currentQuestion.description }}
              </p>
            </div>

            <!-- Options Grid -->
            <div class="space-y-3 pt-2">
              <button
                v-for="opt in currentQuestion.options"
                :key="opt.text"
                type="button"
                :class="[
                  'w-full p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 flex items-start justify-between gap-4 group cursor-pointer',
                  selectedAnswers[currentQuestion.id] === opt.score
                    ? 'bg-[#FFF8F2] text-[#1A1A1A] border-[#FF7F11] shadow-md'
                    : 'bg-[#FBF6F6] border-[#EAE4E4] hover:border-[#FF7F11]/60 hover:bg-white text-[#1A1A1A]'
                ]"
                @click="selectOption(opt.score)"
              >
                <div class="space-y-1">
                  <div class="text-sm sm:text-base font-semibold" :class="selectedAnswers[currentQuestion.id] === opt.score ? 'text-[#FF7F11]' : 'text-[#1A1A1A] group-hover:text-[#FF7F11]'">
                    {{ opt.text }}
                  </div>
                  <div v-if="opt.hint" class="text-xs" :class="selectedAnswers[currentQuestion.id] === opt.score ? 'text-[#524F4E]' : 'text-[#8C8685]'">
                    &bull; {{ opt.hint }}
                  </div>
                </div>
                <div
                  class="w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5"
                  :class="selectedAnswers[currentQuestion.id] === opt.score ? 'border-[#FF7F11] bg-[#FF7F11] text-white font-bold text-xs' : 'border-[#D5CDCD]'"
                >
                  <span v-if="selectedAnswers[currentQuestion.id] === opt.score">&check;</span>
                </div>
              </button>
            </div>
          </div>

          <!-- Navigation buttons -->
          <div class="flex items-center justify-between pt-6 border-t border-[#EAE4E4]">
            <button
              type="button"
              class="text-xs text-[#8C8685] hover:text-[#FF7F11] font-semibold disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              :disabled="currentQuestionIndex === 0"
              @click="currentQuestionIndex--"
            >
              &larr; Previous Question
            </button>

            <UiButton
              v-if="currentQuestionIndex < questions.length - 1"
              variant="primary"
              size="md"
              :disabled="selectedAnswers[currentQuestion.id] === undefined"
              @click="currentQuestionIndex++"
            >
              Next Question &rarr;
            </UiButton>

            <UiButton
              v-else
              variant="primary"
              size="md"
              :disabled="selectedAnswers[currentQuestion.id] === undefined"
              @click="showLeadModal = true"
            >
              Compile My Report &rarr;
            </UiButton>
          </div>
        </div>

        <!-- Lead Capture Form Modal -->
        <div
          v-if="showLeadModal"
          class="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
        >
          <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-10 max-w-lg w-full shadow-2xl space-y-6 animate-fadeIn">
            <div class="space-y-2 text-center">
              <UiBadge variant="amber">Diagnostic Complete</UiBadge>
              <h3 class="font-display text-2xl font-bold text-[#1A1A1A]">Where should we deliver your benchmark report?</h3>
              <p class="text-xs text-[#524F4E]">Enter your details to generate your live dashboard and save your score.</p>
            </div>

            <form class="space-y-4" @submit.prevent="submitAndReveal">
              <div>
                <label class="block text-xs font-mono text-[#8C8685] uppercase mb-1.5 font-bold">Full Name *</label>
                <input
                  v-model="leadForm.fullName"
                  type="text"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#FF7F11]"
                  placeholder="e.g. Rahul Sharma"
                />
              </div>

              <div>
                <label class="block text-xs font-mono text-[#8C8685] uppercase mb-1.5 font-bold">Work Email Address *</label>
                <input
                  v-model="leadForm.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#FF7F11]"
                  placeholder="rahul@example.com"
                />
              </div>

              <div>
                <label class="block text-xs font-mono text-[#8C8685] uppercase mb-1.5 font-bold">WhatsApp / Phone (Optional)</label>
                <input
                  v-model="leadForm.whatsapp"
                  type="tel"
                  class="w-full px-4 py-3 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#FF7F11]"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div class="pt-2">
                <UiButton type="submit" variant="primary" size="lg" block :loading="isSubmitting">
                  View My Growth Report &rarr;
                </UiButton>
              </div>

              <div class="text-[11px] text-[#8C8685] text-center font-mono">
                Strict privacy. Zero spam. Immediate on-screen results.
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- State 3: Completed Results Dashboard -->
      <div v-else-if="isCompleted && scoreResult" class="max-w-4xl mx-auto space-y-10 animate-fadeIn">
        <!-- Results Hero Banner -->
        <div class="bg-white border border-[#FF7F11]/40 rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-[#EAE4E4]">
            <div class="space-y-1 text-center sm:text-left">
              <UiBadge variant="amber">Diagnostic Benchmark Report</UiBadge>
              <h2 class="font-display text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                Report Prepared for {{ leadForm.fullName }}
              </h2>
              <p class="text-xs text-[#8C8685] font-mono">Generated: {{ new Date().toLocaleDateString() }}</p>
            </div>
            <div class="text-center sm:text-right bg-[#FFF8F2] p-5 rounded-2xl border border-[#FF7F11]/30 shadow-sm">
              <div class="text-xs font-mono uppercase text-[#8C8685] font-bold">Overall Growth Score</div>
              <div class="text-4xl sm:text-5xl font-black font-display text-[#FF7F11]">
                {{ scoreResult.overallScore }}<span class="text-base text-[#8C8685] font-normal">/100</span>
              </div>
            </div>
          </div>

          <!-- Primary Bottleneck Callout -->
          <div class="p-6 rounded-2xl bg-red-50/80 border border-red-200 space-y-2">
            <div class="text-xs font-mono uppercase text-red-600 font-bold flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              Primary Revenue Constraint Detected
            </div>
            <div class="text-lg font-black text-[#1A1A1A] font-display">
              {{ scoreResult.primaryBottleneck }}
            </div>
            <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed font-medium">
              Based on your answers, this constraint is currently the primary bottleneck holding back your conversion predictability and founder leverage. Fixing this will yield 80% of your business growth.
            </p>
          </div>

          <!-- Pillar Score Grid -->
          <div class="space-y-4">
            <div class="text-sm font-bold text-[#1A1A1A] font-display">Diagnostic Pillar Breakdown</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                v-for="(score, pillar) in scoreResult.pillarScores"
                :key="pillar"
                class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-2 shadow-sm"
              >
                <div class="flex items-center justify-between text-xs">
                  <span class="font-mono uppercase text-[#1A1A1A] font-bold">{{ pillar }}</span>
                  <span class="font-bold font-mono" :class="score < 50 ? 'text-red-600' : score < 75 ? 'text-amber-600' : 'text-[#FF7F11]'">
                    {{ score }}%
                  </span>
                </div>
                <div class="w-full h-1.5 bg-white rounded-full overflow-hidden border border-[#EAE4E4]">
                  <div
                    class="h-full rounded-full"
                    :class="score < 50 ? 'bg-red-500' : score < 75 ? 'bg-amber-500' : 'bg-[#FF7F11]'"
                    :style="{ width: `${score}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Recommended Next Step & CTA -->
          <div class="pt-6 border-t border-[#EAE4E4] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div class="space-y-1 text-center sm:text-left">
              <div class="text-xs font-mono uppercase text-[#8C8685] font-bold">Recommended Program Track:</div>
              <div class="text-lg font-black text-[#FF7F11] font-display">{{ scoreResult.recommendedProgram }}</div>
            </div>

            <div class="flex items-center gap-3 w-full sm:w-auto">
              <UiButton to="/apply" variant="primary" size="lg" custom-class="shadow-lg shadow-[#FF7F11]/25 w-full sm:w-auto">
                Apply for {{ scoreResult.recommendedProgram }} &rarr;
              </UiButton>
              <UiButton to="/workshop" variant="secondary" size="lg">
                Join Workshop
              </UiButton>
            </div>
          </div>
        </div>

        <div class="text-center">
          <button
            type="button"
            class="text-xs text-[#8C8685] hover:text-[#FF7F11] font-semibold underline underline-offset-4 cursor-pointer"
            @click="retakeQuiz"
          >
            Retake the Business Growth Diagnostic
          </button>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
import { useScorecard } from '~/composables/useScorecard'
import { leadService } from '~/services/leadService'
import { useAnalytics } from '~/composables/useAnalytics'

const { questions, calculateResults } = useScorecard()
const { track } = useAnalytics()

const isQuizStarted = ref(false)
const currentQuestionIndex = ref(0)
const selectedAnswers = ref<Record<string, number>>({})
const showLeadModal = ref(false)
const isSubmitting = ref(false)
const isCompleted = ref(false)
const scoreResult = ref<any>(null)

const leadForm = reactive({
  fullName: '',
  email: '',
  whatsapp: ''
})

const currentQuestion = computed(() => questions[currentQuestionIndex.value])

const startQuiz = () => {
  isQuizStarted.value = true
  track('scorecard_started')
}

const selectOption = (score: number) => {
  selectedAnswers.value[currentQuestion.value.id] = score
  if (currentQuestionIndex.value < questions.length - 1) {
    currentQuestionIndex.value++
  } else {
    showLeadModal.value = true
  }
}

const submitAndReveal = async () => {
  isSubmitting.value = true
  const results = calculateResults(selectedAnswers.value)
  scoreResult.value = results

  await leadService.submitScorecardLead({
    fullName: leadForm.fullName,
    email: leadForm.email,
    whatsapp: leadForm.whatsapp,
    overallScore: results.overallScore,
    pillarScores: results.pillarScores,
    primaryBottleneck: results.primaryBottleneck
  })

  track('scorecard_completed', {
    score: results.overallScore,
    bottleneck: results.primaryBottleneck
  })

  isSubmitting.value = false
  showLeadModal.value = false
  isCompleted.value = true
}

const retakeQuiz = () => {
  selectedAnswers.value = {}
  currentQuestionIndex.value = 0
  isCompleted.value = false
  isQuizStarted.value = false
}

useSeoMeta({
  title: 'Business Growth Scorecard — 5-Minute Diagnostic Assessment',
  description: 'Take the free Digital Coach Business Growth Scorecard to evaluate your positioning, offer leverage, pipeline predictability, and systems maturity.'
})
</script>
