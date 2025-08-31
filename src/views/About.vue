<template>
  <div class="min-vh-100 bg-light">
    <!-- Scroll Progress Bar -->
    <div class="scroll-progress-bar" data-scroll-progress></div>

    <!-- Hero Section -->
    <section class="bg-primary text-white py-5">
      <div class="container">
        <div class="text-center fade-in">
          <h1 class="display-3 fw-bold mb-3">About Me</h1>
          <p class="lead mx-auto" style="max-width: 600px">
            Passionate full-stack developer with expertise in modern web technologies and a drive to
            create innovative solutions.
          </p>
        </div>
      </div>
    </section>

    <!-- Personal Story Section -->
    <section class="py-5 bg-white">
      <div class="container">
        <div class="row align-items-center g-5">
          <!-- Profile Image -->
          <div class="col-12 col-lg-6 hero-image order-1 order-lg-2">
            <div class="text-center">
              <div class="profile-image-container mx-auto">
                <img
                  src="@/assets/images/profile.jpg"
                  alt="Fatjon Gashi"
                  class="profile-image"
                  @error="handleImageError"
                  v-if="!imageError"
                />
                <div v-else class="profile-fallback">
                  <i class="bi bi-person-circle display-1 text-white"></i>
                </div>
              </div>
            </div>
          </div>

          <!-- Personal Story Content -->
          <div class="col-12 col-lg-6 hero-content order-2 order-lg-1">
            <div class="fade-in">
              <h2 class="display-5 fw-bold text-dark mb-4">My Journey</h2>
              <p class="lead text-muted mb-4">
                Hi, I'm <span class="text-primary fw-bold">Fatjon Gashi</span>, a passionate
                full-stack developer based in Kosovo. I specialize in building robust, scalable web
                applications using modern technologies.
              </p>
              <p class="text-muted mb-4">
                With over 4 years of experience in web development, I've worked on diverse projects
                ranging from e-commerce platforms to complex backend systems. I believe in writing
                clean, maintainable code and creating exceptional user experiences.
              </p>
              <p class="text-muted mb-4">
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5 fade-in">
          <h2 class="display-4 fw-bold text-dark mb-3">Skills & Technologies</h2>
          <p class="lead text-muted mx-auto" style="max-width: 600px">
            I work with a wide range of technologies to deliver comprehensive solutions.
          </p>
        </div>

        <div class="row g-4">
          <!-- Frontend Skills -->
          <div class="col-12 col-md-6 col-lg-4 slide-in-left" data-delay="0">
            <div class="card h-100 border-0 shadow-sm text-center">
              <div class="card-body p-4">
                <div class="display-4 text-primary mb-3">
                  <i class="bi bi-window-desktop"></i>
                </div>
                <h3 class="h4 fw-bold mb-3">Frontend Development</h3>
                <div class="d-flex flex-wrap gap-2 justify-content-center">
                  <span class="badge bg-primary-subtle text-primary-emphasis px-3 py-2"
                    >Vue.js</span
                  >
                  <span class="badge bg-primary-subtle text-primary-emphasis px-3 py-2">HTML5</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis px-3 py-2">CSS3</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis px-3 py-2"
                    >JavaScript</span
                  >
                  <span class="badge bg-primary-subtle text-primary-emphasis px-3 py-2"
                    >Bootstrap</span
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Backend Skills -->
          <div class="col-12 col-md-6 col-lg-4 slide-in-left" data-delay="200">
            <div class="card h-100 border-0 shadow-sm text-center">
              <div class="card-body p-4">
                <div class="display-4 text-primary mb-3">
                  <i class="bi bi-server"></i>
                </div>
                <h3 class="h4 fw-bold mb-3">Backend Development</h3>
                <div class="d-flex flex-wrap gap-2 justify-content-center">
                  <span class="badge bg-primary-subtle text-primary-emphasis px-3 py-2"
                    >Node.js</span
                  >
                  <span class="badge bg-primary-subtle text-primary-emphasis px-3 py-2"
                    >Express.js</span
                  >
                  <span class="badge bg-primary-subtle text-primary-emphasis px-3 py-2"
                    >NestJS</span
                  >
                  <span class="badge bg-primary-subtle text-primary-emphasis px-3 py-2"
                    >Fastify</span
                  >
                  <span class="badge bg-primary-subtle text-primary-emphasis px-3 py-2"
                    >Socket.io</span
                  >
                  <span class="badge bg-primary-subtle text-primary-emphasis px-3 py-2"
                    >RabbitMQ</span
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Database & DevOps -->
          <div class="col-12 col-md-6 col-lg-4 slide-in-left" data-delay="400">
            <div class="card h-100 border-0 shadow-sm text-center">
              <div class="card-body p-4">
                <div class="display-4 text-primary mb-3">
                  <i class="bi bi-database"></i>
                </div>
                <h3 class="h4 fw-bold mb-3">Database & DevOps</h3>
                <div class="d-flex flex-wrap gap-2 justify-content-center">
                  <span class="badge bg-primary-subtle text-primary-emphasis px-3 py-2">MySQL</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis px-3 py-2"
                    >MongoDB</span
                  >
                  <span class="badge bg-primary-subtle text-primary-emphasis px-3 py-2">Redis</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis px-3 py-2"
                    >Docker</span
                  >
                  <span class="badge bg-primary-subtle text-primary-emphasis px-3 py-2">Git</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="py-5 bg-white">
      <div class="container">
        <div class="text-center mb-5 fade-in">
          <h2 class="display-4 fw-bold text-dark mb-3">Professional Experience</h2>
          <p class="lead text-muted mx-auto" style="max-width: 600px">
            My journey through various roles and projects that shaped my expertise.
          </p>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="timeline">
              <!-- Experience Item 1 -->
              <div class="timeline-item slide-in-right" data-delay="0">
                <div class="timeline-content">
                  <div class="timeline-date">2023 – Present</div>
                  <h4 class="h5 fw-bold text-primary mb-2">Full-Stack Developer</h4>
                  <p class="text-muted mb-2">Freelance & Personal Projects</p>
                  <p class="text-muted">
                    Building and maintaining full-stack web applications with
                    <strong>Node.js, Vue.js, MySQL, and MongoDB</strong>. Focused on real-time
                    systems, scalable APIs, and experimenting with microservices. Developed projects
                    such as a betting platform, pharmacy stock system, and gaming community backend.
                  </p>
                </div>
              </div>

              <!-- Experience Item 2 -->
              <div class="timeline-item slide-in-right" data-delay="200">
                <div class="timeline-content">
                  <div class="timeline-date">2021 – 2023</div>
                  <h4 class="h5 fw-bold text-primary mb-2">Backend Developer</h4>
                  <p class="text-muted mb-2">Alaturka Company & University Projects</p>
                  <p class="text-muted">
                    Worked on <strong>server-side applications</strong>, API development, and
                    real-time features. Gained experience with
                    <strong>NestJS, Fastify, Socket.io, Passport</strong>
                    and deployed production-ready applications such as an e-commerce platform and
                    library system with payment integration.
                  </p>
                </div>
              </div>

              <!-- Experience Item 3 -->
              <div class="timeline-item slide-in-right" data-delay="400">
                <div class="timeline-content">
                  <div class="timeline-date">2019 – 2021</div>
                  <h4 class="h5 fw-bold text-primary mb-2">Junior Developer / Intern</h4>
                  <p class="text-muted mb-2">StarLabs & Early University Work</p>
                  <p class="text-muted">
                    Learned the fundamentals of
                    <strong>SQL, ASP.NET Core MVC, GitHub, and task management tools</strong> during
                    internships and coursework. Built small projects using
                    <strong>Vue.js, Laravel, and Docker</strong>, laying the foundation for my later
                    full-stack expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education & Certifications -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row g-4">
          <!-- Education -->
          <div class="col-12 col-lg-6 scale-in" data-delay="0">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <h3 class="h4 fw-bold text-dark mb-3">
                  <i class="bi bi-mortarboard text-primary me-2"></i>
                  Education
                </h3>
                <div class="mb-3">
                  <h5 class="fw-bold text-primary">Computer Science</h5>
                  <p class="text-muted mb-1">University of Pristina</p>
                  <p class="text-muted small">2019 - 2023</p>
                </div>
                <p class="text-muted">
                  Studied computer science fundamentals, algorithms, data structures, and software
                  engineering principles.
                </p>
              </div>
            </div>
          </div>

          <!-- Certifications -->
          <div class="col-12 col-lg-6 scale-in" data-delay="200">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <h3 class="h4 fw-bold text-dark mb-3">
                  <i class="bi bi-award text-primary me-2"></i>
                  Certifications & Achievements
                </h3>
                <div class="mb-3">
                  <h5 class="fw-bold text-primary">Web Development Certifications</h5>
                  <p class="text-muted mb-1">Various Online Platforms</p>
                  <p class="text-muted small">2020 - Present</p>
                </div>
                <p class="text-muted">
                  Completed certifications in Vue.js, Node.js, and modern web development practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5 bg-primary text-white">
      <div class="container">
        <div class="text-center cta-content">
          <h2 class="display-5 fw-bold mb-4">Ready to Work Together?</h2>
          <p class="lead mb-4 mx-auto" style="max-width: 600px">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we
            can bring your ideas to life.
          </p>
          <div class="d-flex flex-wrap gap-3 justify-content-center">
            <router-link to="/projects" class="btn btn-light btn-lg">
              <i class="bi bi-eye me-2"></i>
              View My Work
            </router-link>
            <router-link to="/contact" class="btn btn-outline-light btn-lg">
              <i class="bi bi-envelope me-2"></i>
              Get In Touch
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Component name for ESLint
defineOptions({
  name: 'AboutPage',
})

