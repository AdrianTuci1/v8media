import { ref } from 'vue'
import { gsap } from 'gsap'

export function useGroupAnimation(groupRef, emit) {
  const isAnimating = ref(false)

  const disableScroll = () => {
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
  }

  const enableScroll = () => {
    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.width = ''
  }

  const startGroupZoomOut = () => {
    if (isAnimating.value) return
    
    isAnimating.value = true
    console.log('Starting group frame animation')

    const tl = gsap.timeline({
      onComplete: () => {
        console.log('Group frame animation complete')
        isAnimating.value = false
        enableScroll()
        emit('group-animation-complete')
      }
    })

    // Phase 1: Keep centered without scaling
    tl.to(groupRef.value, {
      transform: 'translate(-50%, -50%)',
      duration: 1.5,
      ease: 'power2.inOut'
    })
  }

  return {
    isAnimating,
    startGroupZoomOut,
    disableScroll,
    enableScroll
  }
} 