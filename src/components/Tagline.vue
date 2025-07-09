<template>
  <div class="tagline">
    <!-- Horizontal line with status info -->
    <div class="status-line">
      <div class="horizontal-line left-line"></div>
      <div class="status-info">
        <span class="location">Bucharest, Romania</span>
        <span class="time">{{ currentTime }}</span>
        <span class="work-status available">Available for work</span>
      </div>
      <div class="horizontal-line right-line"></div>
    </div>
    
    <div class="tagline-columns">
      <!-- Left column: Main tagline -->
      <div class="tagline-main">
        <h2 ref="firstH2">REDEFINING</h2>
        <h2 ref="secondH2">WHAT'S</h2>
        <h2 ref="thirdH2" data-scrambled="#$1SB(^X">POSSIBLE</h2>
      </div>
      
      <!-- Right column: Services -->
      <div class="services-text" ref="servicesText">
        <div class="services-carousel">
          <p>branding</p>
          <p>web development</p>
          <p>marketing</p>
          <p>conversational ai</p>
          <!-- Multiple duplicate sets for continuous animation -->
          <p>branding</p>
          <p>web development</p>
          <p>marketing</p>
          <p>conversational ai</p>
          <p>branding</p>
          <p>web development</p>
          <p>marketing</p>
          <p>conversational ai</p>
          <p>branding</p>
          <p>web development</p>
          <p>marketing</p>
          <p>conversational ai</p>
          <p>branding</p>
          <p>web development</p>
          <p>marketing</p>
          <p>conversational ai</p>
          <p>branding</p>
          <p>web development</p>
          <p>marketing</p>
          <p>conversational ai</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const currentTime = ref('')
const firstH2 = ref(null)
const secondH2 = ref(null)
const thirdH2 = ref(null)
const servicesText = ref(null)

let timeInterval
let carouselTl = null

const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })
}

const startTaglineAnimation = () => {
  // Set initial states
  gsap.set([firstH2.value, secondH2.value], {
    y: 100,
    opacity: 0
  })
  
  gsap.set(thirdH2.value, {
    opacity: 0
  })

  // Create timeline for tagline animations
  const tl = gsap.timeline({
    delay: 0.7 // Small delay to let other animations settle
  })

  // Animate first two h2 elements with rise effect
  tl.to(firstH2.value, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power2.out'
  })
  .to(secondH2.value, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power2.out'
  }, '-=0.7')

  // Animate third h2 with scramble effect
  .to(thirdH2.value, {
    opacity: 1,
    duration: 0.1
  }, '-=0.3')
  .to(thirdH2.value, {
    duration: 1.5,
    ease: 'power2.inOut',
    onUpdate: function() {
      const progress = this.progress()
      const scrambledText = thirdH2.value.dataset.scrambled
      const finalText = 'POSSIBLE'
      
      if (progress < 0.5) {
        // First half: show scrambled text
        thirdH2.value.textContent = scrambledText
      } else {
        // Second half: gradually reveal final text
        const revealProgress = (progress - 0.5) * 2 // 0 to 1
        const charsToShow = Math.floor(revealProgress * finalText.length)
        const revealedPart = finalText.substring(0, charsToShow)
        const remainingPart = scrambledText.substring(charsToShow)
        thirdH2.value.textContent = revealedPart + remainingPart
      }
    }
  })
}

