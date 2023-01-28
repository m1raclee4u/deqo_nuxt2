<template>
    <section>
        <footer class="">
            <div class="left">
                <div class="text">
                    <h5>Получайте скидки</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="form">
                    <form action="">
                        <input type="email" name="" placeholder="Введите своей email" id="email">
                        <button type="submit">Отправить</button>
                    </form>
                    <p>DEQO 2023</p>
                </div>
            </div>
            <div class="right">
                <div class="column">
                    <h5>Информация</h5>
                    <div class="links">
                        <Nuxt-Link to="/delivery">Оплата и доставка</Nuxt-Link>
                        <Nuxt-Link to="/refund">Обмен и возврат</Nuxt-Link>
                        <Nuxt-Link class="todo" to="">Оферта</Nuxt-Link>
                        <Nuxt-Link class="todo" to="">Политика конфиденциальности</Nuxt-Link>
                        <Nuxt-Link class="todo" to="">Пользовательское соглашение</Nuxt-Link>
                    </div>
                </div>
                <div class="column">
                    <h5>Контакты</h5>
                    <div class="links">
                        <a href="mailto:example@mail.ru">example@mail.ru</a>
                        <a href="tel:+7 (822) 156-90-15">+7 (822) 156-90-15</a>
                    </div>
                </div>
            </div>
        </footer>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
section{
    margin: 0 auto;
    // max-width: 1920px;
    width: 100%;
    padding: 50px 0 40px 0;
    // margin: 0 auto;
    background-color: #f7f7f7;
    // overflow-x: hidden;
}
footer{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 300px;
    max-width: 1676px;
    margin: 0 auto;

}
form {
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
}
.left{
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 480px;

    .text{
        display: flex;
        flex-direction: column;
        gap: 20px;
        p{
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;

            /* средний */

            color: #A9A1A1;
        }
    }

    h5{
        font-weight: 600;
        font-size: 36px;
        line-height: 43px;

        /* основной */

        color: #685F5F;
        margin-bottom: 35px;
    }
    .form{
        p{
            font-size: 10px;
        }
    }
}
.right{
    display: flex;
    gap: 150px;    
    font-size: 15px;
    letter-spacing: -0.001em;
    .column{
        display: flex;
        gap: 50px;
        h5{
            font-weight: 600;
            font-size: 18px;
            line-height: 21px;
            color: #685F5F;
        }
        font-size: 16px;
        line-height: 19px;

        /* средний */

        color: #A9A1A1;
    }
    .links{
        display: flex;
        flex-direction: column;
        gap: 30px;
        a{
            text-decoration: none;
            color: #848484;
        }
    }
}
input[type=email] {
    background-color: inherit;
    min-width: 300px;
    height: 35px;
    border-radius: 4px;
    color: #A9A1A1;
    border-bottom: 1px solid #A1A1A1;
    &::placeholder{
        color: #A9A1A1;
        // padding-left: 20px;
    }
    
  }
button {
    background-color: inherit;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    cursor: pointer;
    /* тёмный */

    color: #1A1A1A;
}

@media (max-width:1200px) {
  .right{
    .column{
    flex-direction: column;
    gap: 30px;
  }
  }
  
}
</style>