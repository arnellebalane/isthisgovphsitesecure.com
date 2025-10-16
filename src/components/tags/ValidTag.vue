<script setup lang="ts">
import BaseTag from '@/components/tags/BaseTag.vue';
import ValidIcon from '@/components/icons/ValidIcon.vue';

defineProps<{
  message: string;
}>();
</script>

<template>
  <BaseTag color="bg-emerald-700">
    <ValidIcon />
    <p class="text-xl text-white font-semibold uppercase">{{ message }}</p>
  </BaseTag>
</template>
