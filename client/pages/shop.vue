<template>
  <div class="shop-page-wrapper py-20 sm:py-28 min-h-screen transition-colors duration-300">
    <!-- Top Header Banner -->
    <div class="bg-gradient-to-b from-[#0F1233] to-[#141845] text-white py-12 px-4 mb-10 shadow-lg border-b border-[#D9AA55]/30">
      <UiContainer size="xl">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-3 max-w-2xl">
            <div class="flex items-center gap-2 text-xs text-[#F8D78B] font-bold uppercase tracking-wider">
              <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
              <span>&gt;</span>
              <span class="text-white">Publications &amp; Books</span>
            </div>
            <h1 class="font-display font-black text-2xl sm:text-4xl text-white tracking-tight leading-tight" style="font-family:'Fraunces',serif;">
              Core Publications by Ranu Patel
            </h1>
            <p class="text-xs sm:text-sm text-[#EAE2D4]/90 leading-relaxed">
              Timeless wisdom and structured cognitive frameworks to end overthinking, repair relationships, and awaken inner presence.
            </p>
          </div>

          <!-- Trust Badges & Cart Trigger -->
          <div class="flex flex-wrap items-center gap-3">
            <div class="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
              <span class="text-lg">⚡</span>
              <div>
                <div class="text-[11px] font-bold text-white">Instant PDF Delivery</div>
                <div class="text-[9px] text-[#EAE2D4]/70">Access within seconds</div>
              </div>
            </div>
            <div class="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
              <span class="text-lg">✨</span>
              <div>
                <div class="text-[11px] font-bold text-[#FFE11B]">Dual Editions</div>
                <div class="text-[9px] text-[#EAE2D4]/70">English + हिंदी included</div>
              </div>
            </div>

            <!-- Cart Trigger Pill -->
            <button
              type="button"
              class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#F8D78B] to-[#D9AA55] hover:brightness-110 text-[#0F1233] text-xs font-extrabold shadow-md transition-all cursor-pointer hover:scale-[1.02]"
              @click="isCartOpen = true"
            >
              <svg class="w-4 h-4 text-[#0F1233]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Cart ({{ cartTotalCount }})</span>
            </button>
          </div>
        </div>
      </UiContainer>
    </div>

    <UiContainer size="xl">
      <!-- Search & Discount Coupon Banner with Bulletproof Contrast -->
      <div class="shop-coupon-banner max-w-5xl mx-auto mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl p-4 shadow-sm">
        <div class="flex items-center gap-3 w-full sm:w-auto">
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E8F8F0] dark:bg-[#14532D]/40 text-[#16A34A] dark:text-[#4ADE80] text-sm font-bold border border-[#16A34A]/25">🏷️</span>
          <div class="text-xs">
            <span class="coupon-label font-bold">Special Reader Coupon:</span>
            <span class="coupon-text ml-1.5">
              Use code <strong class="coupon-code font-mono font-black">FLAT20</strong> at checkout for 20% off.
            </span>
          </div>
        </div>

        <div class="relative w-full sm:w-72">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search books &amp; topics..."
            class="shop-search-input w-full pl-9 pr-4 py-2 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#D9AA55]"
          />
          <svg class="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <!-- 5 Book Cards Grid Matching User Screenshot -->
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-16">
        <div
          v-for="book in filteredBooks"
          :key="book.id"
          class="book-card-item rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 relative group hover:-translate-y-1"
        >
          <!-- Top Card Section -->
          <div class="space-y-4">
            <!-- Badge pill -->
            <div>
              <span
                :class="[
                  'inline-block px-3 py-1 rounded text-[10px] font-black uppercase tracking-wider shadow-sm',
                  book.badgeColor === 'gold'
                    ? 'bg-[#FBE4A0] text-[#784F0E] dark:bg-[#D9AA55] dark:text-[#0F1233]'
                    : 'bg-[#1D2559] text-white dark:bg-[#28327A] dark:text-[#F8D78B]'
                ]"
              >
                {{ book.badge }}
              </span>
            </div>

            <!-- Book Cover Image Preview with 3D Tilt, Gold Aura Glow & Glint Shimmer -->
            <div
              class="book-stage relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center p-3 select-none"
              @click="openQuickView(book)"
            >
              <!-- Ambient Radiant Gold Aura -->
              <div class="book-ambient-aura" aria-hidden="true"></div>

              <!-- Glossy Light Glint Sheen Shimmer -->
              <div class="book-glint-sheen" aria-hidden="true"></div>

              <!-- 3D Book Cover Image -->
              <img
                :src="book.images[0]"
                :alt="book.title"
                class="book-cover-img w-full h-full object-contain relative z-10"
              />

              <!-- Floating Quickview Pill on Hover -->
              <div class="book-quickview-pill absolute bottom-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141845]/90 dark:bg-black/85 backdrop-blur-md text-[#F8D78B] text-[11px] font-bold border border-[#D9AA55]/30 shadow-lg pointer-events-none">
                <span>✨</span>
                <span>Click to Preview Inside</span>
              </div>
            </div>

            <!-- Titles (English + Hindi) -->
            <div class="space-y-1.5 pt-1">
              <h2
                class="book-card-title font-display font-bold text-xl sm:text-2xl leading-tight cursor-pointer hover:text-[#D9AA55] transition-colors"
                style="font-family:'Fraunces',serif;"
                @click="openQuickView(book)"
              >
                {{ book.title }}
              </h2>
              <p class="book-card-sub text-xs sm:text-sm font-semibold transition-colors">
                {{ book.subtitle }}
              </p>
            </div>

            <!-- Description with high contrast visibility in both light & dark mode -->
            <p class="book-card-desc text-xs sm:text-[13px] font-normal leading-relaxed transition-colors">
              {{ book.shortDescription }}
            </p>

            <!-- Read more link -->
            <div>
              <button
                type="button"
                class="book-card-readmore text-xs font-bold transition-colors cursor-pointer inline-flex items-center gap-1"
                @click="openQuickView(book)"
              >
                <span>Read more: inside and why read it</span>
                <span>&rarr;</span>
              </button>
            </div>

            <!-- Edition Pills Selection Row -->
            <div class="pt-2">
              <div class="book-edition-wrap inline-flex p-1 rounded-xl gap-1">
                <button
                  v-for="edition in book.editions"
                  :key="edition"
                  type="button"
                  :class="[
                    'book-edition-btn px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap',
                    { 'active': getEdition(book.id) === edition }
                  ]"
                  @click="setEdition(book.id, edition)"
                >
                  {{ edition }}
                </button>
              </div>
            </div>
          </div>

          <!-- Bottom Card Section: Pricing & CTA -->
          <div class="pt-5 space-y-3.5 border-t border-[#E2E8F0] dark:border-white/10 mt-5">
            <!-- Price and Savings Tag -->
            <div class="flex items-baseline gap-2.5">
              <span class="book-card-price font-display font-black text-2xl sm:text-3xl">
                ₹{{ book.price }}
              </span>
              <span class="book-save-badge inline-block px-2.5 py-0.5 rounded-full text-[11px] font-extrabold border">
                {{ book.saveText }}
              </span>
            </div>

            <!-- Daily Cost Breakdown -->
            <div class="book-card-daily text-xs font-bold">
              {{ book.dailyCost }}
            </div>

            <!-- Urgency Timeline -->
            <div class="book-card-urgency text-xs font-semibold">
              {{ book.urgency }}
            </div>

            <!-- Extra Note (e.g. for Book 5) -->
            <div v-if="book.extraNote" class="book-card-extra text-[11px] leading-relaxed">
              {{ book.extraNote }}
            </div>

            <!-- Gold CTA Action Button -->
            <button
              type="button"
              class="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-[#0F1233] bg-gradient-to-r from-[#F7D18C] via-[#EDB85C] to-[#E2A63B] hover:brightness-105 active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
              @click="handleCardAction(book)"
            >
              <span>{{ getActionBtnLabel(book) }}</span>
            </button>

            <!-- Footer Notice -->
            <div class="book-card-notice text-[11px] text-center">
              {{ book.footerNotice }}
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Trust & Guarantee Section -->
      <div class="shop-trust-card max-w-4xl mx-auto rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 mb-16">
        <div class="text-center space-y-1">
          <h3 class="shop-trust-title font-display font-extrabold text-xl" style="font-family:'Fraunces',serif;">
            How Instant Digital Delivery Works
          </h3>
          <p class="shop-trust-desc text-xs">
            Seamless, secure, and immediate access to all publications.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
          <div class="shop-trust-step p-4 rounded-xl space-y-1">
            <div class="shop-trust-step-title font-bold">1. Select Your Edition</div>
            <p class="shop-trust-step-text leading-relaxed">Choose English, हिंदी, or both editions packaged together at no extra cost.</p>
          </div>
          <div class="shop-trust-step p-4 rounded-xl space-y-1">
            <div class="shop-trust-step-title font-bold">2. Instant Download</div>
            <p class="shop-trust-step-text leading-relaxed">Direct download link appears immediately upon completing UPI or card checkout.</p>
          </div>
          <div class="shop-trust-step p-4 rounded-xl space-y-1">
            <div class="shop-trust-step-title font-bold">3. Lifetime Cloud Backup</div>
            <p class="shop-trust-step-text leading-relaxed">Access your books and printable toolkits anytime from your Narayan Presence Member Portal.</p>
          </div>
        </div>
      </div>
    </UiContainer>

    <!-- Modals & Drawers -->
    <ShopProductQuickView />
    <ShopDrawerCart />
    <ShopDrawerWishlist />
    <ShopCheckoutModal />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useShopCart, type ShopProduct } from '~/composables/useShopCart'
