<template>
  <div
    v-if="isCartOpen"
    class="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end animate-fadeIn"
    @click.self="isCartOpen = false"
  >
    <div class="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-[#EAE2D4] animate-slideLeft">
      <!-- Drawer Header -->
      <div class="p-4 px-6 border-b border-[#EAE2D4] bg-[#2874F0] text-white flex items-center justify-between">
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 text-[#FFE11B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <h2 class="font-bold text-base tracking-wide">
            My Cart ({{ cartTotalCount }})
          </h2>
        </div>
        <button
          type="button"
          class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-lg transition-colors cursor-pointer"
          @click="isCartOpen = false"
        >
          &times;
        </button>
      </div>

      <!-- Drawer Content -->
      <div class="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F1F3F6]/40">
        <!-- If items in cart -->
        <div v-if="cart.length > 0" class="space-y-3">
          <div
            v-for="item in cart"
            :key="item.product.id"
            class="bg-white border border-[#EAE2D4] rounded-2xl p-4 shadow-sm space-y-3 relative"
          >
            <div class="flex gap-3">
              <!-- Thumbnail -->
              <div class="w-20 h-20 rounded-xl overflow-hidden border border-[#EAE2D4] shrink-0 bg-[#FAFAFA]">
                <img :src="item.product.images[0]" :alt="item.product.title" class="w-full h-full object-cover" />
              </div>

              <!-- Product Info -->
              <div class="flex-1 min-w-0">
                <div class="text-[10px] font-bold uppercase tracking-wider text-[#2874F0]">
                  {{ item.product.level }} &middot; {{ item.product.categoryLabel }}
                </div>
                <h3 class="font-bold text-sm text-[#171844] truncate mt-0.5">
                  {{ item.product.title }}
                </h3>
                <div class="text-[11px] text-[#878787] truncate">
                  {{ item.product.accessType }}
                </div>

                <!-- Price row -->
                <div class="flex items-baseline gap-2 mt-2">
                  <span class="font-extrabold text-base text-[#171844]">
                    {{ item.product.price === 0 ? 'FREE' : `₹${item.product.price.toLocaleString('en-IN')}` }}
                  </span>
                  <span v-if="item.product.originalPrice > item.product.price" class="text-xs text-[#878787] line-through">
                    ₹{{ item.product.originalPrice.toLocaleString('en-IN') }}
                  </span>
                  <span v-if="item.product.discountPercent > 0" class="text-[11px] font-bold text-[#388E3C]">
                    {{ item.product.discountPercent }}% off
                  </span>
                </div>
              </div>
            </div>

            <!-- Quantity & Remove Action Bar -->
            <div class="flex items-center justify-between pt-2 border-t border-[#EAE2D4]/60">
              <!-- Quantity Selector -->
              <div class="flex items-center gap-2">
                <span class="text-xs text-[#878787] font-medium">Qty:</span>
                <div class="flex items-center border border-[#EAE2D4] rounded-lg overflow-hidden bg-[#FAFAFA]">
                  <button
                    type="button"
                    class="w-7 h-7 flex items-center justify-center font-bold text-sm text-[#171844] hover:bg-[#EAE2D4]/50 cursor-pointer"
                    @click="updateQuantity(item.product.id, item.quantity - 1)"
                  >
                    -
                  </button>
                  <span class="w-8 text-center text-xs font-bold text-[#171844]">{{ item.quantity }}</span>
                  <button
                    type="button"
                    class="w-7 h-7 flex items-center justify-center font-bold text-sm text-[#171844] hover:bg-[#EAE2D4]/50 cursor-pointer"
                    @click="updateQuantity(item.product.id, item.quantity + 1)"
                  >
                    +
                  </button>
                </div>
              </div>

              <!-- Remove button -->
              <button
                type="button"
                class="text-xs font-bold text-[#878787] hover:text-[#FF3E6C] transition-colors cursor-pointer flex items-center gap-1"
                @click="removeFromCart(item.product.id)"
              >
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span>Remove</span>
              </button>
            </div>
          </div>

          <!-- Flipkart Style Price Details Card -->
          <div class="bg-white border border-[#EAE2D4] rounded-2xl p-4 shadow-sm space-y-3">
            <div class="text-xs font-bold uppercase tracking-wider text-[#878787] border-b border-[#EAE2D4] pb-2">
              Price Details
            </div>
            <div class="space-y-2 text-xs text-[#212121]">
              <div class="flex justify-between">
                <span>Price ({{ cartTotalCount }} items)</span>
                <span>₹{{ cartTotalMRP.toLocaleString('en-IN') }}</span>
              </div>
              <div class="flex justify-between text-[#388E3C]">
                <span>Discount</span>
                <span>− ₹{{ cartTotalDiscount.toLocaleString('en-IN') }}</span>
              </div>
              <div class="flex justify-between">
                <span>Delivery Charges</span>
                <span class="text-[#388E3C] font-bold">FREE (Instant Digital)</span>
              </div>
              <div class="flex justify-between font-extrabold text-sm text-[#171844] pt-2 border-t border-[#EAE2D4]">
                <span>Total Amount</span>
                <span>₹{{ cartTotalPrice.toLocaleString('en-IN') }}</span>
              </div>
            </div>
            <!-- Flipkart Savings Banner -->
            <div v-if="cartTotalDiscount > 0" class="p-2.5 rounded-xl bg-[#E8F5E9] text-[#2E7D32] text-xs font-bold text-center border border-[#A5D6A7]">
              🎉 You will save ₹{{ cartTotalDiscount.toLocaleString('en-IN') }} on this order
            </div>
          </div>
        </div>

        <!-- Empty Cart State -->
        <div v-else class="text-center py-16 px-4 bg-white rounded-2xl border border-[#EAE2D4] p-6 space-y-4">
          <div class="w-16 h-16 rounded-full bg-[#2874F0]/10 text-[#2874F0] flex items-center justify-center text-3xl mx-auto">
            🛒
          </div>
          <div>
            <h3 class="font-bold text-base text-[#171844]">Your cart is empty!</h3>
            <p class="text-xs text-[#878787] mt-1 max-w-xs mx-auto">
              Explore our conscious living courses, workbooks, and private coaching sessions.
            </p>
          </div>
          <NuxtLink
            to="/shop"
            class="inline-block px-6 py-2.5 rounded-xl bg-[#2874F0] hover:bg-[#1C5BC4] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors"
            @click="isCartOpen = false"
          >
            Shop Now
          </NuxtLink>
        </div>
      </div>

      <!-- Drawer Footer: Checkout Action Bar -->
      <div v-if="cart.length > 0" class="p-4 px-6 bg-white border-t border-[#EAE2D4] shadow-lg flex items-center justify-between gap-4">
        <div>
          <div class="text-[10px] text-[#878787] uppercase font-bold">Total Payable:</div>
          <div class="font-display font-black text-xl text-[#171844]">
            ₹{{ cartTotalPrice.toLocaleString('en-IN') }}
          </div>
        </div>
        <button
          type="button"
          class="flex-1 max-w-[200px] py-3.5 px-4 rounded-xl bg-[#FB641B] hover:bg-[#E85611] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all text-center cursor-pointer hover:scale-[1.02]"
          @click="handleProceedToCheckout"
        >
          Place Order &rarr;
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useShopCart } from '~/composables/useShopCart'

const {
  cart,
  isCartOpen,
  cartTotalCount,
  cartTotalMRP,
  cartTotalPrice,
  cartTotalDiscount,
  updateQuantity,
  removeFromCart,
  startBuyNow
} = useShopCart()

const handleProceedToCheckout = () => {
  if (cart.value.length === 0) return
  // If multiple items, checkout the primary or open checkout modal
  isCartOpen.value = false
  startBuyNow(cart.value[0].product)
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
