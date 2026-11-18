<template>
  <div class="py-24 sm:py-32 bg-[#F1F3F6] min-h-screen text-[#212121]">
    <!-- Top Flipkart Banner & Breadcrumb Header -->
    <div class="bg-[#171844] text-white py-10 px-4 mb-8 shadow-md border-b-4 border-[#2874F0]">
      <UiContainer size="xl">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-2 max-w-2xl">
            <div class="flex items-center gap-2 text-xs text-[#F8D78B] font-bold uppercase tracking-wider">
              <span>🏠 Home</span>
              <span>&gt;</span>
              <span>Narayan Presence Store</span>
              <span>&gt;</span>
              <span class="text-white">All Offerings</span>
            </div>
            <h1 class="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
              NARAYAN PRESENCE STORE &amp; CURRICULUM
            </h1>
            <p class="text-xs sm:text-sm text-[#EAE2D4]/90 leading-relaxed">
              Explore conscious awareness resources, workbooks, live workshops, specialized courses, and 1-on-1 private mentoring.
            </p>
          </div>

          <!-- Flipkart Style Quick Trust Badges -->
          <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-3 text-left">
            <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
              <span class="text-xl">⚡</span>
              <div>
                <div class="text-[11px] font-bold text-white">Instant Delivery</div>
                <div class="text-[9px] text-[#EAE2D4]/70">Digital access in 30s</div>
              </div>
            </div>
            <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
              <span class="text-xl">✨</span>
              <div>
                <div class="text-[11px] font-bold text-[#FFE11B]">Narayan Assured</div>
                <div class="text-[9px] text-[#EAE2D4]/70">100% Verified Quality</div>
              </div>
            </div>
            <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
              <span class="text-xl">🔒</span>
              <div>
                <div class="text-[11px] font-bold text-white">Safe &amp; Secure</div>
                <div class="text-[9px] text-[#EAE2D4]/70">UPI / NetBanking / Cards</div>
              </div>
            </div>
            <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
              <span class="text-xl">⭐</span>
              <div>
                <div class="text-[11px] font-bold text-white">4.9+ Rating</div>
                <div class="text-[9px] text-[#EAE2D4]/70">15,000+ Seekers</div>
              </div>
            </div>
          </div>
        </div>
      </UiContainer>
    </div>

    <UiContainer size="xl">
      <!-- Search, Category Filter & Sorting Controls Bar -->
      <div class="bg-white border border-[#EAE2D4] rounded-2xl p-4 sm:p-5 mb-8 shadow-sm space-y-4">
        <!-- Search and Sort Row -->
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <!-- Live Search Bar -->
          <div class="relative w-full md:w-96">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search products, courses, workbooks, coaching..."
              class="w-full pl-10 pr-8 py-2.5 rounded-xl border border-[#EAE2D4] bg-[#FAFAFA] text-xs sm:text-sm text-[#212121] placeholder-[#878787] focus:outline-none focus:ring-2 focus:ring-[#2874F0] focus:border-transparent transition-all"
            />
            <svg class="w-4 h-4 text-[#878787] absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <button
              v-if="searchQuery"
              @click="searchQuery = ''"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#878787] hover:text-[#212121]"
            >
              &times;
            </button>
          </div>

          <!-- Sort and Cart Trigger Row -->
          <div class="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <!-- Sort dropdown -->
            <div class="flex items-center gap-1.5 text-xs text-[#878787]">
              <span class="font-bold">Sort By:</span>
              <select
                v-model="sortBy"
                class="bg-[#FAFAFA] border border-[#EAE2D4] rounded-lg px-2.5 py-2 text-xs font-semibold text-[#212121] focus:outline-none focus:ring-1 focus:ring-[#2874F0]"
              >
                <option value="popular">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
              </select>
            </div>

            <!-- Wishlist Trigger Pill -->
            <button
              type="button"
              class="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-[#EAE2D4] hover:bg-pink-50 text-[#171844] text-xs font-bold transition-colors cursor-pointer shadow-sm"
              @click="isWishlistOpen = true"
            >
              <svg class="w-4 h-4 text-[#FF3E6C] fill-[#FF3E6C]" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>Wishlist ({{ wishlist.length }})</span>
            </button>

            <!-- Cart Trigger Pill -->
            <button
              type="button"
              class="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2874F0] hover:bg-[#1C5BC4] text-white text-xs font-bold shadow-md transition-all cursor-pointer hover:scale-[1.02]"
              @click="isCartOpen = true"
            >
              <svg class="w-4 h-4 text-[#FFE11B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Cart ({{ cartTotalCount }})</span>
            </button>
          </div>
        </div>

        <!-- Flipkart Style Category Tabs -->
        <div class="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar border-t border-[#EAE2D4]/80">
          <button
            v-for="cat in categoryFilters"
            :key="cat.id"
            type="button"
            :class="[
              'px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all shrink-0 cursor-pointer',
              selectedCategory === cat.id
                ? 'bg-[#2874F0] text-white shadow-sm'
                : 'bg-[#FAFAFA] text-[#524F4E] hover:bg-[#EAE2D4] hover:text-[#212121] border border-[#EAE2D4]'
            ]"
            @click="selectedCategory = cat.id"
          >
            {{ cat.label }}
            <span class="ml-1 opacity-80 text-[10px]">({{ getCategoryCount(cat.id) }})</span>
          </button>
        </div>
      </div>

      <!-- Results Count Banner -->
      <div class="flex items-center justify-between mb-4 text-xs text-[#878787] px-1 font-medium">
        <div>
          Showing <strong class="text-[#212121]">{{ filteredProducts.length }}</strong> products &amp; courses
        </div>
        <div class="flex items-center gap-1.5 text-[#388E3C] font-bold">
          <span>⚡</span>
          <span>Instant Download &amp; Portal Enrollment Available</span>
        </div>
      </div>

      <!-- Product Cards Grid (Flipkart-Style) -->
      <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="bg-white border border-[#EAE2D4] hover:border-[#2874F0]/60 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1 relative"
        >
          <!-- Top Badges & Wishlist -->
          <div class="relative aspect-[4/3] overflow-hidden bg-[#FAFAFA] border-b border-[#EAE2D4]">
            <img
              :src="product.images[0]"
              :alt="product.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <!-- Bestseller Ribbon -->
            <div
              v-if="product.isBestseller"
              class="absolute top-2.5 left-2.5 bg-gradient-to-r from-[#FB641B] to-[#FF9F00] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded shadow-sm tracking-wider"
            >
              🔥 Bestseller
            </div>

            <!-- Wishlist Heart Toggle Button -->
            <button
              type="button"
              class="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
              :title="isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'"
              @click.stop="toggleWishlist(product.id)"
            >
              <svg
                class="w-4 h-4 transition-colors"
                :class="isInWishlist(product.id) ? 'text-[#FF3E6C] fill-[#FF3E6C]' : 'text-gray-400 fill-none'"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            <!-- Level Label at Bottom of Image -->
            <div class="absolute bottom-2 left-2.5 bg-[#171844]/80 backdrop-blur-md text-[#F8D78B] text-[10px] font-bold px-2 py-0.5 rounded border border-[#F8D78B]/20">
              Level: {{ product.level }}
            </div>
          </div>

          <!-- Card Body -->
          <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
            <div class="space-y-1.5">
              <!-- Assured Badge & Format -->
              <div class="flex items-center justify-between text-[11px] text-[#878787]">
                <span class="font-semibold text-[#8C6D57] truncate">{{ product.categoryLabel }}</span>
                <span v-if="product.isAssured" class="text-[#2874F0] font-black flex items-center gap-0.5 text-[10px]">
                  <span>✨</span>
                  <span>Assured</span>
                </span>
              </div>

              <!-- Product Title -->
              <h3
                class="font-display font-extrabold text-base text-[#171844] group-hover:text-[#2874F0] transition-colors leading-snug line-clamp-1 cursor-pointer"
                @click="openQuickView(product)"
              >
                {{ product.title }}
              </h3>

              <p class="text-xs text-[#524F4E] line-clamp-2 leading-relaxed">
                {{ product.shortDescription }}
              </p>
            </div>

            <!-- Rating Row -->
            <div class="flex items-center gap-2">
              <div class="inline-flex items-center gap-1 bg-[#388E3C] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                <span>{{ product.rating }}</span>
                <span>★</span>
              </div>
              <span class="text-[11px] text-[#878787]">({{ product.ratingCount.toLocaleString() }})</span>
            </div>

            <!-- Price Display (Flipkart Format) -->
            <div class="flex items-baseline gap-2 pt-1 border-t border-[#EAE2D4]/50">
              <span class="font-display font-black text-xl text-[#171844]">
                {{ product.price === 0 ? 'FREE' : `₹${product.price.toLocaleString('en-IN')}` }}
              </span>
              <span v-if="product.originalPrice > product.price" class="text-xs text-[#878787] line-through">
                ₹{{ product.originalPrice.toLocaleString('en-IN') }}
              </span>
              <span v-if="product.discountPercent > 0" class="text-xs font-bold text-[#388E3C]">
                {{ product.discountPercent }}% off
              </span>
            </div>

            <!-- Key Feature bullet -->
            <div class="text-[11px] text-[#524F4E] flex items-center gap-1.5 truncate">
              <span class="text-[#388E3C] font-bold">✓</span>
              <span class="truncate">{{ product.highlights[0] }}</span>
            </div>

            <!-- Flipkart Style Action Buttons: View Details, Add to Cart, Buy Now -->
            <div class="pt-2 space-y-2 border-t border-[#EAE2D4]/60">
              <div class="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  class="py-2.5 px-2 rounded-xl bg-[#FF9F00] hover:bg-[#F39700] text-white text-xs font-bold transition-all shadow-sm text-center flex items-center justify-center gap-1 cursor-pointer"
                  @click="handleCardAddToCart(product)"
                >
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Add to Cart</span>
                </button>
                <button
                  type="button"
                  class="py-2.5 px-2 rounded-xl bg-[#FB641B] hover:bg-[#E85611] text-white text-xs font-bold transition-all shadow-sm text-center flex items-center justify-center gap-1 cursor-pointer"
                  @click="startBuyNow(product)"
                >
                  <span>Buy Now &rarr;</span>
                </button>
              </div>
              <button
                type="button"
                class="w-full py-1.5 text-[11px] font-bold text-[#2874F0] hover:text-[#171844] hover:bg-[#FAFAFA] rounded-lg transition-colors text-center cursor-pointer"
                @click="openQuickView(product)"
              >
                View Details &amp; Reviews &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty Filter State -->
      <div v-else class="text-center py-20 bg-white rounded-2xl border border-[#EAE2D4] p-8 max-w-lg mx-auto shadow-sm space-y-4">
        <div class="text-4xl">🔍</div>
        <h3 class="font-display font-bold text-xl text-[#171844]">No Products Found</h3>
        <p class="text-xs text-[#878787]">
          No products matched "{{ searchQuery }}" in this category.
        </p>
        <button
          type="button"
          class="px-5 py-2 rounded-xl bg-[#2874F0] text-white text-xs font-bold transition-colors shadow-sm"
          @click="resetFilters"
        >
          Reset Filters
        </button>
      </div>

      <!-- Flipkart Style Bottom FAQs & Guarantee Cards -->
      <div class="bg-white border border-[#EAE2D4] rounded-2xl p-6 sm:p-8 shadow-sm mb-16 space-y-6">
        <div class="text-center max-w-xl mx-auto space-y-1">
          <h2 class="font-display font-extrabold text-2xl text-[#171844]">Frequently Asked Questions</h2>
          <p class="text-xs text-[#878787]">Everything you need to know about our digital store, ordering, and delivery.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto pt-2">
          <div class="p-4 rounded-xl bg-[#FAFAFA] border border-[#EAE2D4] space-y-1.5">
            <h4 class="font-bold text-xs text-[#171844]">⚡ How do I receive my products after ordering?</h4>
            <p class="text-xs text-[#524F4E] leading-relaxed">
              Delivery is instantaneous. As soon as payment completes, access links are generated on-screen and emailed directly to your inbox.
            </p>
          </div>
          <div class="p-4 rounded-xl bg-[#FAFAFA] border border-[#EAE2D4] space-y-1.5">
            <h4 class="font-bold text-xs text-[#171844]">🔒 Which payment methods are accepted?</h4>
            <p class="text-xs text-[#524F4E] leading-relaxed">
              We accept Indian UPI (Google Pay, PhonePe, Paytm, BHIM), all Debit &amp; Credit Cards, NetBanking, and international cards.
            </p>
          </div>
          <div class="p-4 rounded-xl bg-[#FAFAFA] border border-[#EAE2D4] space-y-1.5">
            <h4 class="font-bold text-xs text-[#171844]">📅 How do 1-on-1 private clarity sessions work?</h4>
            <p class="text-xs text-[#524F4E] leading-relaxed">
              After booking, you immediately receive a private calendar booking link to choose a date and time that fits your schedule.
            </p>
          </div>
          <div class="p-4 rounded-xl bg-[#FAFAFA] border border-[#EAE2D4] space-y-1.5">
            <h4 class="font-bold text-xs text-[#171844]">💬 Can I cancel the monthly Circle membership anytime?</h4>
            <p class="text-xs text-[#524F4E] leading-relaxed">
              Yes, absolutely. The Narayan Presence Circle membership can be cancelled anytime with a single click from your Student Portal.
            </p>
          </div>
        </div>
      </div>
    </UiContainer>

    <!-- Floating Flipkart-Style Action Bar (Fixed Bottom-Right) -->
    <div class="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      <!-- Floating Wishlist -->
      <button
        v-if="wishlist.length > 0"
        type="button"
        class="flex items-center gap-2 px-4 py-3 rounded-full bg-white text-[#171844] border-2 border-[#FF3E6C] shadow-xl hover:scale-105 transition-all cursor-pointer font-bold text-xs"
        @click="isWishlistOpen = true"
      >
        <span class="text-[#FF3E6C]">❤️</span>
        <span>Wishlist ({{ wishlist.length }})</span>
      </button>

      <!-- Floating Cart -->
      <button
        v-if="cartTotalCount > 0"
        type="button"
        class="flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#FB641B] hover:bg-[#E85611] text-white shadow-2xl hover:scale-105 transition-all cursor-pointer font-bold text-xs uppercase tracking-wider animate-bounce"
        @click="isCartOpen = true"
      >
        <span>🛒</span>
        <span>View Cart ({{ cartTotalCount }}) &middot; ₹{{ cartTotalPrice.toLocaleString('en-IN') }}</span>
      </button>
    </div>

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
  cart,
  wishlist,
  isCartOpen,
  isWishlistOpen,
  cartTotalCount,
  cartTotalPrice,
  addToCart,
  toggleWishlist,
  isInWishlist,
  openQuickView,
  startBuyNow
} = useShopCart()

