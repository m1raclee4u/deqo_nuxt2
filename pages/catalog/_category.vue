<script>
import AsideCategories from "~/components/Filter/AsideCategories.vue";
import AsidePrice from "~/components/Filter/AsidePrice.vue";
import HeaderBlack from "~/components/General/HeaderBlack.vue";
import Item from "~/components/Item/Item.vue";
import BurgerMenu from "~/components/General/BurgerMenu.vue";
import Footer from "~/components/General/Footer.vue";
import AsideSize from "~/components/Filter/AsideSize.vue";
import AsideColor from "~/components/Filter/AsideColor.vue";

import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

Swiper.use([Navigation, Pagination, Autoplay]);

export default {
  components: {
    HeaderBlack,
    Item,
    AsidePrice,
    AsideColor,
    AsideCategories,
    BurgerMenu,
    Footer,
    AsideSize,
  },
  data() {
    return {
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
    deleteTagClickHandler(tag) {
      this.$store.dispatch("filters/deleteTag", tag);
      let counter = 0;
      for (const filter in this.$store.state.filters.filters) {
        if (this.$store.state.filters.filters[filter].length > 0) {
          counter++;
        }
      }
    },
    redirectToCatalog() {
      this.$router.push({
        path: `/catalog`,
      });
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
    sortByCheckedColor(checkedColor) {
      this.checkedColor = checkedColor;
    },
    sortByFiltered(checkedFiltered) {
      this.checkedFiltered = checkedFiltered;
    },
    getChecked(data) {
      this.checkedFiltered = data;
    },
  },
  computed: {
    tags() {
      return this.$store.state.filters.tags;
    },
  },
  async asyncData({ $axios, route }) {
    const products = await $axios.$get(`/site/catalog-list/`, {
      params: route.query,
    });
    return { products };
  },
  async mounted() {
    if (this.$store.getters["catalog/getCategories"].length === 0) {
      await this.$store.dispatch("catalog/fetchCategories");
    }
    if (this.$store.getters["catalog/getProducts"].length === 0) {
      await this.$store.dispatch("catalog/fetchProducts");
    }
    if (this.$store.getters["catalog/getColors"].length === 0) {
      await this.$store.dispatch("catalog/fetchColors");
    }
    if (this.$store.getters["catalog/getSizes"].length === 0) {
      await this.$store.dispatch("catalog/fetchSizes");
    }
    await this.$store.dispatch("filters/setFilters", this.$route.query);
    setTimeout(() => {
      new Swiper(".tagsSwiper", {
        slidesPerView: 4.5,
      });
    }, 1000);
  },
  destroyed() {
    this.$store.dispatch("filters/clearFilters");
  },
};
</script>

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
            :categories="categories"
            @filterCategories="setCategories"
          />
          <aside-price :products="products" @filterPrice="setPrice" />
          <aside-color :colors="colors" @filterColors="setColors" />
          <aside-size :sizes="sizes" @filterSizes="setSizes" />
          <div class="buttonsFilters">
            <button
              @click="
                $router.push({
                  path: ``,
                  query: {
                    categories: `${$store.state.filters.filters.categories.map(
                      (o) => o['slug']
                    )}`,
                    price: `${$store.state.filters.filters.prices.map(
                      (o) => o['value']
                    )}`,
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
                redirectToCatalog();
              "
            >
              Сбросить фильтры
            </button>
          </div>
        </aside>
        <div class="items__main">
          <div class="aic">
            <!-- <p>Найдено {{ foundResults }} подходящих товаров</p> -->
            <!-- <div class="tags">
              <div class="tagsSwiper">
                <div class="swiper-wrapper tagsWrapper">
                  <div class="swiper-slide" v-for="tag in tags" :key="tag.name">
                    <div class="tag">
                      <p>{{ tag.name }}</p>
                      <i @click="deleteTagClickHandler(tag)" class="delete"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
          <div class="items">
            <client-only class="items">
              <div
                v-for="item in this.products.data"
                :key="item.slug"
                class="col item"
              >
                <item :item="item"> </item>
              </div>
            </client-only>
          </div>
          <!-- <button
            @click="loadMore"
            v-if="currentPage * maxPerPage < this.products.data.length"
          >
            Загрузить больше
          </button> -->
          <!-- {{ $route.query }} -->
        </div>
      </main>
    </section>

    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.tagsSwiper {
  width: 100%;
  max-width: 100% !important;
}
.tagsWrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}
.tags {
  display: flex;
  width: 100%;
  max-width: 735px;
  overflow: hidden;
}
.swiper-slide {
  width: unset !important;
}
.tag {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 14px 12px 20px;
  border-radius: 50px;
  background-color: #fff;
  border: 1px solid #dbd7d2;
  p {
    width: 100%;
    font-size: 15px;
  }
  .delete {
    display: block;
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    background: url("assets/img/icons/delete.svg");
    background-size: cover;
    background-position-y: 1px;
    cursor: pointer;
  }
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
.Breadcrumbs {
  width: 100%;
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
  max-width: 1296px;

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
  max-width: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 45px;
}
</style>