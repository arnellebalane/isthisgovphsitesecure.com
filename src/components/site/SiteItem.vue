<template>
  <a
    :href="site.host.href"
    ref="link"
    target="_blank"
    rel="noopener noreferrer"
    class="w-full relative flex flex-col justify-between p-6 md:p-10 bg-white border-2 border-transparent hover:border-neutral-600/20 transition shadow-sm shadow-neutral-200/20"
  >
    <section class="flex flex-col gap-1.5">
      <h2 class="text-3xl md:text-4xl font-bold">{{ site.title }}</h2>
      <span
        class="w-fit text-2xl md:text-3xl text-neutral-500 underline mb-8 md:mb-12 hover:bg-emerald-700/20 transition"
        :href="site.host.href"
        >{{ site.host }}</span
      >
    </section>

    <aside class="flex flex-col gap-4">
      <component :is="getTag" :message="status[site.status]" />

      <time
        v-if="site.expiry.getTime()"
        :datetime="site.expiry.toISOString()"
        class="text-xl md:text-2xl text-neutral-500"
      >
        {{ isExpired() ? 'Expired' : 'Expiries' }} on {{ useDate(site.expiry) }}
      </time>
    </aside>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { useDate } from '@/composables/date';

import ValidTag from '@/components/tags/ValidTag.vue';
import ErrorTag from '@/components/tags/ErrorTag.vue';
import QuestionableTag from '@/components/tags/QuestionableTag.vue';

const { site } = defineProps<{
  site: Site;
}>();

const status = {
  VALID: 'Certificate valid',
  INVALID: 'Certificate invalid',
  EXPIRED: 'Certificate expired',
  INSECURE: 'Site insecure',
  UNREACHABLE: 'Site unreachable',
};

const hasVulnerability = () => site.status !== 'VALID';
const isUnreachable = () => site.status === 'UNREACHABLE';
const isExpired = () => site.status === 'EXPIRED';

const getTag = computed(() => {
  if (!hasVulnerability()) {
    return ValidTag;
  }

  if (isUnreachable()) {
    return QuestionableTag;
  }

  return ErrorTag;
});
</script>
