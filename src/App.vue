<template>
  <div>
    <NavbarTop v-if="$route.name !== 'login' && $route.name !== 'register'" />
    <RouterView />
    <FooterBottom
      v-if="$route.name !== 'login' && $route.name !== 'register'"
    />
  </div>
</template>

<script>
import NavbarTop from "./components/NavbarTop.vue";
import FooterBottom from "./components/FooterBottom.vue";

export default {
  name: "App",
  components: {
    NavbarTop,
    FooterBottom,
  },
};
</script>

<style></style>
