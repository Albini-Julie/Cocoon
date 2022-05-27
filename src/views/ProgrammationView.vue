<template>
  <header class="mb-16">
    <HeaderMobile />
  </header>

  <h3 class="text-center font-work-sans text-3xl font-semibold">Qu’est ce qu’il y a au programme ?</h3>
  <p class="mt-5 text-center font-work-sans text-[14px]">
    Découvrez la liste exhaustive de tous les concerts aux programmes de l’édition 2022 de Cocoon et réservez votre place !
  </p>
  <img class="mt-10" src="../../public/musique_rock.jpg" alt="musique rock" />
  <card image="/public/Indochine/Indochine.jpg" titre="Concert : Indochine" genre="Rock" />
</template>

<script>
import HeaderMobile from "../components/HeaderMobile.vue";
import card from "../components/card.vue";

export default {
  components: {
    HeaderMobile,
    card,
  },
};
</script>
