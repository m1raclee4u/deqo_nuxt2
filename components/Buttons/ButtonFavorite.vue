<template>
  <div
    class="buttonFavorite"
    :class="{ block: currentRoute && inSlider === 'inSlug' }"
  >
    <button
      :class="{ big: currentRoute && inSlider === 'inSlug' && !isProductAdded}"
      class="like"
      v-if="!isProductAdded"
      @click.prevent="buyClickHandler"
    ></button>
    <button
      :class="{ big: currentRoute && inSlider === 'inSlug' && !isProductAdded, big_added: isProductAdded && currentRoute && inSlider === 'inSlug' }"
      class="like added"
      v-else
      @click.prevent="addedClickHandler"
    ></button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    inSlider: {},
  },

  computed: {
    ...mapState({
      products: (state) => state.favorites.products,
    }),
    isProductAdded() {
      return this.products.find((p) => p.id === this.item.id);
    },
    currentRoute() {
      if (this.$route.name === "category-item") return true;
      else return false;
    },
  },
  methods: {
    ...mapActions({
      addProduct: "favorites/addProduct",
      removeProduct: "favorites/removeProduct",
    }),
    buyClickHandler() {
      this.addProduct(this.item);
    },
    addedClickHandler() {
      this.removeProduct(this.item.id);
    },
  },
};
</script>


<style lang="scss" scoped>
.buttonFavorite {
  position: absolute;
  top: 14px;
  right: 14px;
  height: 60px;
}
.added {
  background-image: url("../../assets/img/icons/heart_on.svg") !important;
}
.block {
  position: relative !important;
  top: unset;
  right: unset;
}
.big_added{
  width: 60px !important;
  height: 60px !important;
  background-color: #A9A1A1 !important;
  position: relative;
  border-radius: 4px;
  background-image: url("../../assets/img/icons/heart_small_white.svg") !important;
  background-size: 24px 22px !important;
  transition: 0.2s;
  &:hover {
    background-size: 28px 25px !important;
  }
}
.big {
  width: 60px !important;
  height: 60px !important;
  background-color: #685f5f !important;
  position: relative;
  border-radius: 4px;
  background-image: url("../../assets/img/icons/heart_small.svg") !important;
  background-size: 24px 22px !important;
  transition: 0.2s;
  &:hover {
    background-size: 28px 25px !important;

    // transform: scale(1.2);
  }
}
.like {
  background-image: url("../../assets/img/icons/heart.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-color: unset;
  background-size: cover;
  width: 30px;
  height: 30px;

  // border-radius: 50%;

  &:hover {
    background-image: url("../../assets/img/icons/heart_on.svg");
  }
}
</style>