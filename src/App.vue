<script setup>
import { ref } from 'vue'
import Preloader from './components/Preloader.vue'
import Overlay from './components/Overlay.vue'

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
  <div>
    <Preloader 
      @animation-complete="handleAnimationComplete" 
      @letters-position="handleLettersPosition" 
    />
    <Overlay v-if="showOverlay" :letters-position="lettersPosition" />
  </div>
</template>

<style scoped>
.main-content {
  margin: 0;
}



</style>
