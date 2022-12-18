<template>
    <div class="ItemCart">
        <div class="swiper-slide">
            <Nuxt-Link :to="`${item.category}/${item.name}`">
                <!-- <img :src="require('../../assets/img/item/' + item.img)" alt="" > -->
                <img
                class="card__img"
                :src="'https://frontend-test.idaproject.com' + item.photo"
                :alt="item.name"
                />
                <div class="tag">
                    <p>ХИТ</p>
                </div>
                <button class="like">
                    <!-- <p>ХИТ</p> -->
                </button>
                
                <!-- {{item}} -->
            </Nuxt-Link>
            <p style="margin-bottom: 10px;">{{item.name}}</p>
            <div class="ItemCart__price">
                <!-- <p class="old">{{item.priceOld}} ₽ </p> -->
                <p>{{item.price}} ₽</p>
                <div class="flex colors">
                  <div class="input_color" v-for="color in $store.state.colors" :key="color.id" disabled>
                    <input class="custom-radio" :name="color" type="radio" :id="color.id" :value="color.id">
                    <label :id="color.id" :for="color.id"></label>
                  </div>
                </div>
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
    border-radius: 50%;
    // border: 1px solid #685F5F;
    text-align: center;
    line-height: 100%;
}

.ItemCart{        
        padding-bottom: 60px;
        img{
            max-width: 411px;
            width: 100%;
            height: 587px;
            background-color: black;
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