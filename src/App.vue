<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NewHero from './components/NewHero/NewHero.vue'
import Showcase from './components/Showcase/Showcase.vue'
import DataDriven from './components/DataDriven/DataDriven.vue'
import Testimonials from './components/Testimonials/Testimonials.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import AboutUs from './components/AboutUs/AboutUs.vue'
import OurServices from './components/OurServices/OurServices.vue'
import { useI18n } from './composables/useI18n'

// Initialize translation system
const { initLanguage } = useI18n()

const groupAnimationComplete = ref(true)

onMounted(() => {
  // Initialize translation system
  initLanguage()
})

onUnmounted(() => {
  // No ScrollSmoother to kill here
})
</script>

<template>
  <div class="app" role="application" aria-label="V8 Media Digital Agency">
    
    <!-- Skip to main content link for accessibility -->
    <a href="#main-content" class="skip-link">Sari la conținutul principal</a>

    <!-- Navbar -->
    <Navbar />
    
    <!-- Hero Section -->
    <main role="main" id="main-content">
      <NewHero />

      <!-- Main Content -->
      <div class="main-content">
        <div class="content-wrapper">
          <AboutUs />
          <OurServices />
          <!-- Showcase -->
          <Showcase />

          <!-- Data Driven -->
          <DataDriven />
        </div>
        
        <!-- Testimonials (full width) -->
        <Testimonials />
        
      </div>
    </main>
    
    <!-- Footer -->
    <Footer v-if="groupAnimationComplete"/>
    
  </div>
</template>

<style scoped>
.app {
  margin: 0;
  min-height: 100vh;
  position: relative;
  background-color: var(--color-white);
}

.main-content {
  margin: 0;
  position: relative;
  z-index: 1;
  min-height: 100vh;
}

.content-wrapper {
  max-width: 1800px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.skip-link {
  display: none;
}

/* Ensure the frame doesn't interfere with scrolling */
:deep(.preloader-overlay-group.frame-mode) {
  pointer-events: none;
}
</style>
