<template>
  <div class="py-28 md:py-36 bg-[#FBF6F6] min-h-screen text-[#1A1A1A]">
    <UiContainer size="xl">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <UiBadge variant="amber" :dot="true">Digital Coach Store</UiBadge>
        <h1 class="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] tracking-tight">
          DIGITAL PRODUCTS & OPERATING ASSETS
        </h1>
        <p class="text-[#524F4E] text-base sm:text-lg leading-relaxed">
          Battle-tested Notion operating systems, high-ticket sales script vaults, automated funnel templates, and AI prompt suites ready for instant download and implementation.
        </p>
      </div>

      <!-- Controls Bar: Search, Category Filter, Currency Toggle & Cart Trigger -->
      <div class="bg-white border border-[#EAE4E4] rounded-3xl p-4 sm:p-6 mb-12 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <!-- Search input -->
          <div class="relative w-full md:w-80">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search products, templates..."
              class="w-full pl-10 pr-4 py-2.5 rounded-full border border-[#EAE4E4] bg-[#FBF6F6] text-sm text-[#1A1A1A] placeholder-[#8C8685] focus:outline-none focus:ring-2 focus:ring-[#FF7F11] focus:border-transparent transition-all"
            />
            <svg class="w-4 h-4 text-[#8C8685] absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <button
              v-if="searchQuery"
              @click="searchQuery = ''"
              class="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#8C8685] hover:text-[#1A1A1A]"
            >
              &times;
            </button>
          </div>

          <!-- Currency Selector & Guarantee Badges -->
          <div class="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <!-- Currency Toggle -->
            <div class="flex items-center bg-[#FBF6F6] border border-[#EAE4E4] rounded-full p-1 text-xs font-bold">
              <button
                type="button"
                :class="[
                  'px-3 py-1.5 rounded-full transition-all duration-200',
                  currency === 'USD' ? 'bg-[#FF7F11] text-white shadow-sm' : 'text-[#524F4E] hover:text-[#1A1A1A]'
                ]"
                @click="currency = 'USD'"
              >
                USD ($)
              </button>
              <button
                type="button"
                :class="[
                  'px-3 py-1.5 rounded-full transition-all duration-200',
                  currency === 'INR' ? 'bg-[#FF7F11] text-white shadow-sm' : 'text-[#524F4E] hover:text-[#1A1A1A]'
                ]"
                @click="currency = 'INR'"
              >
                INR (₹)
              </button>
            </div>

            <!-- Cart button if items exist -->
            <button
              v-if="cart.length > 0"
              @click="isCheckoutOpen = true"
              class="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1A] text-white text-xs font-bold shadow-md hover:bg-[#FF7F11] transition-colors"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Checkout ({{ cart.length }})</span>
            </button>
          </div>
        </div>

        <!-- Filter Category Tabs -->
        <div class="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar border-t border-[#EAE4E4]/60">
          <button
            v-for="category in categories"
            :key="category.id"
            type="button"
            :class="[
              'px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0',
              selectedCategory === category.id
                ? 'bg-[#FF7F11] text-white shadow-md shadow-[#FF7F11]/25'
                : 'bg-[#FBF6F6] text-[#524F4E] hover:bg-[#EFE9E9] hover:text-[#1A1A1A]'
            ]"
            @click="selectedCategory = category.id"
          >
            {{ category.label }}
            <span class="ml-1 opacity-75 font-normal">({{ getCategoryCount(category.id) }})</span>
          </button>
        </div>
      </div>

      <!-- Products Grid -->
      <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="bg-white border border-[#EAE4E4] hover:border-[#FF7F11]/60 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
        >
          <!-- Popular / Best Seller Flag -->
          <div
            v-if="product.isBestseller"
            class="absolute top-0 right-0 bg-gradient-to-l from-[#FF7F11] to-[#E66800] text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-xl tracking-wider shadow-sm"
          >
            🔥 Best Seller
          </div>

          <div class="space-y-5">
            <!-- Header Badges & Category -->
            <div class="flex items-center justify-between pb-3 border-b border-[#EAE4E4]">
              <UiBadge :variant="product.badgeVariant || 'amber'">
                {{ product.categoryLabel }}
              </UiBadge>
              <div class="flex items-center gap-1 text-xs text-[#FF7F11] font-bold">
                <span>★ {{ product.rating }}</span>
                <span class="text-[#8C8685] font-normal">({{ product.reviewCount }})</span>
              </div>
            </div>

            <!-- Title & Pitch -->
            <div>
              <h2 class="font-display font-black text-xl text-[#1A1A1A] group-hover:text-[#FF7F11] transition-colors leading-snug">
                {{ product.title }}
              </h2>
              <p class="text-xs text-[#524F4E] leading-relaxed mt-2 line-clamp-3">
                {{ product.description }}
              </p>
            </div>

            <!-- Price Display -->
            <div class="flex items-baseline gap-2 pt-1">
              <span class="font-display font-black text-2xl text-[#1A1A1A]">
                {{ formatPrice(product.priceUsd, product.priceInr) }}
              </span>
              <span class="text-xs text-[#8C8685] line-through" v-if="product.originalPriceUsd">
                {{ formatPrice(product.originalPriceUsd, product.originalPriceInr) }}
              </span>
              <span class="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Save {{ calculateDiscount(product.priceUsd, product.originalPriceUsd) }}%
              </span>
            </div>

            <!-- Features / Includes List -->
            <div class="space-y-2 pt-2 bg-[#FBF6F6] p-4 rounded-2xl border border-[#EAE4E4]/60">
              <div class="text-[10px] font-mono uppercase text-[#8C8685] font-bold tracking-wider">What You Get:</div>
              <ul class="space-y-1.5">
                <li
                  v-for="(item, i) in product.includes"
                  :key="i"
                  class="flex items-start gap-2 text-xs text-[#524F4E]"
                >
                  <span class="text-[#FF7F11] font-bold shrink-0 mt-0.5">&check;</span>
                  <span class="line-clamp-1">{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Actions: Quick View & Buy Now -->
          <div class="pt-6 mt-6 border-t border-[#EAE4E4] space-y-2.5">
            <div class="grid grid-cols-2 gap-2">
              <button
                type="button"
                @click="openPreview(product)"
                class="px-3 py-2.5 rounded-xl border border-[#EAE4E4] hover:bg-[#FBF6F6] text-[#1A1A1A] text-xs font-bold transition-colors text-center"
              >
                View Details
              </button>
              <button
                type="button"
                @click="startBuyNow(product)"
                class="px-3 py-2.5 rounded-xl bg-[#FF7F11] hover:bg-[#FF9334] text-white text-xs font-bold transition-all shadow-md shadow-[#FF7F11]/25 text-center"
              >
                Buy Now &rarr;
              </button>
            </div>
            <div class="flex items-center justify-center gap-2 text-[11px] text-[#8C8685]">
              <span>⚡ Instant Access</span>
              <span>&middot;</span>
              <span>🔒 30-Day Money Back</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State when no results found -->
      <div v-else class="text-center py-20 bg-white rounded-3xl border border-[#EAE4E4] p-8 max-w-xl mx-auto shadow-sm">
        <div class="text-4xl mb-4">🔍</div>
        <h3 class="font-display font-bold text-xl text-[#1A1A1A] mb-2">No products found</h3>
        <p class="text-xs text-[#524F4E] mb-6">No digital products matched your current search or category filter.</p>
        <button
          type="button"
          @click="resetFilters"
          class="px-5 py-2.5 rounded-full bg-[#FF7F11] text-white text-xs font-bold shadow-md shadow-[#FF7F11]/25"
        >
          Reset Filters
        </button>
      </div>

      <!-- Trust, Security & Instant Delivery Guarantees -->
      <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 shadow-xl mb-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          <div class="space-y-2">
            <div class="w-10 h-10 rounded-xl bg-[#FFF8F2] border border-[#FF7F11]/20 flex items-center justify-center text-[#FF7F11] font-bold mx-auto md:mx-0">
              ⚡
            </div>
            <h3 class="font-display font-bold text-sm text-[#1A1A1A]">Instant Digital Delivery</h3>
            <p class="text-xs text-[#524F4E] leading-relaxed">Direct download access to Notion databases, PDF templates, and video walkthroughs immediately after checkout.</p>
          </div>

          <div class="space-y-2">
            <div class="w-10 h-10 rounded-xl bg-[#FFF8F2] border border-[#FF7F11]/20 flex items-center justify-center text-[#FF7F11] font-bold mx-auto md:mx-0">
              🛡️
            </div>
            <h3 class="font-display font-bold text-sm text-[#1A1A1A]">100% Satisfaction Guarantee</h3>
            <p class="text-xs text-[#524F4E] leading-relaxed">If any toolkit doesn't save you at least 20 hours or bring actionable clarity, get a full refund within 30 days.</p>
          </div>

          <div class="space-y-2">
            <div class="w-10 h-10 rounded-xl bg-[#FFF8F2] border border-[#FF7F11]/20 flex items-center justify-center text-[#FF7F11] font-bold mx-auto md:mx-0">
              🔄
            </div>
            <h3 class="font-display font-bold text-sm text-[#1A1A1A]">Lifetime Free Updates</h3>
            <p class="text-xs text-[#524F4E] leading-relaxed">As algorithms, AI prompts, and coaching sales frameworks evolve, you automatically receive free template updates.</p>
          </div>

          <div class="space-y-2">
            <div class="w-10 h-10 rounded-xl bg-[#FFF8F2] border border-[#FF7F11]/20 flex items-center justify-center text-[#FF7F11] font-bold mx-auto md:mx-0">
              💳
            </div>
            <h3 class="font-display font-bold text-sm text-[#1A1A1A]">Multi-Currency & UPI</h3>
            <p class="text-xs text-[#524F4E] leading-relaxed">Seamlessly checkout with Stripe, Credit/Debit Cards, or Indian UPI (Google Pay, PhonePe, Paytm, QR).</p>
          </div>
        </div>
      </div>

      <!-- FAQ Accordion Section -->
      <div class="max-w-3xl mx-auto space-y-6">
        <h3 class="font-display font-black text-2xl text-center text-[#1A1A1A]">Frequently Asked Questions</h3>
        <div class="space-y-3">
          <div
            v-for="(faq, idx) in shopFaqs"
            :key="idx"
            class="bg-white border border-[#EAE4E4] rounded-2xl overflow-hidden shadow-sm"
          >
            <button
              type="button"
              @click="toggleFaq(idx)"
              class="w-full px-6 py-4 text-left flex items-center justify-between text-sm font-bold text-[#1A1A1A] hover:text-[#FF7F11] transition-colors"
            >
              <span>{{ faq.question }}</span>
              <span class="text-base text-[#8C8685]">{{ openFaqIndex === idx ? '−' : '+' }}</span>
            </button>
            <div
              v-show="openFaqIndex === idx"
              class="px-6 pb-4 pt-1 text-xs text-[#524F4E] leading-relaxed border-t border-[#EAE4E4]/60 bg-[#FBF6F6]/50"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </UiContainer>

    <!-- Product Preview Modal -->
    <div
      v-if="isPreviewOpen && selectedProduct"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
      @click.self="isPreviewOpen = false"
    >
      <div class="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#EAE4E4] relative my-8">
        <!-- Close Button -->
        <button
          type="button"
          @click="isPreviewOpen = false"
          class="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FBF6F6] border border-[#EAE4E4] flex items-center justify-center text-sm font-bold hover:bg-[#EAE4E4]"
        >
          &times;
        </button>

        <div class="space-y-6">
          <div class="flex items-center gap-2">
            <UiBadge :variant="selectedProduct.badgeVariant || 'amber'">{{ selectedProduct.categoryLabel }}</UiBadge>
            <span class="text-xs text-[#8C8685]">Format: {{ selectedProduct.format }}</span>
          </div>

          <div>
            <h2 class="font-display font-black text-2xl sm:text-3xl text-[#1A1A1A] mb-2">
              {{ selectedProduct.title }}
            </h2>
            <p class="text-sm text-[#524F4E] leading-relaxed">
              {{ selectedProduct.longDescription || selectedProduct.description }}
            </p>
          </div>

          <!-- Price & Discount -->
          <div class="p-4 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 flex items-center justify-between">
            <div>
              <div class="text-[11px] font-mono text-[#FF7F11] font-bold uppercase">One-Time Investment</div>
              <div class="flex items-baseline gap-2">
                <span class="font-display font-black text-2xl text-[#1A1A1A]">
                  {{ formatPrice(selectedProduct.priceUsd, selectedProduct.priceInr) }}
                </span>
                <span class="text-xs text-[#8C8685] line-through" v-if="selectedProduct.originalPriceUsd">
                  {{ formatPrice(selectedProduct.originalPriceUsd, selectedProduct.originalPriceInr) }}
                </span>
              </div>
            </div>
            <div class="text-right text-xs text-[#524F4E]">
              <div class="font-bold text-emerald-600">✓ Instant Download</div>
              <div>Lifetime Updates Included</div>
            </div>
          </div>

          <!-- Breakdown list -->
          <div class="space-y-3">
            <div class="text-xs font-mono uppercase text-[#1A1A1A] font-bold">Complete Package Contents:</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div
                v-for="(item, i) in selectedProduct.includes"
                :key="i"
                class="p-3 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] text-xs text-[#524F4E] flex items-start gap-2"
              >
                <span class="text-[#FF7F11] font-bold shrink-0">&check;</span>
                <span>{{ item }}</span>
              </div>
            </div>
          </div>

          <!-- Modal Action -->
          <div class="pt-4 border-t border-[#EAE4E4] flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              @click="startBuyNow(selectedProduct)"
              class="w-full sm:flex-1 py-3.5 rounded-xl bg-[#FF7F11] hover:bg-[#FF9334] text-white font-bold text-sm shadow-md shadow-[#FF7F11]/25 text-center transition-transform hover:scale-[1.01]"
            >
              Buy Now for {{ formatPrice(selectedProduct.priceUsd, selectedProduct.priceInr) }} &rarr;
            </button>
            <button
              type="button"
              @click="isPreviewOpen = false"
              class="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-[#EAE4E4] text-xs font-bold text-[#524F4E] hover:bg-[#FBF6F6]"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Instant Checkout Drawer / Modal -->
    <div
      v-if="isCheckoutOpen && checkoutItem"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
      @click.self="isCheckoutOpen = false"
    >
      <div class="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#EAE4E4] relative my-8">
        <!-- Close button -->
        <button
          type="button"
          @click="isCheckoutOpen = false"
          class="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FBF6F6] border border-[#EAE4E4] flex items-center justify-center text-sm font-bold hover:bg-[#EAE4E4]"
        >
          &times;
        </button>

        <!-- Order Success State -->
        <div v-if="orderSuccess" class="text-center py-6 space-y-4">
          <div class="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center text-2xl mx-auto">
            ✓
          </div>
          <h3 class="font-display font-black text-2xl text-[#1A1A1A]">Payment Successful!</h3>
          <p class="text-xs text-[#524F4E] max-w-md mx-auto leading-relaxed">
            Thank you <strong class="text-[#1A1A1A]">{{ customerName || 'Coach' }}</strong>! Your purchase of <strong class="text-[#FF7F11]">{{ checkoutItem.title }}</strong> is confirmed.
          </p>

          <div class="p-4 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] text-left space-y-2 text-xs">
            <div class="flex justify-between font-mono text-[#8C8685]">
              <span>Order Ref:</span>
              <span class="font-bold text-[#1A1A1A]">#DC-{{ Math.floor(100000 + Math.random() * 900000) }}</span>
            </div>
            <div class="flex justify-between font-mono text-[#8C8685]">
              <span>Delivered To:</span>
              <span class="font-bold text-[#1A1A1A]">{{ customerEmail }}</span>
            </div>
            <div class="flex justify-between font-mono text-[#8C8685]">
              <span>Total Paid:</span>
              <span class="font-bold text-[#FF7F11]">{{ formatFinalPrice() }}</span>
            </div>
          </div>

          <div class="pt-4 space-y-3">
            <button
              type="button"
              @click="simulateDownload"
              class="w-full py-3.5 rounded-xl bg-[#FF7F11] hover:bg-[#FF9334] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#FF7F11]/25 flex items-center justify-center gap-2"
            >
              <span>Download Digital Assets Now (.ZIP / Notion Links)</span>
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
            <p v-if="downloadTriggered" class="text-[11px] text-emerald-600 font-bold animate-pulse">
              ✓ Download initiated! Check your downloads folder.
            </p>
            <button
              type="button"
              @click="closeCheckout"
              class="text-xs text-[#8C8685] hover:text-[#1A1A1A] font-semibold"
            >
              Return to Store
            </button>
          </div>
        </div>

        <!-- Checkout Form State -->
        <div v-else class="space-y-6">
          <div class="border-b border-[#EAE4E4] pb-4">
            <div class="text-[10px] font-mono text-[#FF7F11] font-bold uppercase">Express Digital Checkout</div>
            <h3 class="font-display font-black text-xl text-[#1A1A1A]">
              {{ checkoutItem.title }}
            </h3>
          </div>

          <!-- Customer Details Form -->
          <form @submit.prevent="processOrder" class="space-y-4">
            <div class="space-y-3">
              <div>
                <label class="block text-xs font-bold text-[#1A1A1A] mb-1">Full Name</label>
                <input
                  v-model="customerName"
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE4E4] bg-[#FBF6F6] text-xs text-[#1A1A1A] focus:ring-2 focus:ring-[#FF7F11] focus:outline-none"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-[#1A1A1A] mb-1">Email Address (Where products are sent)</label>
                <input
                  v-model="customerEmail"
                  type="email"
                  required
                  placeholder="name@company.com"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE4E4] bg-[#FBF6F6] text-xs text-[#1A1A1A] focus:ring-2 focus:ring-[#FF7F11] focus:outline-none"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-[#1A1A1A] mb-1">WhatsApp / Phone Number</label>
                <input
                  v-model="customerPhone"
                  type="tel"
                  placeholder="+1 555-0199 or +91 98765 43210"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE4E4] bg-[#FBF6F6] text-xs text-[#1A1A1A] focus:ring-2 focus:ring-[#FF7F11] focus:outline-none"
                />
              </div>
            </div>

            <!-- Order Bump Offer -->
            <div class="p-3.5 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/40 flex items-start gap-3">
              <input
                id="orderBump"
                v-model="includeOrderBump"
                type="checkbox"
                class="mt-1 w-4 h-4 rounded text-[#FF7F11] focus:ring-[#FF7F11]"
              />
              <label for="orderBump" class="text-xs cursor-pointer select-none">
                <span class="font-bold text-[#1A1A1A]">One-Time Addon:</span>
                <span class="text-[#524F4E]"> Add the 100+ High-Converting Coaching Email Sequence Pack for only </span>
                <strong class="text-[#FF7F11]">{{ currency === 'USD' ? '+$19' : '+₹1,499' }}</strong>
                <span class="text-[#8C8685] line-through ml-1">{{ currency === 'USD' ? '$49' : '₹3,999' }}</span>
              </label>
            </div>

            <!-- Coupon Code input -->
            <div class="flex gap-2">
              <input
                v-model="couponCode"
                type="text"
                placeholder="Discount code (try: EARLYBIRD)"
                class="flex-1 px-3 py-2 rounded-xl border border-[#EAE4E4] bg-[#FBF6F6] text-xs text-[#1A1A1A] uppercase focus:outline-none focus:ring-2 focus:ring-[#FF7F11]"
              />
              <button
                type="button"
                @click="applyCoupon"
                class="px-4 py-2 rounded-xl bg-[#1A1A1A] hover:bg-[#FF7F11] text-white text-xs font-bold transition-colors"
              >
                Apply
              </button>
            </div>
            <p v-if="couponSuccess" class="text-[11px] text-emerald-600 font-bold">✓ Promo code applied: 20% OFF</p>
            <p v-if="couponError" class="text-[11px] text-rose-500 font-bold">✕ Invalid promo code</p>

            <!-- Payment Method Selection -->
            <div class="space-y-2 pt-2 border-t border-[#EAE4E4]">
              <label class="block text-xs font-bold text-[#1A1A1A]">Select Payment Gateway</label>
              <div class="grid grid-cols-2 gap-2">
                <label
                  :class="[
                    'p-3 rounded-xl border flex items-center gap-2 cursor-pointer text-xs font-semibold transition-all',
                    paymentMethod === 'card' ? 'border-[#FF7F11] bg-[#FFF8F2] text-[#FF7F11]' : 'border-[#EAE4E4] bg-white text-[#524F4E]'
                  ]"
                >
                  <input type="radio" v-model="paymentMethod" value="card" class="hidden" />
                  <span>💳 Card / Stripe</span>
                </label>

                <label
                  :class="[
                    'p-3 rounded-xl border flex items-center gap-2 cursor-pointer text-xs font-semibold transition-all',
                    paymentMethod === 'upi' ? 'border-[#FF7F11] bg-[#FFF8F2] text-[#FF7F11]' : 'border-[#EAE4E4] bg-white text-[#524F4E]'
                  ]"
                >
                  <input type="radio" v-model="paymentMethod" value="upi" class="hidden" />
                  <span>📱 UPI / Razorpay</span>
                </label>
              </div>
            </div>

            <!-- Price Breakdown Summary -->
            <div class="p-3.5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1.5 text-xs text-[#524F4E]">
              <div class="flex justify-between">
                <span>Item Subtotal:</span>
                <span>{{ formatPrice(checkoutItem.priceUsd, checkoutItem.priceInr) }}</span>
              </div>
              <div v-if="includeOrderBump" class="flex justify-between text-[#FF7F11]">
                <span>Addon (Email Pack):</span>
                <span>{{ currency === 'USD' ? '+$19' : '+₹1,499' }}</span>
              </div>
              <div v-if="discountApplied > 0" class="flex justify-between text-emerald-600">
                <span>Discount (20% Off):</span>
                <span>-{{ formatPrice(discountAmountUsd, discountAmountInr) }}</span>
              </div>
              <div class="flex justify-between font-bold text-sm text-[#1A1A1A] pt-2 border-t border-[#EAE4E4]">
                <span>Total Amount:</span>
                <span class="text-[#FF7F11] font-display font-black text-base">{{ formatFinalPrice() }}</span>
              </div>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isProcessing"
              class="w-full py-4 rounded-xl bg-[#FF7F11] hover:bg-[#FF9334] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#FF7F11]/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <span v-if="isProcessing">Processing Secure Payment...</span>
              <span v-else>Pay {{ formatFinalPrice() }} & Complete Order &rarr;</span>
            </button>

            <div class="flex items-center justify-center gap-2 text-[10px] text-[#8C8685]">
              <span>🔒 256-Bit SSL Encrypted</span>
              <span>&middot;</span>
              <span>Instant Download Access</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Digital Coach Shop - Premium Toolkits, Notion OS & Frameworks',
  description: 'Download plug-and-play Notion operating systems, diagnostic sales scripts, automated funnels, and AI prompt suites to scale your expert business.',
  ogTitle: 'Digital Coach Store & Toolkits',
  ogDescription: 'Instant-access business operating systems, scripts, and frameworks for high-ticket coaches and consultants.'
})

