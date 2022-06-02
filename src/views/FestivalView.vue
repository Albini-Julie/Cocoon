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
    <div class="flex flex-col items-center">
      <h3 class="mx-2 text-center font-work-sans text-3xl font-semibold">Découvrez un festival d’un nouveau genre :</h3>
      <img class="mt-10 inline-block w-2/4 dark:hidden" src="../../public/grand-logo.svg" alt="logo Cocoon" />
      <img class="mt-10 hidden w-2/4 dark:inline-block" src="../../public/grandlogo_blanc.svg" alt="logo Cocoon" />
    </div>

    <div class="mx-5 sm:flex sm:items-center">
      <div class="flex flex-col">
        <h4 class="work-sans mt-16 mb-2 ml-2 text-xl font-bold">Le concept</h4>
        <p class="ml-2 font-work-sans">
          Cocoon est un festival unique qui vous propose une expérience inédite : allez dans un monde virtuel pour voir vos artistes
          préférés en concert ! Plus besoin de vous déplacer, de trouver du temps pour vous rendre sur le lieu du concert, aujourd’hui c’est
          le concert qui vient à vous !
        </p>
        <p class="mx-2 mt-5 font-work-sans">
          Lorsque vous allez dans le festival, vous arrivez dans un univers unique virtuel : créez votre avatar et ayez à votre disposition
          : boutiques, salons de discussion, rediffusions et bien sûr des concerts ! Chaque jour, 20 nouveaux concerts du monde entier !
        </p>
      </div>
      <img class="mx-auto" src="../../public/Libre_Droit/joueuse.jpg" alt="utilisatrice casque de réalité virtuelle" />
    </div>

    <div class="mx-5 mt-5 sm:flex sm:items-center">
      <img class="mx-auto" src="../../public/Libre_Droit/3d.jpg" alt="utilisatrice casque de réalité virtuelle" />
      <div class="flex flex-col">
        <h4 class="work-sans mt-16 mb-2 ml-2 text-xl font-bold">L’histoire du projet</h4>
        <p class="mx-2 font-work-sans">
          Cocoon est né pour contrer l’effet destructeur du confinement sur le monde de la culture. En effet, le public étant bloqué chez
          lui, et vu la situation sanitaire de l’époque, toutes les représentations quelles qu’elles soient ne pouvaient avoir lieu.
        </p>
        <p class="mx-2 font-work-sans">
          Cocoon a donc voulu permettre de mettre en lien les artistes et leur public dans un monde à part pour les faire se retrouver.
        </p>
        <p class="mx-2 mt-5 font-work-sans">
          Suite à l’engouement du public pour la première édition du concept de Cocoon, le projet a continué d’évoluer avec une édition 2,
          puis 3.
        </p>
      </div>
    </div>

    <h3 class="mx-2 mt-5 text-center font-work-sans text-3xl font-semibold">Les avantages de Cocoon</h3>
    <div class="mx-2 flex flex-col items-center">
      <div class="mt-5 flex items-center">
        <img class="mr-2" src="../../public/numero1.jpg" alt="numéro 1" />
        <div class="flex flex-col">
          <h4 class="work-sans ml-2 text-xl font-bold">Économie</h4>
          <p class="mx-2 mt-5 font-work-sans">Avec Cocoon, pas de coûts de transport, de baby-sitting, ou de restauration sur place !</p>
        </div>
      </div>

      <div class="mt-5 flex items-center">
        <div class="flex flex-col">
          <h4 class="work-sans ml-2 mb-5 text-xl font-bold">Gain de temps</h4>
          <div class="flex flex-col">
            <p class="font-work-sans">Pas de perte de temps sur les routes : mettez votre casque et l’expérience peut commencer !</p>
            <p class="font-work-sans">
              A la fin du spectacle : pas besoin de chercher sa voiture et d’entamer les bouchons : enlevez votre casque et vous êtes chez
              vous !
            </p>
          </div>
        </div>
        <img class="mr-2 ml-2" src="../../public/numero2.jpg" alt="numéro 2" />
      </div>
    </div>

    <div class="mx-auto mt-5 flex items-center">
      <img class="mr-2" src="../../public/numero3.jpg" alt="numéro 3" />
      <div class="flex flex-col">
        <h4 class="work-sans ml-2 text-xl font-bold">Social</h4>
        <p class="mx-2 mt-5 font-work-sans">
          Grâce à Cocoon, rencontrez des gens qui partagent la même passion que vous plus facilement : les avatars vous rendent anonymes et
          vous permettent donc de plus facilement rentrer en contact avec autrui !
        </p>
      </div>
    </div>

    <div class="grid-auto-flow grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(100px,auto))]">
      <div class="flex w-auto flex-col">
        <img src="../../public/Libre_Droit/joueuse3.jpg" class="object-cover" /><img
          src="../../public/Libre_Droit/concert1.jpg"
          class="object-cover"
        />
      </div>
      <div class="flex w-auto flex-col">
        <img src="../../public/Libre_Droit/concert12.jpg" class="object-cover" /><img
          src="../../public/Libre_Droit/concert8.jpg"
          class="object-none"
        />
      </div>

      <div class="flex w-auto flex-col">
        <img src="../../public/Libre_Droit/concert7.jpg" class="object-cover" /><img
          src="../../public/Libre_Droit/concert4.jpg"
          class="object-cover"
        />
      </div>

      <div class="flex w-auto flex-col">
        <img src="../../public/Libre_Droit/joueur.jpg" class="object-none" /><img
          src="../../public/Libre_Droit/femme.jpg"
          class="object-cover"
        />
      </div>

      <div class="flex w-auto flex-col">
        <img src="../../public/Libre_Droit/concert6.jpg" class="object-cover" /><img
          src="../../public/Libre_Droit/concert5.jpg"
          class="object-cover"
        />
      </div>

      <div class="flex w-auto flex-col">
        <img src="../../public/Libre_Droit/concert11.jpg" class="object-cover" /><img
          src="../../public/Libre_Droit/joueuse2.jpg"
          class="object-cover"
        />
      </div>

      <div class="flex w-auto flex-col">
        <img src="../../public/Libre_Droit/concert3.jpg" class="object-cover" /><img
          src="../../public/Libre_Droit/concert9.jpg"
          class="object-cover"
        />
      </div>

      <div class="flex flex-col">
        <img src="../../public/Libre_Droit/platine.jpg" class="object-cover" /><img
          src="../../public/Libre_Droit/concert10.jpg"
          class="object-cover"
        />
      </div>

      <div class="flex flex-col">
        <img src="../../public/Libre_Droit/concert2.jpg" class="object-none" /><img
          src="../../public/Libre_Droit/joueur3.jpg"
          class="h-2/4 w-2/4 object-none"
        />
      </div>
    </div>
  </div>

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