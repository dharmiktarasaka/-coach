<template>
  <nav aria-label="Breadcrumb" class="page-breadcrumb">
    <div class="wrap flex items-center justify-between flex-wrap gap-4 py-3">
      <!-- Breadcrumb trail -->
      <ol class="flex items-center flex-wrap gap-2 text-xs font-medium text-[#c4c4e2]">
        <li class="flex items-center gap-2">
          <NuxtLink to="/" class="hover:text-[#F8D78B] transition-colors flex items-center gap-1">
            <svg class="w-3.5 h-3.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Home</span>
          </NuxtLink>
        </li>
        <li v-for="(crumb, idx) in items" :key="idx" class="flex items-center gap-2">
          <span class="text-[#8C6D57] opacity-60">/</span>
          <NuxtLink
            v-if="crumb.to && idx < items.length - 1"
            :to="crumb.to"
            class="hover:text-[#F8D78B] transition-colors"
          >
            {{ crumb.label }}
          </NuxtLink>
          <span v-else class="text-[#F8D78B] font-semibold">
            {{ crumb.label }}
          </span>
        </li>
      </ol>

      <!-- Optional Pagination / Directional Pathing -->
      <div v-if="prev || next" class="flex items-center gap-3 text-xs">
        <NuxtLink
          v-if="prev"
          :to="prev.to"
          class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-[#EAE2D4] hover:text-[#F8D78B] border border-white/10 transition-colors"
          :title="prev.label"
        >
          <span>&larr;</span>
          <span class="hidden sm:inline">{{ prev.label }}</span>
        </NuxtLink>
        <NuxtLink
          v-if="next"
          :to="next.to"
          class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-[#EAE2D4] hover:text-[#F8D78B] border border-white/10 transition-colors"
          :title="next.label"
        >
          <span class="hidden sm:inline">{{ next.label }}</span>
          <span>&rarr;</span>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
interface BreadcrumbItem {
  label: string
  to?: string
}

interface PaginationItem {
  label: string
  to: string
}

defineProps<{
  items: BreadcrumbItem[]
  prev?: PaginationItem
  next?: PaginationItem
}>()
</script>

<style scoped>
.page-breadcrumb {
  background: rgba(15, 18, 51, 0.45);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(217, 170, 85, 0.15);
}
.wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px clamp(20px, 4vw, 40px);
}
</style>
