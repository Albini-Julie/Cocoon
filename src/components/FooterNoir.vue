<template>
  <div class="flex flex-col items-center bg-gray-900">
    <img class="w-2/4" src="../../../public/grandlogo_blanc.png" alt="image logo Cocoon" />
    <div class="mt-12 flex flex-wrap gap-20">
      <logoInstaBlanc />
      <logoFacebookBlanc />
      <logoTwitterBlanc />
    </div>
    <router-link class="mt-10 font-work-sans font-semibold text-white" to="MentionsLegales">Mentions Légales</router-link>
  </div>
</template>

<script>
import logoInstaBlanc from "../components/icons/logoInsta_blanc.vue";
import logoFacebookBlanc from "../components/icons/logoFacebook_blanc.vue";
import logoTwitterBlanc from "../components/icons/logoTwitter_blanc.vue";

export default {
  components: {
    logoInstaBlanc,
    logoFacebookBlanc,
    logoTwitterBlanc,
  },
};
</script>
