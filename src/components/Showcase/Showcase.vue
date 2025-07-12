<template>
  <section class="showcase" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
    <h2 class="showcase-title">recent projects</h2>
    <div class="showcase-grid">
      <div 
        v-for="(project, index) in projects" 
        :key="index"
        class="showcase-card"
        @mouseenter="handleCardHover(index)"
        @mouseleave="handleCardLeave"
        @click="navigateToProject(project)"
      >
        <div class="card-image-container">
          <div class="card-image">
            <img :src="project.image" :alt="project.title" />
          </div>
          <div class="overlay-card-image">
            <img :src="project.overlay" :alt="project.title" />
          </div>
          <!-- Magnetic arrow circle - only show on hovered card -->
          <div 
            v-if="hoveredCardIndex === index"
            class="magnetic-arrow"
            :style="{ 
              transform: `translate(${magneticOffset.x}px, ${magneticOffset.y}px)`
            }"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2" fill="rgba(255,255,255,0.1)"/>
              <path d="M8 16L16 8M16 8H10M16 8V14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="card-category">{{ project.category }}</div>
          <div class="card-handle"></div>
        </div>
        <div class="card-content">
          <h3 class="card-title">{{ project.title }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import './Showcase.css'

const projects = ref([
  {
    title: "Project Alpha",
    image: "/simplu.png",
    overlay: "/simplu-page.png",
    category: "web design",
    url: "/project-alpha"
  },
  {
    title: "Project Beta", 
    image: "/hotel-rivoli.png",
    overlay: "/hotel-page.png",
    category: "ecommerce",
    url: "/project-beta"
  },
  {
    title: "Project Gamma",
    image: "/rent-a-car.png",
    category: "marketing",
    url: "/project-gamma"
  },
  {
    title: "Project Delta",
    image: "/creativo.png",
    category: "branding",
    url: "/project-delta"
  }
])

const magneticOffset = ref({ x: 0, y: 0 })
const hoveredCardIndex = ref(null)

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
  // Reset magnetic offset when entering a new card
  magneticOffset.value = { x: 0, y: 0 }
}

const handleCardLeave = (event) => {
  const card = event.currentTarget
  card.style.transform = 'scale(1)'
  hoveredCardIndex.value = null
  magneticOffset.value = { x: 0, y: 0 }
}

const navigateToProject = (project) => {
  // Handle navigation to project page
  console.log('Navigating to:', project.url)
  // You can implement actual navigation here
  // window.location.href = project.url
}
</script> 