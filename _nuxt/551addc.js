(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1021:function(e,t,n){"use strict";n(976)},1022:function(e,t,n){var c=n(31),d=n(117),l=n(983),r=n(984),v=c((function(i){return i[1]})),o=d(l),_=d(r);v.push([e.i,'section[data-v-59f055f0]{display:flex;flex-direction:column;gap:60px;margin:0 auto;max-width:1676px;width:100%}section .title[data-v-59f055f0]{font-feature-settings:"kern" off;color:#685f5f;font-size:32px;letter-spacing:.02em;line-height:38px;text-align:center;width:100%}.questions[data-v-59f055f0]{align-items:flex-start;display:flex;gap:100px}.questions .question[data-v-59f055f0]{background:#f9f7f7;border-radius:8px;display:flex;flex-direction:column;gap:20px;max-width:490px;padding:20px 40px;width:100%}.questions .question h5[data-v-59f055f0]{color:#685f5f;font-size:24px;line-height:29px}.show[data-v-59f055f0]{cursor:pointer}.hidden[data-v-59f055f0]{display:flex;flex-direction:column;gap:10px}.hidden a[data-v-59f055f0]{color:#a9a1a1;font-size:16px;font-weight:400;line-height:19px;margin:0 0 0 auto;padding:9px 20px 12px;text-align:center;-webkit-text-decoration:none;text-decoration:none;width:120px}.hidden a[data-v-59f055f0]:hover{background:#5b5353;border-radius:30px;padding:9px 20px 12px}.lines[data-v-59f055f0],.lines .line[data-v-59f055f0]{display:flex;flex-direction:column;gap:10px}.lines .line[data-v-59f055f0]{color:#685f5f;font-size:16px;font-weight:400;line-height:180%}.lines .show[data-v-59f055f0]{display:flex;justify-content:space-between}.downActive[data-v-59f055f0]{background-image:url('+o+")!important}.down[data-v-59f055f0]{background-image:url("+_+');background-position:50%;background-repeat:no-repeat;cursor:pointer;height:20px;transition:all .9s ease;width:20px}.down[data-v-59f055f0]:hover{transform:rotate(90)}ul[data-v-59f055f0]{list-style:none;margin:0;padding:0}ul li[data-v-59f055f0]{margin-left:12px;padding-left:16px;position:relative}ul li[data-v-59f055f0]:before{background-color:#8bd74b;border-radius:50%;content:"";height:4px;left:0;position:absolute;top:14px;width:4px}ul li[data-v-59f055f0]:not(:last-child){margin-bottom:8px}ul li[data-v-59f055f0]:before{background-color:#a9a1a1}',""]),v.locals={},e.exports=v},1074:function(e,t,n){"use strict";n.r(t);var c={data:function(){return{priceDeliveryChecked:!1,getAnOrderChecked:!1,orderPackagingChecked:!1,priceDeliveryChecked_2:!1,getAnOrderChecked_2:!1,orderPackagingChecked_2:!1,priceDeliveryChecked_3:!1,getAnOrderChecked_3:!1,orderPackagingChecked_3:!1}},methods:{onClickPriceDelivery:function(){this.priceDeliveryChecked=!this.priceDeliveryChecked},onClickGetAnOrder:function(){this.getAnOrderChecked=!this.getAnOrderChecked},onClickOrderPackaging:function(){this.orderPackagingChecked=!this.orderPackagingChecked},onClickPriceDelivery_2:function(){this.priceDeliveryChecked_2=!this.priceDeliveryChecked_2},onClickGetAnOrder_2:function(){this.getAnOrderChecked_2=!this.getAnOrderChecked_2},onClickOrderPackaging_2:function(){this.orderPackagingChecked_2=!this.orderPackagingChecked_2},onClickPriceDelivery_3:function(){this.priceDeliveryChecked_3=!this.priceDeliveryChecked_3},onClickGetAnOrder_3:function(){this.getAnOrderChecked_3=!this.getAnOrderChecked_3},onClickOrderPackaging_3:function(){this.orderPackagingChecked_3=!this.orderPackagingChecked_3}}},d=(n(1021),n(23)),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("section",[t("h4",{staticClass:"title"},[e._v("Частые вопросы")]),e._v(" "),t("div",{staticClass:"questions"},[t("div",{staticClass:"question first"},[t("h5",[e._v("Доставка")]),e._v(" "),t("div",{staticClass:"lines"},[t("div",{staticClass:"line"},[t("div",{staticClass:"show",on:{click:e.onClickPriceDelivery}},[t("p",[e._v("Стоимость и сроки доставки")]),e._v(" "),t("i",{staticClass:"down",class:{downActive:e.priceDeliveryChecked}})]),e._v(" "),!0===e.priceDeliveryChecked?t("div",{staticClass:"hidden"},[e._m(0),e._v(" "),t("Nuxt-link",{attrs:{to:"/delivery"}},[e._v("подробнее")])],1):e._e()]),e._v(" "),t("div",{staticClass:"line"},[t("div",{staticClass:"show",on:{click:e.onClickGetAnOrder}},[t("p",[e._v("Как получить заказ?")]),e._v(" "),t("i",{staticClass:"down",class:{downActive:e.getAnOrderChecked}})]),e._v(" "),!0===e.getAnOrderChecked?t("div",{staticClass:"hidden"},[e._m(1),e._v(" "),t("Nuxt-link",{attrs:{to:"/delivery"}},[e._v("подробнее")])],1):e._e()]),e._v(" "),t("div",{staticClass:"line"},[t("div",{staticClass:"show",on:{click:e.onClickOrderPackaging}},[t("p",[e._v("Как будет упакован заказ?")]),e._v(" "),t("i",{staticClass:"down",class:{downActive:e.orderPackagingChecked}})]),e._v(" "),!0===e.orderPackagingChecked?t("div",{staticClass:"hidden"},[e._m(2),e._v(" "),t("Nuxt-link",{attrs:{to:"/delivery"}},[e._v("подробнее")])],1):e._e()])])]),e._v(" "),t("div",{staticClass:"question second"},[t("h5",[e._v("Предзаказ")]),e._v(" "),t("div",{staticClass:"lines"},[t("div",{staticClass:"line"},[t("div",{staticClass:"show",on:{click:e.onClickPriceDelivery_2}},[t("p",[e._v("Стоимость и сроки доставки")]),e._v(" "),t("i",{staticClass:"down",class:{downActive:e.priceDeliveryChecked_2}})]),e._v(" "),!0===e.priceDeliveryChecked_2?t("div",{staticClass:"hidden"},[e._m(3),e._v(" "),t("Nuxt-link",{attrs:{to:"/delivery"}},[e._v("подробнее")])],1):e._e()]),e._v(" "),t("div",{staticClass:"line"},[t("div",{staticClass:"show",on:{click:e.onClickGetAnOrder_2}},[t("p",[e._v("Как получить заказ?")]),e._v(" "),t("i",{staticClass:"down",class:{downActive:e.getAnOrderChecked_2}})]),e._v(" "),!0===e.getAnOrderChecked_2?t("div",{staticClass:"hidden"},[e._m(4),e._v(" "),t("Nuxt-link",{attrs:{to:"/delivery"}},[e._v("подробнее")])],1):e._e()]),e._v(" "),t("div",{staticClass:"line"},[t("div",{staticClass:"show",on:{click:e.onClickOrderPackaging_2}},[t("p",[e._v("Как будет упакован заказ?")]),e._v(" "),t("i",{staticClass:"down",class:{downActive:e.orderPackagingChecked_2}})]),e._v(" "),!0===e.orderPackagingChecked_2?t("div",{staticClass:"hidden"},[e._m(5),e._v(" "),t("Nuxt-link",{attrs:{to:"/delivery"}},[e._v("подробнее")])],1):e._e()])])]),e._v(" "),t("div",{staticClass:"question third"},[t("h5",[e._v("Возврат")]),e._v(" "),t("div",{staticClass:"lines"},[t("div",{staticClass:"line"},[t("div",{staticClass:"show",on:{click:e.onClickPriceDelivery_3}},[t("p",[e._v("Стоимость и сроки доставки")]),e._v(" "),t("i",{staticClass:"down",class:{downActive:e.priceDeliveryChecked_3}})]),e._v(" "),!0===e.priceDeliveryChecked_3?t("div",{staticClass:"hidden"},[e._m(6),e._v(" "),t("Nuxt-link",{attrs:{to:"/refund"}},[e._v("подробнее")])],1):e._e()]),e._v(" "),t("div",{staticClass:"line"},[t("div",{staticClass:"show",on:{click:e.onClickGetAnOrder_3}},[t("p",[e._v("Как получить заказ?")]),e._v(" "),t("i",{staticClass:"down",class:{downActive:e.getAnOrderChecked_3}})]),e._v(" "),!0===e.getAnOrderChecked_3?t("div",{staticClass:"hidden"},[e._m(7),e._v(" "),t("Nuxt-link",{attrs:{to:"/refund"}},[e._v("подробнее")])],1):e._e()]),e._v(" "),t("div",{staticClass:"line"},[t("div",{staticClass:"show",on:{click:e.onClickOrderPackaging_3}},[t("p",[e._v("Как будет упакован заказ?")]),e._v(" "),t("i",{staticClass:"down",class:{downActive:e.orderPackagingChecked_3}})]),e._v(" "),!0===e.orderPackagingChecked_3?t("div",{staticClass:"hidden"},[e._m(8),e._v(" "),t("Nuxt-link",{attrs:{to:"/refund"}},[e._v("подробнее")])],1):e._e()])])])])])}),[function(){var e=this,t=e._self._c;return t("ul",[t("li",[e._v("Курьерская доставка | 590 ₽ | 1-6 рабочих дней")]),e._v(" "),t("li",[e._v("Экспресс–доставка | 890 ₽ | до 3 часов")]),e._v(" "),t("li",[e._v("В пункт выдачи СДЭК | 0 ₽ | 2-3 рабочих дня")])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[e._v("Курьерская доставка | 590 ₽ | 1-6 рабочих дней")]),e._v(" "),t("li",[e._v("Экспресс–доставка | 890 ₽ | до 3 часов")]),e._v(" "),t("li",[e._v("В пункт выдачи СДЭК | 0 ₽ | 2-3 рабочих дня")])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[e._v("Курьерская доставка | 590 ₽ | 1-6 рабочих дней")]),e._v(" "),t("li",[e._v("Экспресс–доставка | 890 ₽ | до 3 часов")]),e._v(" "),t("li",[e._v("В пункт выдачи СДЭК | 0 ₽ | 2-3 рабочих дня")])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[e._v("Курьерская доставка | 590 ₽ | 1-6 рабочих дней")]),e._v(" "),t("li",[e._v("Экспресс–доставка | 890 ₽ | до 3 часов")]),e._v(" "),t("li",[e._v("В пункт выдачи СДЭК | 0 ₽ | 2-3 рабочих дня")])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[e._v("Курьерская доставка | 590 ₽ | 1-6 рабочих дней")]),e._v(" "),t("li",[e._v("Экспресс–доставка | 890 ₽ | до 3 часов")]),e._v(" "),t("li",[e._v("В пункт выдачи СДЭК | 0 ₽ | 2-3 рабочих дня")])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[e._v("Курьерская доставка | 590 ₽ | 1-6 рабочих дней")]),e._v(" "),t("li",[e._v("Экспресс–доставка | 890 ₽ | до 3 часов")]),e._v(" "),t("li",[e._v("В пункт выдачи СДЭК | 0 ₽ | 2-3 рабочих дня")])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[e._v("Курьерская доставка | 590 ₽ | 1-6 рабочих дней")]),e._v(" "),t("li",[e._v("Экспресс–доставка | 890 ₽ | до 3 часов")]),e._v(" "),t("li",[e._v("В пункт выдачи СДЭК | 0 ₽ | 2-3 рабочих дня")])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[e._v("Курьерская доставка | 590 ₽ | 1-6 рабочих дней")]),e._v(" "),t("li",[e._v("Экспресс–доставка | 890 ₽ | до 3 часов")]),e._v(" "),t("li",[e._v("В пункт выдачи СДЭК | 0 ₽ | 2-3 рабочих дня")])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[e._v("Курьерская доставка | 590 ₽ | 1-6 рабочих дней")]),e._v(" "),t("li",[e._v("Экспресс–доставка | 890 ₽ | до 3 часов")]),e._v(" "),t("li",[e._v("В пункт выдачи СДЭК | 0 ₽ | 2-3 рабочих дня")])])}],!1,null,"59f055f0",null);t.default=component.exports},976:function(e,t,n){var content=n(1022);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("49a73630",content,!0,{sourceMap:!1})},983:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjU4NzkgNy4zNTMyOUw5Ljk5OTY2IDEyLjk0MTRMNC40MTE0MiA3LjM1MzE3IiBzdHJva2U9IiNBOUExQTEiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="},984:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMzUzMjkgNC40MTIxMUwxMi45NDE0IDEwLjAwMDNMNy4zNTMxNyAxNS41ODg2IiBzdHJva2U9IiNBOUExQTEiIHN0cm9rZS13aWR0aD0iMS4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="}}]);