useSeoMeta({
  title: 'Narayan Presence Shop — Conscious Living Resources & Curriculum',
  description: 'Order awareness resources, digital workbooks, live workshops, specialized courses, and 1-on-1 private coaching sessions.'
})

// Search & Filter state
const searchQuery = ref('')
const selectedCategory = ref('all')
const sortBy = ref<'popular' | 'price-low' | 'price-high' | 'rating'>('popular')

const categoryFilters = [
  { id: 'all', label: 'All Products' },
  { id: 'free', label: 'Free Awareness' },
  { id: 'entry', label: 'Workbooks & Entry' },
  { id: 'workshop', label: 'Live Workshops' },
  { id: 'course', label: 'Specialized Courses' },
  { id: 'private', label: '1-on-1 Private Coaching' },
  { id: 'premium', label: 'Executive Immersion' },
  { id: 'membership', label: 'Circle Membership' }
]

const getCategoryCount = (catId: string): number => {
  if (catId === 'all') return SHOP_PRODUCTS.length
  return SHOP_PRODUCTS.filter(p => p.category === catId).length
}

const filteredProducts = computed(() => {
  return SHOP_PRODUCTS.filter(p => {
    const matchesSearch =
      !searchQuery.value ||
      p.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      p.level.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesCategory =
      selectedCategory.value === 'all' || p.category === selectedCategory.value

    return matchesSearch && matchesCategory
  }).sort((a, b) => {
    if (sortBy.value === 'price-low') return a.price - b.price
    if (sortBy.value === 'price-high') return b.price - a.price
    if (sortBy.value === 'rating') return b.rating - a.rating
    return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0)
  })
})

const handleCardAddToCart = (product: ShopProduct) => {
  addToCart(product, 1)
  isCartOpen.value = true
}

const resetFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = 'all'
  sortBy.value = 'popular'
}
</script>
