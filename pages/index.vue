<template>
  <div class="wrapper">
    <HeaderSlider :images="mainSlider_images" :isMainSlider="isMainSlider"/>
    <ItemsSlider :products="products" title="Bestsellers"/>
    <ItemsSlider :products="products" title="Новинки"/>
    <div class="collections">
      <div class="collection" v-for="collection in collections">
        <HeaderSlider :images="collection.slider_images"/>
        <ItemsSlider :products="products" title="Bestsellers"/>
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
        mainSlider_images: [
          {
            id: 1,
            image: '/back.jpg'
          },
          {
            id: 2,
            image: '/back.jpg'
          },
        ],
        collections: [
          {
            collection_id: 1,
            slider_images: [{
              id: 1,
              image: '/back.jpg'
            },
              {
                id: 2,
                image: '/back.jpg'
              },],
            slider_title: 'diego + La Pizza',
            slider_subtitle: 'dego + La Pizza',
            collection_title: '',
            collection_logo: '',
            link: '',
            button_text: '',
            slider_text_position: ''
          },
          {
            collection_id: 2,
            slider_images: [{
              id: 1,
              image: '/back.jpg'
            },
              {
                id: 2,
                image: '/back.jpg'
              },],
            slider_title: 'diego + La Pizza',
            slider_subtitle: 'dego + La Pizza',
            collection_title: '',
            collection_logo: '',
            link: '',
            button_text: '',
            slider_text_position: ''
          },
        ],

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
  .collections{
    section{
      padding: 100px 0;
    }
  }
</style>
