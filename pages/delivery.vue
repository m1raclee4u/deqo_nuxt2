<template>
  <section>
    <div class="wrapper">
      <Breadcrumbs style="padding: 0"/>
      <main class="main">
        <div class="catalog">
          <AsideInfoPages :links="asideLinks"/>
          <div class="info">
            <div class="info_bullet">
              <h5>Способы доставки</h5>
              <ul>
                <li>Курьерская доставка</li>
                <li>Экспресс-доставка</li>
                <li>В пункт выдачи</li>
              </ul>
              <p>Доставка осуществляется курьерской службой СДЭК</p>
            </div>
            <div class="info_bullet">
              <h5>Курьерская доставка</h5>
              <b>Доставка с примеркой по Москве, Московской области</b>
              <p>Стоимость: 590 рублей*</p>
              <p>Сроки: 1—6 рабочих дней</p>
              <p>Способ оплаты: Наличными или банковской картой при получении</p>
              <b>Детали:</b>
              <ul>
                <li>
                  Интервал доставки по Москве и Московской области — с 9 до 21
                  часов. Если вы живете в Москве в пределах МКАД, вы сможете
                  выбрать удобный день и время доставки — ссылку пришлем в СМС
                  после оформления заказа
                </li>
                <li>
                  На примерку у вас будет 15 минут. Время не зависит от количества
                  заказов и вещей в них
                </li>
                <li>
                  Бонусы списываются только на сумму фактического выкупа,
                  остальные бонусы вернутся на ваш счет
                </li>
                <li>
                  Если вы отказались от заказа или выкупили его часть, промокоды
                  не восстанавливаются
                </li>
                <li>
                  Доставку надо оплатить (курьеру), даже если после примерки вы
                  отказались от заказа или его части
                </li>
                <li>
                  Опция примерки недоступна для купальников и нижнего белья, но вы
                  всегда можете включить их в ваш заказ с примеркой, чтобы
                  объединить доставку
                </li>
                <li>
                  Пожалуйста, убедитесь, что курьер сможет припарковать автомобиль
                  у вашего дома, при необходимости закажите ему пропуск. Если
                  такой возможности нет, встретьте его на улице
                </li>
              </ul>
              <b>Примерка недоступна, если вы:</b>
              <ul>
                <li>Выбрали способ оплаты «Картой онлайн»</li>
                <li>
                  Заказали несколько экземпляров модели в одном и том же размере,
                  например три футболки в размере S с одинаковым артикулом
                </li>
                <li>Положили в корзину больше семи вещей</li>
              </ul>
            </div>
            <div class="info_bullet">
              <b>Доставка без примерки по Москве, Московской области</b>
              <p>Стоимость: 590 рублей*</p>
              <p>Сроки: 1—6 рабочих дней</p>
              <p>Способ оплаты: На сайте (картой онлайн)</p>
              <b>Детали:</b>
              <ul>
                <li>
                  Чтобы получить предоплаченный заказ, предъявите курьеру паспорт
                  и распишитесь
                </li>
                <li>
                  Интервал доставки по Москве и Московской области — с 9 до 21
                  часов. Если вы живете в Москве в пределах МКАД, вы сможете
                  выбрать удобный день и время доставки — ссылку пришлем в СМС
                  после оформления заказа
                </li>
                <li>
                  Если вы отказались от заказа или выкупили его часть, промокоды
                  не восстанавливаются
                </li>
                <li>Сумма заказа не может превышать 500 000 рублей</li>
                <li>
                  Пожалуйста, убедитесь, что курьер сможет припарковать автомобиль
                  у вашего дома, при необходимости закажите ему пропуск. Если
                  такой возможности нет, встретьте его на улице
                </li>
                <li>
                  Доставка будет бесплатной для заказов на сумму от 25 000 рублей
                </li>
              </ul>
            </div>
            <div class="info_bullet">
              <h5>Экспресс–доставка по Москве</h5>
              <p>Стоимость: 890 рублей*</p>
              <p>Сроки: До 3 часов</p>
              <p>Способ оплаты: На сайте (картой онлайн)</p>
              <b>Детали:</b>
              <ul>
                <li>
                  Чтобы заказать экспресс-доставку, свяжитесь с нами любым удобным
                  способом. Мы уточним наличие в магазине и оформим заказ
                </li>
                <li>
                  Если заказ был оформлен до 17 часов, мы доставим его в тот же
                  день до 20 часов. Интервал доставки: в течение 3 часов после
                  оформления или позже — ко времени, которое вы назначите
                </li>
                <li>
                  Если вы оформили заказ после 17 часов, доставка будет на
                  следующий день. Самый ранний интервал: с 10 до 13 часов
                </li>
              </ul>
            </div>
            <div class="info_bullet">
              <h5>В пункт выдачи СДЭК</h5>
              <p>Стоимость: Бесплатно</p>
              <p>Сроки: 2–3 рабочих дня</p>
              <p>Способ оплаты: На сайте (картой онлайн)</p>
              <b>Детали:</b>
              <ul>
                <li>Срок хранения заказа в магазине — 5 дней</li>
                <li>
                  Выбрать удобный пункт выдачи вы можете в корзине на этапе
                  оформления заказа. Список доступных пунктов может меняться в
                  зависимости от загруженности магазина
                </li>
              </ul>
            </div>
            <span
            >* Пожалуйста, учтите, что доставка каждого заказа оплачивается
            отдельно, даже если вы выбираете для получения один день.</span
            >
          </div>
          <AsideHelp class="asideHelp"/>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
