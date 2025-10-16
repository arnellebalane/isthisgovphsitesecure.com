<script setup lang="ts">
import BaseTag from '@/components/tags/BaseTag.vue';
import ErrorIcon from '@/components/icons/ErrorIcon.vue';

defineProps<{
  message: string;
}>();
</script>

<template>
  <BaseTag color="bg-red-600">
    <ErrorIcon />
    <p class="text-xl text-white font-semibold uppercase">{{ message }}</p>
  </BaseTag>
</template>
