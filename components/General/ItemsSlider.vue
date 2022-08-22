<template>
    <section>
        <h2>Bestsellers</h2>
        <div class="bestsellers">
        <div class="ItemSlider swiper-container">            
            <div class="ItemCart swiper-slide">
                <img src="" alt="">
                <p>Брюки-чиносы из твила с ремнём</p>
                <div class="ItemCart__price">
                    <p class="old">3,299 ₽ </p>
                    <p>3,299 ₽</p>
                </div>
            </div>
            <div class="ItemCart swiper-slide">
                <img src="" alt="">
                <p>Брюки-чиносы из твила с ремнём</p>
                <div class="ItemCart__price">
                    <p class="old">3,299 ₽ </p>
                    <p>3,299 ₽</p>
                </div>
            </div>
            <div class="ItemCart swiper-slide">
                <img src="" alt="">
                <p>Брюки-чиносы из твила с ремнём</p>
                <div class="ItemCart__price">
                    <p class="old">3,299 ₽ </p>
                    <p>3,299 ₽</p>
                </div>
            </div>
            <div class="ItemCart swiper-slide">
                <img src="" alt="">
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
      slidesPerView: 5,  
      spaceBetween: 42,
    })
    },
    
}
</script>

<style lang="scss" scoped>
    .ItemSlider{
        display: flex;
        gap: 42px;
    }
    section{
        padding: 100px 60px;
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