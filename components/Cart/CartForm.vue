<script>
  import CartFormAddresSelect from "~/components/Cart/CartFormAddresSelect.vue";
  import WidgetCDEKYandex from "~/components/Cart/WidgetCDEKYandex";

  export default {
    components: {WidgetCDEKYandex, CartFormAddresSelect},
    data() {
      return {
        cartForm: {
          cartEmail: "",
          cartName: "",
          cartTel: "",
          cartAddress: "",
          deliveryType: "delivery",
          paymentMethod: "creditCard",
          comment: "  ",
        },
      };
    },
    methods: {
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
  }

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
        <label>Адрес</label>
        <cart-form-addres-select @getAddress="setAddress"/>
      </div>
      <widget-c-d-e-k-yandex :deliveryType="cartForm.deliveryType" v-show="cartForm.deliveryType !== 'delivery'"/>
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
