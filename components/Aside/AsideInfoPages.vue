<template>
  <aside class="aside">
    <h3>{{ currentRouteName }}</h3>
    <ul v-if="">
      <li v-for="link in links" :key="link.id"><button @click="$router.push(`${link?.slug}`)">{{link.name}}</button></li>
    </ul>
    <aside-help class="asideHelp"/>
  </aside>
</template>

<script>
import AsideHelp from "~/components/Aside/AsideHelp";
export default {
  components: {AsideHelp},
  props: {
    links: Array,
    orderId: Number
  },
  computed: {
    currentRouteName() {
      if (this.$route.name === "cart") {
        return "Корзина";
      } else if (this.$route.name === "favorite") {
        return "Избранное";
      } else if (this.$route.name === "catalog") {
        return "Каталог";
      } else if (this.$route.name === "delivery") {
        return "Доставка";
      } else if (this.$route.name === "refund") {
        return "Обмен и возврат";
      } else if (this.$route.name.includes('edit')) {
        return "Личные данные"
      } else if (this.$route.name === 'profile') {
        return "Мои заказы"
      } else if (this.$route.name.includes('order')){
        return `Заказ #${this?.orderId}`
      }
      // return this.$route.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.asideHelp{
  display: none;
}
aside {
  width: 270px;
  text-align: center;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 45px;
  h3 {
    font-weight: 700;
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

@media (max-width:1472px) {
  .asideHelp {
    display: flex !important;
    align-items: flex-start;
  }
  .help{
    span{
      text-align: left;
    }
  }
}
</style>
