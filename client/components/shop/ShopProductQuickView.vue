<template>
  <div
    v-if="isQuickViewOpen && activeQuickViewProduct"
    class="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
    @click.self="closeQuickView"
  >
    <div class="relative bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-[#EAE2D4] overflow-hidden my-6 max-h-[92vh] flex flex-col">
      <!-- Top Bar: Close button & Level Badge -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-[#EAE2D4] bg-[#FAFAFA] shrink-0">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-[#2874F0]/10 text-[#2874F0] border border-[#2874F0]/20">
            Level: {{ activeQuickViewProduct.level }}
          </span>
          <span v-if="activeQuickViewProduct.isAssured" class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FFE11B]/20 text-[#8C6D57] flex items-center gap-1 border border-[#FFE11B]/40">
            <span>✨</span>
            <span class="font-extrabold text-[#171844]">Narayan Assured</span>
          </span>
        </div>
        <button
          type="button"
          class="w-9 h-9 rounded-full bg-white border border-[#EAE2D4] flex items-center justify-center text-[#171844] hover:bg-[#EAE2D4]/50 transition-colors cursor-pointer text-lg font-bold"
          @click="closeQuickView"
        >
          &times;
        </button>
      </div>

      <!-- Main Scrollable Body -->
      <div class="overflow-y-auto p-6 space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
          <!-- Left Column: Image Gallery & Thumbnail Selector -->
          <div class="md:col-span-5 space-y-4">
            <!-- Main Zoomable Image -->
            <div class="relative aspect-square rounded-2xl overflow-hidden border border-[#EAE2D4] bg-[#F4EFE6]/30 group">
              <img
                :src="selectedImage || activeQuickViewProduct.images[0]"
                :alt="activeQuickViewProduct.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <!-- Wishlist Heart Button -->
              <button
                type="button"
                class="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
                :title="isInWishlist(activeQuickViewProduct.id) ? 'Remove from Wishlist' : 'Add to Wishlist'"
                @click="toggleWishlist(activeQuickViewProduct.id)"
              >
                <svg
                  class="w-5 h-5 transition-colors"
                  :class="isInWishlist(activeQuickViewProduct.id) ? 'text-[#FF3E6C] fill-[#FF3E6C]' : 'text-gray-400 fill-none'"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            <!-- Thumbnail Selector -->
            <div class="flex items-center gap-3 overflow-x-auto pb-1">
              <button
                v-for="(img, idx) in activeQuickViewProduct.images"
                :key="idx"
                type="button"
                :class="[
                  'w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer',
                  (selectedImage || activeQuickViewProduct.images[0]) === img ? 'border-[#2874F0] ring-2 ring-[#2874F0]/20' : 'border-[#EAE2D4] opacity-70 hover:opacity-100'
                ]"
                @click="selectedImage = img"
              >
                <img :src="img" :alt="`Thumbnail ${idx + 1}`" class="w-full h-full object-cover" />
              </button>
            </div>

            <!-- Flipkart Style Quick Action Buttons -->
            <div class="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                class="w-full py-3.5 px-4 rounded-xl bg-[#FF9F00] hover:bg-[#F39700] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
                @click="handleAddToCart(activeQuickViewProduct)"
              >
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Add to Cart</span>
              </button>
              <button
                type="button"
                class="w-full py-3.5 px-4 rounded-xl bg-[#FB641B] hover:bg-[#E85611] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
                @click="handleBuyNow(activeQuickViewProduct)"
              >
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Buy Now</span>
              </button>
            </div>
          </div>

          <!-- Right Column: Product Details, Offers, Specs & Reviews -->
          <div class="md:col-span-7 space-y-5">
            <div>
              <div class="text-xs font-semibold text-[#8C6D57] uppercase tracking-wider">{{ activeQuickViewProduct.categoryLabel }}</div>
              <h2 class="font-display font-extrabold text-2xl sm:text-3xl text-[#171844] tracking-tight mt-1">
                {{ activeQuickViewProduct.title }}
              </h2>
              <p class="text-xs sm:text-sm text-[#524F4E] font-medium mt-1">
                {{ activeQuickViewProduct.subtitle }}
              </p>
            </div>

            <!-- Flipkart Star Rating Pill -->
            <div class="flex items-center gap-3">
              <div class="inline-flex items-center gap-1 bg-[#388E3C] text-white text-xs font-bold px-2 py-0.5 rounded">
                <span>{{ activeQuickViewProduct.rating }}</span>
                <span>★</span>
              </div>
              <span class="text-xs text-[#878787] font-semibold">
                {{ activeQuickViewProduct.ratingCount.toLocaleString() }} Ratings &amp; {{ activeQuickViewProduct.reviewCount.toLocaleString() }} Reviews
              </span>
            </div>

            <!-- Price Breakdown -->
            <div class="flex items-baseline gap-3 pt-1 border-b border-[#EAE2D4] pb-4">
              <span class="font-display font-black text-3xl text-[#171844]">
                {{ activeQuickViewProduct.price === 0 ? 'FREE' : `₹${activeQuickViewProduct.price.toLocaleString('en-IN')}` }}
              </span>
              <span v-if="activeQuickViewProduct.originalPrice > activeQuickViewProduct.price" class="text-sm text-[#878787] line-through">
                ₹{{ activeQuickViewProduct.originalPrice.toLocaleString('en-IN') }}
              </span>
              <span v-if="activeQuickViewProduct.discountPercent > 0" class="text-xs font-bold text-[#388E3C]">
                {{ activeQuickViewProduct.discountPercent }}% off
              </span>
            </div>

            <!-- Available Flipkart-Style Offers -->
            <div class="space-y-2 bg-[#FAFAFA] p-3.5 rounded-2xl border border-[#EAE2D4]">
              <div class="text-xs font-bold text-[#171844]">Available Offers</div>
              <div class="space-y-1.5 text-xs text-[#212121]">
                <div class="flex items-start gap-2">
                  <span class="text-[#388E3C] font-bold shrink-0">🏷️</span>
                  <span><strong>Special Promo:</strong> Get 10% instant discount with code <strong>PRESENCE10</strong>.</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-[#388E3C] font-bold shrink-0">💳</span>
                  <span><strong>Instant Access:</strong> Direct digital access activated immediately upon checkout.</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-[#388E3C] font-bold shrink-0">🛡️</span>
                  <span><strong>Guarantee:</strong> 100% money-back guarantee if not satisfied with inner clarity.</span>
                </div>
              </div>
            </div>

            <!-- What's Included / Highlights -->
            <div class="space-y-2.5">
              <div class="text-xs font-bold uppercase tracking-wider text-[#171844]">Highlights</div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div
                  v-for="(hl, i) in activeQuickViewProduct.highlights"
                  :key="i"
                  class="flex items-start gap-2 p-2 rounded-xl bg-[#F8D78B]/10 border border-[#F8D78B]/20 text-[#171844]"
                >
                  <span class="text-[#388E3C] font-black shrink-0">✓</span>
                  <span>{{ hl }}</span>
                </div>
              </div>
            </div>

            <!-- Description -->
            <div class="space-y-2">
              <div class="text-xs font-bold uppercase tracking-wider text-[#171844]">Product Description</div>
              <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
                {{ activeQuickViewProduct.longDescription }}
              </p>
            </div>

            <!-- Specifications Table -->
            <div class="space-y-2">
              <div class="text-xs font-bold uppercase tracking-wider text-[#171844]">Specifications</div>
              <div class="border border-[#EAE2D4] rounded-xl overflow-hidden divide-y divide-[#EAE2D4] text-xs">
                <div
                  v-for="(val, key) in activeQuickViewProduct.specifications"
                  :key="key"
                  class="grid grid-cols-3 p-2.5 bg-white even:bg-[#FAFAFA]"
                >
                  <span class="font-semibold text-[#878787]">{{ key }}</span>
                  <span class="col-span-2 text-[#171844] font-medium">{{ val }}</span>
                </div>
              </div>
            </div>

            <!-- Customer Reviews Section -->
            <div class="space-y-3 pt-3 border-t border-[#EAE2D4]">
              <div class="flex items-center justify-between">
                <div class="text-xs font-bold uppercase tracking-wider text-[#171844]">Ratings &amp; Reviews</div>
                <div class="text-xs text-[#2874F0] font-bold">Verified Students</div>
              </div>

              <!-- Rating Bar Summary -->
              <div class="p-4 rounded-2xl bg-[#FAFAFA] border border-[#EAE2D4] flex items-center gap-6">
                <div class="text-center">
                  <div class="font-display font-black text-3xl text-[#171844]">{{ activeQuickViewProduct.rating }}</div>
                  <div class="text-[#388E3C] text-sm">★★★★★</div>
                  <div class="text-[10px] text-[#878787] mt-1">{{ activeQuickViewProduct.ratingCount }} ratings</div>
                </div>
                <div class="flex-1 space-y-1.5 text-[11px]">
                  <div class="flex items-center gap-2">
                    <span class="w-6 text-right">5★</span>
                    <div class="flex-1 bg-[#EAE2D4] h-2 rounded-full overflow-hidden">
                      <div class="bg-[#388E3C] h-full w-[88%]"></div>
                    </div>
                    <span class="w-8 text-[#878787]">88%</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="w-6 text-right">4★</span>
                    <div class="flex-1 bg-[#EAE2D4] h-2 rounded-full overflow-hidden">
                      <div class="bg-[#388E3C] h-full w-[9%]"></div>
                    </div>
                    <span class="w-8 text-[#878787]">9%</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="w-6 text-right">3★</span>
                    <div class="flex-1 bg-[#EAE2D4] h-2 rounded-full overflow-hidden">
                      <div class="bg-[#FF9F00] h-full w-[3%]"></div>
                    </div>
                    <span class="w-8 text-[#878787]">3%</span>
                  </div>
                </div>
              </div>

              <!-- Individual Verified Reviews -->
              <div class="space-y-3">
                <div
                  v-for="rev in activeQuickViewProduct.reviews"
                  :key="rev.id"
                  class="p-4 rounded-xl bg-white border border-[#EAE2D4] space-y-2 text-xs"
                >
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <div class="inline-flex items-center gap-1 bg-[#388E3C] text-white text-[10px] font-bold px-1.5 py-0.2 rounded">
                        <span>{{ rev.rating }}</span>
                        <span>★</span>
                      </div>
                      <span class="font-bold text-[#171844]">{{ rev.title }}</span>
                    </div>
                    <span class="text-[11px] text-[#878787]">{{ rev.date }}</span>
                  </div>
                  <p class="text-[#524F4E] leading-relaxed">{{ rev.comment }}</p>
                  <div class="flex items-center gap-2 text-[11px] text-[#878787]">
                    <img :src="rev.avatar" :alt="rev.author" class="w-5 h-5 rounded-full object-cover" />
                    <span class="font-semibold text-[#171844]">{{ rev.author }}</span>
                    <span v-if="rev.verified" class="text-[#388E3C] flex items-center gap-0.5">
                      <span>✓</span>
                      <span>Certified Buyer</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useShopCart, type ShopProduct } from '~/composables/useShopCart'

const {
  isQuickViewOpen,
  activeQuickViewProduct,
  closeQuickView,
  addToCart,
  startBuyNow,
  isInWishlist,
  toggleWishlist,
  isCartOpen
} = useShopCart()

const selectedImage = ref<string>('')

watch(
  () => activeQuickViewProduct.value,
  (newProd) => {
    if (newProd && newProd.images.length > 0) {
      selectedImage.value = newProd.images[0]
    }
  },
  { immediate: true }
)

const handleAddToCart = (prod: ShopProduct) => {
  addToCart(prod, 1)
  closeQuickView()
  isCartOpen.value = true
}

const handleBuyNow = (prod: ShopProduct) => {
  closeQuickView()
  startBuyNow(prod)
}
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
}
.animate-fadeIn {
  animation: fadeIn 0.15s ease-out forwards;
}
</style>
