<script setup lang="ts">
import GithubIcon from '@/components/icons/GithubIcon.vue';
</script>

<template>
  <footer
    class="flex flex-col md:flex-row place-content-center items-center wrap gap-2 px-2 py-1 text-xl md:text-2xl text-neutral-500 mb-12 md:mb-0"
  >
    <p class="w-fit text-center">Copyright &copy; {{ new Date().getFullYear() }} Is this gov.ph site secure?</p>
    <a
      class="w-fit flex flex-row justify-center gap-1 text-blue-500 underline"
      href="https://github.com/arnellebalane/isthisgovphsitesecure.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubIcon />
      <span> GitHub </span>
    </a>
  </footer>
</template>
