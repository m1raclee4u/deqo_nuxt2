<script>
import CartFormAddresSelect from "~/components/Cart/CartFormAddresSelect.vue";

export default {
  components: { CartFormAddresSelect },
  data() {
    return {
      center: [0, 0], // начальные координаты центра карты
      zoom: 10, // начальный уровень масштабирования
      pvzs: [
        {
          "code": "VRN17",
          "name": "пр-т Патриотов",
          "address_comment": "От остановки «Памятник Танкистам» 30 метров в сторону ул. Героев Сибиряков",
          "nearest_station": "Памятник Танкистам",
          "work_time": "Пн-Пт 10:00-20:00, Сб-Вс 10:00-18:00",
          "phones": [
            {
              "number": "+79002603014"
            }
          ],
          "email": "csu@cdek.ru",
          "note": "От остановки «Памятник Танкистам» 30 метров в сторону ул. Героев Сибиряков",
          "type": "PVZ",
          "owner_code": "CDEK",
          "take_only": false,
          "is_handout": true,
          "is_reception": true,
          "is_dressing_room": true,
          "have_cashless": true,
          "have_cash": true,
          "allowed_cod": true,
          "office_image_list": [
            {
              "url": "https://pvzimage.cdek.ru/images/4570/7909_image"
            },
            {
              "url": "https://pvzimage.cdek.ru/images/4570/7911_image"
            },
            {
              "url": "https://pvzimage.cdek.ru/images/4570/7913_image"
            },
            {
              "url": "https://pvzimage.cdek.ru/images/4570/7915_image"
            },
            {
              "url": "https://pvzimage.cdek.ru/images/4570/7907_image"
            }
          ],
          "work_time_list": [
            {
              "day": 1,
              "time": "10:00/20:00"
            },
            {
              "day": 2,
              "time": "10:00/20:00"
            },
            {
              "day": 3,
              "time": "10:00/20:00"
            },
            {
              "day": 4,
              "time": "10:00/20:00"
            },
            {
              "day": 5,
              "time": "10:00/20:00"
            },
            {
              "day": 6,
              "time": "10:00/18:00"
            },
            {
              "day": 7,
              "time": "10:00/18:00"
            }
          ],
          "weight_min": 0.0,
          "weight_max": 100.0,
          "location": {
            "country_code": "RU",
            "region_code": 63,
            "region": "Воронежская область",
            "city_code": 506,
            "city": "Воронеж",
            "fias_guid": "5bf5ddff-6353-4a3d-80c4-6fb27f00c6c1",
            "postal_code": "394065",
            "longitude": 39.126453,
            "latitude": 51.64691,
            "address": "пр-т Патриотов, 26",
            "address_full": "394065, Россия, Воронежская область, Воронеж, пр-т Патриотов, 26"
          },
          "fulfillment": false,
          markerId: 'VRN17',
          markerType: 'Polyline',
          coords: [51.64691, 39.126453],
        },
        {
          "code": "VRN4",
          "name": "На Генерала Лизюкова",
          "address_comment": "ТЦ «Калинка»",
          "nearest_station": "Остановка Кинотеатр «Мир»",
          "work_time": "Пн-Пт 09:00-20:00, Сб-Вс 10:00-18:00",
          "phones": [
            {
              "number": "+79002955350"
            }
          ],
          "email": "csu@cdek.ru",
          "note": "ТЦ «Калинка»",
          "type": "PVZ",
          "owner_code": "CDEK",
          "take_only": false,
          "is_handout": true,
          "is_reception": true,
          "is_dressing_room": true,
          "have_cashless": true,
          "have_cash": true,
          "allowed_cod": true,
          "site": "https://www.cdek.ru/contacts/voronezh_ul_generala_lizyukova_17a-tc_kalinka.html",
          "office_image_list": [
            {
              "url": "https://pvzimage.cdek.ru/images/1255/40798_image"
            },
            {
              "url": "https://pvzimage.cdek.ru/images/1255/40797_image"
            },
            {
              "url": "https://pvzimage.cdek.ru/images/1255/40794_image"
            }
          ],
          "work_time_list": [
            {
              "day": 1,
              "time": "09:00/20:00"
            },
            {
              "day": 2,
              "time": "09:00/20:00"
            },
            {
              "day": 3,
              "time": "09:00/20:00"
            },
            {
              "day": 4,
              "time": "09:00/20:00"
            },
            {
              "day": 5,
              "time": "09:00/20:00"
            },
            {
              "day": 6,
              "time": "10:00/18:00"
            },
            {
              "day": 7,
              "time": "10:00/18:00"
            }
          ],
          "weight_min": 0.0,
          "weight_max": 100.0,
          "location": {
            "country_code": "RU",
            "region_code": 63,
            "region": "Воронежская область",
            "city_code": 506,
            "city": "Воронеж",
            "fias_guid": "5bf5ddff-6353-4a3d-80c4-6fb27f00c6c1",
            "postal_code": "394053",
            "longitude": 39.176743,
            "latitude": 51.706364,
            "address": "ул. Генерала Лизюкова, 17а",
            "address_full": "394053, Россия, Воронежская область, Воронеж, ул. Генерала Лизюкова, 17а"
          },
          "fulfillment": false,
          markerId: 'VRN4',
          markerType: 'Polyline',
          coords: [51.706364, 39.176743],
        },
        {
          "code": "VRN6",
          "name": "На Ворошилова",
          "address_comment": "На перекрестке ул. Ворошилова и ул. Домостроителей. Вход со стороны проезжей части.",
          "nearest_station": "Военных строителей",
          "work_time": "Пн-Пт 09:00-20:00, Сб-Вс 10:00-18:00",
          "phones": [
            {
              "number": "+74733004083"
            }
          ],
          "email": "s.bogma@cdek.ru",
          "note": "На перекрестке ул. Ворошилова и ул. Домостроителей. Вход со стороны проезжей части.",
          "type": "PVZ",
          "owner_code": "CDEK",
          "take_only": false,
          "is_handout": true,
          "is_reception": true,
          "is_dressing_room": true,
          "have_cashless": true,
          "have_cash": true,
          "allowed_cod": true,
          "office_image_list": [
            {
              "url": "https://pvzimage.cdek.ru/images/1485/580_2_VRN6"
            },
            {
              "url": "https://pvzimage.cdek.ru/images/1485/584_4_VRN6"
            },
            {
              "url": "https://pvzimage.cdek.ru/images/1485/579_1_VRN6"
            },
            {
              "url": "https://pvzimage.cdek.ru/images/1485/581_3_VRN6"
            }
          ],
          "work_time_list": [
            {
              "day": 1,
              "time": "09:00/20:00"
            },
            {
              "day": 2,
              "time": "09:00/20:00"
            },
            {
              "day": 3,
              "time": "09:00/20:00"
            },
            {
              "day": 4,
              "time": "09:00/20:00"
            },
            {
              "day": 5,
              "time": "09:00/20:00"
            },
            {
              "day": 6,
              "time": "10:00/18:00"
            },
            {
              "day": 7,
              "time": "10:00/18:00"
            }
          ],
          "weight_min": 0.0,
          "weight_max": 100.0,
          "location": {
            "country_code": "RU",
            "region_code": 63,
            "region": "Воронежская область",
            "city_code": 506,
            "city": "Воронеж",
            "fias_guid": "5bf5ddff-6353-4a3d-80c4-6fb27f00c6c1",
            "postal_code": "394000",
            "longitude": 39.156467,
            "latitude": 51.64696,
            "address": "ул. Ворошилова, 49а",
            "address_full": "394000, Россия, Воронежская область, Воронеж, ул. Ворошилова, 49а"
          },
          "fulfillment": false,
          markerId: 'VRN6',
          markerType: 'Polyline',
          coords: [51.64696, 39.15646],
        },
      ],
      // markers: [
      //   {
      //     markerId: '123',
      //     markerType: 'Polyline',
      //     coords: [54, 39],
      //   },
      //   {
      //     markerId: '124',
      //     markerType: 'Polyline',
      //     coords: [54, 38.5],
      //   }
      // ],
      coords: [54, 37],
      cartForm: {
        cartEmail: "",
        cartName: "",
        cartTel: "",
        cartAddress: "",
        deliveryType: "pvz",
        paymentMethod: "creditCard",
        comment: "  ",
      },
    };
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">{{pvz.name}}</h1>
        <h1 class="red">{{pvz.note}}</h1>
        <p>{{pvz.work_time}}</p>
        <img src="http://via.placeholder.com/350x150">
      `
    }
  },
  methods: {
    onClick(e) {
      this.coords = e.get('coords');
    },
    initCDEK(value) {
      this.$emit('initCdekHandler', value)
    },
    checkFilled() {
      let emptyInputs = 0;
      for (const [key, value] of Object.entries(this.cartForm)) {
        if (value === "" && key != "comment") {
          emptyInputs++;
        }
      }
      if (emptyInputs === 0) {
        this.$emit("emitAllFieldsAreFilled");
        this.$emit("cartFormGetter", this.cartForm);
      } else if (emptyInputs > 0) this.$emit("emitAllFieldsNotFilled");
    },
    setAddress(value) {
      this.cartForm.cartAddress = value;
      this.checkFilled();
    },
  },
  watch: {
    'cartForm.deliveryType'(value){
      if (value !== 'delivery')
      this.initCDEK(value)
    }
  },
  mounted() {
    // получаем город пользователя с помощью Yandex API
    this.$axios.get('https://geolocation.yandex.ru/1.x/', {
      params: {
        json: 1,
        geocode: 'auto',
      },
    }).then(response => {
      const geoObject = response.data.response.GeoObjectCollection.featureMember[0].GeoObject;
      const point = geoObject.Point.pos.split(' ').reverse().map(Number);
      this.center = point; // устанавливаем центр карты на координаты города пользователя
    });
  },
};
</script>


<template>
  <div class="deliveryForm">
    <div class="form">
      <div class="input">
        <label for="email">Email</label>
        <input
          autocomplete="email"
          @input="checkFilled"
          v-model="cartForm.cartEmail"
          class="button"
          type="email"
          name=""
          id="email"
          placeholder="Электронная почта"
        />
      </div>
      <div class="input">
        <label for="name">Ф.И.О.</label>
        <input
          autocomplete="name"
          @input="checkFilled"
          v-model="cartForm.cartName"
          class="button"
          type="text"
          name=""
          id="name"
          placeholder="Ф.И.О"
        />
      </div>
      <div class="input">
        <label for="tel">Телефон</label>
        <input
          autocomplete="tel"
          id="tel"
          @input="checkFilled"
          v-model="cartForm.cartTel"
          class="button"
          type="text"
          v-mask="'+7 (###) ### ## ##'"
          placeholder="+7"
        />
      </div>
      <div id="delivery" class="input">
        <label for="deliveryType">Способ доставки</label>
        <div class="group" id="deliveryType">
          <div class="flex">
            <input
              type="radio"
              name="delivery"
              @input="checkFilled"
              v-model="cartForm.deliveryType"
              value="delivery"
              id="delivery"
              checked
            />
            <label for="delivery">Доставка</label>
          </div>
          <div class="flex">
            <input
              type="radio"
              name="delivery"
              @input="checkFilled"
              v-model="cartForm.deliveryType"
              value="pvz"
              id="pvz"
            />
            <label for="pvz">Пункты выдачи</label>
          </div>
          <div class="flex">
            <input
              type="radio"
              name="delivery"
              @input="checkFilled"
              v-model="cartForm.deliveryType"
              value="postamat"
              id="postamat"
            />
            <label for="postamat">Постамат</label>
          </div>
        </div>
      </div>
      <div v-if="cartForm.deliveryType === 'delivery'" class="input">
        <label for="address">Адрес</label>
        <cart-form-addres-select @getAddress="setAddress" />
      </div>
        <yandex-map :center="center" :zoom="zoom" v-if="cartForm.deliveryType !== 'delivery'" style="height: 600px" :coords="coords" @click="onClick">
          <ymap-marker v-for="pvz in pvzs" :key="pvz.markerId"
            :markerId="pvz.markerId"
            :coords="pvz.coords"
            :balloon-template="balloonTemplate"
          />
        </yandex-map>

      <!-- <div class="input payment">
        <label for="paymentMethod">Способ платежа</label>
        <div class="group">
          <div class="flex" id="paymentMethod">
            <input type="radio" name="payment" id="creditCard" checked />
            <label for="creditCard">Банковская карта</label>
          </div>
        </div>
      </div> -->
      <div class="input">
        <label for="comment">Коментарий</label>
        <textarea
          @input="checkFilled"
          v-model="cartForm.comment"
          style="resize: none; min-height: 140px"
          class="button"
          name="comment"
          id="comment"
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
label {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  /* основной */

  color: #685f5f;
}

.button {
  text-align: left;
  padding: 18px 20px;
  border: 1px solid #685f5f;
  border-radius: 4px;
}

.deliveryForm {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;

  h4 {
    font-weight: 600;
    font-size: 28px;
    line-height: 33px;
    color: #4a4444;
  }
}

.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 980px;
  position: relative;

  textarea {
    max-width: 710px;
  }

  input {
    max-width: 710px;
  }

  .group {
    max-width: 710px;
    width: 100%;
    display: flex;
    gap: 60px;

    .flex {
      display: flex;
      gap: 20px;
    }
  }
}

@media (max-width: 1024px) {
  .deliveryForm {
    max-width: 592px;
    margin: 0 auto;

    #delivery {
      align-items: flex-start;
    }

    .input {
      #deliveryType {
        flex-direction: column;
      }

      .group {
        gap: 32px;
        max-width: 370px;
      }

      textarea {
        max-width: 370px;
      }
    }
  }

  input {
    max-width: 370px !important;
  }
}

@media (max-width: 640px) {
  .input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    label {
      font-size: 16px;
    }

    input {
      font-size: 16px;
    }
  }

  .payment {
    gap: 20px;
  }

  #delivery {
    gap: 20px;
  }

  #deliveryType {
    gap: 20px !important;
  }
}

@media (max-width: 640px) {
}
</style>
