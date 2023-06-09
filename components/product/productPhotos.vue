<script>
import Swiper, { Navigation, Pagination, Autoplay, Thumbs, Lazy } from "swiper";
import "swiper/swiper-bundle.css";
import ImageHelper from "~/plugins/imageHelper";

Swiper.use([Navigation, Pagination, Autoplay, Thumbs, Lazy]);

export default {
  data() {
    return {
      IH: new ImageHelper(),
    };
  },
  props: {
    images: Array,
  },
  mounted() {
    setTimeout(() => {
      const thubms = new Swiper(".thumbsSlider", {
        slidesPerView: 4,
        spaceBetween: 10,
        direction: "vertical",
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
        loop: true,
      });
    }, 1000);
  },
};
</script>

<template>
  <div class="productPhotos">
    <div thumbsSlider="" class="swiper thumbsSlider">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide leftSlider"
          v-for="image in images"
          :key="image.id"
        >
          <div class="image">
            <img
              :src="IH.getUrl($axios.defaults.baseURL + `/` + image.path, 150,fm = 'webp')"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="bigSlider">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="image in images" :key="image.id">
          <div class="image">
            <img
              :src="IH.getUrl($axios.defaults.baseURL + `/` + image.path, 820, fm = 'webp',)"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.productPhotos {
  display: flex;
  gap: 20px;
  overflow: hidden;
  max-height: 900px;
}
.thumbsSlider .swiper-slide-active {
  opacity: 1 !important;
}

.bigSlider {
  width: 100%;
  height: 100%;
  max-width: 820px;
  overflow: hidden;
}

.thumbsSlider {
  overflow: hidden;
  box-sizing: border-box;
  .swiper-slide {
    max-width: 150px;
    opacity: 0.4;
    width: 100%;
    height: 25%;
  }

  .leftSlider {
    /*max-height: 180px;*/
  }
}
</style>

