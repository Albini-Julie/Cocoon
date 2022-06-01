<template>
  <main class="-mt-5">
    <header class="mb-16">
      <div class="md:hidden"><Header /></div>
      <div class="hidden md:block">
        <HeaderOrdi />
      </div>
    </header>

    <div class="flex flex-col justify-center">
      <div class="flex justify-center">
        <h2 class="font-work-sans text-5xl font-semibold">Page introuvable</h2>
      </div>
      <p class="mx-5 mt-5 mb-20 text-center font-work-sans text-white">
        Nous sommmes désolés mais la page que vous demandez ne semble pas exister ! Redirigez-vous vers une page connue de Cocoon via la
        carte du site ou vers un site externe grâce à la barre de recherche !
      </p>
    </div>

    <form class="flex justify-center gap-10" action="https://duckduckgo.com/" method="GET" x-data="{ q:'', }" x-on:submit="q = q'">
      <input
        class="border-b-2 border-gray-900 border-b-white bg-gray-900 text-white"
        placeholder="Votre recherche"
        type="text"
        id="q"
        name="q"
        x-model="q"
      />
      <bouton class="mr-10 w-max">Search</bouton>
    </form>

    <h3 class="mt-10 ml-5 font-work-sans text-xl font-semibold">Plan du site</h3>
    <div class="flex flex-col">
      <router-link to="/" class="mt-5 ml-5 font-work-sans text-lg font-medium">Accueil</router-link>
      <div class="flex">
        <router-link to="/Artistes" class="mt-5 ml-5 font-work-sans text-lg font-medium">Artistes</router-link>
        <chevron  />
        <router-link to="/Artiste" class="mt-5 ml-5 font-work-sans text-lg font-medium">Artiste</router-link>
      </div>
      <router-link to="/Concert" class="mt-5 ml-5 font-work-sans text-lg font-medium">Concert</router-link>
      <router-link to="/Contact" class="mt-5 ml-5 font-work-sans text-lg font-medium">Contact</router-link>
      <router-link to="/Mentionslegales" class="mt-5 ml-5 font-work-sans text-lg font-medium">Mentions légales</router-link>
      <router-link to="/Programmation" class="mt-5 ml-5 font-work-sans text-lg font-medium">Programmation</router-link>
      <router-link to="/Festival" class="mt-5 ml-5 font-work-sans text-lg font-medium">Festival</router-link>
    </div>
  </main>
</template>


<script>
import HeaderMobile from "../components/HeaderMobile.vue";
import HeaderOrdi from "../components/HeaderOrdi.vue";
import Footer from "../components/Footer.vue";
import bouton from "../components/bouton.vue";
import chevron from "../components/icons/chevronBlanc.vue";

export default {
  components: {
    HeaderMobile,
    HeaderOrdi,
    Footer,
    bouton,
    chevron,
  },
};
</script>