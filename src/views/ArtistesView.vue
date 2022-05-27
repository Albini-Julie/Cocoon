<template>
  <header class="mb-16">
    <HeaderMobile />
  </header>

  <h3 class="text-center font-work-sans text-3xl font-semibold">Qui sont les invités ?</h3>
  <p class="mt-5 text-center font-work-sans text-[14px]">
    Plusieurs artistes nous ont fait l’honneur de venir pour cette nouvelle édition de Cocoon ! Première participation ou habitués,
    n’hésitez pas à cliquez sur les liens pour en apprendre plus !
  </p>
  <img class="mt-10" src="../../public/artistes_solos.jpg" alt="artistes solos" />

  <card
    image="/public/AmelBent/AmelBent_artiste.webp"
    titre="Amel Bent"
    genre="Pop"
    presentation="Amel Bent est une chanteuse et actrice française de 36 ans. Née dans l’Indre et Loire, c’est sa prestation en 2004 à la saison 2 de Nouvelle Star qui l’a révélée."
  />

  <card
    class="mt-12"
    image="/public/Vald/Vald_artiste.jpg"
    titre="Vald"
    genre="Rap"
    presentation="Vald, ou Valentin Le Du, est né le 15 juillet 1992 en Seine-Saint-Denis et est une figure de la scène du rap français. Remarqué sur Internet par ses montages, ses deux premiers albums ont été récompensés d’un double disque de platine."
  />

  <card
    class="mt-12"
    image="/public/Angèle/Angèle_artiste.jpg"
    titre="Angèle"
    genre="Pop"
    presentation="Angèle Van Laeken de son vrai nom, est une chanteuse, interprète et musicienne belge qui a sorti son premier album en 2018. Elle est très investie dans les causes qui lui tiennent à coeur comme le féminisme, qu’elle défend dans ses chansons."
  />

  <card
    class="mt-12"
    image="/public/Orelsan/Orelsan_artiste.webp"
    titre="Orelsan"
    genre="Rap"
    presentation="Orelsan est un chanteur, rappeur et compositeur français de 39 ans qui a marqué sans aucun doute le rap français. Il se distingue par son originalité et sa capacité à nous faire réfléchir dans ses musiques."
  />

  <img class="mt-10" src="../../public/artistes_groupes.jpg" alt="artistes groupe" />

  <card
    class="mt-12"
    image="/public/Indochine/Indochine_groupe.jpg"
    titre="Indochine"
    genre="Rock"
    presentation="Indochine est un groupe française de pop-rock. Il a été formé en 1981 par Nicolas Sirkis et Dominique Nicolas. Malgré les nombreux changements de musiciens dans le groupe, Indochine aura marqué plus d’une génération avec ses titres."
  />

  <card
    class="mt-12"
    image="/public/Shakaponk/Shakaponk_artiste.jpg"
    titre="Shaka Ponk"
    genre="Rock"
    presentation="Ce groupe de rock alternatif et rock électronique français a été fondé en 2002. Composé de 7 membres, ce groupe aime mélanger plusieurs styles musicaux pour ses créations."
  />

  <footerblanc class="mt-16" />
</template>

<script>
import HeaderMobile from "../components/HeaderMobile.vue";
import card from "../components/card.vue";
import footerblanc from "../components/FooterBlanc.vue";

export default {
  components: {
    HeaderMobile,
    card,
    footerblanc,
  },
};
</script>
