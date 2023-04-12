<template>
  <div class="wrapper">
    <Transition name="slide-fade">
      <BurgerMenu v-if="$store.state.burgerMenuOpened != false" />
    </Transition>
    <HeaderBlack />
    <Breadcrumbs />

    <main class="main">
      <div class="title">
        <transition name="component-fade" mode="out-in">
          
            <h3 v-if="$store.state.cart.products.length > 0" key="exist">
              Оформление заказа
            </h3>
            <p v-if="$store.state.cart.products.length < 1" key="doesntExist">
              Ваша корзина пока пуста,<br />
              а наш каталог полон <Nuxt-link to="/catalog">новинок</Nuxt-link>
            </p>
          
        </transition>
      </div>
      
        <div v-if="$store.state.cart.products.length > 0" class="cart">
          <div class="cartWrapper">
            <div class="cartItems">
              <transition-group class="cartItems" name="list" tag="p">
                <div
                  v-for="product in this.products"
                  :key="product.key"
                  class="cartItem"
                >
                  <cart-item
                    :item="product"
                    @deleteClickHandler="deleteClickMethod(product)"
                  >
                  </cart-item>
                  <hr />
                </div>
              </transition-group>
              <!-- <transition-group class="cartItems" name="list" tag="p">
              <div
                v-for="product in this.products"
                :key="product.key"
                class="cartItem"
              >
                <cart-item
                  :item="product"
                  @deleteClickHandler="deleteClickMethod(product)"
                >
                </cart-item>
                <hr />
              </div>
            </transition-group> -->
              <p>
                Предполагаемая дата доставки 26.02. — 28.02.2023.
                <Nuxt-link to="#">Подробнее об условиях доставки</Nuxt-link>
              </p>
              <promocode />
            </div>
            <InformationWindowCart
              v-if="!showMobileCartWindow"
              :products="products"
              @onButtonClickBuyHandler="onButtonClickBuyMethod"
              :allFieldsAreFilled="allFieldsAreFilled"
            />
          </div>
          <CartForm
            @emitAllFieldsAreFilled="allFieldsAreFilled = true"
            @emitAllFieldsNotFilled="allFieldsAreFilled = false"
            @cartFormGetter="cartFormSetter"
            v-if="$store.state.cart.products.length > 0"
          />
          <InformationWindowCart
            v-if="showMobileCartWindow"
            :products="products"
            @onButtonClickBuyHandler="onButtonClickBuyMethod"
            :allFieldsAreFilled="allFieldsAreFilled"
          />
        </div>
      
    </main>
    <Footer />
  </div>
</template>

<script>
import HeaderBlack from "~/components/General/HeaderBlack.vue";
import CartItem from "~/components/Cart/CartItem.vue";
import BurgerMenu from "~/components/General/BurgerMenu.vue";
import Breadcrumbs from "~/components/General/Breadcrumbs.vue";
import Footer from "~/components/General/Footer.vue";
import CartForm from "~/components/Cart/CartForm.vue";

import { mapActions, mapGetters } from "vuex";
import InformationWindowCart from "~/components/General/InformationWindowCart.vue";
import Promocode from "~/components/General/promocode.vue";

