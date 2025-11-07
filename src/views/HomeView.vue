<script setup></script>

<template>
  <section class="min-h-screen flex flex-col justify-center">
    <div class="container mx-auto px-6 pt-24 pb-16 text-center">
      <h1 class="text-6xl md:text-8xl font-bold leading-tight mb-12">
        {{ $t('main.everyThing') }}
      </h1>
      <div class="max-w-5xl mx-auto">
        <!-- <img
          src="https://via.placeholder.com/1200x700.png?text=Dashboard+Mockup"
          alt="Dashboard Mockup"
          class="rounded-lg shadow-2xl object-cover w-full"
        /> -->
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

  <section id="benefits" class="min-h-screen bg-white dark:bg-gray-900 p-8">
    <h1 class="text-4xl font-bold">Benefits Section</h1>
  </section>

  <section id="specifications" class="min-h-screen bg-gray-100 dark:bg-gray-800 p-8">
    <h1 class="text-4xl font-bold">Specifications Section</h1>
  </section>

  <section id="how-to" class="min-h-screen bg-white dark:bg-gray-900 p-8">
    <h1 class="text-4xl font-bold">How-to Section</h1>
  </section>

  <section id="contact-us" class="min-h-screen bg-gray-100 dark:bg-gray-800 p-8">
    <h1 class="text-4xl font-bold">Contact Us Section</h1>
  </section>

  <section id="learn-more" class="min-h-screen bg-green-50 dark:bg-green-900 p-8">
    <h1 class="text-4xl font-bold">Learn More Section</h1>
  </section>
</template>
