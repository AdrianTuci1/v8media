<template>
  <section class="services">
    <div class="container">
      <div class="services-grid">
        <div class="service-card" v-for="service in services" :key="service.id">
          <div class="service-image">
            <img :src="service.image" :alt="service.title" />
          </div>
          <div class="service-content">
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <div class="service-divider"></div>
            <div class="service-chips">
              <span class="chip" v-for="chip in service.chips" :key="chip">{{ chip }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const services = ref([
  {
    id: 1,
    title: 'STRATEGIC MARKETING',
    description: 'Data-driven marketing strategies that connect with your audience and drive measurable results.',
    chips: ['SEO', 'PPC', 'Social Media', 'Content Strategy', 'Analytics'],
    image: '/strategic-marketing.png'
  },
  {
    id: 2,
    title: 'BRAND IDENTITY',
    description: 'Distinctive visual identities that communicate your values and resonate with your target market.',
    chips: ['Logo Design', 'Visual Identity', 'Brand Guidelines', 'Typography', 'Color Palette'],
    image: '/branding-identity.png'
  },
  {
    id: 3,
    title: 'WEB DEVELOPMENT',
    description: 'Custom web solutions built with modern technologies for optimal performance and user experience.',
    chips: ['Frontend', 'Backend', 'E-commerce', 'CMS', 'API Integration'],
    image: '/web-design.png'
  }
])
</script>

<style scoped>
.services {
  padding: 80px 10px;
  background: var(--color-white);
  color: #1a1a1e;
  margin-block: 15%;
}

.container {
  width: 100%;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
}

@media (min-width: 1200px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.service-card {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  position: relative;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  width: 100%;
  aspect-ratio: 3/4;
  overflow: hidden;
  border-radius: 8px;
}

.service-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

/* Add fade overlay for better text readability */
.service-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.2) 25%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.3) 75%,
    rgba(0, 0, 0, 0.5) 100%
  );
  z-index: 2;
  pointer-events: none;
}

.service-card:hover .service-image img {
  transform: scale(1.05);
}

.service-content {
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7));
  color: white;
}

.service-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin: 0 0 15px 0;
  letter-spacing: 0.05em;
}

.service-description {
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgba(255,255,255,0.9);
  margin: 0 0 20px 0;
  flex: 1;
}

.service-divider {
  height: 1px;
  background: rgba(255,255,255,0.3);
  margin: 0 0 15px 0;
}

.service-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  background: rgba(255,255,255,0.2);
  color: white;
  font-size: 0.75rem;
  padding: 4px 12px;
  border-radius: 0;
  font-weight: 500;
  letter-spacing: 0.02em;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .service-card {
    min-height: 350px;
  }
  
  .service-content {
    padding: 15px;
  }
  
  .service-title {
    font-size: 1.1rem;
    margin-bottom: 12px;
  }
  
  .service-description {
    margin-bottom: 15px;
  }
  
  .service-divider {
    margin-bottom: 12px;
  }
}

@media (max-width: 480px) {
  .services {
    padding: 60px 20px;
  }
  
  .service-content {
    padding: 12px;
  }
  
  .service-title {
    font-size: 1rem;
    margin-bottom: 10px;
  }
  
  .service-description {
    font-size: 0.85rem;
    margin-bottom: 12px;
  }
  
  .service-divider {
    margin-bottom: 10px;
  }
  
  .chip {
    font-size: 0.7rem;
    padding: 3px 10px;
  }
}
</style> 