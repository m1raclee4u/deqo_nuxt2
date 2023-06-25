<script>
  import {mapGetters} from "vuex";
  import Login from "~/components/Profile/Login.vue";

  export default {
    data() {
      return {
        headerOpened: false,
        whiteHeader: false,
        isFocused: false,
        isMobileMenuShown: false,
        searchInput: ''
      };
    },
    directives: {
      focus: {
        inserted: function (el) {
          el.focus()
        }
      }
    },
    mounted() {
      const mediaQuery = window.matchMedia("(max-width:640px)");
      this.isMobileMenuShown = mediaQuery.matches;
      const listener = (e) => (this.isMobileMenuShown = e.matches);
      mediaQuery.addListener(listener);
      this.$once("hook:beforeDestroy", () => mediaQuery.removeListener(listener));
    },
    beforeMount() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      pushToSearch() {
        this.$router.push(`/search?search=${this.searchInput}`)
      },
      handleScroll() {
        if (window.scrollY > 0) {
          this.whiteHeader = true;
        } else {
          this.whiteHeader = false;
        }
      },
    },
    components: {Login},
    computed: {
      ...mapGetters("cart", ["getProducts"]),
      scrollPostion() {
        return window.scrollY;
      },
    },
  };
</script>


<template>
  <div style="position: absolute" class="">
    <!-- @mouseover="headerOpened = true" @mouseleave="headerOpened = false" :class="{notMainPage: $route.name != 'index' || whiteHeader === true, opened: headerOpened}" -->
    <header
      :class="{
        notMainPage:
          $route.name != 'index' ||
          whiteHeader === true ||
          isFocused === true,
      }"
    >
      <div class="header">
        <div class="flex">
          <button
            class="burger__menu"
            @click="
              $store.commit('popups/SET_MENU_OPENED', !$store.state.popups.burgerMenuOpened)
            "
          >
            <img src="@/assets/img/icons/menu.svg" alt=""/>
            <p v-if="!isMobileMenuShown">каталог</p>
          </button>
        </div>
        <Nuxt-link
          v-if="!isFocused"
          id="logo"
          to="/"
          :class="{ openedLogo: headerOpened }"
        >
          <img src="@/assets/img/icons/logo.svg" alt=""/>
        </Nuxt-link>
        <div class="buttons">
          <div class="searchButtons">
            <img
              v-if="isFocused === false"
              @click="isFocused = !isFocused"
              class="search"
              src="@/assets/img/icons/search.svg"
              alt=""
            />
            <div v-show="isFocused" class="searchInputWrapper">
              <i @click="isFocused = !isFocused"></i>
              <input v-focus @keydown.enter="pushToSearch" type="text" v-model="searchInput" @blur="isFocused = false">
              <button @click="pushToSearch" style="font-size: 24px; color: #a9a1a1">→</button>
            </div>
          </div>
          <Nuxt-link
            v-if="!isMobileMenuShown"
            to="/favorite"
            class="favorite"
          ></Nuxt-link>

          <Nuxt-link v-if="!isMobileMenuShown" to="/cart" class="cart">

              <span class="cartCounter" v-if="getProducts.length > 0">
                {{ getProducts.length }}
              </span>

          </Nuxt-link>
          <div
            v-if="!isMobileMenuShown"
            @click="$store.commit('popups/SET_LOGIN_OPENED', !$store.state.popups.login)"
            class="account"
          ></div>
        </div>
      </div>
      <div v-if="isMobileMenuShown" class="mobileMenu buttons">
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
    </header>
    <Login v-if="$store.state.popups.login != false"/>
  </div>
</template>


<style lang="scss" scoped>
  .mobileMenu {
    position: fixed;
    z-index: 100;
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

  .burger__menu {
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    /* основной */

    color: #685f5f;
  }

  .flex {
    gap: 15px;
    align-items: center;
  }

  header {
    z-index: 15;
    width: 100%;
    height: 58px;
    position: fixed;
    top: 0;
    transition: 0.5s all;
  }

  .opened {
    height: 100px !important;
    background: white;
    -webkit-box-shadow: 0px 1px 0px 0px #bababa;
    -moz-box-shadow: 0px 1px 0px 0px #bababa;
    box-shadow: 0px 1px 0px 0px #bababa;
  }

  .notMainPage {
    background: white;
    -webkit-box-shadow: 0px 1px 0px 0px #bababa;
    -moz-box-shadow: 0px 1px 0px 0px #bababa;
    box-shadow: 0px 1px 0px 0px #bababa;
  }

  .header {
    max-width: 1676px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;

    align-items: center;
  }

  button {
    cursor: pointer;
    background: none;
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

  @media (max-width: 1900px) {
    header {
      padding: 0 32px;
    }
  }

  @media (max-width: 1165px) {
    header {
      padding: 0 24px;
    }
  }

  @media (max-width: 640px) {
    header {
      padding: 0 10px;
    }
    .buttons{
      align-items: flex-end;
    }
  }
</style>
