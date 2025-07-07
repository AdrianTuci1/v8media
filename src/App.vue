<script setup>
import { ref } from 'vue'
import Preloader from './components/Preloader.vue'
import Overlay from './components/Overlay.vue'
import DesignProcess from './components/DesignProcess.vue'

const showOverlay = ref(false)
const lettersPosition = ref(null)

const handleAnimationComplete = () => {
  showOverlay.value = true
}

const handleLettersPosition = (position) => {
  console.log('Received letters position:', position)
  lettersPosition.value = position
}
</script>

<template>
  <div class="app">
    <Preloader 
      @animation-complete="handleAnimationComplete" 
      @letters-position="handleLettersPosition" 
    />
    <div class="main-content">
      <Overlay v-if="showOverlay" :letters-position="lettersPosition" />
      <div class="scroll-spacer"></div>
      <DesignProcess />
    </div>
  </div>
</template>

<style scoped>
.app {
  margin: 0;
  min-height: 100vh;
  overflow-x: hidden;
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
</style>
