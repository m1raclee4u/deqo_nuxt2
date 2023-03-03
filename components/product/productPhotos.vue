<script>
  import Swiper, {Navigation, Pagination, Autoplay, Thumbs} from "swiper";
  import "swiper/swiper-bundle.css";
  import ImageHelper from "~/plugins/imageHelper";

  Swiper.use([Navigation, Pagination, Autoplay, Thumbs]);

  export default {
    data() {
      return {
        IH: new ImageHelper(),
      }
    },
    props: {
      images: Array
    },
    mounted() {
      const thubms = new Swiper(".thumbsSlider", {
        slidesPerView: 4,
        spaceBetween: 10,
        freeMode: true,
        watchSlidesProgress: true,
      });
      new Swiper(".bigSlider", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: thubms,
        },
      });


    },
  };
</script>

<template>
  <div class="productPhotos">
    <div class="bigSlider">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="image in images" :key="image.id">
          <div class="image">
            <img :src='IH.getUrl(image.path, 500)' alt="">
          </div>
        </div>
      </div>
    </div>

    <div thumbsSlider="" class="swiper thumbsSlider">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="image in images" :key="image.id">
          <div class="image">
            <img :src='IH.getUrl(image.path, 150)' alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

