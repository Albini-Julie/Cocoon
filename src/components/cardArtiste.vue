<template>
  <div class="mt-5 flex flex-col items-center">
    <img class="h-2/4 w-2/4 rounded-xl" :src="image" alt="image de l'artiste" />
    <h4 class="mt-5 font-work-sans font-semibold">{{ titre }}</h4>
    <p class="m-2 font-work-sans text-blue-700">{{ genre }}</p>
    <p class="mx-5 mt-5 text-center font-work-sans">{{ presentation }}</p>
    <div class="mt-8 flex gap-12">
      <a href="https://www.instagram.com/"><logoInsta /></a>
      <a href="https://www.facebook.com/"><logoFacebook /></a>
      <a href="https://twitter.com/?lang=fr"><logoTwitter /></a>
    </div>
    <router-link to="/Artiste" class="block"><bouton-blanc class="mt-10 w-max">En savoir plus</bouton-blanc></router-link>
  </div>
</template>

<script>
import logoInsta from "./icons/logoInsta.vue";
import logoFacebook from "./icons/logoFacebook.vue";
import logoTwitter from "./icons/logoTwitter.vue";
import BoutonBlanc from "./bouton_blanc.vue";

export default {
  components: {
    logoInsta,
    logoFacebook,
    logoTwitter,
    BoutonBlanc,
  },
  props: {
    image: String,
    presentation: String,
    genre: String,
    titre: String,
  },
};
</script>
