<template>
  <header class="mb-16">
    <div class="md:hidden">
      <HeaderMobile />
    </div>
    <div class="hidden md:block">
      <HeaderOrdi />
    </div>
  </header>

  <h3 class="mx-2 text-center font-work-sans text-3xl font-semibold">Qu’est ce qu’il y a au programme ?</h3>
  <p class="mt-5 text-center font-work-sans text-[14px]">
    Découvrez la liste exhaustive de tous les concerts aux programmes de l’édition 2022 de Cocoon et réservez votre place !
  </p>
  <img class="mt-10" src="../../public/musique_rock.jpg" alt="musique rock" />

  <card
    image="/public/Indochine/Indochine.jpg"
    titre="Concert : Indochine"
    genre="Rock"
    presentation="Venez découvrir Indochine lors de leur concert dans le festival Cocoon ! De leurs nouvelles musiques à leurs sons mythiques revivez les sensations qui vous ont fait vibrer !"
  />

  <card
    class="mt-12"
    image="/public/Shakaponk/ShakaPonk.jpg"
    titre="Concert : Shakaponk"
    genre="Rock"
    presentation="Shaka Ponk fait partie de nos concerts phares pour cette nouvelle édition de Cocoon ! Venez voir leur show spectaculaire en réalité 
virtuelle ! "
  />

  <img class="mt-10" src="../../public/musique_pop.jpg" alt="musique pop" />

  <card
    class="mt-12"
    image="/public/AmelBent/AmelBent_concert.webp"
    titre="Concert : Amel Bent"
    genre="Pop"
    presentation="Amel Bent sera en concert à Cocoon pour nous chanter ses magnifiques musiques qui ont fait danser toutes les générations"
  />

  <card
    class="mt-12"
    image="/public/Angèle/Angele_concert.jpg"
    titre="Concert : Angèle"
    genre="Pop"
    presentation="Angèle nous fait l’honneur de revenir pour l’édition 2022 de Cocoon ! Venez découvrir l’univers merveilleux d’Angèle mélangé à la réalité virtuelle !"
  />

  <img class="mt-10" src="../../public/musique_rap.jpg" alt="musique rap" />

  <card
    class="mt-12"
    image="/public/Orelsan/Orelsan_concert.jpg"
    titre="Concert : Orelsan"
    genre="Rap"
    presentation="Orelsan nous fait également l’honneur de revenir pour Cocoon 2022 ! C’est avec un grand plaisir que nous l’accueillons puisqu’il a préparé une surprise pour cette nouvelle participation..."
  />

  <card
    class="mt-12"
    image="/public/Vald/Vald_concert.jpg"
    titre="Concert : Vald"
    genre="Rap"
    presentation="Pour sa première participation, Vald va nous proposer un concert puissant et énergique comme à son habitude ! Il pourrait bien se joindre à la surprise de Orelsan..."
  />

  <Footer class="mt-16" />
</template>

<script>
import HeaderMobile from "../components/HeaderMobile.vue";
import card from "../components/cardConcert.vue";
import Footer from "../components/Footer.vue";
import HeaderOrdi from "../components/HeaderOrdi.vue";

export default {
  components: {
    HeaderMobile,
    card,
    Footer,
    HeaderOrdi,
  },
};
</script>
