<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="welcome-content text-center">
      <div class="image-wrapper">
        <img src="@/assets/welcome.svg" alt="Welcome">
      </div>
      <h1 class="pokedex-title fw-bold mt-5">Welcome to Pokédex</h1>
      <p class="pokedex-subtitle fw-medium mt-4 px-3 mb-4">The digital encyclopedia created by Professor Oak is an
        invaluable
        tool
        to
        Trainers in the
        Pokémon world.</p>
      <router-link to="/list" class="pokedex-btn pokedex-btn-active">Get started</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/custom.scss";

.image-wrapper {
  position: relative;
  display: inline-block;

  .img {
    position: relative;
  }
}

.image-wrapper::before {
  content: '';
  position: absolute;
  bottom: 11px;
  left: 49px;
  width: 206px;
  height: 206px;
  background-color: $pokedex-btn-active;
  border-radius: 50%;
  z-index: -1;
  border: 2px solid black;
}

.welcome-content {
  min-height: 80vh;
}
</style>
