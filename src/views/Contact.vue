<template>
  <div class="min-vh-100 bg-light">
    <!-- Scroll Progress Bar -->
    <div class="scroll-progress-bar" data-scroll-progress></div>

    <!-- Hero Section -->
    <section class="bg-primary text-white py-5">
      <div class="container">
        <div class="text-center fade-in">
          <h1 class="display-3 fw-bold mb-3">Get In Touch</h1>
          <p class="lead mx-auto" style="max-width: 600px">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we
            can work together.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Information Section -->
    <section class="py-5 bg-white">
      <div class="container">
        <div class="row g-5">
          <!-- Contact Info Cards -->
          <div class="col-12 col-lg-4">
            <div class="row g-4">
              <!-- Email -->
              <div class="col-12 slide-in-left" data-delay="0">
                <div class="card h-100 border-0 shadow-sm text-center">
                  <div class="card-body p-4">
                    <div class="display-4 text-primary mb-3">
                      <i class="bi bi-envelope"></i>
                    </div>
                    <h3 class="h5 fw-bold mb-2">Email</h3>
                    <p class="text-muted mb-3">Let's start a conversation</p>
                    <a href="mailto:fatjon.gashii04@gmail.com" class="btn btn-outline-primary">
                      fatjon.gashii04@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <!-- Phone -->
              <div class="col-12 slide-in-left" data-delay="200">
                <div class="card h-100 border-0 shadow-sm text-center">
                  <div class="card-body p-4">
                    <div class="display-4 text-primary mb-3">
                      <i class="bi bi-telephone"></i>
                    </div>
                    <h3 class="h5 fw-bold mb-2">Phone</h3>
                    <p class="text-muted mb-3">Call me directly</p>
                    <a href="tel:+38349603184" class="btn btn-outline-primary"> +383 49 603 184 </a>
                  </div>
                </div>
              </div>

              <!-- Location -->
              <div class="col-12 slide-in-left" data-delay="400">
                <div class="card h-100 border-0 shadow-sm text-center">
                  <div class="card-body p-4">
                    <div class="display-4 text-primary mb-3">
                      <i class="bi bi-geo-alt"></i>
                    </div>
                    <h3 class="h5 fw-bold mb-2">Location</h3>
                    <p class="text-muted mb-3">Based in Kosovo</p>
                    <span class="text-muted">Pristina, Kosovo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="col-12 col-lg-8">
            <div class="card border-0 shadow-sm slide-in-right" data-delay="100">
              <div class="card-body p-5">
                <h2 class="h3 fw-bold text-dark mb-4">Send Me a Message</h2>

                <form @submit.prevent="handleSubmit" class="needs-validation" novalidate>
                  <div class="row g-3">
                    <!-- Name -->
                    <div class="col-12 col-md-6">
                      <label for="name" class="form-label fw-medium">Full Name *</label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        v-model="formData.name"
                        :class="{ 'is-invalid': errors.name }"
                        required
                        placeholder="Your full name"
                      />
                      <div class="invalid-feedback" v-if="errors.name">
                        {{ errors.name }}
                      </div>
                    </div>

                    <!-- Email -->
                    <div class="col-12 col-md-6">
                      <label for="email" class="form-label fw-medium">Email Address *</label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        v-model="formData.email"
                        :class="{ 'is-invalid': errors.email }"
                        required
                        placeholder="your.email@example.com"
                      />
                      <div class="invalid-feedback" v-if="errors.email">
                        {{ errors.email }}
                      </div>
                    </div>

                    <!-- Subject -->
                    <div class="col-12">
                      <label for="subject" class="form-label fw-medium">Subject *</label>
                      <input
                        type="text"
                        class="form-control"
                        id="subject"
                        v-model="formData.subject"
                        :class="{ 'is-invalid': errors.subject }"
                        required
                        placeholder="What's this about?"
                      />
                      <div class="invalid-feedback" v-if="errors.subject">
                        {{ errors.subject }}
                      </div>
                    </div>

                    <!-- Message -->
                    <div class="col-12">
                      <label for="message" class="form-label fw-medium">Message *</label>
                      <textarea
                        class="form-control"
                        id="message"
                        rows="6"
                        v-model="formData.message"
                        :class="{ 'is-invalid': errors.message }"
                        required
                        placeholder="Tell me about your project or inquiry..."
                      ></textarea>
                      <div class="invalid-feedback" v-if="errors.message">
                        {{ errors.message }}
                      </div>
                    </div>

                    <!-- Submit Button -->
                    <div class="col-12">
                      <button
                        type="submit"
                        class="btn btn-primary btn-lg w-100"
                        :disabled="isSubmitting"
                      >
                        <span
                          v-if="isSubmitting"
                          class="spinner-border spinner-border-sm me-2"
                        ></span>
                        <i v-else class="bi bi-send me-2"></i>
                        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                      </button>
                    </div>
                  </div>
                </form>

                <!-- Success/Error Messages -->
                <div v-if="submitMessage" class="mt-3">
                  <div
                    :class="[
                      'alert',
                      submitMessage.type === 'success' ? 'alert-success' : 'alert-danger',
                    ]"
                    role="alert"
                  >
                    <i
                      :class="[
                        'bi me-2',
                        submitMessage.type === 'success'
                          ? 'bi-check-circle'
                          : 'bi-exclamation-triangle',
                      ]"
                    ></i>
                    {{ submitMessage.text }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Links Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5 fade-in">
          <h2 class="display-4 fw-bold text-dark mb-3">Connect With Me</h2>
          <p class="lead text-muted mx-auto" style="max-width: 600px">
            Follow me on social media or check out my work on various platforms.
          </p>
        </div>

        <div class="row g-4 justify-content-center">
          <!-- GitHub -->
          <div class="col-6 col-md-4 scale-in" data-delay="0">
            <div class="card border-0 shadow-sm text-center h-100">
              <div class="card-body p-4">
                <div class="display-4 text-dark mb-3">
                  <i class="bi bi-github"></i>
                </div>
                <h4 class="h6 fw-bold mb-2">GitHub</h4>
                <p class="text-muted small mb-3">View my projects</p>
                <a
                  href="https://github.com/fatgashi"
                  target="_blank"
                  class="btn btn-outline-dark btn-sm"
                >
                  Visit Profile
                </a>
              </div>
            </div>
          </div>

          <!-- LinkedIn -->
          <div class="col-6 col-md-4 scale-in" data-delay="200">
            <div class="card border-0 shadow-sm text-center h-100">
              <div class="card-body p-4">
                <div class="display-4 text-primary mb-3">
                  <i class="bi bi-linkedin"></i>
                </div>
                <h4 class="h6 fw-bold mb-2">LinkedIn</h4>
                <p class="text-muted small mb-3">Professional network</p>
                <a
                  href="https://www.linkedin.com/in/fatjon-gashi-75057921b/"
                  target="_blank"
                  class="btn btn-outline-primary btn-sm"
                >
                  Connect
                </a>
              </div>
            </div>
          </div>

          <!-- Portfolio -->
          <div class="col-6 col-md-4 scale-in" data-delay="600">
            <div class="card border-0 shadow-sm text-center h-100">
              <div class="card-body p-4">
                <div class="display-4 text-success mb-3">
                  <i class="bi bi-briefcase"></i>
                </div>
                <h4 class="h6 fw-bold mb-2">Portfolio</h4>
                <p class="text-muted small mb-3">View my work</p>
                <router-link to="/projects" class="btn btn-outline-success btn-sm">
                  Browse Projects
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-5 bg-white">
      <div class="container">
        <div class="text-center mb-5 fade-in">
          <h2 class="display-4 fw-bold text-dark mb-3">Frequently Asked Questions</h2>
          <p class="lead text-muted mx-auto" style="max-width: 600px">
            Common questions about working with me and my services.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-12 col-lg-8 mx-auto">
            <div class="accordion" id="faqAccordion">
              <!-- FAQ Item 1 -->
              <div class="accordion-item border-0 shadow-sm mb-3 slide-in-left" data-delay="0">
                <h2 class="accordion-header" id="faq1">
                  <button
                    class="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1"
                    aria-expanded="false"
                    aria-controls="collapse1"
                  >
                    What types of projects do you work on?
                  </button>
                </h2>
                <div
                  id="collapse1"
                  class="accordion-collapse collapse"
                  aria-labelledby="faq1"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body text-muted">
                    I specialize in full-stack web development, including e-commerce platforms,
                    real-time applications, API development, and custom web solutions. I've worked
                    on betting platforms, pharmacy management systems, gaming backends, and various
                    other web applications.
                  </div>
                </div>
              </div>

              <!-- FAQ Item 2 -->
              <div class="accordion-item border-0 shadow-sm mb-3 slide-in-left" data-delay="200">
                <h2 class="accordion-header" id="faq2">
                  <button
                    class="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse2"
                    aria-expanded="false"
                    aria-controls="collapse2"
                  >
                    What is your typical project timeline?
                  </button>
                </h2>
                <div
                  id="collapse2"
                  class="accordion-collapse collapse"
                  aria-labelledby="faq2"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body text-muted">
                    Project timelines vary depending on complexity and scope. Simple websites might
                    take 1-2 weeks, while complex applications can take 2-3 months or more. I always
                    provide detailed timelines during the initial consultation and keep clients
                    updated throughout the development process.
                  </div>
                </div>
              </div>

              <!-- FAQ Item 3 -->
              <div class="accordion-item border-0 shadow-sm mb-3 slide-in-left" data-delay="400">
                <h2 class="accordion-header" id="faq3">
                  <button
                    class="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse3"
                    aria-expanded="false"
                    aria-controls="collapse3"
                  >
                    Do you provide ongoing support and maintenance?
                  </button>
                </h2>
                <div
                  id="collapse3"
                  class="accordion-collapse collapse"
                  aria-labelledby="faq3"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body text-muted">
                    Yes, I offer ongoing support and maintenance services. This includes bug fixes,
                    updates, security patches, and feature additions. I can work on a retainer basis
                    or per-project basis, depending on your needs and budget.
                  </div>
                </div>
              </div>

              <!-- FAQ Item 4 -->
              <div class="accordion-item border-0 shadow-sm mb-3 slide-in-left" data-delay="600">
                <h2 class="accordion-header" id="faq4">
                  <button
                    class="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse4"
                    aria-expanded="false"
                    aria-controls="collapse4"
                  >
                    How do you handle communication during projects?
                  </button>
                </h2>
                <div
                  id="collapse4"
                  class="accordion-collapse collapse"
                  aria-labelledby="faq4"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body text-muted">
                    I maintain regular communication through email, video calls, and project
                    management tools. I provide weekly updates, respond to messages within 24 hours,
                    and schedule regular check-ins to ensure the project stays on track and meets
                    your expectations.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import emailjs from '@emailjs/browser'

// Component name for ESLint
defineOptions({
  name: 'ContactPage',
})

// EmailJS configuration loaded from environment variables
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create a new service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}, {{to_name}}
// 4. Get your Service ID, Template ID, and Public Key from the EmailJS dashboard
// 5. Update the values in the .env file with your actual credentials

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

