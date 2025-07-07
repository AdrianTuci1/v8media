<script setup>
</script>

<template>
  <!-- V8M Logo positioned exactly like in preloader -->
  <div class="v8m-logo">
    <div class="slice-final slice-final-1">
      <div class="v-slice"></div>
    </div>
    <div class="slice-final slice-final-2">
      <div class="eight-square eight-square-1"></div>
      <div class="eight-square eight-square-2"></div>
    </div>
    <div class="slice-final slice-final-3">
      <div class="m-slice m-slice-1"></div>
    </div>
    <div class="slice-final slice-final-4">
      <div class="m-slice m-slice-2"></div>
    </div>
  </div>


</template>

<style scoped>

/* Preloader styles - exact copy from Preloader */
.preloader {
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #28282B;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.square-container {
  position: relative;
  width: min(200px, 15vw);
  height: min(200px, 15vw);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* V8M Logo Container - positioned like square-container from Preloader */
.v8m-logo {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(2);
  width: min(200px, 15vw);
  height: min(200px, 15vw);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Final 4 slices - exact copy from Preloader */
.slice-final {
  position: absolute;
  width: 25%;
  height: 60%;
  background-color: #000;
  top: -10%;
  z-index: 3;
}

.slice-final-1 {
  left: 0%;
  transform: translateX(-150%) scaleX(1.5);
}

.slice-final-2 {
  left: 25%;
  width: 37.5% !important;
  transform: translateX(-50%) scaleX(1.8);
}

.slice-final-3 {
  left: 50%;
  transform: translateX(80%) scaleX(1.3);
}

.slice-final-4 {
  left: 75%;
  transform: translateX(200%) scaleX(1.3);
}

/* V8M Elements - exact copy from Preloader */
.v-slice {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 90%;
  background-color: #28282B;
  transform-origin: bottom left;
  transform: rotate(-40deg);
  opacity: 1;
}

.eight-square {
  position: absolute;
  background-color: #fff;
  opacity: 1;
  transform: scale(1);
}

.eight-square-1 {
  top: 20%;
  left: 50%;
  width: 20%;
  height: 20%;
}

.eight-square-2 {
  bottom: 20%;
  left: 50%;
  width: 20%;
  height: 20%;
}

.m-slice {
  position: absolute;
  top: 0;
  width: 120%;
  height: 100%;
  background-color: #28282B;
  opacity: 1;
}

.m-slice-1 {
  right: 0;
  transform-origin: top right;
  clip-path: polygon(0 60%, 30% 0, 50% 60%, 70% 0, 100% 100%);
  transform: rotate(-30deg);
}

.m-slice-2 {
  left: 0;
  transform-origin: top left;
  clip-path: polygon(0 50%, 100% 10%, 70% 65%, 110% 120%, 0 80%);
  transform: rotate(30deg);
}
</style>
