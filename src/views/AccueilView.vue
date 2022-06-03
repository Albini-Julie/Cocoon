<template>
  <header class="mb-16">
    <div class="md:hidden">
      <HeaderMobile />
    </div>
    <div class="hidden md:block">
      <HeaderOrdi />
    </div>
  </header>
  <div class="dark:bg-black dark:text-white">
    <main class="mx-5">
      <div class="items-center sm:flex">
        <div class="flex flex-col">
          <img class="m-5 inline-block max-w-max dark:hidden" src="../../public/grand-logo.svg" alt="Cocoon" />
          <img class="m-5 hidden dark:inline-block" src="../../public/grandlogo_blanc.svg" alt="Cocoon" />
          <h2 class="ml-5 mt-5 font-work-sans text-2xl font-semibold">C’est quoi ?</h2>
          <p class="ml-5 mb-8 font-work-sans">
            Cocoon est un festival d’un nouveau genre: dans ce festival il n’y a aucun artiste et aucun visiteur en présentiel. Les
            visiteurs ont accès depuis chez eux grâce à des casques de réalité virtuelle, à un monde virtuel dans lequel ils peuvent se
            rencontrer et voir le concert qui les intéresse parmi 20 choix dans le monde entier. Chaque soir, 20 nouveaux concerts !
          </p>
          <div class="flex flex-col items-center">
            <router-link to="/Festival" class="block"><bouton class="w-max"> savoir plus</bouton></router-link>
          </div>
        </div>
        <img class="w-min-2/3 mx-auto mt-5 sm:h-1/3 sm:w-1/3" src="../../public/Libre_Droit/joueur2.jpg" alt="joueur" />
      </div>

      <div class="items-center lg:flex">
        <div class="w-min-1/3 mx-auto mt-5 flex flex-col sm:h-2/4 sm:w-2/4">
          <img class="" src="../../public/Indochine/Indochine_accueil.jpg" alt="image groupe Indochine" />
          <div class="mt-5 flex items-center gap-2">
            <img class="w-2/4" src="../../public/AmelBent/Amel_Bent.jpg" alt="image Amel Bent" />
            <img class="w-2/4" src="../../public/Vald/Vald.jpg" alt="image Vald" />
          </div>
        </div>

        <div class="flex flex-col items-center">
          <p class="float-right mx-5 my-10 w-auto font-work-sans">
            Découvrez tous vos artistes et styles de musique préférés, du rock en passant par le rap sans oublier la pop, dans un univers
            métavers fantastique qui ne vous laissera pas sans souvenir ! Faites des économies d’argent et de temps en restant chez vous
            tout en profitant de vos hits !
          </p>
          <router-link to="/Programmation" class="block"><bouton class="mr-10 w-max"> savoir plus</bouton></router-link>
        </div>
      </div>

      <div class="justify-center sm:flex">
        <h3 class="mt-8 text-center font-work-sans text-3xl font-bold">N'attendez plus et réservez votre place !</h3>
      </div>
      <p class="mx-auto mt-5 text-center">
        Alors enfilez votre casque de réalité virtuelle, et plongez dans un monde unique pour profiter de vos chanteurs et groupes préférés
        !
      </p>
    </main>
  </div>
  <Footer class="mt-16" />
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