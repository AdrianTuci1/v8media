<script setup>
import { ref } from 'vue'
import PreloaderOverlayGroup from './components/PreloaderOverlayGroup.vue'
import Showcase from './components/Showcase/Showcase.vue'
import ClientTypes from './components/ClientTypes/ClientTypes.vue'
import Navbar from './components/Navbar.vue'

const groupAnimationComplete = ref(false)

const handleGroupAnimationComplete = () => {
  console.log('Group animation complete - can now scroll down')
  groupAnimationComplete.value = true
}
</script>

<template>
  <div class="app">
    <!-- Navbar -->
    <Navbar v-if="groupAnimationComplete" />
    
    <!-- First section with preloader/overlay group -->
    <div class="first-section">
      <PreloaderOverlayGroup 
        :class="{ 'frame-mode': groupAnimationComplete }"
        @group-animation-complete="handleGroupAnimationComplete" 
      />
    </div>
    
    <!-- Main Content (becomes scrollable after animation) -->
    <div class="main-content">
      <!-- Showcase -->
      <Showcase />
      
      <!-- Client Types -->
      <ClientTypes />

    </div>
    
  </div>
</template>

<style scoped>
.app {
  margin: 0;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  background-color: var(--color-white);
}

.first-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.main-content {
  margin: 0;
  position: relative;
  z-index: 1;
  min-height: 100vh;
}

.scroll-spacer {
  height: 100vh;
  background-color: #19191d;
}

/* Ensure the frame doesn't interfere with scrolling */
:deep(.preloader-overlay-group.frame-mode) {
  pointer-events: none;
}
</style>
