<script setup>
import { ref } from 'vue'
import Preloader from './components/Preloader/Preloader.vue'
import Overlay from './components/Overlay.vue'
import DesignProcess from './components/DesignProcess.vue'

const lettersPosition = ref(null)

const handleAnimationComplete = () => {
  // Animation complete - overlay is already visible
}

const handleLettersPosition = (position) => {
  console.log('Received letters position:', position)
  lettersPosition.value = position
}
</script>

<template>
  <div class="app">
    <div class="main-content">
      <Overlay :letters-position="lettersPosition" />
      <div class="scroll-spacer"></div>
      <DesignProcess />
    </div>
    <Preloader 
      @animation-complete="handleAnimationComplete" 
      @letters-position="handleLettersPosition" 
    />
  </div>
</template>

<style scoped>
.app {
  margin: 0;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
}

.main-content {
  margin: 0;
  position: relative;
  z-index: 1;
}

.scroll-spacer {
  height: 200vh; /* Reduced since V8M is now in preloader */
  position: relative;
}

/* Ensure preloader appears above overlay */
:deep(.preloader) {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  pointer-events: auto;
}
</style>
