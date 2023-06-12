<template>
  <div class="wrapper">
    <Breadcrumbs/>
    <main class="main">
      <div class="catalog">
        <AsideInfoPages :orderId="order.id" :links="asideLinks"/>
        <div class="order_info">
          <div class="block">
            <header>
              <h3>
                Спасибо за ваш заказ!
              </h3>
            </header>
            <div class="block_info">
              <aside>
                <div class="aside__info">
                  <p>№ заказа</p>
                  <p>{{order.id}}</p>
                </div>
                <div class="aside__info">
                  <p>дата заказа</p>
                  <p>{{date}}</p>
                </div>
                <div class="aside__info">
                  <p>сумма заказа</p>
                  <p>{{order.amount}} ₽</p>
                </div>
                <div class="aside__info">
                  <p>предполагаемая дата заказа</p>
                  <p>{{'todo'}}</p>
                </div>
              </aside>
              <div class="block_info-buttons">
                <div class="block_info-buttons-status">
                  <p class="block_info-buttons-status__subtitle">статус заказа</p>
                  <h4>{{status}}</h4>
                </div>
                <div @click="cancelOrder" class="block_info-buttons__button">
                  отменить
                </div>
              </div>
            </div>
          </div>
          <div class="block">
            <header>
              <h3>
                Подробности доставки
              </h3>
            </header>
            <div class="block_info second">
              <aside class="aside">
                <div class="aside-info delivery_type">
                  <p class="aside-info__title">Способ доставки</p>
                  <div class="aside-info-delivery_type">
                    <p class="aside-info-delivery_type__info">{{delivery || 'Не выбран'}}</p>
                    <p class="aside-info-delivery_type__info">{{date}}</p>
                  </div>
                </div>
                <div class="aside-info">
                  <p class="aside-info__title">Контактная информация</p>
                  <p>{{order.name}}</p>
                  <p>{{order.phone}}</p>
                </div>
              </aside>
              <div class="second_info">
                <div class="address info">
                  <p class="address__title">Адрес доставки</p>
                  <p>{{order.address}}</p>
                </div>
                <div v-if="order?.cdek_info" class="phone-email info">
                  <div class="phone">
                    <b>Тел.:</b>
                    <div class="phones">
                      <a v-for="phone in order.cdek_info.phones" :href="'tel:'+phone.number"><p>{{phone.number}}</p></a>
                    </div>
                  </div>
                  <p class="email"><b>Эл почта.: </b>{{order.cdek_info.email}}</p>
                </div>
                <div v-if="order?.cdek_info" class="worktime">
                  <p><b>Режим работы:</b></p>
                  <p>{{order.cdek_info.work_time}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="third block">
            <header>
              <h3>
                Содержимое заказа
              </h3>
            </header>
            <div class="item-wrapper">
              <item v-for="item in order.cart" :item="item"/>
            </div>
          </div>
          <div class="fourth block">
            <header>
              <h3>
                Детали оплаты
              </h3>
            </header>
          </div>
        </div>

        <AsideHelp/>
      </div>
    </main>
  </div>
</template>

<script>
  import Breadcrumbs from "~/components/General/Breadcrumbs.vue";
  import AsideInfoPages from "~/components/Aside/AsideInfoPages";
  import profileOrder from "~/components/Profile/profileOrder";
  import moment from "moment";
  import Item from "~/components/Item/Item";

  export default {
    components: {
      Item,
      Breadcrumbs,
      AsideInfoPages
    },
    async asyncData({$axios, route}) {
      const order = await $axios.$get(`/orders/getByUUID/${route.params.uuid}`)
      return {order}
    },
    methods: {
      async cancelOrder() {
        await this.$axios.$put(`/orders/${this.order.id}`, {
          status: "CANCELLED"
        })
        this.$nuxt.refresh()
      }
    },
    computed: {
      date() {
        return moment(this.order.created_at).utc().format('DD.MM.YYYY')
      },
      status(){
        const statusObject = this.$store.state.orders.statuses.filter(status => status.key === this.order.status)
        return statusObject[0].name
      },
      delivery(){
        const deliveryType = this.$store.state.filters.deliveryTypes.filter(deliveryType => deliveryType.key === this.order.delivery_type)
        return deliveryType[0].name
      }
    },
    data() {
      return {
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
  .second {
    gap: 60px;
  }

  .delivery_type {
    padding-bottom: 40px;
    border-bottom: 1px solid #DBD7D2;
    margin-bottom: 10px;
  }

  .block_info {
    .second_info {
      .info {
        margin-bottom: 16px;
      }

      p {
        font-size: 16px;
        line-height: 19px;
      }

      .phone-email {
        .phone{
          .phones{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 10px;
          }
          a{
            text-decoration: none;
            color: #685F5F;
          ;
          }
          display: flex;
          align-items: center;
          b {
            margin-right: 10px;
          }
        }
        .email {
          b {
            text-decoration: none;
          }

          text-decoration: underline;
        }
      }

      .address {
        .address__title {
          font-size: 18px;
          line-height: 21px;
          color: #A9A1A1;
          margin-bottom: 10px !important;
        }
      }
    }

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .aside {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      align-items: flex-start;
    }

    .aside-info {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 10px;

      p {
        font-size: 16px;
        line-height: 19px;
        color: #685F5F;
      }

      .aside-info__title {
        font-size: 18px;
        line-height: 21px;
        color: #A9A1A1;
      }

      .aside-info-delivery_type {
        display: flex;
        justify-content: space-between;
      }
    }

    .block_info-buttons {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;

      .block_info-buttons__button {
        font-size: 18px;
        line-height: 21px;
        color: #A9A1A1;
        border: 2px solid #A9A1A1;
        border-radius: 4px;
        padding: 8px 26px;
        max-width: 150px;
        text-align: center;
        width: 100%;
        cursor: pointer;
      }

      .block_info-buttons-status {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 20px;
        width: 100%;

        .block_info-buttons-status__subtitle {
          margin-right: 20px !important;
          font-weight: 500;
          font-size: 18px;
          line-height: 21px;
          color: #A9A1A1;
        }

        h4 {
          font-weight: 700;
          font-size: 20px;
          line-height: 23px;
          text-align: center;
          padding: 8px 26px;
          width: 100%;
          max-width: 150px;
          color: #4A4444;
          background: #DBD7D2;
          border-radius: 4px;
        }
      }
    }

    aside {
      display: grid;
      grid-template-rows: repeat(1, 1fr);
      gap: 4px;

      .aside__info {
        display: flex;
        justify-content: space-between;
        padding: 6px 10px;
        background: #E7E5E4;
        border-radius: 4px;

        p {
          max-width: 200px;
          font-size: 18px;
          line-height: 21px;
        }
      }
    }
  }
  .item-wrapper{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
    column-gap: 5px;
  }
  .block {
    padding: 24px 40px;

    max-width: 780px;

    background: #F0EFEF;
    border-radius: 4px;

    header {
      h3 {
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;

        color: #4A4444;
      }

      padding-bottom: 20px;
      margin-bottom: 30px;
      border-bottom: 1px solid #DBD7D2;
    }
  }

  .first {
    width: 100%;
  }


  .orders {
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    gap: 20px;

    .order {
      max-width: 780px;
      width: 100%;
      max-height: 260px;
      height: 100%;

      padding: 33px 40px;

      display: flex;
      justify-content: space-between;

      background-color: #F0EFEF;

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

  .order_info {
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
</style>