// State
const currency = ref<'USD' | 'INR'>('USD')
const searchQuery = ref('')
const selectedCategory = ref('all')
const cart = ref<any[]>([])

// Modal controls
const isPreviewOpen = ref(false)
const selectedProduct = ref<any>(null)

const isCheckoutOpen = ref(false)
const checkoutItem = ref<any>(null)
const customerName = ref('')
const customerEmail = ref('')
const customerPhone = ref('')
const includeOrderBump = ref(false)
const couponCode = ref('')
const couponSuccess = ref(false)
const couponError = ref(false)
const discountApplied = ref(0)
const paymentMethod = ref<'card' | 'upi'>('card')
const isProcessing = ref(false)
const orderSuccess = ref(false)
const downloadTriggered = ref(false)

const openFaqIndex = ref<number | null>(null)

// Categories
const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'templates', label: 'Notion Systems' },
  { id: 'sales', label: 'Sales & Conversion' },
  { id: 'funnels', label: 'Funnels & Marketing' },
  { id: 'ai', label: 'AI Prompts & Automation' },
  { id: 'courses', label: 'Masterclasses' }
]

// Digital Products Catalog
const products = [
  {
    id: 1,
    category: 'templates',
    categoryLabel: 'Notion System',
    badgeVariant: 'amber',
    isBestseller: true,
    rating: '4.9',
    reviewCount: 142,
    format: 'Notion Workspace + Video Guide',
    title: 'CoachOS™ Master Notion Operating System',
    priceUsd: 97,
    originalPriceUsd: 197,
    priceInr: 7999,
    originalPriceInr: 15999,
    description: 'The all-in-one centralized digital workspace for high-ticket client onboarding, pipeline CRM, curriculum delivery, and revenue dashboard.',
    longDescription: 'CoachOS is an enterprise-grade Notion architecture specifically tailored for coaches and consultants. It eliminates tool fatigue by consolidating CRM tracking, client portals, action item databases, and content generation into one sleek dashboard.',
    includes: [
      'Client Portal & Progress Milestone Tracker',
      'High-Ticket Pipeline & Lead Stage CRM',
      'Content Multiplication Kanban & Vault',
      'SOP & Digital Resource Library Database',
      '60-Minute Loom Setup & Walkthrough Video'
    ]
  },
  {
    id: 2,
    category: 'sales',
    categoryLabel: 'Sales & Closing',
    badgeVariant: 'amber',
    isBestseller: true,
    rating: '5.0',
    reviewCount: 98,
    format: 'PDF + Editable Google Docs + Audio Breakdown',
    title: 'Diagnostic Enrollment & Sales Script Vault',
    priceUsd: 67,
    originalPriceUsd: 147,
    priceInr: 5499,
    originalPriceInr: 11999,
    description: 'Word-for-word conversation frameworks and diagnostic triage scripts that convert qualified discovery calls into high-ticket clients without friction.',
    longDescription: 'Say goodbye to high-pressure closing. This script vault focuses on diagnostic clarity and gap analysis, leading high-income prospects to naturally request working with you.',
    includes: [
      '30-Minute Diagnostic Discovery Script',
      'WhatsApp Triage & Voice Note Conversation Frameworks',
      'Price & Timing Objection Handling Matrix',
      'Post-Call Proposal & Follow-up Sequences'
    ]
  },
  {
    id: 3,
    category: 'funnels',
    categoryLabel: 'Funnels & Ads',
    badgeVariant: 'amber',
    isBestseller: false,
    rating: '4.8',
    reviewCount: 76,
    format: 'Keynote, Canva, Figma & Figma Templates',
    title: 'Live Masterclass & Webinar Funnel Blueprint',
    priceUsd: 127,
    originalPriceUsd: 247,
    priceInr: 9999,
    originalPriceInr: 19999,
    description: 'The exact high-conversion slide decks, registration wireframes, and show-up SMS/Email campaigns for 90-minute live masterclasses.',
    longDescription: 'Turn cold traffic into eager buyers. This kit includes the entire customer acquisition journey for high-ticket masterclasses, from Meta ad copy to the final closing slide deck.',
    includes: [
      '45-Slide High-Converting Pitch Presentation Deck',
      'Pre-built Registration & Thank You Page Templates',
      'WhatsApp & SMS Show-Up Automation Sequences',
      'Post-Webinar 5-Day Flash Replay Campaign'
    ]
  },
  {
    id: 4,
    category: 'ai',
    categoryLabel: 'AI & Automation',
    badgeVariant: 'amber',
    isBestseller: true,
    rating: '4.9',
    reviewCount: 115,
    format: 'Notion Database + JSON Prompts + Video Guide',
    title: 'AI Coaching Assistant 150+ Prompt Suite',
    priceUsd: 47,
    originalPriceUsd: 97,
    priceInr: 3999,
    originalPriceInr: 7999,
    description: 'Engineered prompts to generate customized coaching curriculum, client diagnostic reports, social authority content, and email sequences in seconds.',
    longDescription: 'Supercharge your coaching leverage with tailored AI prompts for ChatGPT, Claude, and Gemini. Stop staring at a blank screen and start generating high-ticket assets in minutes.',
    includes: [
      'Curriculum Synthesizer & Homework Generator Prompts',
      'Client Diagnostic Report & Gap Assessment Maker',
      'Thought Leadership & Hook Architect Engine',
      'Custom GPT Agent Instructions & System Prompts'
    ]
  },
  {
    id: 5,
    category: 'funnels',
    categoryLabel: 'Lead Generation',
    badgeVariant: 'amber',
    isBestseller: false,
    rating: '4.7',
    reviewCount: 64,
    format: 'Typeform / ScoreApp Templates + Copy Blueprint',
    title: 'Interactive Scorecard & Quiz Funnel Kit',
    priceUsd: 77,
    originalPriceUsd: 149,
    priceInr: 5999,
    originalPriceInr: 11999,
    description: 'Build your own viral diagnostic assessment that pre-qualifies prospects, calculates readiness scores, and feeds high-intent leads to your calendar.',
    longDescription: 'Diagnostic lead magnets outperform generic PDFs by 300%. This blueprint gives you the exact questions, scoring algorithms, and personalized result page copy to deploy your own scorecard.',
    includes: [
      'Assessment Question Architecture Matrix',
      'Multi-Tier Scoring & Recommendation Logic',
      'Personalized Dynamic Result Page Copy',
      'Scorecard Lead Nurture Email Sequence'
    ]
  },
  {
    id: 6,
    category: 'courses',
    categoryLabel: 'Masterclass',
    badgeVariant: 'amber',
    isBestseller: true,
    rating: '5.0',
    reviewCount: 88,
    format: 'Video Masterclass + Workbook + Figma Architecture',
    title: 'Flagship Offer Architecture Masterclass',
    priceUsd: 89,
    originalPriceUsd: 179,
    priceInr: 6999,
    originalPriceInr: 13999,
    description: '3-hour masterclass teaching you how to package domain expertise into a premium $3,000–$10,000 flagship transformation program.',
    longDescription: 'Learn how to transition away from selling hours or low-ticket sessions into commanding premium retainer and high-ticket cohort fees with irresistible positioning.',
    includes: [
      '3-Hour High-Definition Video Training',
      'Step-by-Step Transformation Roadmap Workbook',
      'Tiered Pricing & Profit Margin Calculator',
      'Client Onboarding Contract Agreement Template'
    ]
  }
]

