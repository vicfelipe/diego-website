<template>
  <div id="app">
    <Navbar />
    <article>
      <header>
        <BlogHero
          :blogTitle="blogPost.title"
          :blogDate="blogPost.date"
          :imgUrl="blogPost.imgdestaque"
        />
      </header>
      <div class="container p-10 lg:px-40 mx-auto" v-html="$md.render(blogPost.body)">
        <!--Author-->
        <div class="flex w-full items-center font-sans px-4 py-12">
          <img
            class="w-20 h-20 rounded-full mr-4"
            src="http://i.pravatar.cc/300"
            alt="Diego Corrêa - DCorrea Design"
          />
          <div class="flex-1 px-2">
            <p class="text-base font-bold text-base md:text-xl leading-none mb-2">Diego Corrêa</p>
            <p class="text-gray-600 text-sm">
              Especialista em projetos de identidade visual.
              <br />Formado e pós-graduado como Especialista em Design Gráfico, com foco no desenvolvimento de marcas.
            </p>
          </div>
        </div>
        <!--/Author-->

        <!--Divider-->
        <hr class="border-b-2 border-gray-400 mb-8 mx-4" />
      </div>
    </article>
    <CTA />
    <Footer />
  </div>
</template>
<script>
import Navbar from '~/components/header/Navbar'
import BlogHero from '~/components/header/BlogHero'
import CTA from '~/components/cta/Index'
import Footer from '~/components/footer/Index'

export default {
  components: {
    Navbar,
    BlogHero,
    CTA,
    Footer
  },
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload }
    else
      return {
        blogPost: await require(`~/site/content/blog/${params.blog}.json`),
        slug: params.blog
      }
  },
  head() {
    return {
      title: this.blogPost.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.blogPost.description
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://dcorreadesign.com.br/blog/' + this.slug
        }
      ]
    }
  }
}
</script>
<style>
h1,
h2,
h3,
h4,
h5 {
  font-weight: 500;
  margin: 5px 0;
  letter-spacing: -0.025em;
}

h1 {
  font-size: 1.875rem;
}
h2 {
  font-size: 1.5rem;
}
h3 {
  font-size: 1.375rem;
}
h4 {
  font-size: 1.175rem;
}
h5 {
  font-size: 1rem;
}

p {
  --text-opacity: 1;
  color: #2d3748;
  color: rgba(45, 55, 72, var(--text-opacity));
  line-height: 1.725rem;
}
p + p {
  margin: 15px 0;
}
@media screen and (max-width: 600px) {
  h1 {
    font-size: 1.575rem;
  }
}
</style>