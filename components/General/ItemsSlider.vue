<template>
    <section>
        <div class="jcsb p60">
            <h2>Лидеры продаж</h2>
            <Nuxt-Link to="catalog">смотреть все</Nuxt-Link>
        </div>
        <div class="bestsellers p60">
        <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <div
                 v-for="item in this.products.slice(0, 8)" 
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
    computed: {        
        products() {               
            return this.$store.getters["products"];
        },
        productsInCart() {
            return this.$store.getters["productsInCart"];
        },
    },
    beforeMount() {
        if (this.$store.getters["products"].length === 0) {
        this.$store.dispatch("fetchProducts");
        }
        if (this.$store.getters["categories"].length === 0) {
        this.$store.dispatch("fetchCategories");
        }
    },
    updated() {
        new Swiper('.bestsellers', {
        slidesPerView: 4,
        spaceBetween: 40,
        })
    },
    mounted() {
        new Swiper('.bestsellers', {
        slidesPerView: 4,
        spaceBetween: 40,
        })
    },
    
}
</script>

<style lang="scss" scoped>
    a{
        text-decoration: none;
        color: #b8b8b8;
    }
    img{
        max-width: 100%;
        height: auto;
    }       
    section{
        // margin: 0 auto;
        padding: 100px 0px 0 0;
        max-width: 1920px;
        width: 100%;
        h2{
            padding-bottom: 60px;
            font-weight: 600;
            font-size: 24px;
            line-height: 29px;
            color: #685F5F;
        }
    }
     
</style>