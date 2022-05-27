<template>
  <div class="mt-5 flex flex-col items-center">
    <img class="rounded-xl" :src="image" alt="image concert" />
    <h4 class="mt-5 font-work-sans font-semibold">{{ titre }}</h4>
    <p class="m-2 font-work-sans text-blue-700">{{ genre }}</p>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    presentation: String,
    genre: String,
    titre: String,
  },
};
</script>
