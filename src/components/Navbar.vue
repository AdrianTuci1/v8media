<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo -->
      <div class="logo">
        <span class="logo-text">V8M</span>
      </div>
      
      <!-- Right side elements -->
      <div class="navbar-right">
        <button class="become-client-btn">+ Become a client</button>
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
import { ref } from 'vue'

const currentLanguage = ref('EN')
const isLanguageDropdownOpen = ref(false)

const switchLanguage = (lang) => {
  currentLanguage.value = lang
  isLanguageDropdownOpen.value = false
  // Here you can add logic to actually change the language
  console.log(`Language switched to: ${lang}`)
}

const toggleLanguageDropdown = () => {
  isLanguageDropdownOpen.value = !isLanguageDropdownOpen.value
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: transparent;
  padding: var(--spacing-sm) var(--spacing-md);
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
}

.logo-text {
  font-size: var(--font-size-2xl);
  font-weight: 600;
  color: var(--color-white);
  letter-spacing: 0.05em;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.become-client-btn {
  background: none;
  border: none;
  color: var(--color-white);
  font-size: var(--font-size-base);
  font-weight: 500;
  cursor: pointer;
  padding: var(--spacing-xs) var(--spacing-sm);
  transition: opacity 0.3s ease;
  font-family: inherit;
  background-color: var(--color-accent);
  border-radius: 14px;
}

.become-client-btn:hover {
  opacity: 0.8;
}

.language-selector {
  position: relative;
  display: flex;
  align-items: center;
  background-color: var(--color-black);
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
  right: 0;
  background-color: rgba(25, 25, 29, 0.95);
  border-radius: 4px;
  padding: var(--spacing-xs);
  margin-top: var(--spacing-xs);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.language-option {
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
  text-align: left;
  white-space: nowrap;
}

.language-option:hover {
  background-color: rgba(255, 255, 255, 0.1);
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