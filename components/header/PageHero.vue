<template>
  <div class="relative overflow-hidden" style="top:-2px;">
    <div class="w-full">
      <img
        class="hero-image h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full"
        :src="'/./img/'+title+'-header.jpg'"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style>
.hero-image {
  height: 400px;
}
</style>