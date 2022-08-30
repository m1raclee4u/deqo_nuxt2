<template>
    <section>
        <h2>Bestsellers</h2>
        <div class="bestsellers">
        <!-- Additional required wrapper -->
            <div class="ItemSlider swiper-wrapper">
                <!-- Slides -->
                <div class="ItemCart swiper-slide">
                    <img src="../../assets/img/slider-popular/67475690299.jpg" alt="">
                    <p>Брюки-чиносы из твила с ремнём</p>
                    <div class="ItemCart__price">
                        <p class="old">3,299 ₽ </p>
                        <p>3,299 ₽</p>
                    </div>
                </div>
                <div class="ItemCart swiper-slide">
                    <img src="../../assets/img/slider-popular/69607270299.jpg" alt="">
                    <p>Брюки-чиносы из твила с ремнём</p>
                    <div class="ItemCart__price">
                        <p class="old">3,299 ₽ </p>
                        <p>3,299 ₽</p>
                    </div>
                </div>
                <div class="ItemCart swiper-slide">
                    <img src="../../assets/img/slider-popular/67475690299.jpg" alt="">
                    <p>Брюки-чиносы из твила с ремнём</p>
                    <div class="ItemCart__price">
                        <p class="old">3,299 ₽ </p>
                        <p>3,299 ₽</p>
                    </div>
                </div> 
                <div class="ItemCart swiper-slide">
                    <img src="../../assets/img/slider-popular/69607270299.jpg" alt="">
                    <p>Брюки-чиносы из твила с ремнём</p>
                    <div class="ItemCart__price">
                        <p class="old">3,299 ₽ </p>
                        <p>3,299 ₽</p>
                    </div>
                </div> 
                <div class="ItemCart swiper-slide">
                    <img src="../../assets/img/slider-popular/67475690299.jpg" alt="">
                    <p>Брюки-чиносы из твила с ремнём</p>
                    <div class="ItemCart__price">
                        <p class="old">3,299 ₽ </p>
                        <p>3,299 ₽</p>
                    </div>
                </div> 
                <div class="ItemCart swiper-slide">
                    <img src="../../assets/img/slider-popular/69607270299.jpg" alt="">
                    <p>Брюки-чиносы из твила с ремнём</p>
                    <div class="ItemCart__price">
                        <p class="old">3,299 ₽ </p>
                        <p>3,299 ₽</p>
                    </div>
                </div> 
            </div>        
        </div>
    </section>
</template>

<script>
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

Swiper.use([ Navigation, Pagination, Autoplay ])


export default {
     mounted() {
      new Swiper('.bestsellers', {
      slidesPerView: 3.8,
      spaceBetween: 15,
    })
    },
    
}
</script>

<style lang="scss" scoped>
    .bestsellers{
        overflow-x: hidden;
    }
    .ItemSlider{
        display: flex;
        // gap: 52px;
    }
    section{
        margin: 0 auto;
        padding: 100px 0px 0 60px;
        max-width: 1920px;
        width: 100%;
        h2{
            padding-bottom: 60px;
            font-size: 35px;
        }
    }
     .ItemCart{        
        padding-bottom: 60px;
        img{
            width: 437px;
            height: 663px;
            background-color: black;
            margin-bottom: 25px;
        }
        p{
            margin-bottom: 20px;
        }
    }
    .ItemCart__price{
        display: flex;
        gap: 30px;
        .old{
            color: grey;
            text-decoration: line-through;
        }
    }
</style>