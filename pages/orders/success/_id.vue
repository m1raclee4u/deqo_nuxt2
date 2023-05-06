<script>
export default {
  data() {
    return{
      timer_counter: 0
    }
  },
  mounted() {
    this.timer_counter = 10
  },
  methods: {
    timerCounterIncrement(){
      setTimeout(this.timer_counter--, 1000)
    }
  },
  watch: {
    timer_counter(value) {
      if (value === 10) {
      this.timerCounterIncrement()
      this.timerCounterIncrement()
      this.timerCounterIncrement()
      this.timerCounterIncrement()
      this.timerCounterIncrement()
      this.timerCounterIncrement()
      this.timerCounterIncrement()
      }
    }
  }
}
</script>

<template>
  <div class="payment_wrapper">
  <div class="title">
    <h5>{{'Происходит проверка платежа'}}</h5>
    <p>Перенаправляем вас на страницу сайта</p>
    <span>{{timer_counter}} сек.</span>
  </div>
  </div>
</template>

<style lang="scss" scoped>
 .payment_wrapper{
   width: 100vw;
   height: 100vh;
   position: absolute;
   top: 0;
   left: 0;
   display: flex;
   align-items: center;
   justify-content: center;
 }
</style>
