<template>
  <div class="wrapper">
    <HeaderSlider/>
    <ItemsSlider/>
    <Collections/>
    <Footer/>
    
  </div>
</template>

<script>
import Collections from '~/components/General/Collections.vue'
import Footer from '~/components/General/Footer.vue'
import ItemsSlider from '~/components/General/ItemsSlider.vue'
import HeaderSlider from '../components/MainPage/HeaderSlider.vue'

export default {
  
    components: {HeaderSlider, ItemsSlider, Collections, Footer},
    name: 'IndexPage'
}
</script>

<style lang="scss" scoped>

</style>