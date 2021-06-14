<template>
  <section class="Header Wrapper">
    <div>
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"
        />
      </svg>
    </div>

    <h1>Is this gov.ph site secure?</h1>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  padding-top: 4.8rem;
  padding-bottom: 4.8rem;
}

div {
  flex-shrink: 0;
  width: 6rem;
  height: 6rem;
  padding: 1.6rem;
  border-radius: 50%;
  color: var(--inverted);
  background-color: var(--primary);
}

svg {
  display: block;
}

h1 {
  font-size: 4.2rem;
}
</style>
