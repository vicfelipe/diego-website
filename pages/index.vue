<template>
  <div id="app">
    <header>
      <Navbar />
      <Hero />
    </header>
    <section id="home">
      <SecaoHome />
    </section>
    <section id="projetos">
      <Blog />
    </section>
    <section id="cta">
      <CTA />
    </section>
    <Footer />
  </div>
</template>

<script>
import Hero from '~/components/header/Hero'
import Navbar from '~/components/header/Navbar'
import SecaoHome from '~/components/home/Secao1'
import Blog from '~/components/blog/Blog'
import CTA from '~/components/cta/Index'
import Footer from '~/components/footer/Index'

export default {
  components: {
    Hero,
    Navbar,
    SecaoHome,
    Blog,
    CTA,
    Footer
  }
}
</script>