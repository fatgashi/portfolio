<template>
  <div class="min-vh-100">
    <!-- Scroll Progress Bar -->
    <div class="scroll-progress-bar" data-scroll-progress></div>

    <!-- Hero Section -->
    <section class="bg-light py-5">
      <div class="container">
        <div class="row align-items-center g-5">
          <!-- Hero Image - Shows first on mobile -->
          <div class="col-12 col-lg-6 text-center hero-image order-1 order-lg-2">
            <div class="position-relative d-inline-block">
              <!-- Profile image container -->
              <div class="profile-image-container">
                <img
                  src="@/assets/images/profile.jpg"
                  alt="Profile"
                  class="profile-image"
                  @error="handleImageError"
                  v-if="!imageError"
                />
                <div v-else class="profile-fallback">
                  <i class="bi bi-person-circle display-1 text-white"></i>
                </div>
              </div>
              <!-- Decorative elements -->
              <div
                class="position-absolute top-0 end-0 bg-warning rounded-circle opacity-75"
                style="width: 80px; height: 80px; transform: translate(25%, -25%)"
              ></div>
              <div
                class="position-absolute bottom-0 start-0 bg-danger rounded-circle opacity-75"
                style="width: 56px; height: 56px; transform: translate(-25%, 25%)"
              ></div>
            </div>
          </div>

          <!-- Hero Content - Shows second on mobile -->
          <div class="col-12 col-lg-6 hero-content order-2 order-lg-1">
            <h1 class="display-4 display-lg-3 fw-bold text-dark mb-4">
              Hi, I'm <span class="text-primary">Fatjon Gashii</span>
            </h1>
            <p class="lead text-muted mb-4">
              A passionate full-stack developer with expertise in modern web technologies. I create
              innovative solutions that solve real-world problems and deliver exceptional user
              experiences.
            </p>
            <div class="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
              <router-link to="/projects" class="btn-primary">
                <i class="bi bi-eye me-2"></i>
                View Projects
              </router-link>
              <button class="btn-secondary" @click="downloadCV">
                <i class="bi bi-download me-2"></i>
                Download CV
              </button>
              <router-link to="/contact" class="btn-primary">
                <i class="bi bi-envelope me-2"></i>
                Contact Me
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Stats Section -->
    <section class="py-5 bg-white">
      <div class="container">
        <div class="row g-4">
          <div class="col-6 col-md-3 text-center stats-item" data-delay="0">
            <div class="display-6 fw-bold text-primary mb-2">4+</div>
            <div class="text-muted">Years Experience</div>
          </div>
          <div class="col-6 col-md-3 text-center stats-item" data-delay="200">
            <div class="display-6 fw-bold text-primary mb-2">10+</div>
            <div class="text-muted">Projects Completed</div>
          </div>
          <div class="col-6 col-md-3 text-center stats-item" data-delay="400">
            <div class="display-6 fw-bold text-primary mb-2">15+</div>
            <div class="text-muted">Technologies</div>
          </div>
          <div class="col-6 col-md-3 text-center stats-item" data-delay="600">
            <div class="display-6 fw-bold text-primary mb-2">5+</div>
            <div class="text-muted">Projects shipped</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5 fade-in">
          <h2 class="display-4 fw-bold text-dark mb-3">Technologies & Skills</h2>
          <p class="lead text-muted mx-auto" style="max-width: 600px">
            I work with a comprehensive stack of modern technologies to build robust, scalable, and
            user-friendly applications.
          </p>
        </div>

        <div class="row g-5">
          <!-- Backend Technologies -->
          <div class="col-lg-6">
            <div class="tech-category" data-delay="0">
              <div class="d-flex align-items-center mb-4">
                <div class="tech-icon-wrapper bg-primary-subtle rounded-circle p-3 me-3">
                  <i class="bi bi-server text-primary fs-3"></i>
                </div>
                <h3 class="h3 fw-bold text-dark mb-0">Backend Development</h3>
              </div>

              <div class="row g-3">
                <div class="col-6">
                  <div class="tech-item p-3 bg-white rounded-3 shadow-sm h-100">
                    <div class="d-flex align-items-center mb-2">
                      <i class="bi bi-braces text-primary me-2"></i>
                      <span class="fw-semibold">Node.js</span>
                    </div>
                    <small class="text-muted">Runtime Environment</small>
                  </div>
                </div>

                <div class="col-6">
                  <div class="tech-item p-3 bg-white rounded-3 shadow-sm h-100">
                    <div class="d-flex align-items-center mb-2">
                      <i class="bi bi-gear text-primary me-2"></i>
                      <span class="fw-semibold">Express.js</span>
                    </div>
                    <small class="text-muted">Web Framework</small>
                  </div>
                </div>

                <div class="col-6">
                  <div class="tech-item p-3 bg-white rounded-3 shadow-sm h-100">
                    <div class="d-flex align-items-center mb-2">
                      <i class="bi bi-database text-primary me-2"></i>
                      <span class="fw-semibold">MySQL</span>
                    </div>
                    <small class="text-muted">Relational Database</small>
                  </div>
                </div>

                <div class="col-6">
                  <div class="tech-item p-3 bg-white rounded-3 shadow-sm h-100">
                    <div class="d-flex align-items-center mb-2">
                      <i class="bi bi-collection text-primary me-2"></i>
                      <span class="fw-semibold">MongoDB</span>
                    </div>
                    <small class="text-muted">NoSQL Database</small>
                  </div>
                </div>

                <div class="col-6">
                  <div class="tech-item p-3 bg-white rounded-3 shadow-sm h-100">
                    <div class="d-flex align-items-center mb-2">
                      <i class="bi bi-arrow-left-right text-primary me-2"></i>
                      <span class="fw-semibold">RabbitMQ</span>
                    </div>
                    <small class="text-muted">Message Broker</small>
                  </div>
                </div>

                <div class="col-6">
                  <div class="tech-item p-3 bg-white rounded-3 shadow-sm h-100">
                    <div class="d-flex align-items-center mb-2">
                      <i class="bi bi-wifi text-primary me-2"></i>
                      <span class="fw-semibold">Socket.io</span>
                    </div>
                    <small class="text-muted">Real-time Communication</small>
                  </div>
                </div>

                <div class="col-6">
                  <div class="tech-item p-3 bg-white rounded-3 shadow-sm h-100">
                    <div class="d-flex align-items-center mb-2">
                      <i class="bi bi-box text-primary me-2"></i>
                      <span class="fw-semibold">Docker</span>
                    </div>
                    <small class="text-muted">Containerization</small>
                  </div>
                </div>

                <div class="col-6">
                  <div class="tech-item p-3 bg-white rounded-3 shadow-sm h-100">
                    <div class="d-flex align-items-center mb-2">
                      <i class="bi bi-shield-lock text-primary me-2"></i>
                      <span class="fw-semibold">Passport.js</span>
                    </div>
                    <small class="text-muted">Authentication</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Frontend Technologies -->
          <div class="col-lg-6">
            <div class="tech-category" data-delay="200">
              <div class="d-flex align-items-center mb-4">
                <div class="tech-icon-wrapper bg-primary-subtle rounded-circle p-3 me-3">
                  <i class="bi bi-window text-primary fs-3"></i>
                </div>
                <h3 class="h3 fw-bold text-dark mb-0">Frontend Development</h3>
              </div>

              <div class="row g-3">
                <div class="col-6">
                  <div class="tech-item p-3 bg-white rounded-3 shadow-sm h-100">
                    <div class="d-flex align-items-center mb-2">
                      <i class="bi bi-diagram-3 text-primary me-2"></i>
                      <span class="fw-semibold">Vue.js 3</span>
                    </div>
                    <small class="text-muted">Progressive Framework</small>
                  </div>
                </div>

                <div class="col-6">
                  <div class="tech-item p-3 bg-white rounded-3 shadow-sm h-100">
                    <div class="d-flex align-items-center mb-2">
                      <i class="bi bi-arrow-repeat text-primary me-2"></i>
                      <span class="fw-semibold">Vue Router</span>
                    </div>
                    <small class="text-muted">Client-side Routing</small>
                  </div>
                </div>

                <div class="col-6">
                  <div class="tech-item p-3 bg-white rounded-3 shadow-sm h-100">
                    <div class="d-flex align-items-center mb-2">
                      <i class="bi bi-stack text-primary me-2"></i>
                      <span class="fw-semibold">Pinia</span>
                    </div>
                    <small class="text-muted">State Management</small>
                  </div>
                </div>

                <div class="col-6">
                  <div class="tech-item p-3 bg-white rounded-3 shadow-sm h-100">
                    <div class="d-flex align-items-center mb-2">
                      <i class="bi bi-grid-3x3-gap text-primary me-2"></i>
                      <span class="fw-semibold">Bootstrap 5</span>
                    </div>
                    <small class="text-muted">CSS Framework</small>
                  </div>
                </div>

                <div class="col-6">
                  <div class="tech-item p-3 bg-white rounded-3 shadow-sm h-100">
                    <div class="d-flex align-items-center mb-2">
                      <i class="bi bi-palette text-primary me-2"></i>
                      <span class="fw-semibold">CSS3</span>
                    </div>
                    <small class="text-muted">Styling & Animations</small>
                  </div>
                </div>

                <div class="col-6">
                  <div class="tech-item p-3 bg-white rounded-3 shadow-sm h-100">
                    <div class="d-flex align-items-center mb-2">
                      <i class="bi bi-code-slash text-primary me-2"></i>
                      <span class="fw-semibold">JavaScript ES6+</span>
                    </div>
                    <small class="text-muted">Modern JavaScript</small>
                  </div>
                </div>

                <div class="col-6">
                  <div class="tech-item p-3 bg-white rounded-3 shadow-sm h-100">
                    <div class="d-flex align-items-center mb-2">
                      <i class="bi bi-file-earmark-code text-primary me-2"></i>
                      <span class="fw-semibold">HTML5</span>
                    </div>
                    <small class="text-muted">Semantic Markup</small>
                  </div>
                </div>

                <div class="col-6">
                  <div class="tech-item p-3 bg-white rounded-3 shadow-sm h-100">
                    <div class="d-flex align-items-center mb-2">
                      <i class="bi bi-lightning text-primary me-2"></i>
                      <span class="fw-semibold">Vite</span>
                    </div>
                    <small class="text-muted">Build Tool</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Skills Row -->
        <div class="row mt-5">
          <div class="col-12">
            <div class="tech-category" data-delay="400">
              <div class="d-flex align-items-center mb-4">
                <div class="tech-icon-wrapper bg-primary-subtle rounded-circle p-3 me-3">
                  <i class="bi bi-tools text-primary fs-3"></i>
                </div>
                <h3 class="h3 fw-bold text-dark mb-0">Tools & Services</h3>
              </div>

              <div class="row g-3">
                <div class="col-6 col-md-3">
                  <div class="tech-item p-3 bg-white rounded-3 shadow-sm h-100 text-center">
                    <div class="d-flex align-items-center justify-content-center mb-2">
                      <i class="bi bi-git text-primary me-2"></i>
                      <span class="fw-semibold">Git</span>
                    </div>
                    <small class="text-muted">Version Control</small>
                  </div>
                </div>

                <div class="col-6 col-md-3">
                  <div class="tech-item p-3 bg-white rounded-3 shadow-sm h-100 text-center">
                    <div class="d-flex align-items-center justify-content-center mb-2">
                      <i class="bi bi-credit-card text-primary me-2"></i>
                      <span class="fw-semibold">Stripe</span>
                    </div>
                    <small class="text-muted">Payment Processing</small>
                  </div>
                </div>

                <div class="col-6 col-md-3">
                  <div class="tech-item p-3 bg-white rounded-3 shadow-sm h-100 text-center">
                    <div class="d-flex align-items-center justify-content-center mb-2">
                      <i class="bi bi-bank text-primary me-2"></i>
                      <span class="fw-semibold">Paysera</span>
                    </div>
                    <small class="text-muted">Payment Gateway</small>
                  </div>
                </div>

                <div class="col-6 col-md-3">
                  <div class="tech-item p-3 bg-white rounded-3 shadow-sm h-100 text-center">
                    <div class="d-flex align-items-center justify-content-center mb-2">
                      <i class="bi bi-controller text-primary me-2"></i>
                      <span class="fw-semibold">RCON</span>
                    </div>
                    <small class="text-muted">Game Server Protocol</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Flagship Projects Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5 fade-in">
          <h2 class="display-4 fw-bold text-dark mb-3">Featured Projects</h2>
          <p class="lead text-muted mx-auto" style="max-width: 600px">
            Here are some of my most impactful projects that showcase my skills and passion for
            development.
          </p>
        </div>

        <div class="row g-4">
          <!-- Project 1 -->
          <div class="col-lg-4 col-md-6 project-card" data-delay="0">
            <div class="card h-100">
              <div class="position-relative overflow-hidden">
                <img
                  src="@/assets/images/betting.png"
                  alt="Betting Platform – multi-role, cashout, real-time odds"
                  class="w-100"
                  style="height: 200px; object-fit: cover"
                />
              </div>
              <div class="card-body">
                <h3 class="h5 fw-semibold text-dark mb-2">Betting Platform</h3>
                <p class="text-muted mb-3">
                  Complete betting system with multi-role access (Admin/Reseller/Shop/User),
                  CashOut, multi-bet, refunds, casino integrations, and real-time odds sync.
                  Migrated the legacy PHP backend to Node.js microservices for scalability.
                </p>
                <div class="d-flex flex-wrap gap-2 mb-3">
                  <span class="badge bg-primary-subtle text-primary-emphasis">Node.js</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">Express</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">MySQL</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">RabbitMQ</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">MongoDB</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">Socket.io</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">Docker</span>
                </div>
                <div class="d-flex gap-3">
                  <router-link
                    to="/projects/betting-platform"
                    class="btn btn-outline-primary btn-sm project-btn"
                  >
                    <span class="btn-text">View Project</span>
                    <i class="bi bi-arrow-right ms-1 btn-icon"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- Project 2 – Pharmacy Stock Management -->
          <div class="col-lg-4 col-md-6 project-card" data-delay="200">
            <div class="card h-100">
              <div class="position-relative overflow-hidden">
                <img
                  src="@/assets/images/pharmacy.png"
                  alt="Pharmacy stock management with per-batch expiry and alerts"
                  class="w-100"
                  style="height: 200px; object-fit: cover"
                />
              </div>
              <div class="card-body">
                <h3 class="h5 fw-semibold text-dark mb-2">Pharmacy Stock Management</h3>
                <p class="text-muted mb-3">
                  Multi-client inventory with per-batch expiry tracking, low-stock alerts, barcode
                  scanning, and configurable thresholds per pharmacy. Admin dashboards and
                  role-based access.
                </p>
                <div class="d-flex flex-wrap gap-2 mb-3">
                  <span class="badge bg-primary-subtle text-primary-emphasis">Node.js</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">Vue.js</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">MySQL</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">Passport</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">Bootstrap</span>
                </div>
                <div class="d-flex gap-3">
                  <router-link
                    to="/projects/pharmacy-system"
                    class="btn btn-outline-primary btn-sm project-btn"
                  >
                    <span class="btn-text">View Project</span>
                    <i class="bi bi-arrow-right ms-1 btn-icon"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- Project 3 – Diet & Wellness SaaS -->
          <div class="col-lg-4 col-md-6 project-card" data-delay="400">
            <div class="card h-100">
              <div class="position-relative overflow-hidden">
                <img
                  src="@/assets/images/diet.png"
                  alt="Diet and wellness SaaS with questionnaire, payments, and PDF plans"
                  class="w-100"
                  style="height: 200px; object-fit: cover"
                />
              </div>
              <div class="card-body">
                <h3 class="h5 fw-semibold text-dark mb-2">Diet & Wellness SaaS</h3>
                <p class="text-muted mb-3">
                  34-question assessment → payment → personalized PDF diet plan. Includes email
                  verification, limited-time offers, admin plan editor, and stats.
                </p>
                <div class="d-flex flex-wrap gap-2 mb-3">
                  <span class="badge bg-primary-subtle text-primary-emphasis">Node.js</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">MongoDB</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">Vue.js</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">Paysera</span>
                </div>
                <div class="d-flex gap-3">
                  <router-link
                    to="/projects/diet-wellness"
                    class="btn btn-outline-primary btn-sm project-btn"
                  >
                    <span class="btn-text">View Project</span>
                    <i class="bi bi-arrow-right ms-1 btn-icon"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- Project 4 – CS 1.6 Gaming Backend -->
          <div class="col-lg-4 col-md-6 project-card" data-delay="600">
            <div class="card h-100">
              <div class="position-relative overflow-hidden">
                <img
                  src="@/assets/images/cs16.png"
                  alt="CS 1.6 backend with RCON, live logs, and reward system"
                  class="w-100"
                  style="height: 200px; object-fit: cover"
                />
              </div>
              <div class="card-body">
                <h3 class="h5 fw-semibold text-dark mb-2">CS 1.6 Server Management Platform</h3>
                <p class="text-muted mb-3">
                  Full-stack web application (<strong>Vue</strong> frontend +
                  <strong>Node.js</strong> backend) for managing CS 1.6 servers: real-time RCON
                  console & log streaming, live player/session tracking, player stats editor,
                  daily/level rewards & VIP management, ban/kick tools, and role-based admin
                  dashboards. WebSockets power live updates; data persisted in MySQL.
                </p>
                <div class="d-flex flex-wrap gap-2 mb-3">
                  <span class="badge bg-primary-subtle text-primary-emphasis">Node.js</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">MySQL</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">MongoDB</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">RCON</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">Vue.js</span>
                </div>
                <div class="d-flex gap-3">
                  <router-link
                    to="/projects/cs16-backend"
                    class="btn btn-outline-primary btn-sm project-btn"
                  >
                    <span class="btn-text">View Project</span>
                    <i class="bi bi-arrow-right ms-1 btn-icon"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- Project 5 – DentalLibrary -->
          <div class="col-lg-4 col-md-6 project-card" data-delay="800">
            <div class="card h-100">
              <div class="position-relative overflow-hidden">
                <img
                  src="@/assets/images/dental.png"
                  alt="DentalLibrary e-commerce with Stripe and Socket.io"
                  class="w-100"
                  style="height: 200px; object-fit: cover"
                />
              </div>
              <div class="card-body">
                <h3 class="h5 fw-semibold text-dark mb-2">DentalLibrary Web App</h3>
                <p class="text-muted mb-3">
                  E-commerce style web app for buying dental books. REST API backend, Vue 2
                  frontend, MongoDB, Stripe checkout, and real-time communication with Socket.io.
                </p>
                <div class="d-flex flex-wrap gap-2 mb-3">
                  <span class="badge bg-primary-subtle text-primary-emphasis">Node.js</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">Vue 2</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">MongoDB</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">Stripe</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">Socket.io</span>
                </div>
                <div class="d-flex gap-3">
                  <router-link
                    to="/projects/dentallibrary"
                    class="btn btn-outline-primary btn-sm project-btn"
                  >
                    <span class="btn-text">View Project</span>
                    <i class="bi bi-arrow-right ms-1 btn-icon"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 project-card" data-delay="1000">
            <div class="card h-100">
              <div class="position-relative overflow-hidden">
                <img
                  src="@/assets/images/project-monitoring.png"
                  alt="Uptime & Project Monitoring – domain checks, alerts, status page"
                  class="w-100"
                  style="height: 200px; object-fit: cover"
                />
              </div>
              <div class="card-body">
                <h3 class="h5 fw-semibold text-dark mb-2">Uptime & Project Monitoring</h3>
                <p class="text-muted mb-3">
                  Lightweight monitor that pings configured domains every 5 minutes and alerts on
                  downtime / slow responses. Includes incident history, per-project status, and
                  optional public status page. Built for quick visibility across services.
                </p>
                <div class="d-flex flex-wrap gap-2 mb-3">
                  <span class="badge bg-primary-subtle text-primary-emphasis">Node.js</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">Express</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">Cron</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">MongoDB</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">Axios/Fetch</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">Email Alerts</span>
                  <span class="badge bg-primary-subtle text-primary-emphasis">Docker</span>
                </div>
                <div class="d-flex gap-3">
                  <router-link
                    to="/projects/uptime-monitor"
                    class="btn btn-outline-primary btn-sm project-btn"
                  >
                    <span class="btn-text">View Project</span>
                    <i class="bi bi-arrow-right ms-1 btn-icon"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-4">
          <router-link to="/projects" class="btn-primary">
            View All Projects
            <i class="bi bi-arrow-right ms-2"></i>
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5 bg-primary text-white">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center cta-content">
            <h2 class="display-4 fw-bold mb-4">Ready to Work Together?</h2>
            <p class="lead mb-5">
              Let's discuss your next project and bring your ideas to life with cutting-edge
              technology and exceptional design.
            </p>
            <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <router-link to="/contact" class="btn btn-light btn-lg">
                <i class="bi bi-envelope me-2"></i>
                Get In Touch
              </router-link>
              <button class="btn btn-outline-light btn-lg" @click="downloadCV">
                <i class="bi bi-download me-2"></i>
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Floating Action Button -->
    <div class="floating-action-btn" :class="{ visible: showFAB }">
      <button class="btn btn-primary rounded-circle" @click="scrollToTop" title="Back to Top">
        <i class="bi bi-arrow-up"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

