<script>
  import HeaderBlack from "~/components/General/HeaderBlack.vue";
  import Item from "~/components/Item/Item.vue";
  import BurgerMenu from "~/components/General/BurgerMenu.vue";
  import Footer from "~/components/General/Footer.vue";
  import AsideMobileWrapper from "~/components/Filter/AsideMobileWrapper";
  import SortComponent from "~/components/Filter/SortComponent";
  import AsideWrapper from "~/components/Filter/AsideWrapper";
  import Breadcrumbs from "~/components/General/Breadcrumbs";

  export default {
    components: {
      Breadcrumbs,
      SortComponent,
      AsideWrapper,
      AsideMobileWrapper,
      HeaderBlack,
      Item,
      BurgerMenu,
      Footer,
    },
    data() {
      return {
        isMobileMenuShown: false,
        showFilter: false,
        filterLabel: "цене",
        checkedFiltered: "",
        currentPage: 1,
        maxPerPage: 9,
        showReadMore: true,
        categories: [],
        colors: [],
        sizes: [],
        filters: {
          categories: [],
          prices: [],
          colors: [],
          sizes: [],
        },
      };
    },
    methods: {
      declension(quantity) {
        const lastDigit = quantity % 10;

        if (quantity >= 11 && quantity <= 20) {
          return 'товаров'
        } else {
          if (lastDigit === 1) {
            return "товар";
          } else if (lastDigit >= 2 && lastDigit <= 4) {
            return "товара";
          } else {
            return "товаров";
          }
        }

      },
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
      tags() {
        return this.$store.state.filters.tags;
      },
      products() {
        return this.$store.state.filters.products
      }
    },
    async asyncData({route, store}) {
      await store.dispatch('filters/fetchProducts', route.query)
    },
    mounted() {
      const mediaQuery = window.matchMedia("(max-width:1279px)");
      this.isMobileMenuShown = mediaQuery.matches;
      const listener = (e) => (this.isMobileMenuShown = e.matches);
      mediaQuery.addListener(listener);
      this.$once("hook:beforeDestroy", () => mediaQuery.removeListener(listener));
      if (this.$store.getters["catalog/getProducts"].length === 0) {
        this.$store.dispatch("catalog/fetchProducts");
      }
      if (this.$store.getters["catalog/getCategories"].length === 0) {
        this.$store.dispatch("catalog/fetchCategories");
      }
      if (this.$store.getters["catalog/getColors"].length === 0) {
        this.$store.dispatch("catalog/fetchColors");
      }
      if (this.$store.getters["catalog/getSizes"].length === 0) {
        this.$store.dispatch("catalog/fetchSizes");
      }
    }
    ,
    destroyed() {
      this.$store.dispatch("filters/clearFilters");
    }
    ,
  }
  ;
</script>

<template>
  <div class="wrapper">
    <breadcrumbs/>
    <section>
      <aside-mobile-wrapper v-if="isMobileMenuShown"/>
      <main class="main">
        <aside-wrapper whichStoreUse="filters" pathRedirectFilter="/catalog/filters" :products="this.products"
                       v-if="!isMobileMenuShown"/>
        <div class="items__main">
          <header>
            <p v-if="this.products.meta.total > 0">{{this.products.meta.total + ' ' +
              declension(this.products.meta.total)}}
            </p>
            <sort-component/>
          </header>
          <ul class="items">
            <li
              v-for="item in this.products.data"
              :key="item.slug"
              class="col item"
            >
              <item :item="item"></item>
            </li>
          </ul>
        </div>
      </main>
    </section>
  </div>
</template>

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
    max-width: 1296px;
    width: 100%;
    margin: 0 auto;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;

      p {
        font-family: 'RF Dewi';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #A9A1A1;
      }

      select {
        border-radius: 4px;
        border: 1px solid lightgrey;
        padding: 4px 6px 6px;
      }
    }

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
    display: grid;
    grid-auto-flow: row;
    row-gap: 30px;
    column-gap: 10px;
    grid-template-columns: repeat(3, 1fr);

    li {
      list-style: none;

    }
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

  @media (max-width: 1024px) {
    .items__main {
      width: unset;
    }
    .items {
      width: 100%;
      margin: 0 auto;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .items {
      row-gap: 15px;
      column-gap: 3px;
    }
    .items__main {
      width: unset;

      header {
        align-items: flex-start;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 25px;
      }
    }
  }


</style>
