<template>
  <div class="overlay">
    <!-- Corner Stars -->
    <div class="corner-star top-left">
      <Star :filled="true" />
    </div>
    <div class="corner-star top-right">
      <Star :filled="true" />
    </div>
    <div class="corner-star bottom-left">
      <Star :filled="true" />
    </div>
    <div class="corner-star bottom-right">
      <Star :filled="true" />
    </div>
    
    <!-- Content container -->
    <div class="content-container">
      <Tagline />
    </div>
  </div>
</template>

<script setup>
import Tagline from './Tagline.vue'
import Star from './Star.vue'
</script>

<style scoped>
.overlay {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background: rgba(250, 249, 246, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5;
}

/* Corner Stars */
.corner-star {
  position: absolute;
  z-index: 6;
}

.corner-star.top-left {
  top: var(--spacing-lg);
  left: var(--spacing-lg);
}

.corner-star.top-right {
  top: var(--spacing-lg);
  right: var(--spacing-lg);
}

.corner-star.bottom-left {
  bottom: var(--spacing-lg);
  left: var(--spacing-lg);
}

.corner-star.bottom-right {
  bottom: var(--spacing-lg);
  right: var(--spacing-lg);
}




/* Content container */
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}



.zone-marker {
  color: rgba(255, 0, 0, 0.8);
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  padding: 0.5rem;
  border-radius: 5px;
}

.overlay-content {
  text-align: center;
  color: black;
  max-width: 800px;
  padding: 2rem;
}

.overlay-content h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.overlay-content p {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.service {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.service:hover {
  transform: translateY(-5px);
}

.service h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
}

.service p {
  font-size: 1rem;
  opacity: 0.8;
  margin: 0;
}

.cta-button {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.cta-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}
</style>
