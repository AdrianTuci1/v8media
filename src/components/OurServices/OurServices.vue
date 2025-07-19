<template>
  <section class="our-services" role="region" aria-labelledby="services-heading">
    <h2 id="services-heading" class="our-services-title">{{ t('ourServices') }}</h2>
    <div class="container02">
      <div class="services-layout">
        <!-- Left column: Services list -->
        <div class="services-column" role="list" aria-label="Lista serviciilor noastre">
          <div 
            class="service-item" 
            :class="{ 'active': activeService && activeService.id === service.id }"
            v-for="(service, index) in services" 
            :key="service.id"
            @mouseenter="handleMouseEnter(service)"
            @mouseleave="handleMouseLeave"
            role="listitem"
            :aria-label="`${t(service.title)} - serviciu ${index + 1}`"
          >
            <div class="service-content">
              <div class="service-left">
                <span class="service-number" aria-hidden="true">({{ String(index + 1).padStart(2, '0') }})</span>
              </div>
              <div class="service-right">
                <h3 class="service-title">{{ t(service.title) }}</h3>
                <div class="service-arrow" aria-hidden="true">↗</div>
              </div>
            </div>
            <div class="hover-overlay" aria-hidden="true"></div>
            
            <!-- Mobile image - appears under each service item -->
            <div class="mobile-service-image" v-if="activeService && activeService.id === service.id && isMobile()">
              <img 
                :src="activeService.image" 
                :alt="`Ilustrație pentru serviciul ${t(activeService.title)}`"
                class="mobile-image"
              />
            </div>
          </div>
        </div>
        
        <!-- Right column: Hover image display (desktop only) -->
        <div class="image-column desktop-only" role="complementary" aria-label="Ilustrații servicii">
          <div 
            class="hover-image-container"
            :class="{ 'active': activeService }"
            :style="containerPosition"
            aria-hidden="true"
          >
            <img 
              v-if="activeService" 
              :src="activeService.image" 
              :alt="`Ilustrație pentru serviciul ${t(activeService.title)}`"
              class="hover-image"
              :style="imageTransform"
            />
          </div>
        </div>
        

            </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { useI18n } from '../../composables/useI18n'

const { t } = useI18n()

const services = ref([
  {
    id: 1,
    title: 'strategicMarketing',
    image: '/strategic-marketing.png'
  },
  {
    id: 2,
    title: 'brandingIdentity',
    image: '/branding-identity.png'
  },
  {
    id: 3,
    title: 'webDesign',
    image: '/web-design.png'
  },
  {
    id: 4,
    title: 'automation',
    image: '/creativo.png'
  }
])

const activeService = ref(null)
const mousePosition = ref({ x: 0, y: 0 })
const smoothPosition = ref({ x: 0, y: 0 })
const mouseX = ref(0)
const mouseY = ref(0)
const tiltData = ref({ y: 0 })

// Image dimensions for positioning
const imageDimensions = ref({ width: 320, height: 240 })

// GSAP tweens for cleanup
let positionTween = null
let tiltTween = null

// Intersection Observer for mobile auto-show
let intersectionObserver = null
let debounceTimer = null

// Function to check if we're on mobile
const isMobile = () => {
  return window.innerWidth <= 768
}

// Function to update image dimensions based on viewport
const updateImageDimensions = () => {
  if (window.innerWidth <= 480) {
    imageDimensions.value = { width: 200, height: 150 }
  } else if (window.innerWidth <= 768) {
    imageDimensions.value = { width: 240, height: 180 }
  } else {
    imageDimensions.value = { width: 320, height: 240 }
  }
}

const containerPosition = computed(() => {
  if (!activeService.value) return {}
  
  return {
    left: `${smoothPosition.value.x}px`,
    top: `${smoothPosition.value.y}px`,
    transform: 'translate(-50%, -50%)'
  }
})

const imageTransform = computed(() => {
  if (!activeService.value) return {}
  
  return {
    transform: `rotate(${tiltData.value.y}deg)`
  }
})

const updateSmoothPosition = () => {
  // Kill existing tween if any
  if (positionTween) {
    positionTween.kill()
  }
  
  // Create new tween for smooth interpolation
  positionTween = gsap.to(smoothPosition.value, {
    x: mousePosition.value.x,
    y: mousePosition.value.y,
    duration: 0.8,
    ease: "power2.out"
  })
}

