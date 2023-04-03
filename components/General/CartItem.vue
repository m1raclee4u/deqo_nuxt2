<script>
import { mapActions } from "vuex";
import ImageHelper from "~/plugins/imageHelper";

export default {
  data() {
    return {
      IH: new ImageHelper(),
      showMobilePrice640: false,
      showMobileName480: false,
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    itemQuantity() {
      return this.item.quantity;
    },
  },
  mounted() {
    const mediaQueryCart = window.matchMedia("(max-width:640px)");
    const mediaQueryCart480 = window.matchMedia("(max-width:480px)");
    this.showMobilePrice640 = mediaQueryCart.matches;
    this.showMobileName480 = mediaQueryCart480.matches;

    const listener = (e) => (this.showMobilePrice640 = e.matches);
    const listenerName = (e) => (this.showMobileName480 = e.matches);
    mediaQueryCart.addListener(listener);
    mediaQueryCart480.addListener(listenerName);
    this.$once("hook:beforeDestroy", () =>
      mediaQueryCart.removeListener(listener)
    );
    this.$once("hook:beforeDestroy", () =>
      mediaQueryCart480.removeListener(listenerName)
    );
  },
  updated() {
    if (this.showMobileName480 === true) {
      this.showMobilePrice640 = false;
    }
  },
  watch: {
    itemQuantity(val) {
      if (val > 0) {
        this.$store.dispatch("cart/setQuantityProductCart", {
          data: this.item,
          quantity: val,
        });
      }
      if (val === 0) {
        this.$store.dispatch("cart/removeProduct", this.item);
      }
    },
  },
  methods: {
    ...mapActions({
      removeProduct: "cart/removeProduct",
    }),
    deleteClickHandler() {
      this.$emit("deleteClickHandler");
      this.removeProduct(this.item);
    },
  },
};
</script>

<template>
  <div class="itemWrapper">
    <div class="item">
      <div class="top">
        <Nuxt-Link :to="`products/${item.slug}`">
          <img
            class="image"
            :src="IH.getUrl($axios.defaults.baseURL + `/` + item.image, 100)"
            alt=""
          />
        </Nuxt-Link>
        <div v-if="showMobileName480" class="name">
          <p>{{ item.title }}</p>
          <span v-if="item.badge_bestseller">Bestsellers</span>
          <span v-else-if="item.badge_coming_soon">Предзаказ</span>
          <span v-else-if="item.badge_absent">Нет в наличии</span>
        </div>
      </div>
      <div class="infoWrapper">
        <div class="info">
          <div v-if="!showMobileName480" class="name">
            <p>{{ item.title }}</p>
            <span v-if="item.badge_bestseller">Bestsellers</span>
            <span v-else-if="item.badge_coming_soon">Предзаказ</span>
            <span v-else-if="item.badge_absent">Нет в наличии</span>
          </div>
          <div class="infoGroup">
            <div class="infoGroup__left">
              <div
                class="color"
                :style="{
                  backgroundColor: this.item.color.value,
                  border:
                    this.item.color.name === 'Белый'
                      ? `1px solid lightgrey`
                      : `none`,
                }"
              ></div>
              <div class="size" :id="item.size">{{ item.size.name }}</div>
              <div class="quantity">
                <div @click="item.quantity--" class="buttons">
                  <img
                    :src="require('/assets/img/icons/quantity/minus.svg')"
                    alt=""
                  />
                </div>
                <input
                  class="quantity_number"
                  type="number"
                  name="quantity"
                  v-model="item.quantity"
                />
                <!-- <p>{{item.quantity}}</p> -->
                <div @click="item.quantity++" class="buttons">
                  <img src="../../assets/img/icons/quantity/plus.svg" alt="" />
                </div>
              </div>
            </div>
            <div v-if="!showMobilePrice640" class="price">
              <p>{{ item.price * item.quantity }}&nbsp;₽</p>
              <span v-if="item?.old_price">{{ item.old_price }}&nbsp;₽</span>
            </div>
          </div>
        </div>
      </div>
      <div class="delete" @click="deleteClickHandler"></div>
    </div>
    <div v-if="showMobilePrice640" class="price">
      <p>{{ item.price * item.quantity }}&nbsp;₽</p>
      <span v-if="item?.old_price">{{ item.old_price }}&nbsp;₽</span>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.itemWrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.price {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-direction: row-reverse;

  p {
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    color: #685f5f;
  }

  span {
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #a9a1a1;
    text-decoration: line-through;
  }
}