import ShopProductQuickView from '~/components/shop/ShopProductQuickView.vue'
import ShopDrawerCart from '~/components/shop/ShopDrawerCart.vue'
import ShopDrawerWishlist from '~/components/shop/ShopDrawerWishlist.vue'
import ShopCheckoutModal from '~/components/shop/ShopCheckoutModal.vue'

const {
  SHOP_PRODUCTS,
  cartTotalCount,
  isCartOpen,
  openQuickView,
  startBuyNow,
  addToCart,
  setEdition,
  getEdition
} = useShopCart()

useSeoMeta({
  title: 'Narayan Presence Bookstore — Core Written Works by Ranu Patel',
  description: 'Explore the 5 foundational written works by Ranu Patel: The Overthinking Cure, Hold What You Heal, Ek Baat Roz, Heal Any Relationship, and When Narayan Awakens Within.'
})

const searchQuery = ref('')

const filteredBooks = computed(() => {
  if (!searchQuery.value.trim()) {
    return SHOP_PRODUCTS
  }
  const q = searchQuery.value.toLowerCase()
  return SHOP_PRODUCTS.filter(book =>
    book.title.toLowerCase().includes(q) ||
    book.subtitle.toLowerCase().includes(q) ||
    book.shortDescription.toLowerCase().includes(q)
  )
})

