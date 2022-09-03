<template>
    <section>
        <div class="jcsb p60">
            <h2>Bestsellers</h2>
            <Nuxt-Link to="catalog">View all</Nuxt-Link>
        </div>
        <div class="bestsellers">
        <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->       
                <!-- <Item class="swiper-slide"
                :Item="Item"
                v-for="item in $store.state.items" 
                :key="item.id"
                >
                </Item> -->
                <div
                 v-for="item in $store.state.items" 
                 :key="item.id"
                 class="swiper-slide">                
                    <item :item="item" 
                        :key="item.id">               
                    </item>
                </div>          
            </div>        
        </div>
    </section>
</template>

<script>
import Item from '~/components/General/Item.vue'

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

Swiper.use([ Navigation, Pagination, Autoplay ])


export default {
     components: { Item },
     mounted() {
      new Swiper('.bestsellers', {
      slidesPerView: 3.9,
      spaceBetween: 40,
      breakpoints: {
        // // when window width is >= 320px
        //     320: {
        //     slidesPerView: 2,
        //     // spaceBetween: 20
        //     },
        //     // when window width is >= 480px
        //     480: {
        //     slidesPerView: 3,
        //     // spaceBetween: 30
        //     },
        //     // when window width is >= 640px
        //     640: {
        //     slidesPerView: 1.5,
        //     // spaceBetween: 40
        //     },
        //     800: {
        //     slidesPerView: 1.8,
        //     // spaceBetween: 40
        //     },
        //     960: {
        //     slidesPerView: 1.8,
        //     // spaceBetween: 40
        //     },
        //     1120: {
        //     slidesPerView: 1.8,
        //     // spaceBetween: 40
        //     },
        }
        })
    },
    
}
</script>

<style lang="scss" scoped>
    a{
        text-decoration: none;
        color: #b8b8b8;
    }
    .bestsellers{
        overflow-x: hidden;
    }
    img{
        max-width: 100%;
        height: auto;
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
     
</style>