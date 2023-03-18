<template>
  <div class="item">
    <div class="left">
      <Nuxt-Link :to="`/${item.category}/${item.name}`">
        <img
          :src="
            IH.getUrl($axios.defaults.baseURL + `/` + item.images[0].path, 100)
          "
          alt=""
        />
      </Nuxt-Link>
      <div class="name">
        <Nuxt-Link @click="$router" :to="`/products/${item.color.slug}`"
          ><p>{{ item.title }}</p></Nuxt-Link
        >
        <span v-if="item.badge_bestseller">Bestsellers</span>
        <span v-else-if="item.badge_coming_soon">Предзаказ</span>
        <span v-else-if="item.badge_absent">Нет в наличии</span>
      </div>
    </div>
    <div class="center">
      <div
        class="color"
        :style="{
          backgroundColor: this.item.color.value,
          border:
            this.item.color.name === 'Белый' ? `1px solid lightgrey` : `none`,
        }"
      ></div>
      <div class="size" :id="item.size">{{ item.size.name }}</div>
      <div class="quantity">
        <div @click="itemQuantity--" class="buttons">
          <img src="../../assets/img/icons/quantity/minus.svg" alt="" />
        </div>
        <input
          class="quantity_number"
          type="number"
          name="quantity"
          v-model="itemQuantity"
        />
        <!-- <p>{{item.quantity}}</p> -->
        <div @click="itemQuantity++" class="buttons">
          <img src="../../assets/img/icons/quantity/plus.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="right">
      <div class="price">
        <p>{{ item.price * item.quantity }}&nbsp;₽</p>
      </div>
      <div class="delete" @click="deleteClickHandler"></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ImageHelper from "~/plugins/imageHelper";

export default {
  data() {
    return {
      itemQuantity: 0,
      IH: new ImageHelper(),
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  beforeMount() {
    this.itemQuantity = this.item.quantity;
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
      this.removeProduct(this.item);
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
  border-bottom: 1px solid #a9a1a1;
  max-width: 980px;
  gap: 20px;
  display: flex;
  align-items: center;
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
      width: 25px;
      text-align: center;
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
  .cart__img {
    width: 99.56px;
    height: 128px;
    // margin-bottom: 20px;
  }
  // justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    gap: 40px;
    width: 480px;
    cursor: pointer;
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
    .price {
      display: flex;
      width: 164px;
      flex-direction: row-reverse;
    }
    p {
      -moz-user-select: none;
      -khtml-user-select: none;
      user-select: none;
      font-weight: 500;
      font-size: 22px;
      line-height: 26px;
      color: #685f5f;
    }
  }
}
</style>