<template>
    <aside class="aside">
        <h3>{{currentRouteName}}</h3>
        <ul>
            <li><Nuxt-link to="/delivery">Доставка</Nuxt-link></li>
            <li><Nuxt-link to="/refund">Обмен и возврат</Nuxt-link></li>
            <li><Nuxt-link class="todo" to="#">Предзаказ</Nuxt-link></li>
            <li><Nuxt-link class="todo" to="#">Бонусная программа</Nuxt-link></li>
            <li><Nuxt-link class="todo" to="#">Оферта</Nuxt-link></li>
            <li><Nuxt-link class="todo" to="#">Политика конфиденциальности</Nuxt-link></li>
            <li><Nuxt-link class="todo" to="#">Пользовательское соглашение</Nuxt-link></li>
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
        gap: 20px;
            a{
                text-decoration: none;
                color: #A9A1A1;
                font-size: 20px;
            }
            li {    
                text-align: left;
                list-style-type: none;
                text-decoration: none;
            }
        }
    }
</style>