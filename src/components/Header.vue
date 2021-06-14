<template>
  <header class="Header">
    <h1>Is this gov.ph site <span>secure?</span></h1>
  </header>
</template>

<style scoped>
header {
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
    padding: 2.4rem 1.2rem;
  }

  h1 {
    font-size: 2.4rem;
    text-align: center;
  }
}
</style>
