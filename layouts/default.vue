<template>
  <div>
    <HeaderBlack/>
    <Transition name="slide-fade">
      <BurgerMenu v-if="$store.state.popups.burgerMenuOpened != false"/>
    </Transition>
    <Nuxt/>
    <Footer/>
    <div class="mobileMenu buttons">
      <div class="mobile_button">
        <Nuxt-link to="/" class="home"></Nuxt-link>
        <p>главная</p>
      </div>
      <div class="mobile_button">
        <Nuxt-link to="/favorite" class="favorite"></Nuxt-link>
        <p>вишлист</p>
      </div>
      <div class="mobile_button">
        <Nuxt-link to="/cart" class="cart">

              <span class="cartCounter" v-if="getProducts.length > 0">
                {{ getProducts.length }}
              </span>

        </Nuxt-link>
        <p>корзина</p>
      </div>
      <div class="mobile_button">
        <div
          @click="$store.commit('popups/SET_LOGIN_OPENED', !$store.state.popups.login)"
          class="account"
        ></div>
        <p>аккаунт</p>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderBlack from "~/components/General/HeaderBlack.vue";
  import Footer from "~/components/General/Footer.vue";
  import BurgerMenu from "~/components/General/BurgerMenu.vue";

  export default {
    name: "default.vue",
    components: {
      Footer,
      BurgerMenu,
      HeaderBlack,
    },
    computed: {
      getProducts(){
        return this.$store.getters['cart/getProducts']
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    align-items: center;
    width: 24px;
    height: 24px;
    background-size: 24px 24px;
    background-image: url("@/assets/img/icons/home.svg");
  }

  .favorite {
    width: 24px;
    height: 24px;
    background-size: 24px 24px;
    background-image: url("@/assets/img/icons/heart.svg");

    &:hover {
      background-image: url("@/assets/img/icons/heart_on.svg");
    }
  }

  .cart {
    position: relative;
    width: 24px;
    height: 24px;
    background-size: 24px 24px;
    background-image: url("@/assets/img/icons/cart.svg");

    &:hover {
      background-image: url("@/assets/img/icons/cart_on.svg");
    }
  }

  .account {
    cursor: pointer;
    width: 24px;
    height: 24px;
    background-size: 24px 24px;
    background-image: url("@/assets/img/icons/account.svg");

    &:hover {
      background-image: url("@/assets/img/icons/account_on.svg");
    }
  }

  .searchInputWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 34px;

    box-sizing: border-box;
    padding: 0px 6px;

    top: 58px;
    left: 6px;
    gap: 10px;

    border: 1px solid #a9a1a1;
    border-radius: 4px;
    transition: 1s;

    input {
      transition: 1s all;
    }

    i {
      cursor: pointer;
      width: 24px;
      height: 24px;
      background-image: url("@/assets/img/icons/search.svg");
      background-size: cover;
      background-color: #fff;
    }
  }

  .searchInput {
    background-color: inherit;
    height: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    transition: 1s all;

    &::placeholder {
      color: #dbd7d2;
    }
  }

  .cartCounter {
    position: absolute;
    top: 0;
    // margin-top: 12px !important;
    margin-left: 12px !important;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #9e8b7b;
    text-align: center;
    font-size: 13px;
    line-height: 15px;
    color: white;
    border: 1px solid white;
  }

  a#logo {
    position: absolute;
    margin: 0 auto;
    top: 8px;
    left: 0;
    right: 0;
    text-align: center;
    max-width: 91px;
    transition: 1s all ease;
  }

  .openedLogo {
    top: 28px !important;
  }
  .mobileMenu {
    position: sticky;
    z-index: 100;
    flex-basis: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;

    background-color: #fff;
    border-top: 1px solid lightgray;
    height: 50px;
    width: 100%;
    padding: 0 10px;

    .mobile_button {
      display: flex;
      flex-direction: column;
      gap: 5px;
      align-items: center;
      justify-content: center;

      p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;
        /* identical to box height */

        text-align: center;
        letter-spacing: -0.02em;

        /* основной */

        color: #685f5f;
      }
    }
  }

  .searchButtons {
    display: flex;
    align-items: center;
    transition: 1s;

    .search {
      transition: 1s;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 30px;

    img {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }

</style>
