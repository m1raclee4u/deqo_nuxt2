<template>
  <section>
    <h4 class="title">Частые вопросы</h4>
    <div class="questions">
      <div class="question first">
        <h5>Доставка</h5>
        <div class="lines">
          <div class="line">
            <div class="show" @click="onClickPriceDelivery">
              <p>Стоимость и сроки доставки</p>
              <i :class="{ downActive: priceDeliveryChecked }" class="down"></i>
            </div>
            <div v-if="priceDeliveryChecked === true" class="hidden">
              <ul>
                <li>Курьерская доставка | 590 ₽ | 1-6 рабочих дней</li>
                <li>Экспресс–доставка | 890 ₽ | до 3 часов</li>
                <li>В пункт выдачи СДЭК | 0 ₽ | 2-3 рабочих дня</li>
              </ul>
              <Nuxt-link to="/delivery">подробнее</Nuxt-link>
            </div>
          </div>
          <div class="line">
            <div class="show" @click="onClickGetAnOrder">
              <p>Как получить заказ?</p>
              <i :class="{ downActive: getAnOrderChecked }" class="down"></i>
            </div>
            <div v-if="getAnOrderChecked === true" class="hidden">
              <ul>
                <li>Курьерская доставка | 590 ₽ | 1-6 рабочих дней</li>
                <li>Экспресс–доставка | 890 ₽ | до 3 часов</li>
                <li>В пункт выдачи СДЭК | 0 ₽ | 2-3 рабочих дня</li>
              </ul>
              <Nuxt-link to="/delivery">подробнее</Nuxt-link>
            </div>
          </div>
          <div class="line">
            <div class="show" @click="onClickOrderPackaging">
              <p>Как будет упакован заказ?</p>
              <i
                :class="{ downActive: orderPackagingChecked }"
                class="down"
              ></i>
            </div>
            <div v-if="orderPackagingChecked === true" class="hidden">
              <ul>
                <li>Курьерская доставка | 590 ₽ | 1-6 рабочих дней</li>
                <li>Экспресс–доставка | 890 ₽ | до 3 часов</li>
                <li>В пункт выдачи СДЭК | 0 ₽ | 2-3 рабочих дня</li>
              </ul>
              <Nuxt-link to="/delivery">подробнее</Nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="question second">
        <h5>Предзаказ</h5>
        <div class="lines">
          <div class="line">
            <div class="show" @click="onClickPriceDelivery_2">
              <p>Стоимость и сроки доставки</p>
              <i
                :class="{ downActive: priceDeliveryChecked_2 }"
                class="down"
              ></i>
            </div>
            <div v-if="priceDeliveryChecked_2 === true" class="hidden">
              <ul>
                <li>Курьерская доставка | 590 ₽ | 1-6 рабочих дней</li>
                <li>Экспресс–доставка | 890 ₽ | до 3 часов</li>
                <li>В пункт выдачи СДЭК | 0 ₽ | 2-3 рабочих дня</li>
              </ul>
              <Nuxt-link to="/delivery">подробнее</Nuxt-link>
            </div>
          </div>
          <div class="line">
            <div class="show" @click="onClickGetAnOrder_2">
              <p>Как получить заказ?</p>
              <i :class="{ downActive: getAnOrderChecked_2 }" class="down"></i>
            </div>
            <div v-if="getAnOrderChecked_2 === true" class="hidden">
              <ul>
                <li>Курьерская доставка | 590 ₽ | 1-6 рабочих дней</li>
                <li>Экспресс–доставка | 890 ₽ | до 3 часов</li>
                <li>В пункт выдачи СДЭК | 0 ₽ | 2-3 рабочих дня</li>
              </ul>
              <Nuxt-link to="/delivery">подробнее</Nuxt-link>
            </div>
          </div>
          <div class="line">
            <div class="show" @click="onClickOrderPackaging_2">
              <p>Как будет упакован заказ?</p>
              <i
                :class="{ downActive: orderPackagingChecked_2 }"
                class="down"
              ></i>
            </div>
            <div v-if="orderPackagingChecked_2 === true" class="hidden">
              <ul>
                <li>Курьерская доставка | 590 ₽ | 1-6 рабочих дней</li>
                <li>Экспресс–доставка | 890 ₽ | до 3 часов</li>
                <li>В пункт выдачи СДЭК | 0 ₽ | 2-3 рабочих дня</li>
              </ul>
              <Nuxt-link to="/delivery">подробнее</Nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="question third">
        <h5>Возврат</h5>
        <div class="lines">
          <div class="line">
            <div class="show" @click="onClickPriceDelivery_3">
              <p>Стоимость и сроки доставки</p>
              <i
                :class="{ downActive: priceDeliveryChecked_3 }"
                class="down"
              ></i>
            </div>
            <div v-if="priceDeliveryChecked_3 === true" class="hidden">
              <ul>
                <li>Курьерская доставка | 590 ₽ | 1-6 рабочих дней</li>
                <li>Экспресс–доставка | 890 ₽ | до 3 часов</li>
                <li>В пункт выдачи СДЭК | 0 ₽ | 2-3 рабочих дня</li>
              </ul>
              <Nuxt-link to="/refund">подробнее</Nuxt-link>
            </div>
          </div>
          <div class="line">
            <div class="show" @click="onClickGetAnOrder_3">
              <p>Как получить заказ?</p>
              <i :class="{ downActive: getAnOrderChecked_3 }" class="down"></i>
            </div>
            <div v-if="getAnOrderChecked_3 === true" class="hidden">
              <ul>
                <li>Курьерская доставка | 590 ₽ | 1-6 рабочих дней</li>
                <li>Экспресс–доставка | 890 ₽ | до 3 часов</li>
                <li>В пункт выдачи СДЭК | 0 ₽ | 2-3 рабочих дня</li>
              </ul>
              <Nuxt-link to="/refund">подробнее</Nuxt-link>
            </div>
          </div>
          <div class="line">
            <div class="show" @click="onClickOrderPackaging_3">
              <p>Как будет упакован заказ?</p>
              <i
                :class="{ downActive: orderPackagingChecked_3 }"
                class="down"
              ></i>
            </div>
            <div v-if="orderPackagingChecked_3 === true" class="hidden">
              <ul>
                <li>Курьерская доставка | 590 ₽ | 1-6 рабочих дней</li>
                <li>Экспресс–доставка | 890 ₽ | до 3 часов</li>
                <li>В пункт выдачи СДЭК | 0 ₽ | 2-3 рабочих дня</li>
              </ul>
              <Nuxt-link to="/refund">подробнее</Nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      priceDeliveryChecked: false,
      getAnOrderChecked: false,
      orderPackagingChecked: false,
      priceDeliveryChecked_2: false,
      getAnOrderChecked_2: false,
      orderPackagingChecked_2: false,
      priceDeliveryChecked_3: false,
      getAnOrderChecked_3: false,
      orderPackagingChecked_3: false,
    };
  },
  methods: {
    onClickPriceDelivery() {
      this.priceDeliveryChecked = !this.priceDeliveryChecked;
    },
    onClickGetAnOrder() {
      this.getAnOrderChecked = !this.getAnOrderChecked;
    },
    onClickOrderPackaging() {
      this.orderPackagingChecked = !this.orderPackagingChecked;
    },
    onClickPriceDelivery_2() {
      this.priceDeliveryChecked_2 = !this.priceDeliveryChecked_2;
    },
    onClickGetAnOrder_2() {
      this.getAnOrderChecked_2 = !this.getAnOrderChecked_2;
    },
    onClickOrderPackaging_2() {
      this.orderPackagingChecked_2 = !this.orderPackagingChecked_2;
    },
    onClickPriceDelivery_3() {
      this.priceDeliveryChecked_3 = !this.priceDeliveryChecked_3;
    },
    onClickGetAnOrder_3() {
      this.getAnOrderChecked_3 = !this.getAnOrderChecked_3;
    },
    onClickOrderPackaging_3() {
      this.orderPackagingChecked_3 = !this.orderPackagingChecked_3;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
  max-width: 1676px;
  margin: 0 auto;
  .title {
    width: 100%;
    text-align: center;
    font-size: 32px;
    line-height: 38px;

    text-align: center;
    letter-spacing: 0.02em;
    font-feature-settings: "kern" off;

    color: #685f5f;
  }
}
.questions {
  display: flex;
  align-items: flex-start;
  // justify-content: space-between;
  gap: 100px;
  .question {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 490px;
    // height: 196px;
    background: #f9f7f7;
    border-radius: 8px;
    padding: 20px 40px;
    h5 {
      font-size: 24px;
      line-height: 29px;
      /* identical to box height */

      color: #685f5f;
    }
  }
}
.show {
  cursor: pointer;
}
.hidden {
  display: flex;
  flex-direction: column;
  gap: 10px;
  a {
    text-decoration: none;
    text-align: center;
    width: 120px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    padding: 9px 20px 12px;
    margin: 0 0 0 auto;

    /* средний */

    color: #a9a1a1;
    &:hover {
      padding: 9px 20px 12px;
      background: #5b5353;
      border-radius: 30px;
    }
  }
}
.lines {
  display: flex;
  flex-direction: column;
  gap: 10px;
  .line {
    display: flex;
    flex-direction: column;
    gap: 10px;
    // justify-content: space-between;
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;

    color: #685f5f;
  }
  .show {
    display: flex;
    justify-content: space-between;
  }
}

.downActive {
  background-image: url("../../assets/img/icons/buttonDown_active.svg") !important;
}
.down {
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-image: url("../../assets/img/icons/buttonDown.svg");
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.9s ease all;
  &:hover {
    background-image: url("../../assets/img/icons/buttonDown_active.svg");
  }
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
ul li {
  position: relative;
  padding-left: 16px;
  margin-left: 12px;
}
ul li::before {
  content: "";
  position: absolute;

  top: 14px;
  left: 0;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #8bd74b;
}
ul li:not(:last-child) {
  margin-bottom: 8px;
}
ul li::before {
  background-color: #a9a1a1;
}
</style>