// Component name for ESLint
defineOptions({
  name: 'HomePage',
})

// Reactive state for floating action button
const showFAB = ref(false)

// Reactive state for image error handling
const imageError = ref(false)

// Intersection Observer for scroll animations
let observer = null

const initAnimations = () => {
  // Trigger initial animations for elements already in view
  setTimeout(() => {
    const elements = document.querySelectorAll(
      '.hero-content, .hero-image, .fade-in, .stats-item, .project-card, .cta-content',
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

        // For text reveal animations
        if (element.classList.contains('reveal-text')) {
          const spans = element.querySelectorAll('span')
          spans.forEach((span, index) => {
            setTimeout(() => {
              span.style.transitionDelay = `${index * 0.1}s`
              span.classList.add('visible')
            }, index * 100)
          })
        }
      }
    })
  }, options)

  // Observe all animated elements
  const animatedElements = document.querySelectorAll(
    '.fade-in, .slide-in-left, .slide-in-right, .scale-in, .bounce-in, .stats-item, .project-card, .hero-content, .hero-image, .cta-content, .tech-category',
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

const handleScroll = () => {
  // Add parallax effect to background elements
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll('.parallax-bg')

  parallaxElements.forEach((element) => {
    const speed = element.dataset.speed || 0.5
    element.style.transform = `translateY(${scrolled * speed}px)`
  })

  // Add scroll-triggered effects
  const scrollProgress = scrolled / (document.documentElement.scrollHeight - window.innerHeight)

  // Update progress bars or other scroll-based animations
  const progressElements = document.querySelectorAll('[data-scroll-progress]')
  progressElements.forEach((element) => {
    element.style.width = `${scrollProgress * 100}%`
  })

  // Show/hide floating action button
  showFAB.value = scrolled > 300

  // Add scroll-triggered class changes
  const sections = document.querySelectorAll('section')
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
      section.classList.add('in-view')
    } else {
      section.classList.remove('in-view')
    }
  })
}

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

