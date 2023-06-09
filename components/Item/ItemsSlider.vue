<template>
  <section>
    <div class="jcsb">
      <h2>{{ title }}</h2>
      <!--      <div v-for="slide in this.splitArray" class="asd">-->
<!--        {{slide}}-->
<!--      </div>-->
      <Nuxt-Link v-if="this.collection" class="linkToCatalog" :to="`collections/${collection.slug}`">смотреть все</Nuxt-Link>
      <Nuxt-Link v-else class="linkToCatalog" to="/catalog">смотреть все</Nuxt-Link>
    </div>
    <div class="mainSlider">
      <!-- Additional required wrapper -->
      <div v-if="!isMobileSwiper" class="swiper-wrapper">
          <div
            v-for="item in this.products"
            :key="item.slug"
            class="swiper-slide item-slide"
          >
            <item :item="item" inSlider="inSlider" :key="item.id"> </item>
          </div>

      </div>
      <div v-if="isMobileSwiper" class="swiper-wrapper">
          <div
            v-for="array in this.splitArray"
            :key="array.id"
            class="swiper-slide item-slide"
          >
            <div v-for="item in array" class="items">
              <item :item="item" inSlider="inSlider" :key="item.id"> </item>
            </div>
          </div>

      </div>
    </div>
  </section>
</template>

<script>
import Item from "~/components/Item/Item.vue";
import _ from 'lodash'

import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

Swiper.use([Navigation, Pagination, Autoplay]);

export default {
  props: {
    collection: Object,
    title: {
      type: String,
    },
    products: Array,
  },
  data() {
    return {
      slider: null,
      isMobileSwiper: false,
    };
  },
  components: { Item },
  computed: {
    productsInCart() {
      return this.$store.getters["productsInCart"];
    },
    splitArray() {
      return _.chunk(this.products, 4)
    }
  },


  mounted() {
    const mediaQuery = window.matchMedia("(max-width:768px)");
    this.isMobileSwiper = mediaQuery.matches;
    const listener = (e) => (this.isMobileSwiper = e.matches);
    mediaQuery.addListener(listener);
    this.$once("hook:beforeDestroy", () => mediaQuery.removeListener(listener));

    setTimeout(() => {
      new Swiper(".mainSlider", {
        slidesPerView: 'auto',
        spaceBetween: 5,
        loop: false,
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 5
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
            loop: false
          }
        }
      });
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.mainSlider {
  position: relative;
}


.item-slide {
  width: 387px !important;
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
@media screen and (max-width: 768px) {
  .swiper-wrapper {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 40px;
  }
}
</style>
