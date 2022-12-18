<template>
    <header class="p60">
        <div class="flex">
            <button class="burger__menu">
                <img src="../../assets/img/icons/menu.svg" alt="" @click="$store.commit('SET_MENU_OPENED', !$store.state.burgerMenuOpened)">
            </button>
            каталог
        </div>       
        <Nuxt-link id="logo" to="/"><img src="../../assets/img/icons/logo.svg" alt=""></Nuxt-link>
        <div class="buttons">
            <img class="todo" src="../../assets/img/icons/search.svg" alt="">
            <img class="todo" src="../../assets/img/icons/heart.svg" alt="">
            <img class="todo" src="../../assets/img/icons/cart.svg" alt="">
            <img class="todo" src="../../assets/img/icons/account.svg" alt="">
        </div>
        <!-- <h1 style="position: absolute">{{scrollPosition}}</h1> -->

    </header>
    
</template>

<script>
// export default {
//     data(){
//         return {
//             scrollPosition: 0,
//         }
//     },
//     methods: {
//         handleScroll () {
//         // Your scroll handling here
//         this.scrollPosition = window.scrollY;
//         if (this.scrollPosition < 350) {
//             window.document.getElementById('logo').style.top = `calc(400px - ${this.scrollPosition}px)`;
//             if (this.scrollPosition == 100)
//             window.document.getElementById('logo').style.transform = `scale(calc(300/${this.scrollPosition}))`;
//         } else {
//             window.document.getElementById('logo').style.top = `unset`;
//             window.document.getElementById('logo').style.transform = `unset`;
            

//         }
//         }
//     },
//     updated() {
//         window.addEventListener('scroll', this.handleScroll)
//     },
//     beforeMount () {
//         window.document.getElementById('logo').style.top = '400px';
//         window.document.getElementById('logo').style.transform = 'scale(3)';
//         window.addEventListener('scroll', this.handleScroll)
//     },
//     beforeDestroy () {
//         window.removeEventListener('scroll', this.handleScroll)
//     }
// }
</script>

<style lang="scss" scoped>
    .flex {
        gap: 15px;
        align-items: center;
    }
    header{
        z-index: 2;
        width: 100%;
        height: 58px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        // background: rgb(25,25,25);
        // background: linear-gradient(180deg, rgba(25,25,25,1) 0%, rgba(0,0,0,0) 100%);
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