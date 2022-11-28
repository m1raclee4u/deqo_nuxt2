<template>
  <div class="wrapper">
    <Header/>
    <BurgerMenu v-if="$store.state.burgerMenuOpened != false"/>
    <HeaderSlider/>
    <ItemsSliderBestsellers/>
    <ItemsSliderNew/>
    <Collections/>
    <Footer/>    

  </div>
</template>

<script>
import Collections from '~/components/General/Collections.vue'
import Header from '~/components/General/Header.vue'
import Footer from '~/components/General/Footer.vue'
import ItemsSliderBestsellers from '~/components/General/ItemsSliderBestsellers.vue'
import ItemsSliderNew from '~/components/General/ItemsSliderNew.vue'
import HeaderSlider from '../components/MainPage/HeaderSlider.vue'
import BurgerMenu from '~/components/General/BurgerMenu.vue'
export default {
  
    components: {HeaderSlider, ItemsSliderBestsellers, Collections, Footer, BurgerMenu, Header, ItemsSliderNew},
    name: 'IndexPage'
}
</script>

<style lang="scss" scoped>

</style>