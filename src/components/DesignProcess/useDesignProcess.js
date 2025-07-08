import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export const modules = [Pagination]

// Responsive Swiper configuration
export const swiperConfig = {
  slidesPerView: 1.8, // Show partial slides on left and right
  spaceBetween: 40,
  centeredSlides: true, // Center the main slide
  loop: true, // Enable infinite loop
  loopFillGroupWithBlank: true, // Fill empty slots if needed
  breakpoints: {
    480: {
      slidesPerView: 1.8,
      spaceBetween: 100,
    },
    768: {
      slidesPerView: 1.8,
      spaceBetween: 60,
    },
    1024: {
      slidesPerView: 1.8,
      spaceBetween: 80,
    },
    1200: {
      slidesPerView: 1.8,
      spaceBetween: 100,
    }
  }
}

export const projects = ref([
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with advanced filtering, payment integration, and responsive design.',
    category: 'Web Development',
    image: '/public/vite.svg', // Placeholder - replace with actual project images
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    title: 'Mobile App Design',
    description: 'Intuitive mobile application design focusing on user experience and modern UI/UX principles.',
    category: 'UI/UX Design',
    image: '/public/vite.svg', // Placeholder - replace with actual project images
    tags: ['Figma', 'Prototyping', 'User Research', 'iOS/Android']
  },
  {
    title: 'Brand Identity',
    description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines.',
    category: 'Branding',
    image: '/public/vite.svg', // Placeholder - replace with actual project images
    tags: ['Logo Design', 'Typography', 'Color Theory', 'Brand Guidelines']
  },
  {
    title: 'Marketing Website',
    description: 'High-converting marketing website with SEO optimization and lead generation features.',
    category: 'Digital Marketing',
    image: '/public/vite.svg', // Placeholder - replace with actual project images
    tags: ['SEO', 'Content Strategy', 'Analytics', 'Lead Generation']
  },
  {
    title: 'Dashboard Interface',
    description: 'Data visualization dashboard with real-time analytics and interactive charts.',
    category: 'Web Development',
    image: '/public/vite.svg', // Placeholder - replace with actual project images
    tags: ['React', 'D3.js', 'REST API', 'Data Visualization']
  }
])

export { Swiper, SwiperSlide } 