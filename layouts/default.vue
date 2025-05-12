<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  overflow-x: hidden;
}
.nuxt-link-exact-active,
.nuxt-link-active {
  color: #81e6d9;
}
.blinking {
  animation: blinkingText 1.2s infinite;
}
@keyframes blinkingText {
  0% {
    color: #4fd1c5;
  }
  50% {
    color: transparent;
  }
  100% {
    color: #4fd1c5;
  }
}
</style>
