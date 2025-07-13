<template>
  <section class="data-driven">
    <div class="container">
      <div class="content">
        <h2 class="title">Numbers don't lie. <br/> We use Data <img src="/data01.png" alt="Data Driven" class="data-driven-icon" /> <br/> <img src="/data02.png" alt="Data Driven" class="data-driven-icon" /> Science to drive <br/><span class="highlight">calculated growth.</span></h2>
      </div>
      
      <!-- Swiper container for animated frames -->
      <div class="swiper frames-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide frame" v-for="n in 12" :key="n"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import Swiper from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

let swiper = null

onMounted(() => {
  swiper = new Swiper('.frames-swiper', {
    modules: [Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 3000,
  })
})
</script>

<style scoped>
.data-driven {
  padding: 120px 0;
  background-color: var(--color-white);
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  background-color: rgb(236, 226, 226);
  padding: 15% 20px;
  border-radius: 48px;
  position: relative;
  overflow: hidden;
}

img {
  width: 80px;
  height: 40px;
  overflow: hidden;
  border-radius: 24px;
}

.content {
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.title {
  font-size: 4.2rem;
  font-weight: 700;
  color: var(--color-black);
  line-height: 1.2;
  margin: 0;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.highlight {
  color: #0066cc;
}

/* Swiper styles */
.frames-swiper {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 240px;
  transform: translateY(-50%);
  z-index: 1;
}

.swiper-slide {
  width: 180px !important;
  height: 240px;
  border: 2px solid rgba(0, 102, 204, 0.3);
  border-radius: 12px;
  background: transparent;
}

/* Responsive design */
@media (max-width: 768px) {
  .data-driven {
    padding: 80px 0;
  }
  
  .title {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 2rem;
  }
}
</style> 