const getActionBtnLabel = (book: ShopProduct): string => {
  const edition = getEdition(book.id)
  if (book.id === 'book-when-narayan-awakens-within') {
    return 'Get Hindi edition · ₹499 →'
  }
  if (edition === 'Both') {
    return 'Get both editions · ₹499 →'
  }
  return `Get ${edition} edition · ₹499 →`
}

const handleCardAction = (book: ShopProduct) => {
  const chosenEdition = getEdition(book.id)
  addToCart(book, 1, chosenEdition)
  startBuyNow(book, chosenEdition)
}
</script>

<style scoped>
/* Page Wrapper Theme */
.shop-page-wrapper {
  background-color: #F8F9FC !important;
  color: #1E293B !important;
}
:global(html.dark) .shop-page-wrapper,
:global(body.dark) .shop-page-wrapper,
:global([data-theme="dark"]) .shop-page-wrapper {
  background-color: #0A0D24 !important;
  color: #F8F5EF !important;
}

/* Coupon Banner */
.shop-coupon-banner {
  background-color: #FFFFFF !important;
  border: 1px solid #E2E8F0 !important;
  box-shadow: 0 4px 16px rgba(15, 18, 51, 0.04) !important;
}
:global(html.dark) .shop-coupon-banner,
:global(body.dark) .shop-coupon-banner,
:global([data-theme="dark"]) .shop-coupon-banner {
  background-color: #141845 !important;
  border-color: rgba(255, 255, 255, 0.12) !important;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25) !important;
}

.coupon-label {
  color: #0F1233 !important;
}
:global(html.dark) .coupon-label,
:global(body.dark) .coupon-label,
:global([data-theme="dark"]) .coupon-label {
  color: #F8D78B !important;
}

.coupon-text {
  color: #334155 !important;
}
:global(html.dark) .coupon-text,
:global(body.dark) .coupon-text,
:global([data-theme="dark"]) .coupon-text {
  color: #E2E8F0 !important;
}

