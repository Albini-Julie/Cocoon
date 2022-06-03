<template>
  <div class="anime flex items-center gap-2 rounded-lg bg-indigo-800 p-5">
    <span class="font-work-sans text-2xl font-semibold text-white"><slot /></span>
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

<style >
.anime:hover {
  animation: saut 1.5s ease 0s 1 normal forwards;
}

@keyframes saut {
  0%,
  50%,
  100% {
    transform: scale(1);
  }

  25%,
  75% {
    transform: scale(0.8);
  }
}
</style>