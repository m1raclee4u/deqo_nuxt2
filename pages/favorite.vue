<template>
  <div class="wrapper">
    <Transition name="slide-fade">
      <BurgerMenu v-if="$store.state.burgerMenuOpened != false" />
    </Transition>
    <HeaderBlack />
    <Breadcrumbs />
    <main class="main">
      <p
        class="favoriteBlank"
        v-if="$store.state.favorites.products.length < 1"
      >
        У вас пока нет избранных товаров,<br />
        а наш каталог полон <Nuxt-link to="/catalog">новинок</Nuxt-link>
      </p>
      <div v-if="$store.state.favorites.products.length > 0" class="catalog">
        <aside class="aside">
          <h3>Избранное</h3>
          <ul>
            <li>
              <button><Nuxt-link to="#">Список заказов</Nuxt-link></button>
            </li>
            <li>
              <button><Nuxt-link to="#">Личные данные</Nuxt-link></button>
            </li>
            <li>
              <button><Nuxt-link to="#">Избранное</Nuxt-link></button>
            </li>
            <li>
              <button><Nuxt-link to="#">Подписки</Nuxt-link></button>
            </li>
            <li>
              <button><Nuxt-link to="#">Выйти</Nuxt-link></button>
            </li>
          </ul>
        </aside>
        <div class="items__main">
          <div class="aic">
            <p>{{ $store.state.favorites.products.length }} товаров</p>
          </div>
          <div
            class="
              items
              row
              row-cols-1
              row-cols-sm-1
              row-cols-md-2
              row-cols-lg-3
              row-cols-xl-3
              g-3
            "
          >
            <div
              v-for="item in $store.state.favorites.products"
              :key="item.id"
              class="col item"
            >
              <item :item="item" :key="item.id"> </item>
              <!-- {{ item }} -->
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import AsideCategories from "~/components/Aside/AsideCategories.vue";
import AsideFilter from "~/components/Aside/AsideFilter.vue";
import HeaderBlack from "~/components/General/HeaderBlack.vue";
import Item from "~/components/General/Item.vue";
import BurgerMenu from "~/components/General/BurgerMenu.vue";
import Breadcrumbs from "~/components/General/Breadcrumbs.vue";
import Footer from "~/components/General/Footer.vue";
import ButtonCart from "~/components/Buttons/ButtonCart.vue";

export default {
  components: {
    HeaderBlack,
    Item,
    AsideFilter,
    AsideCategories,
    BurgerMenu,
    Breadcrumbs,
    ButtonCart,
    Footer,
  },
  data() {
    return {
      showFilter: false,
      filterLabel: "цене",
      productsInCartId: [],
      checkedId: "",
      checkedFiltered: "",
      currentPage: 1,
      maxPerPage: 9,
      showReadMore: true,
    };
  },
  methods: {
    sortByChecked(checkedId) {
      this.checkedId = checkedId;
    },
    sortByFiltered(checkedFiltered) {
      this.checkedFiltered = checkedFiltered;
    },
    loadMore() {
      this.currentPage += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  gap: 50px;
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

    /* средний */

    color: #a9a1a1;
    // width: 195px;
  }
}
.items__main {
  width: 100%;
}
.items {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  // gap: 17.6px;
}
.item:nth-child(3n + 3) {
  margin-right: 0;
}
main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // padding: 40px 60px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  min-height: 55vh;
  .favoriteBlank {
    width: 100%;
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
  .catalog {
    display: flex;
    justify-content: space-between;
    gap: 45px;
  }
}
aside {
  width: 260px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 45px;
  h3 {
    font-size: 28px;
    line-height: 33px;
    /* identical to box height */

    color: #4a4444;
  }
  ul {
    display: flex;
    flex-direction: column;
    // gap: 20px;
    a {
      text-decoration: none;
      color: #a9a1a1;
    }
    button {
      text-decoration: none;
      text-align: left;
      background: inherit;
      color: #a9a1a1;
      font-size: 20px;
      padding: 14px 20px;
      margin-left: -15px;
      &:hover {
        padding: 14px 20px;
        background: #dbd7d2;
        border-radius: 30px;
      }
    }
    li {
      text-align: left;
      list-style-type: none;
      text-decoration: none;
    }
  }
}
</style>
