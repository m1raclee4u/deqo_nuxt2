<template>
    <div class="menu"  @click="$store.commit('SET_MENU_OPENED', !$store.state.burgerMenuOpened)">
        <div class="burger_menu">
            <div class="top column">
                <Nuxt-Link to="">Акции</Nuxt-Link>    
                <Nuxt-Link to="">Доставка</Nuxt-Link>    
                <Nuxt-Link to="">Оплата</Nuxt-Link>    
                <Nuxt-Link to="">Обмен и возврат</Nuxt-Link>    
                <Nuxt-Link to="">Забрать в магазине</Nuxt-Link>    
                <Nuxt-Link to="">Размеры</Nuxt-Link>    
                <Nuxt-Link to="">Подарочная карта</Nuxt-Link>    
                <Nuxt-Link to="">FAQ</Nuxt-Link>    
                <Nuxt-Link to="">Уход за одеждой</Nuxt-Link>    
            </div>
            <div class="bottom column">
                <Nuxt-Link to="">Стать участником</Nuxt-Link>    
                <Nuxt-Link to="">Правила участия</Nuxt-Link>    
                <Nuxt-Link to="">Частые вопросы</Nuxt-Link>    
                <Nuxt-Link to="">Выды карт</Nuxt-Link>
            </div>
        </div>    
    </div>   
</template>

<script>
export default{

}

</script>

<style lang="scss" scoped>
    a{
        font-family: 'RF Dewi';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        /* identical to box height */

        text-decoration: none;

        color: #BABABA;
    }
    .menu{
        box-sizing: border-box;
        position: fixed;
        background-color: #20202000;
        height: 100vh;
        width: 100vw;
        max-width: 100%;
        top: 0;
        z-index: 2000;

        // left: -20px;
        cursor: pointer;
    }
    .column{
        display: flex;
        flex-direction: column;
        gap: 30px;
       
    }
    .burger_menu{        
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
        position: absolute;
        background-color: #202020;
        top: 0;
        width: 360px;
        height: 100vh;
        padding: 60px;
        z-index: 2000;

        
    }
</style>