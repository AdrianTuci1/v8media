<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Main footer content -->
      <div class="footer-content">
        <!-- Email section -->
        <div class="footer-section">
          <h3 class="footer-title">Email</h3>
          <a href="mailto:hello@v8media.com" class="footer-email">hello@v8media.com</a>
        </div>
        
        <!-- Socials section -->
        <div class="footer-section">
          <h3 class="footer-title">Socials</h3>
          <div class="social-links">
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">LinkedIn</a>
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Twitter</a>
          </div>
        </div>
        
        <!-- Office section -->
        <div class="footer-section">
          <h3 class="footer-title">Office</h3>
          <p class="office-address">Bucharest, Romania</p>
        </div>
      </div>
      
      <!-- Separation line -->
      <div class="footer-separator"></div>
      
      <!-- Bottom section with v8media branding -->
      <div class="footer-bottom">
        <div class="footer-brand">
          <span class="brand-text">v8media</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No additional logic needed for this footer component
</script>

<style scoped>
.footer {
  background-color: var(--color-black);
  color: var(--color-white);
  padding: var(--spacing-xl) 0 var(--spacing-lg);
  margin-top: var(--spacing-xl);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-title {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: var(--spacing-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer-email {
  font-size: var(--font-size-2xl);
  font-weight: 500;
  color: var(--color-white);
  text-decoration: none;
  transition: color 0.3s ease;
  line-height: 1.2;
}

.footer-email:hover {
  color: var(--color-accent);
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.social-link {
  font-size: var(--font-size-base);
  color: var(--color-white);
  text-decoration: none;
  transition: color 0.3s ease;
  opacity: 0.8;
}

.social-link:hover {
  color: var(--color-accent);
  opacity: 1;
}

.office-address {
  font-size: var(--font-size-base);
  color: var(--color-white);
  opacity: 0.8;
  line-height: 1.5;
}

.footer-separator {
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: var(--spacing-lg) 0;
}

.footer-bottom {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.footer-brand {
  display: flex;
  align-items: center;
}

.brand-text {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-white);
  letter-spacing: 0.05em;
  text-transform: lowercase;
}

/* Responsive design */
@media (max-width: 768px) {
  .footer {
    padding: var(--spacing-lg) 0 var(--spacing-md);
  }
  
  .footer-container {
    padding: 0 var(--spacing-sm);
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
  }
  
  .footer-email {
    font-size: var(--font-size-xl);
  }
  
  .footer-title {
    font-size: var(--font-size-base);
  }
  
  .brand-text {
    font-size: var(--font-size-lg);
  }
}

@media (max-width: 480px) {
  .footer-email {
    font-size: var(--font-size-lg);
  }
  
  .social-links {
    gap: var(--spacing-xs);
  }
}
</style> 