// Image error handling
const imageError = ref(false)

const handleImageError = () => {
  imageError.value = true
}

// Animation observer
let observer = null

// Animation functions
const initAnimations = () => {
  // Trigger initial animations for elements already in view
  setTimeout(() => {
    const elements = document.querySelectorAll(
      '.hero-content, .hero-image, .fade-in, .slide-in-left, .slide-in-right, .scale-in, .cta-content',
    )
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
  const animatedElements = document.querySelectorAll(
    '.fade-in, .slide-in-left, .slide-in-right, .scale-in, .hero-content, .hero-image, .cta-content',
  )
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
/* Profile image styling */
.profile-image-container {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid var(--bs-primary);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  background: linear-gradient(135deg, var(--bs-primary), #4ecdc4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.profile-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--bs-primary), #4ecdc4);
}

/* Timeline styling */
.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--bs-primary);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
}

.timeline-item:nth-child(odd) {
  padding-right: 50%;
  text-align: right;
}

.timeline-item:nth-child(even) {
  padding-left: 50%;
  text-align: left;
}

.timeline-content {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

.timeline-content::before {
  content: '';
  position: absolute;
  top: 50%;
  width: 20px;
  height: 20px;
  background: var(--bs-primary);
  border-radius: 50%;
  transform: translateY(-50%);
}

.timeline-item:nth-child(odd) .timeline-content::before {
  right: -60px;
}

.timeline-item:nth-child(even) .timeline-content::before {
  left: -60px;
}

.timeline-date {
  color: var(--bs-primary);
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

/* Animation classes */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.slide-in-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.8s ease;
}

.slide-in-left.visible {
  opacity: 1;
  transform: translateX(0);
}

.slide-in-right {
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.8s ease;
}

.slide-in-right.visible {
  opacity: 1;
  transform: translateX(0);
}

.scale-in {
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.8s ease;
}

.scale-in.visible {
  opacity: 1;
  transform: scale(1);
}

.hero-content {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease;
}

.hero-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-image {
  opacity: 0;
  transform: scale(0.9) rotate(5deg);
  transition: all 1.2s ease;
}

.hero-image.visible {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

.cta-content {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.cta-content.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive timeline */
@media (max-width: 991.98px) {
  .timeline::before {
    left: 30px;
  }

  .timeline-item:nth-child(odd),
  .timeline-item:nth-child(even) {
    padding-left: 80px;
    padding-right: 0;
    text-align: left;
  }

  .timeline-item:nth-child(odd) .timeline-content::before,
  .timeline-item:nth-child(even) .timeline-content::before {
    left: -50px;
    right: auto;
  }
}

/* Mobile adjustments */
@media (max-width: 767.98px) {
  .profile-image-container {
    width: 240px;
    height: 240px;
  }

  .hero-image {
    margin-bottom: 2rem;
  }

  .hero-content {
    text-align: center;
  }
}
</style>
