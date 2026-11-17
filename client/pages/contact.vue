<template>
  <div class="py-28 md:py-36 bg-[#FAFAFA] min-h-screen text-[#0D1431]">
    <UiContainer size="md">
      <div class="space-y-14">
        <!-- Header -->
        <div class="space-y-4 text-center max-w-xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171844] text-[#F8D78B] text-xs font-semibold uppercase tracking-wider border border-[#F8D78B]/30">
            Get in Touch
          </div>
          <h1 class="font-display font-extrabold text-4xl sm:text-5xl text-[#171844] tracking-tight">
            Contact Narayan Presence
          </h1>
          <p class="text-base text-[#352D47] leading-relaxed">
            Have questions about private coaching, retreat admissions, or corporate workshops? We would love to connect.
          </p>
        </div>

        <!-- Contact Form Card -->
        <div class="bg-white border border-[#EAE2D4] rounded-3xl p-8 sm:p-12 shadow-sm">
          <div v-if="!isSubmitted" class="space-y-6">
            <form class="space-y-5" @submit.prevent="handleSubmit">
              <div>
                <label class="block text-xs font-mono text-[#8C6D57] uppercase mb-1.5 font-bold">Your Name *</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-[#EAE2D4] text-[#171844] text-sm focus:outline-none focus:border-[#171844]"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label class="block text-xs font-mono text-[#8C6D57] uppercase mb-1.5 font-bold">Email Address *</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-[#EAE2D4] text-[#171844] text-sm focus:outline-none focus:border-[#171844]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label class="block text-xs font-mono text-[#8C6D57] uppercase mb-1.5 font-bold">Area of Interest</label>
                <select
                  v-model="form.interest"
                  class="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-[#EAE2D4] text-[#171844] text-sm focus:outline-none focus:border-[#171844]"
                >
                  <option value="coaching">1-on-1 Coaching</option>
                  <option value="courses">Courses & Masterclasses</option>
                  <option value="workshops">Workshops & Retreats</option>
                  <option value="membership">Presence Circle Membership</option>
                  <option value="general">General Inquiries</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-mono text-[#8C6D57] uppercase mb-1.5 font-bold">Message *</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="4"
                  class="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-[#EAE2D4] text-[#171844] text-sm focus:outline-none focus:border-[#171844]"
                  placeholder="Share a brief overview of what you're seeking guidance on..."
                ></textarea>
              </div>

              <div class="pt-2">
                <button
                  type="submit"
                  class="w-full py-4 rounded-xl bg-[#171844] hover:bg-[#242658] text-[#F8D78B] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                >
                  Send Message &rarr;
                </button>
              </div>
            </form>
          </div>

          <div v-else class="text-center py-12 space-y-4">
            <div class="w-12 h-12 rounded-full bg-[#35D9B0]/20 text-[#35D9B0] mx-auto flex items-center justify-center font-bold text-xl">
              ✓
            </div>
            <h3 class="text-2xl font-bold text-[#171844]">Message Received</h3>
            <p class="text-sm text-[#352D47] max-w-sm mx-auto">
              Thank you for reaching out. A member of our advisory team will respond within 24-48 business hours.
            </p>
          </div>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const isSubmitted = ref(false)
const form = reactive({
  name: '',
  email: '',
  interest: 'coaching',
  message: ''
})

const handleSubmit = () => {
  isSubmitted.value = true
}

useSeoMeta({
  title: 'Contact — Narayan Presence',
  description: 'Reach out to Narayan Presence for mentorship, inquiries, and admissions.'
})
</script>
