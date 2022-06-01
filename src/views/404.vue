<template>
  <main class="-mt-5 dark:bg-black dark:text-white">
    <header class="mb-16">
      <div class="md:hidden"><HeaderMobile /></div>
      <div class="hidden md:block">
        <HeaderOrdi />
      </div>
    </header>

    <div class="flex flex-col justify-center">
      <div class="flex justify-center">
        <h2 class="text-center font-work-sans text-5xl font-semibold">Page introuvable</h2>
      </div>
      <p class="mx-5 mt-5 mb-20 text-center font-work-sans text-white">
        Nous sommmes désolés mais la page que vous demandez ne semble pas exister ! Redirigez-vous vers une page connue de Cocoon via la
        carte du site ou vers un site externe grâce à la barre de recherche !
      </p>
    </div>

    <form class="justify-center sm:flex" action="https://duckduckgo.com/" method="GET" x-data="{ q:'', }" x-on:submit="q = q'">
      <input
        class="m-5 border-b-2 border-gray-900 border-b-white bg-gray-900 text-white dark:bg-black"
        placeholder="Votre recherche"
        type="text"
        id="q"
        name="q"
        x-model="q"
      />
      <button class="ml-10 mt-5 flex w-max gap-2 rounded-lg bg-indigo-800 p-5 font-work-sans font-semibold text-white" type="submit">
        Search
        <flechedroite />
      </button>
    </form>

    <div class="flex flex-col items-center">
      <h3 class="mt-10 ml-5 font-work-sans text-2xl font-semibold">Plan du site</h3>
      <div class="flex flex-col">
        <router-link to="/" class="my-5 ml-5 font-work-sans text-lg font-medium">Accueil</router-link>
        <div class="flex items-center gap-5">
          <router-link to="/Artistes" class="ml-5 font-work-sans text-lg font-medium">Artistes</router-link>
          <chevron class="items-end" />
          <router-link to="/Artiste" class="font-work-sans text-lg font-medium">Artiste</router-link>
        </div>
        <router-link to="/Contact" class="mt-5 ml-5 font-work-sans text-lg font-medium">Contact</router-link>
        <router-link to="/Mentionslegales" class="my-5 ml-5 font-work-sans text-lg font-medium">Mentions légales</router-link>
        <div class="flex items-center gap-5">
          <router-link to="/Programmation" class="ml-5 font-work-sans text-lg font-medium">Programmation</router-link>
          <chevron class="items-end" />
          <router-link to="/Concert" class="font-work-sans text-lg font-medium">Concert</router-link>
        </div>
        <router-link to="/Festival" class="mt-5 ml-5 font-work-sans text-lg font-medium">Festival</router-link>
      </div>
    </div>
  </main>
  <Footer class="mt-16" />
</template>


<script>
import HeaderMobile from "../components/HeaderMobile.vue";
import HeaderOrdi from "../components/HeaderOrdi.vue";
import Footer from "../components/Footer.vue";
import bouton from "../components/bouton.vue";
import chevron from "../components/icons/chevronBlanc.vue";
import flechedroite from "../components/icons/flechedroite.vue";

export default {
  components: {
    HeaderMobile,
    HeaderOrdi,
    Footer,
    bouton,
    chevron,
    flechedroite,
  },
};
</script>