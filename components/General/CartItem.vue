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
                <Nuxt-Link :to="`/${item.category}/${item.name}`"><p>{{item.name}}</p></Nuxt-link>
                <span>{{'предзаказ'}}</span>
            </div>
        </div>       
        <div class="center">
            <div class="color" :id="item.color"></div>
            <div class="size" :id="item.size">{{item.size}}</div>
            <div class="quantity">
                <div @click="addedClickHandler" class="buttons">
                    <img src="../../assets/img/icons/quantity/minus.svg" alt="">
                </div>                
                <p>{{item.quantity}}</p>
                <div @click="incrementProduct" class="buttons">
                    <img src="../../assets/img/icons/quantity/plus.svg" alt="">
                </div>
            </div>
        </div>
        <div class="right">
            <div class="price">
                <p>{{item.price * item.quantity}}&nbsp;₽</p>
            </div>
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
        },
        computed: {

        }
    }
}
</script>

<style lang="scss" scoped>
 .item{
    width: 100%;
    border-bottom: 1px solid #A9A1A1;
    max-width: 980px;
    gap: 20px;
    display: flex;
    align-items: center;
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
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .quantity{
        font-size: 22px;
        display: flex;
        align-items: center;
        gap: 25px;
        p{
            -moz-user-select: none;
            -khtml-user-select: none;
            user-select: none;  
            width: 25px;
            text-align: center;
        }
        svg{
            width: 28px;
            height: 28px;
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
    .cart__img{
        width: 99.56px;
        height: 128px;
        // margin-bottom: 20px;
    }
    // justify-content: space-between;
    .left{
        display: flex;
        align-items: center;
        gap: 40px;
        width: 480px;
        cursor: pointer;
        .name{
            a{
                color: #4A4444;
                text-decoration: none;
            }
            span{
                font-size: 16px;
                line-height: 100%;
                color: #A9A1A1;
            }
        }
    }
    .center{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .right{
        display: flex;
        align-items: center;
        gap: 30px; 
        .price{
            display: flex;
            width: 164px;
            flex-direction: row-reverse;
        }
        p{
            -moz-user-select: none;
            -khtml-user-select: none;
            user-select: none;  
            font-weight: 500;
            font-size: 22px;
            line-height: 26px;
            color: #685F5F;
        }
    }
 }
</style>