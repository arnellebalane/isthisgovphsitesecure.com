<template>
  <article :class="itemClass" @click="visitLinkIfNoSelection">
    <div class="Site">
      <div class="Title">
        <h2>{{ site.title }}</h2>
        <a ref="link" :href="siteUrl" target="_blank" rel="noopener noreferrer">{{ siteUrl }}</a>
      </div>
      <img v-if="site.logo" :src="site.logo" :alt="site.title" />
    </div>
    <div class="Status">
      <p>{{ siteStatus }}</p>
      <time v-if="site.expiry" :datetime="site.expiry">Expiry: {{ site.expiry }}</time>
    </div>
  </article>
</template>

<script setup>
import { ref, computed } from 'vue';

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
const link = ref(null);

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

function visitLinkIfNoSelection() {
  if (!document.getSelection().toString()) {
    link.value.click();
  }
}
</script>

<style scoped>
article {
  position: relative;
  display: flex;
  flex-direction: column;

  padding: 2.4rem;
  border: 1px solid var(--dimmed-200);
  background-color: var(--inverted);
  cursor: pointer;
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

.Site {
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;
}

.Title {
  flex-grow: 1;
}

img {
  flex-shrink: 0;
  display: block;
  width: 4.8rem;
}

h2 {
  margin-bottom: 0.5rem;
  font-size: 2rem;
  line-height: 2.8rem;
}

a {
  display: inline-block;
  margin-bottom: 3.6rem;
}

.Status {
  margin-top: auto;
}

p {
  position: relative;
  display: inline-block;
  padding: 0.4rem 1.2rem;
  border-radius: 1.6rem;

  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--highlight-color);
}

article.valid p {
  padding-left: 2.8rem;
  background: url('@assets/icons/check.svg') left center no-repeat;
  background-size: contain;
}

article.danger p {
  color: var(--inverted);
  background-color: var(--highlight-color);
}

time {
  display: block;
  margin-top: 0.8rem;
  font-size: 1.4rem;
}

article.danger time {
  font-weight: 700;
  color: var(--highlight-color);
}

@media (max-width: 560px) {
  article {
    border: none;
    border-bottom: 1px solid var(--dimmed-200);
  }

  article:first-child {
    border-top: 1px solid var(--dimmed-200);
  }

  article:focus-within,
  article:hover {
    box-shadow: inset 0 0 0 4px var(--highlight-color);
  }

  h2 {
    font-size: 2rem;
  }
}
</style>
