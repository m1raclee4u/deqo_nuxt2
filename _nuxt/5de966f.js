(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{709:function(t,e,r){var content=r(743);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(75).default)("6a5ff8ae",content,!0,{sourceMap:!1})},742:function(t,e,r){"use strict";r(709)},743:function(t,e,r){var o=r(74)((function(i){return i[1]}));o.push([t.i,".windowCart[data-v-58dc4866]{display:flex;flex-direction:column;gap:30px;width:380px}.windowCart .line[data-v-58dc4866]{display:flex;justify-content:space-between}.windowCart .line p[data-v-58dc4866]{color:#685f5f;font-size:18px;line-height:21px}.windowCart .line b[data-v-58dc4866]{color:#1a1a1a;font-size:24px;line-height:28px}.windowCart .informationPreSale[data-v-58dc4866]{background-color:#a9a1a1;display:flex;flex-direction:column;gap:12px;padding:20px;width:100%}.windowCart .informationPreSale h5[data-v-58dc4866]{color:#fff;font-size:18px;font-weight:500;line-height:21px}.windowCart .informationPreSale p[data-v-58dc4866]{color:#fff;font-size:16px;font-weight:400;line-height:19px}.windowCart .offer[data-v-58dc4866],.windowCart .offer a[data-v-58dc4866]{color:#a9a1a1;font-size:14px;line-height:17px}.windowCart button[data-v-58dc4866]{background:#685f5f;border:2px solid #685f5f;border-radius:4px;color:#fff;cursor:pointer;font-size:20px;height:60px;line-height:24px;text-align:center;width:100%}.windowCart button[data-v-58dc4866]:disabled{background-color:#fff;color:#685f5f;cursor:inherit}",""]),o.locals={},t.exports=o},784:function(t,e,r){"use strict";r.r(e);r(60),r(49),r(44),r(21),r(105),r(50),r(106);var o=r(30),n=r(107);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:{allFieldsAreFilled:""},computed:l(l({},Object(n.c)("cart",["getProducts"])),{},{fullprice:function(){var t=0;for(var e in this.getProducts)if(Object.hasOwnProperty.call(this.getProducts,e)){var element=this.getProducts[e];t+=element.quantity*element.price}return t}})},f=(r(742),r(76)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return t.$store.state.cart.products.length>0?e("div",{staticClass:"windowCart"},[t._m(0),t._v(" "),e("div",{staticClass:"line"},[e("p",[t._v("Скидка")]),t._v(" "),e("p",[t._v(t._s("1000")+" ₽")])]),t._v(" "),e("div",{staticClass:"line"},[e("p",[t._v("Доставка")]),t._v(" "),e("p",[t._v(t._s("1000")+" ₽")])]),t._v(" "),e("div",{staticClass:"line"},[t._m(1),t._v(" "),e("p",[e("b",[t._v(t._s(t.fullprice)+" ₽")])])]),t._v(" "),!0===t.allFieldsAreFilled?e("button",[t._v("Оплатить")]):e("button",{attrs:{disabled:""}},[t._v("Заполните все поля")]),t._v(" "),e("p",{staticClass:"offer"},[t._v("Нажимая на кнопку «оплатить», я принимаю условия "),e("Nuxt-link",{attrs:{to:""}},[t._v("публичной оферты")]),t._v(", "),e("Nuxt-link",{attrs:{to:""}},[t._v("политики конфиденциальности")]),t._v(" и "),e("Nuxt-link",{attrs:{to:""}},[t._v("публичной оферты (предзаказ)")])],1)]):t._e()}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"informationPreSale"},[e("h5",[t._v("Обращаем внимание")]),t._v(" "),e("p",[t._v("В заказе есть товар доступный для предзаказа. При оплате его стоимость будет входить в текущий чек, а дата доставки отличаться. "),e("br"),e("br"),t._v("\n        Срок производства модели 15 — 29 декабря. В эти дни свяжемся с вами, уточним адрес и условия доставки.")])])},function(){var t=this._self._c;return t("p",[t("b",[this._v("Итого")])])}],!1,null,"58dc4866",null);e.default=component.exports}}]);