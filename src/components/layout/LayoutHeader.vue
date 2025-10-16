<template>
  <header class="w-full flex flex-row justify-between items-baseline flex-wrap gap-3 md:gap-0 py-12">
    <h1 class="w-full md:w-fit text-6xl text-center md:text-left font-black">
      Is this gov.ph site <span class="text-emerald-700">secure?</span>
    </h1>

    <span class="w-full md:w-fit h-fit text-xl md:text-3xl text-center text-neutral-600">
      Last update: <time datetime="meta.lastUpdate">{{ useDate(lastUpdate) }}</time>
    </span>
  </header>
</template>

<script setup lang="ts">
import { useDate } from '@/composables/date';
import meta from '@/data/meta.json';

const lastUpdate = new Date(meta.lastUpdate);
</script>
