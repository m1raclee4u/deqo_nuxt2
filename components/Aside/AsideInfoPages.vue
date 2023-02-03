<template>
    <aside class="aside">
        <h3>{{currentRouteName}}</h3>
        <ul>
            <li><button @click="$router.push('/delivery')">Доставка</button></li>
            <li><button @click="$router.push('/refund')">Обмен и возврат</button></li>
            <li><button class="todo">Предзаказ</button></li>
            <li><button class="todo">Бонусная программа</button></li>
            <li><button class="todo">Оферта</button></li>
            <li><button class="todo">Политика конфиденциальности</button></li>
            <li><button class="todo">Пользовательское соглашение</button></li>
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