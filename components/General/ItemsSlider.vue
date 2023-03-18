<template>
  <section>
    <div class="jcsb">
      <h2>{{ title }}</h2>
      <Nuxt-Link class="linkToCatalog" to="catalog">смотреть все</Nuxt-Link>
    </div>
    <div class="bestsellers">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <div
          v-for="item in this.products.slice(0, 8)"
          :key="item.article_number + '_' + item.title"
          class="swiper-slide item-slide"
        >
          <item :item="item" inSlider="inSlider" :key="item.id"> </item>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Item from "~/components/General/Item.vue";

import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

Swiper.use([Navigation, Pagination, Autoplay]);

export default {
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return{
      slider: null,
    }
  },
  components: { Item },
  computed: {
    products() {
      return this.$store.getters["catalog/getProducts"];
    },
    productsInCart() {
      return this.$store.getters["productsInCart"];
    },
  },
  // async asyncData({store}) {
  //   if (store.getters["catalog/getProducts"].length === 0) {
  //     await store.dispatch("catalog/fetchProducts");
  //   }
  //   if (store.getters["catalog/getCategories"].length === 0) {
  //     await store.dispatch("catalog/fetchCategories");
  //   }
  // },
  mounted() {
    if (this.$store.getters["catalog/getProducts"].length === 0) {
      this.$store.dispatch("catalog/fetchProducts");
    }
    if (this.$store.getters["catalog/getCategories"].length === 0) {
      this.$store.dispatch("catalog/fetchCategories");
    }
    setTimeout(() => {
      this.slider = new Swiper(".bestsellers", {
      slidesPerView: 4,
      spaceBetween: 40,
    });
    }, 500);
    
  },
  // updated() {
  //   new Swiper(".bestsellers", {
  //     slidesPerView: 4,
  //     spaceBetween: 40,
  //   });
  // },
};
</script>

<style lang="scss" scoped>
.swiper-wrapper {
}
.item-slide {
  width: 387px !important;
  // background-color: #b8b8b8;
}
.linkToCatalog {
  &:hover {
    color: #5b5353;
  }
}
a {
  text-decoration: none;
  color: #b8b8b8;
}
img {
  max-width: 100%;
  height: auto;
}
section {
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin: 0 auto;
  max-width: 1676px;
  width: 100%;
  overflow: hidden;
  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #685f5f;
  }
}
</style>