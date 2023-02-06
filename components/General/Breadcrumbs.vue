<template>
  <div class="breadcrumbs">
    <Nuxt-Link :to="`/`">Главная</Nuxt-Link>
    <img src="../../assets/img/icons/breadcrumbsIcon.svg" alt="" />
    <Nuxt-Link :to="`#`">{{ currentRouteName }}</Nuxt-Link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
      }
      // return this.$route.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  gap: 15px;
  height: 20px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  a {
    text-decoration: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #cdcaca;
  }
  p {
    text-decoration: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #cdcaca;
  }
}
</style>