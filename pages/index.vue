<template>
  <div class="wrapper">
    <HeaderSlider photo_1="back" />
    <ItemsSlider title="Bestsellers" />
    <ItemsSlider title="Новинки" />
    <HeaderSlider />
    <ItemsSlider title="deqo + LaPizza" />
    <HeaderSlider />
    <ItemsSlider title="Новая категория" />
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
