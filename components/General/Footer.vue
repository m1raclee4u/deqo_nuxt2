<template>
    <section>
        <footer class="p60">
            <div class="left">
                <div class="text">
                    <h5>Получайте скидки</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam suscipit voluptate eveniet possimus facere optio quibusdam quidem </p>
                </div>
                <div class="form">
                    <form action="">
                        <input type="email" name="" placeholder="Введите своей email" id="email">
                        <button type="submit">Отправить</button>
                    </form>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitm</p>
                </div>
            </div>
            <div class="right">
                <div class="column">
                    <h5>Информация</h5>
                    <div class="links">
                        <Nuxt-Link to="">Частые вопросы</Nuxt-Link>
                        <Nuxt-Link to="">Правила участия</Nuxt-Link>
                        <Nuxt-Link to="">Стать участником</Nuxt-Link>
                        <Nuxt-Link to="">Виды карт</Nuxt-Link>
                        <Nuxt-Link to="">Адреса магазинов</Nuxt-Link>
                    </div>
                </div>
                <div class="column">
                    <h5>Контакты</h5>
                    <div class="links">
                        <Nuxt-Link to="">example@mail.ru</Nuxt-Link>
                        <Nuxt-Link to="">+7 (822) 156-90-15</Nuxt-Link>
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
    max-width: 1920px;
    width: 100%;
    padding: 50px 0 40px 0;
    // margin: 0 auto;
    background-color: #f7f7f7;
}
footer{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 300px;
}
form {
    margin-bottom: 40px;
}
.left{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 480px;

    .text{
        p{
            font-size: 16px;
            line-height: 24px;
        }
    }

    h5{
        font-size: 37px;
        margin-bottom: 35px;
        line-height: 42px;
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
    min-width: 350px;
  }
button {
    background-color: inherit;
    font-size: 16px;
    font-weight: 600;
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