<script setup></script>

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
            <img src="@/img/banner-phone.png" alt="Dashboard Mockup" class="object-cover w-full" />
          </picture>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16">
    <div class="container mx-auto px-6">
      <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 text-left mb-6">
        Trusted by:
      </h3>

      <div class="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
        <div class="flex justify-center">
          <img
            src="https://via.placeholder.com/150x40.png?text=Logoipsum"
            alt="Logo 1"
            class="h-8 filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
          />
        </div>
        <div class="flex justify-center">
          <img
            src="https://via.placeholder.com/150x40.png?text=Logoipsum"
            alt="Logo 2"
            class="h-8 filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
          />
        </div>
        <div class="flex justify-center">
          <img
            src="https://via.placeholder.com/150x40.png?text=Logoipsum"
            alt="Logo 3"
            class="h-8 filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
          />
        </div>
        <div class="flex justify-center">
          <img
            src="https://via.placeholder.com/150x40.png?text=Logoipsum"
            alt="Logo 4"
            class="h-8 filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
          />
        </div>
        <div class="flex justify-center">
          <img
            src="https://via.placeholder.com/150x40.png?text=Logoipsum"
            alt="Logo 5"
            class="h-8 filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
          />
        </div>
        <div class="flex justify-center">
          <img
            src="https://via.placeholder.com/150x40.png?text=Logoipsum"
            alt="Logo 6"
            class="h-8 filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
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
