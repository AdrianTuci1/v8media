<template>
  <div class="preloader-overlay-group" ref="groupRef">
    <!-- Preloader -->
    <Preloader 
      @animation-complete="handlePreloaderComplete" 
      @letters-position="handleLettersPosition" 
    />
    
    <!-- Overlay -->
    <Overlay :letters-position="lettersPosition" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Preloader from './Preloader/Preloader.vue'
import Overlay from './Overlay.vue'
import { useGroupAnimation } from './useGroupAnimation.js'

const emit = defineEmits(['group-animation-complete'])

const groupRef = ref(null)
const lettersPosition = ref(null)

const { isAnimating, startGroupZoomOut, disableScroll } = useGroupAnimation(groupRef, emit)

const handlePreloaderComplete = () => {
  // Preloader animation is complete, now we can start the group zoom out
  startGroupZoomOut()
}

// Disable scroll when component mounts
disableScroll()

const handleLettersPosition = (position) => {
  console.log('Received letters position:', position)
  lettersPosition.value = position
}
</script>

<style scoped>
.preloader-overlay-group {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  transform-origin: center center;
  pointer-events: none; /* Allow clicking through to content below */
  transform: translate(-50%, -50%);
}

/* Ensure preloader appears above overlay initially */
:deep(.preloader) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  pointer-events: auto;
}

/* Overlay positioning */
:deep(.overlay) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
}

/* When animation is complete, the group becomes a frame */
.preloader-overlay-group.frame-mode {
  pointer-events: none;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}
</style> 