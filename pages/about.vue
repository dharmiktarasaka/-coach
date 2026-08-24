<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] min-h-screen text-[#1A1A1A]">
    <UiContainer size="lg">
      <div class="space-y-16">
        <!-- Header -->
        <UiSectionHeading
          tag="Our Mission & Philosophy"
          tag-variant="amber"
          title="LESS HYPE. MORE BUSINESS."
          subtitle="Why we created Digital Coach, what we believe about the expert economy, and what we refuse to compromise on."
          size="xl"
          align="center"
        />

        <!-- Story & Philosophy Article -->
        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 shadow-xl space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base">
          <div class="space-y-4">
            <h2 class="font-display font-black text-2xl sm:text-3xl text-[#1A1A1A]">
              The Reality of the Modern Expert Economy
            </h2>
            <p>
              Millions of professionals, domain specialists, and coaches have spent 10, 15, or 20 years mastering their craft. They have solved complex problems for corporate employers, created breakthroughs for private clients, and accumulated deep intuitive wisdom.
            </p>
            <p>
              Yet when they enter the open market as independent practitioners, they find themselves trapped in an exhausting cycle: selling their time by the hour, negotiating custom proposals for weeks, chasing volatile word-of-mouth referrals, and managing prospective leads in messy WhatsApp chats.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-3 shadow-sm">
            <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold">The Core Conviction:</div>
            <p class="font-display text-lg font-bold text-[#1A1A1A]">
              "Expertise is the starting material. A business system is the asset."
            </p>
            <p class="text-xs sm:text-sm text-[#524F4E]">
              Knowledge without positioning is commoditized. Advice without an offer is underpaid. Talent without acquisition is starved. And skill without systems is founder exhaustion.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="font-display font-black text-2xl sm:text-3xl text-[#1A1A1A]">
              Why We Refuse to Sell False Promises
            </h2>
            <p>
              The digital coaching and consulting market has unfortunately become saturated with rented sports cars, screenshots of dubious bank accounts, and false claims of "₹10 Lakh/month with 2 hours of work."
            </p>
            <p>
              At Digital Coach, we believe that durable businesses are built on fundamental commercial principles: clear category positioning, high-value flagship offers, consultative diagnostic enrollment, leveraged asynchronous delivery, and automated CRM operations.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
              <div class="text-xs font-mono text-[#FF7F11] font-bold">01. Evidence-Led</div>
              <div class="font-bold text-[#1A1A1A] text-sm">Decisions Based on Data</div>
              <p class="text-xs text-[#524F4E]">We optimize positioning and funnels using live conversion numbers, not hope.</p>
            </div>

            <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
              <div class="text-xs font-mono text-[#FF7F11] font-bold">02. Asset-First</div>
              <div class="font-bold text-[#1A1A1A] text-sm">Building Equity Value</div>
              <p class="text-xs text-[#524F4E]">Transforming tacit knowledge into IP assets and scalable portals that operate without you.</p>
            </div>

            <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
              <div class="text-xs font-mono text-[#FF7F11] font-bold">03. India + Global</div>
              <div class="font-bold text-[#1A1A1A] text-sm">Cross-Border Reach</div>
              <p class="text-xs text-[#524F4E]">Tailored to Indian commercial dynamics while commanding premium international fees.</p>
            </div>
          </div>
        </div>

        <!-- Closer -->
        <div class="text-center space-y-6">
          <h3 class="font-display font-black text-2xl text-[#1A1A1A]">
            Ready to build the business behind your expertise?
          </h3>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <UiButton to="/scorecard" variant="primary" size="lg" custom-class="shadow-lg shadow-[#FF7F11]/25">
              Take the Growth Scorecard &rarr;
            </UiButton>
            <UiButton to="/apply" variant="secondary" size="lg">
              Apply for Advisory
            </UiButton>
          </div>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'About Digital Coach — Our Mission & Methodology',
  description: 'Learn why Digital Coach was built to transform tacit expertise into scalable business operating systems with zero hype and rigorous execution.'
})
</script>
