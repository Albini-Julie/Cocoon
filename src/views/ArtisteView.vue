<template>
  <main class="-mt-5 bg-gray-900">
    <header class="mb-16">
      <div class="md:hidden"><Header /></div>
      <div class="hidden md:block">
        <HeaderOrdi />
      </div>
    </header>

    <div class="flex flex-col items-center">
      <h3 class="mx-2 text-center font-work-sans text-3xl font-semibold text-white">Zoom sur :</h3>
      <h3 class="mx-2 mb-10 text-center font-work-sans text-3xl font-semibold text-white">Angèle</h3>
    </div>

    <div class="flex items-center">
      <div class="flex w-2/4 flex-col">
        <h4 class="ml-2 font-work-sans text-[20px] font-semibold text-white">Présentation</h4>
        <p class="ml-2 font-work-sans text-white">
          Angèle est une autrice, compositrice, interprète, productrice, actrice et mannequin belge. De son vrai nom Angèle Van Laeken, la
          jeune femme a donc dès son jeune âge de 26 ans une vie bien remplie.
        </p>
        <p class="ml-2 font-work-sans text-white">
          Elle a sorti son premier album en 2018. Ce dernier nommé Briol lui a valu un double disque de diamant.
        </p>
        <div class="flex flex-col items-center">
          <div class="mt-5 flex flex-wrap gap-5">
            <a href="https://www.instagram.com/"><InstaBlanc /></a>
            <a href="https://www.facebook.com/"><FacebookBlanc /></a>
            <a href="https://twitter.com/?lang=fr"><TwitterBlanc /></a>
          </div>
        </div>
      </div>
      <div class="flex w-auto flex-col items-center">
        <img src="../../public/Angèle/bulle1.png" alt="concert Angèle" />
        <div class="flex">
          <img class="w-2/4" src="../../public/Angèle/bulle2.png" alt="Angèle" />
          <img class="w-2/4" src="../../public/Angèle/bulle3.png" alt="Angèle chanteuse" />
        </div>
      </div>
    </div>

    <div class="mt-10 flex items-center">
      <img class="h-1/4 w-1/4" src="../../public/Angèle/Angele_RomeoElvis.jpg" alt="Angèle et Roméo Elvis" />
      <p class="m-5 w-2/4 font-work-sans text-white">
        Elle entame de 2018 à 2020 une tournée pour son album Briol, ce qui lui rapportera la Victoire de la musique du concert de l’année
        en 2020. Elle sort ensuite en 2021 un nouvel album : Nonante-cinq. Elle a également un frère, Roméo Elvis, avec qui elle est très
        proche. Elle a fait de nombreux feat, avec Dua Lipa et Damso notamment.
      </p>
    </div>

    <div class="mt-10 mb-2 flex flex-col items-center">
      <h4 class="ml-2 font-work-sans text-[20px] font-semibold text-white">Une artiste engagée</h4>
    </div>
    <p class="ml-2 font-work-sans text-white">
      Dans beaucoup de ses chansons, Angèle a mis en avant la cause féministe qui lui tient énormément à coeur. C’est particulièrement le
      cas dans son titre Balance ton quoi, dans lequel elle défend les femmes et met en avant les réflexions, la pression sociale et les
      inégalités subies par les femmes au quotidien dans notre société. En dehors de ses titres, Angèle s’allie au mouvement Noustoutes, qui
      luttent contre les violences faites aux femmes.
    </p>
    <br />
    <div class="flex items-center">
      <div class="w-7/10 flex flex-col">
        <p class="ml-2 font-work-sans text-white">
          C’est la cause LGBT qu’elle soutient cette fois dans la chanson Ta reine. En effet, en tant que bisexuelle, Angèle est très
          engagée dans cette cause qui lui tient également très à coeur.
        </p>
        <p class="ml-2 font-work-sans text-white">
          Elle a aussi collaboré avec l’association KickCancer contre le cancer pédiatrique, et a écrit et publié une chanson contre le
          réchauffement climatique appelée Il sera trop tard.
        </p>
      </div>
      <img class="h-1/4 w-1/4" src="../../public/Angèle/Angele_lgbt.jpg" alt="Angèle concert" />
    </div>

    <h4 class="my-10 ml-2 text-center font-work-sans font-semibold text-white">
      Angèle est sans doute une des artistes qui aura impacté le plus notre réflexion sur notre quotidien, et une chanteuse à découvrir
      absolument !
    </h4>

    <div class="grid-auto-flow grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(100px,auto))]">
      <div class="flex w-auto flex-col">
        <img src="../../public/Angèle/Angele_img5.jpg" class="object-cover" /><img
          src="../../public/Angèle/Angele_img9.jpg"
          class="object-cover"
        />
        <img src="../../public/Angèle/Angele_img8.jpg" class="object-cover" />
      </div>

      <div class="flex w-auto flex-col">
        <img src="../../public/Angèle/Angele_img4.jpg" class="object-cover" /><img
          src="../../public/Angèle/Angele_img1.jpg"
          class="object-cover"
        />

        <img src="../../public/Angèle/Angele_regard.jpg" class="object-none" /><img
          src="../../public/Angèle/Angele_img3.jpg"
          class="object-cover"
        />

        <img src="../../public/Angèle/Angele_img6.jpg" class="object-none" />
      </div>

      <div class="flex w-auto flex-col">
        <img src="../../public/Angèle/Angele_img7.jpg" class="object-cover" /><img
          src="../../public/Angèle/Angele_img12.jpg"
          class="object-cover"
        />

        <img src="../../public/Angèle/Angele_img10.jpg" class="object-cover" /><img
          src="../../public/Angèle/Angele_img11.jpg"
          class="object-cover"
        />

        <img src="../../public/Angèle/Angele_img13.jpg" class="object-cover" />
      </div>
    </div>

    <Footer class="mt-16" />
  </main>
</template>

<script>
import Header from "../components/HeaderMobile.vue";
import InstaBlanc from "../components/icons/logoInsta_blanc.vue";
import FacebookBlanc from "../components/icons/logoFacebook_blanc.vue";
import TwitterBlanc from "../components/icons/logoTwitter_blanc.vue";
import Footer from "../components/Footer.vue";
import HeaderOrdi from "../components/HeaderOrdi.vue";

export default {
  components: {
    Header,
    InstaBlanc,
    FacebookBlanc,
    TwitterBlanc,
    Footer,
    HeaderOrdi,
  },
};
</script>