// Computed product count
const getCategoryCount = (catId: string) => {
  if (catId === 'all') return products.length
  return products.filter(p => p.category === catId).length
}

// Filtered products
const filteredProducts = computed(() => {
  return products.filter(product => {
    const matchesCategory = selectedCategory.value === 'all' || product.category === selectedCategory.value
    const matchesSearch = searchQuery.value.trim() === '' ||
      product.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      product.categoryLabel.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesSearch
  })
})

// Helpers for pricing
const formatPrice = (usd: number, inr: number) => {
  if (currency.value === 'INR') {
    return `₹${inr.toLocaleString('en-IN')}`
  }
  return `$${usd}`
}

const calculateDiscount = (price: number, original: number) => {
  if (!original || original <= price) return 0
  return Math.round(((original - price) / original) * 100)
}

const resetFilters = () => {
  selectedCategory.value = 'all'
  searchQuery.value = ''
}

// Modal handling
const openPreview = (product: any) => {
  selectedProduct.value = product
  isPreviewOpen.value = true
}

const startBuyNow = (product: any) => {
  checkoutItem.value = product
  isPreviewOpen.value = false
  isCheckoutOpen.value = true
  orderSuccess.value = false
  downloadTriggered.value = false
  couponSuccess.value = false
  couponError.value = false
  discountApplied.value = 0
}

