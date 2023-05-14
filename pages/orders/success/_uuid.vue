<script>
  export default {
    data() {
      return {}
    },
    async asyncData({$axios, route}) {
      const orderInfo = await $axios.$get(`/orders/getByUUID/${route.params.uuid}`)
      return {orderInfo}
    },
    methods: {},
    watch: {}
  }
</script>

<template>
  <div class="payment_wrapper wrapper">
    <div class="title">
      <!--      {{orderInfo}}-->
      <h5>Ваш заказ #{{orderInfo.id}}</h5>
      <p>Перенаправляем вас на страницу сайта</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .payment_wrapper {
    padding-top: 58px;
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    min-height: 60vh;

    .title {
      text-align: center;
    }
  }
</style>
