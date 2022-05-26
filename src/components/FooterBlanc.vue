<template>
  <div class="flex flex-col items-center bg-white">
    <img class="w-2/4" src="../../../public/grand-logo.png" alt="image logo Cocoon" />
    <div class="mt-12 flex flex-wrap gap-20">
      <logoInsta />
      <logoFacebook />
      <logoTwitter />
    </div>
    <router-link class="mt-10 font-work-sans font-semibold" to="MentionsLegales">Mentions Légales</router-link>
  </div>
</template>

<script>
import logoInsta from "../components/icons/logoInsta.vue";
import logoFacebook from "../components/icons/logoFacebook.vue";
import logoTwitter from "../components/icons/logoTwitter.vue";

export default {
  components: {
    logoInsta,
    logoFacebook,
    logoTwitter,
  },
};
</script>
