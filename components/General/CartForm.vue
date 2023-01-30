<template>
    <div class="deliveryForm">
        <h4>Оформление заказа</h4>
        <form action="POST" class="form">
            <div class="input">
                <label for="email">Email</label>
                <input autocomplete="email" @input="checkFilled" v-model="cartForm.cartEmail" class="button" type="email" name="" id="email" placeholder="Электронная почта">
            </div>
            <div class="input">
                <label for="name">Ф.И.О.</label>
                <input autocomplete="name" @input="checkFilled" v-model="cartForm.cartName" class="button" type="text" name="" id="name" placeholder="Ф.И.О">
            </div>
            <div class="input">
                <label for="tel">Телефон</label>
                <input autocomplete="tel" id="tel" @input="checkFilled" v-model="cartForm.cartTel" class="button" type="text" v-mask="'+7 (###) ### ## ##'" placeholder="+7">
            </div>
            <div class="input">
                <label for="address-level2">Населенный пункт</label>
                <input autocomplete="address-level2" @input="checkFilled" v-model="cartForm.cartCity" class="button" type="email" name="" id="address-level2" placeholder="Населенный пункт">
            </div>
            <div class="input">
                <label for="street-address">Улица</label>
                <input autocomplete="street-address" @input="checkFilled" v-model="cartForm.cartStreet" class="button" type="email" name="" id="street-address" placeholder="Улица">
            </div>
            <div class="input">
                <label for="homeNumber">Дом</label>
                <div class="group">
                    <input @input="checkFilled" v-model="cartForm.cartHome" class="button" type="email" name="" id="homeNumber" placeholder="Дом">
                    <input @input="checkFilled" v-model="cartForm.cartFlat" class="button" type="email" name="" id="flatNubmer" placeholder="Квартира">    
                </div>                
            </div>
            <div class="input">
                <label for="deliveryType">Способ доставки</label>
                <div class="group" id="deliveryType">
                    <div class="flex">
                        <input type="radio" name="delivery" id="delivery" checked> 
                        <label for="delivery">Доставка</label>
                    </div>
                    <div class="flex">
                        <input type="radio" name="delivery" id="pickUpPoint">
                        <label for="pickUpPoint">Пункты выдачи</label>
                    </div>
                    <div class="flex">
                        <input type="radio" name="delivery" id="parcelAutomat">
                        <label for="parcelAutomat">Постамат</label>
                    </div>
                </div>
            </div>
            <div class="input">
                <label for="paymentMethod">Способ платежа</label>
                <div class="group">
                    <div class="flex" id="paymentMethod">
                        <input type="radio" name="payment" id="creditCard" checked>
                        <label for="creditCard">Банковская карта</label>                        
                    </div>
                </div>                
            </div>
            <div class="input">
                <label for="comment">Коментарий</label>
                <textarea style="resize: none; max-width: 710px; min-height: 140px;" class="button" name="comment" id="comment" cols="30" rows="10"></textarea>
            </div>
            
        </form>
    </div>

</template>

<script>
export default {
    data() {
      return {
        cartForm: {
            cartEmail: '',
            cartName: '',
            cartTel: '',
            cartCity: '',
            cartStreet: '',
            cartHome: '',
            cartFlat: '',
        }
      };
    },
    methods:{
        checkFilled(){
            let emptyInputs = 0
            for (const item in this.cartForm) {
                if (Object.hasOwnProperty.call(this.cartForm, item)) {
                    const element = this.cartForm[item];
                    if (element === '')
                    emptyInputs++
                }
            }
            if (emptyInputs === 0)
            this.$emit('emitAllFieldsAreFilled')
            else if (emptyInputs != 0)
            this.$emit('emitAllFieldsNotFilled')

            // console.log(emptyInputs);
        }
    }
}
</script>

<style lang="scss" scoped>
    label{
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        /* identical to box height */


        /* основной */

        color: #685F5F;

    }
    .button{
        text-align: left;
        padding: 18px 20px;
        border: 1px solid #685F5F;
        border-radius: 4px;
    }
    .deliveryForm{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 60px;
        width: 100%;
        h4{
            font-weight: 600;
            font-size: 28px;
            line-height: 33px;
            color: #4A4444;
        }

    }
    .form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    .input{
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 980px;
        input{
            max-width: 710px;
        }
        .group{
            max-width: 710px;
            width: 100%;
            display: flex;
            gap: 60px;
            .flex{
                display: flex;
                gap: 20px;
            }
        }
    }
</style>