const startServicesCarousel = () => {
  const carousel = servicesText.value.querySelector('.services-carousel')
  const items = carousel.querySelectorAll('p')
  
  // Calculate item height dynamically
  const getItemHeight = () => {
    const firstItem = items[0]
    if (firstItem) {
      return firstItem.offsetHeight + 8 // 8px for gap
    }
    return 40 // fallback height
  }
  
  const itemHeight = getItemHeight()
  
  // Kill existing animation if any
  if (carouselTl) {
    carouselTl.kill()
  }
  
  // Set initial position - start from the middle (showing first set)
  gsap.set(carousel, {
    y: 0
  })
  
  // Create continuous downward carousel animation with varying speeds
  carouselTl = gsap.timeline()
  
  // Fast downward movement phase
  carouselTl.to(carousel, {
    y: -itemHeight * 2, // Move down through 2 items
    duration: 1.6, // Fast movement
    ease: 'power1.out'
  })
  
  // Slower downward movement phase
  .to(carousel, {
    y: -itemHeight * 4, // Continue moving down through 2 more items
    duration: 3, // Slower movement
    ease: 'power2.out'
  })
  
  // Final slow movement to stop at the correct position
  .to(carousel, {
    y: -itemHeight * 6, // Move to position that shows original 4 items
    duration: 1,
    ease: 'power3.out'
  })
  
  // Keep the carousel visible at the final position (don't pause or hide)
  // The animation will naturally stop at the final position and stay there
}

// Handle window resize
const handleResize = () => {
  if (servicesText.value) {
    startServicesCarousel()
  }
}

onMounted(() => {
  updateTime()
  timeInterval = setInterval(updateTime, 1000)
  
  // Add resize listener
  window.addEventListener('resize', handleResize)
  
  // Start tagline animation after a short delay
  setTimeout(() => {
    startTaglineAnimation()
    startServicesCarousel()
  }, 1000)
})

onUnmounted(() => {
  if (timeInterval) {
    clearInterval(timeInterval)
  }
  
  // Clean up resize listener
  window.removeEventListener('resize', handleResize)
  
  // Kill any running animations
  if (carouselTl) {
    carouselTl.kill()
  }
})
</script>

<style scoped>
/* Import Montserrat font */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');

/* Tagline container */
.tagline {
  font-family: 'Montserrat', sans-serif;
  margin-top: 50px;
}

/* Status line with horizontal line and info */
.status-line {
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-bottom: 3rem;
  gap: 2rem;
  margin-top: 50px;
  position: relative;
}

.horizontal-line {
  height: 20px;
  background-color: #000000;
  flex: 1;
  max-width: 200px;
  min-width: 200px;
  border-radius: 1px;
}

.status-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
  min-width: 200px;
}

.location, .time, .work-status {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.work-status.available {
  color: #28a745;
  font-weight: 600;
}

.work-status.unavailable {
  color: #dc3545;
  font-weight: 600;
}

/* Two-column layout */
.tagline-columns {
  display: flex;
  gap: 4rem;
  align-items: flex-start;
  justify-content: center;
}



/* Left column: Main tagline */
.tagline-main {
  text-align: right;
}

.tagline-main h2 {
  font-size: 2.5rem;
  color: #333;
  font-weight: 700;
  margin: 0;
  line-height: 1.1;
  font-family: 'Montserrat', sans-serif;
}

/* Right column: Services */
.services-text {
  text-align: left;
  overflow: hidden;
  height: 140px; /* Fixed height to show only 4 items */
  display: flex;
  align-items: center;
}

.services-carousel {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.services-text p {
  font-size: 1.2rem;
  color: #333;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: lowercase;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  white-space: nowrap;
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {
  .status-line {
    flex-direction: row;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .horizontal-line {
    max-width: 100px;
    min-width: 30px;
  }
  
  .status-info {
    min-width: 120px;
    flex-direction: row;
    gap: 0.5rem;
  }
  
  .location, .time, .work-status {
    font-size: 0.8rem;
  }
  
  .tagline-columns {
    flex-direction: row;
    gap: 2rem;
    align-items: flex-start;
  }
  
  .tagline-main {
    text-align: right;
  }
  
  .services-text {
    text-align: left;
    height: 120px;
  }
  
  .tagline-main h2 {
    font-size: 2rem;
  }
  
  .services-text p {
    font-size: 1rem;
  }
}

/* Extra small screens */
@media (max-width: 480px) {
  .tagline-columns {
    gap: 1.5rem;
  }
  
  .tagline-main h2 {
    font-size: 1.5rem;
  }
  
  .services-text {
    height: 100px;
  }
  
  .services-text p {
    font-size: 0.9rem;
  }
}
</style> 