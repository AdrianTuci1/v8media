<template>
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
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const emit = defineEmits(['animationComplete'])

const v8mAnimationRef = ref(null)
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
  startV8MAnimation()
})

const startV8MAnimation = () => {
  const tl = gsap.timeline({
    onComplete: () => {
      emit('animationComplete')
    }
  })

  // Set initial states for V8M elements
  gsap.set([sliceFinal1Ref.value, sliceFinal2Ref.value, sliceFinal3Ref.value, sliceFinal4Ref.value], {
    opacity: 1
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
    x: 0
  })

  // Step 1: Animate 4 slices separating and form V8M
  tl.to(sliceFinal1Ref.value, {
    x: '-180%',
    scaleX: 1.5,
    duration: 1.5,
    ease: 'power2.out'
  })
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

  // Step 2: Form V8M letters
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
}
</script>

<style scoped>
.v8m-animation {
  position: relative;
  width: min(200px, 15vw);
  height: min(200px, 15vw);
  z-index: 2;
  display: flex;
  top: calc(50% - 120px);
  align-items: flex-start;
  justify-content: center;
  scale: 2;
  transform-origin: top top;
}

.v8m-container {
  position: relative;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  outline: 1px solid blue;
  transform-origin: center top;
  margin-top: -4px;
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
  height: 90%;
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