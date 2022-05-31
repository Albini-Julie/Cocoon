<template>
  <header class="mb-16">
    <div class="md:hidden">
      <HeaderMobile />
    </div>
    <div class="hidden md:block w-2/4 h-2/4">
      <HeaderOrdi />
    </div>
  </header>
  <main class="ml-5">
    <div class="flex items-center">
      <div class="flex flex-col">
        <img class="w-1/2" src="../../public/moyen-logo.svg" alt="Cocoon" />
        <h2 class="m- mt-5 font-work-sans text-2xl font-semibold">C’est quoi ?</h2>
        <p class="mb-8 font-work-sans">
          Cocoon est un festival d’un nouveau genre: dans ce festival il n’y a aucun artiste et aucun visiteur en présentiel. Les visiteurs
          ont accès depuis chez eux grâce à des casques de réalité virtuelle, à un monde virtuel dans lequel ils peuvent se rencontrer et
          voir le concert qui les intéresse parmi 20 choix dans le monde entier. Chaque soir, 20 nouveaux concerts !
        </p>
        <router-link to="/Festival" class="block"><bouton class="w-max"> savoir plus</bouton></router-link>
      </div>
      <img class="m-5 h-2/4 w-2/4" src="../../public/Libre_Droit/joueur2.jpg" alt="joueur" />
    </div>

    <div class="flex items-center">
      <div class="mt-5 flex flex-col">
        <img class="" src="../../public/Indochine/Indochine_accueil.jpg" alt="image groupe Indochine" />
        <div class="mt-5 flex items-center gap-2">
          <img class="w-2/4" src="../../public/AmelBent/Amel_Bent.jpg" alt="image Amel Bent" />
          <img class="w-2/4" src="../../public/Vald/Vald.jpg" alt="image Vald" />
        </div>
      </div>
      <p class="float-right mx-5 w-auto font-work-sans">
        Découvrez tous vos artistes et styles de musique préférés, du rock en passant par le rap sans oublier la pop, dans un univers
        métavers fantastique qui ne vous laissera pas sans souvenir ! Faites des économies d’argent et de temps en restant chez vous tout en
        profitant de vos hits !
      </p>
    </div>
    <div class="flex justify-end">
      <router-link to="/Programmation" class="block"><bouton class="mr-10 w-max"> savoir plus</bouton></router-link>
    </div>

    <div class="flex justify-center">
      <h3 class="mt-8 text-center font-work-sans text-3xl font-bold">N'attendez plus et réservez votre place !</h3>
    </div>
    <p class="mx-20 mt-2 text-center">
      Alors enfilez votre casque de réalité virtuelle, et plongez dans un monde unique pour profiter de vos chanteurs et groupes préférés !
    </p>
    <Footer class="mt-16" />
  </main>
</template>

<script>
import HeaderMobile from "../components/HeaderMobile.vue";
import bouton from "../components/bouton.vue";
import Footer from "../components/Footer.vue";
import HeaderOrdi from "../components/HeaderOrdi.vue";

export default {
  components: { HeaderMobile, bouton, Footer, HeaderOrdi },
};
</script>