<template>
  <div class="wrapper">
    <Breadcrumbs style="padding: 0;"/>
    <main class="main">
      <div class="catalog">
        <AsideInfoPages :links="asideLinks"/>
        <div class="info">
          <div class="form">
            <div class="input">
              <label for="tel">Телефон</label>
              <input
                autocomplete="tel"
                id="tel"
                v-model="user.phone"
                class="button"
                type="text"
                v-mask="'+7 (###) ###-##-##'"
                placeholder="+7"
              />
            </div>
            <div class="input">
              <label for="email">Email</label>
              <input
                autocomplete="email"
                v-model="user.email"
                class="button"
                type="email"
                name=""
                id="email"
                placeholder="Электронная почта"
              />
            </div>
            <div class="input">
              <label for="name">Ф.И.О.</label>
              <input
                autocomplete="name"
                v-model="user.name"
                class="button"
                type="text"
                name=""
                id="name"
                placeholder="Ф.И.О"
              />
            </div>
          </div>
          <button @click="saveProfileInfo" class="saveInfo button"><p>Сохранить</p></button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import Breadcrumbs from "~/components/General/Breadcrumbs.vue";
  import AsideInfoPages from "~/components/Aside/AsideInfoPages";

  export default {
    components: {
      Breadcrumbs,
      AsideInfoPages
    },
    methods: {
      saveProfileInfo() {
        this.$store.dispatch("profile/saveProfileInfo", this.user)

        const h = this.$createElement;

        this.$notify({
          title: 'Успешно',
          message: h('i', {style: 'color: teal; font-size: 16px'}, 'Ваши данные обновлены!')
        });
      }
    },
    computed: {
      user() {
        return JSON.parse(JSON.stringify(this.$store.state.profile.user))
      }
    },
    data() {
      return {
        asideLinks: [
          {
            id: 1,
            name: "Мои заказы",
            slug: "/user"
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

  .saveInfo {
    width: 100%;
    text-align: center;
    max-width: 240px;
    justify-content: center;
    background-color: #A9A1A1;
    border-radius: 4px;
    border: none !important;

    p {
      font-weight: 400;
      font-size: 19px;
      line-height: 23px;
      color: #FFFFFF;
    }
  }

  .button {
    text-align: left;
    padding: 18px 20px;
    border: 1px solid #685f5f;
    border-radius: 4px;
  }

  label {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height */

    /* основной */

    color: #685f5f;
  }

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 980px;
    position: relative;

    textarea {
      max-width: 710px;
    }

    .button {
      max-width: 710px;
    }

    input {
      max-width: 710px;
    }

    .group {
      max-width: 710px;
      width: 100%;
      display: flex;
      gap: 60px;

      .flex {
        display: flex;
        gap: 20px;
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
      justify-content: space-between;
      gap: 50px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 40px;
    max-width: 980px;
    width: 100%;
    margin-bottom: 50px;

    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
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
</style>
