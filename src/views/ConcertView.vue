<template>
  <main class="-mt-5 bg-gray-900">
    <header class="mb-16">
      <div class="md:hidden"><Header /></div>
      <div class="hidden md:block">
        <HeaderOrdi />
      </div>
    </header>

    <div class="flex flex-col sm:items-center">
      <h3 class="mx-2 text-center font-work-sans text-3xl font-semibold text-white">Orelsan au festival Cocoon !</h3>
      <p class="mt-5 mb-10 text-center font-work-sans text-white">
        Orelsan nous fait également l’honneur de revenir pour Cocoon 2022 ! C’est avec un grand plaisir que nous l’accueillons puisqu’il a
        préparé une surprise pour cette nouvelle participation...
      </p>
    </div>

    <div class="sm:flex">
      <img class="w-full sm:w-2/4" src="../../public/Orelsan/img1_PageConcert.jpg" alt="Orelsan" />
      <div class="flex flex-wrap items-center justify-center sm:w-2/4">
        <p class="font-work-sans text-[28px] text-white">28 mai 2022</p>
      </div>
    </div>

    <div class="sm:flex">
      <div class="flex flex-auto items-center justify-center sm:w-2/4">
        <p class="text-center font-work-sans text-[28px] text-white">20h30 - Scène 3D</p>
      </div>
      <img class="w-full sm:w-2/4" src="../../public/Orelsan/img2_PageConcert.jpg" alt="Orelsan" />
    </div>

    <div class="grid-auto-flow mt-16 grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(100px,auto))]">
      <div class="flex w-auto flex-col">
        <img src="../../public/Orelsan/O_img5.jpg" class="object-cover" /><img src="../../public/Orelsan/O_img8.jpg" class="object-cover" />
      </div>
      <div class="flex w-full flex-col">
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
          src="../../public/Orelsan/O_img2.jpg"
          class="object-cover"
        />
      </div>

      <div class="flex w-auto flex-col">
        <img src="../../public/Orelsan/le-rappeur-est-arrive-sur-scene-masque-danO_img1.jpg" class="object-cover" />
        />
      </div>
    </div>

    <Footer class="mt-16" />
  </main>
</template>

<script>
import Header from "../components/HeaderMobile.vue";
import Footer from "../components/Footer.vue";
import HeaderOrdi from "../components/HeaderOrdi.vue";

export default {
  components: {
    Header,
    Footer,
    HeaderOrdi,
  },
};
</script>