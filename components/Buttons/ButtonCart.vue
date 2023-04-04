<template>
  <button @click="buyClickHandler" v-if="!isProductAdded">
    Добавить в корзину
  </button>
  <button class="remove" @click="$router.push('/cart')" v-else>
    Перейти в корзину
  </button>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    sizeChecked: {},
    colorChecked: {},
  },
  computed: {
    ...mapState({
      products: (state) => state.cart.products,
    }),
    computedItem() {
      return {
        product_id: this.item.product_id,
        color_id: this.item.color_id,
        size_id: this.sizeChecked.id,
        quantity: 1,
        key: `${this.item.product_id}_${this.item.color_id}_${this.sizeChecked.id}`,
      };
    },
    isProductAdded() {
      let added = this.products.find((p) => {
        if (p.key === this.computedItem.key) {
          return true;
        } else {
          return false;
        }
      });
      return added;
    },
  },
  methods: {
    ...mapActions({
      addProduct: "cart/addProduct",
    }),
    async buyClickHandler() {
      const delay = (ms) => new Promise((res) => setTimeout(res, ms));

      if (this.sizeChecked === "") {
        this.$emit("sizeValidationHighlightHandler", true);
        await delay(1000);
        this.$emit("sizeValidationHighlightHandler", false);
      } else {
        this.addProduct(this.computedItem);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.remove {
  background: white;
  border: 2px solid #685f5f;
  border-radius: 4px;
  color: #685f5f;
}
button {
  // font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */
  cursor: pointer;
  height: 60px;
  width: 100%;

  text-align: center;
  background: #685f5f;
  border: 2px solid #685f5f;
  border-radius: 4px;
  color: white;
}
</style>
