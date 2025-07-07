<template>
  <div class="preloader" ref="preloaderRef">
    <!-- Rising background that uncovers the page -->
    <div class="rising-background" ref="risingBackgroundRef"></div>
    
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
import { onMounted, onUnmounted } from 'vue'
import { usePreloaderAnimation } from './usePreloaderAnimation.js'

const emit = defineEmits(['animationComplete'])

const {
  // Refs
  preloaderRef,
  risingBackgroundRef,
  wallpaperRef,
  squareContainerRef,
  firstAnimationWrapperRef,
  v8mAnimationRef,
  slice1Ref,
  slice2Ref,
  slice3Ref,
  v8mContainerRef,
  sliceFinal1Ref,
  sliceFinal2Ref,
  sliceFinal3Ref,
  sliceFinal4Ref,
  vSliceRef,
  eightSquare1Ref,
  eightSquare2Ref,
  mSlice1Ref,
  mSlice2Ref,
  
  // Methods
  startAnimation,
  cleanup
} = usePreloaderAnimation(emit)

onMounted(() => {
  startAnimation()
})

onUnmounted(() => {
  cleanup()
})
</script>

<style scoped>
@import './Preloader.css';
</style> 