<template>
  <div
    v-if="isCheckoutModalOpen && activeCheckoutItem"
    class="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
    @click.self="closeCheckout"
  >
    <div class="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#EAE2D4] my-6">
      <!-- Close button -->
      <button
        type="button"
        class="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FAFAFA] border border-[#EAE2D4] flex items-center justify-center text-sm font-bold text-[#171844] hover:bg-[#EAE2D4] cursor-pointer"
        @click="closeCheckout"
      >
        &times;
      </button>

      <!-- SUCCESS SCREEN -->
      <div v-if="orderSuccess" class="text-center py-6 space-y-4">
        <div class="w-16 h-16 rounded-full bg-[#E8F5E9] border border-[#A5D6A7] text-[#2E7D32] flex items-center justify-center text-3xl mx-auto animate-bounce">
          ✓
        </div>
        <div>
          <span class="text-xs font-bold text-[#388E3C] uppercase tracking-wider">Payment Verified</span>
          <h3 class="font-display font-extrabold text-2xl text-[#171844] mt-0.5">Order Placed Successfully!</h3>
        </div>
        <p class="text-xs text-[#524F4E] max-w-sm mx-auto leading-relaxed">
          Thank you, <strong class="text-[#171844]">{{ customerName || 'Seeker' }}</strong>! Your access to <strong class="text-[#2874F0]">{{ activeCheckoutItem.title }}</strong> has been activated.
        </p>

        <!-- Order Summary Receipt Box -->
        <div class="p-4 rounded-2xl bg-[#FAFAFA] border border-[#EAE2D4] text-left space-y-2 text-xs font-mono">
          <div class="flex justify-between">
            <span class="text-[#878787]">Order ID:</span>
            <span class="font-bold text-[#171844]">#NP-ORD-{{ orderId }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-[#878787]">Sent To:</span>
            <span class="font-bold text-[#171844]">{{ customerEmail }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-[#878787]">Amount Paid:</span>
            <span class="font-bold text-[#388E3C] text-sm">₹{{ finalPrice.toLocaleString('en-IN') }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-[#878787]">Status:</span>
            <span class="font-bold text-[#2874F0]">Instant Active</span>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="pt-2 space-y-2.5">
          <button
            type="button"
            class="w-full py-3.5 rounded-xl bg-[#2874F0] hover:bg-[#1C5BC4] text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
            @click="triggerInstantDownload"
          >
            <span>📥 Download Digital Resources (.ZIP &amp; Workbooks)</span>
          </button>

          <NuxtLink
            to="/portal"
            class="w-full py-3.5 rounded-xl bg-[#171844] hover:bg-[#242658] text-[#F8D78B] font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
            @click="closeCheckout"
          >
            <span>Go to Student Portal &rarr;</span>
          </NuxtLink>

          <p v-if="downloadNotice" class="text-[11px] text-[#2E7D32] font-bold animate-pulse">
            ✓ Assets downloaded! Check your browser downloads folder.
          </p>
        </div>
      </div>

      <!-- CHECKOUT FORM -->
      <div v-else class="space-y-5">
        <!-- Header -->
        <div class="border-b border-[#EAE2D4] pb-3">
          <div class="text-[10px] font-bold uppercase tracking-wider text-[#2874F0]">Express Secure Checkout</div>
          <h3 class="font-display font-extrabold text-xl text-[#171844] mt-0.5">
            {{ activeCheckoutItem.title }}
          </h3>
          <div class="text-xs text-[#878787]">
            {{ activeCheckoutItem.level }} &middot; {{ activeCheckoutItem.format }}
          </div>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleProcessPayment" class="space-y-4">
          <!-- Customer Fields -->
          <div class="space-y-3">
            <div>
              <label class="block text-xs font-bold text-[#171844] mb-1">Your Full Name</label>
              <input
                v-model="customerName"
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                class="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE2D4] bg-[#FAFAFA] text-xs text-[#171844] focus:ring-2 focus:ring-[#2874F0] focus:outline-none"
              />
            </div>

            <div>
              <label class="block text-xs font-bold text-[#171844] mb-1">Email (Where course / assets are delivered)</label>
              <input
                v-model="customerEmail"
                type="email"
                required
                placeholder="name@example.com"
                class="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE2D4] bg-[#FAFAFA] text-xs text-[#171844] focus:ring-2 focus:ring-[#2874F0] focus:outline-none"
              />
            </div>

            <div>
              <label class="block text-xs font-bold text-[#171844] mb-1">WhatsApp / Phone (For session links &amp; reminders)</label>
              <input
                v-model="customerPhone"
                type="tel"
                required
                placeholder="+91 98765 43210"
                class="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE2D4] bg-[#FAFAFA] text-xs text-[#171844] focus:ring-2 focus:ring-[#2874F0] focus:outline-none"
              />
            </div>
          </div>

          <!-- Coupon Code Input -->
          <div class="pt-1">
            <div class="flex gap-2">
              <input
                v-model="couponInput"
                type="text"
                placeholder="Coupon code (e.g. PRESENCE10)"
                class="flex-1 px-3 py-2 rounded-xl border border-[#EAE2D4] bg-[#FAFAFA] text-xs text-[#171844] uppercase focus:ring-2 focus:ring-[#2874F0] focus:outline-none font-mono"
              />
              <button
                type="button"
                class="px-4 py-2 rounded-xl bg-[#171844] hover:bg-[#242658] text-[#F8D78B] text-xs font-bold transition-colors cursor-pointer"
                @click="applyCoupon"
              >
                Apply
              </button>
            </div>
            <p v-if="couponMessage" class="text-[11px] font-bold mt-1" :class="isCouponValid ? 'text-[#388E3C]' : 'text-rose-500'">
              {{ couponMessage }}
            </p>
          </div>

          <!-- Payment Options -->
          <div class="space-y-2 pt-2 border-t border-[#EAE2D4]">
            <label class="block text-xs font-bold text-[#171844]">Select Payment Method</label>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <label
                :class="[
                  'p-3 rounded-xl border flex items-center gap-2 cursor-pointer font-bold transition-all',
                  paymentGateway === 'upi' ? 'border-[#2874F0] bg-[#2874F0]/10 text-[#2874F0]' : 'border-[#EAE2D4] bg-white text-[#524F4E]'
                ]"
              >
                <input type="radio" v-model="paymentGateway" value="upi" class="hidden" />
                <span>📱 UPI / QR / NetBanking</span>
              </label>

              <label
                :class="[
                  'p-3 rounded-xl border flex items-center gap-2 cursor-pointer font-bold transition-all',
                  paymentGateway === 'card' ? 'border-[#2874F0] bg-[#2874F0]/10 text-[#2874F0]' : 'border-[#EAE2D4] bg-white text-[#524F4E]'
                ]"
              >
                <input type="radio" v-model="paymentGateway" value="card" class="hidden" />
                <span>💳 Debit / Credit Card</span>
              </label>
            </div>
          </div>

          <!-- Price Summary Breakdown -->
          <div class="p-3.5 rounded-2xl bg-[#FAFAFA] border border-[#EAE2D4] space-y-1.5 text-xs text-[#524F4E]">
            <div class="flex justify-between">
              <span>Item Price:</span>
              <span>₹{{ activeCheckoutItem.price.toLocaleString('en-IN') }}</span>
            </div>
            <div v-if="discountPercent > 0" class="flex justify-between text-[#388E3C]">
              <span>Coupon Discount ({{ discountPercent }}%):</span>
              <span>− ₹{{ couponDiscountAmount.toLocaleString('en-IN') }}</span>
            </div>
            <div class="flex justify-between">
              <span>Digital Platform Fee:</span>
              <span class="text-[#388E3C] font-bold">FREE</span>
            </div>
            <div class="flex justify-between font-extrabold text-sm text-[#171844] pt-2 border-t border-[#EAE2D4]">
              <span>Total Payable:</span>
              <span class="text-[#FB641B] font-display font-black text-base">
                ₹{{ finalPrice.toLocaleString('en-IN') }}
              </span>
            </div>
          </div>

          <!-- Place Order Button -->
          <button
            type="submit"
            :disabled="isProcessing"
            class="w-full py-3.5 rounded-xl bg-[#FB641B] hover:bg-[#E85611] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer hover:scale-[1.01]"
          >
            <span v-if="isProcessing">Securing Payment &amp; Generating Access...</span>
            <span v-else>
              {{ activeCheckoutItem.price === 0 ? 'Claim Free Access Now' : `Pay ₹${finalPrice.toLocaleString('en-IN')} & Place Order` }} &rarr;
            </span>
          </button>

          <div class="flex items-center justify-center gap-2 text-[10px] text-[#878787]">
            <span>🔒 256-Bit SSL Encrypted</span>
            <span>&middot;</span>
            <span>Instant Digital Access Guarantee</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useShopCart } from '~/composables/useShopCart'
import { useAuth } from '~/composables/useAuth'

const { isCheckoutModalOpen, activeCheckoutItem, closeCheckout, clearCart } = useShopCart()
const { currentUser } = useAuth()

const customerName = ref(currentUser.value?.name || '')
const customerEmail = ref(currentUser.value?.email || '')
const customerPhone = ref('')

const paymentGateway = ref<'upi' | 'card'>('upi')
const couponInput = ref('')
const couponMessage = ref('')
const isCouponValid = ref(false)
const discountPercent = ref(0)
const isProcessing = ref(false)
const orderSuccess = ref(false)
const downloadNotice = ref(false)
const orderId = ref(Math.floor(100000 + Math.random() * 900000).toString())

const applyCoupon = () => {
  const code = couponInput.value.trim().toUpperCase()
  if (code === 'PRESENCE10') {
    discountPercent.value = 10
    isCouponValid.value = true
    couponMessage.value = '✓ Coupon PRESENCE10 applied: 10% instant discount!'
  } else if (code === 'WELCOME20') {
    discountPercent.value = 20
    isCouponValid.value = true
    couponMessage.value = '✓ Coupon WELCOME20 applied: 20% discount!'
  } else {
    discountPercent.value = 0
    isCouponValid.value = false
    couponMessage.value = '✕ Invalid coupon code. Try PRESENCE10'
  }
}

const couponDiscountAmount = computed(() => {
  if (!activeCheckoutItem.value) return 0
  return Math.round((activeCheckoutItem.value.price * discountPercent.value) / 100)
})

const finalPrice = computed(() => {
  if (!activeCheckoutItem.value) return 0
  const base = activeCheckoutItem.value.price
  return Math.max(0, base - couponDiscountAmount.value)
})

const handleProcessPayment = async () => {
  isProcessing.value = true
  // Simulate secure payment processing
  setTimeout(() => {
    isProcessing.value = false
    orderSuccess.value = true
    clearCart()
  }, 1200)
}

const triggerInstantDownload = () => {
  downloadNotice.value = true
  const blob = new Blob([
    `NARAYAN PRESENCE - ORDER CONFIRMATION & ASSET ACCESS\n\n` +
    `Order Reference: #NP-ORD-${orderId.value}\n` +
    `Product: ${activeCheckoutItem.value?.title}\n` +
    `Level: ${activeCheckoutItem.value?.level}\n` +
    `Delivered To: ${customerEmail.value}\n\n` +
    `Access Link: https://digitalcoach.narayanpresence.com/portal\n` +
    `Support Hotline: support@narayanpresence.com\n\n` +
    `Thank you for trusting Narayan Presence on your path to conscious living.`
  ], { type: 'text/plain;charset=utf-8' })
  
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `Narayan-Presence-Order-${orderId.value}.txt`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
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
