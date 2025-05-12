<template>
  <div class="max-w-screen-xl mx-auto px-12 sm:px-6 lg:px-6">
    <h3
      class="mt-2 text-2xl font-display-4 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10"
    >
      Projetos que desenvolvi
      <span class="-ml-2 blinking">_</span>
    </h3>
    <BlogPosts />
  </div>
</template>

<script>
import BlogPosts from '~/pages/blog/index'
export default {
  components: {
    BlogPosts
  }
}
</script>

<style>
</style>