.coupon-code {
  color: #15803D !important;
  background-color: #E8F8F0 !important;
  border: 1px solid rgba(22, 163, 74, 0.25) !important;
  padding: 1px 6px !important;
  border-radius: 6px !important;
}
:global(html.dark) .coupon-code,
:global(body.dark) .coupon-code,
:global([data-theme="dark"]) .coupon-code {
  color: #2DD4BF !important;
  background-color: rgba(45, 212, 191, 0.15) !important;
  border-color: rgba(45, 212, 191, 0.3) !important;
}

/* Search Input */
.shop-search-input {
  background-color: #F8FAFC !important;
  border: 1px solid #CBD5E1 !important;
  color: #0F1233 !important;
}
:global(html.dark) .shop-search-input,
:global(body.dark) .shop-search-input,
:global([data-theme="dark"]) .shop-search-input {
  background-color: #0F1233 !important;
  border-color: rgba(255, 255, 255, 0.15) !important;
  color: #FFFFFF !important;
}

/* Trust / Guarantee Card */
.shop-trust-card {
  background-color: #FFFFFF !important;
  border: 1px solid #E2E8F0 !important;
}
:global(html.dark) .shop-trust-card,
:global(body.dark) .shop-trust-card,
:global([data-theme="dark"]) .shop-trust-card {
  background-color: #141845 !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
}

.shop-trust-title {
  color: #0F1233 !important;
}
:global(html.dark) .shop-trust-title,
:global(body.dark) .shop-trust-title,
:global([data-theme="dark"]) .shop-trust-title {
  color: #FFFFFF !important;
}

.shop-trust-desc {
  color: #64748B !important;
}
:global(html.dark) .shop-trust-desc,
:global(body.dark) .shop-trust-desc,
:global([data-theme="dark"]) .shop-trust-desc {
  color: #CBD5E1 !important;
}

.shop-trust-step {
  background-color: #F8FAFC !important;
  border: 1px solid #E2E8F0 !important;
}
:global(html.dark) .shop-trust-step,
:global(body.dark) .shop-trust-step,
:global([data-theme="dark"]) .shop-trust-step {
  background-color: #0F1233 !important;
  border-color: rgba(255, 255, 255, 0.05) !important;
}

.shop-trust-step-title {
  color: #0F1233 !important;
}
:global(html.dark) .shop-trust-step-title,
:global(body.dark) .shop-trust-step-title,
:global([data-theme="dark"]) .shop-trust-step-title {
  color: #F8D78B !important;
}

.shop-trust-step-text {
  color: #475569 !important;
}
:global(html.dark) .shop-trust-step-text,
:global(body.dark) .shop-trust-step-text,
:global([data-theme="dark"]) .shop-trust-step-text {
  color: #94A3B8 !important;
}

/* Book Card Container */
.book-card-item {
  background-color: #FFFFFF !important;
  border: 1px solid #E2E8F0 !important;
  box-shadow: 0 4px 20px rgba(15, 18, 51, 0.05) !important;
}
:global(html.dark) .book-card-item,
:global(body.dark) .book-card-item,
:global([data-theme="dark"]) .book-card-item {
  background-color: #141845 !important;
  border-color: rgba(255, 255, 255, 0.12) !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3) !important;
}

/* Titles */
.book-card-title {
  color: #0F1233 !important;
}
:global(html.dark) .book-card-title,
:global(body.dark) .book-card-title,
:global([data-theme="dark"]) .book-card-title {
  color: #FFFFFF !important;
}

/* Subtitle */
.book-card-sub {
  color: #475569 !important;
}
:global(html.dark) .book-card-sub,
:global(body.dark) .book-card-sub,
:global([data-theme="dark"]) .book-card-sub {
  color: #F8D78B !important;
}

/* Description */
.book-card-desc {
  color: #334155 !important;
}
:global(html.dark) .book-card-desc,
:global(body.dark) .book-card-desc,
:global([data-theme="dark"]) .book-card-desc {
  color: #F1F5F9 !important;
}

/* Read more link */
.book-card-readmore {
  color: #0F1233 !important;
}
.book-card-readmore:hover {
  color: #B45309 !important;
}
:global(html.dark) .book-card-readmore,
:global(body.dark) .book-card-readmore,
:global([data-theme="dark"]) .book-card-readmore {
  color: #F8D78B !important;
}
:global(html.dark) .book-card-readmore:hover,
:global(body.dark) .book-card-readmore:hover,
:global([data-theme="dark"]) .book-card-readmore:hover {
  color: #FFE5A3 !important;
}

