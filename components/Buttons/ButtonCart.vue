<template>
    <button @click="buyClickHandler" v-if="!isProductAdded">Добавить в корзину 
    </button>    
    <Nuxt-link to="/cart" v-else>
        <button class="remove" >Перейти в корзину
        </button>    
    </Nuxt-link>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
      name: "item",
      props: {
        item: {
        type: Object,
        required: true
        },
        color: {
        
        },
        size: {
       
        }
    },
    computed: {
        ...mapState({
        products: state => state.cart.products
        }),
        isProductAdded () {
        return this.products.find(p => p.id === this.item.id)
        }
    },
    methods: {
        ...mapActions({
            addProduct: 'cart/addProduct',
            removeProduct: 'cart/removeProduct'
        }),
        buyClickHandler () {
            if (this.color == '' || this.size == ''){
                let uncheckedRadio = window.document.querySelector('input[type=radio]:checked');
                if (uncheckedRadio){
                    if (uncheckedRadio.name == 'size'){
                        // this.$emit('colorRadioColor', '1px solid blue')
                    } else if (uncheckedRadio.name == 'color'){                
                        // this.$emit('colorSizeColor', '1px solid blue')                        
                    }
                } else {
                    
                }             
            } else {
                this.item.color = this.color
                this.item.size = this.size
                this.item.quantity = 1;
                this.addProduct(this.item)
            }
            
        },
        addedClickHandler () {
            this.removeProduct(this.item.id)
        }
    }
}
</script>

<style lang="scss" scoped>
    .remove{
        background: white;
        border: 2px solid #685F5F;
        border-radius: 4px;
        color: #685F5F;
    }
    button{
        // font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        /* identical to box height */
        cursor: pointer;
        height: 60px;
        width: 100%;

        text-align: center;
        background: #685F5F;
        border: 2px solid #685F5F;
        border-radius: 4px;
        color: white;
    }
</style>