const closeCheckout = () => {
  isCheckoutOpen.value = false
  orderSuccess.value = false
}

// Coupon Logic
const applyCoupon = () => {
  if (couponCode.value.trim().toUpperCase() === 'EARLYBIRD' || couponCode.value.trim().toUpperCase() === 'COACH20') {
    discountApplied.value = 0.2 // 20% off
    couponSuccess.value = true
    couponError.value = false
  } else {
    couponSuccess.value = false
    couponError.value = true
    discountApplied.value = 0
  }
}

const discountAmountUsd = computed(() => {
  if (!checkoutItem.value) return 0
  let base = checkoutItem.value.priceUsd
  if (includeOrderBump.value) base += 19
  return Math.round(base * discountApplied.value)
})

const discountAmountInr = computed(() => {
  if (!checkoutItem.value) return 0
  let base = checkoutItem.value.priceInr
  if (includeOrderBump.value) base += 1499
  return Math.round(base * discountApplied.value)
})

const formatFinalPrice = () => {
  if (!checkoutItem.value) return ''
  if (currency.value === 'INR') {
    let total = checkoutItem.value.priceInr
    if (includeOrderBump.value) total += 1499
    if (discountApplied.value > 0) total -= discountAmountInr.value
    return `₹${total.toLocaleString('en-IN')}`
  } else {
    let total = checkoutItem.value.priceUsd
    if (includeOrderBump.value) total += 19
    if (discountApplied.value > 0) total -= discountAmountUsd.value
    return `$${total}`
  }
}

