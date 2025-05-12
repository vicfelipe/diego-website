<template>
  <div class="relative overflow-hidden" style="top:-2px;">
    <div class="max-w-screen-xl">
      <div
        class="bg-hero relative z-10 py-12 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <main
          class="mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <div class="text-center lg:text-left">
            <h2
              class="text-2xl tracking-tight leading-10 font-display-4 text-gray-100 sm:text-3xl md:text-4xl"
            >
              <!-- Especialista em projetos de
              <br class="xl:hidden" />
              <span class="text-teal-400">identidade visual_</span>-->
              <vue-typed-js :strings="heroText" :showCursor="false">
                <span class="typing mx-auto sm:mx-0"></span>
              </vue-typed-js>
            </h2>
            <p
              class="mt-3 text-base text-gray-400 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5 md:text-md lg:mx-0"
            >
              Meu nome é
              <strong>Diego Corrêa</strong>, sou formado e pós-graduado como Especialista em Design Gráfico, com foco no desenvolvimento de marcas.
            </p>
          </div>
        </main>
      </div>
      <div class="invisible sm:visible absolute lg:inset-y-0 lg:right-0">
        <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/./img/hero-banner.jpg"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heroText: [
        'Especialista em projetos de <br class="xl:hidden" /> <span class="text-teal-400">identidade visual<span class="blinking">_</span></span>'
      ],
      cursorControl: true
    }
  },
  methods: {
    cursor() {
      this.cursorControl = false
    }
  }
}
</script>

<style>
@media only screen and (max-width: 600px) {
  .bg-hero {
    background-color: #000000;
    background-image: url('/./img/hero-banner.jpg') !important;
    background-size: cover;
    background-position: center;
  }
}
.bg-hero {
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23525252' fill-opacity='0.42' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}
</style>