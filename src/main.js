import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { createI18n } from 'vue-i18n' // đã ngôn ngữ
// Import các file ngôn ngữ
import viMessages from './locales/vi.json'
import enMessages from './locales/en.json'

import App from './App.vue'
import router from './router'

// lấy ngôn ngữ khi khởi động
function getStartingLocale() {
  const savedLanguage = localStorage.getItem('language')

  // Kiểm tra xem ngôn ngữ đã lưu có trong danh sách hỗ trợ không
  if (savedLanguage && ['en', 'vi'].includes(savedLanguage)) {
    return savedLanguage
  }

  // Mặc định trả về 'vi'
  return 'vi'
}

const app = createApp(App)

// Cấu hình i18n
const i18n = createI18n({
  legacy: false, // Bắt buộc phải có để dùng Composition API (Vue 3)
  locale: getStartingLocale(), // Ngôn ngữ mặc định
  fallbackLocale: 'en', // Ngôn ngữ dự phòng nếu 'vi' bị thiếu key
  messages: {
    vi: viMessages, // Định nghĩa messages cho 'vi'
    en: enMessages, // Định nghĩa messages cho 'en'
  },
})

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
