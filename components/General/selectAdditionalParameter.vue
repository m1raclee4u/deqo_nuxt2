<template>
  <div class="popup">
    <div
      class="login"
      @click="
        $store.commit(
          'popups/SET_SELECT_PARAMETERS_OPENED',
          !$store.state.popups.selectSize
        )
      "
    ></div>
    <div class="loginPopUp">
      <h3>Выберите размер</h3>
      <product-sizes @checkedSizeHandler="checkedSizeSetter" :sizes="this.item.sizes"/>
    </div>
  </div>
</template>

<script>
import ButtonCart from "~/components/Buttons/ButtonCart.vue";

export default {
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      highlightedSize: false,
      highlightedColor: false,
      sizeChecked: "",
      sizes: ["os", "xs", "s", "m", "l", "xl", "2xl"],
    };
  },
  beforeDestroy() {
    this.$emit("onClosed");
  },
  methods: {
    checkedSizeSetter(){

    },
    sizeCheck() {
    //   this.$set(this.itemComputedPopUp, "size", this.sizeChecked);
    },
    colorCheck() {
    //   this.$set(this.itemComputedPopUp, "color", this.colorChecked);
    },
    highlightedSizeMethod() {
      this.highlightedSize = !this.highlightedSize;
    },
    highlightedColorMethod() {
      this.highlightedColor = !this.highlightedColor;
    },
  },
  components: {
    ButtonCart,
  },
  computed: {

  },
};
</script>

<style lang="scss" scoped>
.highlightedColorClass {
  // border: 2px solid #BD270F !important;
  // background-color: #BC716E !important;
  opacity: 0.5;
  background-image: url("@/assets/img/icons/colorNotChecked.svg");
  background-position: center;
  background-size: 10px 10px;
  background-repeat: no-repeat;
  box-sizing: border-box;
}
.highlightedSizeClass {
  box-sizing: border-box;
  border: 2px solid #bd270f !important;
  color: #bd270f !important;
}
.check {
  display: flex;
  flex-direction: column;
  gap: 28px;
}
.size {
  .sizesPopup {
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
  }
  .sizes {
    margin-bottom: 10px;
  }
  display: flex;
  flex-direction: column;
  gap: 20px;
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    /* средний */

    color: #a9a1a1;

    // margin-bottom: 10px;
  }
}
.color {
  display: flex;
  flex-direction: column;
  gap: 25px;
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    /* средний */

    color: #a9a1a1;

    // margin-bottom: 10px;
  }
}
.colors {
  gap: 18px;
  align-items: center;
}
.sizes {
  gap: 10px;
}
.flex {
  // gap: 10px;
  align-items: center;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #685f5f;
  p {
    width: 100%;
    text-align: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    cursor: pointer;
  }
  .button {
    text-align: left;
    padding: 18px 20px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height */
    border: 1px solid #685f5f;
    border-radius: 4px;

    /* основной */
  }
  .next {
    border: none;
    text-align: center;
    color: #ffffff;
    font-weight: 400;
    background-color: #a9a1a1;
    cursor: pointer;
  }
}

.popup {
  z-index: 300;
  width: 100vw;
  height: 100vh;
  position: fixed;
}
.login {
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
  top: 0;
  left: 0;
  position: fixed;
}
.loginPopUp {
  display: flex;
  flex-direction: column;
  gap: 44px;
  position: fixed;
  width: 492px;
  //   height: 420px;
  background-color: #fff;
  top: 23%;
  right: 0;
  left: 0;
  margin: 0 auto;
  padding: 64px;
  h3 {
    width: 100%;
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #685f5f;
  }
}
</style>
