<template>
    <aside class="aside">
        <h3>{{currentRouteName}}</h3>
        <ul>
            <li><button><Nuxt-link to="/delivery">Доставка</Nuxt-link></button></li>
            <li><button><Nuxt-link to="/refund">Обмен и возврат</Nuxt-link></button></li>
            <li><button><Nuxt-link class="todo" to="#">Предзаказ</Nuxt-link></button></li>
            <li><button><Nuxt-link class="todo" to="#">Бонусная программа</Nuxt-link></button></li>
            <li><button><Nuxt-link class="todo" to="#">Оферта</Nuxt-link></button></li>
            <li><button><Nuxt-link class="todo" to="#">Политика конфиденциальности</Nuxt-link></button></li>
            <li><button><Nuxt-link class="todo" to="#">Пользовательское соглашение</Nuxt-link></button></li>
        </ul>
    </aside>
</template>

<script>
export default {
    computed:{
        currentRouteName() {
            if (this.$route.name === 'cart'){
                return 'Корзина'
            } else if (this.$route.name === 'favorite') {
                return 'Избранное'
            } else if (this.$route.name === 'catalog') {
                return 'Каталог'
            } else if (this.$route.name === 'delivery') {
                return 'Доставка'
            } else if (this.$route.name === 'refund') {
                return 'Обмен и возврат'
            }
        // return this.$route.name;
        }
    }
}
</script>

<style lang="scss" scoped>
aside{
        width: 270px;
        text-align: center;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 45px;
        h3{
            font-weight: 700;
            font-size: 28px;
            line-height: 33px;
            /* identical to box height */


            color: #4A4444;
        }
        ul {
        display: flex;
        flex-direction: column;
        // gap: 20px;
            a{
                text-decoration: none;
                color: #A9A1A1;

            }
            button{
                text-decoration: none;
                text-align: left;
                background: inherit;
                color: #A9A1A1;
                font-size: 20px;
                padding: 14px 20px;
                margin-left: -15px;
                &:hover{
                    padding: 14px 20px;
                    background: #DBD7D2;
                    border-radius: 30px;
                }
            }
            li {    
                

                text-align: left;
                list-style-type: none;
                text-decoration: none;
                
            }
        }
    }
</style>