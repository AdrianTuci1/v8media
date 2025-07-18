<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import NewHero from './components/NewHero/NewHero.vue'
import Showcase from './components/Showcase/Showcase.vue'
import DataDriven from './components/DataDriven/DataDriven.vue'
import Testimonials from './components/Testimonials/Testimonials.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import AboutUs from './components/AboutUs/AboutUs.vue'
import OurServices from './components/OurServices/OurServices.vue'

// Register ScrollSmoother
gsap.registerPlugin(ScrollSmoother)

const groupAnimationComplete = ref(true)
const smoother = ref(null)

onMounted(() => {
  // Initialize ScrollSmoother
  smoother.value = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1.1,
    effects: true,
    normalizeScroll: true,
    ignoreMobileResize: true,
  })
})

onUnmounted(() => {
  if (smoother.value) {
    smoother.value.kill()
  }
})
</script>

<template>

  <div id="smooth-wrapper" class="app">

    <!-- Navbar -->
    <Navbar />
    <div id="smooth-content">
      
      <!-- Hero Section -->
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
              <!-- Footer -->
              <Footer v-if="groupAnimationComplete"/>
      
    </div>
  </div>
</template>

<style scoped>
.app {
  margin: 0;
  min-height: 100vh;
  position: relative;
  background-color: var(--color-white);
}

#smooth-wrapper {
  overflow: hidden;
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

#smooth-content {
  min-height: 100vh;
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

/* Ensure the frame doesn't interfere with scrolling */
:deep(.preloader-overlay-group.frame-mode) {
  pointer-events: none;
}
</style>
