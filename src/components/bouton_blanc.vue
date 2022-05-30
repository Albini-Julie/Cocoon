<template>
  <div class="flex gap-2 rounded-lg border-2 border-blue-700 bg-white p-5">
    <span class="font-work-sans font-semibold text-blue-700"><slot /></span>
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