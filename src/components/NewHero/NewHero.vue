<template>
  <section class="hero" ref="heroRef" role="banner" aria-labelledby="hero-title">

    <!-- Background Video -->
    <video class="hero-background-video" autoplay muted loop playsinline preload="auto" aria-hidden="true">
      <source src="/screen-recording.mov" type="video/quicktime">
      <source src="/screen-recording.mov" type="video/mp4">
    </video>
    
    <div class="hero-container">
      <!-- Left Column -->
      <div class="hero-left">
        <h1 class="hero-title" ref="heroTitle" id="hero-title">{{ t('heroTitle') }}</h1>
        
        <p class="hero-motto mobile-motto" ref="heroMotto" aria-describedby="hero-title">{{ t('heroMotto') }}</p>
        
        <div class="results-grid" ref="resultsGrid" role="region" aria-label="Our Results">
          <div class="result-item" role="article">
            <div class="result-number" aria-label="3 years of experience">+3</div>
            <span class="result-label">{{ t('yearsExperience') }}</span>
          </div>
          
          <div class="result-item" role="article">
            <div class="result-number" aria-label="15 projects completed">+15</div>
            <span class="result-label">{{ t('projectsCompleted') }}</span>
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div class="hero-right">
        <div class="hero-content" ref="heroContent">
          <p class="hero-motto desktop-motto" ref="heroMottoDesktop" aria-describedby="hero-title">{{ t('heroMotto') }}</p>
          <div class="button-arrow-group">
            <button class="hero-button" ref="heroButton" aria-label="Contact us to start a conversation">
              {{ t('letsTalk') }}
              <svg class="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
import { useI18n } from '../../composables/useI18n'

const { t } = useI18n()
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
  max-width: 1800px;
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: center;
  min-height: 80vh;
  position: relative;
  z-index: 3;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 var(--spacing-md);
  box-sizing: border-box;
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
  padding: var(--spacing-md) 0;
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

/* Desktop motto (hidden on mobile) */
.desktop-motto {
  display: block;
}

/* Mobile motto (hidden on desktop) */
.mobile-motto {
  display: none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero {
    padding: var(--spacing-sm);
  }

  .hero-container {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
    align-items: flex-start;
    text-align: left;
    margin-top: 100px;
  }

  .hero-left {
    align-items: flex-start;
    order: 1;
  }

  .hero-title {
    padding-top: 50px;
    font-size: clamp(2.8rem, 6vw, 5rem);
    margin-bottom: var(--spacing-md);
    line-height: 1.05;
  }

  /* Show mobile motto, hide desktop motto */
  .mobile-motto {
    display: block;
    order: 2;
    margin-bottom: var(--spacing-lg);
  }

  .desktop-motto {
    display: none;
  }

  .hero-right {
    order: 3;
    align-items: flex-start;
    text-align: left;
  }

  .hero-content {
    order: 4;
  }

  .results-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-md);
    order: 5;
    margin-top: var(--spacing-lg);
  }

  .result-item {
    justify-content: flex-start;
  }

  .hero-button {
    align-self: flex-start;
  }
}

/* Extra small mobile devices */
@media (max-width: 480px) {
  .hero {
    padding: var(--spacing-xs);
  }

  .hero-container {
    margin-top: 80px;
    gap: var(--spacing-lg);
  }

  .hero-title {
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    line-height: 1.1;
  }

  .hero-motto {
    font-size: clamp(1rem, 3.5vw, 1.2rem);
  }

  .hero-button {
    font-size: 1.8rem;
    padding: var(--spacing-sm) 0;
  }

  .results-grid {
    gap: var(--spacing-sm);
  }

  .result-number {
    font-size: clamp(2rem, 4vw, 2.8rem);
  }

  .result-label {
    font-size: 0.8rem;
  }
}
</style>
