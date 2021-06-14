<template>
  <div class="Wrapper">
    <ol>
      <SiteItem v-for="site in sites" :key="site.host" :site="site" />
    </ol>
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
ol {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-auto-rows: 20rem;
  gap: 1.2rem;

  padding: 0;
  list-style: none;
}
</style>
