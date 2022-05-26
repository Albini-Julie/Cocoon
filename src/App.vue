<template>
  <header>
    <HeaderMobile />
  </header>

  <RouterView />
</template>

<script>
import HeaderMobile from "./components/HeaderMobile.vue";
export default {
  components: { HeaderMobile },
};
</script>