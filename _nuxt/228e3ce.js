(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{659:function(t,e,o){var content=o(681);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("19798603",content,!0,{sourceMap:!1})},664:function(t,e,o){"use strict";o.r(e);o(59);var n={computed:{categories:function(){return this.$store.getters.categories}},methods:{addChecked:function(){this.$emit("updateChecked",this.checkedId)}},mounted:function(){0===this.$store.getters.categories.length&&this.$store.dispatch("fetchCategories")}},r=(o(680),o(75)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapperBurgerMenu"},[e("div",{staticClass:"burger_menu"},[e("div",{staticClass:"top column"},t._l(t.categories,(function(n){return e("div",{key:n.id,staticClass:"filter_categories"},[e("header",[e("div",{staticClass:"left"},[e("img",{attrs:{src:o(679),alt:""}}),t._v(" "),e("h5",{staticClass:"title"},[t._v(t._s(n.name))])]),t._v(" "),e("div",{staticClass:"right"},[e("Nuxt-link",{attrs:{to:"/catalog"},on:{click:function(t){return this.$emit("checked",n.name)}}},[e("p",{on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}},[t._v("\n                больше\n              ")])])],1)]),t._v(" "),e("main",t._l(t.$store.state.categoryTags,(function(o){return e("button",{key:o.id,staticClass:"todo"},[t._v("\n            "+t._s(o)+"\n          ")])})),0),t._v(" "),e("hr",{staticStyle:{color:"#7f7777"}})])})),0),t._v(" "),e("div",{staticClass:"bottom column"},[e("Nuxt-Link",{attrs:{to:"/delivery"}},[e("p",{on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}},[t._v("\n          Оплата и доставка\n        ")])]),t._v(" "),e("Nuxt-Link",{attrs:{to:"/refund"}},[e("p",{on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}},[t._v("\n          Обмен и возврат\n        ")])]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Акции")]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Размерная сетка")]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Частые вопросы")])],1)]),t._v(" "),e("div",{staticClass:"menu",on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}})])}),[],!1,null,"527f7aba",null);e.default=component.exports},679:function(t,e,o){t.exports=o.p+"img/icon-t-shirt.21369e9.svg"},680:function(t,e,o){"use strict";o(659)},681:function(t,e,o){var n=o(73)((function(i){return i[1]}));n.push([t.i,'.wrapperBurgerMenu[data-v-527f7aba]{height:100vh;max-width:100%;position:fixed;top:0;width:100vw;z-index:2000}.filter_categories[data-v-527f7aba]{display:flex;flex-direction:column;gap:22px}.filter_categories button[data-v-527f7aba]{background:none;border:1px solid #7f7777;border-radius:30px;color:#7f7777;padding:4px 16px}.filter_categories main[data-v-527f7aba]{display:flex;flex-wrap:wrap;gap:10px}.filter_categories header[data-v-527f7aba]{display:flex;justify-content:space-between}.filter_categories header p[data-v-527f7aba]{color:#bababa;font-weight:300}.filter_categories .left[data-v-527f7aba]{display:flex;gap:10px}.filter_categories .left h5[data-v-527f7aba]{color:#fff;font-size:18px;font-weight:700;line-height:21px}.filter_categories .right a[data-v-527f7aba]{color:#bababa;font-size:14px;font-weight:300;line-height:16px;text-align:center}a[data-v-527f7aba]{color:#bababa;font-family:"RF Dewi";font-size:20px;font-style:normal;font-weight:400;line-height:24px;-webkit-text-decoration:none;text-decoration:none}.menu[data-v-527f7aba]{background-color:#202020;box-sizing:border-box;cursor:pointer;height:100vh;max-width:100%;opacity:.2;position:fixed;top:0;width:100vw;z-index:2000}.column[data-v-527f7aba]{gap:30px}.burger_menu[data-v-527f7aba],.column[data-v-527f7aba]{display:flex;flex-direction:column}.burger_menu[data-v-527f7aba]{background-color:#202020;height:100vh;justify-content:space-between;padding:60px;position:fixed;top:0;width:405px;z-index:2020}',""]),n.locals={},t.exports=n}}]);