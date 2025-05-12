<template>
  <div class="flex flex-wrap my-4 w-full">
    <div v-for="(blogPost, index) in blogPosts" :key="index" class="w-full md:w-1/3 py-4">
      <nuxt-link :to="`blog/${blogPost.slug}`">
        <div
          class="portfolio-item transition duration-500 ease-in-out shadow-lg group container rounded-md bg-white max-w-sm flex justify-center items-center mx-auto content-div transform hover:-translate-y-1 hover:scale-105"
          @mouseover="hover = index"
          @mouseleave="hover = null"
          :style="'background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(19, 19, 19, 0.1)), url('+ blogPost.imgcapa +')'"
        >
          <div>
            <div class="w-full image-cover rounded-t-md"></div>
          </div>
          <div class="project-title absolute opactiy-0:hover text-left">
            <span
              class="text-1xl font-bold text-white font-display-2 tracking-wider leading-relaxed font-sans"
            >{{blogPost.title}}</span>
            <br />
            <span
              class="leia-mais text-sm text-1x1 text-white font-display-1 tracking-wider leading-relaxed font-sans"
            >Veja mais</span>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hover: null,
      delay: 200
    }
  },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
    }
  }
}
</script>
<style>
.content-div {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.image-cover {
  height: 260px;
}

.project-title {
  bottom: 30px;
  left: 20px;
}
.leia-mais {
  text-decoration: underline;
}

/*
  -remove the classes below if you have the 'group-hover'property added in your tailwind config file
  -also remove the class from the html template
  */
.content-div:hover .fd-cl {
  opacity: 0.25;
}
.content-div:hover .fd-sh {
  opacity: 1;
}
</style>