(window.webpackJsonp=window.webpackJsonp||[]).push([[30,16],{652:function(t,e,c){var content=c(673);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(74).default)("613fab34",content,!0,{sourceMap:!1})},654:function(t,e,c){"use strict";c.r(e);c(60);var o={computed:{categories:function(){return this.$store.getters.categories}},methods:{addChecked:function(){this.$emit("updateChecked",this.checkedId)}},mounted:function(){0===this.$store.getters.categories.length&&this.$store.dispatch("fetchCategories")}},n=(c(672),c(75)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapperBurgerMenu"},[e("div",{staticClass:"burger_menu"},[e("div",{staticClass:"top column"},t._l(t.categories,(function(o){return e("div",{key:o.id,staticClass:"filter_categories"},[e("header",[e("div",{staticClass:"left"},[e("img",{attrs:{src:c(671),alt:""}}),t._v(" "),e("h5",{staticClass:"title"},[t._v(t._s(o.name))])]),t._v(" "),e("div",{staticClass:"right"},[e("Nuxt-link",{attrs:{to:"/catalog"},on:{click:function(t){return this.$emit("checked",o.name)}}},[e("p",{on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}},[t._v("\n                больше\n              ")])])],1)]),t._v(" "),e("main",t._l(t.$store.state.categoryTags,(function(c){return e("button",{key:c.id,staticClass:"todo"},[t._v("\n            "+t._s(c)+"\n          ")])})),0),t._v(" "),e("hr",{staticStyle:{color:"#7f7777"}})])})),0),t._v(" "),e("div",{staticClass:"bottom column"},[e("Nuxt-Link",{attrs:{to:"/delivery"}},[e("p",{on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}},[t._v("\n          Оплата и доставка\n        ")])]),t._v(" "),e("Nuxt-Link",{attrs:{to:"/refund"}},[e("p",{on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}},[t._v("\n          Обмен и возврат\n        ")])]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Акции")]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Размерная сетка")]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Частые вопросы")])],1)]),t._v(" "),e("div",{staticClass:"menu",on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}})])}),[],!1,null,"82c7dac0",null);e.default=component.exports},671:function(t,e,c){t.exports=c.p+"img/icon-t-shirt.21369e9.svg"},672:function(t,e,c){"use strict";c(652)},673:function(t,e,c){var o=c(73)((function(i){return i[1]}));o.push([t.i,'.wrapperBurgerMenu[data-v-82c7dac0]{height:100vh;max-width:100%;position:fixed;top:0;width:100vw;z-index:2000}.filter_categories[data-v-82c7dac0]{display:flex;flex-direction:column;gap:22px}.filter_categories button[data-v-82c7dac0]{background:none;border:1px solid #7f7777;border-radius:30px;color:#7f7777;padding:4px 16px}.filter_categories main[data-v-82c7dac0]{display:flex;flex-wrap:wrap;gap:10px}.filter_categories header[data-v-82c7dac0]{display:flex;justify-content:space-between}.filter_categories header p[data-v-82c7dac0]{color:#bababa;font-weight:300}.filter_categories .left[data-v-82c7dac0]{display:flex;gap:10px}.filter_categories .left h5[data-v-82c7dac0]{color:#fff;font-size:18px;font-weight:700;line-height:21px}.filter_categories .right a[data-v-82c7dac0]{color:#bababa;font-size:14px;font-weight:300;line-height:16px;text-align:center}a[data-v-82c7dac0]{color:#bababa;font-family:"RF Dewi";font-size:20px;font-style:normal;font-weight:400;line-height:24px;-webkit-text-decoration:none;text-decoration:none}.menu[data-v-82c7dac0]{background-color:#202020;box-sizing:border-box;cursor:pointer;height:100vh;max-width:100%;opacity:.2;position:fixed;top:0;width:100vw;z-index:2000}.column[data-v-82c7dac0]{gap:30px}.burger_menu[data-v-82c7dac0],.column[data-v-82c7dac0]{display:flex;flex-direction:column}.burger_menu[data-v-82c7dac0]{background-color:#202020;height:100vh;justify-content:space-between;padding:60px;position:fixed;top:0;width:405px;z-index:2020}@media(max-width:1900px){.burger_menu[data-v-82c7dac0]{margin:0 -32px}}',""]),o.locals={},t.exports=o},725:function(t,e,c){var content=c(766);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(74).default)("24e006d8",content,!0,{sourceMap:!1})},761:function(t,e,c){t.exports=c.p+"img/back.5d771a1.jpg"},762:function(t,e,c){t.exports=c.p+"img/back2.e916d4d.jpg"},763:function(t,e,c){t.exports=c.p+"img/back3.9331c0f.jpg"},764:function(t,e,c){t.exports=c.p+"img/slogan.a092223.svg"},765:function(t,e,c){"use strict";c(725)},766:function(t,e,c){var o=c(73)((function(i){return i[1]}));o.push([t.i,".flex[data-v-0ceca85a]{display:flex;flex-direction:column;gap:100px;justify-content:space-between}.swiper-pagination[data-v-0ceca85a]{align-self:flex-end;display:flex;gap:20px;position:absolute;right:60px}section[data-v-0ceca85a]{margin:0!important;padding:0!important}.swiper[data-v-0ceca85a]{overflow:hidden}.swiper[data-v-0ceca85a],section img.slide[data-v-0ceca85a]{height:100vh;position:absolute;width:100%}section img.slide[data-v-0ceca85a]{-o-object-fit:cover;object-fit:cover;z-index:1}.wrapper[data-v-0ceca85a]{align-items:center;display:flex;flex-direction:row;height:100vh;justify-content:center;margin:0 auto}.wrapper img[data-v-0ceca85a]{height:auto;width:100%;z-index:1}main[data-v-0ceca85a]{gap:80px;justify-content:space-between}.assortment[data-v-0ceca85a],main[data-v-0ceca85a]{display:flex;flex-direction:column;z-index:1}.assortment[data-v-0ceca85a]{gap:35px}.assortment a[data-v-0ceca85a]{color:#fff;font-size:15px;-webkit-text-decoration:none;text-decoration:none;width:110px}footer[data-v-0ceca85a]{color:#fff;z-index:1}.text[data-v-0ceca85a]{display:flex;gap:10%;padding-bottom:100px}.text h1[data-v-0ceca85a]{font-size:6.35vw}.text h1[data-v-0ceca85a],.text p[data-v-0ceca85a],.text span i[data-v-0ceca85a]{color:#fff}.text p[data-v-0ceca85a]{font-size:14px;margin-top:50px;width:33%}.sale[data-v-0ceca85a],.sale a[data-v-0ceca85a]{z-index:1}.sale a[data-v-0ceca85a]{color:#fff;font-size:15px;-webkit-text-decoration:none;text-decoration:none}",""]),o.locals={},t.exports=o},798:function(t,e,c){"use strict";c.r(e);var o=[function(){var t=this._self._c;return t("div",{staticClass:"swiper-slide"},[t("img",{staticClass:"slide",attrs:{src:c(762),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"swiper-slide"},[t("img",{staticClass:"slide",attrs:{src:c(763),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"wrapper p60"},[t("div",{staticClass:"flex"},[t("img",{attrs:{src:c(764),alt:""}})])])}],n=c(654),r=c(823),d=c(820),l=c(821),f=c(822);c(695);r.a.use([d.a,l.a,f.a]);var v={props:{photo_1:"",photo_2:"",photo_3:""},mounted:function(){new r.a(".swiper",{slidesPerView:1,autoplay:{delay:1e4},speed:4e3,allowTouchMove:!1,pagination:{clickable:!0,el:".swiper-pagination",modifierClass:".swiper-pagination-header "}})},components:{BurgerMenu:n.default},name:"IndexPage"},x=(c(765),c(75)),component=Object(x.a)(v,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"swiper"},[e("div",{staticClass:"swiper-wrapper"},[e("div",{staticClass:"swiper-slide"},[e("img",{staticClass:"slide",attrs:{src:c(761),alt:""}})]),t._v(" "),t._m(0),t._v(" "),t._m(1)])]),t._v(" "),t._m(2)])}),o,!1,null,"0ceca85a",null);e.default=component.exports}}]);