<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="border-t">
    <div class="mb-6 mt-10" v-html="icon"></div>
    <h3 class="text-xl font-bold mb-5">
      {{ title }}
    </h3>
    <p class="text-sm leading-relaxed text-gray-500 dark:text-gray-100">
      {{ description }}
    </p>
  </div>
</template>