// Form data
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

// Form validation errors
const errors = ref({})

// Form submission state
const isSubmitting = ref(false)
const submitMessage = ref(null)

// Animation observer
let observer = null

// Form validation
const validateForm = () => {
  errors.value = {}

  if (!formData.value.name.trim()) {
    errors.value.name = 'Name is required'
  }

  if (!formData.value.email.trim()) {
    errors.value.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.value.email = 'Please enter a valid email address'
  }

  if (!formData.value.subject.trim()) {
    errors.value.subject = 'Subject is required'
  }

  if (!formData.value.message.trim()) {
    errors.value.message = 'Message is required'
  } else if (formData.value.message.length < 10) {
    errors.value.message = 'Message must be at least 10 characters long'
  }

  return Object.keys(errors.value).length === 0
}

// Handle form submission
const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true
  submitMessage.value = null

  try {
    // Check if EmailJS configuration is set
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      throw new Error(
        'EmailJS not configured. Please set up your EmailJS credentials in the .env file.',
      )
    }

    // Send email using EmailJS
    const templateParams = {
      name: formData.value.name, // matches {{name}} in your template
      email: formData.value.email, // matches {{email}} (used in Reply-To)
      title: formData.value.subject, // matches {{title}} in Subject
      message: formData.value.message, // matches {{message}} in body
    }

    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)

    // Success
    submitMessage.value = {
      type: 'success',
      text: "Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.",
    }

    // Reset form
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  } catch (error) {
    console.error('Error submitting form:', error)

    // Error handling
    let errorMessage =
      'Sorry, there was an error sending your message. Please try again or contact me directly via email.'

    if (error.message.includes('EmailJS not configured')) {
      errorMessage =
        'Email service is currently being configured. Please contact me directly at fatjon.gashii04@gmail.com'
    } else if (error.text) {
      // EmailJS specific error
      errorMessage = `Failed to send email: ${error.text}. Please try again or contact me directly.`
    }

    submitMessage.value = {
      type: 'error',
      text: errorMessage,
    }
  } finally {
    isSubmitting.value = false
  }
}

// Animation functions
const initAnimations = () => {
  // Trigger initial animations for elements already in view
  setTimeout(() => {
    const elements = document.querySelectorAll(
      '.fade-in, .slide-in-left, .slide-in-right, .scale-in',
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
    '.fade-in, .slide-in-left, .slide-in-right, .scale-in',
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

/* Form styling */
.form-control:focus {
  border-color: var(--bs-primary);
  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
}

.form-label {
  color: #495057;
  margin-bottom: 0.5rem;
}

/* Card hover effects */
.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

/* Accordion styling */
.accordion-button:not(.collapsed) {
  background-color: var(--bs-primary);
  color: white;
}

.accordion-button:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

/* Social links styling */
.social-card {
  transition: all 0.3s ease;
}

.social-card:hover {
  transform: translateY(-3px);
}

/* Button styling */
.btn {
  transition: all 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

/* Mobile adjustments */
@media (max-width: 767.98px) {
  .card-body {
    padding: 1.5rem !important;
  }

  .display-4 {
    font-size: 2.5rem;
  }
}
</style>
