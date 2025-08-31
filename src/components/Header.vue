<template>
  <header class="bg-white shadow-sm sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <!-- Logo -->
        <router-link class="navbar-brand fw-bold text-primary fs-3" to="/">
          Fatjon Gashi
        </router-link>

        <!-- Mobile menu button -->
        <button
          class="navbar-toggler"
          type="button"
          @click="toggleMobileMenu"
          :aria-expanded="mobileMenuOpen"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navigation Menu -->
        <div class="collapse navbar-collapse" :class="{ show: mobileMenuOpen }">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                to="/"
                class="nav-link"
                :class="{ active: $route.path === '/' }"
                @click="mobileMenuOpen = false"
              >
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/projects"
                class="nav-link"
                :class="{ active: $route.path === '/projects' }"
                @click="mobileMenuOpen = false"
              >
                Projects
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/about"
                class="nav-link"
                :class="{ active: $route.path === '/about' }"
                @click="mobileMenuOpen = false"
              >
                About
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/contact"
                class="nav-link"
                :class="{ active: $route.path === '/contact' }"
                @click="mobileMenuOpen = false"
              >
                Contact
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>
