<template>
  <article :class="itemClass">
    <div class="Site">
      <h2>{{ site.title }}</h2>
      <a :href="siteUrl" target="_blank" rel="noopener noreferrer">{{ siteUrl }}</a>
    </div>
    <div class="Status">
      <p>{{ siteStatus }}</p>
      <time v-if="site.expiry" :datetime="site.expiry">{{ site.expiry }}</time>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue';

const STATUS_VALID = 'VALID';
const STATUS_INVALID = 'INVALID';
const STATUS_EXPIRED = 'EXPIRED';
const STATUS_INSECURE = 'INSECURE';
const STATUS_UNREACHABLE = 'UNREACHABLE';

const props = defineProps({
  site: {
    type: Object,
    required: true,
  },
});

const itemClass = computed(() => {
  switch (props.site.status) {
    case STATUS_VALID:
      return 'valid';
    case STATUS_INVALID:
    case STATUS_EXPIRED:
    case STATUS_INSECURE:
    case STATUS_UNREACHABLE:
      return 'danger';
  }
});

const siteStatus = computed(() => {
  switch (props.site.status) {
    case STATUS_VALID:
      return 'Certificate valid';
    case STATUS_INVALID:
      return 'Certificate invalid';
    case STATUS_EXPIRED:
      return 'Certificate expired';
    case STATUS_INSECURE:
      return 'Site insecure';
    case STATUS_UNREACHABLE:
      return 'Site unreachable';
  }
});

const siteUrl = computed(() => {
  const scheme = props.site.status === STATUS_INSECURE ? 'http://' : 'https://';
  return scheme + props.site.host;
});
</script>

<style scoped>
article {
  position: relative;
  display: flex;
  flex-direction: column;

  padding: 2.4rem;
  border: 1px solid var(--dimmed-200);
  background-color: var(--inverted);
}

article:focus-within,
article:hover {
  box-shadow: 0 0 0 4px var(--highlight-color);
}

article.valid {
  --highlight-color: var(--green);
}

article.danger {
  --highlight-color: var(--red);
}

h2 {
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
}

a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.Status {
  margin-top: auto;
}
</style>
