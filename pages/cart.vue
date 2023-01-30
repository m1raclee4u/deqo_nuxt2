<template>
    <div class="wrapper">
        <BurgerMenu v-if="$store.state.burgerMenuOpened != false"/>
        <HeaderBlack/>
        <Breadcrumbs/>
        <main class="main">   
            <div class="title">
                <h3 v-if="$store.state.cart.products.length > 0">Оформление заказа</h3>
                <p v-if="$store.state.cart.products.length < 1">Ваша корзина пока пуста,<br> а наш каталог полон <Nuxt-link to="/catalog">новинок</Nuxt-link></p>  
            </div>         
            <div v-if="$store.state.cart.products.length > 0" class="cart">
                <div class="leftGroup">
                    <div class="cartItems">
                        <div
                        v-for="item in getProducts" 
                        :key="item.article"
                        class="cartItem"    
                        >
                            <cart-item 
                            :item="item"
                            :key="item.id" 
                            @emitDeleteItem="addedClickHandler"                 
                            >
                            </cart-item>
                        </div>   
                    </div>
                    <promocode/>
                    <CartForm @emitAllFieldsAreFilled="allFieldsAreFilled=true" @emitAllFieldsNotFilled="allFieldsAreFilled=false" v-if="$store.state.cart.products.length > 0"/>
                </div>

                

                <InformationWindowCart :allFieldsAreFilled="allFieldsAreFilled"/>
            </div>

        </main>
        <Footer/>
    </div>
</template>

<script>
import AsideCategories from '~/components/Aside/AsideCategories.vue'
import AsideFilter from '~/components/Aside/AsideFilter.vue'
import Filters from '~/components/General/Filters.vue'
import HeaderBlack from '~/components/General/HeaderBlack.vue'
import CartItem from '~/components/General/CartItem.vue'
import BurgerMenu from '~/components/General/BurgerMenu.vue'
import Breadcrumbs from '~/components/General/Breadcrumbs.vue'
import Footer from '~/components/General/Footer.vue'
import CartForm from '~/components/General/CartForm.vue'


import { mapActions, mapGetters } from 'vuex'
import InformationWindowCart from '~/components/General/InformationWindowCart.vue'
import Promocode from '~/components/General/promocode.vue'

export default {
    components: { HeaderBlack, AsideFilter, Filters, AsideCategories, BurgerMenu, Breadcrumbs, CartItem, CartForm, Footer, InformationWindowCart, Promocode},
    
    data() {
        return {
        allFieldsAreFilled: false,
        showFilter: false,
        filterLabel: "цене",
        productsInCartId: [],
        checkedId: '',
        checkedFiltered: '',
        currentPage: 1,
        maxPerPage: 9,
        showReadMore: true
        };
    },
    computed: {
        // local(){
        //     localStorage.length
        //     return  0
        // },
        ...mapGetters('cart', [
            'getProducts'
        ]),
        isProductAdded () {
        return this.products.find(p => p.id === this.item.id)
        }
    },
    methods: {
        sortByChecked(checkedId) {
           this.checkedId = checkedId
        },
        sortByFiltered(checkedFiltered) {
            this.checkedFiltered = checkedFiltered
        },
        loadMore() {
            this.currentPage += 1;
        },
        ...mapActions({
            addProduct: 'cart/addProduct',
            removeProduct: 'cart/removeProduct'
        }),
         addedClickHandler () {
            this.removeProduct(this.item)
        }
    },
    
    
};

    
</script>

<style lang="scss" scoped>
    .leftGroup{
        display: flex;
        flex-direction: column;
        gap: 60px;
    }
    .cartItems{
        transition: 0.5ms ease all;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .wrapper{
        gap: 50px;
    }
    .title{
        width: 100%;
        h3{
            font-size: 28px;
            line-height: 33px;
            color: #4A4444;
        }
        p{
            margin-top: 20px;
            text-align: center;
            font-size: 20px;
            line-height: 24px;

            color: #685F5F;
            a{
                font-size: 20px;
                line-height: 24px;

                color: #685F5F;
            }
        }
    }
    .delete{
    display: block;
    flex-shrink: 0;
    width: 11px;
    height: 11px;
    margin-right: 9px;
    background: url('../assets/img/icons/delete.svg');
    background-size: cover;
    cursor: pointer;
    }
    button{
        display: flex;
        align-items: center;
        font-size: 11px;
        padding: 10px 9px;
        font-weight: 600;
    }



    .aic{
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;        
        margin-bottom: 40px;
        min-height: 32px;
        gap: 20px;
        p{
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;

            /* средний */

            color: #A9A1A1;
            // width: 195px;
        }
    }
    .items__main{    
        width: 100%;
        
        button{
            margin: 40px auto 0 auto;
            justify-content: center;
            align-items: center;
            padding: 20px 109px;
            gap: 10px;

            width: 410px;
            height: 64px;

            /* основной */

            background: #685F5F;
            border-radius: 4px;

            font-weight: 400;
            font-size: 18px;
            line-height: 22px;

            color: white;
        }
    }
    .items{
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        // gap: 17.6px;
    }
    .item:nth-child(3n+3) {
        margin-right: 0;
    }
    main {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 60px;
        // padding: 40px 60px;
        max-width: 1400px;
        margin: 0 auto;
        width: 100%;
        min-height: 50vh;
        .cart{
            display: flex;
            gap: 40px;
            justify-content: space-between;
        }
    }
    aside{
        width: 280px;
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        gap: 45px;
        h3{
            font-size: 28px;
            line-height: 33px;
            /* identical to box height */

            color: #4A4444;
        }
        ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
            a{
                text-decoration: none;
                color: #A9A1A1;
                font-size: 20px;
            }
            li {    
                text-align: right;
                list-style-type: none;
                text-decoration: none;
            }
        }
    }
</style>