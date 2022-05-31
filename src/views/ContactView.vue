<template>
  <main class="-mt-5 bg-gray-900">
    <header class="mb-16">
      <div class="md:hidden"><Header /></div>
      <div class="hidden md:block w-2/4">
        <HeaderOrdi />
      </div>
    </header>

    <div class="flex flex-col items-center">
      <h3 class="mx-2 text-center font-work-sans text-3xl font-semibold text-white">N’hésitez pas à nous contacter !</h3>
      <p class="mt-5 mb-10 text-center font-work-sans text-white">
        Envoyez-nous un petit message pour partager votre expérience, nous faire part de vos idées ou nous soutenir cela nous fera très
        plaisir !
      </p>
    </div>

    <div class="mt-10">
      <form>
        <div class="flex flex-col items-center">
          <div class="flex flex-col md:w-[500px]">
            <label class="font-work-sans text-[20px] font-semibold text-white" for="ligne_prénom">Prénom</label>
            <input class="border-b-2 border-gray-900 border-b-white bg-gray-900 text-white" type="text" id="ligne_nom" />
          </div>
          <div class="mt-2 flex flex-col md:w-[500px]">
            <label class="font-work-sans text-[20px] font-semibold text-white" for="ligne_nom">Nom</label>
            <input class="border-b-2 border-gray-900 border-b-white bg-gray-900 text-white" type="text" id="ligne_prénom" />
          </div>
          <div class="mt-2 flex flex-col md:w-[500px]">
            <label class="font-work-sans text-[20px] font-semibold text-white" for="ligne_mail">E-mail</label>
            <input class="border-b-2 border-gray-900 border-b-white bg-gray-900 text-white" type="text" id="ligne_mail" />
          </div>
          <div class="mt-2 flex flex-col md:w-[500px]">
            <label class="mb-5 font-work-sans text-[20px] font-semibold text-white" for="ligne_message">Votre message</label>
            <input class="mb-5 h-[200px] rounded-xl border-2 border-blue-700 bg-gray-900 text-white" type="text" id="ligne_message" />
          </div>
          <div class="ml-5 flex items-center gap-2">
            <input type="checkbox" id="checkbox" />
            <p class="font-work-sans text-white">
              En cochant cette case, vous acceptez la transmission des données entrées dans ce formulaire.
            </p>
          </div>
        </div>
        <div class="mr-20 mt-5 flex flex-wrap justify-end">
          <bouton>Envoyer</bouton>
        </div>
      </form>
    </div>

    <h3 class="mx-2 mt-10 text-center font-work-sans text-3xl font-semibold text-white">Pour vous repérer plus facilement...</h3>
    <div class="mt-5 flex flex-wrap justify-center">
      <img class="md:w-[500px]" src="../../public/carte.jpg" alt="carte" />
    </div>
    <Footer class="mt-16" />
  </main>
</template>

<script>
import Header from "../components/HeaderMobile.vue";
import bouton from "../components/bouton.vue";
import Footer from "../components/Footer.vue";
import HeaderOrdi from "../components/HeaderOrdi.vue";

export default {
  components: {
    Header,
    bouton,
    Footer,
    HeaderOrdi,
  },
};
</script>
