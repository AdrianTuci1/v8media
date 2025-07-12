<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Main footer content -->
      <div class="footer-content">
        <!-- First column: Let's turn your ideas into reality -->
        <div class="footer-section">
          <h1 class="footer-heading">Let's turn your ideas into reality.</h1>
          <p class="footer-description">Feel free to reach out if you want to collaborate with us, or simply have a chat.</p>
          <button class="become-client-btn">Become a client</button>
          <p class="email-alternative">Don't like forms? Send an email.</p>
        </div>
        
        <!-- Second column: Contact us -->
        <div class="footer-section">
          <h3 class="footer-title">Contact us</h3>
          <div class="contact-info">
            <a href="mailto:hello@v8media.com" class="contact-link">hello@v8media.com</a>
            <a href="tel:+40123456789" class="contact-link">+40 123 456 789</a>
            <p class="contact-address">Bucharest, Romania</p>
          </div>
        </div>
        
        <!-- Third column: Follow us -->
        <div class="footer-section follow-us-section">
          <h3 class="footer-title">Follow us</h3>
          <div class="social-links">
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">LinkedIn</a>
          </div>
        </div>
        
        <!-- Fourth column: Services -->
        <div class="footer-section">
          <h3 class="footer-title">Services</h3>
          <div class="services-list">
            <a href="#" class="service-link">Web Design</a>
            <a href="#" class="service-link">Branding</a>
            <a href="#" class="service-link">Marketing</a>
            <a href="#" class="service-link">Development</a>
          </div>
        </div>
      </div>
      
      <!-- Bottom section with copyright and back to top -->
      <div class="footer-bottom">
        <div class="copyright">
          <span class="copyright-text">© v8media. All rights reserved.</span>
        </div>
        <button class="back-to-top-btn" @click="scrollToTop">
          Back to top
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>

<style scoped>
.footer {
  background-color: var(--color-black);
  color: var(--color-white);
  padding: var(--spacing-xl) 0 var(--spacing-lg);
  margin-top: var(--spacing-xl);
}

.footer-container {
  margin: 0 auto;
  padding: 0 var(--spacing-md);
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
  background-color: var(--color-accent);
  color: var(--color-white);
  border: none;
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: var(--font-size-base);
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: var(--spacing-md);
  align-self: flex-start;
}

.become-client-btn:hover {
  background-color: var(--color-accent-dark);
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
}

.contact-link {
  font-size: var(--font-size-base);
  color: var(--color-white);
  text-decoration: none;
  transition: color 0.3s ease;
  opacity: 0.8;
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

.services-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.service-link {
  font-size: var(--font-size-base);
  color: var(--color-white);
  text-decoration: none;
  transition: color 0.3s ease;
  opacity: 0.8;
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