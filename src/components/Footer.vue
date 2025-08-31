<template>
  <footer class="bg-dark text-white py-5">
    <div class="container">
      <div class="row g-4">
        <!-- Brand Section -->
        <div class="col-lg-6">
          <h3 class="h4 fw-bold text-primary mb-3">Portfolio</h3>
          <p class="text-light mb-4">
            A passionate developer creating innovative solutions and building amazing digital
            experiences.
          </p>
          <div class="d-flex gap-3">
            <a
              href="https://www.linkedin.com/in/fatjon-gashi-75057921b/"
              target="_blank"
              class="text-light text-decoration-none fs-5"
            >
              <i class="bi bi-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/fatjonn_gashi/"
              target="_blank"
              class="text-light text-decoration-none fs-5"
            >
              <i class="bi bi-instagram"></i>
            </a>
            <a
              href="https://github.com/fatgashi"
              target="_blank"
              class="text-light text-decoration-none fs-5"
            >
              <i class="bi bi-github"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="col-lg-3">
          <h4 class="h5 fw-semibold mb-3">Quick Links</h4>
          <ul class="list-unstyled">
            <li class="mb-2">
              <router-link to="/" class="text-light text-decoration-none">Home</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/projects" class="text-light text-decoration-none"
                >Projects</router-link
              >
            </li>
            <li class="mb-2">
              <router-link to="/about" class="text-light text-decoration-none">About</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/contact" class="text-light text-decoration-none"
                >Contact</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="col-lg-3">
          <h4 class="h5 fw-semibold mb-3">Contact</h4>
          <div class="text-light">
            <p class="mb-1">fatjon.gashii04@gmail.com</p>
            <p class="mb-1">+38349603184</p>
            <p class="mb-1">Pristina, Kosovo</p>
          </div>
        </div>
      </div>

      <div class="border-top border-secondary mt-4 pt-4 text-center">
        <p class="text-light mb-0">
          © {{ new Date().getFullYear() }} Portfolio. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
