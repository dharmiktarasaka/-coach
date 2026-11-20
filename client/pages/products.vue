<template>
  <div class="narayan-subpage products-page">
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
        <p class="crumb"><NuxtLink to="/">Home</NuxtLink> / <NuxtLink to="/courses">Offerings</NuxtLink> / Products</p>
        <p class="eyebrow">Publications &amp; Toolkits</p>
        <h1 style="margin-top:22px">Books, workbooks and <em>digital resources.</em></h1>
        <p class="lead hero-in">
          Written works, audio contemplative guides, and structured journals created by Ranu Patel to support intentional living.
        </p>
      </div>
    </section>

    <UiPageBreadcrumb
      :items="[
        { label: 'Offerings', to: '/courses' },
        { label: 'Books & Digital Products' }
      ]"
      :prev="{ label: 'Community', to: '/community' }"
      :next="{ label: 'Journal & Resources', to: '/resources' }"
    />

    <section class="sec">
      <div class="wrap">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Book 1 -->
          <div class="p-8 rounded-3xl product-card border shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-[#D9AA55]">Paperback &amp; E-Book</span>
              <h3 class="product-title" style="font-family:'Fraunces',serif;font-size:24px;margin-top:10px">The Overthinking Cure</h3>
              <p class="text-xs text-[#8C6D57] font-semibold mt-1">By Ranu Patel</p>
              <p class="text-sm product-desc mt-4 leading-relaxed">
                A practical guide to understanding cognitive feedback loops, breaking automatic triggers, and replacing panic with clarity.
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-[#EAE2D4]/40 flex items-center justify-between">
              <span class="text-xs text-[#8C6D57]">Amazon &amp; Kindle</span>
              <NuxtLink to="/contact" class="text-xs font-bold product-link hover:text-[#D9AA55]">Order Details &rarr;</NuxtLink>
            </div>
          </div>

          <!-- Product 2 -->
          <div class="p-8 rounded-3xl product-card border shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-[#D9AA55]">Digital Toolkit</span>
              <h3 class="product-title" style="font-family:'Fraunces',serif;font-size:24px;margin-top:10px">The P.A.U.S.E. Workbook</h3>
              <p class="text-xs text-[#8C6D57] font-semibold mt-1">Interactive PDF &amp; Notion</p>
              <p class="text-sm product-desc mt-4 leading-relaxed">
                Step-by-step cognitive worksheets to log loops, separate objective facts from personal narratives, and document decisions.
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-[#EAE2D4]/40 flex items-center justify-between">
              <span class="text-xs text-[#8C6D57]">Included in Academy</span>
              <NuxtLink to="/#academy" class="text-xs font-bold product-link hover:text-[#D9AA55]">View Included &rarr;</NuxtLink>
            </div>
          </div>

          <!-- Product 3 -->
          <div class="p-8 rounded-3xl product-card border shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-[#D9AA55]">Audio Practice</span>
              <h3 class="product-title" style="font-family:'Fraunces',serif;font-size:24px;margin-top:10px">N-A-R-A-Y-A-N Audio Suite</h3>
              <p class="text-xs text-[#8C6D57] font-semibold mt-1">Guided Morning Audio</p>
              <p class="text-sm product-desc mt-4 leading-relaxed">
                Seven concise audio tracks covering Naam, Anulom-Vilom breath pacing, mindful body stillness, and intentional affirmations.
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-[#EAE2D4]/40 flex items-center justify-between">
              <span class="text-xs text-[#8C6D57]">Digital Audio</span>
              <NuxtLink to="/contact" class="text-xs font-bold product-link hover:text-[#D9AA55]">Enquire &rarr;</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Books & Digital Products — Narayan Presence',
  meta: [{ name: 'description', content: 'Books, publications, workbooks and digital guides by Ranu Patel.' }],
  link: [{ rel: 'stylesheet', href: '/style.css' }]
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

.product-card {
  background: var(--card);
  border-color: var(--line);
  transition: all 0.3s ease;
}
:root[data-theme="dark"] .product-card {
  background: #141845;
  border-color: rgba(217, 170, 85, 0.25);
}
:root[data-theme="light"] .product-card {
  background: #ffffff;
  border-color: #EAE2D4;
}

.product-title {
  color: var(--fg);
}
:root[data-theme="dark"] .product-title {
  color: #F8F5EF !important;
}
:root[data-theme="light"] .product-title {
  color: #171848 !important;
}

.product-desc {
  color: var(--body);
}
:root[data-theme="dark"] .product-desc {
  color: #d6d6ea !important;
}
:root[data-theme="light"] .product-desc {
  color: #4A4B68 !important;
}

.product-link {
  color: var(--fg);
}
:root[data-theme="dark"] .product-link {
  color: #F8D78B !important;
}
:root[data-theme="light"] .product-link {
  color: #171848 !important;
}
</style>