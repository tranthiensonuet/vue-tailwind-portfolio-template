<script setup>
import { useThemeStore } from '@/stores/theme'
import { storeToRefs } from 'pinia'

const themeStore = useThemeStore()
const { isDarkMode } = storeToRefs(themeStore) // Lấy state (reactive)
</script>

<template>
  <button
    @click="themeStore.toggleTheme"
    class="relative w-12 h-5 flex items-center rounded-full p-1 transition-colors duration-300 border"
    :class="isDarkMode ? 'bg-gray-700' : 'bg-gray-100 border-gray-300'"
    aria-label="Toggle dark mode"
  >
    <div
      class="w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center"
      :class="{ 'translate-x-6 bg-gray-900': isDarkMode, 'translate-x-0 bg-white': !isDarkMode }"
    >
      <span v-if="!isDarkMode" class="text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </span>

      <span v-else class="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </span>
    </div>
  </button>
</template>
