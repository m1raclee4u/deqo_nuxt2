<template>
  <aside class="aside">
    <aside-categories/>
    <aside-price/>
    <aside-color/>
    <aside-size/>
    <div class="buttonsFilters">
      <button
        :disabled="!isDataFetched" :v-loading="!isDataFetched"
        @click="setRouterQuery"
        class="filter"
      >
        Отсортировать по фильтрам
      </button>
      <button
        :disabled="!isDataFetched" :v-loading="!isDataFetched"
        class="clearButtonFilters"
        @click="
                $store.dispatch('filters/clearFilters'),
                $router.push('/catalog')
              "
      >
        Сбросить фильтры
      </button>
    </div>
  </aside>
</template>

<script>
  import AsideColor from "~/components/Filter/AsideColor";
  import AsidePrice from "~/components/Filter/AsidePrice";
  import AsideCategories from "~/components/Filter/AsideCategories";
  import AsideSize from "~/components/Filter/AsideSize";

  export default {
    name: "AsideWrapper",
    props: {
      products: {

      },
      pathRedirectFilter: String,
      whichStoreUse: String,
    },
    data() {
      return {
        isDataFetched: true,
        isAsideFiltersShown: false,
      }
    },
    methods: {
      async setRouterQuery() {
        const routerQuery = {
          categories: `${this.$store.state.filters.filters.categories.map(
            (o) => o['slug']
          )}`,
          price: `${this.$store.state.filters.filters.prices}`,
          sizes: `${this.$store.state.filters.filters.sizes.map(
            (o) => o['name']
          )}`,
          colors: `${this.$store.state.filters.filters.colors.map(
            (o) => o['slug']
          )}`,
        };
        this.$router.push({
          path: this.pathRedirectFilter,
          query: routerQuery
        })
        this.isDataFetched = false
        setTimeout(() => this.$store.dispatch(`${this.whichStoreUse}/fetchProducts`, this.$route), 1000);
        this.isDataFetched = true

      },

      setCategories(array) {
        this.filters.categories = array;
      },
      setPrice(array) {
        this.filters.prices = array;
      },
      setColors(array) {
        this.filters.colors = array;
      },
      setSizes(array) {
        this.filters.sizes = array;
      },
    },
    components: {
      AsideColor,
      AsidePrice,
      AsideCategories,
      AsideSize,
    }
  }
</script>

<style lang="scss" scoped>
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

  .buttonsFilters {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .clearButtonFilters {
      background-color: #fff;
      color: #685f5f;
      border: 1px solid #685f5f;
    }
  }

  aside {
    max-width: 320px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 45px;
  }
</style>




