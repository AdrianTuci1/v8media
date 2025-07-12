<template>
  <section class="our-services">
    <h1 class="our-services-title">our services</h1>
    <div class="container02">
      <div class="services-layout">
        <!-- Left column: Services list -->
        <div class="services-column">
          <div 
            class="service-item" 
            v-for="(service, index) in services" 
            :key="service.id"
            @mouseenter="handleMouseEnter(service)"
            @mouseleave="handleMouseLeave"
            @mousemove="handleMouseMove"
          >
            <div class="service-content">
              <div class="service-left">
                <span class="service-number">({{ String(index + 1).padStart(2, '0') }})</span>
              </div>
              <div class="service-right">
                <h3 class="service-title">{{ service.title }}</h3>
                <div class="service-arrow">↗</div>
              </div>
            </div>
            <div class="hover-overlay"></div>
          </div>
        </div>
        
        <!-- Right column: Hover image display -->
        <div class="image-column">
          <div 
            class="hover-image-container"
            :class="{ 'active': activeService }"
            :style="containerPosition"
          >
            <img 
              v-if="activeService" 
              :src="activeService.image" 
              :alt="activeService.title"
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

const services = ref([
  {
    id: 1,
    title: 'Strategic Marketing',
    image: '/strategic-marketing.png'
  },
  {
    id: 2,
    title: 'Brand Identity',
    image: '/branding-identity.png'
  },
  {
    id: 3,
    title: 'Web Development',
    image: '/web-design.png'
  },
  {
    id: 4,
    title: 'Automations',
    image: '/creativo.png'
  }
])

const activeService = ref(null)
const mousePosition = ref({ x: 0, y: 0 })
const smoothPosition = ref({ x: 0, y: 0 })
const mouseX = ref(0)
const mouseY = ref(0)
const tiltData = ref({ y: 0 })

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
  // Use GSAP for smooth interpolation with bigger delay
  gsap.to(smoothPosition.value, {
    x: mousePosition.value.x,
    y: mousePosition.value.y,
    duration: 0.8, // Increased delay
    ease: "power2.out"
  })
}

const updateTilt = () => {
  // Calculate minimal tilt based on horizontal mouse movement
  const centerX = window.innerWidth / 2
  const targetTilt = (mouseX.value - centerX) * 0.006 // Very minimal horizontal tilt
  
  gsap.to(tiltData.value, {
    y: targetTilt,
    duration: 0.3,
    ease: "power2.out"
  })
}

const handleMouseEnter = (service) => {
  activeService.value = service
  // Start smooth animation when image becomes active
  updateSmoothPosition()
  updateTilt()
}

const handleMouseLeave = () => {
  activeService.value = null
}

const handleMouseMove = (event) => {
  mousePosition.value = {
    x: event.clientX,
    y: event.clientY
  }
  mouseX.value = event.clientX
  mouseY.value = event.clientY
  
  // Update position and tilt smoothly when image is active
  if (activeService.value) {
    updateSmoothPosition()
    updateTilt()
  }
}

onMounted(() => {
  // Initialize smooth position
  smoothPosition.value = { x: 0, y: 0 }
  tiltData.value = { y: 0 }
})

onUnmounted(() => {
  // GSAP handles cleanup automatically
})
</script>

<style scoped>
.our-services {
  background: var(--color-white);
  color: rgb(182, 179, 179);
  width: 100%;
  padding-inline: 30px;
}

.our-services-title {
  font-size: 3.5rem;
  font-weight: 600;
  margin: 0;
  color: var(--color-black);
  letter-spacing: 0.05em;
  transition: color 0.3s ease;
  margin-bottom: 80px;
}

.container02 {
  width: 100%;
  margin: 0 auto;
}

.services-layout {
  align-items: start;
}

.services-column {
  display: flex;
  flex-direction: column;
  border-left: none;
  border-right: none;
}

.service-item {
  padding: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  background: transparent;
  overflow: hidden;
}

.service-item:hover {
  color: black;
}

.service-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
}

.service-left {
  display: flex;
  align-items: center;
}

.service-number {
  font-size: 0.9rem;
  font-weight: 500;
  color: #999;
  transition: color 0.3s ease;
}

.service-item:hover .service-number {
  color: #666;
}

.service-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.service-title {
  font-size: 2.6rem;
  font-weight: 600;
  margin: 0;
  letter-spacing: 0.05em;
  transition: color 0.3s ease;
}

.service-arrow {
  font-size: 1.2rem;
  font-weight: 600;
  transition: transform 0.3s ease;
}

.service-item:hover .service-arrow {
  transform: translate(5px, -5px);
}

.hover-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  background: white;
  transition: height 0.3s ease;
  z-index: 1;
}

.service-item:hover .hover-overlay {
  height: 100%;
}

.image-column {
  position: relative;
  height: 400px;
}

.hover-image-container {
  position: fixed;
  width: 320px;
  height: 240px;
  pointer-events: none;
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.hover-image-container.active {
  opacity: 1;
}

.hover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.1s ease;
}

/* Responsive Design */
@media (max-width: 768px) {
  .services-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .service-item {
    padding: 20px;
  }
  
  .service-title {
    font-size: 1.5rem;
  }
  
  .service-arrow {
    font-size: 1rem;
  }
  
  .image-column {
    height: 300px;
  }
  
  .hover-image-container {
    width: 240px;
    height: 180px;
  }
}

@media (max-width: 480px) {
  .our-services {
    padding: 60px 20px;
  }
  
  .service-item {
    padding: 15px;
  }
  
  .service-title {
    font-size: 1.3rem;
  }
  
  .service-arrow {
    font-size: 0.9rem;
  }
  
  .hover-image-container {
    width: 200px;
    height: 150px;
  }
}
</style> 