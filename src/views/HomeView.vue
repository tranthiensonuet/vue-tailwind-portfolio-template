<script setup>
import { useThemeStore } from '@/stores/theme'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

// import ảnh
import logo1Light from '@/img/logoipsum-1.png'
import logo1Dark from '@/img/logoipsum-1-white.png'
import logo2Light from '@/img/logoipsum-2.png'
import logo2Dark from '@/img/logoipsum-2-white.png'
import logo3Light from '@/img/logoipsum-3.png'
import logo3Dark from '@/img/logoipsum-3-white.png'
import logo4Light from '@/img/logoipsum-4.png'
import logo4Dark from '@/img/logoipsum-4-white.png'
import logo5Light from '@/img/logoipsum-5.png'
import logo5Dark from '@/img/logoipsum-5-white.png'
import logo6Light from '@/img/logoipsum-6.png'
import logo6Dark from '@/img/logoipsum-6-white.png'

const themeStore = useThemeStore()
const { isDarkMode } = storeToRefs(themeStore)

const trustedByDatas = computed(() => [
  {
    srcImg: logo1Light,
    srcImgDark: logo1Dark,
    altImg: 'Logo 1',
  },
  {
    srcImg: logo2Light,
    srcImgDark: logo2Dark,
    altImg: 'Logo 2',
  },
  {
    srcImg: logo3Light,
    srcImgDark: logo3Dark,
    altImg: 'Logo 3',
  },
  {
    srcImg: logo4Light,
    srcImgDark: logo4Dark,
    altImg: 'Logo 4',
  },
  {
    srcImg: logo5Light,
    srcImgDark: logo5Dark,
    altImg: 'Logo 5',
  },
  {
    srcImg: logo6Light,
    srcImgDark: logo6Dark,
    altImg: 'Logo 6',
  },
])
</script>

<template>
  <section class="relative">
    <div
      class="absolute bottom-0 left-0 w-full h-1/2 md:h-1/3 lg:h-1/2 bg-olive-primary rounded-3xl"
    ></div>
    <div class="relative z-10 flex flex-col justify-center">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-6xl md:text-8xl font-bold leading-tight mb-12 pt-4 md:pt-14">
          {{ $t('main.welcome') }}
        </h1>
        <div class="mx-auto max-w-xl md:max-w-3xl lg:max-w-5xl">
          <picture>
            <source srcset="@/img/banner.png" media="(min-width: 1024px)" />
            <source srcset="@/img/banner-ipad.png" media="(min-width: 768px)" />
            <img src="@/img/banner-phone.png" alt="Banner" class="object-cover w-full" />
          </picture>
        </div>
      </div>
    </div>
  </section>

  <section class="py-10">
    <div class="container mx-auto px-6">
      <h3 class="text-sm font-medium text-left mb-6">{{ $t('main.trustedBy') }}:</h3>
      <div class="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
        <div v-for="logo in trustedByDatas" :key="logo.altImg" class="flex justify-center">
          <img
            v-if="isDarkMode"
            :src="logo.srcImgDark"
            :alt="logo.altImg"
            class="h-6 md:h-8 transition-opacity"
          />

          <img
            v-else
            :src="logo.srcImg"
            :alt="logo.altImg"
            class="h-6 md:h-8 filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
          />
        </div>
      </div>
    </div>
  </section>

  <section id="benefits" class="min-h-screen p-8">
    <h1 class="text-4xl font-bold">Benefits Section</h1>
  </section>

  <section id="specifications" class="min-h-screen p-8">
    <h1 class="text-4xl font-bold">Specifications Section</h1>
  </section>

  <section id="how-to" class="min-h-screen p-8">
    <h1 class="text-4xl font-bold">How-to Section</h1>
  </section>

  <section id="contact-us" class="min-h-screen p-8">
    <h1 class="text-4xl font-bold">Contact Us Section</h1>
  </section>

  <section id="learn-more" class="min-h-screen p-8">
    <h1 class="text-4xl font-bold">Learn More Section</h1>
  </section>
</template>
