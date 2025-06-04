<template>
  <section class="flex flex-col items-center justify-center min-h-[60vh] w-full">
    <h1 class="text-3xl md:text-5xl font-bold mb-4 text-gray-900 text-center">About Us</h1>
    <p class="text-lg text-gray-600 max-w-2xl mb-8 text-center">
      Meet the MindTrack team: passionate professionals dedicated to advancing adolescent mental
      health research through technology and innovation.
    </p>
    <div
      class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-0 max-w-6xl mx-auto"
    >
      <div
        v-for="member in members"
        :key="member.email"
        class="relative rounded-2xl overflow-hidden shadow-xl bg-gray-100 group flex flex-col justify-end min-h-[340px] h-full cursor-pointer"
        @click="$router.push({ name: 'profile', params: { email: member.email } })"
        tabindex="0"
        @keydown.enter="$router.push({ name: 'profile', params: { email: member.email } })"
        role="button"
        aria-label="See more about {{ member.name }}"
      >
        <img
          :src="member.photo"
          :alt="member.name + ' photo'"
          class="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        <div
          class="relative z-10 bg-gradient-to-t from-black/100 via-black/80 to-transparent p-4 flex flex-col justify-end min-h-[120px]"
        >
          <h3 class="text-white text-2xl font-bold mb-0 drop-shadow">{{ member.name }}</h3>
          <p class="text-white text-lg font-medium mb-0 drop-shadow">{{ member.position }}</p>
          <span
            class="inline-block mt-1 text-white underline hover:text-blue-200 font-semibold text-sm transition cursor-pointer"
          >
            See more
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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
</script>
