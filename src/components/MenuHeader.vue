<script setup>
import { ref, computed } from 'vue'
import ThemeToggle from './ThemeToggle.vue'
import { useI18n } from 'vue-i18n'

// State để quản lý việc Bật/Tắt menu trên mobile
const isMobileMenuOpen = ref(false)

const { t } = useI18n()
const itemMenuHeader = computed(() => [
  {
    href: '#benefits',
    text: t('header.benefit'),
  },
  {
    href: '#specifications',
    text: t('header.specification'),
  },
  {
    href: '#how-to',
    text: t('header.howTo'),
  },
  {
    href: '#contact-us',
    text: t('header.contactUs'),
  },
])
</script>

<template>
  <div>
    <header
      class="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-800 transition-colors duration-300 border-b"
    >
      <nav class="container mx-auto px-6 h-14 flex justify-between items-center">
        <a href="#" class="text-3xl font-bold dark:text-white">
          {{ $t('header.main') }}
        </a>

        <div class="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a
            v-for="item in itemMenuHeader"
            :key="item.href"
            :href="item.href"
            class="hover:text-olive-primary font-medium text-sm"
          >
            {{ item.text }}
          </a>
        </div>

        <div class="hidden md:flex items-center space-x-2">
          <ThemeToggle />
        </div>

        <div class="md:hidden">
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="p-2 rounded-md"
            aria-label="Toggle mobile menu"
          >
            <svg
              v-if="isMobileMenuOpen"
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
      enter-from-class="transform opacity-0 -translate-y-2"
      enter-to-class="transform opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="transform opacity-100 translate-y-0"
      leave-to-class="transform opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="fixed top-14 left-0 w-full z-40 p-6 bg-white dark:bg-gray-800 shadow-xl rounded-b-lg md:hidden"
      >
        <nav class="flex flex-col space-y-4">
          <a
            v-for="item in itemMenuHeader"
            :key="item.href"
            :href="item.href"
            @click="isMobileMenuOpen = false"
            class="block py-2 text-sm"
          >
            {{ item.text }}
          </a>

          <div class="pt-4 mt-2 border-t border-gray-200 dark:border-gray-700">
            <div class="flex justify-between items-center">
              <span class="text-sm">
                {{ $t('header.appearance') }}
              </span>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </div>
    </transition>
  </div>
</template>
