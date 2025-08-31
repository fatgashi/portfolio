<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app" class="min-vh-100 d-flex flex-column">
    <Header />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
#app {
  font-family: 'Inter', system-ui, sans-serif;
}
</style>
