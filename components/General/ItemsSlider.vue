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
          :key="item.id"
          class="swiper-slide"
        >
          <item :item="item" :key="item.id"> </item>
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
  components: { Item },
  computed: {
    products() {
      return this.$store.getters["products"];
    },
    productsInCart() {
      return this.$store.getters["productsInCart"];
    },
  },
  beforeMount() {
    if (this.$store.getters["products"].length === 0) {
      this.$store.dispatch("fetchProducts");
    }
    if (this.$store.getters["categories"].length === 0) {
      this.$store.dispatch("fetchCategories");
    }
  },
  mounted() {
    new Swiper(".bestsellers", {
      slidesPerView: 4,
      spaceBetween: 40,
    });
  },
  updated() {
    new Swiper(".bestsellers", {
      slidesPerView: 4,
      spaceBetween: 40,
    });
  },
};
</script>

<style lang="scss" scoped>
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