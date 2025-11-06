<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import MenuHeader from '@/components/MenuHeader.vue'

const themeStore = useThemeStore()

// Gọi hàm initTheme khi component được mount (tải lần đầu)
onMounted(() => {
  themeStore.initTheme()
})
</script>

<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-gray-100 transition-colors duration-300"
  >
    <MenuHeader />

    <main class="container mx-auto pt-16">
      <RouterView />
    </main>
  </div>
</template>
