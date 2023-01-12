<template>
    <header class="p60">
        <div class="flex">
            <button class="burger__menu" @click="$store.commit('SET_MENU_OPENED', !$store.state.burgerMenuOpened)">
                <img src="../../assets/img/icons/menu.svg" alt="" >
                каталог
            </button>
        </div>       
        <Nuxt-link id="logo" to="/"><img src="../../assets/img/icons/logo.svg" alt=""></Nuxt-link>
        <div class="buttons">
            <img class="todo" src="../../assets/img/icons/search.svg" alt="">
            <Nuxt-link to="/favorite"><img class="todo" src="../../assets/img/icons/heart.svg" alt=""></Nuxt-link>
            <img class="todo" src="../../assets/img/icons/cart.svg" alt="">
            <img class="todo" src="../../assets/img/icons/account.svg" alt="">
        </div>
        <!-- <h1 style="position: absolute">{{scrollPosition}}</h1> -->

    </header>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

 a#logo{
        position: absolute;
        margin: 0 auto;
        top: 14px;
        left: 0;
        right: 0;
        text-align: center;
        max-width: 91px;
    }

    .burger__menu{
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .flex{
        gap: 15px;
        align-items: center;
    }

    

    header{
        z-index: 1;
        width: 100%;
        height: 58px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 60px;
        border-bottom: 1px solid #8c8c8c30;
        position: sticky;
        top: 0;
        background-color: rgba(255, 255, 255, 0.938);
        // margin-bottom: 40px;
    }
    button{        
        cursor: pointer;
        background: none;
    }
    .buttons{
        display: flex;
        gap: 30px;
        img{
            width: 24px;
            height: 24px;
        }
    }    
</style>