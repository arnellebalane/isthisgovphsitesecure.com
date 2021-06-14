<template>
  <div class="Wrapper">
    <Header />
    <SiteGrid :sites="sites" />
  </div>
</template>

<script setup>
import Header from '@components/Header.vue';
import SiteGrid from '@components/SiteGrid.vue';
import sites from '@data/sites.json';
</script>

<style scoped>
.Wrapper {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 2.4rem;
}
</style>
