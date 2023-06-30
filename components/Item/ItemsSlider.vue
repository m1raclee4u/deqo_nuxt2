<template>
  <section>
    <div class="jcsb">
      <h2>{{ title }}</h2>
      <Nuxt-Link v-if="this.collection" class="linkToCatalog" :to="`collections/${collection.slug}`">смотреть все
      </Nuxt-Link>
      <Nuxt-Link v-else class="linkToCatalog" to="/catalog">смотреть все</Nuxt-Link>
    </div>
    <div :class="{mainSlider: products.length > 4}">
      <!-- Additional required wrapper -->
      <div v-if="!isMobileSwiper" class=""
           :class="{notSwiper: products.length < 4, 'swiper-wrapper': products.length > 4}">
        <div
          v-for="item in products.slice(0, this.products.length)"
          :key="item.slug"
          :class="{'item-slide': products.length < 4, 'swiper-slide': products.length > 3}"

        >
          <item :item="item" inSlider="inSlider" :key="item.id"></item>
        </div>

      </div>
      <div v-if="isMobileSwiper" class="swiper-wrapper">
        <div
          v-for="array in this.splitArray"
          :key="array.id"
          :class="{moreThan4: products.length > 3, 'item-slide': products.length < 4, 'swiper-slide': products.length > 3}"
        >
          <div v-for="item in array" class="items">
            <item :item="item" :key="item.id"></item>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
  import Item from "~/components/Item/Item.vue";
  import _ from 'lodash'

  import Swiper, {Navigation, Pagination, Autoplay} from "swiper";
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
        wrapperWidth: 0,
        slider: null,
        isMobileSwiper: false,
      };
    },
    components: {Item},
    computed: {
      productsInCart() {
        return this.$store.getters["productsInCart"];
      },
      splitArray() {
        return _.chunk(this.products, 4)
      },
      slides_number() {
        this.wrapperWidth = document.querySelector('.mainSlider').offsetWidth;
        return (this.wrapperWidth - 20 - (this.products.length * 5)) / 387
      }
    },
    updated() {
      this.wrapperWidth = document.querySelector('.mainSlider').offsetWidth;
    },
    watch: {
      wrapperWidth(value) {
        new Swiper(".mainSlider", {
          slidesPerView: 4,
          loop: false,
          breakpoints: {
            0: {
              slidesPerView: 1,
              loop: false,
            },
            768: {
              slidesPerView: this.slides_number,
              loop: true,
              longSwipes: false,
              centeredSlides: true,
              spaceBetween: 5,
            },
          }
        });
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
          slidesPerView: 4,
          loop: false,
          breakpoints: {
            0: {
              slidesPerView: 1,
              loop: false,
            },
            768: {
              slidesPerView: this.slides_number,
              loop: true,
              longSwipes: false,
              centeredSlides: true,
              spaceBetween: 5,
            },
          }
        });
      }, 500)

    },
  };
</script>

<style lang="scss" scoped>
  .notSwiper {
    display: flex;
    gap: 5px;
  }

  .mainSlider {
    position: relative;
    max-width: 1676px;
    width: 100%;
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

  .moreThan4 {
    width: 100% !important;
    display: grid !important;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 20px;

  }

  @media (max-width: 1200px) {
    section {
      gap: 45px;
    }
  }

  @media (max-width: 640px) {
    section {
      gap: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    .swiper-wrapper {
      display: flex;

      .item-slide {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 20px;
        width: 100% !important;
      }
    }
  }
</style>
