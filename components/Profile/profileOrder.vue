<template>
  <div class="order">
    <div class="left">
      <div class="text-info">
        <h4>{{ status }}</h4>
        <p>предполагаемая дата доставки <br> — 28.12.2022</p>
      </div>
      <div class="cart">
        <div class="item" v-for="(item, index) in cart">
          <p @click="$router.push(`/profile/order/${order.uuid}`)" v-if="order.cart.length > 4 && index === cart.length -1">+{{ order.cart.length - cart.length }}</p>
          <div class="image">
            <div @click="$router.push(`/profile/order/${order.uuid}`)" v-if="order.cart.length > 4 && index === cart.length - 1" class="blur"></div>
            <img :src="IH.getUrl($axios.defaults.baseURL + `/` + item.image, 100, fm = 'webp')" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="info-wrapper gap10">
        <div class="number">
          <p>№ заказа</p>
          <p>{{ order.id }}</p>
        </div>
        <div class="date">
          <p>дата заказа</p>
          <p>{{ date }}</p>
        </div>
      </div>
      <div class="info-wrapper gap10">
        <button @click="cancelOrder" class="button top">Отменить</button>
        <button @click="$router.push(`/profile/order/${order.uuid}`)" class="button bottom">Посмотреть</button>
      </div>

    </div>
  </div>
</template>

<script>
import ImageHelper from "~/plugins/imageHelper";
import moment from 'moment';

export default {
  name: "profileOrder",
  props: {
    order: Object
  },
  methods: {
    async cancelOrder() {
      await this.$axios.$put(`/orders/${this.order.id}`, {
        status: "CANCELLED"
      })
      await this.$store.dispatch('orders/fetchOrders')
    }
  },
  computed: {
    cart() {
      if (this.order.cart.length > 4) {
        return this.order.cart.slice(0, 4)
      } else {
        return this.order.cart
      }
    },
    date() {
      return moment(this.order.created_at).utc().format('DD.MM.YYYY')
    },
    status() {
      const statusObject = this.$store.state.orders.statuses.filter(status => status.key === this.order.status)
      return statusObject[0].name
    }
  },
  data() {
    return {
      IH: new ImageHelper(),
    }
  },
}
</script>

<style scoped lang="scss">
.order {
  max-width: 780px;
  width: 100%;
  height: 100%;

  padding: 33px 40px;
  border-radius: 4px;

  display: flex;
  justify-content: space-between;

  background-color: #F0EFEF;

  .left {
    display: flex;
    flex-direction: column;
    max-width: 430px;
    width: 100%;
    .item{
      position: relative;
      p {
        position: absolute;
        top: 36px;
        left: 21px;
        width: 54px;
        height: 56px;
        font-size: 56px;
        line-height: 56px;
        z-index: 1;
        color: white;
        cursor: pointer;
      }
    }
    .cart {
      display: flex;
      flex-wrap: wrap;

      .last {
        background-color: black !important;
        filter: blur(5px)
      }

      .image {
        position: relative;
        background-size: cover;
        width: 100px;
        height: 145px;
        border-radius: 4px;
        margin-right: 5px;
        cursor: pointer;
        .blur{
          background-color: black;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          filter: blur(2px);
          opacity: 0.35;
        }
      }
    }

    .text-info {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 13px;

      h4 {
        color: #4A4444;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 28px;
      }

      p {
        line-height: 130%;
      }
    }
  }

  .right {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 25px;
    max-height: 210px;
    width: 100%;
    max-width: 220px;

    .info-wrapper {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 10px;

      .button {
        height: 50px;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
      }

      .top {
        border: 2px solid #685F5F;
        border-radius: 4px;
        font-weight: 600;
        color: #685F5F;
      }

      .bottom {
        background: #A9A1A1;
        border-color: #A9A1A1;
        border-radius: 4px;
        color: white;
      }

      .number, .date {
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
          line-height: 100%;
        }
      }

    }


  }
}
</style>
