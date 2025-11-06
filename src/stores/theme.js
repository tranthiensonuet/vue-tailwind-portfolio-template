import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  // State: Mặc định là 'light'
  const isDarkMode = ref(false)

  // Action: Áp dụng theme (thêm/xóa class 'dark' khỏi <html>)
  function applyTheme() {
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  // Action: Khởi tạo theme khi tải trang
  function initTheme() {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'dark') {
      isDarkMode.value = true
    } else if (savedTheme === 'light') {
      isDarkMode.value = false
    } else {
      // Nếu không có trong localStorage, dùng cài đặt hệ thống
      isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    // Áp dụng theme ngay khi khởi tạo
    applyTheme()
  }

  // Action: Chuyển đổi theme
  function toggleTheme() {
    isDarkMode.value = !isDarkMode.value
  }

  // Theo dõi sự thay đổi của isDarkMode và tự động áp dụng
  watch(isDarkMode, applyTheme)

  return { isDarkMode, initTheme, toggleTheme }
})
