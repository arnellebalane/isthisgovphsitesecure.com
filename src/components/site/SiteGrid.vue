<template>
  <main
    class="w-full grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(40rem,1fr))] md:auto-rows-[minmax(24rem,1fr)] gap-4 md:gap-6 p-0 overflow-x-clip md:overflow-x-auto"
  >
    <SiteItem v-for="site in sitesStore.getSites()" :key="site.host.href" :site="site" />
  </main>
</template>

<script setup lang="ts" async>
import { useSitesStore } from '@/stores/sites';

import SiteItem from '@/components/site/SiteItem.vue';

const sitesStore = useSitesStore();
</script>
