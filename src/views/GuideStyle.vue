<template>
  <h1 class="my-5 text-center font-work-sans font-bold">Guide de Style</h1>

  <h2 class="mx-5 mt-10 mb-5 font-work-sans font-semibold">Couleur</h2>
  <div class="mb-5 flex items-center">
    <div class="m-5 h-40 w-40 rounded-full border-2 border-gray-200 bg-white"></div>
    <div class="m-5 h-32 w-32 rounded-full bg-black"></div>
    <div class="m-5 h-24 w-24 rounded-full bg-blue-700"></div>
    <div class="m-5 h-24 w-24 rounded-full bg-gray-400"></div>
  </div>

  <div class="ml-5 flex justify-center gap-8">
    <div class="flex flex-col">
      <div class="m-5 h-16 w-16 rounded-lg border-2 bg-white"></div>
      <p class="font-work-sans">Default/white</p>
    </div>

    <div class="flex flex-col">
      <div class="m-5 h-16 w-16 rounded-lg bg-gray-900"></div>
      <p class="font-work-sans">Default/gray/900</p>
    </div>

    <div class="flex flex-col">
      <div class="m-5 h-16 w-16 rounded-lg bg-gray-400"></div>
      <p class="font-work-sans">Default/gray/400</p>
    </div>

    <div class="flex flex-col">
      <div class="m-5 h-16 w-16 rounded-lg bg-blue-700"></div>
      <p class="font-work-sans">Default/blue/700</p>
    </div>
  </div>

  <h3 class="mx-5 mt-10 mb-5 font-work-sans font-medium">Nuances de gris | Librairie Tailwinds</h3>
  <div class="flex justify-center">
    <div class="my-10 h-[50px] w-[200px] rounded-l-xl bg-gray-100"></div>
    <div class="my-10 h-[50px] w-[200px] bg-gray-200"></div>
    <div class="my-10 h-[50px] w-[200px] bg-gray-300"></div>
    <div class="my-10 h-[50px] w-[200px] rounded-r-xl bg-gray-400"></div>
  </div>

  <div class="flex justify-center">
    <div class="my-10 h-[50px] w-[200px] rounded-l-xl bg-gray-500"></div>
    <div class="my-10 h-[50px] w-[200px] bg-gray-600"></div>
    <div class="my-10 h-[50px] w-[200px] bg-gray-700"></div>
    <div class="my-10 h-[50px] w-[200px] rounded-r-xl bg-gray-800"></div>
  </div>

  <h3 class="mx-5 mt-10 mb-5 font-work-sans font-medium">Nuances de bleus | Librairie Tailwinds</h3>
  <div class="flex justify-center">
    <div class="my-10 h-[50px] w-[200px] rounded-l-xl bg-blue-600"></div>
    <div class="my-10 h-[50px] w-[200px] bg-blue-700"></div>
    <div class="my-10 h-[50px] w-[200px] bg-blue-800"></div>
    <div class="my-10 h-[50px] w-[200px] rounded-r-xl bg-blue-900"></div>
  </div>

  <h2 class="mx-5 mt-10 mb-5 font-work-sans font-semibold">Icons</h2>
  <div class="ml-5 flex gap-5">
    <div class="flex">
      <chevron />
      <p>Chevron Icon</p>
    </div>

    <div class="flex">
      <Menu />
      <p>Menu Icon</p>
    </div>

    <div class="flex">
      <flechedroite />
      <p>Flèche Icon</p>
    </div>

    <div class="flex">
      <logoInsta />
      <p>Instagram Icon</p>
    </div>

    <div class="flex">
      <logoFacebook />
      <p>Facebook Icon</p>
    </div>

    <div class="flex">
      <logoTwitter />
      <p>Twitter Icon</p>
    </div>
  </div>

  <h2 class="mx-5 mt-10 mb-5 font-work-sans font-semibold">Typographies</h2>
  <div class="m-10 flex">
    <p class="h-40 w-[220px] rounded-l-xl bg-indigo-700 pl-10 font-work-sans text-[100px] text-white">Aa</p>
    <p class="h-40 w-[250px] bg-indigo-700 pt-12 font-work-sans text-[28px] font-medium text-white">Work Sans</p>
    <div class="h-40 w-5 bg-indigo-800"></div>
    <div class="h-40 w-[700px] flex-col rounded-r-xl border-2 bg-white pl-10">
      <p class="my-4 font-work-sans text-[32px] font-semibold text-black">AaBbCcDdEeFfGg · 0123456789</p>
      <div class="flex">
        <p class="m-5 font-work-sans text-[24px] text-gray-400">Regular</p>
        <p class="m-5 font-work-sans text-[24px] font-medium text-gray-400">Medium</p>
        <p class="m-5 font-work-sans text-[24px] font-semibold text-gray-400">SemiBold</p>
        <p class="m-5 font-work-sans text-[24px] font-bold text-gray-400">Bold</p>
      </div>
    </div>
  </div>

  <div class="ml-10 flex items-center">
    <div class="flex flex-col">
      <p class="font-work-sans font-semibold">H1 / Heading 1 | H2 / Heading 2</p>
      <p class="font-work-sans">Work Sans (SemiBold)</p>
      <p class="font-work-sans">48px</p>
    </div>
    <p class="ml-40 font-work-sans text-[48px] font-semibold">Le festival Cocoon</p>
  </div>

  <div class="ml-10 mt-5 flex items-center">
    <div class="flex flex-col">
      <p class="font-work-sans font-semibold">H3 / Heading 3</p>
      <p class="font-work-sans">Work Sans (SemiBold)</p>
      <p class="font-work-sans">30px</p>
    </div>
    <p class="ml-40 font-work-sans text-[30px] font-semibold">Le festival Cocoon</p>
  </div>

  <div class="ml-10 mt-5 flex items-center">
    <div class="flex flex-col">
      <p class="font-work-sans font-semibold">H4 / Heading 4</p>
      <p class="font-work-sans">Work Sans (Regular)</p>
      <p class="font-work-sans">16px</p>
    </div>
    <p class="ml-40 font-work-sans text-[16px]">Le festival Cocoon</p>
  </div>

  <div class="ml-10 mt-5 flex items-center">
    <div class="flex flex-col">
      <p class="font-work-sans font-semibold">Bouton</p>
      <p class="font-work-sans">Work Sans (Semibold)</p>
      <p class="font-work-sans">20px</p>
    </div>
    <p class="ml-40 font-work-sans text-[20px]">Le festival Cocoon</p>
  </div>

  <div class="ml-10 mt-5 flex items-center">
    <div class="flex flex-col">
      <p class="font-work-sans font-semibold">Body</p>
      <p class="font-work-sans">Work Sans (Regular)</p>
      <p class="font-work-sans">16px</p>
    </div>
    <p class="ml-40 font-work-sans text-[14px]">Le festival Cocoon</p>
  </div>

  <h2 class="mx-5 mt-10 mb-10 font-work-sans font-semibold">Composants</h2>
  <h3 class="mx-5 mt-10 mb-10 font-work-sans text-sm font-semibold">Header mobile</h3>
  <HeaderMobile class="mb-10" />
  <h3 class="mx-5 mt-10 mb-10 font-work-sans text-sm font-semibold">Header ordi</h3>
  <HeaderOrdi class="mb-10" />
  <h3 class="mx-5 mt-10 mb-10 font-work-sans text-sm font-semibold">Footer</h3>
  <Footer class="mb-10" />
  <h3 class="mx-5 mt-10 mb-10 font-work-sans text-sm font-semibold">Boutons</h3>
  <div class="ml-5 mb-10 flex justify-around gap-10">
    <bouton>En savoir plus</bouton>
    <boutonblanc>En savoir plus</boutonblanc>
  </div>
  <h3 class="mx-5 mt-10 mb-10 font-work-sans text-sm font-semibold">Cartes</h3>
  <div class="mb-10 flex justify-around gap-20">
    <CardArtiste />
    <CardConcert />
  </div>
</template>

<script>
import chevron from "../components/icons/chevron.vue";
import Menu from "../components/icons/Menu.vue";
import flechedroite from "../components/icons/flechedroiteBleu.vue";
import logoInsta from "../components/icons/logoInsta.vue";
import logoFacebook from "../components/icons/logoFacebook.vue";
import logoTwitter from "../components/icons/logoTwitter.vue";
import HeaderMobile from "../components/HeaderMobile.vue";
import HeaderOrdi from "../components/HeaderOrdi.vue";
import Footer from "../components/Footer.vue";
import bouton from "../components/bouton.vue";
import boutonblanc from "../components/bouton_blanc.vue";
import CardArtiste from "../components/cardArtiste.vue";
import CardConcert from "../components/cardConcert.vue";

export default {
  components: {
    chevron,
    Menu,
    flechedroite,
    logoInsta,
    logoFacebook,
    logoTwitter,
    HeaderMobile,
    HeaderOrdi,
    Footer,
    bouton,
    boutonblanc,
    CardArtiste,
    CardConcert,
  },
};
</script>