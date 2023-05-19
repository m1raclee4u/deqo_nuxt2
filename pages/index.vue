<template>
  <div class="wrapper">
    <HeaderSlider photo_1="back" />
    <ItemsSlider :products="products" title="Bestsellers" />
    <ItemsSlider :products="products" title="Новинки" />
    <HeaderSlider />
    <ItemsSlider :products="products" title="deqo + LaPizza" />
    <HeaderSlider />
    <ItemsSlider :products="products" title="Новая категория" />
    <!-- <Collections/> -->
  </div>
</template>

<script>

import ItemsSlider from "~/components/Item/ItemsSlider.vue";
import HeaderSlider from "~/components/MainPage/HeaderSlider.vue";

export default {
  components: {
    HeaderSlider,
    ItemsSlider,
  },
  computed: {
    products() {
      return this.$store.getters["catalog/getProducts"];
    },
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
