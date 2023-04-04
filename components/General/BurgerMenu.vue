<template>
  <div class="wrapperBurgerMenu">
    <div class="burger_menu">
      <div class="top column">
        <div
          v-for="category in categories"
          :key="category.id"
          class="filter_categories"
        >
          <header>
            <div class="left">
              <img
                src="@/assets/img/icons/burgerMenu/icon-t-shirt.svg"
                alt=""
              />
              <h5 class="title">{{ category.name }}</h5>
            </div>
            <div class="right">
              <Nuxt-link
                @click="this.$emit('checked', category.name)"
                to="/catalog"
                ><p
                  @click="
                    $store.commit(
                      'SET_MENU_OPENED',
                      !$store.state.burgerMenuOpened
                    )
                  "
                >
                  больше
                </p></Nuxt-link
              >
            </div>
          </header>
          <main>
            <button
              class="todo"
              v-for="tag in $store.state.categoryTags"
              :key="tag.id"
            >
              {{ tag }}
            </button>
          </main>
          <hr style="color: #7f7777" />
        </div>
      </div>
      <div class="bottom column">
        <Nuxt-Link to="/delivery"
          ><p
            @click="
              $store.commit('SET_MENU_OPENED', !$store.state.burgerMenuOpened)
            "
          >
            Оплата и доставка
          </p>
        </Nuxt-Link>
        <Nuxt-Link to="/refund"
          ><p
            @click="
              $store.commit('SET_MENU_OPENED', !$store.state.burgerMenuOpened)
            "
          >
            Обмен и возврат
          </p>
        </Nuxt-Link>
        <Nuxt-Link class="todo" to="">Акции</Nuxt-Link>
        <Nuxt-Link class="todo" to="">Размерная сетка</Nuxt-Link>
        <Nuxt-Link class="todo" to="">Частые вопросы</Nuxt-Link>
      </div>
    </div>
    <div
      class="menu"
      @click="$store.commit('SET_MENU_OPENED', !$store.state.burgerMenuOpened)"
    ></div>
  </div>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.getters["categories"];
    },
  },
  methods: {
    addChecked() {
      this.$emit("updateChecked", this.checkedId);
    },
  },
  mounted() {
    if (this.$store.getters["categories"].length === 0) {
      this.$store.dispatch("fetchCategories");
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapperBurgerMenu {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  z-index: 2000;
}
.filter_categories {
  display: flex;
  flex-direction: column;
  gap: 22px;
  button {
    border: 1px solid #7f7777;
    border-radius: 30px;
    padding: 4px 16px;
    background: none;
    color: #7f7777;
  }
  main {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  header {
    p {
      color: #bababa;
      font-weight: 300;
    }
    display: flex;
    justify-content: space-between;
  }
  .left {
    gap: 10px;
    display: flex;
    h5 {
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      color: white;
    }
  }
  .right {
    a {
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;
      text-align: center;

      color: #bababa;
    }
  }
}
a {
  font-family: "RF Dewi";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  text-decoration: none;

  color: #bababa;
}
.menu {
  box-sizing: border-box;
  position: fixed;
  background-color: #202020;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  top: 0;
  z-index: 2000;
  opacity: 0.2;
  // left: -20px;
  cursor: pointer;
}
.column {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.burger_menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  background-color: #202020;
  top: 0;
  width: 405px;
  height: 100vh;
  padding: 60px;
  z-index: 2020;
}

@media (max-width:1900px) {
  .burger_menu{
    margin: 0 -32px;
  }
}
</style>