/* Edition Selector Pills */
.book-edition-wrap {
  background-color: #F1F5F9 !important;
  border: 1px solid #E2E8F0 !important;
}
:global(html.dark) .book-edition-wrap,
:global(body.dark) .book-edition-wrap,
:global([data-theme="dark"]) .book-edition-wrap {
  background-color: #0C0F2B !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
}

.book-edition-btn {
  color: #475569 !important;
  background-color: transparent !important;
}
.book-edition-btn:hover {
  color: #0F1233 !important;
  background-color: rgba(0, 0, 0, 0.04) !important;
}
.book-edition-btn.active {
  background-color: #171844 !important;
  color: #FFFFFF !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) !important;
}

:global(html.dark) .book-edition-btn {
  color: #CBD5E1 !important;
  background-color: transparent !important;
}
:global(html.dark) .book-edition-btn:hover {
  color: #FFFFFF !important;
  background-color: rgba(255, 255, 255, 0.08) !important;
}
:global(html.dark) .book-edition-btn.active {
  background-color: #D9AA55 !important;
  color: #0F1233 !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3) !important;
}

/* Price */
.book-card-price {
  color: #0F1233 !important;
}
:global(html.dark) .book-card-price,
:global(body.dark) .book-card-price,
:global([data-theme="dark"]) .book-card-price {
  color: #FFFFFF !important;
}

/* Save Badge */
.book-save-badge {
  background-color: #E8F8F0 !important;
  color: #15803D !important;
  border-color: rgba(22, 163, 74, 0.25) !important;
}
:global(html.dark) .book-save-badge,
:global(body.dark) .book-save-badge,
:global([data-theme="dark"]) .book-save-badge {
  background-color: #14532D !important;
  color: #4ADE80 !important;
  border-color: rgba(74, 222, 128, 0.3) !important;
}

/* Daily Cost */
.book-card-daily {
  color: #0F766E !important;
}
:global(html.dark) .book-card-daily,
:global(body.dark) .book-card-daily,
:global([data-theme="dark"]) .book-card-daily {
  color: #2DD4BF !important;
}

/* Urgency Timeline */
.book-card-urgency {
  color: #C2410C !important;
}
:global(html.dark) .book-card-urgency,
:global(body.dark) .book-card-urgency,
:global([data-theme="dark"]) .book-card-urgency {
  color: #FBBF24 !important;
}

/* Extra Note */
.book-card-extra {
  color: #475569 !important;
}
:global(html.dark) .book-card-extra,
:global(body.dark) .book-card-extra,
:global([data-theme="dark"]) .book-card-extra {
  color: #CBD5E1 !important;
}

/* Footer Notice */
.book-card-notice {
  color: #64748B !important;
}
:global(html.dark) .book-card-notice,
:global(body.dark) .book-card-notice,
:global([data-theme="dark"]) .book-card-notice {
  color: #CBD5E1 !important;
}

/* 3D Book Stage & Animation */
.book-stage {
  perspective: 1200px;
  background-color: #F8FAFC !important;
  border: 1px solid #E2E8F0 !important;
}
:global(html.dark) .book-stage,
:global(body.dark) .book-stage,
:global([data-theme="dark"]) .book-stage {
  background-color: #0C0F2B !important;
  border-color: rgba(255, 255, 255, 0.05) !important;
}

/* Radiant Gold Ambient Aura */
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

.book-card-item:hover .book-ambient-aura,
.book-stage:hover .book-ambient-aura {
  opacity: 1;
  transform: scale(1.15);
}

/* 3D Book Cover Elevation, Tilt & Shadow */
.book-cover-img {
  transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.45s ease;
  transform-origin: center bottom;
  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.2));
}

.book-card-item:hover .book-cover-img,
.book-stage:hover .book-cover-img {
  transform: translateY(-8px) scale(1.06) rotateY(-4deg) rotateZ(1deg);
  filter: drop-shadow(0 20px 28px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 22px rgba(217, 170, 85, 0.35));
}

/* Luxury Light Glint Shimmer Sheen */
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

.book-card-item:hover .book-glint-sheen,
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

/* Floating Quick View Pill */
.book-quickview-pill {
  opacity: 0;
  transform: translateY(14px) scale(0.92);
  transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.book-card-item:hover .book-quickview-pill,
.book-stage:hover .book-quickview-pill {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
