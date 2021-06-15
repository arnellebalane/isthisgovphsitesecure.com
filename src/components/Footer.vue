<template>
  <footer>
    <p>Copyright &copy; {{ copyrightYear }} Is this gov.ph site secure?</p>
    &middot;
    <a href="https://github.com/arnellebalane/isthisgovphsitesecure.com" target="_blank" rel="noopener noreferrer">
      GitHub
    </a>
  </footer>
</template>

<script setup>
const copyrightYear = new Date().getFullYear();
</script>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8rem;

  padding: 2.4rem 1.2rem;
  font-size: 1.4rem;
}
</style>
