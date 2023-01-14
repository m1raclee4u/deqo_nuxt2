<template>
    <header class="">
        <div class="header">
            <div class="flex">
                <button class="burger__menu" @click="$store.commit('SET_MENU_OPENED', !$store.state.burgerMenuOpened)">
                    <img src="../../assets/img/icons/menu.svg" alt="">
                    каталог
                </button>
                
            </div>       
            <Nuxt-link id="logo" to="/">
                <img src="../../assets/img/icons/logo.svg" alt="">
            </Nuxt-link>
            <div class="buttons">
                <img class="todo" src="../../assets/img/icons/search.svg" alt="">
                <Nuxt-link to="/favorite"><img class="" src="../../assets/img/icons/heart.svg" alt=""></Nuxt-link>
                <Nuxt-link to="/cart">
                    <img class="" src="../../assets/img/icons/cart.svg" alt="">
                    <p class="cartCounter" v-if="productsQuantity > 0">{{productsQuantity}}</p>
                </Nuxt-link>
                <img class="todo" src="../../assets/img/icons/account.svg" alt="">
            </div>
            <!-- <h1 style="position: absolute">{{scrollPosition}}</h1> -->
        </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data(){
        return {
            scrollPosition: 0,
        }
    },    
    computed:{
        ...mapGetters('cart', [
            'getProducts'
        ]),
        productsQuantity(){
            let quantityComputed = 0;
            for (const item in this.getProducts) {
                if (Object.hasOwnProperty.call(this.getProducts, item)) {
                    const element = this.getProducts[item];
                    if (element.quantity != 0) {
                        quantityComputed = quantityComputed+element.quantity
                    }
                }
            
            }
            return quantityComputed
        }
    }
}
</script>

<style lang="scss" scoped>
    .cartCounter{
        position: absolute;
        top: 0;
        margin-top: 12px !important;
        margin-left: 12px !important;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #9E8B7B;
        text-align: center;
        font-size: 13px;
        line-height: 15px;
        color: white;
        border: 1px solid white;
    }
    a#logo{
        position: absolute;
        margin: 0 auto;
        top: 14px;
        left: 0;
        right: 0;
        text-align: center;
        max-width: 91px;
    }
    .burger__menu{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .flex {
        gap: 15px;
        align-items: center;
    }
    header{
        z-index: 2;
        width: 100%;
        
        position: fixed;
        top: 0;
        // border-bottom: 1px solid gray;
        // background: white
    }
    .header{
        max-width: 1676px;
        margin: 0 auto;
        height: 58px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    button{        
        cursor: pointer;
        background: none;
    }
    .buttons{
        display: flex;
        gap: 30px;
        img{
            width: 24px;
            height: 24px;
        }
    }
    
</style>