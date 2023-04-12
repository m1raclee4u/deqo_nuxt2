<template>
  <section>
    <div class="jcsb">
      <h2>{{ title }}</h2>
      <Nuxt-Link class="linkToCatalog" to="/catalog">смотреть все</Nuxt-Link>
    </div>
    <div class="mainSlider">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        
          <div
            v-for="item in this.products.slice(0, 12)"
            :key="item.slug"
            class="swiper-slide item-slide"
          >
            <item :item="item" inSlider="inSlider" :key="item.id"> </item>
          </div>
        
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </section>
</template>

<script>
import Item from "~/components/Item/Item.vue";

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
    return {
      slider: null,
    };
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

  mounted() {
    setTimeout(() => {
      new Swiper(".mainSlider", {
        slidesPerView: "auto",
        spaceBetween: 40,
        loop: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.mainSlider {
  position: relative;
}
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

.mainSlider {
  // max-width: 834px;
  overflow: hidden;
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
@media (max-width: 1280px) {
}
</style>