<template>
  <section class="about-us" ref="aboutSection">
    <div class="container">
      <div class="about-empty"></div>
      <div class="about-content">
        <div class="content-text" ref="contentText">
          <!-- Background semi-transparent text -->
          <p class="paragraph background-text">
            <span class="word" v-for="(word, index) in paragraphWordsArray" :key="`bg-${index}`">
              {{ word }}
            </span>
          </p>
          <!-- Animated overlay text -->
          <p class="paragraph overlay-text" ref="paragraph1">
            <span class="word" v-for="(word, index) in paragraphWordsArray" :key="`overlay-${index}`" :ref="el => paragraphWordsRef[index] = el">
              {{ word }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

// Template refs
const aboutSection = ref(null)
const contentText = ref(null)
const paragraph1 = ref(null)

// Word refs
const paragraphWordsRef = ref([])

// Content - shortened paragraph
const paragraphText = "We are a creative digital agency passionate about transforming brands through innovative design and strategic thinking. Our team combines artistic vision with technical expertise to deliver exceptional digital experiences."

// Split text into arrays
const paragraphWordsArray = paragraphText.split(' ')

// Animation timeline
let tl = null
let scrollTrigger = null

onMounted(() => {
  // Initialize animations
  initAnimations()
})

onUnmounted(() => {
  // Clean up only this component's ScrollTrigger and timeline
  if (scrollTrigger) {
    scrollTrigger.kill()
  }
  if (tl) {
    tl.kill()
  }
})

const initAnimations = () => {
  // Set initial state for overlay text
  gsap.set(paragraphWordsRef.value, {
    opacity: 0,
    y: 0
  })

  // Create main timeline
  tl = gsap.timeline()

  // Animate overlay text to appear word by word over the semi-transparent background
  tl.to(paragraphWordsRef.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.05,
    ease: "power2.out"
  })

  // Create ScrollTrigger for the timeline
  scrollTrigger = ScrollTrigger.create({
    trigger: aboutSection.value,
    start: "top 80%",
    end: "bottom 20%",
    animation: tl,
    toggleActions: "play none none reverse",
    markers: false
  })
}
</script>

<style scoped>
.about-us {
  padding: 120px 10px;
  background-color: var(--color-white);
  position: relative;
  overflow: hidden;
  margin-bottom: 80px;
}

.container {
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
}

.about-content {
  margin: 0 auto;
  width: 60%;
  position: relative;
}

.about-empty {
  flex: 1;
  width: 100%;
}

.content-text {
  font-size: clamp(1.3rem, 3vw, 2.2rem);
  font-weight: 500;
  line-height: 1.4;
  color: #000;
  position: relative;
}

.paragraph {
  margin-bottom: 0;
}

.background-text {
  color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}

.overlay-text {
  position: relative;
  z-index: 2;
  color: #000;
}

.word {
  display: inline-block;
  margin-right: 4px;
  transition: color 0.3s ease;
}

/* Large screen styles */
@media (min-width: 1024px) {
  .content-text {
    font-size: clamp(1.3rem, 3vw, 2.2rem);
  }
}

/* Medium screen styles */
@media (min-width: 768px) and (max-width: 1023px) {
  .about-us {
    padding: 100px 0;
  }
  
  .content-text {
    font-size: clamp(1.3rem, 3vw, 2.2rem);
  }
}

/* Small screen styles */
@media (max-width: 767px) {
  .about-us {
    padding: 80px 0;
  }
  
  .container {
    padding: 0 15px;
  }
  
  .content-text {
    font-size: clamp(1.3rem, 3vw, 2.2rem);
  }
}
</style> 