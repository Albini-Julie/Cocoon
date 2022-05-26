<template>
  <header class="mb-16">
    <HeaderMobile />
  </header>
  <main class="ml-5">
    <div class="flex">
      <div class="flex flex-col">
        <img class="w-3/4" src="../../public/moyen-logo.jpg" alt="Cocoon" />
        <h2 class="m- mt-5 font-work-sans text-2xl font-semibold">C’est quoi ?</h2>
        <p class="mb-8 font-work-sans text-[14px]">
          Cocoon est un festival d’un nouveau genre: dans ce festival il n’y a aucun artiste et aucun visiteur en présentiel. Les visiteurs
          ont accès depuis chez eux grâce à des casques de réalité virtuelle, à un monde virtuel dans lequel ils peuvent se rencontrer et
          voir le concert qui les intéresse parmi 20 choix dans le monde entier. Chaque soir, 20 nouveaux concerts !
        </p>
        <bouton texte="En savoir plus" />
        <span class="sr-only">En savoir plus</span>
      </div>
      <img class="m-5 h-2/4 w-2/4" src="../../public/Libre_Droit/joueur2.jpg" alt="joueur" />
    </div>

    <div class="flex items-center">
      <div class="mt-5 flex flex-col">
        <img class="h-2/4 w-2/4" src="../../public/Indochine/Indochine_accueil.jpg" alt="image groupe Indochine" />
        <div class="mt-5 flex flex-wrap items-center gap-6">
          <img class="h-1/4 w-1/4" src="../../public/AmelBent/Amel_Bent.jpg" alt="image Amel Bent" />
          <img class="h-1/5 w-1/5" src="../../public/Vald/Vald.jpg" alt="image Vald" />
        </div>
      </div>
      <p class="float-right w-auto font-work-sans text-[14px]">
        Découvrez tous vos artistes et styles de musique préférés, du rock en passant par le rap sans oublier la pop, dans un univers
        métavers fantastique qui ne vous laissera pas sans souvenir ! Faites des économies d’argent et de temps en restant chez vous tout en
        profitant de vos hits !
      </p>
    </div>
    <div class="flex justify-end">
      <bouton class="m-5" texte="En savoir plus" />
      <span class="sr-only">En savoir plus</span>
    </div>

    <div class="flex justify-center">
      <h3 class="mt-8 font-work-sans text-3xl font-bold">N'attendez plus et réservez votre place !</h3>
    </div>
    <p class="mx-20 mt-2 text-center">
      Alors enfilez votre casque de réalité virtuelle, et plongez dans un monde unique pour profiter de vos chanteurs et groupes préférés !
    </p>
  </main>

  <RouterView />
</template>

<script>
import HeaderMobile from "../components/HeaderMobile.vue";
import bouton from "../components/bouton.vue";

export default {
  components: { HeaderMobile, bouton },
};
</script>