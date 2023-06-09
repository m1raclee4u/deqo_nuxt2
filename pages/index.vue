<template>
  <div class="wrapper">
    <HeaderSlider :images="mainSlider_images.slides" :isMainSlider="isMainSlider"/>
    <ItemsSlider :products="products" title="Bestsellers"/>
    <ItemsSlider :products="products" title="Новинки"/>
    <div class="collections">
      <div class="collection wrapper" v-for="collection in collections">
        <HeaderSlider v-if="collection?.slides.length > 0" :images="collection?.slides"/>
        <ItemsSlider :collection="collection" :products="collection.products" :title="collection.title"/>
      </div>
    </div>
  </div>
</template>

<script>

import ItemsSlider from "~/components/Item/ItemsSlider.vue";
import HeaderSlider from "~/components/MainPage/HeaderSlider.vue";

export default {
  data() {
    return {
      isMainSlider: true,
    }
  },
  components: {
    HeaderSlider,
    ItemsSlider,
  },
  computed: {
    products() {
      return this.$store.getters["catalog/getProducts"];
    },
    collections(){
      return this.$store.getters["collections/getCollections"]
    }
  },
  name: "IndexPage",
  async asyncData({store, $axios}) {
    if (store.getters["catalog/getProducts"].length === 0) {
      await store.dispatch("catalog/fetchProducts");
    }
    if (store.getters["catalog/getCategories"].length === 0) {
      await store.dispatch("catalog/fetchCategories");
    }
    if (store.getters["collections/getCollections"].length === 0) {
      await store.dispatch("collections/fetchCollections");
    }
    const mainSlider_images = await $axios.$get('/main-slides')
    return {mainSlider_images}
  },

};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0;
}

.collections {
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-bottom: 60px;
}
</style>
