<template>
  <div class="wrapper">
    <Breadcrumbs style="padding: 0;"/>

    <main class="main">
      <div class="catalog">
        <AsideInfoPages :links="asideLinks"/>
        <div class="info">
          <div class="orders">
            <profileOrder v-for="order in $store.getters['orders/getOrders']" :order="order"/>
          </div>
        </div>
        <AsideHelp class="asideHelp"/>
      </div>
    </main>
  </div>
</template>

<script>
import Breadcrumbs from "~/components/General/Breadcrumbs.vue";
import AsideInfoPages from "~/components/Aside/AsideInfoPages";
import profileOrder from "~/components/Profile/profileOrder";

export default {
  components: {
    Breadcrumbs,
    AsideInfoPages
  },
  async asyncData({store}) {
    await store.dispatch('orders/fetchOrders')
  },
  mounted() {
    const mediaQuery = window.matchMedia("(max-width:1279px)");
    this.isMobileMenuShown = mediaQuery.matches;
    const listener = (e) => (this.isMobileMenuShown = e.matches);
    mediaQuery.addListener(listener);
    this.$once("hook:beforeDestroy", () => mediaQuery.removeListener(listener));
  },
  data() {
    return {
      isMobileMenuShown: false,
      asideLinks: [
        {
          id: 1,
          name: "Личные данные",
          slug: "/profile/edit"
        },
        {
          id: 2,
          name: "Избранное",
          slug: "/favorite"
        },
        {
          id: 3,
          name: "Подписки",
          slug: ""
        },
        {
          id: 4,
          name: "Выйти",
          slug: ""
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.orders {
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;

  .left {
    display: flex;
    flex-direction: column;
    max-width: 420px;
    width: 100%;

    .text-info {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 13px;
    }
  }

  .right {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    width: 100%;
    max-width: 220px;

    .number {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}

.wrapper {
  gap: 50px;
}

.delete {
  display: block;
  flex-shrink: 0;
  width: 11px;
  height: 11px;
  margin-right: 9px;
  background: url("@/assets/img/icons/delete.svg");
  background-size: cover;
  cursor: pointer;
}

button {
  display: flex;
  align-items: center;
  font-size: 11px;
  padding: 10px 9px;
  font-weight: 600;
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
    // justify-content: space-between;
    gap: 50px;
  }
}

.info {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 780px;
  width: 100%;
  margin-bottom: 50px;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    /* средний */

    color: #a9a1a1;
  }

  .info_bullet {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  h5 {
    font-weight: 600;
    font-size: 24px;
    line-height: 43px;
    color: #685f5f;
  }

  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  color: #685f5f;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

ul li {
  position: relative;
  padding-left: 16px;
  margin-left: 12px;
}

ul li::before {
  content: "";
  position: absolute;
  // margin-left: 16px;

  top: 14px;
  left: 0;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #8bd74b;
}

ul li:not(:last-child) {
  margin-bottom: 8px;
}

ul li::before {
  background-color: #a9a1a1;
}

@media (max-width: 1900px) {
  .wrapper {
    padding: 0 32px;
  }
}

@media (max-width: 1472px) {
  .asideHelp {
    display: none !important;
  }
}

@media (max-width: 1165px) {
  .wrapper {
    padding: 0 24px;
  }
}

@media (max-width: 640px) {
  .wrapper {
    padding: 0 10px;
  }
}

</style>
