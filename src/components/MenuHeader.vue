<script setup>
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

// State để quản lý việc Bật/Tắt menu trên mobile
const isMobileMenuOpen = ref(false)
</script>

<template>
  <div>
    <header
      class="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-800 transition-colors duration-300 shadow-md rounded-b-lg md:shadow-none md:rounded-none"
    >
      <nav class="container mx-auto px-6 h-16 flex justify-between items-center">
        <a href="#" class="text-3xl font-bold text-black dark:text-white"> Area </a>

        <div class="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a
            href="#benefits"
            class="text-black dark:text-gray-200 hover:text-gray-500 font-medium text-base"
          >
            {{ $t('header.benefit') }}
          </a>
          <a
            href="#specifications"
            class="text-black dark:text-gray-200 hover:text-gray-500 font-medium text-base"
          >
            {{ $t('header.specification') }}
          </a>
          <a
            href="#how-to"
            class="text-black dark:text-gray-200 hover:text-gray-500 font-medium text-base"
          >
            {{ $t('header.howto') }}
          </a>
          <a
            href="#contact-us"
            class="text-black dark:text-gray-200 hover:text-gray-500 font-medium text-base"
          >
            {{ $t('header.contactUs') }}
          </a>
        </div>

        <div class="hidden md:flex items-center space-x-2">
          <a
            href="#learn-more"
            class="inline-flex items-center space-x-1 px-5 py-3 rounded-full font-medium text-sm text-white bg-olive-primary hover:bg-opacity-80 group"
          >
            <span>{{ $t('header.learnMore') }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>

          <ThemeToggle />
        </div>

        <div class="md:hidden">
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="p-2 rounded-md text-black dark:text-gray-200"
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
        class="fixed top-16 left-0 w-full z-40 p-6 bg-white dark:bg-gray-800 shadow-xl rounded-b-lg md:hidden"
      >
        <nav class="flex flex-col space-y-4">
          <a href="#benefits" @click="isMobileMenuOpen = false" class="block py-2">{{
            $t('header.benefit')
          }}</a>
          <a href="#specifications" @click="isMobileMenuOpen = false" class="block py-2">{{
            $t('header.specification')
          }}</a>
          <a href="#how-to" @click="isMobileMenuOpen = false" class="block py-2">{{
            $t('header.howto')
          }}</a>
          <a href="#contact-us" @click="isMobileMenuOpen = false" class="block py-2">{{
            $t('header.contactUs')
          }}</a>
          <a
            href="#learn-more"
            @click="isMobileMenuOpen = false"
            class="inline-flex justify-center items-center space-x-1 px-5 py-3 rounded-full text-center font-medium text-sm text-white bg-olive-primary hover:bg-opacity-80 group"
          >
            <span>{{ $t('header.learnMore') }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        </nav>
      </div>
    </transition>
  </div>
</template>
