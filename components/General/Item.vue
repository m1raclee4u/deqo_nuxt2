<template>
        <div class="ItemCart">
            <button class="like" v-if="!isProductAdded"
            @click.prevent="buyClickHandler"
            >
            </button>
             <button class="like added" v-else
            @click.prevent="addedClickHandler"
            >
            </button>
            <Nuxt-Link :to="`/${item.category}/${item.name}`">
                <!-- <img :src="require('../../assets/img/item/' + item.img)" alt="" > -->
                <img
                class="card__img"
                :src="'https://frontend-test.idaproject.com' + item.photo"
                :alt="item.name"
                />
                <div class="tag">
                    <p>ХИТ</p>
                </div>
                
                
                <!-- {{item}} -->
            </Nuxt-Link>
            <div class="top">
                <p>{{item.name}}</p>
                <p class="quantity">осталось {{3}} шт.</p>
            </div>
            <div class="ItemCart__price">
                <!-- <p class="old">{{item.priceOld}} ₽ </p> -->
                <p>{{item.price}} ₽</p>
                <div class="flex colors">
                  <div class="input_color_1" :id="color.id" v-for="color in $store.state.colors" :key="color.id" disabled>
                    <!-- <label  class="colorItem"></label> -->
                  </div>
                </div>
            </div>
        </div>
    
</template>

<script>
import { mapActions, mapState } from 'vuex'

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

Swiper.use([ Navigation, Pagination, Autoplay ])
export default {
     name: "item",
      props: {
        item: {
        type: Object,
        required: true
        }
    },
    data(){
        return{
            favorites: [],
        }
    },
    computed: {
        ...mapState({
        products: state => state.favorites.products
        }),
        isProductAdded () {
        return this.products.find(p => p.id === this.item.id)
        }
    },
    methods: {
        ...mapActions({
        addProduct: 'favorites/addProduct',
        removeProduct: 'favorites/removeProduct'
        }),
        buyClickHandler () {
        this.addProduct(this.item)
        },
        addedClickHandler () {
        this.removeProduct(this.item.id)
        }
    }
}
</script>

<style lang="scss" scoped>
.input_color_1{
    width: 16px;
    height: 16px;
    border-radius: 50%;
}
.top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    font-weight: 400;

        .quantity{
            font-size: 14px;
            line-height: 17px;
            color: #A9A1A1;
            font-weight: 400;
        }
}
.tag{
    position: absolute;
    width: 58px;
    height: 58px;
    left: 14px;
    top: 14px;
    border-radius: 50%;
    border: 1px solid #685F5F;
    text-align: center;
    line-height: 100%;
        p{
            position: absolute;
            top: 17px;
            left: 13px;
            color: #685F5F;
        }
}
.added{
        background-image: url('../../assets/img/icons/heart_on.svg') !important;

    }
.like{
    position: absolute;
    background-image: url('../../assets/img/icons/heart.svg');
    background-repeat: no-repeat;
    background-position: center center;
    background-color: unset;
    width: 30px;
    height: 30px;
    top: 14px;
    right: 14px;
    // border-radius: 50%;
    
    &:hover{
        background-image: url('../../assets/img/icons/heart_on.svg');
    }
}

.ItemCart{        
            position: relative;
            max-width: 411px;
            width: 100%;
            height: 587px;
            padding-bottom: 60px;
        img{           
            width: 100%;
            height: auto;
            background-color: black;
            margin-top: 100px;
            margin-bottom: 25px;
        }
        p{
            font-family: 'RF Dewi';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;

            /* основной */

            color: #685F5F;
        }
    }
    .colors{
        gap: 10px;
    }
    .ItemCart__price{
        display: flex;
        align-items: center;
        gap: 30px;
            p{
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
                line-height: 23px;

                /* основной */

                color: #685F5F;
        }
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