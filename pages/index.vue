<template>
  <div class="wrapper">
    <HeaderBlack />
    <Transition name="slide-fade">
      <BurgerMenu v-if="$store.state.burgerMenuOpened != false" />
    </Transition>
    <HeaderSlider photo_1="back" />
    <ItemsSlider title="Bestsellers" />
    <ItemsSlider title="Новинки" />
    <HeaderSlider />
    <ItemsSlider title="deqo + LaPizza" />
    <HeaderSlider />
    <ItemsSlider title="Новая категория" />
    <!-- <Collections/> -->
    <Footer />
  </div>
</template>

<script>
import Collections from "~/components/General/Collections.vue";
import HeaderBlack from "~/components/General/HeaderBlack.vue";
import Footer from "~/components/General/Footer.vue";
import ItemsSlider from "~/components/Item/ItemsSlider.vue";
import HeaderSlider from "~/components/MainPage/HeaderSlider.vue";
import BurgerMenu from "~/components/General/BurgerMenu.vue";

export default {
  components: {
    HeaderSlider,
    Collections,
    Footer,
    BurgerMenu,
    HeaderBlack,
    ItemsSlider,
  },
  name: "IndexPage",
   async asyncData({store}) {
    if (store.getters["catalog/getProducts"].length === 0) {
      await store.dispatch("catalog/fetchProducts");
    }
    if (store.getters["catalog/getCategories"].length === 0) {
      await store.dispatch("catalog/fetchCategories");
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0;
}
</style>