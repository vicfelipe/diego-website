<template>
  <div id="blog-header" class="blog-header" :style="{ backgroundImage: `url(${imgUrl})` }">
    <div class="overlay py-40">
      <div class="container mx-auto">
        <h1
          class="text-3xl md:text-5xl font-display-4 antialiased text-white text-center font-bold"
        >{{ blogTitle }}</h1>
        <p class="text-sm md:text-base font-normal text-white text-center">
          <i>{{ this.$moment(blogDate).locale('pt-br').format('DD') }} de {{ this.$moment(blogDate).locale('pt-br').format('MMMM') }} de {{ this.$moment(blogDate).locale('pt-br').format('YYYY') }}</i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    blogTitle: String,
    blogDate: String,
    imgUrl: String
  }
}
</script>

<style>
.blog-header {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
