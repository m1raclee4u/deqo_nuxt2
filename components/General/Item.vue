<template>
  <div class="ItemCart">
    <ButtonFavorite :item="item" />
    <Nuxt-Link :to="`/${item.category}/${item.name}`">
      <!-- <img :src="require('../../assets/img/item/' + item.img)" alt="" > -->
      <img
        class="card__img"
        :src="'https://frontend-test.idaproject.com' + item.photo"
        :alt="item.name"
      />
      <div class="tag">
        <p>ХИТ</p>
      </div>

      <!-- {{item}} -->
    </Nuxt-Link>
    <div class="top">
      <p>{{ item.name }}</p>
      <p class="quantity">осталось {{ 3 }} шт.</p>
    </div>
    <div class="ItemCart__price">
      <!-- <p class="old">{{item.priceOld}} ₽ </p> -->
      <p>{{ item.price }} ₽</p>
      <div class="flex colors">
        <div
          class="input_color_1"
          :id="color.id"
          v-for="color in $store.state.colors"
          :key="color.id"
          disabled
        >
          <!-- <label  class="colorItem"></label> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonFavorite from "~/components/Buttons/ButtonFavorite.vue";

import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

Swiper.use([Navigation, Pagination, Autoplay]);
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      // favorites: [],
    };
  },
  components: { ButtonFavorite },
};
</script>

<style lang="scss" scoped>
.input_color_1 {
  width: 16px;
  height: 16px;
  border-radius: 50%;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-weight: 400;

  .quantity {
    font-size: 14px;
    line-height: 17px;
    color: #a9a1a1;
    font-weight: 400;
  }
}
.tag {
  position: absolute;
  width: 58px;
  height: 58px;
  left: 14px;
  top: 14px;
  border-radius: 50%;
  border: 1px solid #685f5f;
  text-align: center;
  line-height: 100%;
  p {
    position: absolute;
    top: 17px;
    left: 13px;
    color: #685f5f;
  }
}

.ItemCart {
  position: relative;
  max-width: 405px;
  width: 100%;
//   padding-bottom: 60px;
  img {
    width: 100%;
    height: auto;
    background-color: black;
    margin-top: 100px;
    margin-bottom: 25px;
  }
  p {
    font-family: "RF Dewi";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    /* основной */

    color: #685f5f;
  }
}
.colors {
  gap: 10px;
}
.ItemCart__price {
  display: flex;
  align-items: center;
  gap: 30px;
  p {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;

    /* основной */

    color: #685f5f;
  }
  .old {
    color: grey;
    text-decoration: line-through;
  }
}
@media (max-width: 1280px) {
  .ItemCart {
    // padding-bottom: 60px;
    img {
      max-width: 100%;
      height: auto;
      background-color: black;
      margin-bottom: 25px;
    }
    p {
      margin-bottom: 20px;
      font-size: 13px;
    }
  }
}
</style>