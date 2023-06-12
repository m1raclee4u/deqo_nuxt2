<template>
  <div class="breadcrumbs" :class="{cart: isCartPage}">
    <Nuxt-Link :to="`/`">Главная</Nuxt-Link>
    <img src="@/assets/img/icons/breadcrumbsIcon.svg" alt="" />
    <Nuxt-Link :to="``">{{ currentRouteName }}</Nuxt-Link>
    <img v-if="isExist" src="@/assets/img/icons/breadcrumbsIcon.svg" alt="" />
    <Nuxt-Link v-if="isExist" :to="``">{{ isExist }}</Nuxt-Link>

  </div>
</template>

<script>
export default {
  props: {
    isCartPage: Boolean
  },
  data() {
    return {};
  },
  computed: {
    isExist() {
      if (this.$route.name.includes('profile') && this.$route.name.includes('edit')) {
        return "Личные данные"
      } else {
        return false
      }
    },
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
      } else if (this.$route.name.includes('profile')) {
        return "Личный кабинет"
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

@media (max-width:1472px) {
  .cart {
    max-width: 960px;

    padding: 0 30px;
  }
}
@media (max-width: 640px) {
  .cart{
    padding: 0 10px;
  }
}
</style>
