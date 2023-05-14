<template>
  <div>
    <HeaderBlack/>
    <Transition name="slide-fade">
      <BurgerMenu v-if="$store.state.burgerMenuOpened != false"/>
    </Transition>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
  import HeaderBlack from "~/components/General/HeaderBlack.vue";
  import Footer from "~/components/General/Footer.vue";
  import BurgerMenu from "~/components/General/BurgerMenu.vue";

  export default {
    name: "default.vue",
    components: {
      Footer,
      BurgerMenu,
      HeaderBlack,
    },
  }
</script>

<style scoped>

</style>
