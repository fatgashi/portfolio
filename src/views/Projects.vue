<template>
  <div class="min-vh-100 bg-light py-5">
    <div class="container">
      <!-- Header Section -->
      <div class="text-center mb-5 fade-in">
        <h1 class="display-4 fw-bold text-dark mb-3">My Projects</h1>
        <p class="lead text-muted mx-auto" style="max-width: 800px">
          Here are some of the projects I've worked on. Each project represents a unique challenge
          and learning experience.
        </p>
      </div>

      <!-- Filter Buttons -->
      <div class="d-flex flex-wrap justify-content-center gap-3 mb-5 fade-in" data-delay="200">
        <button
          v-for="category in categories"
          :key="category"
          @click="filterByCategory(category)"
          :class="[
            'btn btn-sm px-4 py-2 rounded-pill',
            selectedCategory === category ? 'btn-primary' : 'btn-outline-secondary',
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="row g-4">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          class="col-12 col-md-6 col-lg-4"
        >
          <div
            class="card h-100 border-0 shadow-sm hover-shadow project-card"
            :data-delay="index * 100"
          >
            <!-- Project Image -->
            <div class="card-img-top-container" style="height: 200px; overflow: hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-100 h-100"
                style="object-fit: cover"
              />
            </div>

            <!-- Category Badge -->
            <div class="category-badge">
              <span class="badge bg-primary rounded-pill px-3 py-2">
                {{ project.category }}
              </span>
            </div>

            <!-- Project Content -->
            <div class="card-body d-flex flex-column">
              <h5 class="card-title fw-bold mb-3">{{ project.title }}</h5>
              <p class="card-text text-muted flex-grow-1 mb-3">{{ project.description }}</p>

              <!-- Technologies Used -->
              <div class="d-flex flex-wrap gap-2 mb-3">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="badge bg-light text-dark border rounded-pill px-2 py-1"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Card Footer -->
            <div class="card-footer bg-transparent border-0 pt-0">
              <div class="d-flex flex-wrap gap-2 justify-content-center">
                <router-link :to="`/projects/${project.slug}`" class="btn btn-primary btn-sm">
                  View Details
                </router-link>
                <a
                  v-if="project.liveUrl && project.liveUrl.trim() !== ''"
                  :href="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-outline-primary btn-sm"
                >
                  <i class="bi bi-eye me-1"></i>
                  Live Demo
                </a>
                <div
                  v-if="project.githubFrontendUrl || project.githubBackendUrl"
                  class="btn-group"
                  role="group"
                >
                  <a
                    v-if="project.githubFrontendUrl && project.githubFrontendUrl.trim() !== ''"
                    :href="project.githubFrontendUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-outline-dark btn-sm"
                    :title="project.githubBackendUrl ? 'Frontend Code' : 'View Code'"
                  >
                    <i class="bi bi-github me-1"></i>
                    {{ project.githubBackendUrl ? 'Frontend' : 'Code' }}
                  </a>
                  <a
                    v-if="project.githubBackendUrl && project.githubBackendUrl.trim() !== ''"
                    :href="project.githubBackendUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-outline-dark btn-sm"
                  >
                    <i class="bi bi-github me-1"></i>
                    Backend
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- No Projects Message -->
      <div v-if="filteredProjects.length === 0" class="text-center py-5 fade-in">
        <div class="display-1 text-muted mb-3">🔍</div>
        <h3 class="h4 text-muted mb-2">No projects found</h3>
        <p class="text-muted">
          Try selecting a different category or check back later for new projects.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Component name for ESLint
defineOptions({
  name: 'ProjectsPage',
})

// Categories for filtering
const categories = ['All', 'Web Development', 'E-commerce', 'Gaming', 'SaaS']

// Selected category for filtering
const selectedCategory = ref('All')

// Animation observer
let observer = null

// Sample projects data
const projects = ref([
  {
    id: 1,
    slug: 'betting-platform',
    title: 'Betting Platform',
    description:
      'Complete betting system with multi-role access (Admin/Reseller/Shop/User), CashOut, multi-bet, refunds, casino integrations, and real-time odds sync. Migrated the legacy PHP backend to Node.js microservices for scalability.',
    category: 'Web Development',
    technologies: ['Node.js', 'Express', 'MySQL', 'RabbitMQ', 'MongoDB', 'Socket.io', 'Docker'],
    image: '/src/assets/images/betting.png',
    liveUrl: 'https://tipizo.com',
    githubFrontendUrl: '',
    githubBackendUrl: '',
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
    githubBackendUrl: 'https://github.com/fatgashi/pharmacy-stock-system',
  },
  {
    id: 3,
    slug: 'diet-wellness',
    title: 'Diet & Wellness SaaS',
    description:
      '34-question assessment → payment → personalized PDF diet plan. Includes email verification, limited-time offers, admin plan editor, and stats.',
    category: 'SaaS',
    technologies: ['Node.js', 'MongoDB', 'Vue.js', 'Paysera', 'Passport', 'Bootstrap'],
    image: '/src/assets/images/diet.png',
    liveUrl: '',
    githubFrontendUrl: 'https://github.com/fatgashi/Diet-app-frontend',
    githubBackendUrl: 'https://github.com/fatgashi/Diet-app-backend',
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
  },
])

// Filter projects based on selected category
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return projects.value
  }
  return projects.value.filter((project) => project.category === selectedCategory.value)
})

// Filter projects by category
const filterByCategory = (category) => {
  selectedCategory.value = category

  // Re-initialize animations for filtered projects
  setTimeout(() => {
    reinitializeProjectAnimations()
  }, 100)
}

// Animation functions
const initAnimations = () => {
  // Trigger initial animations for elements already in view
  setTimeout(() => {
    const elements = document.querySelectorAll('.fade-in, .project-card')
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

  // Observe all animated elements
  const animatedElements = document.querySelectorAll('.fade-in, .project-card')
  animatedElements.forEach((el) => observer.observe(el))
}

// Function to re-setup animations for filtered content
const reinitializeProjectAnimations = () => {
  const projectCards = document.querySelectorAll('.project-card')

  // Disconnect current observer to avoid conflicts
  if (observer) {
    observer.disconnect()
  }

  // Re-setup the observer
  setupScrollAnimations()

  // Reset animation states and set new delays
  projectCards.forEach((card, index) => {
    card.classList.remove('visible')
    card.setAttribute('data-delay', index * 100)
  })

  // Trigger initial animations for visible cards
  setTimeout(() => {
    projectCards.forEach((card) => {
      if (isElementInViewport(card)) {
        const delay = card.dataset.delay || 0
        setTimeout(() => {
          card.classList.add('visible')
        }, parseInt(delay))
      }
    })
  }, 200)
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
.hover-shadow:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  transform: translateY(-2px);
  transition: all 0.3s ease;
}

.card {
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
}

.card-img-top-container {
  position: relative;
  background: #f8f9fa;
}

.category-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 10;
}

.category-badge .badge {
  font-size: 0.75rem;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.btn {
  transition: all 0.2s ease;
  border-radius: 8px;
  font-weight: 500;
}

.badge {
  font-size: 0.75rem;
}

.card-body {
  padding: 1.5rem;
}

.card-footer {
  padding: 1rem 1.5rem 1.5rem;
}
</style>
