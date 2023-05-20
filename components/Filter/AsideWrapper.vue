<template>
  <aside v-if="!isMobileMenuShown" class="aside">
    <aside-categories
      :categories="categories"
      @filterCategories="setCategories"
    />
    <aside-price :products="products" @filterPrice="setPrice"/>
    <aside-color :colors="colors" @filterColors="setColors"/>
    <aside-size :sizes="sizes" @filterSizes="setSizes"/>
    <div class="buttonsFilters">
      <button
        @click="
                $router.push({
                  path: `catalog/filter`,
                  query: {
                    categories: `${$store.state.filters.filters.categories.map(
                      (o) => o['slug']
                    )}`,
                    price: `${$store.state.filters.filters.prices}`,
                    sizes: `${$store.state.filters.filters.sizes.map(
                      (o) => o['name']
                    )}`,
                    colors: `${$store.state.filters.filters.colors.map(
                      (o) => o['slug']
                    )}`,
                  },
                })
              "
        class="filter"
      >
        Отсортировать по фильтрам
      </button>
      <button
        class="clearButtonFilters"
        @click="
                $store.dispatch('filters/clearFilters');
                $router.push('catalog');
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
  data() {
    return{
      isAsideFiltersShown: false,
    }
  },
  components: {
    AsideColor,
    AsidePrice,
    AsideCategories,
    AsideSize,
  }
}
</script>

