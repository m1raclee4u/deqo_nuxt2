(window.webpackJsonp=window.webpackJsonp||[]).push([[29,15],{658:function(t,e,o){var content=o(680);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("0f261d76",content,!0,{sourceMap:!1})},663:function(t,e,o){"use strict";o.r(e);o(59);var n={computed:{categories:function(){return this.$store.getters.categories}},methods:{addChecked:function(){this.$emit("updateChecked",this.checkedId)}},mounted:function(){0===this.$store.getters.categories.length&&this.$store.dispatch("fetchCategories")}},r=(o(679),o(75)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapperBurgerMenu"},[e("div",{staticClass:"burger_menu"},[e("div",{staticClass:"top column"},t._l(t.categories,(function(n){return e("div",{key:n.id,staticClass:"filter_categories"},[e("header",[e("div",{staticClass:"left"},[e("img",{attrs:{src:o(678),alt:""}}),t._v(" "),e("h5",{staticClass:"title"},[t._v(t._s(n.name))])]),t._v(" "),e("div",{staticClass:"right"},[e("Nuxt-link",{attrs:{to:"/catalog"},on:{click:function(t){return this.$emit("checked",n.name)}}},[e("p",{on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}},[t._v("больше")])])],1)]),t._v(" "),e("main",t._l(t.$store.state.categoryTags,(function(o){return e("button",{key:o.id,staticClass:"todo"},[t._v(t._s(o))])})),0),t._v(" "),e("hr",{staticStyle:{color:"#7F7777"}})])})),0),t._v(" "),e("div",{staticClass:"bottom column"},[e("Nuxt-Link",{attrs:{to:"/delivery"}},[e("p",{on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}},[t._v("Оплата и доставка")])]),t._v(" "),e("Nuxt-Link",{attrs:{to:"/refund"}},[e("p",{on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}},[t._v("Обмен и возврат")])]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Акции")]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Размерная сетка")]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Частые вопросы")])],1)]),t._v(" "),e("div",{staticClass:"menu",on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}})])}),[],!1,null,"38d9533c",null);e.default=component.exports},678:function(t,e,o){t.exports=o.p+"img/icon-t-shirt.21369e9.svg"},679:function(t,e,o){"use strict";o(658)},680:function(t,e,o){var n=o(73)((function(i){return i[1]}));n.push([t.i,'.wrapperBurgerMenu[data-v-38d9533c]{height:100vh;max-width:100%;position:fixed;top:0;width:100vw;z-index:2000}.filter_categories[data-v-38d9533c]{display:flex;flex-direction:column;gap:22px}.filter_categories button[data-v-38d9533c]{background:none;border:1px solid #7f7777;border-radius:30px;color:#7f7777;padding:4px 16px}.filter_categories main[data-v-38d9533c]{display:flex;flex-wrap:wrap;gap:10px}.filter_categories header[data-v-38d9533c]{display:flex;justify-content:space-between}.filter_categories header p[data-v-38d9533c]{color:#bababa;font-weight:300}.filter_categories .left[data-v-38d9533c]{display:flex;gap:10px}.filter_categories .left h5[data-v-38d9533c]{color:#fff;font-size:18px;font-weight:700;line-height:21px}.filter_categories .right a[data-v-38d9533c]{color:#bababa;font-size:14px;font-weight:300;line-height:16px;text-align:center}a[data-v-38d9533c]{color:#bababa;font-family:"RF Dewi";font-size:20px;font-style:normal;font-weight:400;line-height:24px;-webkit-text-decoration:none;text-decoration:none}.menu[data-v-38d9533c]{background-color:#202020;box-sizing:border-box;cursor:pointer;height:100vh;max-width:100%;opacity:.2;position:fixed;top:0;width:100vw;z-index:2000}.column[data-v-38d9533c]{gap:30px}.burger_menu[data-v-38d9533c],.column[data-v-38d9533c]{display:flex;flex-direction:column}.burger_menu[data-v-38d9533c]{background-color:#202020;height:100vh;justify-content:space-between;padding:60px;position:fixed;top:0;width:405px;z-index:2020}',""]),n.locals={},t.exports=n},726:function(t,e,o){var content=o(761);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("294e27ca",content,!0,{sourceMap:!1})},756:function(t,e,o){t.exports=o.p+"img/back.5d771a1.jpg"},757:function(t,e,o){t.exports=o.p+"img/back2.e916d4d.jpg"},758:function(t,e,o){t.exports=o.p+"img/back3.9331c0f.jpg"},759:function(t,e,o){t.exports=o.p+"img/slogan.a092223.svg"},760:function(t,e,o){"use strict";o(726)},761:function(t,e,o){var n=o(73)((function(i){return i[1]}));n.push([t.i,".flex[data-v-0bd69843]{display:flex;flex-direction:column;gap:100px;justify-content:space-between}.swiper-pagination[data-v-0bd69843]{align-self:flex-end;display:flex;gap:20px;position:absolute;right:60px}section[data-v-0bd69843]{margin:0!important;padding:0!important}.swiper[data-v-0bd69843]{overflow:hidden}.swiper[data-v-0bd69843],section img.slide[data-v-0bd69843]{height:100vh;position:absolute;width:100%}section img.slide[data-v-0bd69843]{-o-object-fit:cover;object-fit:cover;z-index:1}.wrapper[data-v-0bd69843]{align-items:center;display:flex;flex-direction:row;height:100vh;justify-content:center;margin:0 auto}.wrapper img[data-v-0bd69843]{height:auto;width:100%;z-index:1}main[data-v-0bd69843]{gap:80px;justify-content:space-between}.assortment[data-v-0bd69843],main[data-v-0bd69843]{display:flex;flex-direction:column;z-index:1}.assortment[data-v-0bd69843]{gap:35px}.assortment a[data-v-0bd69843]{color:#fff;font-size:15px;-webkit-text-decoration:none;text-decoration:none;width:110px}footer[data-v-0bd69843]{color:#fff;z-index:1}.text[data-v-0bd69843]{display:flex;gap:10%;padding-bottom:100px}.text h1[data-v-0bd69843]{font-size:6.35vw}.text h1[data-v-0bd69843],.text p[data-v-0bd69843],.text span i[data-v-0bd69843]{color:#fff}.text p[data-v-0bd69843]{font-size:14px;margin-top:50px;width:33%}.sale[data-v-0bd69843],.sale a[data-v-0bd69843]{z-index:1}.sale a[data-v-0bd69843]{color:#fff;font-size:15px;-webkit-text-decoration:none;text-decoration:none}",""]),n.locals={},t.exports=n},790:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this._self._c;return t("div",{staticClass:"swiper-slide"},[t("img",{staticClass:"slide",attrs:{src:o(757),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"swiper-slide"},[t("img",{staticClass:"slide",attrs:{src:o(758),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"wrapper p60"},[t("div",{staticClass:"flex"},[t("img",{attrs:{src:o(759),alt:""}})])])}],r=o(663),d=o(814),c=o(811),l=o(812),f=o(813);o(660);d.a.use([c.a,l.a,f.a]);var v={props:{photo_1:"",photo_2:"",photo_3:""},mounted:function(){new d.a(".swiper",{slidesPerView:1,autoplay:{delay:1e4},speed:4e3,allowTouchMove:!1,pagination:{clickable:!0,el:".swiper-pagination",modifierClass:".swiper-pagination-header "}})},components:{BurgerMenu:r.default},name:"IndexPage"},x=(o(760),o(75)),component=Object(x.a)(v,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"swiper"},[e("div",{staticClass:"swiper-wrapper"},[e("div",{staticClass:"swiper-slide"},[e("img",{staticClass:"slide",attrs:{src:o(756),alt:""}})]),t._v(" "),t._m(0),t._v(" "),t._m(1)])]),t._v(" "),t._m(2)])}),n,!1,null,"0bd69843",null);e.default=component.exports}}]);