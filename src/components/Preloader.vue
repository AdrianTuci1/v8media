<template>
  <div class="preloader" ref="preloaderRef">
    <!-- Black wallpaper that rises from bottom -->
    <div class="wallpaper" ref="wallpaperRef"></div>
    
    <!-- Container for the square that transforms into V8M -->
    <div class="square-container" ref="squareContainerRef">
      <!-- Wrapper for first animation with overflow hidden -->
      <div class="first-animation-wrapper" ref="firstAnimationWrapperRef">
        <!-- Initial 3 slices -->
        <div class="slice slice-1" ref="slice1Ref"></div>
        <div class="slice slice-2" ref="slice2Ref"></div>
        <div class="slice slice-3" ref="slice3Ref"></div>
      </div>

      <!-- V8M Animation (initially hidden) -->
      <div class="v8m-animation" ref="v8mAnimationRef">
        <!-- Container for the V8M letters -->
        <div class="v8m-container" ref="v8mContainerRef">
          <!-- 4 slices for the V8M animation -->
          <div class="slice-final slice-final-1" ref="sliceFinal1Ref">
            <!-- V shape - rotating slice -->
            <div class="v-slice" ref="vSliceRef"></div>
          </div>
          <div class="slice-final slice-final-2" ref="sliceFinal2Ref">
            <!-- 8 shape - two white squares -->
            <div class="eight-square eight-square-1" ref="eightSquare1Ref"></div>
            <div class="eight-square eight-square-2" ref="eightSquare2Ref"></div>
          </div>
          <div class="slice-final slice-final-3" ref="sliceFinal3Ref">
            <!-- M shape - top slice moving left -->
            <div class="m-slice m-slice-1" ref="mSlice1Ref"></div>
          </div>
          <div class="slice-final slice-final-4" ref="sliceFinal4Ref">
            <!-- M shape - top slice moving right -->
            <div class="m-slice m-slice-2" ref="mSlice2Ref"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const emit = defineEmits(['animationComplete'])

const preloaderRef = ref(null)
const wallpaperRef = ref(null)
const squareContainerRef = ref(null)
const firstAnimationWrapperRef = ref(null)
const v8mAnimationRef = ref(null)

const slice1Ref = ref(null)
const slice2Ref = ref(null)
const slice3Ref = ref(null)

// V8M Animation refs
const v8mContainerRef = ref(null)
const sliceFinal1Ref = ref(null)
const sliceFinal2Ref = ref(null)
const sliceFinal3Ref = ref(null)
const sliceFinal4Ref = ref(null)
const vSliceRef = ref(null)
const eightSquare1Ref = ref(null)
const eightSquare2Ref = ref(null)
const mSlice1Ref = ref(null)
const mSlice2Ref = ref(null)

onMounted(() => {
  startAnimation()
})

onUnmounted(() => {
  // Clean up ScrollTrigger instances
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})

