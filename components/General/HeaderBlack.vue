<template>
    <div style="position: absolute" class="">
        <!-- @mouseover="headerOpened = true" @mouseleave="headerOpened = false" :class="{notMainPage: $route.name != 'index' || whiteHeader === true, opened: headerOpened}" -->
        <header :class="{notMainPage: $route.name != 'index' || whiteHeader === true}">
        <div class="header">
            <div class="flex">
                <button class="burger__menu" @click="$store.commit('SET_MENU_OPENED', !$store.state.burgerMenuOpened)">
                    <img src="../../assets/img/icons/menu.svg" alt="">
                    каталог
                </button>
                
            </div>       
            <Nuxt-link id="logo" to="/" :class="{openedLogo: headerOpened}">
                <img src="../../assets/img/icons/logo.svg" alt="">
            </Nuxt-link>
           <div class="buttons">
                <img class="todo search" src="../../assets/img/icons/search.svg" alt="">
                <Nuxt-link to="/favorite" class="favorite"></Nuxt-link>
                <Nuxt-link to="/cart" class="cart">
                    <p class="cartCounter" v-if="productsQuantity > 0">{{productsQuantity}}</p>
                </Nuxt-link>
                <div @click="$store.commit('SET_LOGIN_OPENED', !$store.state.login)" class="account"></div>
            </div>
        </div>
        </header>
        <Login v-if="$store.state.login != false"/>
    </div>
    
</template>

<script>
import {mapGetters } from 'vuex'
import Login from '~/components/General/Login.vue'

export default {
    data(){
        return {
            headerOpened: false,
            whiteHeader: false,
        }
    },
    beforeMount () {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll () {
            if (window.scrollY > 0){
                this.whiteHeader = true
            } else {
                this.whiteHeader = false
            }
            
        }
    },
    components: {Login},
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
        },
        scrollPostion(){
            return window.scrollY
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .cartCounter{
        position: absolute;
        top: 0;
        // margin-top: 12px !important;
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
        top: 8px;
        left: 0;
        right: 0;
        text-align: center;
        max-width: 91px;
        transition: 1s all ease;

    }
    .openedLogo{
        top: 28px !important;
    }
    .burger__menu{
        display: flex;
        align-items: center;
        gap: 20px;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        /* основной */

        color: #685F5F;
    }
    .flex {
        gap: 15px;
        align-items: center;
    }
    header{
        z-index: 2;
        width: 100%;
        height: 58px;
        position: fixed;
        top: 0;        
        transition: 1s all ease;
    }
    .opened{
        height: 100px !important;
        background: white;
        border-bottom: 1px solid #BABABA;
    }
    .notMainPage{
        background: white;
        border-bottom: 1px solid #BABABA;
    }
    .header{
        max-width: 1676px;
        margin: 0 auto;
        height: 100%;
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
        align-items: center;
        gap: 30px;
        .favorite{
            width: 24px;
            height: 24px;
            background-size: 24px 24px;
            background-image: url('../../assets/img/icons/heart.svg');
            &:hover{
                background-image: url('../../assets/img/icons/heart_on.svg');
            }
        }
        .cart{
            position: relative;
            width: 24px;
            height: 24px;
            background-size: 24px 24px;
            background-image: url('../../assets/img/icons/cart.svg');
            &:hover{
                background-image: url('../../assets/img/icons/cart_on.svg');
            }
        }
        .account{
            cursor: pointer;
            width: 24px;
            height: 24px;
            background-size: 24px 24px;
            background-image: url('../../assets/img/icons/account.svg');
            &:hover{
                background-image: url('../../assets/img/icons/account_on.svg');
            }
        }
        img{
            width: 24px;
            height: 24px;
            cursor: pointer;
        }
    }
    
</style>