// Order Submission Simulation
const processOrder = () => {
  isProcessing.value = true
  setTimeout(() => {
    isProcessing.value = false
    orderSuccess.value = true
  }, 1200)
}

const simulateDownload = () => {
  downloadTriggered.value = true
}

// FAQ Accordion
const toggleFaq = (index: number) => {
  openFaqIndex.value = openFaqIndex.value === index ? null : index
}

const shopFaqs = [
  {
    question: 'How do I receive access after purchasing?',
    answer: 'Immediately upon checkout completion, you will be redirected to an instant download page with direct Notion duplicate links, editable Google Docs, and asset ZIP files. An automated confirmation email with permanent download links is also sent.'
  },
  {
    question: 'Do I need paid Notion or Figma accounts to use these?',
    answer: 'No. All our Notion templates and Figma assets work 100% smoothly on free personal accounts. No paid software subscriptions are required.'
  },
  {
    question: 'What is your refund policy?',
    answer: 'We provide an unconditional 30-day money-back guarantee. If any product does not immediately streamline your business operations or save you hours of work, simply email us for a full refund.'
  },
  {
    question: 'Can I customize the templates for my own clients?',
    answer: 'Yes! You have full commercial license to customize, rebrand, and use all frameworks, diagnostic assessments, and workflows in your 1-on-1 coaching, cohort programs, or consulting client engagements.'
  }
]
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.98) translateY(6px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.2s ease-out forwards;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
