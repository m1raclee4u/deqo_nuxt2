<template>
  <div v-if="$store.state.cart.products.length > 0" class="windowCart">
    <div class="informationPreSale">
      <h5>Обращаем внимание</h5>
      <p>
        В заказе есть товар доступный для предзаказа. При оплате его стоимость
        будет входить в текущий чек, а дата доставки отличаться. <br /><br />
        Срок производства модели 15 — 29 декабря. В эти дни свяжемся с вами,
        уточним адрес и условия доставки.
      </p>
    </div>
    <div class="line">
      <p>Скидка</p>
      <p>{{ "1000" }} ₽</p>
    </div>
    <div class="line">
      <p>Доставка</p>
      <p>{{ "1000" }} ₽</p>
    </div>
    <div class="line">
      <p><b>Итого</b></p>
      <p>
        <b>{{ fullprice }} ₽</b>
      </p>
    </div>
    <button v-if="allFieldsAreFilled === true">Оплатить</button>
    <button v-else disabled>Заполните все поля</button>
    <p class="offer">
      Нажимая на кнопку «оплатить», я принимаю условия
      <Nuxt-link to="">публичной оферты</Nuxt-link>,
      <Nuxt-link to="">политики конфиденциальности</Nuxt-link> и
      <Nuxt-link to="">публичной оферты (предзаказ)</Nuxt-link>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    allFieldsAreFilled: "",
  },
  mounted() {
  },
  computed: {
    ...mapGetters("cart", ["getProducts"]),
    fullprice() {
      let priceStart = 0
      for (const item in this.getProducts) {
        if (Object.hasOwnProperty.call(this.getProducts, item)) {
          const element = this.getProducts[item];
          priceStart += element.quantity * element.price;
        }
      }
      return priceStart
    },
  },
};
</script>

<style lang="scss" scoped>
.windowCart {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 380px;
  // max-width: 380px;
  // height: 550px;
  // max-height: 550px;
  .line {
    display: flex;
    justify-content: space-between;
    p {
      font-size: 18px;
      line-height: 21px;
      color: #685f5f;
    }
    b {
      font-size: 24px;
      line-height: 28px;
      color: #1a1a1a;
    }
  }
  .informationPreSale {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    padding: 20px;
    background-color: #a9a1a1;
    h5 {
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;

      color: #ffffff;
    }
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

      color: #ffffff;
    }
  }
  .offer {
    font-size: 14px;
    line-height: 17px;
    color: #a9a1a1;
    a {
      font-size: 14px;
      line-height: 17px;
      color: #a9a1a1;
    }
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
    &:disabled {
      color: #685f5f;
      background-color: #fff;
      cursor: unset;
    }
  }
}
</style>