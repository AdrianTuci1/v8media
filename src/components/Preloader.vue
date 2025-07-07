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
      
      <!-- 4 slices for the final animation -->
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
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const emit = defineEmits(['animationComplete', 'lettersPosition'])

const preloaderRef = ref(null)
const wallpaperRef = ref(null)
const squareContainerRef = ref(null)
const firstAnimationWrapperRef = ref(null)

const slice1Ref = ref(null)
const slice2Ref = ref(null)
const slice3Ref = ref(null)
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

const startAnimation = () => {
  const tl = gsap.timeline({
    // onComplete: () => {
    //   emit('animationComplete')
    // }
  })

  // Initial state - slices at bottom of square area
  gsap.set([slice1Ref.value, slice2Ref.value, slice3Ref.value], {
    y: '100%',
    opacity: 1
  })



  gsap.set([sliceFinal1Ref.value, sliceFinal2Ref.value, sliceFinal3Ref.value, sliceFinal4Ref.value], {
    opacity: 0
  })

  // Set initial states for V8M elements
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
    x: 0
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
    y: '-50px',
    duration: 1.2,
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
    top: '20px',
    duration: 0.8,
    ease: 'power2.inOut',
    transformOrigin: 'top center'
  }, '-=0.3')

  // Step 4: Smooth transition from initial to final slices
  .to([slice1Ref.value, slice2Ref.value, slice3Ref.value], {
    opacity: 0,
    duration: 0.6,
    ease: 'power2.inOut'
  })

  .to([sliceFinal1Ref.value, sliceFinal2Ref.value, sliceFinal3Ref.value, sliceFinal4Ref.value], {
    opacity: 1,
    duration: 0.6,
    ease: 'power2.inOut'
  }, '-=0.6')

  // Step 5: Animate 4 slices separating and form V8M
  .to(sliceFinal1Ref.value, {
    x: '-180%',
    scaleX: 1.5,
    duration: 1.5,
    ease: 'power2.out'
  }, '+=0.2')
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
  /////
  .to(sliceFinal3Ref.value, {
    x: '100%',
    scaleX: 1.3,
    transformOrigin: 'top right',
    duration: 1.5,
    ease: 'power2.out'
  }, '-=1.5')
  .to(sliceFinal4Ref.value, {
    x: '280%',
    scaleX: 1.3,
    transformOrigin: 'top left',
    duration: 1.5,
    ease: 'power2.out'
  }, '-=1.5')

  // Step 6: Form V8M letters
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
    rotation: -30,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.6')
  .to(mSlice2Ref.value, {
    opacity: 1,
    rotation: 30,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.8')


  // Step 8: Fade out preloader background but keep letters visible
  .to(preloaderRef.value, {
    backgroundColor: 'transparent',
    duration: 0.1,
    ease: 'power2.inOut',
    onComplete: () => {
      emit('animationComplete')
    }
  }, '+=0.1')

  // Step 9: Move letters outside preloader to keep them visible
  .set([sliceFinal1Ref.value, sliceFinal2Ref.value, sliceFinal3Ref.value, sliceFinal4Ref.value], {
    position: 'fixed',
    zIndex: 10000
  }, '+=0.0')

  // Step 9.5: Emit letters position for Overlay
  .call(() => {
    const containerRect = squareContainerRef.value.getBoundingClientRect()
    const position = {
      top: 200, // Fixed position instead of calculated
      left: 50, // Fixed position instead of calculated
      width: containerRect.width * 2, // scale(2) applied
      height: containerRect.height * 0.6 * 2, // 60% height with scale(2)
      scale: 2
    }
    console.log('Emitting letters position:', position)
    emit('lettersPosition', position)
  }, [], '+=0.8')



  .to(wallpaperRef.value, {
    opacity: 0,
    duration: 0.5,
    ease: 'power2.inOut',
    onComplete: () => {
      emit('animationComplete')
    }
  }, '+=0.3')

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
  align-items: center;
  justify-content: center;
}

@media (max-width: 850px) {
  .square-container {
    top: -150px;
  }

  .first-animation-wrapper {
    top: -150px;
  }
}

.first-animation-wrapper {
  position: absolute;
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

/* Final 4 slices */
.slice-final {
  position: absolute;
  width: 25%;
  height: 60%;
  background-color: #19191d;
  top: -10%;
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
  width: 120%;
  height: 100%;
  background-color: #19191d;
}

.m-slice-1 {
  right: 0;
  transform-origin: top right;
  clip-path: polygon(0 60%, 30% 0, 50% 60%, 70% 0, 100% 100%);
}

.m-slice-2 {
  left: 0;
  transform-origin: top left;
  clip-path: polygon(0 50%, 100% 10%, 70% 65%, 110% 120%, 0 80%);
}
</style> 