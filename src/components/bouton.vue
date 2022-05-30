<template>
  <div class="flex gap-2 rounded-lg bg-indigo-800 p-5">
    <span class="font-work-sans font-semibold text-white"><slot /></span>
    <flechedroite />
  </div>
</template>

<script>
import flechedroite from "../components/icons/flechedroite.vue";

export default {
  components: {
    flechedroite,
  },
};
</script>
