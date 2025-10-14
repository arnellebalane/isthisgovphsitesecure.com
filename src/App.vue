<script setup lang="ts">
import { onMounted } from 'vue';

import { useSitesStore } from '@/stores/sites';

import LayoutHeader from '@/components/layout/LayoutHeader.vue';
import SiteGrid from '@/components/site/SiteGrid.vue';
import LayoutFooter from '@/components/layout/LayoutFooter.vue';

const sitesStore = useSitesStore();

const ensureSites = async () => {
  await sitesStore.fetchSites();
};

onMounted(ensureSites);
</script>

<template>
  <LayoutHeader />
  <SiteGrid />
  <LayoutFooter />
</template>