export default {
  components: {
    HeaderBlack,
    BurgerMenu,
    Breadcrumbs,
    CartItem,
    CartForm,
    Footer,
    InformationWindowCart,
    Promocode,
  },

  data() {
    return {
      allFieldsAreFilled: false,
      showFilter: false,
      filterLabel: "цене",
      productsInCartId: [],
      checkedId: "",
      checkedFiltered: "",
      currentPage: 1,
      maxPerPage: 9,
      showReadMore: true,
      products: [],
      showMobileCartWindow: false,
      cartForm: {},
      cart: {},
    };
  },
  computed: {
    ...mapGetters("cart", ["getProducts"]),
    isProductAdded() {
      return this.products.find((p) => p.id === this.item.id);
    },
  },
  async mounted() {
    if (this.getProducts.length != 0) {
      this.products = await this.$axios.$get("/site/cart-products-list", {
        params: {
          products: this.getProducts,
        },
        // localStorage.getItem('cart')
      });
    }
    const mediaQueryCart = window.matchMedia("(max-width:1024px)");
    this.showMobileCartWindow = mediaQueryCart.matches;
    const listener = (e) => (this.showMobileCartWindow = e.matches);
    mediaQueryCart.addListener(listener);
    this.$once("hook:beforeDestroy", () =>
      mediaQueryCart.removeListener(listener)
    );
  },

  methods: {
    onButtonClickBuyMethod() {
      console.log(this.cart);
    },
    cartFormSetter(value) {
      this.cartForm = value;
    },
    sortByChecked(checkedId) {
      this.checkedId = checkedId;
    },
    sortByFiltered(checkedFiltered) {
      this.checkedFiltered = checkedFiltered;
    },
    loadMore() {
      this.currentPage += 1;
    },
    ...mapActions({
      addProduct: "cart/addProduct",
      removeProduct: "cart/removeProduct",
    }),
    deleteClickMethod(product) {
      let index = this.products.findIndex((p) => p.key === product.key);
      this.products.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.leftGroup {
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
}

.cartItems {
  transition: 0.5ms ease all;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .cartItem {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  // gap: 20px;
  hr {
    padding: 0;
    height: 0;
    border: none;
    border-top: 1px solid #a9a1a1;
  }
}

.wrapper {
  gap: 50px;
}

.title {
  width: 100%;

  h3 {
    font-size: 28px;
    line-height: 33px;
    color: #4a4444;
  }

  p {
    margin-top: 20px;
    text-align: center;
    font-size: 20px;
    line-height: 24px;
    color: #685f5f;

    a {
      font-size: 20px;
      line-height: 24px;
      color: #685f5f;
    }
  }
}

.delete {
  display: block;
  flex-shrink: 0;
  width: 11px;
  height: 11px;
  margin-right: 9px;
  background: url("../assets/img/icons/delete.svg");
  background-size: cover;
  cursor: pointer;
}

button {
  display: flex;
  align-items: center;
  font-size: 11px;
  padding: 10px 9px;
  font-weight: 600;
}

.aic {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  min-height: 32px;
  gap: 20px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #a9a1a1;
  }
}

.items__main {
  width: 100%;

  button {
    margin: 40px auto 0 auto;
    justify-content: center;
    align-items: center;
    padding: 20px 109px;
    gap: 10px;
    width: 410px;
    height: 64px;
    background: #685f5f;
    border-radius: 4px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: white;
  }
}

.items {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.item:nth-child(3n + 3) {
  margin-right: 0;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 60px;
  // padding: 40px 60px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  min-height: 55vh;

  .cart {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;

    .cartWrapper {
      display: flex;
      gap: 40px;
      width: 100%;
    }

    .cartGroup {
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-width: 980px;
      width: 100%;
    }
  }
}

aside {
  width: 280px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 45px;

  h3 {
    font-size: 28px;
    line-height: 33px;
    color: #4a4444;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;

    a {
      text-decoration: none;
      color: #a9a1a1;
      font-size: 20px;
    }

    li {
      text-align: right;
      list-style-type: none;
      text-decoration: none;
    }
  }
}

@media (max-width: 1472px) {
  main {
    max-width: 960px;

    padding: 0 32px;
  }
}

@media (max-width: 1165px) {
}

@media (max-width: 1024px) {
  .cartWrapper {
    gap: 32px;
  }

  main {
    max-width: 592px;
    padding: 0 24px;
  }

  .cartGroup {
    max-width: unset !important;
  }

  .cartWrapper {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 640px) {
  main {
    padding: 0 10px;
    max-width: 432px;
  }
}
@media (max-width: 480px) {
  main {
    max-width: 320px;
  }
}
</style>
