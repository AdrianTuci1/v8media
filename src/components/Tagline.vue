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
        <h2>REDEFINING</h2>
        <h2>WHAT'S</h2>
        <h2>POSSIBLE</h2>
      </div>
      
      <!-- Right column: Services -->
      <div class="services-text">
        <p>branding</p>
        <p>web development</p>
        <p>marketing</p>
        <p>conversational ai</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref('')

const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })
}

let timeInterval

onMounted(() => {
  updateTime()
  timeInterval = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  if (timeInterval) {
    clearInterval(timeInterval)
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
  height: 3px;
  background-color: #000000;
  flex: 1;
  max-width: 200px;
  min-width: 50px;
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
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.services-text p {
  font-size: 1.2rem;
  color: #333;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: lowercase;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
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
  }
  
  .tagline-main h2 {
    font-size: 2rem;
  }
  
  .services-text p {
    font-size: 1rem;
  }
}
</style> 