<script setup>
import { RouterLink } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'
</script>

<template>
  <header class="bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-xl font-bold text-gray-900 dark:text-white">My App</div>

      <div class="flex items-center space-x-4">
        <RouterLink
          to="/"
          class="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/about"
          class="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
        >
          About
        </RouterLink>

        <ThemeToggle />
      </div>
    </nav>
  </header>
</template>
