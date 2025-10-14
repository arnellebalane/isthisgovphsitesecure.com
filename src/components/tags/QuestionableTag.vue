<script setup lang="ts">
import BaseTag from '@/components/tags/BaseTag.vue';
import QuestionMarkIcon from '@/components/icons/QuestionMarkIcon.vue';

defineProps<{
  message: string;
}>();
</script>

<template>
  <BaseTag color="bg-orange-500">
    <QuestionMarkIcon />
    <p class="text-xl text-white font-semibold uppercase">{{ message }}</p>
  </BaseTag>
</template>
