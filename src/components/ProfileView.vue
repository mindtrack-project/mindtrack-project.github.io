<template>
  <section class="flex flex-col items-center justify-center min-h-[60vh] w-full">
    <div
      v-if="member"
      class="w-full max-w-3xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center"
    >
      <img
        :src="member.photo"
        :alt="member.name + ' photo'"
        class="w-48 h-48 rounded-2xl object-cover object-center shadow-lg mb-6 md:mb-0"
      />
      <div class="flex-1 flex flex-col gap-2">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{{ member.name }}</h1>
        <h2 class="text-lg text-blue-700 font-semibold mb-2">{{ member.position }}</h2>
        <p class="text-gray-700 text-base mb-4">{{ member.description }}</p>
        <div class="text-gray-500 text-sm mb-1">
          <span class="font-semibold">Address:</span> {{ member.address }}
        </div>
        <div class="text-gray-500 text-sm mb-1">
          <span class="font-semibold">Email:</span> {{ member.email }}
        </div>
        <div class="flex flex-wrap gap-3 mt-2">
          <a
            v-for="(link, idx) in member.links"
            :key="idx"
            :href="link.url"
            class="text-blue-600 underline hover:text-blue-800 text-sm cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
    <div v-else class="text-center text-gray-500 py-16">
      <p>Member not found.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const members = [
  {
    name: 'Mahdi Zareei Ph.D .',
    position: 'Team leader',
    photo: new URL('@/assets/members/Mahdi45.jpg', import.meta.url).href,
    description:
      "Mahdi Zareei (Senior Member, IEEE), a distinguished researcher and professor, earned his M.Sc. in Computer Networks from the University of Science, Malaysia in 2011 and a Ph.D. from the Malaysia-Japan International Institute of Technology, University of Technology, Malaysia in 2016. In 2017, he joined Tecnologico de Monterrey's School of Engineering and Sciences as a Postdoctoral Fellow, advancing to Research Professor in 2019. His research interests include applied machine learning and natural language processing. He is a Level I member of the Mexican National Researchers System (SNI I) and serves as an Associate Editor for IEEE ACCESS, PLOS One, and Ad Hoc & Sensor Wireless Networks Journals.",
    address: 'Tecnologico de Monterrey, Zapopan 45201',
    email: 'm.zareei@tec.mx',
    links: [
      { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=IhVgxzAAAAAJ' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mzareei/' },
      { label: 'Researcher Profile', url: 'https://research.tec.mx/vivo-tec/display/PID_314448' },
    ],
  },
  // Add more members here
]

const route = useRoute()
const member = computed(() => members.find((m) => m.email === route.params.email))
</script>