const startAnimation = () => {
  const tl = gsap.timeline({
    onComplete: () => {
      // After preloader animation completes, setup scroll triggers
      setupScrollTriggers()
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

  // Initialize V8M animation elements
  initializeV8MAnimation()

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
    y: -(window.innerHeight / 2 - 200),
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

  // V8M animation container follows the same movement
  .to(v8mAnimationRef.value, {
    duration: 1.2,
    transformOrigin: 'top center',
    ease: 'power2.inOut'
  }, '-=1.2')

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

  // Step 6: Fade out first animation wrapper and show V8M animation
  .to(firstAnimationWrapperRef.value, {
    opacity: 0,
    duration: 0.3,
    ease: 'power2.inOut'
  }, '+=0.2')
  .to(v8mAnimationRef.value, {
    opacity: 1,
    duration: 0.3,
    ease: 'power2.inOut'
  }, '-=0.3')
  .to(sliceFinal1Ref.value, {
    x: '-180%',
    scaleX: 1.5,
    duration: 1.5,
    ease: 'power2.out'
  }, '-=0.3')
  .to(sliceFinal2Ref.value, {
    x: '-80%',
    scaleX: 1.8,
    transformOrigin: 'left center',
    duration: 1.5,
    ease: 'power2.out'
  }, '-=1.5')
  .to(eightSquare1Ref.value, {
    x: '-25%',
    scaleX: 1.8,
    transformOrigin: 'center center',
    duration: 1.5,
    ease: 'power2.out'
  }, '-=1.5')
  .to(eightSquare2Ref.value, {
    x: '-25%',
    scaleX: 1.8,
    transformOrigin: 'center center',
    duration: 1.5,
    ease: 'power2.out'
  }, '-=1.5')
  .to(sliceFinal3Ref.value, {
    x: '80%',
    scaleX: 1,
    transformOrigin: 'top right',
    duration: 1.5,
    ease: 'power2.out'
  }, '-=1.5')
  .to(sliceFinal4Ref.value, {
    x: '278%',
    scaleX: 1,
    transformOrigin: 'top left',
    duration: 1.5,
    ease: 'power2.out'
  }, '-=1.5')
  .to(vSliceRef.value, {
    opacity: 1,
    rotation: -40,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.5')
  .to([eightSquare1Ref.value, eightSquare2Ref.value], {
    opacity: 1,
    scale: 1,
    duration: 0.6,
    ease: 'back.out(1.7)'
  }, '-=0.8')
  .to(mSlice1Ref.value, {
    opacity: 1,
    rotation: -45,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.6')
  .to(mSlice2Ref.value, {
    opacity: 1,
    rotation: 45,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.8')
}

const initializeV8MAnimation = () => {
  // Set initial states for V8M elements
  gsap.set(v8mAnimationRef.value, {
    opacity: 0,
    scale: 1
  })

  gsap.set([sliceFinal1Ref.value, sliceFinal2Ref.value, sliceFinal3Ref.value, sliceFinal4Ref.value], {
    opacity: 1,
    x: 0,
    scaleX: 1,
    scale: 1
  })

  gsap.set(vSliceRef.value, {
    opacity: 0,
    rotation: 0,
    transformOrigin: 'bottom left'
  })

  gsap.set([eightSquare1Ref.value, eightSquare2Ref.value], {
    opacity: 0,
    scale: 0
  })

  gsap.set([mSlice1Ref.value, mSlice2Ref.value], {
    opacity: 0,
    rotation: 0
  })
}

const setupScrollTriggers = () => {
  // Create a timeline for the scroll-based animation
  const scrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.main-content',
      start: 'top top',
      end: '+=150%',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress
        console.log('Scroll progress:', progress)
      }
    }
  })

  // Phase 1: Keep V8M steady (0-40% scroll) - no animation needed

  // Phase 2: Revert to 4 slices (40-70% scroll)
  scrollTl.to([vSliceRef.value, mSlice1Ref.value, mSlice2Ref.value], {
    opacity: 0,
    duration: 0.3,
    ease: 'power2.in'
  }, 0.4)
  .to([eightSquare1Ref.value, eightSquare2Ref.value], {
    opacity: 0,
    scale: 0,
    duration: 0.3,
    ease: 'power2.in'
  }, 0.4)
  .to([sliceFinal1Ref.value, sliceFinal2Ref.value, sliceFinal3Ref.value, sliceFinal4Ref.value], {
    x: 0,
    scaleX: 1,
    duration: 0.3,
    ease: 'power2.inOut'
  }, 0.45)

  // Phase 3: Scale up slices (70-100% scroll)
  .to([sliceFinal1Ref.value, sliceFinal2Ref.value, sliceFinal3Ref.value, sliceFinal4Ref.value], {
    scale: 3,
    opacity: 0,
    duration: 0.3,
    ease: 'power2.out',
    onComplete: () => {
      emit('animationComplete')
    }
  }, 0.7)
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
  z-index: 20;
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

/* V8M Animation Container */
.v8m-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.v8m-container {
  position: relative;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  outline: 1px solid blue;
  transform-origin: center center;
}

/* Final 4 slices */
.slice-final {
  position: absolute;
  width: 25%;
  height: 60%;
  background-color: #19191d;
  top: 0%;
  z-index: 3;
}

.slice-final-1 {
  left: 0%;
}

.slice-final-2 {
  left: 25%;
  width: 37.5% !important;
}

.slice-final-3 {
  left: 50%;
}

.slice-final-4 {
  left: 75%;
}

/* V8M Elements */
.v-slice {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 90%;
  background-color: #19191d;
  transform-origin: bottom left;
}

.eight-square {
  position: absolute;
  background-color: rgba(250, 249, 246, 0.9);
}

.eight-square-1 {
  top: 20%;
  left: 50%;
  width: 20%;
  height: 20%;
}

.eight-square-2 {
  bottom: 20%;
  left: 50%;
  width: 20%;
  height: 20%;
}

.m-slice {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #19191d;
}

.m-slice-1 {
  right: 0;
  transform-origin: top right;
}

.m-slice-2 {
  left: 0;
  transform-origin: top left;
}
</style> 