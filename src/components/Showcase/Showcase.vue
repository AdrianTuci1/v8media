<template>
  <section class="showcase">
    <h2 class="showcase-title">our latest projects</h2>
    <div class="showcase-grid">
      <div 
        v-for="(project, index) in projects" 
        :key="index"
        class="showcase-card"
        @mouseenter="handleCardHover"
        @mouseleave="handleCardLeave"
      >
        <div class="card-image">
          <img :src="project.image" :alt="project.title" />
        </div>
        <div class="card-handle"></div>
        <div class="card-content">
          <h3 class="card-title">{{ project.title }}</h3>
          <p class="card-description">{{ project.description }}</p>
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
    description: "A modern web application with cutting-edge design principles and seamless user experience.",
    image: "/simplu.png"
  },
  {
    title: "Project Beta", 
    description: "Mobile-first responsive design that adapts perfectly across all devices and screen sizes.",
    image: "/hotel-rivoli.png"
  },
  {
    title: "Project Gamma",
    description: "E-commerce platform with advanced features and intuitive navigation for optimal conversion.",
    image: "/rent-a-car.png"
  },
  {
    title: "Project Delta",
    description: "Brand identity and visual design system that creates lasting impressions and brand recognition.",
    image: "/creativo.png"
  }
])

const handleCardHover = (event) => {
  event.target.style.transform = 'scale(0.98)'
}

const handleCardLeave = (event) => {
  event.target.style.transform = 'scale(1)'
}
</script> 