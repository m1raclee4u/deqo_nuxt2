<template>
    <div class="item">
        <div class="left">
             <Nuxt-Link :to="`/${item.category}/${item.name}`">
                <img
                class="cart__img"
                :src="'https://frontend-test.idaproject.com' + item.photo"
                :alt="item.name"
                />
            </Nuxt-link>            
            <div class="name">
                <p>{{item.name}}</p>
            </div>
        </div>       
        <div class="center">
            <div class="color" :id="item.color"></div>
            <div class="size" :id="item.size">{{item.size}}</div>
            <div class="quantity">
                <div @click="addedClickHandler" class="buttons">
                    <svg  width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.05078C5.4186e-08 0.636568 0.30526 0.300781 0.681818 0.300781L14.3182 0.300782C14.6947 0.300782 15 0.636569 15 1.05078C15 1.465 14.6947 1.80078 14.3182 1.80078L0.681818 1.80078C0.30526 1.80078 -5.4186e-08 1.46499 0 1.05078Z" fill="#A9A1A1"/>
                    </svg>
                </div>                
                <p>{{item.quantity}}</p>
                <div @click="incrementProduct" class="buttons">
                    <svg  width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.50007 0.5C7.87662 0.500036 8.18185 0.805325 8.18182 1.18188L8.18123 7.31818H14.3182C14.6947 7.31818 15 7.62344 15 8C15 8.37656 14.6947 8.68182 14.3182 8.68182H8.18182V14.8182C8.18182 15.1947 7.87656 15.5 7.5 15.5C7.12344 15.5 6.81818 15.1947 6.81818 14.8182L6.81818 8.6824L0.681753 8.68182C0.305195 8.68178 -3.59222e-05 8.37649 3.17095e-09 7.99994C3.59285e-05 7.62338 0.305325 7.31815 0.681883 7.31818L6.8176 7.31877L6.81818 1.18175C6.81822 0.805195 7.12351 0.499964 7.50007 0.5Z" fill="#A9A1A1"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="right">
            <p>{{item.price * item.quantity}}&nbsp;₽</p>
            <div class="delete" @click="deleteClickHandler"></div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
        // name: "item",
      props: {
        item: {
            type: Object,
            required: true
        },       
        getProducts: {

        },
    },
    methods: {
        ...mapActions({
            addProduct: 'cart/addProduct',
            removeProduct: 'cart/removeProduct',
            incrementProductCart: 'cart/incrementProduct',
            decrementProductCart: 'cart/decrementProduct',
        }),
        buyClickHandler () {
            this.addProduct(this.item)
        },
        incrementProduct () {
            this.incrementProductCart(this.item)
        },
        addedClickHandler () {
            this.decrementProductCart(this.item)
        },
        deleteClickHandler () {
            this.removeProduct(this.item)
        }
    }
}
</script>

<style lang="scss" scoped>
 .item{
    margin-bottom: 20px;
    border-bottom: 1px solid #A9A1A1;
    .delete{
        width: 25px;
        height: 20px;
        cursor: pointer;
        // background-color: black;
        background-image: url('../../assets/img/icons/deleteCartItem.svg');
        background-repeat: no-repeat;
    }
    .color{
        width: 38px;
        height: 38px;
        border-radius: 50%;
    }
    .buttons{
        width: 22px;
        height: 22px;
        cursor: pointer;
    }
    .quantity{
        font-size: 22px;
        display: flex;
        align-items: center;
        gap: 32px;
        p{
            -moz-user-select: none;
            -khtml-user-select: none;
            user-select: none;  
            width: 25px;
            text-align: center;
        }
        svg{
            width: 100%;
            height: 100%;
        }
        
    }
    .size{
        width: 38px;
        height: 38px;
        background: #685F5F;
        border-radius: 4px;
        font-weight: 400;
        font-size: 18px;
        line-height: 36px;
        /* identical to box height */
        text-transform: uppercase;
        text-align: center;
        letter-spacing: -0.02em;

        color: #FFFFFF;
    }
    img{
        width: 99.56px;
        height: 128px;
        // margin-bottom: 20px;
    }
    max-width: 1676px;
    gap: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left{
        display: flex;
        align-items: center;
        gap: 20px;
        min-width: 570px;
        width: 100%;
    }
    .center{
        display: flex;
        align-items: center;
        gap: 100px;
    }
    .right{
        display: flex;
        align-items: center;
        gap: 100px; 
        p{
            -moz-user-select: none;
            -khtml-user-select: none;
            user-select: none;  
            font-weight: 500;
            font-size: 22px;
            line-height: 26px;
            /* identical to box height */


            color: #685F5F;
        }
    }
 }
</style>