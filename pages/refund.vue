<template>
  <div class="wrapper">
    <Breadcrumbs/>
    <main class="main">
      <div class="catalog">
        <AsideInfoPages :links="asideLinks"/>
        <div class="info">
          <div class="info_bullet">
            <p>
              Мы надеемся, что вы останетесь довольны покупкой, но, если
              понадобится, заказ можно полностью или частично вернуть в течение
              14 дней со дня получения.
            </p>
            <p>
              Не пользуйтесь изделием, которое планируете вернуть — оно должно
              оставаться новым*, сохраните все вшитые ярлыки и этикетки, а также
              чеки, подтверждающие покупку в нашем магазине.
            </p>
          </div>
          <div class="info_bullet">
            <h5>Возврат</h5>
            <ul>
              <li>
                В течение 14 дней после получения заказа зайдите в личный
                кабинет и выберите изделие для возврата.
              </li>
              <li>
                Упакуйте вещи, которые хотите вернуть, в пакет или коробку.
              </li>
              <li>
                Приложите заявление на возврат (скачайте его по этой ссылке)
              </li>
              <li>
                Чтобы вернуть вещи из нескольких заказов, упакуйте их отдельно и
                заполните заявления на возврат для каждого заказа.
              </li>
              <li>Принесите товар в пункт доставки или вызовите курьера.</li>
            </ul>
          </div>
          <div class="info_bullet">
            <h5>Как и когда вернутся деньги</h5>
            <ul>
              <li>
                Мы перечислим деньги в течение 10 дней. Отсчет начинается на
                следующий день после того, как вы вернули изделие в магазин.
                Если вы вызывали курьера за возвратом, отсчет начинается на
                следующий день после поступления изделия на наш склад.
              </li>
              <li>
                Если вы оплачивали заказ при получении, мы переведем деньги по
                реквизитам в заявлении на возврат. Если вы оплачивали заказ
                банковской картой на сайте, деньги вернутся на ту же карту.
                Пожалуйста, учитывайте, что на карту деньги могут поступить
                позже — срок обработки платежа зависит от вашего банка.
              </li>
              <li>
                Если вы хотите получить информацию о статусе вашего возврата,
                свяжитесь с нами любым удобным способом.
              </li>
            </ul>
          </div>
          <span
            >* Согласно пункту 1 статьи 25 Закона РФ «О защите прав
            потребителей» от 07.02.1992 № 2300-1</span
          >
        </div>
        <AsideHelp />
      </div>
    </main>
  </div>
</template>

<script>
import AsideInfoPages from "~/components/Aside/AsideInfoPages.vue";
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
    BurgerMenu,
    Breadcrumbs,
    Footer,
  },
  data() {
    return {
      asideLinks:[
        {
          id: 1,
          name: "Доставка",
          slug: "/delivery"
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
</style>
