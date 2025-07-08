<template>
  <div class="projects-carousel">
    <!-- Animated background slices (optional, can be removed if not needed) -->
    <div class="content-container">
      <Swiper
        v-bind="swiperConfig"
        :modules="modules"
        class="mySwiper"
      >
        <SwiperSlide v-for="(project, index) in projects" :key="index">
          <div class="project-card aspect-4-3">
            <div class="project-image aspect-4-3">
              <img :src="project.image" :alt="project.title" />
              <div class="project-overlay">
                <div class="project-category">{{ project.category }}</div>
              </div>
            </div>
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-tags">
                <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
              <button class="view-project-btn">View Project</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { modules, projects, swiperConfig, Swiper, SwiperSlide } from './useDesignProcess.js'
</script>

<style scoped>
@import './DesignProcess.css';
</style> 