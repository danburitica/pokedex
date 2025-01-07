<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <img src="@/assets/icons/loader.svg" alt="Loader" class="pokeball-loader">
  </div>
</template>

<style scoped>
.pokeball-loader {
  -webkit-animation: rotate-scale-up 0.65s linear infinite both;
  animation: rotate-scale-up 0.65s linear infinite both;
}

@-webkit-keyframes rotate-scale-up {
  0% {
    -webkit-transform: scale(1) rotateZ(0);
    transform: scale(1) rotateZ(0);
  }

  50% {
    -webkit-transform: scale(2) rotateZ(180deg);
    transform: scale(2) rotateZ(180deg);
  }

  100% {
    -webkit-transform: scale(1) rotateZ(360deg);
    transform: scale(1) rotateZ(360deg);
  }
}

@keyframes rotate-scale-up {
  0% {
    -webkit-transform: scale(1) rotateZ(0);
    transform: scale(1) rotateZ(0);
  }

  50% {
    -webkit-transform: scale(2) rotateZ(180deg);
    transform: scale(2) rotateZ(180deg);
  }

  100% {
    -webkit-transform: scale(1) rotateZ(360deg);
    transform: scale(1) rotateZ(360deg);
  }
}
</style>
