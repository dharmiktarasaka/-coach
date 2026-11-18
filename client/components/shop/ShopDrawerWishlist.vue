<template>
  <div
    v-if="isWishlistOpen"
    class="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end animate-fadeIn"
    @click.self="isWishlistOpen = false"
  >
    <div class="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-[#EAE2D4] animate-slideLeft">
      <!-- Header -->
      <div class="p-4 px-6 border-b border-[#EAE2D4] bg-[#171844] text-white flex items-center justify-between">
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 text-[#FF3E6C] fill-[#FF3E6C]" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <h2 class="font-bold text-base tracking-wide">
            My Wishlist ({{ wishlistProducts.length }})
          </h2>
        </div>
        <button
          type="button"
          class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-lg transition-colors cursor-pointer"
          @click="isWishlistOpen = false"
        >
          &times;
        </button>
      </div>

      <!-- List -->
      <div class="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F1F3F6]/40">
        <div v-if="wishlistProducts.length > 0" class="space-y-3">
          <div
            v-for="prod in wishlistProducts"
            :key="prod.id"
            class="bg-white border border-[#EAE2D4] rounded-2xl p-4 shadow-sm space-y-3"
          >
            <div class="flex gap-3">
              <div class="w-20 h-20 rounded-xl overflow-hidden border border-[#EAE2D4] shrink-0 bg-[#FAFAFA]">
                <img :src="prod.images[0]" :alt="prod.title" class="w-full h-full object-cover" />
              </div>
              <div class="flex-1 min-w-0">
                <div class="text-[10px] font-bold uppercase tracking-wider text-[#2874F0]">
                  {{ prod.level }}
                </div>
                <h3 class="font-bold text-sm text-[#171844] truncate mt-0.5">
                  {{ prod.title }}
                </h3>
                <div class="flex items-center gap-2 mt-1">
                  <span class="font-extrabold text-sm text-[#171844]">
                    {{ prod.price === 0 ? 'FREE' : `₹${prod.price.toLocaleString('en-IN')}` }}
                  </span>
                  <span v-if="prod.originalPrice > prod.price" class="text-xs text-[#878787] line-through">
                    ₹{{ prod.originalPrice.toLocaleString('en-IN') }}
                  </span>
                  <span v-if="prod.discountPercent > 0" class="text-[10px] font-bold text-[#388E3C]">
                    {{ prod.discountPercent }}% off
                  </span>
                </div>
              </div>
            </div>

            <!-- Actions -->
            <div class="grid grid-cols-2 gap-2 pt-2 border-t border-[#EAE2D4]/60">
              <button
                type="button"
                class="py-2 px-3 rounded-xl border border-[#EAE2D4] hover:bg-red-50 text-xs font-semibold text-[#878787] hover:text-[#FF3E6C] transition-colors cursor-pointer text-center"
                @click="toggleWishlist(prod.id)"
              >
                Remove
              </button>
              <button
                type="button"
                class="py-2 px-3 rounded-xl bg-[#2874F0] hover:bg-[#1C5BC4] text-white text-xs font-bold transition-all shadow-sm text-center cursor-pointer"
                @click="handleMoveToCart(prod)"
              >
                Move to Cart &rarr;
              </button>
            </div>
          </div>
        </div>

        <div v-else class="text-center py-16 px-4 bg-white rounded-2xl border border-[#EAE2D4] p-6 space-y-4">
          <div class="w-16 h-16 rounded-full bg-pink-50 text-[#FF3E6C] flex items-center justify-center text-3xl mx-auto">
            ❤️
          </div>
          <div>
            <h3 class="font-bold text-base text-[#171844]">Your Wishlist is Empty</h3>
            <p class="text-xs text-[#878787] mt-1 max-w-xs mx-auto">
              Save your favorite courses, sessions, and digital toolkits here to review or order later.
            </p>
          </div>
          <NuxtLink
            to="/shop"
            class="inline-block px-6 py-2.5 rounded-xl bg-[#171844] hover:bg-[#242658] text-[#F8D78B] font-bold text-xs uppercase tracking-wider shadow-md transition-colors"
            @click="isWishlistOpen = false"
          >
            Explore Catalog
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useShopCart, type ShopProduct } from '~/composables/useShopCart'

const {
  isWishlistOpen,
  wishlistProducts,
  toggleWishlist,
  moveToCartFromWishlist,
  isCartOpen
} = useShopCart()

const handleMoveToCart = (prod: ShopProduct) => {
  moveToCartFromWishlist(prod)
  isWishlistOpen.value = false
  isCartOpen.value = true
}
</script>

<style scoped>
@keyframes slideLeft {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
.animate-slideLeft {
  animation: slideLeft 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
