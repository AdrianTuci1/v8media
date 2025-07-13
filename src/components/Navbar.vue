<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="navbar-container">
      <!-- Logo -->
      <div class="logo">
        <img src="/logo.jpg" alt="V8M" class="logo-image">
      </div>
      
      <!-- Right side elements -->
      <div class="navbar-right">
        <button class="become-client-btn"><span>+ Become a client</span></button>
        <div class="language-selector">
          <button 
            class="language-btn current-language"
            @click="toggleLanguageDropdown"
          >
            {{ currentLanguage }}
          </button>
          <div 
            v-if="isLanguageDropdownOpen" 
            class="language-dropdown"
          >
            <button 
              class="language-option"
              @click="switchLanguage(currentLanguage === 'EN' ? 'RO' : 'EN')"
            >
              {{ currentLanguage === 'EN' ? 'RO' : 'EN' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentLanguage = ref('EN')
const isLanguageDropdownOpen = ref(false)
const isScrolled = ref(false)

const switchLanguage = (lang) => {
  currentLanguage.value = lang
  isLanguageDropdownOpen.value = false
  // Here you can add logic to actually change the language
  console.log(`Language switched to: ${lang}`)
}

const toggleLanguageDropdown = () => {
  isLanguageDropdownOpen.value = !isLanguageDropdownOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: transparent;
  padding: var(--spacing-sm) var(--spacing-md);
  transition: all 0.3s ease;
  backdrop-filter: blur(0px);
}


.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-sm);
}

.logo {
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 14px;
}

.logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.logo-text {
  font-size: var(--font-size-2xl);
  font-weight: 600;
  color: var(--color-black);
  letter-spacing: 0.05em;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.become-client-btn {
  background: var(--color-white);
  border: none;
  color: var(--color-black);
  font-size: var(--font-size-base);
  font-weight: 500;
  cursor: pointer;
  padding: 10px 20px;
  transition: all 0.3s ease;
  font-family: inherit;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
}

.become-client-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--color-accent);
  transition: left 0.3s ease;
  z-index: 1;
}

.become-client-btn span {
  position: relative;
  z-index: 2;
  transition: color 0.3s ease, transform 0.3s ease;
}

.become-client-btn:hover::before {
  left: 0;
}

.become-client-btn:hover span {
  color: var(--color-white);
}

/* After 100vh (scrolled state) */
.navbar.scrolled .become-client-btn {
  background: var(--color-accent);
  color: var(--color-white);
}

.navbar.scrolled .become-client-btn::before {
  display: none;
}

.navbar.scrolled .become-client-btn:hover span {
  transform: translateY(2px);
}

.language-selector {
  position: relative;
  display: flex;
  align-items: center;
  outline: 2px solid white;
  border-radius: 4px;
  min-width: 60px;
  min-height: 36px;
  border-radius: 14px;
  transition: all 0.3s ease;
}

/* After 100vh (scrolled state) */
.navbar.scrolled .language-selector {
  outline: 2px solid var(--color-accent);
}

.navbar.scrolled .language-btn {
  color: var(--color-accent);
}


.language-btn {
  background: none;
  border: none;
  color: var(--color-white);
  font-size: var(--font-size-base);
  font-weight: 500;
  cursor: pointer;
  padding: var(--spacing-xs) var(--spacing-sm);
  transition: all 0.3s ease;
  font-family: inherit;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.language-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.current-language {
  opacity: 1;
}

.language-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--color-white);
  border-radius: 4px;
  padding: var(--spacing-xs);
  margin-top: var(--spacing-xs);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 60px;
  min-height: 36px;
}

.language-option {
  background: none;
  border: none;
  color: var(--color-black);
  font-size: var(--font-size-base);
  font-weight: 500;
  cursor: pointer;
  padding: 5px 10px;
  transition: all 0.3s ease;
  font-family: inherit;
  border-radius: 14px;
  width: 100%;
  text-align: left;
  white-space: nowrap;
}



/* Responsive design */
@media (max-width: 768px) {
  .navbar {
    padding: var(--spacing-xs) var(--spacing-sm);
  }
  
  .navbar-container {
    padding: 0;
  }
  
  .navbar-right {
    gap: var(--spacing-sm);
  }
  
  .logo-text {
    font-size: var(--font-size-xl);
  }
  
  .become-client-btn,
  .language-btn,
  .language-option {
    font-size: var(--font-size-sm);
  }
}
</style> 