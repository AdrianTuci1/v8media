<template>
  <footer class="footer" ref="footerRef">
    <div class="footer-container">
      <!-- Main footer content -->
      <div class="footer-content">
        <!-- First column: Let's turn your ideas into reality -->
        <div class="footer-section">
          <h1 class="footer-heading">{{ t('letsTalk') }}</h1>
          <p class="footer-description">{{ t('heroMotto') }}</p>
          <button class="become-client-btn">
            <span>{{ t('becomeClient') }}</span>
            <svg class="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        
        <!-- Second column: Contact us -->
        <div class="footer-section">
          <h3 class="footer-title">{{ t('contactUs') }}</h3>
          <div class="contact-info">
            <a href="mailto:hello@v8media.com" class="contact-link">hello@v8media.com</a>
            <a href="tel:+40123456789" class="contact-link">+40 123 456 789</a>
            <p class="contact-address">Bucharest, Romania</p>
          </div>
        </div>
        
        <!-- Third column: Follow us -->
        <div class="footer-section follow-us-section">
          <h3 class="footer-title">{{ t('followUs') }}</h3>
          <div class="social-links">
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">LinkedIn</a>
          </div>
        </div>
        
        <!-- Fourth column: Services -->
        <div class="footer-section">
          <h3 class="footer-title">{{ t('ourServices') }}</h3>
          <div class="services-list">
            <a href="#" class="service-link">{{ t('webDesign') }}</a>
            <a href="#" class="service-link">{{ t('brandingIdentity') }}</a>
            <a href="#" class="service-link">{{ t('strategicMarketing') }}</a>
            <a href="#" class="service-link">{{ t('creativeDesign') }}</a>
          </div>
        </div>
      </div>
      
      <!-- Bottom section with copyright and back to top -->
      <div class="footer-bottom">
        <div class="copyright">
          <span class="copyright-text">© v8media. {{ t('allRightsReserved') }}</span>
        </div>
        <button class="back-to-top-btn" @click="scrollToTop">
          {{ t('backUp') }}
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { smoothScrollToTop } from '../utils/smoothScroll.js'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const footerRef = ref(null)
let footerAnimation = null

const scrollToTop = () => {
  // Use ScrollSmoother if available, otherwise fallback to utility
  if (window.ScrollSmoother) {
    const smoother = ScrollSmoother.get()
    if (smoother) {
      smoother.scrollTo(0, { duration: 1.5 })
    } else {
      smoothScrollToTop()
    }
  } else {
    smoothScrollToTop()
  }
}

onMounted(() => {
  // Initialize footer slide animation
  initFooterAnimation()
})

onUnmounted(() => {
  // Clean up animation
  if (footerAnimation) {
    footerAnimation.kill()
  }
  // Only kill ScrollTrigger instances created by this component
  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.vars.trigger === footerRef.value) {
      trigger.kill()
    }
  })
})

const initFooterAnimation = () => {
  // Set initial state - footer starts slightly below but still visible
  gsap.set(footerRef.value, {
    y: '-400px',
    opacity: 1
  })

  // Create animation timeline
  footerAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: footerRef.value,
      start: 'top 50%',
      end: 'bottom 80%',
      toggleActions: 'play none none reverse',
      markers: false
    }
  })

  // Animate footer sliding up from bottom
  footerAnimation.to(footerRef.value, {
    y: '0px',
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out'
  })
}
</script>

<style scoped>
.footer {
  background-color: var(--color-black);
  color: var(--color-white);
  padding: var(--spacing-xl) 0 var(--spacing-lg);
  margin-top: var(--spacing-xl);
  position: relative;
  z-index: 0;
  min-height: 200px;
}

.footer-container {
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  box-sizing: border-box;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-heading {
  font-size: 3.2rem;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: var(--spacing-md);
  line-height: 1.2;
}

.footer-description {
  font-size: var(--font-size-lg);
  color: var(--color-white);
  opacity: 0.8;
  line-height: 1.5;
  margin-bottom: var(--spacing-lg);
}

.become-client-btn {
  background: var(--color-accent);
  border: none;
  color: var(--color-white);
  font-size: var(--font-size-base);
  font-weight: 500;
  cursor: pointer;
  padding: 10px 20px;
  transition: all 0.3s ease;
  font-family: inherit;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  align-self: flex-start;
  margin-bottom: var(--spacing-md);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.become-client-btn:hover {
  background: var(--color-accent-dark);
}

.become-client-btn:hover .arrow-icon {
  transform: rotate(-45deg) translateX(3px);
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

.email-alternative {
  font-size: var(--font-size-sm);
  color: var(--color-white);
  opacity: 0.6;
}

.footer-title {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: var(--spacing-md);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  align-items: flex-start;
}

.contact-link {
  font-size: var(--font-size-base);
  color: var(--color-white);
  text-decoration: none;
  transition: color 0.3s ease;
  opacity: 0.8;
  text-align: left;
}

.contact-link:hover {
  color: var(--color-accent);
  opacity: 1;
}

.contact-address {
  font-size: var(--font-size-base);
  color: var(--color-white);
  opacity: 0.8;
  line-height: 1.5;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  align-items: flex-start;
}

.social-link {
  font-size: var(--font-size-base);
  color: var(--color-white);
  text-decoration: none;
  transition: color 0.3s ease;
  opacity: 0.8;
  text-align: left;
}

.social-link:hover {
  color: var(--color-accent);
  opacity: 1;
}

.services-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  align-items: flex-start;
}

.service-link {
  font-size: var(--font-size-base);
  color: var(--color-white);
  text-decoration: none;
  transition: color 0.3s ease;
  opacity: 0.8;
  text-align: left;
}

.service-link:hover {
  color: var(--color-accent);
  opacity: 1;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.copyright-text {
  font-size: var(--font-size-sm);
  color: var(--color-white);
  opacity: 0.6;
}

.back-to-top-btn {
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: var(--color-white);
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
}

.back-to-top-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: var(--color-accent);
}

/* Responsive design */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr 1fr;
    gap: var(--spacing-lg);
  }
  
  .follow-us-section {
    display: none;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: var(--spacing-lg) 0 var(--spacing-md);
  }
  
  .footer-container {
    padding: 0 var(--spacing-sm);
  }
  
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
  }
  
  .footer-section:first-child {
    grid-column: 1 / -1;
  }
  
  .footer-heading {
    font-size: var(--font-size-2xl);
  }
  
  .footer-description {
    font-size: var(--font-size-base);
  }
  
  .email-alternative {
    display: none;
  }
  
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .footer-heading {
    font-size: var(--font-size-xl);
  }
  
  .become-client-btn {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: var(--font-size-sm);
  }
}
</style> 