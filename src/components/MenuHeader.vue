<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'

// State để quản lý việc Bật/Tắt menu trên mobile
const isMobileMenuOpen = ref(false)

// Hàm để đóng menu (ví dụ: khi nhấn vào 1 link)
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <div>
    <header
      class="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-800 shadow-md transition-colors duration-300"
    >
      <nav class="container mx-auto px-6 h-16 flex justify-between items-center">
        <RouterLink to="/" class="text-xl font-bold text-gray-900 dark:text-white">
          My App
        </RouterLink>

        <div class="hidden md:flex items-center space-x-4">
          <RouterLink
            to="/"
            class="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            {{ $t('header.home') }}
          </RouterLink>
          <RouterLink
            to="/about"
            class="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            {{ $t('header.about') }}
          </RouterLink>

          <ThemeToggle />
          <LanguageSwitcher />
        </div>

        <div class="md:hidden">
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Toggle mobile menu"
          >
            <svg
              v-if="isMobileMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
    </header>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 -translate-y-4"
      enter-to-class="transform opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="transform opacity-100 translate-y-0"
      leave-to-class="transform opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="fixed top-16 left-0 w-full z-40 p-6 bg-white dark:bg-gray-800 shadow-xl rounded-b-lg md:hidden"
      >
        <nav class="flex flex-col space-y-4">
          <RouterLink
            to="/"
            @click="closeMobileMenu"
            class="block py-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/about"
            @click="closeMobileMenu"
            class="block py-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            About
          </RouterLink>

          <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
            <ThemeToggle />
          </div>

          <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </transition>
  </div>
</template>
