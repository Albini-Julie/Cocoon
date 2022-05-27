<template>
  <div class="flex gap-2 rounded-lg border-2 border-blue-700 bg-white p-5">
    <router-link class="font-work-sans font-semibold text-blue-700" to="Festival">{{ texte }}</router-link>
    <flechedroiteBleu />
  </div>
</template>

<script>
import flechedroiteBleu from "../components/icons/flechedroiteBleu.vue";

export default {
  components: {
    flechedroiteBleu,
  },
  props: {
    texte: String,
  },
};
</script>