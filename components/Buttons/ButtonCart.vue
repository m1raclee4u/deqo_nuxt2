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
    itemComputed() {
      return JSON.parse(JSON.stringify(this.item));
    },
    ...mapState({
      products: (state) => state.cart.products,
    }),
    isProductAdded() {
      let added = this.products.find((p) => {
        if (
          p.id === this.itemComputed.id &&
          p.color === this.itemComputed.color &&
          p.size === this.itemComputed.size
        ) {
          return true;
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
        this.$set(this.itemComputed, "color", this.colorChecked);
        // this.$set(this.itemComputed, "size", this.sizeChecked);
        this.$set(this.itemComputed, "quantity", 1);
        console.log(this.itemComputed);
        this.addProduct(this.itemComputed);
        // if (
        //   this.$route.name === "favorite" &&
        //   this.$store.state.selectParametrs != false
        // ) {
        //   this.$store.commit(
        //     "SET_SELECT_PARAMETERS_OPENED",
        //     !this.$store.state.selectParametrs
        //   );
        // }
      }
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
