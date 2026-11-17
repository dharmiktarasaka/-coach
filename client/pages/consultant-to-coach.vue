<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <!-- Article Header -->
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Practitioner Transition</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">9 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            How to Transition from Done-For-You Consulting to High-Leverage Coaching
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Tired of endless client deliverables, scope creep, and trading 60 hours a week for consulting fees? Here is the exact blueprint to productize your expertise into scalable coaching and advisory models.
          </p>
        </header>

        <!-- Article Content -->
        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The Done-For-You (DFY) Delivery Trap</h2>
            <p>
              Traditional consultants sell implementation labor: they build the spreadsheets, write the slide decks, configure the software, or run the campaigns. While this commands high initial fees, it creates severe structural bottlenecks:
            </p>
            <ul class="list-disc pl-5 space-y-2 text-[#524F4E]">
              <li><strong>Zero Operational Leverage:</strong> Every new client requires direct founder labor or expensive agency headcount.</li>
              <li><strong>Chronic Scope Creep:</strong> Clients constantly demand additional tasks beyond the original agreement.</li>
              <li><strong>Client Dependency:</strong> The client never builds internal capability, creating ongoing operational fragility.</li>
            </ul>
            <p>
              By transitioning to <strong>Done-WITH-You (DWY) Productized Advisory</strong>, you guide your client's team to execute your proprietary playbook, multiplying your profit margins and reclaiming 70% of your time.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-2">
            <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold">The Leverage Shift:</div>
            <p class="text-[#1A1A1A] font-medium">
              "A consultant gives a company a fish and charges for the fish. A high-leverage coach builds the company's internal fishery and charges for the capability."
            </p>
          </div>

          <!-- Comparison Table -->
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">Consulting vs. High-Leverage Coaching Model</h2>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs sm:text-sm border border-[#EAE4E4] rounded-xl overflow-hidden">
                <thead class="bg-[#F5EFEF] font-mono text-[#1A1A1A]">
                  <tr>
                    <th class="p-3">Dimension</th>
                    <th class="p-3">DFY Consulting</th>
                    <th class="p-3 text-[#FF7F11]">DWY Coaching & Advisory</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#EAE4E4]">
                  <tr>
                    <td class="p-3 font-semibold">Deliverable</td>
                    <td class="p-3">Finished labor / decks</td>
                    <td class="p-3 font-bold text-[#FF7F11]">Playbooks, frameworks, audits</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-semibold">Gross Profit Margin</td>
                    <td class="p-3">30% - 50%</td>
                    <td class="p-3 font-bold text-[#FF7F11]">85% - 94%</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-semibold">Hours per Client / Mo</td>
                    <td class="p-3">40 - 80 hours</td>
                    <td class="p-3 font-bold text-[#FF7F11]">3 - 6 hours</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-semibold">Max Client Capacity</td>
                    <td class="p-3">3 - 5 active clients</td>
                    <td class="p-3 font-bold text-[#FF7F11]">25 - 50 active clients</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 4 Steps to Pivot Your Consulting Firm</h2>
            <ol class="list-decimal pl-5 space-y-3 text-[#524F4E]">
              <li><strong class="text-[#1A1A1A]">Extract Your Invisible Intuition:</strong> Document every step you take when solving a client problem into SOPs, templates, and checklists.</li>
              <li><strong class="text-[#1A1A1A]">Create an Implementation Vault:</strong> Record short video walk-throughs teaching client internal teams how to execute each template.</li>
              <li><strong class="text-[#1A1A1A]">Package as a 90-Day Sprint:</strong> Offer your expertise as weekly diagnostic review calls and sprint milestones instead of hourly project quotes.</li>
              <li><strong class="text-[#1A1A1A]">Reposition Your Sales Script:</strong> Position yourself as the specialized strategic architect rather than commoditized outsourced labor.</li>
            </ol>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Calculate Your Consulting Transition Score</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">
              Take our Growth Scorecard to evaluate how quickly you can package your consulting IP into a scalable coaching engine.
            </p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">
                Diagnose Your Advisory Readiness &rarr;
              </UiButton>
            </div>
          </div>
        </div>

        <!-- Article Footer Share / Navigation -->
        <footer class="border-t border-[#EAE4E4] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <NuxtLink to="/resources" class="text-xs font-semibold text-[#FF7F11] hover:text-[#E66800]">&larr; Back to Resource Hub</NuxtLink>
          <div class="flex items-center gap-3">
            <UiButton to="/workshop" variant="secondary" size="sm">Attend Live Workshop</UiButton>
            <UiButton to="/apply" variant="primary" size="sm">Apply for Advisory</UiButton>
          </div>
        </footer>
      </article>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'How to Transition from Consulting to High-Leverage Coaching — Digital Coach',
  description: 'The complete framework for consultants and agencies to pivot into high-margin productized coaching and advisory businesses.',
  ogTitle: 'How to Transition from Done-For-You Consulting to High-Leverage Coaching',
  ogDescription: 'Stop trading labor for fees. Productize your consulting expertise.',
  keywords: 'consultant to coach, transition from consulting to coaching, productized consulting, consulting vs coaching, advisory business model'
})
</script>
