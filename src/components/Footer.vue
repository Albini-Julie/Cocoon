<template>
  <div class="flex flex-col items-center">
    <img
      v-if="$route.name === 'Artiste' || $route.name === 'Concert' || $route.name === 'Contact'"
      class="w-2/4"
      src="../../../public/grandlogo_blanc.png"
      alt="image logo Cocoon"
    />
    <img v-else class="w-2/4" src="../../../public/grand-logo.png" alt="image logo Cocoon" />
    <div class="mt-12 flex flex-wrap gap-20">
      <logoInstaBlanc v-if="$route.name === 'Artiste' || $route.name === 'Concert' || $route.name === 'Contact'" />
      <logoInsta v-else />
      <logoFacebookBlanc v-if="$route.name === 'Artiste' || $route.name === 'Concert' || $route.name === 'Contact'" />
      <logoFacebook v-else />
      <logoTwitterBlanc v-if="$route.name === 'Artiste' || $route.name === 'Concert' || $route.name === 'Contact'" />
      <logoTwitter v-else />
    </div>
    <router-link class="mt-10 font-work-sans font-semibold" to="MentionsLegales">Mentions Légales</router-link>
  </div>
</template>

<script>
import logoInsta from "./icons/logoInsta.vue";
import logoFacebook from "./icons/logoFacebook.vue";
import logoTwitter from "./icons/logoTwitter.vue";
import logoInstaBlanc from "./icons/logoInsta_blanc.vue";
import logoFacebookBlanc from "./icons/logoFacebook_blanc.vue";
import logoTwitterBlanc from "./icons/logoTwitter_blanc.vue";

export default {
  components: {
    logoInsta,
    logoFacebook,
    logoTwitter,
    logoInstaBlanc,
    logoFacebookBlanc,
    logoTwitterBlanc,
  },
};
</script>
