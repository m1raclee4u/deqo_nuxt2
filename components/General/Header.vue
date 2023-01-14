<template>
    <header class="p60">
        <div class="header">
            <div class="flex">
                <button class="burger__menu" @click="$store.commit('SET_MENU_OPENED', !$store.state.burgerMenuOpened)">
                    <img src="../../assets/img/icons/menu.svg" alt="">
                    каталог
                </button>
                
            </div>       
            <Nuxt-link id="logo" to="/">
                <img src="../../assets/img/icons/logo.svg" alt="">
            </Nuxt-link>
            <div class="buttons">
                <img class="todo" src="../../assets/img/icons/search.svg" alt="">
                <Nuxt-link to="/favorite"><img class="" src="../../assets/img/icons/heart.svg" alt=""></Nuxt-link>
                <Nuxt-link to="/cart"><img class="" src="../../assets/img/icons/cart.svg" alt=""></Nuxt-link>
                <img class="todo" src="../../assets/img/icons/account.svg" alt="">
            </div>
            <!-- <h1 style="position: absolute">{{scrollPosition}}</h1> -->
        </div>
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
    .flex {
        gap: 15px;
        align-items: center;
    }
    header{
        z-index: 2;
        width: 100%;
        
        position: fixed;
        top: 0;
        // border-bottom: 1px solid gray;
        // background: white
    }
    .header{
        max-width: 1676px;
        margin: 0 auto;
        height: 58px;
        display: flex;
        justify-content: space-between;
        align-items: center;
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