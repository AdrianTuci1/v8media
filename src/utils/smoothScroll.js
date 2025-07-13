import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// Register ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin)

// Smooth scroll to element
export const smoothScrollTo = (target, duration = 1.5) => {
  gsap.to(window, {
    duration,
    ease: 'power2.out',
    scrollTo: target
  })
}

// Smooth scroll to top
export const smoothScrollToTop = (duration = 1.5) => {
  gsap.to(window, {
    duration,
    ease: 'power2.out',
    scrollTo: 0
  })
}

// Smooth scroll to anchor link
export const smoothScrollToAnchor = (anchorId, duration = 1.5) => {
  const targetElement = document.getElementById(anchorId)
  if (targetElement) {
    smoothScrollTo(targetElement, duration)
  }
} 