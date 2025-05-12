<template>
  <div id="app">
    <header>
      <Navbar />
      <PageHero :title="title" />
    </header>
    <section id="sobre">
      <div class="py-12 bg-white">
        <div class="mx-auto px-16 xxl:px-48">
          <h3
            class="text-2xl font-display-4 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10"
          >
            Sobre mim
            <span class="-ml-2 blinking">_</span>
          </h3>
          <!-- Two columns -->
          <div class="xs:flex-row md:flex my-8">
            <div class="">
              <img
                src="/img/diego_correa_foto.png"
                class="xs:w-full md:w-2/3"
                alt="Diego Correa Foto"
                srcset=""
              />
            </div>
            <div class="">
              <div class="lg:text-left">
                <p class="mt-4 text-gray-800">
                  Meu nome é Diego Corrêa, sou graduado pela Universidade
                  Paulista e pós-graduado como Especialista em Design Gráfico
                  pelo Centro Universitário Senac.
                </p>
                <p class="mt-4 max-w-2xl text-gray-800">
                  Já trabalhei em diversos segmentos do design gráfico e tenho
                  experiência na área publicitária, digital, editorial e na
                  criação de marcas corporativas.
                </p>
                <p class="mt-4 max-w-2xl text-gray-800">
                  Sou apaixonado por marcas e pela conexão que elas podem criar
                  com as pessoas, através de um projeto bem estruturado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <CTA />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/header/Navbar'
import PageHero from '~/components/header/PageHero'
import CTA from '~/components/cta/Index'
import Footer from '~/components/footer/Index'

export default {
  data() {
    return {
      title: 'sobre'
    }
  },
  components: {
    Navbar,
    PageHero,
    CTA,
    Footer
  },
  head() {
    return {
      title: 'Sobre mim',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'sobre-description',
          name: 'sobre-description',
          content: 'Saiba um pouco sobre Diego Corrêa e o seu trabalho.'
        }
      ]
    }
  }
}
</script>

<style></style>
