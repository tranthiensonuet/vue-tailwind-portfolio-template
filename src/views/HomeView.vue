<script setup>
import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
  <div class="space-y-4">
    <h1 class="text-3xl font-bold text-blue-600 dark:text-blue-400">Welcome to your Vue 3 App!</h1>
    <p>
      Đây là project mẫu sử dụng Vue 3, Tailwind CSS và có chức năng Dark Mode được quản lý bởi
      Pinia.
    </p>
    <BaseButton @click="() => alert('Button clicked!')"> Click Me! </BaseButton>
  </div>
</template>
