<script setup>
import { ref } from 'vue'
import Preloader from './components/Preloader.vue'
import Overlay from './components/Overlay.vue'
import DesignProcess from './components/DesignProcess.vue'

const showOverlay = ref(true) // Force show for debugging
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
      <Overlay v-if="showOverlay" :letters-position="lettersPosition" />
      <DesignProcess />
  </div>
</template>

<style scoped>
.app {
  margin: 0;
}

.main-content {
  margin: 0;
  position: relative;
  z-index: 1;
}

</style>
