<template>
  <div class="design-process">
    <div class="section-header">
      <h2>Our Design Process</h2>
      <div class="header-line"></div>
    </div>
    
    <div class="process-grid">
      <div class="process-step" v-for="(step, index) in processSteps" :key="index">
        <div class="step-number">{{ (index + 1).toString().padStart(2, '0') }}</div>
        <div class="step-content">
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </div>
        <div class="step-line" v-if="index < processSteps.length - 1"></div>
      </div>
    </div>
    
    <div class="process-stats">
      <div class="stat-item">
        <div class="stat-number">100+</div>
        <div class="stat-label">Projects Completed</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">50+</div>
        <div class="stat-label">Happy Clients</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">5+</div>
        <div class="stat-label">Years Experience</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const processSteps = ref([
  {
    title: 'Discovery',
    description: 'We hop on a call, find what\'s better for you, and discover what you like.'
  },
  {
    title: 'Planning',
    description: 'We plan everything and present our ideas to bring your vision to life.'
  },
  {
    title: 'Magic',
    description: 'You see magic happens as we transform your ideas into reality.'
  }
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');

.design-process {
  font-family: 'Montserrat', sans-serif;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 3rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.header-line {
  width: 100px;
  height: 4px;
  background-color: #ff0000;
  margin: 0 auto;
  border-radius: 2px;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;
}

.process-step {
  position: relative;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.process-step:hover {
  border-color: #ff0000;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(255, 0, 0, 0.1);
}

.step-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ff0000;
  margin-bottom: 1rem;
  font-family: 'Montserrat', sans-serif;
}

.step-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.step-content p {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  font-weight: 400;
}

.step-line {
  position: absolute;
  right: -1.5rem;
  top: 50%;
  width: 3rem;
  height: 2px;
  background-color: #ff0000;
  transform: translateY(-50%);
}

.process-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 2px solid rgba(255, 0, 0, 0.2);
}

.stat-item {
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.6);
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-3px);
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: #ff0000;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: #333;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Responsive design */
@media (max-width: 768px) {
  .design-process {
    padding: 2rem 1rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .process-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .process-step {
    padding: 1.5rem;
  }
  
  .step-line {
    display: none;
  }
  
  .process-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .section-header h2 {
    font-size: 1.5rem;
  }
  
  .step-number {
    font-size: 2rem;
  }
  
  .step-content h3 {
    font-size: 1.2rem;
  }
}
</style> 