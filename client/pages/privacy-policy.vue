<template>
  <div class="narayan-subpage privacy-page">
    <!-- Hero Header with Aurora & Mandala -->
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
        <p class="crumb"><NuxtLink to="/">Home</NuxtLink> / Legal / Privacy Policy</p>
        <div class="flex items-center flex-wrap gap-2.5 mt-2">
          <span class="px-3 py-1 rounded-full bg-[#D9AA55]/20 text-[#F8D78B] border border-[#D9AA55]/40 text-xs font-bold uppercase tracking-wider">
            Trust &amp; Governance
          </span>
          <span class="text-xs text-[#c4c4e2]">
            Last Updated: July, 2026
          </span>
        </div>
        <h1 style="margin-top:22px">Privacy <em>Policy</em></h1>
        <p class="lead hero-in max-w-3xl">
          How The Narayan Presence (operated under Sarva Kalyan Global) collects, uses, stores, and protects your personal information with full transparency and integrity.
        </p>
      </div>
    </section>

    <!-- Breadcrumb & Linear Pagination -->
    <UiPageBreadcrumb
      :items="[
        { label: 'Legal & Safety', to: '/privacy-policy' },
        { label: 'Privacy Policy' }
      ]"
      :prev="{ label: 'Contact Us', to: '/contact' }"
      :next="{ label: 'Terms & Conditions', to: '/terms' }"
    />

    <!-- Main Content Body -->
    <section class="sec policy-section">
      <div class="wrap" style="max-width:920px">
        <!-- Overview Notice Card -->
        <div class="policy-card p-6 sm:p-8 shadow-sm mb-12">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-2xl bg-[#171848] text-[#F8D78B] border border-[#D9AA55]/40 flex items-center justify-center shrink-0 shadow-md">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h2 class="text-xl sm:text-2xl policy-heading font-bold">Our Commitment to Your Privacy</h2>
              <p class="text-sm sm:text-base policy-text mt-2.5 leading-relaxed">
                <strong class="text-[var(--fg)]">The Narayan Presence</strong> (“we,” “our,” or “us”), operated under <strong class="text-[var(--fg)]">Sarva Kalyan Global</strong>, respects your privacy and is committed to protecting the personal information you share with us.
              </p>
              <p class="text-sm policy-text mt-2 leading-relaxed">
                This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website, register for workshops, book sessions, submit forms, or interact with our services.
              </p>
            </div>
          </div>
        </div>

        <div class="space-y-12">
          <!-- Section 1: Information We Collect -->
          <div class="space-y-5">
            <div class="flex items-center gap-3">
              <span class="policy-num">01</span>
              <h2 class="text-2xl policy-heading font-bold">Information We Collect</h2>
            </div>
            <p class="text-sm sm:text-base policy-text leading-relaxed">
              We collect information to deliver our programmes, answer your questions, and facilitate continuous learning. This happens in two main ways:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <!-- Voluntary -->
              <div class="policy-card p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div class="text-xs font-bold uppercase tracking-wider text-[#D9AA55] mb-2 flex items-center gap-2">
                    <svg class="w-4 h-4 text-[#D9AA55]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Information You Voluntarily Provide</span>
                  </div>
                  <ul class="space-y-2 text-sm policy-text mt-3">
                    <li class="flex items-start gap-2">
                      <span class="text-[#D9AA55] font-bold">✓</span>
                      <span><strong class="text-[var(--fg)]">Full Name</strong> &amp; Preferred Form of Address</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-[#D9AA55] font-bold">✓</span>
                      <span><strong class="text-[var(--fg)]">Email Address</strong> (for schedules and materials)</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-[#D9AA55] font-bold">✓</span>
                      <span><strong class="text-[var(--fg)]">Phone Number</strong> (for WhatsApp reminders &amp; links)</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-[#D9AA55] font-bold">✓</span>
                      <span><strong class="text-[var(--fg)]">City or Location</strong> &amp; Time Zone</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-[#D9AA55] font-bold">✓</span>
                      <span><strong class="text-[var(--fg)]">Workshop Registration Details</strong></span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-[#D9AA55] font-bold">✓</span>
                      <span><strong class="text-[var(--fg)]">Contact Form Submissions</strong> &amp; Booking Requests</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-[#D9AA55] font-bold">✓</span>
                      <span><strong class="text-[var(--fg)]">Messages &amp; Inquiries</strong> shared with our team</span>
                    </li>
                  </ul>
                </div>
                <div class="mt-4 pt-3 border-t border-[var(--line)] text-xs policy-muted leading-relaxed">
                  <strong class="text-[var(--fg)]">Payment Information:</strong> For paid courses, transactions are processed securely through certified third-party payment gateways. We <em>do not</em> store full card or payment credentials on our own servers.
                </div>
              </div>

              <!-- Technical -->
              <div class="policy-card p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div class="text-xs font-bold uppercase tracking-wider text-[#D9AA55] mb-2 flex items-center gap-2">
                    <svg class="w-4 h-4 text-[#D9AA55]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Technical Information Collected Automatically</span>
                  </div>
                  <ul class="space-y-2 text-sm policy-text mt-3">
                    <li class="flex items-start gap-2">
                      <span class="text-[#D9AA55] font-bold">✓</span>
                      <span><strong class="text-[var(--fg)]">IP Address</strong> and general geographic region</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-[#D9AA55] font-bold">✓</span>
                      <span><strong class="text-[var(--fg)]">Browser Type</strong> and software version</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-[#D9AA55] font-bold">✓</span>
                      <span><strong class="text-[var(--fg)]">Device Information</strong> (operating system, screen resolution)</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-[#D9AA55] font-bold">✓</span>
                      <span><strong class="text-[var(--fg)]">Website Usage Data</strong> (pages visited, interaction time)</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-[#D9AA55] font-bold">✓</span>
                      <span><strong class="text-[var(--fg)]">Cookies &amp; Analytics Information</strong> for platform performance</span>
                    </li>
                  </ul>
                </div>
                <div class="mt-4 pt-3 border-t border-[var(--line)] text-xs policy-muted leading-relaxed">
                  Technical telemetry is used solely to maintain stability, troubleshoot browser bugs, and understand navigation flows.
                </div>
              </div>
            </div>
          </div>

          <!-- Section 2: How We Use Your Information -->
          <div class="space-y-5">
            <div class="flex items-center gap-3">
              <span class="policy-num">02</span>
              <h2 class="text-2xl policy-heading font-bold">How We Use Your Information</h2>
            </div>
            <p class="text-sm sm:text-base policy-text leading-relaxed">
              We use collected information strictly to operate educational programmes, support students, and communicate transparently:
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-2">
              <div class="policy-card p-4 flex items-start gap-3">
                <span class="text-[#D9AA55] text-lg leading-none">✦</span>
                <span class="text-sm policy-text">Respond to inquiries, questions, and support messages</span>
              </div>
              <div class="policy-card p-4 flex items-start gap-3">
                <span class="text-[#D9AA55] text-lg leading-none">✦</span>
                <span class="text-sm policy-text">Schedule 1-to-1 coaching sessions and intensive workshops</span>
              </div>
              <div class="policy-card p-4 flex items-start gap-3">
                <span class="text-[#D9AA55] text-lg leading-none">✦</span>
                <span class="text-sm policy-text">Deliver requested services, including sending joining links and session reminders via Email and WhatsApp</span>
              </div>
              <div class="policy-card p-4 flex items-start gap-3">
                <span class="text-[#D9AA55] text-lg leading-none">✦</span>
                <span class="text-sm policy-text">Process payments for paid courses, workbooks, and mentorship programs</span>
              </div>
              <div class="policy-card p-4 flex items-start gap-3">
                <span class="text-[#D9AA55] text-lg leading-none">✦</span>
                <span class="text-sm policy-text">Improve our website ergonomics and overall learner experience</span>
              </div>
              <div class="policy-card p-4 flex items-start gap-3">
                <span class="text-[#D9AA55] text-lg leading-none">✦</span>
                <span class="text-sm policy-text">Provide timely updates regarding new cohort dates, events, or workshops</span>
              </div>
              <div class="policy-card p-4 flex items-start gap-3">
                <span class="text-[#D9AA55] text-lg leading-none">✦</span>
                <span class="text-sm policy-text">Maintain server security, combat spam, and audit performance</span>
              </div>
              <div class="policy-card p-4 flex items-start gap-3">
                <span class="text-[#D9AA55] text-lg leading-none">✦</span>
                <span class="text-sm policy-text">Show relevant advertisements on platforms such as Meta (Facebook &amp; Instagram) and measure campaign results</span>
              </div>
            </div>

            <!-- Absolute Non-Sale Guarantee Callout -->
            <div class="p-5 rounded-2xl bg-[#171848] text-[#F8D78B] border border-[#D9AA55]/30 flex items-center gap-4 shadow-md">
              <svg class="w-7 h-7 text-[#D9AA55] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <div class="text-sm">
                <strong class="font-bold text-white uppercase tracking-wider text-xs block">Guaranteed Zero Data Brokering</strong>
                <p class="text-[#EAE2D4] mt-0.5">
                  <strong>We do not sell or rent your personal information to third parties.</strong> Period.
                </p>
              </div>
            </div>
          </div>

          <!-- Section 3: Advertising & Marketing (Meta Pixel & Audiences) -->
          <div class="space-y-6 p-6 sm:p-8 rounded-3xl policy-highlight">
            <div class="flex items-center gap-3">
              <span class="policy-num">03</span>
              <h2 class="text-2xl policy-heading font-bold">Advertising and Marketing Use of Your Information</h2>
            </div>
            <p class="text-sm sm:text-base policy-text leading-relaxed">
              We use two transparent ways to show relevant advertisements about our educational sessions and courses on Meta (Facebook and Instagram). Both mechanisms are explained below in detail:
            </p>

            <!-- 1. Meta Pixel -->
            <div class="policy-card p-6 shadow-sm space-y-4">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <h3 class="text-lg policy-heading font-bold">1. Website Retargeting (Meta Pixel)</h3>
                <span class="px-2.5 py-1 rounded bg-[#1877F2]/15 text-[#6BA8FF] text-xs font-semibold border border-[#1877F2]/30">Meta Pixel Tracking</span>
              </div>
              <p class="text-sm policy-text leading-relaxed">
                Our website uses the Meta Pixel, a small piece of tracking code that runs in your browser when you visit our site. This allows us to:
              </p>
              <ul class="space-y-2 text-sm policy-text pl-2">
                <li class="flex items-start gap-2">
                  <span class="text-[#D9AA55] font-bold">→</span>
                  <span>Show follow-up advertisements about our sessions and courses to people who have visited our website, when they later use Facebook or Instagram.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-[#D9AA55] font-bold">→</span>
                  <span>Measure how effective our advertising is by seeing whether people who click our ads go on to visit our site or register.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-[#D9AA55] font-bold">→</span>
                  <span>Build “lookalike” audiences — new people on Meta whose browsing behavior is similar to our past website visitors — to help us reach people likely to be interested in our sessions.</span>
                </li>
              </ul>
              <div class="policy-note p-4 rounded-xl text-xs leading-relaxed space-y-2">
                <p>
                  <strong class="text-[var(--fg)]">How it works:</strong> The Meta Pixel operates through browser cookies (see “Cookies &amp; Analytics” below) and <strong class="text-[var(--fg)]">does not share your name, email, or phone number with Meta</strong>. It recognizes your browser, not you personally, unless you have separately provided us your contact details through a registration form.
                </p>
                <p>
                  <strong class="text-[var(--fg)]">Opt-Out:</strong> You can opt out at any time by disabling cookies in your browser settings, or by adjusting your ad preferences directly within your Facebook or Instagram account settings.
                </p>
              </div>
            </div>

            <!-- 2. Registration-Based Audiences -->
            <div class="policy-card p-6 shadow-sm space-y-4">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <h3 class="text-lg policy-heading font-bold">2. Registration-Based Audiences</h3>
                <span class="px-2.5 py-1 rounded bg-[#D9AA55]/20 text-[#F8D78B] text-xs font-semibold border border-[#D9AA55]/40">Hashed Data Matching</span>
              </div>
              <p class="text-sm policy-text leading-relaxed">
                Separately, when you register for a workshop or session through a form, we may use the contact information you provide (such as your email address or phone number) to:
              </p>
              <ul class="space-y-2 text-sm policy-text pl-2">
                <li class="flex items-start gap-2">
                  <span class="text-[#D9AA55] font-bold">→</span>
                  <span>Show you relevant follow-up ads on Meta about upcoming sessions or advanced courses.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-[#D9AA55] font-bold">→</span>
                  <span>Build lookalike audiences based on past registrants, to help reach individuals seeking similar clarity.</span>
                </li>
              </ul>
              <div class="policy-note p-4 rounded-xl text-xs leading-relaxed space-y-2">
                <p>
                  <strong class="text-[var(--fg)]">Encrypted (Hashed) Matching:</strong> To do this, we upload a securely encrypted (hashed using SHA-256) version of your contact information to Meta. This cryptographic process <strong class="text-[var(--fg)]">does not give Meta access to your original, readable contact details</strong> — it is a cryptographic matching process only.
                </p>
                <p>
                  <strong class="text-[var(--fg)]">Non-Commercial Exchange:</strong> Both of these are forms of data sharing with a third-party advertising platform for marketing purposes, and are completely separate from selling your data. <strong class="text-[var(--fg)]">We do not receive any payment or benefit from Meta</strong> in exchange for this data; it is used solely to run and measure our own educational outreach. You can opt out of either at any time by contacting us.
                </p>
              </div>
            </div>
          </div>

          <!-- Section 4: Cookies & Analytics -->
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <span class="policy-num">04</span>
              <h2 class="text-2xl policy-heading font-bold">Cookies &amp; Analytics</h2>
            </div>
            <p class="text-sm sm:text-base policy-text leading-relaxed">
              Our website uses cookies and similar tracking tools, including the Meta Pixel, Google Analytics, or comparable tools, to understand visitor behavior, improve website performance, and support the advertising uses described above.
            </p>
            <p class="text-sm sm:text-base policy-text leading-relaxed">
              These tools may collect non-personal information such as pages visited, time spent on the website, referring source, and device information.
            </p>
            <div class="policy-card p-4 text-xs sm:text-sm policy-muted">
              💡 <strong class="text-[var(--fg)]">Cookie Control:</strong> You may disable cookies through your browser settings at any time, or manage preferences through our cookie consent controls where available.
            </div>
          </div>

          <!-- Section 5: Third-Party Services -->
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <span class="policy-num">05</span>
              <h2 class="text-2xl policy-heading font-bold">Third-Party Services</h2>
            </div>
            <p class="text-sm sm:text-base policy-text leading-relaxed">
              To operate a modern, reliable platform, we work with trusted service providers who adhere to strict industry privacy standards:
            </p>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div class="policy-card p-3 text-xs font-semibold text-center">
                Website Hosting
              </div>
              <div class="policy-card p-3 text-xs font-semibold text-center">
                Contact Form Tools
              </div>
              <div class="policy-card p-3 text-xs font-semibold text-center">
                Scheduling Systems
              </div>
              <div class="policy-card p-3 text-xs font-semibold text-center">
                Email Dispatch
              </div>
              <div class="policy-card p-3 text-xs font-semibold text-center">
                WhatsApp Business
              </div>
              <div class="policy-card p-3 text-xs font-semibold text-center">
                Payment Gateways
              </div>
              <div class="policy-card p-3 text-xs font-semibold text-center">
                Analytics Engines
              </div>
              <div class="policy-card p-3 text-xs font-semibold text-center">
                Meta Platforms
              </div>
            </div>
            <p class="text-xs policy-muted italic mt-2">
              Note: Each of these third-party services operates under its own respective privacy policy and security protocols.
            </p>
          </div>

          <!-- Section 6: Data Protection & Retention -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="policy-card p-6 shadow-sm space-y-3">
              <div class="flex items-center gap-2 font-bold text-base policy-heading">
                <span class="policy-num-sm">06</span>
                <h3>Data Protection</h3>
              </div>
              <p class="text-sm policy-text leading-relaxed">
                We take reasonable administrative, technical, and physical security measures to protect personal information from unauthorized access, misuse, alteration, or disclosure.
              </p>
              <p class="text-xs policy-muted leading-relaxed">
                While we employ industry-standard safeguards, please note that no internet transmission or electronic storage architecture can be guaranteed to be 100% impenetrable.
              </p>
            </div>

            <div class="policy-card p-6 shadow-sm space-y-3">
              <div class="flex items-center gap-2 font-bold text-base policy-heading">
                <span class="policy-num-sm">07</span>
                <h3>Data Retention</h3>
              </div>
              <p class="text-sm policy-text leading-relaxed">
                We retain personal information for as long as necessary to fulfill the purposes described in this policy, including ongoing communication regarding your sessions and enrolled cohorts, unless you request earlier deletion.
              </p>
              <p class="text-xs policy-muted leading-relaxed">
                Accounting receipts and statutory transaction logs are held strictly in adherence with Indian regulatory compliance timelines.
              </p>
            </div>
          </div>

          <!-- Section 8: Your Rights -->
          <div class="space-y-5">
            <div class="flex items-center gap-3">
              <span class="policy-num">08</span>
              <h2 class="text-2xl policy-heading font-bold">Your Rights &amp; Choices</h2>
            </div>
            <p class="text-sm sm:text-base policy-text leading-relaxed">
              You maintain full sovereignty over your personal data. At any time, you may request to:
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="policy-card p-4 flex items-start gap-3">
                <span class="w-7 h-7 rounded-lg bg-[#D9AA55]/20 text-[#F8D78B] border border-[#D9AA55]/40 flex items-center justify-center font-bold text-xs shrink-0">1</span>
                <div>
                  <h4 class="font-bold text-sm policy-heading">Access Your Information</h4>
                  <p class="text-xs policy-muted mt-1">Request a copy of the personal details we hold about you.</p>
                </div>
              </div>
              <div class="policy-card p-4 flex items-start gap-3">
                <span class="w-7 h-7 rounded-lg bg-[#D9AA55]/20 text-[#F8D78B] border border-[#D9AA55]/40 flex items-center justify-center font-bold text-xs shrink-0">2</span>
                <div>
                  <h4 class="font-bold text-sm policy-heading">Correct Inaccuracies</h4>
                  <p class="text-xs policy-muted mt-1">Amend or update your contact details or workshop intake answers.</p>
                </div>
              </div>
              <div class="policy-card p-4 flex items-start gap-3">
                <span class="w-7 h-7 rounded-lg bg-[#D9AA55]/20 text-[#F8D78B] border border-[#D9AA55]/40 flex items-center justify-center font-bold text-xs shrink-0">3</span>
                <div>
                  <h4 class="font-bold text-sm policy-heading">Request Deletion</h4>
                  <p class="text-xs policy-muted mt-1">Have your personal records permanently expunged from our marketing databases.</p>
                </div>
              </div>
              <div class="policy-card p-4 flex items-start gap-3">
                <span class="w-7 h-7 rounded-lg bg-[#D9AA55]/20 text-[#F8D78B] border border-[#D9AA55]/40 flex items-center justify-center font-bold text-xs shrink-0">4</span>
                <div>
                  <h4 class="font-bold text-sm policy-heading">Withdraw Consent</h4>
                  <p class="text-xs policy-muted mt-1">Opt out of future communications or advertising use of your data with immediate effect.</p>
                </div>
              </div>
            </div>
            <p class="text-xs policy-muted">
              To exercise any of these rights, simply submit a request through our Contact Us page or email our support desk.
            </p>
          </div>

          <!-- Section 9 & 10: External Links & Policy Updates -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div class="policy-card p-5 space-y-2">
              <h4 class="font-bold text-sm policy-heading">External Links</h4>
              <p class="text-xs policy-muted leading-relaxed">
                Our website may contain links to external websites (such as payment processing interfaces or reference materials). We are not responsible for the privacy practices or content of third-party websites.
              </p>
            </div>
            <div class="policy-card p-5 space-y-2">
              <h4 class="font-bold text-sm policy-heading">Changes to This Policy</h4>
              <p class="text-xs policy-muted leading-relaxed">
                We may update this Privacy Policy periodically to reflect operational, legal, or regulatory updates. Any changes will be posted on this page with the revised effective date/month.
              </p>
            </div>
          </div>

          <!-- Section 11: Official Contact Card -->
          <div class="p-8 rounded-3xl bg-[#171848] text-white space-y-6 shadow-xl border border-[#F8D78B]/20">
            <div class="flex items-center justify-between flex-wrap gap-4 border-b border-white/10 pb-6">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-[#D9AA55]">Official Data Controller</span>
                <h3 class="text-2xl font-serif font-bold text-white mt-1">The Narayan Presence</h3>
                <p class="text-sm text-[#c4c4e2]">Operated under <strong>Sarva Kalyan Global</strong></p>
              </div>
              <NuxtLink to="/contact" class="btn btn-gold text-xs px-5 py-2.5">
                Contact Us Page &rarr;
              </NuxtLink>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#c4c4e2]">
              <div>
                <span class="text-[#D9AA55] font-bold block mb-1">Registered Location</span>
                <span>Ahmedabad, Gujarat, India</span>
              </div>
              <div>
                <span class="text-[#D9AA55] font-bold block mb-1">Official Website</span>
                <a href="https://narayanpresence.com" target="_blank" rel="noopener" class="underline hover:text-[#F8D78B] transition-colors">
                  https://narayanpresence.com
                </a>
              </div>
              <div>
                <span class="text-[#D9AA55] font-bold block mb-1">Enquiries &amp; Rights</span>
                <span>Via Contact Us form on our website</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Privacy Policy — The Narayan Presence · Sarva Kalyan Global',
  meta: [
    {
      name: 'description',
      content: 'Official Privacy Policy of The Narayan Presence (Sarva Kalyan Global). Details on information collection, Meta Pixel retargeting, and user rights.'
    }
  ],
  link: [
    { rel: 'stylesheet', href: '/style.css' }
  ]
})
</script>

<style scoped>
.policy-section {
  color: var(--body);
}

.policy-heading {
  color: var(--fg);
  font-family: var(--serif);
}

.policy-text {
  color: var(--body);
}

.policy-muted {
  color: var(--muted);
}

.policy-card {
  background: var(--card);
  border: 1px solid var(--line);
  color: var(--body);
  border-radius: 20px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.policy-highlight {
  background: color-mix(in srgb, var(--card) 92%, var(--gold) 8%);
  border: 1px solid rgba(217, 170, 85, 0.35);
  border-radius: 24px;
}

.policy-note {
  background: color-mix(in srgb, var(--card) 85%, var(--gold) 15%);
  border: 1px solid rgba(217, 170, 85, 0.25);
  color: var(--body);
}

.policy-num {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(217, 170, 85, 0.2);
  color: var(--gold);
  border: 1.5px solid var(--gold);
  font-family: var(--serif);
  font-weight: 700;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  shrink: 0;
}

.policy-num-sm {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(217, 170, 85, 0.2);
  color: var(--gold);
  border: 1px solid var(--gold);
  font-family: var(--serif);
  font-weight: 700;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  shrink: 0;
}
</style>