import AsideInfoPages from "~/components/Aside/AsideInfoPages.vue";
import AsideHelp from "~/components/Aside/AsideHelp.vue";
import HeaderBlack from "~/components/General/HeaderBlack.vue";
import Item from "~/components/Item/Item.vue";
import BurgerMenu from "~/components/General/BurgerMenu.vue";
import Breadcrumbs from "~/components/General/Breadcrumbs.vue";
import Footer from "~/components/General/Footer.vue";

export default {
  components: {
    HeaderBlack,
    Item,
    AsideInfoPages,
    AsideHelp,
    BurgerMenu,
    Breadcrumbs,
    Footer,
  },
  data() {
    return {
      asideLinks: [
        {
          id: 1,
          name: "Обмен и возврат",
          slug: "/refund"
        },
        {
          id: 2,
          name: "Предзаказ",
          slug: ""
        },
        {
          id: 3,
          name: "Бонусная программа",
          slug: ""
        },
        {
          id: 4,
          name: "Сотрудничество",
          slug: ""
        },
        {
          id: 5,
          name: "Оферта",
          slug: ""
        },
        {
          id: 6,
          name: "Политика конфиденциальности",
          slug: ""
        },
        {
          id: 7,
          name: "Пользовательское соглашение",
          slug: ""
        },
      ],
      showFilter: false,
      filterLabel: "цене",
      productsInCartId: [],
      checkedId: "",
      checkedFiltered: "",
      currentPage: 1,
      maxPerPage: 9,
      showReadMore: true,
    };
  },
  methods: {
    sortByChecked(checkedId) {
      this.checkedId = checkedId;
    },
    sortByFiltered(checkedFiltered) {
      this.checkedFiltered = checkedFiltered;
    },
    loadMore() {
      this.currentPage += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  gap: 50px;
}

.delete {
  display: block;
  flex-shrink: 0;
  width: 11px;
  height: 11px;
  margin-right: 9px;
  background: url("@/assets/img/icons/delete.svg");
  background-size: cover;
  cursor: pointer;
}

button {
  display: flex;
  align-items: center;
  font-size: 11px;
  padding: 10px 9px;
  font-weight: 600;
}

.aic {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  min-height: 32px;
  gap: 20px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    /* средний */

    color: #a9a1a1;
    // width: 195px;
  }
}

.items__main {
  width: 100%;

  button {
    margin: 40px auto 0 auto;
    justify-content: center;
    align-items: center;
    padding: 20px 109px;
    gap: 10px;

    width: 410px;
    height: 64px;

    /* основной */

    background: #685f5f;
    border-radius: 4px;

    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: white;
  }
}

.items {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  // gap: 17.6px;
}

.item:nth-child(3n + 3) {
  margin-right: 0;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // padding: 40px 60px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  min-height: 55vh;

  .favoriteBlank {
    width: 100%;
    text-align: center;
    font-size: 20px;
    line-height: 24px;
    color: #685f5f;

    a {
      font-size: 20px;
      line-height: 24px;
      color: #685f5f;
    }
  }

  .catalog {
    display: flex;
    // justify-content: space-between;
    gap: 50px;
  }
}

.info {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 780px;
  margin-bottom: 50px;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    /* средний */

    color: #a9a1a1;
  }

  .info_bullet {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  h5 {
    font-weight: 600;
    font-size: 24px;
    line-height: 43px;
    color: #685f5f;
  }

  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  color: #685f5f;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

ul li {
  position: relative;
  padding-left: 16px;
  margin-left: 12px;
}

ul li::before {
  content: "";
  position: absolute;
  // margin-left: 16px;

  top: 14px;
  left: 0;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #8bd74b;
}

ul li:not(:last-child) {
  margin-bottom: 8px;
}

ul li::before {
  background-color: #a9a1a1;
}

@media (max-width: 1472px) {
  .asideHelp {
    display: none !important;
  }
}
@media (max-width: 1024px) {
  .catalog{
    flex-direction: column;
  }
}
</style>
