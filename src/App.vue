<template>
  <div class="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
    <header class="w-full bg-white/80 backdrop-blur shadow-sm sticky top-0 z-10">
      <nav class="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        <div class="flex items-center gap-2">
          <img src="@/assets/ISO_LOGO.png" alt="Logo" class="h-10 w-10" />
          <span class="text-xl font-bold tracking-tight text-gray-900">MindTrack</span>
        </div>
        <ul class="flex gap-6 text-gray-700 font-medium">
          <li><RouterLink to="/" class="hover:text-blue-600 transition">Home</RouterLink></li>
          <li>
            <RouterLink to="/about" class="hover:text-blue-600 transition">About Us</RouterLink>
          </li>
          <li>
            <RouterLink to="/progress" class="hover:text-blue-600 transition">Progress</RouterLink>
          </li>
        </ul>
      </nav>
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
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
/* All styling is handled by Tailwind CSS */
</style>
