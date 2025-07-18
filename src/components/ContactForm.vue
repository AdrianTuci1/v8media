<template>
  <div class="contact-form-overlay" v-if="isOpen" @click="closeForm">
    <div class="contact-form-drawer" @click.stop>
      <div class="drawer-header">
        <h2 class="drawer-title">Hey! Tell us <br/> what you have in mind</h2>
        <button class="close-btn" @click="closeForm">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      
      <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-row">
          <div class="form-group">
            <label for="name">Nume</label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name" 
              required
              placeholder="Your name"
            >
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email" 
              required
              placeholder="your.email@example.com"
            >
          </div>
        </div>
        
        <div class="form-group">
          <label for="project">Tell us about your project</label>
          <textarea 
            id="project" 
            v-model="formData.project" 
            required
            placeholder="Describe your project..."
            rows="4"
          ></textarea>
        </div>
        
        <div class="form-actions">
          <div class="contact-info">
            <p>Email: <a href="mailto:hello@v8media.ro">hello@v8media.ro</a></p>
          </div>
          <button type="submit" class="submit-btn">
            Submit the request
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const formData = ref({
  name: '',
  email: '',
  project: ''
})

const preventScroll = () => {
  document.body.style.overflow = 'hidden'
  document.body.style.paddingRight = 'var(--scrollbar-width, 0px)'
}

const allowScroll = () => {
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''
}

const closeForm = () => {
  emit('close')
}

const submitForm = () => {
  // Here you can add the logic to submit the form
  console.log('Form submitted:', formData.value)
  // Reset form
  formData.value = {
    name: '',
    email: '',
    project: ''
  }
  closeForm()
}

// Watch for changes in isOpen prop and toggle scroll prevention
watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    preventScroll()
  } else {
    allowScroll()
  }
})

// Clean up on component unmount
onUnmounted(() => {
  allowScroll()
})
</script>

<style scoped>
.contact-form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  z-index: 2000;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  animation: fadeIn 0.3s ease;
}

.contact-form-drawer {
  background: var(--color-white);
  padding: 40px;
  width: 700px;
  max-width: 90vw;
  height: 100vh;
  overflow-y: auto;
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.1);
  animation: slideInFromRight 0.3s ease;
  display: flex;
  flex-direction: column;
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
}

.drawer-title {
  font-size: var(--font-size-2xl);
  font-weight: 600;
  color: var(--color-black);
  margin: 0;
  line-height: 1.2;
}

.close-btn {
  background: none;
  border: none;
  color: var(--color-black);
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  min-height: 0;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group:has(textarea) {
  flex: 1;
  min-height: 0;
}

.form-group label {
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-black);
}

.form-group input,
.form-group textarea {
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: var(--font-size-base);
  font-family: inherit;
  transition: all 0.3s ease;
  background-color: #f9fafb;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-accent);
  background-color: var(--color-white);
  box-shadow: 0 0 0 3px rgba(var(--color-accent-rgb), 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
  flex: 1;
  min-height: 200px;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
}

.contact-info {
  font-size: var(--font-size-sm);
  color: var(--color-black);
}

.contact-info a {
  color: var(--color-accent);
  text-decoration: none;
  font-weight: 500;
}

.contact-info a:hover {
  text-decoration: underline;
}

.submit-btn {
  background: var(--color-accent);
  color: var(--color-white);
  border: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: var(--font-size-base);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(var(--color-accent-rgb), 0.3);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .contact-form-drawer {
    padding: 24px;
    width: 100vw;
    border-radius: 0;
    display: flex;
    flex-direction: column;
  }
  
  .drawer-title {
    font-size: var(--font-size-xl);
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .form-actions {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }
  
  .submit-btn {
    width: 100%;
  }
}
</style> 