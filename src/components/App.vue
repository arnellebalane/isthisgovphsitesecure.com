<template>
  <Header />
  <SiteGrid :sites="sites" />
</template>

<script setup>
import Header from '@components/Header.vue';
import SiteGrid from '@components/SiteGrid.vue';
import sites from '@data/sites.json';
</script>
