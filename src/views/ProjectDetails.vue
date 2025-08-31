<template>
  <div class="min-vh-100 bg-light py-5">
    <div class="container">
      <!-- Back Button -->
      <div class="mb-4 fade-in">
        <router-link to="/projects" class="btn btn-outline-secondary">
          <i class="bi bi-arrow-left me-2"></i>
          Back to Projects
        </router-link>
      </div>

      <!-- Project Header -->
      <div class="row g-5 mb-5">
        <div class="col-lg-6 fade-in">
          <div class="position-relative">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-100 rounded-3 shadow"
              style="max-height: 500px; object-fit: contain; background-color: #f8f9fa"
            />
            <div class="position-absolute top-0 end-0 m-3">
              <span class="badge bg-primary rounded-pill px-3 py-2 fs-6">
                {{ project.category }}
              </span>
            </div>
          </div>
        </div>

        <div class="col-lg-6 fade-in" data-delay="200">
          <h1 class="display-4 fw-bold text-dark mb-3">{{ project.title }}</h1>
          <p class="lead text-muted mb-4">{{ project.description }}</p>

          <!-- Technologies -->
          <div class="mb-4">
            <h5 class="fw-bold mb-3">Technologies Used</h5>
            <div class="d-flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="badge bg-light text-dark border rounded-pill px-3 py-2 fs-6"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="d-flex flex-wrap gap-3">
            <a
              v-if="project.liveUrl && project.liveUrl.trim() !== ''"
              :href="project.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary btn-lg"
            >
              <i class="bi bi-eye me-2"></i>
              View Live Project
            </a>
            <a
              v-if="project.githubFrontendUrl && project.githubFrontendUrl.trim() !== ''"
              :href="project.githubFrontendUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline-dark btn-lg"
            >
              <i class="bi bi-github me-2"></i>
              Frontend Code
            </a>
            <a
              v-if="project.githubBackendUrl && project.githubBackendUrl.trim() !== ''"
              :href="project.githubBackendUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline-dark btn-lg"
            >
              <i class="bi bi-github me-2"></i>
              Backend Code
            </a>
          </div>
        </div>
      </div>

      <!-- Project Details -->
      <div class="row g-5">
        <div class="col-lg-8 fade-in" data-delay="400">
          <div class="card border-0 shadow-sm">
            <div class="card-body p-4">
              <h3 class="fw-bold mb-4">Project Overview</h3>
              <div class="mb-4">
                <h6 class="fw-bold text-primary mb-2">Description</h6>
                <p class="text-muted">{{ project.description }}</p>
              </div>

              <div class="mb-4">
                <h6 class="fw-bold text-primary mb-2">Key Features</h6>
                <ul class="text-muted">
                  <li v-for="feature in project.features" :key="feature" class="mb-2">
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <div class="mb-4">
                <h6 class="fw-bold text-primary mb-2">Technical Details</h6>
                <p class="text-muted">{{ project.technicalDetails }}</p>
              </div>

              <div v-if="project.challenges" class="mb-4">
                <h6 class="fw-bold text-primary mb-2">Challenges & Solutions</h6>
                <p class="text-muted">{{ project.challenges }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 fade-in" data-delay="600">
          <div class="card border-0 shadow-sm">
            <div class="card-body p-4">
              <h5 class="fw-bold mb-4">Project Information</h5>

              <div class="mb-3">
                <small class="text-muted d-block">Category</small>
                <span class="fw-medium">{{ project.category }}</span>
              </div>

              <div class="mb-3">
                <small class="text-muted d-block">Technologies</small>
                <span class="fw-medium">{{ project.technologies.join(', ') }}</span>
              </div>

              <div v-if="project.duration" class="mb-3">
                <small class="text-muted d-block">Duration</small>
                <span class="fw-medium">{{ project.duration }}</span>
              </div>

              <div v-if="project.teamSize" class="mb-3">
                <small class="text-muted d-block">Team Size</small>
                <span class="fw-medium">{{ project.teamSize }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Projects Button -->
      <div class="text-center mt-5 fade-in" data-delay="800">
        <router-link to="/projects" class="btn btn-primary btn-lg">
          <i class="bi bi-grid me-2"></i>
          View All Projects
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

// Component name for ESLint
defineOptions({
  name: 'ProjectDetails',
})

const route = useRoute()

// Animation observer
let observer = null

// Projects data with extended information
const projectsData = ref([
  {
    id: 1,
    slug: 'betting-platform',
    title: 'Betting Platform',
    description:
      'Complete betting system with multi-role access (Admin/Reseller/Shop/User), CashOut, multi-bet, refunds, casino integrations, and real-time odds sync. Migrated the legacy PHP backend to Node.js microservices for scalability.',
    category: 'Backend Systems',
    technologies: ['Node.js', 'Express', 'MySQL', 'RabbitMQ', 'MongoDB', 'Socket.io', 'Docker'],
    image: '/src/assets/images/betting.png',
    liveUrl: 'https://tipizo.com',
    githubFrontendUrl: '',
    githubBackendUrl: '',
    features: [
      'Multi-role access control (Admin/Reseller/Shop/User)',
      'Real-time odds synchronization',
      'CashOut functionality',
      'Multi-bet support',
      'Casino integrations',
      'Refund management system',
      'Microservices architecture',
    ],
    technicalDetails:
      'Built with Node.js microservices architecture, using Express.js for API endpoints, MySQL for transactional data, MongoDB for analytics, RabbitMQ for message queuing, and Socket.io for real-time updates. Containerized with Docker for easy deployment and scaling.',
    challenges:
      'Successfully migrated from legacy PHP monolith to scalable Node.js microservices, handling complex betting logic and real-time data synchronization across multiple services.',
    duration: '2023 - Present',
    teamSize: '3 developers',
  },
  {
    id: 2,
    slug: 'pharmacy-system',
    title: 'Pharmacy Stock Management',
    description:
      'Multi-client inventory with per-batch expiry tracking, low-stock alerts, barcode scanning, and configurable thresholds per pharmacy. Admin dashboards and role-based access.',
    category: 'Web Development',
    technologies: ['Node.js', 'Vue.js', 'MySQL', 'Passport', 'Bootstrap'],
    image: '/src/assets/images/pharmacy.png',
    liveUrl: '',
    githubFrontendUrl: '',
    githubBackendUrl: '',
    features: [
      'Multi-client inventory management',
      'Per-batch expiry tracking',
      'Low-stock alerts',
      'Barcode scanning integration',
      'Configurable thresholds per pharmacy',
      'Admin dashboards',
      'Role-based access control',
    ],
    technicalDetails:
      'Full-stack application built with Node.js backend and Vue.js frontend. Uses MySQL for data persistence with complex inventory queries, Passport.js for authentication, and Bootstrap for responsive UI design.',
    challenges:
      'Implementing complex inventory tracking with batch expiry dates and ensuring data integrity across multiple pharmacy locations while maintaining performance.',
    duration: '4 months',
    teamSize: '2 developers',
  },
  {
    id: 3,
    slug: 'diet-wellness',
    title: 'Diet & Wellness SaaS',
    description:
      '34-question assessment → payment → personalized PDF diet plan. Includes email verification, limited-time offers, admin plan editor, and stats.',
    category: 'SaaS',
    technologies: ['Node.js', 'MongoDB', 'Vue.js', 'Paysera'],
    image: '/src/assets/images/diet.png',
    liveUrl: '',
    githubFrontendUrl: 'https://github.com/fatgashi/Diet-app-frontend',
    githubBackendUrl: 'https://github.com/fatgashi/Diet-app-backend',
    features: [
      '34-question assessment system',
      'Payment processing integration',
      'Personalized PDF diet plan generation',
      'Email verification system',
      'Limited-time offers',
      'Admin plan editor',
      'Analytics and statistics',
    ],
    technicalDetails:
      'SaaS platform built with Node.js backend, MongoDB for flexible data storage, Vue.js frontend, and Paysera payment gateway integration. Includes PDF generation and email automation.',
    challenges:
      'Creating an intelligent assessment system that generates personalized diet plans and integrating secure payment processing with PDF generation.',
    duration: '3 months',
    teamSize: '1 developer',
  },
  {
    id: 4,
    slug: 'cs16-backend',
    title: 'CS 1.6 Server Management Platform',
    description:
      'Full-stack web application (Vue frontend + Node.js backend) for managing CS 1.6 servers: real-time RCON console & log streaming, live player/session tracking, player stats editor, daily/level rewards & VIP management, ban/kick tools, and role-based admin dashboards. WebSockets power live updates; data persisted in MySQL.',
    category: 'Gaming',
    technologies: ['Node.js', 'MySQL', 'MongoDB', 'RCON', 'Vue.js'],
    image: '/src/assets/images/cs16.png',
    liveUrl: 'https://zm-westcstrike.com',
    githubFrontendUrl: 'https://github.com/fatgashi/cstrike',
    githubBackendUrl: 'https://github.com/fatgashi/cstrike-backend',
    features: [
      'Real-time RCON console & log streaming',
      'Live player/session tracking',
      'Player stats editor',
      'Daily/level rewards system',
      'VIP management',
      'Ban/kick tools',
      'Role-based admin dashboards',
    ],
    technicalDetails:
      'Full-stack gaming platform with Vue.js frontend and Node.js backend. Uses RCON protocol for server communication, WebSockets for real-time updates, MySQL for persistent data, and MongoDB for analytics.',
    challenges:
      'Implementing real-time communication with game servers using RCON protocol and managing complex player statistics and reward systems.',
    duration: '5 months',
    teamSize: '1 developer',
  },
  {
    id: 5,
    slug: 'dentallibrary',
    title: 'DentalLibrary Web App',
    description:
      'E-commerce style web app for buying dental books. REST API backend, Vue 2 frontend, MongoDB, Stripe checkout, and real-time communication with Socket.io.',
    category: 'E-commerce',
    technologies: ['Node.js', 'Vue 2', 'MongoDB', 'Stripe', 'Socket.io'],
    image: '/src/assets/images/dental.png',
    liveUrl: '',
    githubFrontendUrl: 'https://github.com/fatgashi/DigitalLibrary-Frontend',
    githubBackendUrl: 'https://github.com/fatjon-gashi/DentalLibrary-backend',
    features: [
      'E-commerce book catalog',
      'Stripe payment integration',
      'Real-time communication',
      'User authentication',
      'Order management',
      'Admin dashboard',
      'Responsive design',
    ],
    technicalDetails:
      'E-commerce platform built with Node.js REST API, Vue 2 frontend, MongoDB for product catalog, Stripe for secure payments, and Socket.io for real-time features like chat and notifications.',
    challenges:
      'Integrating Stripe payment processing securely and implementing real-time features for enhanced user experience.',
    duration: '4 months',
    teamSize: '2 developers',
  },
  {
    id: 6,
    slug: 'uptime-monitor',
    title: 'Uptime & Project Monitoring',
    description:
      'Lightweight monitor that pings configured domains every 5 minutes and alerts on downtime / slow responses. Includes incident history, per-project status, and optional public status page. Built for quick visibility across services.',
    category: 'Web Development',
    technologies: [
      'Node.js',
      'Express',
      'Cron',
      'MongoDB',
      'Axios/Fetch',
      'Email Alerts',
      'Docker',
    ],
    image: '/src/assets/images/project-monitoring.png',
    liveUrl: '',
    githubFrontendUrl: '',
    githubBackendUrl: '',
    features: [
      'Automated domain monitoring every 5 minutes',
      'Downtime and slow response alerts',
      'Incident history tracking',
      'Per-project status monitoring',
      'Optional public status page',
      'Email notifications',
      'Docker containerization',
    ],
    technicalDetails:
      'Built with Node.js and Express.js backend, using Cron jobs for scheduled monitoring, MongoDB for storing incident data and configurations, Axios/Fetch for HTTP requests, and Docker for easy deployment. Includes alert system for email notifications.',
    challenges:
      'Implementing reliable monitoring with minimal false positives, managing alert systems across multiple channels, and ensuring the monitoring service itself remains stable and performant.',
    duration: '1 months',
    teamSize: '1 developer',
  },
])

// Get project based on route parameter
const project = computed(() => {
  const slug = route.params.slug
  return projectsData.value.find((p) => p.slug === slug) || null
})

// Animation functions
const initAnimations = () => {
  setTimeout(() => {
    const elements = document.querySelectorAll('.fade-in')
    elements.forEach((el) => {
      if (isElementInViewport(el)) {
        el.classList.add('visible')
      }
    })
  }, 100)
}

const setupScrollAnimations = () => {
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target
        const delay = element.dataset.delay || 0

        setTimeout(() => {
          element.classList.add('visible')
        }, parseInt(delay))
      }
    })
  }, options)

  const animatedElements = document.querySelectorAll('.fade-in')
  animatedElements.forEach((el) => observer.observe(el))
}

const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Lifecycle hooks
onMounted(() => {
  // Scroll to top when component mounts
  window.scrollTo({ top: 0, behavior: 'smooth' })

  initAnimations()
  setupScrollAnimations()
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.btn {
  transition: all 0.2s ease;
  border-radius: 8px;
  font-weight: 500;
}

.badge {
  font-size: 0.75rem;
}

.card {
  border-radius: 12px;
  overflow: hidden;
}

.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
</style>
