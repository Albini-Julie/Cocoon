<template>
  <div class="m-5 flex flex-wrap justify-between">
    <router-link to="/">
      <img
        v-if="$route.name === 'Artiste' || $route.name === 'Concert' || $route.name === 'Contact'"
        src="../../public/logomenu_blanc.svg"
        alt="logo Cocoon" />
      <img v-else src="../../public/logomenu.svg" alt="logo Cocoon"
    /></router-link>
    <button class="relative z-50" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
      <MenuBlanc v-if="$route.name === 'Artiste' || $route.name === 'Concert' || $route.name === 'Contact'" class="mx-5" />
      <Menu v-else class="mx-5" />
      <span class="sr-only">Menu</span>
    </button>
  </div>

  <div
    class="fixed inset-0 translate-x-full motion-safe:transition-transform motion-safe:duration-1000"
    :class="[
      $route.name === 'Artiste' || $route.name === 'Concert' || $route.name === 'Contact'
        ? 'bg-gray-900 text-white'
        : 'bg-white text-black',
      menuOuvert ? 'translate-x-0' : '',
    ]"
  >
    <div class="flex justify-center">
      <ul class="sm:flex">
        <div class="flex flex-col">
          <li class="mt-5"><router-link to="/Programmation">Programmation</router-link></li>
          <li class="mt-5"><router-link to="/Artistes">Artistes</router-link></li>
          <li class="mt-5"><router-link to="/Festival">Festival</router-link></li>
          <div class="mt-5 flex flex-wrap items-center gap-2">
            <li><router-link to="/Contact">Contact</router-link></li>
            <chevronbas />
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>


<script>
import Menu from "../components/icons/Menu.vue";
import MenuBlanc from "../components/icons/Menu_blanc.vue";

export default {
  data: function () {
    return {
      menuOuvert: false,
    };
  },
  components: { Menu, MenuBlanc },
};
</script>
