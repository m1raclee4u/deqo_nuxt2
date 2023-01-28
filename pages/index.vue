<template>
  <div class="wrapper">
    <Header/>
    <BurgerMenu v-if="$store.state.burgerMenuOpened != false"/>
    <HeaderSlider photo_1="back"/>
    <ItemsSlider title="Bestsellers"/>
    <ItemsSlider title="Новинки"/>
    <HeaderSlider/>
    <ItemsSlider title="deqo + LaPizza"/>
    <HeaderSlider/>
    <ItemsSlider title="Новая категория"/>
    <!-- <Collections/> -->
    <Footer/>    

  </div>
</template>

<script>
import Collections from '~/components/General/Collections.vue'
import Header from '~/components/General/Header.vue'
import Footer from '~/components/General/Footer.vue'
import ItemsSlider from '~/components/General/ItemsSlider.vue'
import HeaderSlider from '../components/MainPage/HeaderSlider.vue'
import BurgerMenu from '~/components/General/BurgerMenu.vue'


export default {
  
    components: {HeaderSlider, Collections, Footer, BurgerMenu, Header, ItemsSlider},
    name: 'IndexPage'
}
</script>

<style lang="scss" scoped>
 .wrapper{
  margin: 0;
 }
</style>