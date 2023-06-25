<template>
  <div class="popup" :class="{ margin: isItemPage }">
    <div
      class="login"
      @click="$store.commit('popups/SET_LOGIN_OPENED', !$store.state.popups.login)"
    ></div>
    <div class="loginPopUp">
      <h3>Вход | Регистрация</h3>
      <div class="buttons">
        <input
          class="button"
          type="tel"
          v-mask="'+7 (###) ### ## ##'"
          v-model="inputPhoneModel"
          autocomplete="true"
          v-focus
        />
        <PincodeInput v-if="isPhoneRequest" class="input-wrapper"
                      v-model="code"
        />
        <button v-if="!isPhoneRequest" :disabled="inputPhoneModel.length !== 18" @click="phoneRequest"
                class="button next">Далее
        </button>
        <p>войти через электронную почту</p>
      </div>
    </div>
  </div>
</template>

<script>
  import PincodeInput from 'vue-pincode-input';

  export default {
    watch: {

      code(value) {
        console.log(value)
        if (value === '2222') {
          this.$store.commit('popups/SET_LOGIN_OPENED', !this.$store.state.popups.login)
          this.$router.push('/profile')
        }
      }
    },
    components: {PincodeInput},
    directives: {
      focus: {
        inserted: function (el) {
          el.focus()
        }
      }
    },
    methods: {
      phoneRequest() {
        console.log(this.inputPhoneModel.length)
        this.isPhoneRequest = true

      }
    },
    data() {
      return {
        code: '',
        isPhoneRequest: false,
        inputPhoneModel: "+7",
      };
    },
    computed: {
      isItemPage() {
        if (this.$route.name === "index") return false;
        else return true;
      },

    },
  };
</script>

<style lang="scss" scoped>
  div.vue-pincode-input-wrapper {
    // any styles you want for wrapper
  }


  .input-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    height: 80px;
  }

  .margin {
    margin-top: -110px;
  }

  .buttons {
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    gap: 25px;
    color: #685f5f;
    max-width: 80%;
    width: 100%;

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
      font-size: 24px;
      /*line-height: 130%;*/
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
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login {
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0.5;
    position: fixed;
  }

  .loginPopUp {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    position: fixed;
    width: 620px;
    height: 400px;
    background-color: #fff;
    margin: 0 auto;
    padding: 60px 110px;

    h3 {
      width: 100%;
      text-align: center;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      color: #685f5f;
    }
  }

  @media (max-width: 640px) {
    .loginPopUp {
      width: calc(100% - 10px);
      padding: 60px 10px
    }
  }
</style>
