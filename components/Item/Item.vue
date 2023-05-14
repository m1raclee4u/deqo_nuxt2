<template>
  <div class="ItemCart">
    <!--    <selectAdditionalParameter-->
    <!--      :item="item"-->
    <!--      @onClosed="resetItem"-->
    <!--      v-if="$store.state.selectParametrs === true && $route.name === 'favorite'"-->
    <!--    />-->
    <ButtonFavorite :item="item" inSlider="inSlider"/>
    <Nuxt-Link :to="`/products/${item.slug}`">
      <!-- <img :src="require('@/assets/img/item/' + item.img)" alt="" > -->
      <picture>
        <img
          width="387"
          height="487"
          class="card__img"
          :src="IH.getUrl($axios.defaults.baseURL + `/` + item.image, 387)"
          alt="item.name"
        />
      </picture>

      <div v-if="item.badge_bestseller" class="tag">
        <p>ХИТ</p>
      </div>

      <!-- {{item}} -->
    </Nuxt-Link>
    <div class="item__info">
      <div class="top">
        <p class="title">{{ item.title }}</p>
        <p class="quantity">осталось {{ 3 }} шт.</p>
      </div>
      <div class="ItemCart__price">
        <!-- <p class="old">{{item.priceOld}} ₽ </p> -->
        <p>{{ item.price }} ₽</p>
        <div class="flex colors">
          <div
            class="input_color_1"
            :id="color.id"
            v-for="color in item.colors"
            :key="color.id"
            :style="{
            backgroundColor: color.value,
            border: color.name === 'Белый' ? `1px solid lightgrey` : `none`,
          }"
            disabled
          >
            <!-- <label  class="colorItem"></label> -->
          </div>
        </div>
      </div>
    </div>

    <button
      v-if="$route.name === 'favorite'"
      @click="
        $store.commit(
          'SET_SELECT_PARAMETERS_OPENED',
          !$store.state.selectParametrs
        )
      "
    >
      Добавить в корзину
    </button>
    <!-- <p>Item {{ item }}</p> -->
  </div>
</template>

<script>
  import ButtonFavorite from "~/components/Buttons/ButtonFavorite.vue";
  import selectAdditionalParameter from "~/components/General/selectAdditionalParameter.vue";
  import ImageHelper from "~/plugins/imageHelper";

  import Swiper, {Navigation, Pagination, Autoplay} from "swiper";
  import "swiper/swiper-bundle.css";

  Swiper.use([Navigation, Pagination, Autoplay]);
  export default {
    props: {
      item: {
        type: Object,
        required: true,
      },
      inSlider: {},
    },
    data() {
      return {
        IH: new ImageHelper(),
      };
    },
    components: {ButtonFavorite, selectAdditionalParameter},
  };
</script>

<style lang="scss" scoped>
  button {
    margin: 20px auto 0 auto;
    justify-content: center;
    align-items: center;
    // padding: 20px 109px;
    gap: 10px;

    width: 100%;
    height: 64px;

    /* основной */

    background: #685f5f;
    border-radius: 4px;

    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: white;
  }

  .input_color_1 {
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
    font-weight: 400;
    gap: 10px;


    .quantity {
      font-size: 14px;
      line-height: 19px;
      color: #a9a1a1;
      font-weight: 400;
      width: 100%;
      max-width: 100px;
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
    grid-column: span 1;
    max-width: 420px;
    position: relative;

    a {
      display: block;
    }

    img {
      width: 100%;
      height: auto;
      margin-bottom: 10px;
      background-color: #ebebeb;
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

</style>
