<template>
  <!-- This example requires Tailwind CSS v1.4.0+ -->
  <div class="menu-home relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
      >
        <div class="lg:w-0 lg:flex-1">
          <a href="/" class="flex text-gray-900 text-xl font-display-3" title="dcorrea design">
            <img src="/./img/logo_dcorrea.svg" alt="dcorrea design Logo" style="width: 120px;" />
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            @click="isOn = !isOn"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-teal-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-indigo-500 transition duration-150 ease-in-out"
          >
            <svg
              class="h-6 w-6"
              :class="isOn ? 'translate-x-5' : 'translate-x-0'"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav class="hidden md:flex space-x-10">
          <div class="relative">
            <!-- Item active: "text-gray-900", Item inactive: "text-indigo-500" -->
            <nuxt-link
              to="/#projetos"
              class="text-base leading-6 font-medium text-gray-900 hover:text-teal-600 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
            >Projetos</nuxt-link>
          </div>

          <nuxt-link
            to="/sobre"
            class="text-base leading-6 font-medium text-gray-900 hover:text-teal-600 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
          >Sobre</nuxt-link>
          <nuxt-link
            to="/etapas"
            class="text-base leading-6 font-medium text-gray-900 hover:text-teal-600 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
          >Etapas do Projeto</nuxt-link>

          <nuxt-link
            to="/contato"
            class="text-base leading-6 font-medium text-gray-900 hover:text-teal-600 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
          >Contato</nuxt-link>
        </nav>
        <div class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
          <span class="inline-flex rounded-md shadow-sm">
            <a
              href="https://form.jotform.com/201708310944652"
              class="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal active:bg-teal-700 transition ease-in-out duration-150"
              target="_blank"
            >Solicitar Orçamento</a>
          </span>
        </div>
      </div>
    </div>
    <transition
      enter-active-class="duration-200 ease-out"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-show="isOn"
        class="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div class="rounded-lg shadow-lg">
          <div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5 space-y-6">
              <div class="flex items-center justify-between">
                <div>
                  <nuxt-link to="/" class="flex text-gray-900 text-xl font-display-3">
                    <img src="/./img/logo_dcorrea.svg" width="180px" alt="dcorrea design Logo" />
                  </nuxt-link>
                </div>
                <div class="-mr-2">
                  <button
                    type="button"
                    @click="isOn = !isOn"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-teal-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-indigo-500 transition duration-150 ease-in-out"
                  >
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <nav class="grid row-gap-8">
                  <nuxt-link
                    to="/#projetos"
                    class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <div
                      class="text-base leading-6 font-medium text-gray-900 hover:text-teal-600 transition ease-in-out duration-150"
                    >Projetos</div>
                  </nuxt-link>
                  <nuxt-link
                    to="/sobre"
                    class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <div
                      class="text-base leading-6 font-medium text-gray-900 hover:text-teal-600 transition ease-in-out duration-150"
                    >Sobre</div>
                  </nuxt-link>
                  <nuxt-link
                    to="/etapas"
                    class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <div
                      class="text-base leading-6 font-medium text-gray-900 hover:text-teal-600 transition ease-in-out duration-150"
                    >Etapas do Projeto</div>
                  </nuxt-link>
                  <nuxt-link
                    to="/contato"
                    class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:text-teal-600 transition ease-in-out duration-150"
                  >
                    <div
                      class="text-base leading-6 font-medium text-gray-900 hover:text-teal-600 transition ease-in-out duration-150"
                    >Contato</div>
                  </nuxt-link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOn: false
    }
  }
}
</script>

<style>
</style>