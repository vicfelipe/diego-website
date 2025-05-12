<template>
  <div id="app">
    <header>
      <Navbar />
      <PageHero :title="title" />
    </header>
    <section id="etapas" class="etapas">
      <div class="py-12 bg-white">
        <div class="max-w-screen-xl mx-auto px-12 sm:px-6 lg:px-6">
          <div class="lg:text-left">
            <h3
              class="mt-2 text-2xl font-display-4 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10"
            >
              Etapas do Projeto
              <span class="-ml-2 blinking">_</span>
            </h3>
            <h5 class="font-bold">1. Orçamento e coleta das informações</h5>
            <p
              class="text-gray-800"
            >Neste primeiro passo, entenderei a necessidades do seu projeto e coletarei, através de um questionário, informações necessárias para o desenvolvimento de sua marca.</p>
            <h5 class="font-bold">2. Estudo e desenvolvimento do projeto</h5>
            <p
              class="text-gray-800"
            >Com as informações obtidas, através do questionário, estudarei seu negócio e o seu objetivo no mercado. Desta forma, construirei uma marca com atributos que transmitam valores, sensações e ideias que se conectem ao seu público.</p>
            <h5 class="font-bold">3. Apresentação da marca</h5>
            <p
              class="text-gray-800"
            >Apresentarei todo o processo de criação e o conceito utilizado no desenvolvimento do projeto. Mostrarei também exemplos de aplicação da sua marca em materiais relacionados ao seu segmento.</p>
            <h5 class="font-bold">4. Aprovação e Entrega</h5>
            <p class="text-gray-800">Após a aprovação do projeto te entregarei:</p>
            <ul>
              <li
                class="text-gray-800"
              >A marca em todos os formatos necessários para a utilização em materiais digitais e impressos;</li>
              <li class="text-gray-800">Arquivos dos materiais solicitados (conforme o orçamento);</li>
              <li
                class="text-gray-800"
              >Um manual de identidade visual, que te ensinará todas as especificações de uso para que a sua marca seja aplicada em materiais da forma correta.</li>
            </ul>
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
      title: 'etapas'
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
      title: 'Etapas do Projeto',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'etapas-description',
          name: 'etapas-description',
          content: 'Entenda a metodologia utilizada em cada projeto.'
        }
      ]
    }
  }
}
</script>

<style>
h5 {
  margin: 30px 0 5px 0;
}
.etapas p {
  padding: 0 15px;
}
.etapas ul {
  list-style-type: disc;
  padding: 0 30px;
  margin: 10px 0;
}
</style>