<template>
  <header class="Header">
    <h1>Is this gov.ph site <span>secure?</span></h1>

    <p>
      Last update: <time datetime="meta.lastUpdate">{{ lastUpdate }}</time>
    </p>
  </header>
</template>

<script setup>
import dayjs from 'dayjs';
import meta from '@data/meta.json';

const lastUpdate = dayjs(meta.lastUpdate).format('MMMM D, YYYY hh:mm:ss A');
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  padding: 2.4rem 0;
}

h1 {
  font-size: 3.6rem;
  font-weight: 900;
}

span {
  color: var(--green);
}

@media (max-width: 560px) {
  header {
    justify-content: center;
    padding: 2.4rem 1.2rem;
  }

  h1 {
    font-size: 2.4rem;
    text-align: center;
  }

  p {
    font-size: 1.4rem;
  }
}
</style>
