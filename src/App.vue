<script setup>
import { ref } from 'vue'
import NewHero from './components/NewHero/NewHero.vue'
import Showcase from './components/Showcase/Showcase.vue'
import ClientTypes from './components/ClientTypes/ClientTypes.vue'
import Testimonials from './components/Testimonials/Testimonials.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import AboutUs from './components/AboutUs/AboutUs.vue'
import OurServices from './components/OurServices/OurServices.vue'

const groupAnimationComplete = ref(true)
</script>

<template>
  <div class="app">
    <!-- Navbar -->
    <Navbar v-if="groupAnimationComplete" />
    
    <!-- Hero Section -->
    <NewHero />

    <AboutUs />

    
    <!-- Main Content -->
    <div class="main-content">
      <OurServices v-if="groupAnimationComplete"/>
      <!-- Showcase -->
      <Showcase />


      <!-- Testimonials -->
      <Testimonials />

    </div>
    
    <!-- Footer -->
    <Footer v-if="groupAnimationComplete" />
    
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

.main-content {
  margin: 0;
  position: relative;
  z-index: 1;
  min-height: 100vh;
}

/* Ensure the frame doesn't interfere with scrolling */
:deep(.preloader-overlay-group.frame-mode) {
  pointer-events: none;
}
</style>