const updateTilt = () => {
  // Kill existing tween if any
  if (tiltTween) {
    tiltTween.kill()
  }
  
  // Calculate minimal tilt based on horizontal mouse movement
  const centerX = window.innerWidth / 2
  const targetTilt = (mouseX.value - centerX) * 0.006
  
  // Create new tween for tilt
  tiltTween = gsap.to(tiltData.value, {
    y: targetTilt,
    duration: 0.3,
    ease: "power2.out"
  })
}

const handleMouseEnter = (service) => {
  // Only work on desktop
  if (isMobile()) return
  
  activeService.value = service
  updateSmoothPosition()
  updateTilt()
  document.addEventListener('mousemove', handleGlobalMouseMove)
}

const handleMouseLeave = () => {
  // Only work on desktop
  if (isMobile()) return
  
  activeService.value = null
  document.removeEventListener('mousemove', handleGlobalMouseMove)
}

const handleGlobalMouseMove = (event) => {
  // Set position to cursor coordinates directly
  mousePosition.value = {
    x: event.clientX,
    y: event.clientY
  }
  mouseX.value = event.clientX
  mouseY.value = event.clientY
  
  if (activeService.value) {
    updateSmoothPosition()
    updateTilt()
  }
}

const handleMouseMove = (event) => {
  // This is now handled by the global listener
}

// Setup Intersection Observer for mobile auto-show
const setupIntersectionObserver = () => {
  // Clean up existing observer
  if (intersectionObserver) {
    intersectionObserver.disconnect()
  }
  
  // Only setup on mobile
  if (!isMobile()) return
  
  intersectionObserver = new IntersectionObserver((entries) => {
    // Clear existing debounce timer
    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }
    
    // Debounce the update to prevent glitches
    debounceTimer = setTimeout(() => {
      // Find the most centered element
      let mostCentered = null
      let maxIntersection = 0
      
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxIntersection) {
          maxIntersection = entry.intersectionRatio
          mostCentered = entry.target
        }
      })
      
      if (mostCentered && maxIntersection > 0.3) {
        const serviceIndex = parseInt(mostCentered.getAttribute('data-service-index'))
        const service = services.value[serviceIndex]
        if (service && (!activeService.value || activeService.value.id !== service.id)) {
          activeService.value = service
        }
      }
      // Remove the else condition to keep the image visible when scrolling
    }, 100) // 100ms debounce
  }, {
    threshold: [0.1, 0.3, 0.5, 0.7, 0.9], // Multiple thresholds for smoother detection
    rootMargin: '-20% 0px -20% 0px' // Only trigger in center 60% of viewport
  })
  
  // Observe all service items
  const serviceItems = document.querySelectorAll('.service-item')
  serviceItems.forEach((item, index) => {
    item.setAttribute('data-service-index', index)
    intersectionObserver.observe(item)
  })
}

onMounted(() => {
  // Initialize smooth position
  smoothPosition.value = { x: 0, y: 0 }
  tiltData.value = { y: 0 }
  
  // Update image dimensions based on viewport
  updateImageDimensions()
  window.addEventListener('resize', updateImageDimensions)
  
  // Setup intersection observer for mobile
  setTimeout(() => {
    setupIntersectionObserver()
  }, 100)
  
  // Setup resize handler
  const handleResize = () => {
    updateImageDimensions()
    setTimeout(() => {
      setupIntersectionObserver()
    }, 100)
  }
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  // Clean up GSAP tweens
  if (positionTween) {
    positionTween.kill()
  }
  if (tiltTween) {
    tiltTween.kill()
  }
  
  // Clean up intersection observer
  if (intersectionObserver) {
    intersectionObserver.disconnect()
  }
  
  // Clean up debounce timer
  if (debounceTimer) {
    clearTimeout(debounceTimer)
  }
  
  // Clean up event listeners
  window.removeEventListener('resize', updateImageDimensions)
  document.removeEventListener('mousemove', handleGlobalMouseMove)
})
</script>

<style scoped>
@import './OurServices.css';
</style> 