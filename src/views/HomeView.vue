<script setup>
import { useThemeStore } from '@/stores/theme'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

// component
import BaseCardInformation from '@/components/BaseCardInformation.vue'

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

// get theme
const themeStore = useThemeStore()
const { isDarkMode } = storeToRefs(themeStore)

// use i18n
const { t } = useI18n()

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

const benefitDatas = computed(() => [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" /></svg>`,
    title: t('benefit.titleBenefit1'),
    description: t('benefit.contentBenefit1'),
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>`,
    title: t('benefit.titleBenefit2'),
    description: t('benefit.contentBenefit2'),
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>`,
    title: t('benefit.titleBenefit3'),
    description: t('benefit.contentBenefit3'),
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>`,
    title: t('benefit.titleBenefit4'),
    description: t('benefit.contentBenefit4'),
  },
])

const featureList = computed(() => [
  {
    id: '01',
    text: t('benefit.contentSeePicture1'),
  },
  {
    id: '02',
    text: t('benefit.contentSeePicture2'),
  },
  {
    id: '03',
    text: t('benefit.contentSeePicture3'),
  },
  {
    id: '04',
    text: t('benefit.contentSeePicture4'),
  },
])
</script>

<template>
  <section class="relative container mx-auto px-4 md:px-10">
    <div
      class="absolute bottom-0 left-4 md:left-10 right-4 md:right-10 h-1/2 md:h-1/3 xl:h-1/2 bg-olive-middle rounded-3xl"
    ></div>
    <div class="relative z-10 flex flex-col justify-center">
      <div class="text-center">
        <h1
          class="text-5xl md:text-7xl xl:text-8xl font-bold leading-tight mb-12 pt-4 md:pt-14 font-heading"
        >
          {{ $t('main.welcome') }}
        </h1>
        <div class="mx-auto max-w-xl md:max-w-2xl xl:max-w-5xl">
          <picture>
            <source srcset="@/img/banner.png" media="(min-width: 1280px)" />
            <source srcset="@/img/banner-ipad.png" media="(min-width: 768px)" />
            <img src="@/img/banner-phone.png" alt="Banner" class="object-cover w-full" />
          </picture>
        </div>
      </div>
    </div>
  </section>

  <section class="container mx-auto px-4 md:px-10">
    <div class="border-b py-10">
      <h3 class="text-sm font-medium text-left mb-6">{{ $t('main.trustedBy') }}:</h3>
      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 items-center">
        <div v-for="logo in trustedByDatas" :key="logo.altImg" class="flex justify-center">
          <img
            v-if="isDarkMode"
            :src="logo.srcImgDark"
            :alt="logo.altImg"
            class="h-8 transition-opacity"
          />

          <img
            v-else
            :src="logo.srcImg"
            :alt="logo.altImg"
            class="h-8 filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
          />
        </div>
      </div>
    </div>
  </section>

  <section id="benefits" class="container mx-auto px-4 md:px-10">
    <div class="py-8">
      <div class="max-w-3xl mb-16">
        <h2 class="text-sm text-olive-primary font-heading">{{ $t('benefit.title') }}</h2>
        <h2 class="text-4xl md:text-6xl font-medium my-6 md:my-10 xl:my-16">
          {{ $t('benefit.content') }}
        </h2>
        <p class="text-gray-500 dark:text-gray-100">
          {{ $t('benefit.note') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-12">
        <div v-for="benefit in benefitDatas" :key="benefit.title">
          <BaseCardInformation
            :icon="benefit.icon"
            :title="benefit.title"
            :description="benefit.description"
          ></BaseCardInformation>
        </div>
      </div>

      <div class="mt-20">
        <picture>
          <source srcset="@/img/benefit-banner.png" media="(min-width: 1280px)" />
          <source srcset="@/img/benefit-banner-ipad.png" media="(min-width: 768px)" />
          <img src="@/img/benefit-banner-phone.png" alt="Banner" class="object-cover w-full" />
        </picture>
      </div>
    </div>

    <div class="py-8">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <div class="w-full lg:w-1/2">
          <h2 class="text-4xl md:text-5xl mb-6">{{ $t('benefit.seePicture') }}</h2>
          <p class="text-lg text-gray-500 dark:text-gray-100 mb-10 max-w-lg">
            {{ $t('benefit.seePictureNote') }}
          </p>

          <div class="space-y-0">
            <div
              v-for="item in featureList"
              :key="item.id"
              class="flex items-start gap-6 py-6 border-t"
            >
              <span class="font-medium text-sm mt-1">
                {{ item.id }}
              </span>

              <p class="font-medium leading-relaxed">
                {{ item.text }}
              </p>
            </div>
          </div>

          <div class="mt-8">
            <a
              href="#discover"
              class="inline-block px-8 py-3 rounded-full font-bold text-gray-900 transition-transform hover:-translate-y-1"
              style="background-color: #e3ebc3"
            >
              Discover More
            </a>
          </div>
        </div>

        <div class="w-full lg:w-1/2">
          <div class="relative rounded-[2.5rem] overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
              alt="Abstract 3D shapes"
              class="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
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
