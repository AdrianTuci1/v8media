<template>
  <div class="preloader" ref="preloaderRef">
    <!-- Black wallpaper that rises from bottom -->
    <div class="wallpaper" ref="wallpaperRef"></div>
    
    <!-- Container for the square -->
    <div class="square-container" ref="squareContainerRef">
      <!-- Wrapper for first animation with overflow hidden -->
      <div class="first-animation-wrapper" ref="firstAnimationWrapperRef">
        <!-- Initial 3 slices -->
        <div class="slice slice-1" ref="slice1Ref"></div>
        <div class="slice slice-2" ref="slice2Ref"></div>
        <div class="slice slice-3" ref="slice3Ref"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const emit = defineEmits(['animationComplete'])

const preloaderRef = ref(null)
const wallpaperRef = ref(null)
const squareContainerRef = ref(null)
const firstAnimationWrapperRef = ref(null)

const slice1Ref = ref(null)
const slice2Ref = ref(null)
const slice3Ref = ref(null)

onMounted(() => {
  startAnimation()
})

const startAnimation = () => {
  const tl = gsap.timeline({
    onComplete: () => {
      emit('animationComplete')
    }
  })

  // Initial state - slices at bottom of square area
  gsap.set([slice1Ref.value, slice2Ref.value, slice3Ref.value], {
    y: '100%',
    opacity: 1
  })

  gsap.set(wallpaperRef.value, {
    y: '100%'
  })

  // Step 1: Animate 3 slices from bottom to form square
  tl.to(slice1Ref.value, {
    y: '0%',
    duration: 0.8,
    ease: 'power2.out'
  })
  .to(slice2Ref.value, {
    y: '0%',
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.4')
  .to(slice3Ref.value, {
    y: '0%',
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.4')

  // Step 2: Black wallpaper rises
  .to(wallpaperRef.value, {
    y: '0%',
    duration: 1.2,
    ease: 'power2.inOut'
  }, '-=0.2')

  // Step 3: Square becomes black and scales up while moving to top
  .to(squareContainerRef.value, {
    scale: 2,
    y: -(window.innerHeight / 2 - 120),
    duration: 1.2,
    transformOrigin: 'top center',
    ease: 'power2.inOut'
  }, '-=1.2')

  .to([slice1Ref.value, slice2Ref.value, slice3Ref.value], {
    backgroundColor: '#000',
    duration: 0.6,
    ease: 'power2.inOut'
  }, '-=1.2')

  // Step 3.5: Transform square into rectangle
  .to(firstAnimationWrapperRef.value, {
    height: '60%',
    duration: 0.8,
    ease: 'power2.inOut',
    transformOrigin: 'center top'
  }, '-=0.3')

  // Step 4: Fade out preloader background
  .to(preloaderRef.value, {
    backgroundColor: 'transparent',
    duration: 0.1,
    ease: 'power2.inOut'
  }, '+=0.1')

  // Step 5: Fade out wallpaper
  .to(wallpaperRef.value, {
    opacity: 0,
    duration: 0.5,
    ease: 'power2.inOut'
  }, '+=0.3')

  // Step 6: Fade out square container
  .to(squareContainerRef.value, {
    opacity: 0,
    duration: 0.3,
    ease: 'power2.inOut'
  }, '+=0.1')
}
</script>

<style scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #19191d;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.wallpaper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(250, 249, 246, 0.9);
  z-index: 1;
}

.square-container {
  position: relative;
  width: min(200px, 15vw);
  height: min(200px, 15vw);
  z-index: 2;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  outline: 1px solid blue;
}



.first-animation-wrapper {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* Initial 3 slices */
.slice {
  position: absolute;
  width: 33.333%;
  height: 100%;
  background-color: #fff;
  z-index: 2;
}

.slice-1 {
  left: 0;
}

.slice-2 {
  left: 33.333%;
}

.slice-3 {
  left: 66.666%;
}
</style> 