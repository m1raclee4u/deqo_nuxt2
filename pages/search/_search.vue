<template>
  <div class="wrapper">
    <breadcrumbs/>
    <section>
      <div class="items__main">
        <header>
          <h3>Поиск по запросу: {{this.$route.query.search}}</h3>

          <div class="div">
            <p>Найдено товаров: {{products.length}}</p>
            <sort-component/>
          </div>
        </header>
        <ul class="items">
          <li
            v-for="product in products"
            :key="product.slug"
            class="col item"
          >
            <item :item="product"></item>
          </li>
        </ul>
      </div>

    </section>

  </div>
  </template>

<script>
  import SortComponent from "~/components/Filter/SortComponent";
  import Breadcrumbs from "~/components/General/Breadcrumbs";

  export default {
    name: "search.vue",
    components: {Breadcrumbs, SortComponent},
    methods() {

    },
    mounted() {
      console.log(this.$route.query)
    },
    async asyncData({$axios, route}) {
      let products = await $axios.$get(`site/search?search=${route.query.search}`)
      return {products}
    }
  }
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    flex-direction: column;

    h3 {
      width: 100%;
      text-align: left;
      margin-bottom: 30px !important;
      font-size: 30px;
    }

    .div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  section {
    max-width: 1676px;
    margin-left: auto;
    margin-right: auto;
  }

  .items__main {
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
  }

  .items {
    display: grid;
    grid-auto-flow: row;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);

    li {
      list-style: none;

    }
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

  @media (max-width: 640px) {
    .items__main {
      header {
        margin-bottom: 30px;

        .div {
          align-items: flex-start;
          flex-direction: column;
          gap: 20px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .items__main {
      header {
        h3 {
          font-size: 24px;
        }
      }
    }
  }
</style>
