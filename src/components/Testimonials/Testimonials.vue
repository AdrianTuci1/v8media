<template>
  <section class="testimonials">
    <div class="container">
      <div class="testimonials-grid">
        <!-- Left Column: Title -->
        <div class="testimonials-title">
          <h2>What our clients say</h2>
        </div>
        
        <!-- Right Column: Testimonial Content -->
        <div class="testimonial-content">
          <div class="testimonial-text">
            <p>{{ currentTestimonial.review }}</p>
          </div>
          
          <div class="testimonial-separator"></div>
          
          <div class="testimonial-author">
            <div class="author-info">
              <h3 class="author-name">{{ currentTestimonial.name }}</h3>
              <p class="author-title">{{ currentTestimonial.title }}</p>
            </div>
            
            <div class="author-company">
              <span class="company-name">{{ currentTestimonial.company }}</span>
              <div class="navigation-arrows">
                <button 
                  class="arrow-btn" 
                  @click="previousTestimonial"
                  :disabled="currentIndex === 0"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <button 
                  class="arrow-btn" 
                  @click="nextTestimonial"
                  :disabled="currentIndex === testimonials.length - 1"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentIndex = ref(0)

const testimonials = ref([
  {
    id: 1,
    review: "Working with V8 Media transformed our digital presence completely. Their strategic approach to marketing and web development delivered results that exceeded our expectations. The team's attention to detail and commitment to our success made all the difference.",
    name: "Sarah Johnson",
    title: "Marketing Director",
    company: "TechFlow Solutions"
  },
  {
    id: 2,
    review: "The brand identity they created for us perfectly captures our company's values and vision. From the initial concept to the final deliverables, every step was executed with precision and creativity. Our new visual identity has significantly improved our market positioning.",
    name: "Michael Chen",
    title: "CEO",
    company: "InnovateCorp"
  },
  {
    id: 3,
    review: "V8 Media's expertise in web development is outstanding. They built us a custom e-commerce platform that not only looks stunning but performs exceptionally well. The user experience improvements have led to a 40% increase in our conversion rates.",
    name: "Emily Rodriguez",
    title: "Founder",
    company: "Artisan Collective"
  }
])

const currentTestimonial = computed(() => testimonials.value[currentIndex.value])

const nextTestimonial = () => {
  if (currentIndex.value < testimonials.value.length - 1) {
    currentIndex.value++
  }
}

const previousTestimonial = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
</script>

<style scoped>
.testimonials {
  padding: 120px 20px;
  background: var(--color-white);
  color: var(--color-black);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
  align-items: start;
}

.testimonials-title h2 {
  font-size: var(--font-size-4xl);
  font-weight: 600;
  line-height: 1.2;
  color: var(--color-black);
  margin: 0;
}

.testimonial-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.testimonial-text p {
  font-size: var(--font-size-2xl);
  line-height: 1.6;
  color: var(--color-black);
  margin: 0;
  font-weight: 400;
}

.testimonial-separator {
  height: 1px;
  background: var(--color-gray-medium);
  width: 100%;
}

.testimonial-author {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
}

.author-info {
  flex: 1;
}

.author-name {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-black);
  margin: 0 0 8px 0;
}

.author-title {
  font-size: var(--font-size-base);
  color: var(--color-gray-medium);
  margin: 0;
}

.author-company {
  display: flex;
  align-items: center;
  gap: 30px;
}

.company-name {
  font-size: var(--font-size-lg);
  font-weight: 500;
  color: var(--color-black);
}

.navigation-arrows {
  display: flex;
  gap: 12px;
}

.arrow-btn {
  background: none;
  border: 1px solid var(--color-gray-medium);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--color-black);
}

.arrow-btn:hover:not(:disabled) {
  background: var(--color-black);
  color: var(--color-white);
  border-color: var(--color-black);
}

.arrow-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

/* Responsive Design */
@media (max-width: 768px) {
  .testimonials {
    padding: 80px 20px;
  }
  
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .testimonials-title h2 {
    font-size: var(--font-size-3xl);
  }
  
  .testimonial-text p {
    font-size: var(--font-size-xl);
  }
  
  .testimonial-author {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  
  .author-company {
    width: 100%;
    justify-content: space-between;
  }
}

@media (max-width: 480px) {
  .testimonials {
    padding: 60px 15px;
  }
  
  .testimonials-title h2 {
    font-size: var(--font-size-2xl);
  }
  
  .testimonial-text p {
    font-size: var(--font-size-lg);
  }
  
  .author-name {
    font-size: var(--font-size-lg);
  }
  
  .company-name {
    font-size: var(--font-size-base);
  }
}
</style> 