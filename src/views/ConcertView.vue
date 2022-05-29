<template>
  <main class="-mt-5 bg-gray-900">
    <HeaderNoir class="mb-16 pt-5" />

    <div class="flex flex-col items-center">
      <h3 class="mx-2 text-center font-work-sans text-3xl font-semibold text-white">Orelsan au festival Cocoon !</h3>
      <p class="mt-5 mb-10 text-center font-work-sans text-[14px] text-white">
        Orelsan nous fait également l’honneur de revenir pour Cocoon 2022 ! C’est avec un grand plaisir que nous l’accueillons puisqu’il a
        préparé une surprise pour cette nouvelle participation...
      </p>
    </div>

    <div class="flex">
      <img class="w-2/4" src="../../public/Orelsan/img1_PageConcert.jpg" alt="Orelsan" />
      <div class="flex w-2/4 flex-wrap items-center justify-center">
        <p class="font-work-sans text-white">28 mai 2022</p>
      </div>
    </div>

    <div class="flex">
      <div class="flex w-2/4 flex-wrap items-center justify-center">
        <p class="text-center font-work-sans text-white">20h30 - Scène 3D</p>
      </div>
      <img class="w-2/4" src="../../public/Orelsan/img2_PageConcert.jpg" alt="Orelsan" />
    </div>

    <div class="grid-auto-flow mt-16 grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(100px,auto))]">
      <div class="flex w-auto flex-col">
        <img src="../../public/Orelsan/O_img5.jpg" class="object-cover" /><img src="../../public/Orelsan/O_img8.jpg" class="object-cover" />
      </div>
      <div class="flex w-auto flex-col">
        <img src="../../public/Orelsan/O_img7.jpg" class="object-cover" /><img src="../../public/Orelsan/O_img9.jpg" class="object-none" />
      </div>

      <div class="flex w-auto flex-col">
        <img src="../../public/Orelsan/Orelsan_concert.jpg" class="object-cover" /><img
          src="../../public/Orelsan/O_img10.jpg"
          class="object-cover"
        />
      </div>

      <div class="flex w-auto flex-col">
        <img src="../../public/Orelsan/O_img4.jpg" class="object-none" /><img src="../../public/Orelsan/O_img6.jpg" class="object-cover" />
      </div>

      <div class="flex w-auto flex-col">
        <img src="../../public/Orelsan/O_img1.jpg" class="object-cover" /><img
          src="../../public/Orelsan/O_img2.webp"
          class="object-cover"
        />
      </div>

      <div class="flex w-auto flex-col">
        <img src="../../public/Orelsan/le-rappeur-est-arrive-sur-scene-masque-danO_img1.jpg" class="object-cover" />
        />
      </div>
    </div>

    <footerNoir class="mt-16" />
  </main>
</template>

<script>
import HeaderNoir from "../components/HeaderMobile_noir.vue";
import footerNoir from "../components/FooterNoir.vue";

export default {
  components: {
    HeaderNoir,
    footerNoir,
  },
};
</script>