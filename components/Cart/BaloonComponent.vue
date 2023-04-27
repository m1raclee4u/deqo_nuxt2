<template>
  <div class="balloon">
    <h1 class="red">Название: {{ pvz.name }}</h1>
    <p class="red">Описание: {{ pvz.note }}</p>
    <p>Рабочие часы: {{ pvz.work_time }}</p>
    <div v-if="pvz?.office_image_list" class="office_image_slider">
      <div class="swiper-wrapper">
        <img
          v-for="image in pvz.office_image_list"
          :key="image.slug"
          class="swiper-slide item-slide"
          :src="image.url"
        />
      </div>
      <div class="swiper-button-prev-ballonn"></div>
      <div class="swiper-button-next-balloon"></div>
    </div>
    <button id="btn">Выбрать</button>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

Swiper.use([Navigation, Pagination, Autoplay]);

export default {
  name: "balloon",
  props: {
    pvz: Object,
  },
  methods: {
    // bindListener() {
    //   document.getElementById("btn").addEventListener("click", this.handler);
    // },
    // unbindListener() {
    //   document.getElementById("btn").removeEventListener("click", this.handler);
    // },
    // handler() {
    //   console.log(this.pvz);
    //   console.log(this.$emit('123', this.pvz))
    // },
  },
  mounted() {
    new Swiper(".office_image_slider", {
      slidesPerView: 1,
      spaceBetween: 40,
      loop: false,
      navigation: {
        nextEl: ".swiper-button-next-ballonn",
        prevEl: ".swiper-button-prev-ballonn",
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.balloon {
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  img {
    object-fit: cover;
    width: 100%;
    height: auto;
    max-height: 150px;
  }
  button {
    height: 50px;
    background-color: #018440;
    color: white;
    font-size: 16px;
    border-radius: 4px;
  }
}
</style>
