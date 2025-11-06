<script setup>
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'

const { locale, availableLocales } = useI18n()

// Lưu ngôn ngữ đã chọn vào localStorage
watch(locale, (newLocale) => {
  localStorage.setItem('language', newLocale)
})
</script>

<template>
  <div>
    <select
      v-model="locale"
      class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md p-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option v-for="lang in availableLocales" :key="lang" :value="lang">
        {{ lang.toUpperCase() }}
      </option>
    </select>
  </div>
</template>
