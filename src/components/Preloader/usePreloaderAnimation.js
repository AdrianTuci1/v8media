import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

export function usePreloaderAnimation(emit) {
  const preloaderRef = ref(null)
  const risingBackgroundRef = ref(null)
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

  const startAnimation = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        // After preloader animation completes, emit completion
        // Scroll triggers will be handled by the group animation
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

    // Set initial rising background to dark
    gsap.set(risingBackgroundRef.value, {
      backgroundColor: '#19191d',
      y: '0%'
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

    // Step 2.5: Make rising background rise up to reveal overlay underneath
    .to(risingBackgroundRef.value, {
      y: '-100%',
      duration: 1.2,
      ease: 'power2.inOut'
    }, '-=1.2')

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

    // Step 4: Preloader background is already transparent (revealed by wallpaper)

    // Step 5: Fade out wallpaper
    .to(wallpaperRef.value, {
      opacity: 0,
      duration: 0.1,
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
      scaleX: 1,
      transformOrigin: 'center center',
      duration: 1.5,
      ease: 'power2.out'
    }, '-=1.5')
    .to(eightSquare2Ref.value, {
      x: '-25%',
      scaleX: 1.0,
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
    // No scroll-based reversing animation needed
    // V8M will remain in its final state
  }

  const cleanup = () => {
    // Remove resize listener
    window.removeEventListener('resize', handleResize)
  }

  const handleResize = () => {
    // No scroll-based animation to recalculate
    // V8M animation remains in its final state
  }

  // Add resize listener
  window.addEventListener('resize', handleResize)

  return {
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
  }
} 