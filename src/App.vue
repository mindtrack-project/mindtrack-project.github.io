<template>
  <div class="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
    <header class="w-full bg-white/80 backdrop-blur shadow-sm sticky top-0 z-10">
      <nav class="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        <RouterLink to="/" class="flex items-center gap-2 group">
          <img
            src="@/assets/ISO_LOGO.png"
            alt="Logo"
            class="h-10 w-10 group-hover:scale-105 transition-transform"
          />
          <span
            class="text-xl font-bold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors"
            >MindTrack</span
          >
        </RouterLink>
        <!-- Desktop Nav -->
        <ul class="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><RouterLink to="/" class="hover:text-blue-600 transition">Home</RouterLink></li>
          <li>
            <RouterLink to="/about" class="hover:text-blue-600 transition">About Us</RouterLink>
          </li>
          <li>
            <RouterLink to="/updates" class="hover:text-blue-600 transition"
              >Project Updates</RouterLink
            >
          </li>
        </ul>
        <!-- Mobile Burger -->
        <button
          @click="menuOpen = !menuOpen"
          class="md:hidden flex items-center p-2 rounded hover:bg-gray-100 focus:outline-none"
          aria-label="Open menu"
        >
          <svg
            v-if="!menuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </nav>
      <!-- Mobile Menu -->
      <transition name="fade">
        <ul
          v-if="menuOpen"
          class="md:hidden flex flex-col gap-4 px-6 pb-4 bg-white/95 shadow rounded-b-lg"
        >
          <li>
            <RouterLink
              @click="menuOpen = false"
              to="/"
              class="block py-2 text-gray-700 font-medium hover:text-blue-600 transition"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              @click="menuOpen = false"
              to="/about"
              class="block py-2 text-gray-700 font-medium hover:text-blue-600 transition"
              >About Us</RouterLink
            >
          </li>
          <li>
            <RouterLink
              @click="menuOpen = false"
              to="/updates"
              class="block py-2 text-gray-700 font-medium hover:text-blue-600 transition"
              >Project Updates</RouterLink
            >
          </li>
        </ul>
      </transition>
    </header>
    <main class="flex-1 container mx-auto px-4 md:px-0 py-8">
      <RouterView />
    </main>
    <footer class="w-full bg-white/80 backdrop-blur shadow-inner py-6 mt-8">
      <div class="container mx-auto text-center text-gray-500 text-sm">
        &copy; 2025 MindTrack. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
const menuOpen = ref(false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
