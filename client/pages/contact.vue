<template>
  <div class="narayan-subpage contact-page">
    <section class="phero dark grain">
      <i class="aurora" aria-hidden="true"><b></b><b></b><b></b></i>
      <span class="mandala" aria-hidden="true"><svg viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle r="98" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <circle r="80" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <circle r="56" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <circle r="36" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" transform="rotate(45)" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" transform="rotate(90)" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" transform="rotate(135)" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
        </svg></span>
      <div class="wrap">
        <p class="crumb"><NuxtLink to="/">Home</NuxtLink> / Connect / Contact</p>
        <p class="eyebrow">Contact &amp; Enquiries</p>
        <h1 style="margin-top:22px">Tell us what you are <em>looking for.</em></h1>
        <p class="lead hero-in">
          Share whether you are exploring personal growth, coaching support or business education. We use your note to understand what you need and reply with a relevant next step.
        </p>
      </div>
    </section>

    <UiPageBreadcrumb
      :items="[
        { label: 'Connect & Learn', to: '/contact' },
        { label: 'Contact Us' }
      ]"
      :prev="{ label: 'FAQs', to: '/faqs' }"
      :next="{ label: 'Privacy Policy', to: '/privacy-policy' }"
    />

    <section class="sec">
      <div class="wrap split">
        <div>
          <p class="eyebrow">Send an enquiry</p>
          <h2 class="h2" style="font-size:clamp(30px,4vw,48px)">One short note is enough.</h2>
          <div class="mt-6 space-y-3 text-sm text-[#4A4B68]">
            <p><strong>Location:</strong> Ahmedabad, Gujarat, India (Online worldwide)</p>
            <p><strong>Support:</strong> support@thenarayanpresence.com</p>
            <p><strong>Response Time:</strong> Within 1–2 business days</p>
          </div>
          <p class="small" style="margin-top:24px;color:#8C6D57">
            We hold all shared contexts in strict confidence and use your note solely to reply to your enquiry.
          </p>
        </div>

        <!-- Enquiry Form -->
        <form class="form contact-form p-5 sm:p-8 rounded-3xl border shadow-sm space-y-4" @submit.prevent="handleSubmit">
          <label class="block text-xs font-bold uppercase tracking-wider form-label">
            Your Name
            <input v-model="form.name" required class="mt-1 block w-full px-4 py-2.5 rounded-xl border form-input text-sm focus:border-[#D9AA55] focus:outline-none" />
          </label>
          <label class="block text-xs font-bold uppercase tracking-wider form-label">
            Your Email
            <input v-model="form.email" type="email" required class="mt-1 block w-full px-4 py-2.5 rounded-xl border form-input text-sm focus:border-[#D9AA55] focus:outline-none" />
          </label>
          <label class="block text-xs font-bold uppercase tracking-wider form-label">
            I am asking about
            <select v-model="form.topic" class="mt-1 block w-full px-4 py-2.5 rounded-xl border form-input text-sm focus:border-[#D9AA55] focus:outline-none">
              <option>A programme in Presence Academy</option>
              <option>A programme in Presence Business</option>
              <option>1-to-1 Coaching with Ranu Patel</option>
              <option>The 1 AM Reset Blueprint Intensive</option>
              <option>Registering interest in Presence Circle</option>
              <option>General question</option>
            </select>
          </label>
          <label class="block text-xs font-bold uppercase tracking-wider form-label">
            Your Note
            <textarea v-model="form.message" rows="4" required class="mt-1 block w-full px-4 py-2.5 rounded-xl border form-input text-sm focus:border-[#D9AA55] focus:outline-none"></textarea>
          </label>

          <div class="pt-2">
            <button type="submit" class="btn form-submit-btn w-full text-center">
              Send Enquiry &rarr;
            </button>
            <p v-if="submitted" class="mt-3 text-xs font-semibold text-[#127255] text-center">
              Thank you. Your message has been recorded; we will reply shortly.
            </p>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  topic: 'A programme in Presence Academy',
  message: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
}

useHead({
  title: 'Contact The Narayan Presence · Ahmedabad, Gujarat, India',
  meta: [
    { name: 'description', content: 'Send an enquiry to The Narayan Presence. Ask about 1-to-1 coaching with Ranu Patel, the 1 AM Reset Blueprint, or Academy cohorts.' },
    { property: 'og:title', content: 'Contact The Narayan Presence | Sarva Kalyan Global' },
    { property: 'og:description', content: 'Send a short note regarding programmes, coaching, or partnership.' },
    { property: 'og:image', content: 'https://narayanpresence.com/ranu.webp' }
  ],
  link: [{ rel: 'stylesheet', href: '/style.css' }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        'name': 'Contact The Narayan Presence',
        'description': 'Contact page for inquiries regarding personal clarity coaching and workshops.',
        'mainEntity': {
          '@type': 'EducationalOrganization',
          'name': 'The Narayan Presence',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Ahmedabad',
            'addressRegion': 'Gujarat',
            'addressCountry': 'IN'
          }
        }
      })
    }
  ]
})
</script>

<style scoped>
.narayan-subpage {
  font-family: 'DM Sans', -apple-system, sans-serif;
  color: var(--body);
}
.narayan-subpage h1, .narayan-subpage h2, .narayan-subpage h3 {
  font-family: 'Fraunces', Georgia, serif;
}

.contact-form {
  background: var(--card);
  border-color: var(--line);
  transition: all 0.3s ease;
}
:root[data-theme="dark"] .contact-form {
  background: #141845;
  border-color: rgba(217, 170, 85, 0.25);
  box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.4);
}
:root[data-theme="light"] .contact-form {
  background: #ffffff;
  border-color: #EAE2D4;
}

.form-label {
  color: var(--fg);
}
:root[data-theme="dark"] .form-label {
  color: #F8D78B !important;
}
:root[data-theme="light"] .form-label {
  color: #171848 !important;
}

.form-input {
  background: var(--bg);
  color: var(--fg);
  border-color: var(--line);
}
:root[data-theme="dark"] .form-input {
  background: #0f1233;
  color: #F8F5EF;
  border-color: rgba(217, 170, 85, 0.3);
}
:root[data-theme="light"] .form-input {
  background: #ffffff;
  color: #171848;
  border-color: #EAE2D4;
}

.form-submit-btn {
  font-weight: 700;
  border-radius: 999px;
  padding: 14px 28px;
}
:root[data-theme="dark"] .form-submit-btn {
  background: #D9AA55;
  color: #0f1233;
}
:root[data-theme="dark"] .form-submit-btn:hover {
  background: #f0c36d;
}
:root[data-theme="light"] .form-submit-btn {
  background: #171844;
  color: #F8D78B;
}
:root[data-theme="light"] .form-submit-btn:hover {
  background: #242658;
}
</style>