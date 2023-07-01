<template>
  <div class="wrapper">
    <h3>Вход | Регистрация</h3>
    <div class="buttons">
      <input
        class="button"
        type="tel"
        v-mask="'+7 ### ###-##-##'"
        v-model="inputPhoneModel"
        autocomplete="true"
        placeholder="+7"
        v-focus
      >
      <div class="pin">
        <PincodeInput v-if="isPhoneRequest" class="input-wrapper"
                      v-model="code"
        />
        <span style="margin-top: 10px;" v-if="errors.wrongPincode">* {{errors.wrongPincode}}</span>
      </div>
      <button v-if="!isPhoneRequest" :disabled="inputPhoneModel.length !== 16" @click="phoneRequest"
              class="button next">Далее
      </button>
      <button @click="phoneRequest" :disabled="isTimerShown" v-if="isResendButtonShown" class="timer button next">
        <span>отправить код еще раз</span>
        <span v-if="isTimerShown" class="timer_icon">
          <i class="el-icon-timer"></i>
          <b>{{ timer }} сек.</b>
        </span>
      </button>
      <p>войти через электронную почту</p>
    </div>
  </div>
</template>

<script>
import PincodeInput from 'vue-pincode-input';

export default {
  watch: {
    inputPhoneModel(value) {
      if (!value.includes('+7 ')) {
        this.inputPhoneModel = '+7 '
      }
    },
    timer(value) {
      if (value === 0) {
        this.isTimerShown = false
      }
    },
    isTimerShown(value) {
      if (value === true) {
        this.timerInterval()
      }
    },
    code(value) {
      console.log(value)
      if (value.length === 4) {
        this.login()
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
    async login() {
      await this.$axios.$post('/auth/login', {
        phone: this.inputPhoneModel,
        code: this.code
      }).then(res => {
        this.setBearerToken(res)
      }).catch(error => {
        this.errors.wrongPincode = error.response.data.message
      })
    },
    setBearerToken(res) {
      const bearerToken = res.access_token;
      localStorage.setItem('token', bearerToken);
      this.$router.push('/user')
    },
    phoneRequest() {
      console.log(this.inputPhoneModel.length)
      this.isPhoneRequest = true
      this.isResendButtonShown = true
      this.isTimerShown = true
      this.$axios.$post('/auth/requestCode', {
        phone: this.inputPhoneModel
      })
    },
    timerInterval() {
      this.timer = 60
      let timerCounter = setInterval(() => {
        this.timer--
      }, 1000)
      setTimeout(() => {
        clearInterval(timerCounter)
      }, 60000);
    }
  },
  data() {
    return {
      errors: {
        wrongPincode: false,
      },
      isResendButtonShown: false,
      isTimerShown: false,
      code: '',
      isPhoneRequest: false,
      inputPhoneModel: '+7',
      timer: 60,
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

.pin{
  display: flex;
  flex-direction: column;
  gap: 1px;
  span{
    font-size: 12px;
    color: #a40101;
  }
}

.timer {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px !important;

  span {
    margin-right: 10px;
  }

  .timer_icon {
    display: flex;
    align-items: center;

    b {
      font-weight: 400;
    }
  }
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
    text-decoration: underline;
  }

  b {
    width: 70px;
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

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 620px;
  height: 400px;
  background-color: #fff;
  margin: 0 auto;
  padding: 60px 110px;
  min-height: 70vh;

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
  .wrapper {
    width: calc(100% - 10px);
    padding: 60px 10px
  }
}
</style>
