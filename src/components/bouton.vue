<template>
  <div class="flex gap-2 rounded-lg bg-indigo-800 p-5">
    <router-link class="font-work-sans font-semibold text-white" to="Festival">{{ texte }}</router-link>
    <flechedroite />
  </div>
</template>

<script>
import flechedroite from "../components/icons/flechedroite.vue";

export default {
  components: {
    flechedroite,
  },
  props: {
    texte: String,
  },
};
</script>
