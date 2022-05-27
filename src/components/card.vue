<template>
  <div class="mt-5 flex flex-col items-center">
    <img class="rounded-xl" :src="image" alt="image concert" />
    <h4 class="mt-5 font-work-sans font-semibold">{{ titre }}</h4>
    <p class="m-2 font-work-sans text-blue-700">{{ genre }}</p>
    <p class="mx-5 mt-5 text-center font-work-sans">{{ presentation }}</p>
    <div class="mt-8 flex gap-12">
      <logoInsta />
      <logoFacebook />
      <logoTwitter />
    </div>
    <bouton-blanc class="mt-10" texte="En savoir plus" />
  </div>
</template>

<script>
import logoInsta from "../components/icons/logoInsta.vue";
import logoFacebook from "../components/icons/logoFacebook.vue";
import logoTwitter from "../components/icons/logoTwitter.vue";
import BoutonBlanc from "../components/bouton_blanc.vue";

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
