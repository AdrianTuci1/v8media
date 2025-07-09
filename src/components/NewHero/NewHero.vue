<template>
  <section class="hero">
    <div class="line"></div>
    <div class="hero-container">
      <!-- Left Column -->
      <div class="hero-left">
        <h1 class="solutions">Branding, Marketing & Web Development</h1>

        <div class="hero-content-group">
          <p class="hero-subtitle">redefining what's possible</p>
          <h2 class="hero-motto">We empower your business with cutting-edge web design and marketing solutions that not
            only capture attention but also deliver exceptional results for your unique business needs.</h2>
          <div class="button-arrow-group">
            <button class="hero-button">
              Let's talk
              <svg class="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div class="hero-right">
        <img src="/image.png" alt="hero-image" class="hero-image">
        <div class="right-wrapper">
          <div class="scroll-to-explore">
            <span>Scroll <br /> to explore</span>
            <img src="./scroll.svg" alt="Scroll to explore">
          </div>
          <div class="faaast">
            <p>We work <br/> faaast</p>
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

.line {
  width: 96%;
  height: 1px;
  background-color: var(--color-gray-medium);
  position: absolute;
  top: 70px;
}
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-white);
  color: var(--color-black);
  padding: var(--spacing-md);
}

.hero-image {
  width: 70%;
  align-self: center;
}

.hero-container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: end;
  min-height: 80vh;
}

.hero-left {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  gap: var(--spacing-lg);
}

.solutions {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.05em;
  align-self: flex-start;
  margin: 0;
}

.right-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
}

.hero-content-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 400;
  color: var(--color-gray-medium);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin: 0;
}

.hero-motto {
  font-size: clamp(1.3rem, 3vw, 2.2rem);
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
}

.hero-button {
  background-color: var(--color-black);
  color: var(--color-white);
  border: none;
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-lg);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  border-radius: 24px;
}

.hero-button:hover {
  background-color: var(--color-gray-dark);
  transform: translateY(-2px);
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
}

.arrow-icon:hover {
  background-color: var(--color-gray-light);
  transform: translateX(2px);
}

.hero-right {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: var(--spacing-lg);
  height: 100%;
}

.scroll-to-explore {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-sm);
  color: var(--color-gray-medium);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.scroll-to-explore img {
  width: 16px;
  height: 16px;
  opacity: 0.7;
}

.faaast {
  font-size: var(--font-size-sm);
  color: var(--color-gray-medium);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.faaast p {
  margin: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero {
    padding: var(--spacing-sm);
  }

  .hero-container {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
    align-items: center;
    text-align: left;
    margin-top: 100px;
  }

  .solutions {
    width: 100px;
  }

  .hero-left {
    align-items: center;
  }


  .hero-right {
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
  }
}
</style>
