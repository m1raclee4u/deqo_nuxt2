<template>
  <section>
    <!-- Slider main container -->
    <div class="swiper">
    <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">
              <img src="../../assets/img/back.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../../assets/img/back2.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../../assets/img/back3.jpg" alt="">
            </div>   
        </div>        
    </div>
    <div class="wrapper">                      
      <Header/>
      <main>
        <div class="assortment">
          <Nuxt-Link to="/">Мужчинам</Nuxt-Link>
          <Nuxt-Link to="/">Женшинам</Nuxt-Link>
          <Nuxt-Link to="/">Детям</Nuxt-Link>
          <Nuxt-Link to="/">Аксессуары</Nuxt-Link>
        </div>
        <div class="sale">
          <Nuxt-Link to="/">Распродажа</Nuxt-Link>
        </div>      
      </main>
      <footer>
        <div class="text">
          <h1>Co-ed collection<br><span><i>spring-summer</i></span></h1>
          <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio excepturi quis nihil quasi fugit dicta odit iusto nemo quos est voluptatem,
            ducimus minima explicabo, nam animi necessitatibus beatae velit voluptate rem. Sed perspiciatis et vero, ex iusto odio odit accusamus molestias eum,
            quam maxime ad consequuntur nihil nam possimus asperiores!
            </h2>
          <div class="swiper-pagination"></div>  
        </div>         
      </footer>
    </div>    
  </section>
  
</template>

<script>
import Header from '../General/Header.vue'
import HeaderSlider from '../MainPage/HeaderSlider.vue'

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

Swiper.use([ Navigation, Pagination, Autoplay ])


export default {
     mounted() {
      new Swiper('.swiper', {
      slidesPerView: 1,  
      autoplay: {
        delay: 10000,
      },
      speed: 4000,
      allowTouchMove: false,
      pagination: {
      clickable: true,
      el: '.swiper-pagination',
      // type: 'bullets',
      modifierClass: '.swiper-pagination-header '
      },
    })
    },
     components: { Header, HeaderSlider },
    name: 'IndexPage'
}
    
 
</script>

<style lang="scss" scoped>
  .swiper-pagination{
    right: 0 + 60px;
    position: absolute;
    align-self: flex-end;
  }
.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 auto !important;
}
  .swiper{
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  section {
    width: 100vw;
    margin: 0 auto;
    img {
      position: absolute;
      object-fit: cover;
      width: 100%;
      height: 100vh;
      z-index: 0;
    }
  }
  .wrapper {
    height: 100vh;
    padding: 0 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    background-color: orange;
  }
  main{
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 315px;
  }
  .assortment{
    z-index: 1;
    display: flex;
    flex-direction: column;
      a{
        font-size: 15px;
        margin-bottom: 40px;
        text-decoration: none;
        color: white;
      }
  }
  
  footer{    
    z-index: 1;
    color: white;
  }
  .text{
    display: flex;
    justify-content: space-between;
    max-width: 1366px;
    padding-bottom: 100px;
    h1{
      font-size: 106px;
    }
    h2{
      margin-top: 50px;
      width: 460px;
      font-size: 14px;
    }
  }
  .sale{
      z-index: 1;
      margin-top: 60px;
    a{
      font-size: 15px;
      z-index: 1;
      color: #fff;
      text-decoration: none;
    }
  }
</style>


