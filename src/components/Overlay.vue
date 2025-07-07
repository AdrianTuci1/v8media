<template>
  <div class="overlay">
    
    <div class="corner corner-tl"></div>
    <div class="corner corner-tr"></div>
    <div class="corner corner-bl"></div>
    <div class="corner corner-br"></div>
    
    <div class="v8m-container">
    <V8MAnimation />
    </div>

    <!-- Content container below marker -->
    <div class="content-container">
      <Tagline />
    </div>
  </div>
</template>

<script setup>
import Tagline from './Tagline.vue'
import V8MAnimation from './V8MAnimation.vue'



</script>

<style scoped>
.overlay {
  position: relative;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background: rgba(250, 249, 246, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.v8m-container {
  top: 70px;
  display: flex;
  position: relative;
  transform-origin: top top;
}


/* Corner frame effect */
.corner {
  position: absolute;
  width: 30px;
  height: 30px;
  z-index: 9999;
}

.corner-tl {
  top: 20px;
  left: 10px;
  border-top: 3px solid red;
  border-left: 3px solid red;
}

.corner-tr {
  top: 20px;
  right: 10px;
  border-top: 3px solid red;
  border-right: 3px solid red;
}

.corner-bl {
  top: 320px;
  left: 10px;
  border-bottom: 3px solid red;
  border-left: 3px solid red;
}

.corner-br {
  top: 320px;
  right: 10px;
  border-bottom: 3px solid red;
  border-right: 3px solid red;
}



/* Breakpoint for smaller screens */
@media (max-width: 850px) {


  .corner-bl {
  top: 160px;
  left: 10px;
}

.corner-br {
  top: 160px;
  right: 10px;
}

}


/* Content container */
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}



.zone-marker {
  color: rgba(255, 0, 0, 0.8);
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  padding: 0.5rem;
  border-radius: 5px;
}

.overlay-content {
  text-align: center;
  color: black;
  max-width: 800px;
  padding: 2rem;
}

.overlay-content h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.overlay-content p {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.service {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.service:hover {
  transform: translateY(-5px);
}

.service h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
}

.service p {
  font-size: 1rem;
  opacity: 0.8;
  margin: 0;
}

.cta-button {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.cta-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}
</style>