.top {
  display: flex;
  gap: 20px;
}

.item {
  width: 100%;
  position: relative;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .infoWrapper {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 40px;
    .name {
      width: 100%;
      max-width: 200px;
    }

    .infoGroup {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      width: 100%;

      .infoGroup__left {
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 40px;
        max-width: 640px;
      }
    }
  }

  .name {
    a {
      color: #4a4444;
      text-decoration: none;
    }

    span {
      font-size: 16px;
      line-height: 100%;
      color: #a9a1a1;
    }
  }

  .delete {
    width: 25px;
    height: 20px;
    cursor: pointer;
    // background-color: black;
    background-image: url("../../assets/img/icons/deleteCartItem.svg");
    background-repeat: no-repeat;
  }

  .color {
    width: 38px;
    height: 38px;
    border-radius: 50%;
  }

  .buttons {
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .quantity {
    font-size: 22px;
    display: flex;
    align-items: center;
    gap: 25px;

    .quantity_number {
      -moz-user-select: none;
      -khtml-user-select: none;
      user-select: none;
      width: 28px;
      height: 28px;
      text-align: center;
      background-color: #f0efef;
      border-radius: 4px;

      font-size: 22px;
      line-height: 26px;

      /* основной */

      color: #685f5f;
    }

    svg {
      width: 28px;
      height: 28px;
    }
  }

  .size {
    width: 38px;
    height: 38px;
    background: #685f5f;
    border-radius: 4px;
    font-weight: 400;
    font-size: 18px;
    line-height: 36px;
    /* identical to box height */
    text-transform: uppercase;
    text-align: center;
    letter-spacing: -0.02em;

    color: #ffffff;
  }

  .image {
    width: 100px;
    height: 100%;
    border-radius: 4px;
  }

  // justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    gap: 40px;
    cursor: pointer;
  }

  .center {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 30px;
  }
}

@media (max-width: 1472px) {
  main {
    padding: 0 32px;
  }

  .infoWrapper {
    align-items: stretch !important;
  }

  .cartWrapper {
    max-width: 960px;
  }

  .delete {
    position: absolute;
    top: 0;
    right: 0;
  }

  .info {
    flex-direction: column;
    align-items: flex-start !important;

    .name {
      width: 100%;

      p {
        width: 100%;

        text-align: left;
      }
    }

    .infoGroup {
      .infoGroup__left {
        gap: 20px !important;
        justify-content: flex-start !important;
      }
    }
  }
}

@media (max-width: 1024px) {
}

@media (max-width: 640px) {
  .info {
    flex-direction: column;

    .infoGroup {
      .infoGroup__left {
        width: unset;
        justify-content: space-between !important;
      }
    }
  }
}

@media (max-width: 480px) {
  .price {
    p {
      font-size: 18px;
    }
    span {
      font-size: 16px;
    }
  }
  .item {
    flex-direction: column;
    align-items: flex-start !important;
    .name{
      max-width: 150px;
    }
    .quantity {
      gap: 10px;
    }
    .image {
      width: 78px;
    }
  }
  .info {
    .infoGroup {
      .infoGroup__left {
        width: unset !important;
        gap: 10px !important;
        .color {
          width: 28px;
          height: 28px;
        }
        .size {
          width: 28px;
          height: 28px;
          font-size: 14px;
          line-height: 27px;
        }
      }
    }
  }
}
</style>