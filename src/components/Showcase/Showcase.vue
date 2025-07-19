<template>
  <section class="showcase" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" role="region" aria-labelledby="showcase-heading">
    <h2 id="showcase-heading" class="showcase-title">{{ t('ourWork') }}</h2>
    <div class="showcase-grid" role="list" aria-label="Portfolio de proiecte">
      <article 
        v-for="(project, index) in projects" 
        :key="index"
        class="showcase-card"
        @mouseenter="handleCardHover(index)"
        @mouseleave="handleCardLeave"
        @click="navigateToProject(project)"
        role="listitem"
        :aria-label="`Proiect ${project.title} - ${project.category}`"
      >
        <div class="card-image-container">
          <div class="card-image">
            <img :src="project.image" :alt="`Imagine pentru proiectul ${project.title}`" />
            <video 
              v-if="project.video"
              :src="project.video" 
              :alt="`Video pentru proiectul ${project.title}`"
              loop
              muted
              playsinline
              class="card-video"
              ref="videoRefs"
              aria-hidden="true"
            ></video>
          </div>
          <!-- Magnetic arrow circle - only show on hovered card -->
          <div 
            v-if="hoveredCardIndex === index"
            class="magnetic-arrow"
            :style="{ 
              transform: `translate(${magneticOffset.x}px, ${magneticOffset.y}px)`
            }"
            aria-hidden="true"
          >
            <span class="see-live-text">{{ t('seeLive') }}</span>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M8 16L16 8M16 8H10M16 8V14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="card-category" aria-label="Categoria proiectului">{{ project.category }}</div>
          <div class="card-handle" aria-hidden="true"></div>
        </div>
        <div class="card-content">
          <h3 class="card-title">{{ project.title }}</h3>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import './Showcase.css'
import { useI18n } from '../../composables/useI18n'

const { t } = useI18n()

const projects = ref([
  {
    title: "Hotel Rivoli",
    image: "/rivoli-photo.png",
    video: "/rivoli-video.mp4", // Add video path
    category: "web design",
    url: "https://www.hotel-rivoli.ro/"
  },
  {
    title: "Simplu", 
    image: "/Empty.png",
    video: "/rivoli-video.mp4", // Add video path
    category: "ecommerce",
    url: "/project-beta"
  },
  {
    title: "Project Gamma",
    image: "/Empty.png",
    video: "/rivoli-video.mp4", // Add video path
    category: "marketing",
    url: "/project-gamma"
  },
  {
    title: "Project Delta",
    image: "/Empty.png",
    video: "/rivoli-video.mp4", // Add video path
    category: "branding",
    url: "/project-delta"
  }
])

const magneticOffset = ref({ x: 0, y: 0 })
const hoveredCardIndex = ref(null)
const videoRefs = ref([])

const handleMouseMove = (event) => {
  // Only apply magnetic effect if we're hovering over a card
  if (hoveredCardIndex.value !== null) {
    // Calculate magnetic effect - subtle movement towards cursor
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    // Calculate distance from center
    const deltaX = event.clientX - centerX
    const deltaY = event.clientY - centerY
    
    // Apply magnetic effect (subtle movement towards cursor)
    const magneticStrength = 0.1 // Adjust this value for stronger/weaker effect
    magneticOffset.value = {
      x: deltaX * magneticStrength,
      y: deltaY * magneticStrength
    }
  }
}

const handleMouseLeave = () => {
  // Reset magnetic offset when mouse leaves the section
  magneticOffset.value = { x: 0, y: 0 }
  hoveredCardIndex.value = null
}

const handleCardHover = (index) => {
  const card = event.currentTarget
  card.style.transform = 'scale(0.98)'
  hoveredCardIndex.value = index
  
  // Play video if it exists
  const video = card.querySelector('.card-video')
  if (video) {
    video.play().catch(error => {
      console.log('Video autoplay failed:', error)
    })
  }
  
  // Reset magnetic offset when entering a new card
  magneticOffset.value = { x: 0, y: 0 }
}

const handleCardLeave = (event) => {
  const card = event.currentTarget
  card.style.transform = 'scale(1)'
  hoveredCardIndex.value = null
  
  // Pause video if it exists
  const video = card.querySelector('.card-video')
  if (video) {
    video.pause()
    video.currentTime = 0 // Reset to beginning
  }
  
  magneticOffset.value = { x: 0, y: 0 }
}

const navigateToProject = (project) => {
  // Handle navigation to project page
  if (project.url.startsWith('http')) {
    // External link - open in new tab
    window.open(project.url, '_blank')
  } else {
    // Internal link - navigate in same tab
    window.location.href = project.url
  }
}
</script> 