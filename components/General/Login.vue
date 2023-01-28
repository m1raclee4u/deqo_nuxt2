<template>
    <div class="popup">
        <div class="login" @click="$store.commit('SET_LOGIN_OPENED', !$store.state.login)"></div>
        <div class="loginPopUp">
            <h3>Вход  |  Регистрация</h3>
            <div class="buttons">
                <input class="button" type="text" v-mask="'+7 (###) ### ## ##'" v-model="inputPhoneModel" placeholder="+7">
                <button class="button next">Далее</button>
                <p>войти через электронную почту</p>
            </div>
        </div>
    </div>
    
</template>

<script>

export default {
    data() {
      return {
        inputPhoneModel: '',
      };
    },
}
</script>

<style lang="scss" scoped>
    .buttons{
        display: flex;
        flex-direction: column;
        gap: 20px;
        color: #685F5F;
        p{
            width: 100%;
            text-align: center;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            cursor: pointer;
        }
        .button{
            text-align: left;
            padding: 18px 20px;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            /* identical to box height */
            border: 1px solid #685F5F;
            border-radius: 4px;

            /* основной */

        }
        .next{
            border: none;
            text-align: center;
            color: #FFFFFF;
            font-weight: 400;
            background-color: #A9A1A1;
            cursor: pointer;
        }
    }
    
    .popup{
        z-index: 300;
        width: 100vw;
        height: 100vh;
        position: fixed;
    }
    .login{
        width: 100vw;
        height: 100vh;
        background-color: #000;
        opacity: .5;
        position: fixed;
    }
    .loginPopUp{
        display: flex;
        flex-direction: column;
        gap: 40px;
        position: fixed;
        width: 600px;
        height: 420px;
        background-color: #fff;
        top: 33%;
        right: 0;
        left: 0;
        margin: 0 auto;
        padding: 85px 110px;
            h3{
                width: 100%;
                text-align: center;
                font-weight: 700;
                font-size: 24px;
                line-height: 28px;
                color: #685F5F;
            }
    }
</style>