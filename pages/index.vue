<template>
  <div class="wrapper">
    <HeaderSlider/>
    <ItemsSlider/>
    
  </div>
</template>

<script>
import ItemsSlider from '~/components/General/ItemsSlider.vue'
import HeaderSlider from '../components/MainPage/HeaderSlider.vue'

export default {
  
    components: {HeaderSlider, ItemsSlider},
    name: 'IndexPage'
}
</script>

<style lang="scss" scoped>

</style>