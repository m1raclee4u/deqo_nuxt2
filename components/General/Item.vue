<template>
    <div class="ItemCart">
        <div class="swiper-slide">
            <Nuxt-Link to="">
                <img :src="require('../../assets/img/item/' + item.img)" alt="" >
            </Nuxt-Link>
            <p>{{item.name}}</p>
            <div class="ItemCart__price">
                <p class="old">{{item.priceOld}} ₽ </p>
                <p>{{item.price}} ₽</p>
            </div>
        </div>
    </div>
    
</template>

<script>
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

Swiper.use([ Navigation, Pagination, Autoplay ])
export default {
     name: "item",
     props: [
        "item"
    ],
}
</script>

<style lang="scss" scoped>
.ItemCart{        
        padding-bottom: 60px;
        img{
            max-width: 100%;
            height: auto;
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
    @media (max-width: 1280px) {
        .ItemCart{        
        padding-bottom: 60px;
        img{
            max-width: 100%;
            height: auto;
            background-color: black;
            margin-bottom: 25px;
        }
        p{
            margin-bottom: 20px;
            font-size: 13px;
        }
    }
    }
</style>