<template >
  <header class="mb-16">
    <HeaderMobile />
  </header>

  <main class="ml-5 flex">
    <div class="flex flex-col">
      <div class="flex">
        <div class="flex flex-col">
          <img class="w-3/4" src="../public/moyen-logo.jpg" alt="Cocoon" />
          <h2 class="m- mt-5 font-work-sans text-2xl font-semibold">C’est quoi ?</h2>
          <p class="font-work-sans text-[14px]">
            Cocoon est un festival d’un nouveau genre: dans ce festival il n’y a aucun artiste et aucun visiteur en présentiel. Les
            visiteurs ont accès depuis chez eux grâce à des casques de réalité virtuelle, à un monde virtuel dans lequel ils peuvent se
            rencontrer et voir le concert qui les intéresse parmi 20 choix dans le monde entier. Chaque soir, 20 nouveaux concerts !
          </p>
        </div>
        <img class="w-2/4" src="../public/Libre_Droit/joueur2.jpg" alt="joueur" />
      </div>
      <bouton />
    </div>
  </main>

  <RouterView />
</template>

<script>
import HeaderMobile from "./components/HeaderMobile.vue";
import bouton from "./components/bouton.vue";

export default {
  components: { HeaderMobile, bouton },
};
</script>