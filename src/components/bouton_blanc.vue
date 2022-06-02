<template>
  <div class="anime flex gap-2 rounded-lg border-2 border-blue-700 bg-white p-5">
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