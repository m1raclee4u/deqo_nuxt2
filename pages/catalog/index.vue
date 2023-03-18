<template>
  <div class="wrapper">
    <Transition name="slide-fade">
      <BurgerMenu v-if="$store.state.burgerMenuOpened != false" />
    </Transition>
    <HeaderBlack />
    <section>
      <main class="main">
        <aside class="aside">
          <aside-categories
            @updateChecked="sortByChecked"
            @checked="getChecked"
          />
          <aside-filter @updateFiltered="sortByFiltered" />
          <aside-color @updateCheckedColor="sortByCheckedColor" />
          <aside-size />
          <button class="filter">Отсортировать по фильтрам</button>
        </aside>
        <div class="items__main">
          <div v-if="this.checkedId != ''" class="aic">
            <p>Найдено {{ foundResults }} подходящих товаров</p>
            <div
              v-for="category in $store.state.catalog.categories.filter(
                (el) => el.checked == true
              )"
              :key="category.id"
            >
              <button>
                <i class="delete"></i>
                {{ category.name }}
              </button>
            </div>
          </div>
          <div
            class="items"
          >
            <div
              v-for="item in this.paginatedProducts"
              :key="item.article_number + '_' + item.title"
              class="col item"
            >
              <item :item="item"> </item>
            </div>
          </div>
          <button
            @click="loadMore"
            v-if="currentPage * maxPerPage < this.products.length"
          >
            Загрузить больше
          </button>
        </div>
      </main>
    </section>

    <Footer />
  </div>
</template>

<script>
import AsideCategories from "~/components/Aside/AsideCategories.vue";
import AsideFilter from "~/components/Aside/AsideFilter.vue";
import HeaderBlack from "~/components/General/HeaderBlack.vue";
import Item from "~/components/General/Item.vue";
import BurgerMenu from "~/components/General/BurgerMenu.vue";
import Footer from "~/components/General/Footer.vue";
import AsideSize from "~/components/Aside/AsideSize.vue";

export default {
  components: {
    HeaderBlack,
    Item,
    AsideFilter,
    AsideCategories,
    BurgerMenu,
    Footer,
    AsideSize,
  },

  props: ["category"],
  data() {
    return {
      showFilter: false,
      filterLabel: "цене",
      productsInCartId: [],
      checkedId: "",
      checkedColor: "",
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
    sortByCheckedColor(checkedColor) {
      this.checkedColor = checkedColor;
    },
    sortByFiltered(checkedFiltered) {
      this.checkedFiltered = checkedFiltered;
    },
    getChecked(data) {
      this.checkedFiltered = data;
    },
    loadMore() {
      this.currentPage += 1;
    },
  },
  computed: {
    products() {
      let checkedArray = [];
      if (this.checkedId.length !== 0) {
        for (let i = 0; i < this.checkedId.length; i++) {
          const checked = this.checkedId[i];
          for (let j = 0; j < this.$store.getters["catalog/getProducts"].length; j++) {
            const find = this.$store.getters["catalog/getProducts"][j];
            if (find.category == checked) {
              checkedArray.push(find);
            }
          }
        }
        return checkedArray;
      } else return this.$store.getters["catalog/getProducts"];
    },
    productsInCart() {
      return this.$store.getters["productsInCart"];
    },
    foundResults() {
      return this.products.length;
    },
    totalResults() {
      return Object.keys(this.orders).length;
    },
    pageCount() {
      return Math.ceil(this.totalResults / this.maxPerPage);
    },
    pageOffest() {
      return this.maxPerPage * this.currentPage;
    },
    paginatedProducts() {
      return this.products.slice(0, this.currentPage * this.maxPerPage);
    },
  },
  mounted() {
    if (this.$store.getters["catalog/getProducts"].length === 0) {
      this.$store.dispatch("catalog/fetchProducts");
    }
    if (this.$store.getters["catalog/getCategories"].length === 0) {
      this.$store.dispatch("catalog/fetchCategories");
    }
  },
};
</script>

<style lang="scss" scoped>
.Breadcrumbs {
  width: 100%;
}
.delete {
  display: block;
  flex-shrink: 0;
  width: 11px;
  height: 11px;
  margin-right: 9px;
  background: url("assets/img/icons/delete.svg");
  background-size: cover;
  cursor: pointer;
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

  button {
    margin: 40px auto 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 109px;
    gap: 10px;
    width: 410px;
    height: 64px;

    /* основной */

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
  gap: 40px;
  // gap: 17.6px;
}
.item:nth-child(3n + 3) {
  margin-right: 0;
}
main {
  display: flex;
  justify-content: space-between;
  gap: 60px;
  min-height: 55vh;
  max-width: 1676px;
  width: 100%;
  margin: 0 auto;
}
aside {
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 45px;
}
</style>