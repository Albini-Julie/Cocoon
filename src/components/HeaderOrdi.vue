<template>
  <div class="passage m-5 flex items-center gap-10">
    <router-link to="/">
      <img
        v-if="
          $route.name === 'Artiste' ||
          $route.name === 'Concert' ||
          $route.name === 'Contact' ||
          $route.name === 'CreateArtiste' ||
          $route.name === 'UpdateArtiste' ||
          $route.name === 'DeleteArtiste' ||
          $route.name === 'Page404'
        "
        src="../../public/LogoSimpleGrandBlanc.svg"
        alt="logo Cocoon" />
      <img v-else src="../../public/LogoSimpleGrandNoir.svg" alt="logo Cocoon"
    /></router-link>
    <ul>
      <div class="flex gap-10">
        <div class="flex gap-2">
          <li><router-link to="/Programmation">Programmation</router-link></li>
          <chevronBlanc
            class=""
            v-if="
              $route.name === 'Artiste' ||
              $route.name === 'Concert' ||
              $route.name === 'Contact' ||
              $route.name === 'CreateArtiste' ||
              $route.name === 'UpdateArtiste' ||
              $route.name === 'DeleteArtiste' ||
              $route.name === 'Page404'
            "
          />
          <chevron v-else />
        </div>
        <div class="flex gap-2">
          <li><router-link to="/Artistes">Artistes</router-link></li>
          <chevronBlanc
            v-if="
              $route.name === 'Artiste' ||
              $route.name === 'Concert' ||
              $route.name === 'Contact' ||
              $route.name === 'CreateArtiste' ||
              $route.name === 'UpdateArtiste' ||
              $route.name === 'DeleteArtiste' ||
              $route.name === 'Page404'
            "
          />
          <chevron v-else />
        </div>
        <div class="flex gap-2">
          <li><router-link to="/Festival">Festival</router-link></li>
          <chevronBlanc
            v-if="
              $route.name === 'Artiste' ||
              $route.name === 'Concert' ||
              $route.name === 'Contact' ||
              $route.name === 'CreateArtiste' ||
              $route.name === 'UpdateArtiste' ||
              $route.name === 'DeleteArtiste' ||
              $route.name === 'Page404'
            "
          />
          <chevron v-else />
        </div>
        <div class="flex gap-2">
          <li><router-link to="/Contact">Contact</router-link></li>
          <chevronBlanc
            v-if="
              $route.name === 'Artiste' ||
              $route.name === 'Concert' ||
              $route.name === 'Contact' ||
              $route.name === 'CreateArtiste' ||
              $route.name === 'UpdateArtiste' ||
              $route.name === 'DeleteArtiste' ||
              $route.name === 'Page404'
            "
          />
          <chevron v-else />
        </div>
      </div>
    </ul>
  </div>
</template>


<script>
import chevron from "../components/icons/chevron.vue";
import chevronBlanc from "../components/icons/chevronBlanc.vue";

export default {
  components: {
    chevron,
    chevronBlanc,
  },
};
</script>

<style >
.passage {
  animation: pass 2s ease 0s 1 normal forwards;
}

@keyframes pass {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translate(0%);
  }
}
</style>