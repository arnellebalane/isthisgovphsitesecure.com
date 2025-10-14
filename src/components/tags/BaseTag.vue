<script setup lang="ts">
defineProps<{
  color: string;
}>();
</script>

<template>
  <span :class="['w-fit flex flex-row items-center gap-2 px-6 py-2 rounded-full', color]">
    <slot />
  </span>
</template>
