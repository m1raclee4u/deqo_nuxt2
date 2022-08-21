<template>
  <div class="wrapper">
    <HeaderSlider/>
    <ItemCart/>
  </div>
</template>

<script>
import ItemCart from '~/components/General/ItemCart.vue'
import HeaderSlider from '../components/MainPage/HeaderSlider.vue'

export default {
  
    components: {HeaderSlider, ItemCart},
    name: 'IndexPage'
}
</script>

<style lang="scss" scoped>
  .wrapper{

  }
</style>