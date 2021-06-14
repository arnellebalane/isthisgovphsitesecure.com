<template>
  <div class="SiteGrid">
    <SiteItem v-for="site in sites" :key="site.host" :site="site" />
  </div>
</template>

<script setup>
import SiteItem from '@components/SiteItem.vue';

defineProps({
  sites: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
div {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-auto-rows: 20rem;
  gap: 1.2rem;
  padding: 0;
}
</style>
