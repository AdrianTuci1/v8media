<template>
  <section class="hero" ref="heroRef">

    <!-- Background Video -->
    <video class="hero-background-video" autoplay muted loop playsinline preload="auto">
      <source src="/screen-recording.mov" type="video/quicktime">
      <source src="/screen-recording.mov" type="video/mp4">
    </video>
    
    <div class="hero-container">
      <!-- Left Column -->
      <div class="hero-left">
        <h1 class="hero-title" ref="heroTitle">Speed up <br/> your digital <br/>footprint.</h1>
        
        <div class="results-grid" ref="resultsGrid">
          <div class="result-item">
            <div class="result-number">+3</div>
            <span class="result-label">years of experience</span>
          </div>
          
          <div class="result-item">
            <div class="result-number">+15</div>
            <span class="result-label">projects completed</span>
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div class="hero-right">
        <div class="hero-content" ref="heroContent">
          <p class="hero-motto" ref="heroMotto">We empower your business with cutting-edge web design and marketing solutions that deliver exceptional results.</p>
          <div class="button-arrow-group">
            <button class="hero-button" ref="heroButton">
              Let's talk
              <svg class="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>


.hero {
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  padding: var(--spacing-md);
  position: relative;
  overflow: hidden;
  margin: 0;
  box-sizing: border-box;
}

.hero-background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 1;
  min-width: 100%;
  min-height: 100%;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  z-index: 0;
}

.hero-container {
  width: 100%;
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: center;
  min-height: 80vh;
  position: relative;
  z-index: 3;
  margin-top: 100px;
}

.hero-left {
  display: flex;
  flex-direction: column;
  height: calc(100% - 100px);
  justify-content: space-between;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 6rem);
  font-weight: 700;
  line-height: 1.1;
  margin: 0;
  text-transform: uppercase;
  color: var(--color-white);
}

.results-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.result-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-sm);
  transition: all 0.3s ease;
  text-align: left;
}


.result-number {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  color: var(--color-white);
  line-height: 1;
  margin-bottom: var(--spacing-xs);
}

.result-label {
  font-size: var(--font-size-sm);
  font-weight: 400;
  color: var(--color-white);
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.hero-right {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: calc(100% - 100px);
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.hero-motto {
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  color: var(--color-white);
  opacity: 0.9;
}

.hero-button {
  background-color: transparent;
  color: var(--color-white);
  border: none;
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: 2.4rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  border-radius: 24px;
  text-decoration: none;
}

.hero-button:hover {
  text-decoration: underline;
}

.hero-button:hover .arrow-icon {
  transform: rotate(-45deg) translateX(3px);
}

.button-arrow-group {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-sm);
}

.arrow-icon {
  color: var(--color-white);
  transition: all 0.3s ease;
  border-radius: 50%;
  padding: 4px;
  width: 32px;
  height: 32px;
  transform: rotate(-45deg);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero {
    padding: var(--spacing-sm);
  }

  .hero-container {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
    align-items: center;
    text-align: center;
    margin-top: 100px;
  }

  .hero-left {
    align-items: center;
  }

  .results-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  .result-item {
    justify-content: center;
  }

  .hero-right {
    align-items: center;
    text-align: center;
  }

  .hero-button {
    align-self: center;
  }
}
</style>