// Handle image loading error
const handleImageError = () => {
  imageError.value = true
  console.warn('Profile image failed to load, showing fallback')
}

// Download CV function
const downloadCV = () => {
  // Path to the CV file in the public directory
  const cvUrl = '/Fatjon-Gashi CV.pdf'

  // Create a temporary link element
  const link = document.createElement('a')
  link.href = cvUrl
  link.download = 'Fatjon-Gashi CV.pdf'
  link.target = '_blank'

  // Append to body, click, and remove
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  // Alternative: Open in new tab if download doesn't work
  // window.open(cvUrl, '_blank')
}

onMounted(() => {
  // Initialize animations on mount
  initAnimations()

  // Set up intersection observer for scroll animations
  setupScrollAnimations()

  // Add scroll event listener for parallax effects
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  // Clean up event listeners
  if (observer) {
    observer.disconnect()
  }
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Project Button Animations */
.project-btn {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border-radius: 8px;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.project-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(13, 110, 253, 0.25);
  border-color: var(--bs-primary);
  background-color: var(--bs-primary);
  color: white;
}

.project-btn:active {
  transform: translateY(0);
  box-shadow: 0 4px 15px rgba(13, 110, 253, 0.3);
}

/* Button Icon Animation */
.project-btn .btn-icon {
  transition: transform 0.3s ease;
  display: inline-block;
}

.project-btn:hover .btn-icon {
  transform: translateX(4px);
}

/* Button Text Animation */
.project-btn .btn-text {
  transition: all 0.3s ease;
  display: inline-block;
}

.project-btn:hover .btn-text {
  transform: translateX(2px);
}

/* Card Hover Effects */
.project-card .card {
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.project-card:hover .card {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: var(--bs-primary);
}

/* Technology Item Hover Effects */
.tech-item {
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.tech-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-color: var(--bs-primary);
  background-color: rgba(13, 110, 253, 0.02);
}

/* Tech Category Animation */
.tech-category {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.tech-category.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Floating Action Button */
.floating-action-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all 0.3s ease;
}

.floating-action-btn.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.floating-action-btn .btn {
  width: 56px;
  height: 56px;
  box-shadow: 0 8px 25px rgba(13, 110, 253, 0.3);
  transition: all 0.3s ease;
}

.floating-action-btn .btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(13, 110, 253, 0.4);
}

/* Scroll Progress Bar */
.scroll-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 0%;
  height: 4px;
  background: linear-gradient(90deg, var(--bs-primary), var(--bs-info));
  z-index: 9999;
  transition: width 0.1s ease;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .project-btn {
    width: 100%;
    justify-content: center;
  }

  .floating-action-btn {
    bottom: 20px;
    right: 20px;
  }

  .floating-action-btn .btn {
    width: 48px;
    height: 48px;
  }
}
</style>
