<template>
  <div class="container p-4">
    <div class="text-center mt-5">
      <h1 class="pokedex-title fw-bold">Uh-oh!</h1>
      <p class="pokedex-subtitle fw-medium">You look lost on your journey!</p>
      <router-link to="/" class="pokedex-btn pokedex-btn-active mt-3">
        Go back
        home</router-link>
    </div>
  </div>
</template>

<style scoped>
.pokedex-title {
  font-size: 2.3rem;
}

.pokedex-subtitle {
  font-size: 1.2rem;
}
</style>
