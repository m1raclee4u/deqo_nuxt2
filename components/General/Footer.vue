<template>
  <section>
    <footer class="">
      <div class="left">
        <div class="text">
          <h5>Получайте скидки</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
        <div class="form">
          <form action="">
            <input
              type="email"
              name=""
              placeholder="Введите своей email"
              id="email"
            />
            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
      <div class="column">
        <h5>О нас</h5>
        <div class="links">
          <Nuxt-Link class="todo" to="">Концепция и ценности бренда</Nuxt-Link>
          <Nuxt-Link class="todo" to="">Сотрудничество</Nuxt-Link>
          <Nuxt-Link class="todo" to="">Работа в DEQO</Nuxt-Link>
        </div>
      </div>
      <div class="column">
        <h5>Покупателям</h5>
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
          <a
            href="mailto:hello.deqo@gmail.com?subject=Вопрос по &body=Здравствуйте! Возник вопрос по поводу"
          >example@mail.ru</a
          >
          <a href="tel:+7 (822) 156-90-15">+7 (822) 156-90-15</a>
          <div class="jscb">
            <!-- <p>
                наши соцсети <br />
                и чаты поддержки
              </p> -->
            <buttons-social footer="footer"/>
          </div>
        </div>
      </div>
    </footer>
    <p class="copyright">DEQO 2023</p>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.copyright {
  color: #685F5F;
  margin: 0 auto !important;
  max-width: 1676px;
}

.jscb {
  display: flex;
  align-items: center;
  gap: 20px;

  .buttons_help {
    .telegram {
      width: 40px !important;
      height: 40px !important;
    }
  }
}

section {
  margin: 0 auto;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 40px;
  // padding: 50px 0 40px 0;
  background-color: #f7f7f7;
}

footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 300px;
  width: 100%;
  gap: 100px;
  max-width: 1676px;
  margin: 0 auto;
}

form {
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 338px;

  h5 {
    font-family: "Playfair Display", serif;
    font-size: 20px;
    line-height: 27px;

    color: #685f5f;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 30px;

    a {
      text-decoration: none;
      color: #848484;

      &:hover {
        color: #5b5353;
      }
    }
  }

  font-size: 16px;
  line-height: 19px;
  color: #a9a1a1;
}

.left {
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 480px;

  .text {
    display: flex;
    flex-direction: column;
    gap: 20px;

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #a9a1a1;
    }
  }

  h5 {
    font-family: "Playfair Display", serif;
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    color: #685f5f;
    margin-bottom: 35px;
  }

  .form {
    p {
      font-size: 10px;
    }
  }
}

.copyright{
  text-align: right;

}
.right {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 40px;
  font-size: 15px;
  letter-spacing: -0.001em;
}

input[type="email"] {
  background-color: inherit;
  min-width: 300px;
  height: 35px;
  border-radius: 4px;
  color: #a9a1a1;
  border-bottom: 1px solid #a1a1a1;

  &::placeholder {
    color: #a9a1a1;
  }
}

button {
  background-color: inherit;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  cursor: pointer;
  color: #1a1a1a;
}

@media (max-width: 1500px) {
  .column {
    width: 100%;
  }
  .left {
    max-width: 228px;

    .text {
      h5 {
        font-size: 20px;
      }
    }
  }
  .column {
    max-width: 228px;
    gap: 18px;

    .links {
      gap: 20px;
    }
  }
  form {
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;

    input[type="email"] {
      min-width: unset;
    }
  }
}

@media (max-width: 1024px) {
  footer {
    flex-wrap: wrap;
    height: 100%;
    gap: 70px;
  }
}

@media (max-width: 640px) {
  footer {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }
}
</style>
