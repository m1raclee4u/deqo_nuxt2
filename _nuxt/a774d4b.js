(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{696:function(t,e,r){var content=r(731);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(75).default)("72c38c4c",content,!0,{sourceMap:!1})},730:function(t,e,r){"use strict";r(696)},731:function(t,e,r){var n=r(74)(!1);n.push([t.i,".windowCart[data-v-4d4fb372]{display:flex;flex-direction:column;grid-gap:30px;gap:30px;width:380px}.windowCart .line[data-v-4d4fb372]{display:flex;justify-content:space-between}.windowCart .line p[data-v-4d4fb372]{font-size:18px;line-height:21px;color:#685f5f}.windowCart .line b[data-v-4d4fb372]{font-size:24px;line-height:28px;color:#1a1a1a}.windowCart .informationPreSale[data-v-4d4fb372]{display:flex;flex-direction:column;grid-gap:12px;gap:12px;width:100%;padding:20px;background-color:#a9a1a1}.windowCart .informationPreSale h5[data-v-4d4fb372]{font-weight:500;font-size:18px;line-height:21px;color:#fff}.windowCart .informationPreSale p[data-v-4d4fb372]{font-weight:400;font-size:16px;line-height:19px;color:#fff}.windowCart .offer[data-v-4d4fb372],.windowCart .offer a[data-v-4d4fb372]{font-size:14px;line-height:17px;color:#a9a1a1}.windowCart button[data-v-4d4fb372]{font-size:20px;line-height:24px;cursor:pointer;height:60px;width:100%;text-align:center;background:#685f5f;border:2px solid #685f5f;border-radius:4px;color:#fff}",""]),t.exports=n},767:function(t,e,r){"use strict";r.r(e);r(59),r(47),r(43),r(21),r(104),r(48),r(105);var n=r(30),o=r(106);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={computed:f(f({},Object(o.c)("cart",["getProducts"])),{},{fullprice:function(){var t=0;for(var e in this.getProducts)if(Object.hasOwnProperty.call(this.getProducts,e)){var element=this.getProducts[e];t+=element.quantity*element.price}return t}})},d=(r(730),r(76)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return t.$store.state.cart.products.length>0?e("div",{staticClass:"windowCart"},[t._m(0),t._v(" "),e("div",{staticClass:"line"},[e("p",[t._v("Скидка")]),t._v(" "),e("p",[t._v(t._s("1000")+" ₽")])]),t._v(" "),e("div",{staticClass:"line"},[e("p",[t._v("Доставка")]),t._v(" "),e("p",[t._v(t._s("1000")+" ₽")])]),t._v(" "),e("div",{staticClass:"line"},[t._m(1),t._v(" "),e("p",[e("b",[t._v(t._s(t.fullprice)+" ₽")])])]),t._v(" "),e("button",[t._v("Оплатить")]),t._v(" "),e("p",{staticClass:"offer"},[t._v("Нажимая на кнопку «оплатить», я принимаю условия "),e("Nuxt-link",{attrs:{to:""}},[t._v("публичной оферты")]),t._v(", "),e("Nuxt-link",{attrs:{to:""}},[t._v("политики конфиденциальности")]),t._v(" и "),e("Nuxt-link",{attrs:{to:""}},[t._v("публичной оферты (предзаказ)")])],1)]):t._e()}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"informationPreSale"},[e("h5",[t._v("Обращаем внимание")]),t._v(" "),e("p",[t._v("В заказе есть товар доступный для предзаказа. При оплате его стоимость будет входить в текущий чек, а дата доставки отличаться. "),e("br"),e("br"),t._v("\n        Срок производства модели 15 — 29 декабря. В эти дни свяжемся с вами, уточним адрес и условия доставки.")])])},function(){var t=this._self._c;return t("p",[t("b",[this._v("Итого")])])}],!1,null,"4d4fb372",null);e.default=component.exports}}]);