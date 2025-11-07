<script setup>
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'

const { locale } = useI18n()

// Hàm để set ngôn ngữ cụ thể
function setLanguage(lang) {
  locale.value = lang
}

// Watcher để lưu vào localStorage
watch(locale, (newLocale) => {
  localStorage.setItem('language', newLocale)
})
</script>

<template>
  <div class="flex items-center space-x-2">
    <button
      @click="setLanguage('vi')"
      class="p-1 rounded-full transition-opacity duration-300 focus:outline-none focus:ring-2"
      :class="[locale === 'vi' ? 'opacity-100' : 'opacity-40 hover:opacity-100']"
    >
      <svg
        class="h-6 w-6 rounded-full overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 480"
      >
        <path fill="#da251d" d="M0 0h640v480H0z" />
        <path
          fill="#ff0"
          d="M320 173.2l-102.5 74.5 39.1-120.5-102.4-74.6 126.6 0 39.1-120.6 39.1 120.6 126.6 0-102.4 74.6 39.1 120.5z"
        />
      </svg>
    </button>

    <button
      @click="setLanguage('en')"
      class="p-1 rounded-full transition-opacity duration-300 focus:outline-none focus:ring-2"
      :class="[locale === 'en' ? 'opacity-100' : 'opacity-40 hover:opacity-100']"
    >
      <svg
        class="h-6 w-6 rounded-full overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 60 30"
        fill="none"
      >
        <path fill="#00247D" d="M0 0h60v30H0z" />
        <path d="M0 0l60 30M0 30L60 0" stroke="#fff" stroke-width="6" />
        <path d="M0 0l60 30M0 30L60 0" stroke="#CF142B" stroke-width="4" />
        <path d="M25 0h10v30H25zM0 10h60v10H0z" fill="#fff" />
        <path d="M27 0h6v30H27zM0 12h60v6H0z" fill="#CF142B" />
      </svg>
    </button>
  </div>
</template>
