<template>
  <div class="narayan-subpage products-page">
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
        <p class="crumb"><NuxtLink to="/">Home</NuxtLink> / <NuxtLink to="/courses">Offerings</NuxtLink> / Publications</p>
        <p class="eyebrow">Publications &amp; Books</p>
        <h1 style="margin-top:22px">Written works and <em>core publications.</em></h1>
        <p class="lead hero-in">
          Written works, guided cognitive roadmaps, and contemplative frameworks created by Ranu Patel to support clarity, healing, and intentional living.
        </p>
      </div>
    </section>

    <UiPageBreadcrumb
      :items="[
        { label: 'Offerings', to: '/courses' },
        { label: 'Books & Publications' }
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
              <div class="book-stage relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAFAFA] dark:bg-[#0C0F2B] mb-5 flex items-center justify-center p-3 select-none cursor-pointer">
                <div class="book-ambient-aura" aria-hidden="true"></div>
                <div class="book-glint-sheen" aria-hidden="true"></div>
                <img src="/books/the-overthinking-cure.png" alt="The Overthinking Cure" class="book-cover-img h-full object-contain relative z-10" />
              </div>
              <span class="text-xs font-bold uppercase tracking-wider text-[#D9AA55]">Start Here</span>
              <h3 class="product-title" style="font-family:'Fraunces',serif;font-size:24px;margin-top:10px">The Overthinking Cure</h3>
              <p class="text-xs text-[#8C6D57] font-semibold mt-1">ओवरथिंकिंग का इलाज</p>
              <p class="text-sm product-desc mt-4 leading-relaxed">
                Interrupt the 2 AM loop with the 5-step SHANT method. A 30-day roadmap, a calm-mind toolkit and 10 to 15 minutes a day.
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-[#EAE2D4]/40 flex items-center justify-between">
              <span class="text-xs font-bold text-[#141845] dark:text-[#F8D78B]">₹499 (Dual Edition)</span>
              <NuxtLink to="/shop" class="text-xs font-bold product-link hover:text-[#D9AA55]">View in Shop &rarr;</NuxtLink>
            </div>
          </div>

          <!-- Book 2 -->
          <div class="p-8 rounded-3xl product-card border shadow-sm flex flex-col justify-between">
            <div>
              <div class="book-stage relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAFAFA] dark:bg-[#0C0F2B] mb-5 flex items-center justify-center p-3 select-none cursor-pointer">
                <div class="book-ambient-aura" aria-hidden="true"></div>
                <div class="book-glint-sheen" aria-hidden="true"></div>
                <img src="/books/hold-what-you-heal.png" alt="Hold What You Heal" class="book-cover-img h-full object-contain relative z-10" />
              </div>
              <span class="text-xs font-bold uppercase tracking-wider text-[#D9AA55]">Healing Guide</span>
              <h3 class="product-title" style="font-family:'Fraunces',serif;font-size:24px;margin-top:10px">Hold What You Heal</h3>
              <p class="text-xs text-[#8C6D57] font-semibold mt-1">जो पाओ, उसे थाम सको</p>
              <p class="text-sm product-desc mt-4 leading-relaxed">
                Heal your health, relationships and money, then keep the good you receive. Includes a 21-day plan.
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-[#EAE2D4]/40 flex items-center justify-between">
              <span class="text-xs font-bold text-[#141845] dark:text-[#F8D78B]">₹499 (Dual Edition)</span>
              <NuxtLink to="/shop" class="text-xs font-bold product-link hover:text-[#D9AA55]">View in Shop &rarr;</NuxtLink>
            </div>
          </div>

          <!-- Book 3 -->
          <div class="p-8 rounded-3xl product-card border shadow-sm flex flex-col justify-between">
            <div>
              <div class="book-stage relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAFAFA] dark:bg-[#0C0F2B] mb-5 flex items-center justify-center p-3 select-none cursor-pointer">
                <div class="book-ambient-aura" aria-hidden="true"></div>
                <div class="book-glint-sheen" aria-hidden="true"></div>
                <img src="/books/ek-baat-roz.jpg" alt="Ek Baat Roz" class="book-cover-img h-full object-contain relative z-10" />
              </div>
              <span class="text-xs font-bold uppercase tracking-wider text-[#D9AA55]">Whole Family</span>
              <h3 class="product-title" style="font-family:'Fraunces',serif;font-size:24px;margin-top:10px">Ek Baat Roz</h3>
              <p class="text-xs text-[#8C6D57] font-semibold mt-1">एक बात रोज़</p>
              <p class="text-sm product-desc mt-4 leading-relaxed">
                One shloka, its story and one gentle line for every age at home. 9 moments, a 30-day plan and a printable toolkit.
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-[#EAE2D4]/40 flex items-center justify-between">
              <span class="text-xs font-bold text-[#141845] dark:text-[#F8D78B]">₹499 (Dual Edition)</span>
              <NuxtLink to="/shop" class="text-xs font-bold product-link hover:text-[#D9AA55]">View in Shop &rarr;</NuxtLink>
            </div>
          </div>

          <!-- Book 4 -->
          <div class="p-8 rounded-3xl product-card border shadow-sm flex flex-col justify-between">
            <div>
              <div class="book-stage relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAFAFA] dark:bg-[#0C0F2B] mb-5 flex items-center justify-center p-3 select-none cursor-pointer">
                <div class="book-ambient-aura" aria-hidden="true"></div>
                <div class="book-glint-sheen" aria-hidden="true"></div>
                <img src="/books/heal-any-relationship.png" alt="Heal Any Relationship" class="book-cover-img h-full object-contain relative z-10" />
              </div>
              <span class="text-xs font-bold uppercase tracking-wider text-[#D9AA55]">New - Relationships</span>
              <h3 class="product-title" style="font-family:'Fraunces',serif;font-size:24px;margin-top:10px">Heal Any Relationship</h3>
              <p class="text-xs text-[#8C6D57] font-semibold mt-1">रिश्तों का इलाज</p>
              <p class="text-sm product-desc mt-4 leading-relaxed">
                One 4-step method (SETU) and ready-to-say scripts for 8 relationships, from your partner and kids to your team and boss. 16 worksheets and a 21-day repair plan.
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-[#EAE2D4]/40 flex items-center justify-between">
              <span class="text-xs font-bold text-[#141845] dark:text-[#F8D78B]">₹499 (Dual Edition)</span>
              <NuxtLink to="/shop" class="text-xs font-bold product-link hover:text-[#D9AA55]">View in Shop &rarr;</NuxtLink>
            </div>
          </div>

          <!-- Book 5 -->
          <div class="p-8 rounded-3xl product-card border shadow-sm flex flex-col justify-between">
            <div>
              <div class="book-stage relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAFAFA] dark:bg-[#0C0F2B] mb-5 flex items-center justify-center p-3 select-none cursor-pointer">
                <div class="book-ambient-aura" aria-hidden="true"></div>
                <div class="book-glint-sheen" aria-hidden="true"></div>
                <img src="/books/when-narayan-awakens-within.jpg" alt="When Narayan Awakens Within" class="book-cover-img h-full object-contain relative z-10" />
              </div>
              <span class="text-xs font-bold uppercase tracking-wider text-[#D9AA55]">Hindi - Inner Awakening</span>
              <h3 class="product-title" style="font-family:'Fraunces',serif;font-size:24px;margin-top:10px">When Narayan Awakens Within</h3>
              <p class="text-xs text-[#8C6D57] font-semibold mt-1">जब भीतर नारायण जागें</p>
              <p class="text-sm product-desc mt-4 leading-relaxed">
                21 chapters, a 21-day sadhana and daily practices for returning to yourself. Hindi now. Gujarati, Tamil and English are on the way.
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-[#EAE2D4]/40 flex items-center justify-between">
              <span class="text-xs font-bold text-[#141845] dark:text-[#F8D78B]">₹499 (Hindi Edition)</span>
              <NuxtLink to="/shop" class="text-xs font-bold product-link hover:text-[#D9AA55]">View in Shop &rarr;</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Books & Core Publications — Narayan Presence',
  meta: [{ name: 'description', content: 'Explore the 5 core publications and written works by Ranu Patel at Narayan Presence.' }],
  link: [{ rel: 'stylesheet', href: '/style.css' }]
})
</script>

<style scoped>
.narayan-subpage {
  font-family: 'DM Sans', -apple-system, sans-serif;
  color: var(--body);
}

.product-card {
  background: var(--card-bg, #ffffff);
  border-color: var(--border, #EAE2D4);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 32px rgba(23, 27, 72, 0.08);
}

.product-title {
  color: var(--fg, #141845);
}

.product-desc {
  color: var(--body, #524F4E);
}

.product-link {
  color: var(--fg, #141845);
  transition: color 0.2s ease;
}

/* 3D Book Stage & Animation */
.book-stage {
  perspective: 1200px;
}

.book-ambient-aura {
  position: absolute;
  inset: -15%;
  background: radial-gradient(circle, rgba(217, 170, 85, 0.45) 0%, rgba(248, 215, 139, 0.18) 45%, transparent 70%);
  opacity: 0;
  transform: scale(0.85);
  filter: blur(20px);
  transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: none;
  z-index: 1;
}

.product-card:hover .book-ambient-aura,
.book-stage:hover .book-ambient-aura {
  opacity: 1;
  transform: scale(1.15);
}

.book-cover-img {
  transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.45s ease;
  transform-origin: center bottom;
  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.2));
}

.product-card:hover .book-cover-img,
.book-stage:hover .book-cover-img {
  transform: translateY(-8px) scale(1.06) rotateY(-4deg) rotateZ(1deg);
  filter: drop-shadow(0 20px 28px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 22px rgba(217, 170, 85, 0.35));
}

.book-glint-sheen {
  position: absolute;
  top: -60%;
  left: -120%;
  width: 50%;
  height: 220%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.05) 30%,
    rgba(255, 255, 255, 0.45) 50%,
    rgba(255, 255, 255, 0.05) 70%,
    transparent 100%
  );
  transform: rotate(25deg);
  opacity: 0;
  pointer-events: none;
  z-index: 15;
}

.product-card:hover .book-glint-sheen,
.book-stage:hover .book-glint-sheen {
  opacity: 1;
  animation: bookShine 0.85s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

@keyframes bookShine {
  0% {
    left: -120%;
  }
  100% {
    left: 220%;
  }
}
</style>
