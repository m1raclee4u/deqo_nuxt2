(window.webpackJsonp=window.webpackJsonp||[]).push([[41,11,20,21,24,29,30,34],{655:function(t,e,o){var content=o(667);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("13731aef",content,!0,{sourceMap:!1})},657:function(t,e,o){var content=o(677);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("6f11698f",content,!0,{sourceMap:!1})},658:function(t,e,o){var content=o(682);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("368c5131",content,!0,{sourceMap:!1})},660:function(t,e,o){"use strict";o.r(e);o(50);var n={computed:{categories:function(){return this.$store.getters.categories}},methods:{addChecked:function(){this.$emit("updateChecked",this.checkedId)}},mounted:function(){0===this.$store.getters.categories.length&&this.$store.dispatch("fetchCategories")}},r=(o(681),o(75)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapperBurgerMenu"},[e("div",{staticClass:"burger_menu"},[e("div",{staticClass:"top column"},t._l(t.categories,(function(n){return e("div",{key:n.id,staticClass:"filter_categories"},[e("header",[e("div",{staticClass:"left"},[e("img",{attrs:{src:o(680),alt:""}}),t._v(" "),e("h5",{staticClass:"title"},[t._v(t._s(n.name))])]),t._v(" "),e("div",{staticClass:"right"},[e("Nuxt-link",{attrs:{to:"/catalog"},on:{click:function(t){return this.$emit("checked",n.name)}}},[e("p",{on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}},[t._v("\n                больше\n              ")])])],1)]),t._v(" "),e("main",t._l(t.$store.state.categoryTags,(function(o){return e("button",{key:o.id,staticClass:"todo"},[t._v("\n            "+t._s(o)+"\n          ")])})),0),t._v(" "),e("hr",{staticStyle:{color:"#7f7777"}})])})),0),t._v(" "),e("div",{staticClass:"bottom column"},[e("Nuxt-Link",{attrs:{to:"/delivery"}},[e("p",{on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}},[t._v("\n          Оплата и доставка\n        ")])]),t._v(" "),e("Nuxt-Link",{attrs:{to:"/refund"}},[e("p",{on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}},[t._v("\n          Обмен и возврат\n        ")])]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Акции")]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Размерная сетка")]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Частые вопросы")])],1)]),t._v(" "),e("div",{staticClass:"menu",on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}})])}),[],!1,null,"2878a19e",null);e.default=component.exports},663:function(t,e,o){"use strict";o.r(e);var n={props:{footer:{type:String}},data:function(){return{location:this.footer}}},r=(o(666),o(75)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"buttons_help"},[e("a",{staticClass:"telegram",class:{button_footer:"footer"===t.footer},attrs:{href:"https://t.me/whodatandrey",target:"_blank"}}),t._v(" "),e("a",{staticClass:"vk",class:{button_footer:"footer"===t.footer},attrs:{href:"https://vk.com/",target:"_blank"}})])}),[],!1,null,"48ec4e7f",null);e.default=component.exports},664:function(t,e,o){var content=o(702);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("67330afd",content,!0,{sourceMap:!1})},665:function(t,e,o){var content=o(710);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("c8fa2280",content,!0,{sourceMap:!1})},666:function(t,e,o){"use strict";o(655)},667:function(t,e,o){var n=o(73),r=o(178),c=o(668),d=o(669),l=o(670),f=o(671),v=n((function(i){return i[1]})),x=r(c),h=r(d),m=r(l),M=r(f);v.push([t.i,".button_footer[data-v-48ec4e7f]{height:40px!important;width:40px!important}.buttons_help[data-v-48ec4e7f]{display:flex;gap:20px;justify-content:flex-end}.telegram[data-v-48ec4e7f]{background-color:inherit;background-image:url("+x+");background-size:cover;border-radius:10px;cursor:pointer;height:50px;width:50px}.telegram[data-v-48ec4e7f]:hover{background-image:url("+h+")}.vk[data-v-48ec4e7f]{background-color:inherit;background-image:url("+m+");background-size:cover;border-radius:10px;cursor:pointer;height:50px;width:50px}.vk[data-v-48ec4e7f]:hover{background-image:url("+M+")}",""]),v.locals={},t.exports=v},668:function(t,e,o){t.exports=o.p+"img/telegram.d651aaf.svg"},669:function(t,e,o){t.exports=o.p+"img/telegram_on.a2f03d0.svg"},670:function(t,e,o){t.exports=o.p+"img/vk.ee70316.svg"},671:function(t,e,o){t.exports=o.p+"img/vk_on.af08820.svg"},672:function(t,e,o){"use strict";o.r(e);o(50),o(62),o(51),o(53),o(16),o(104),o(52),o(105);var n=o(40),r=o(106);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={data:function(){return{headerOpened:!1,whiteHeader:!1,searchShown:!1,showMobileMenu:!1}},mounted:function(){var t=this,e=window.matchMedia("(max-width:640px)");this.showMobileMenu=e.matches;var o=function(e){return t.showMobileMenu=e.matches};e.addListener(o),this.$once("hook:beforeDestroy",(function(){return e.removeListener(o)}))},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>0?this.whiteHeader=!0:this.whiteHeader=!1}},components:{Login:o(696).default},computed:d(d({},Object(r.c)("cart",["getProducts"])),{},{scrollPostion:function(){return window.scrollY}})},f=(o(701),o(75)),component=Object(f.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{position:"absolute"}},[e("header",{class:{notMainPage:"index"!=t.$route.name||!0===t.whiteHeader||!0===t.searchShown}},[e("div",{staticClass:"header"},[e("div",{staticClass:"flex"},[e("button",{staticClass:"burger__menu",on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}},[e("img",{attrs:{src:o(698),alt:""}}),t._v(" "),t.showMobileMenu?t._e():e("p",[t._v("каталог")])])]),t._v(" "),t.showMobileMenu?t._e():e("Nuxt-link",{class:{openedLogo:t.headerOpened},attrs:{id:"logo",to:"/"}},[e("img",{attrs:{src:o(699),alt:""}})]),t._v(" "),e("div",{staticClass:"buttons"},[e("div",{staticClass:"searchButtons"},[!1===t.searchShown?e("img",{staticClass:"search",attrs:{src:o(700),alt:""},on:{click:function(e){t.searchShown=!t.searchShown}}}):t._e(),t._v(" "),!0===t.searchShown?e("div",{staticClass:"searchInputWrapper"},[e("i",{on:{click:function(e){return t.$router.push("/catalog")}}}),t._v(" "),e("input",{staticClass:"searchInput",attrs:{type:"search",name:"",id:"",placeholder:"Я ищу"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$router.push("/catalog")}}})]):t._e()]),t._v(" "),t.showMobileMenu?t._e():e("Nuxt-link",{staticClass:"favorite",attrs:{to:"/favorite"}}),t._v(" "),t.showMobileMenu?t._e():e("Nuxt-link",{staticClass:"cart",attrs:{to:"/cart"}},[t.getProducts.length>0?e("span",{staticClass:"cartCounter"},[t._v("\n              "+t._s(t.getProducts.length)+"\n            ")]):t._e()]),t._v(" "),t.showMobileMenu?t._e():e("div",{staticClass:"account",on:{click:function(e){return t.$store.commit("SET_LOGIN_OPENED",!t.$store.state.login)}}})],1)],1),t._v(" "),t.showMobileMenu?e("div",{staticClass:"mobileMenu buttons"},[e("div",{staticClass:"mobile_button"},[e("Nuxt-link",{staticClass:"home",attrs:{to:"/"}}),t._v(" "),e("p",[t._v("главная")])],1),t._v(" "),e("div",{staticClass:"mobile_button"},[e("Nuxt-link",{staticClass:"favorite",attrs:{to:"/favorite"}}),t._v(" "),e("p",[t._v("вишлист")])],1),t._v(" "),e("div",{staticClass:"mobile_button"},[e("Nuxt-link",{staticClass:"cart",attrs:{to:"/cart"}},[t.getProducts.length>0?e("span",{staticClass:"cartCounter"},[t._v("\n              "+t._s(t.getProducts.length)+"\n            ")]):t._e()]),t._v(" "),e("p",[t._v("корзина")])],1),t._v(" "),e("div",{staticClass:"mobile_button"},[e("div",{staticClass:"account",on:{click:function(e){return t.$store.commit("SET_LOGIN_OPENED",!t.$store.state.login)}}}),t._v(" "),e("p",[t._v("аккаунт")])])]):t._e()]),t._v(" "),0!=t.$store.state.login?e("Login"):t._e()],1)}),[],!1,null,"f4606d6c",null);e.default=component.exports},673:function(t,e,o){"use strict";o.r(e);var n={},r=(o(709),o(75)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("section",[e("footer",{},[t._m(0),t._v(" "),e("div",{staticClass:"column"},[e("h5",[t._v("О нас")]),t._v(" "),e("div",{staticClass:"links"},[e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Концепция и ценности бренда")]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Сотрудничество")]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Работа в DEQO")])],1)]),t._v(" "),e("div",{staticClass:"column"},[e("h5",[t._v("Покупателям")]),t._v(" "),e("div",{staticClass:"links"},[e("Nuxt-Link",{attrs:{to:"/delivery"}},[t._v("Оплата и доставка")]),t._v(" "),e("Nuxt-Link",{attrs:{to:"/refund"}},[t._v("Обмен и возврат")]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Оферта")]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Политика конфиденциальности")]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Пользовательское соглашение")])],1)]),t._v(" "),e("div",{staticClass:"column"},[e("h5",[t._v("Контакты")]),t._v(" "),e("div",{staticClass:"links"},[e("a",{attrs:{href:"mailto:hello.deqo@gmail.com?subject=Вопрос по &body=Здравствуйте! Возник вопрос по поводу"}},[t._v("example@mail.ru")]),t._v(" "),e("a",{attrs:{href:"tel:+7 (822) 156-90-15"}},[t._v("+7 (822) 156-90-15")]),t._v(" "),e("div",{staticClass:"jscb"},[e("buttons-social",{attrs:{footer:"footer"}})],1)])])]),t._v(" "),e("p",{staticClass:"copyright"},[t._v("DEQO 2023")])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"left"},[e("div",{staticClass:"text"},[e("h5",[t._v("Получайте скидки")]),t._v(" "),e("p",[t._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt\n        ")])]),t._v(" "),e("div",{staticClass:"form"},[e("form",{attrs:{action:""}},[e("input",{attrs:{type:"email",name:"",placeholder:"Введите своей email",id:"email"}}),t._v(" "),e("button",{attrs:{type:"submit"}},[t._v("Отправить")])])])])}],!1,null,"392bd2c1",null);e.default=component.exports;installComponents(component,{ButtonsSocial:o(663).default})},676:function(t,e,o){"use strict";o(657)},677:function(t,e,o){var n=o(73)((function(i){return i[1]}));n.push([t.i,".margin[data-v-003cae6b]{margin-top:-110px}.buttons[data-v-003cae6b]{color:#685f5f;display:flex;flex-direction:column;gap:20px}.buttons p[data-v-003cae6b]{cursor:pointer;font-size:18px;font-weight:400;line-height:22px;text-align:center;width:100%}.buttons .button[data-v-003cae6b]{border:1px solid #685f5f;border-radius:4px;font-size:20px;font-weight:600;line-height:24px;padding:18px 20px;text-align:left}.buttons .next[data-v-003cae6b]{background-color:#a9a1a1;border:none;color:#fff;cursor:pointer;font-weight:400;text-align:center}.popup[data-v-003cae6b]{z-index:300}.login[data-v-003cae6b],.popup[data-v-003cae6b]{height:100vh;position:fixed;width:100vw}.login[data-v-003cae6b]{background-color:#000;opacity:.5}.loginPopUp[data-v-003cae6b]{background-color:#fff;display:flex;flex-direction:column;gap:40px;height:420px;left:0;margin:0 auto;padding:85px 110px;position:fixed;right:0;top:33%;width:600px}.loginPopUp h3[data-v-003cae6b]{color:#685f5f;font-size:24px;font-weight:700;line-height:28px;text-align:center;width:100%}",""]),n.locals={},t.exports=n},680:function(t,e,o){t.exports=o.p+"img/icon-t-shirt.21369e9.svg"},681:function(t,e,o){"use strict";o(658)},682:function(t,e,o){var n=o(73)((function(i){return i[1]}));n.push([t.i,'.wrapperBurgerMenu[data-v-2878a19e]{height:100vh;max-width:100%;position:fixed;top:0;width:100vw;z-index:2000}.filter_categories[data-v-2878a19e]{display:flex;flex-direction:column;gap:22px}.filter_categories button[data-v-2878a19e]{background:none;border:1px solid #7f7777;border-radius:30px;color:#7f7777;padding:4px 16px}.filter_categories main[data-v-2878a19e]{display:flex;flex-wrap:wrap;gap:10px}.filter_categories header[data-v-2878a19e]{display:flex;justify-content:space-between}.filter_categories header p[data-v-2878a19e]{color:#bababa;font-weight:300}.filter_categories .left[data-v-2878a19e]{display:flex;gap:10px}.filter_categories .left h5[data-v-2878a19e]{color:#fff;font-size:18px;font-weight:700;line-height:21px}.filter_categories .right a[data-v-2878a19e]{color:#bababa;font-size:14px;font-weight:300;line-height:16px;text-align:center}a[data-v-2878a19e]{color:#bababa;font-family:"RF Dewi";font-size:20px;font-style:normal;font-weight:400;line-height:24px;-webkit-text-decoration:none;text-decoration:none}.menu[data-v-2878a19e]{background-color:#202020;box-sizing:border-box;cursor:pointer;height:100vh;max-width:100%;opacity:.2;position:fixed;top:0;width:100vw;z-index:2000}.column[data-v-2878a19e]{gap:30px}.burger_menu[data-v-2878a19e],.column[data-v-2878a19e]{display:flex;flex-direction:column}.burger_menu[data-v-2878a19e]{background-color:#202020;height:100vh;justify-content:space-between;padding:60px;position:fixed;top:0;width:405px;z-index:2020}@media(max-width:1900px){.burger_menu[data-v-2878a19e]{margin:0 -32px}}',""]),n.locals={},t.exports=n},695:function(t,e,o){var content=o(743);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("5e3af0a6",content,!0,{sourceMap:!1})},696:function(t,e,o){"use strict";o.r(e);o(50);var n={data:function(){return{inputPhoneModel:""}},computed:{isItemPage:function(){return"index"!==this.$route.name}}},r=(o(676),o(75)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"popup",class:{margin:t.isItemPage}},[e("div",{staticClass:"login",on:{click:function(e){return t.$store.commit("SET_LOGIN_OPENED",!t.$store.state.login)}}}),t._v(" "),e("div",{staticClass:"loginPopUp"},[e("h3",[t._v("Вход | Регистрация")]),t._v(" "),e("div",{staticClass:"buttons"},[e("input",{directives:[{name:"mask",rawName:"v-mask",value:"+7 (###) ### ## ##",expression:"'+7 (###) ### ## ##'"},{name:"model",rawName:"v-model",value:t.inputPhoneModel,expression:"inputPhoneModel"}],staticClass:"button",attrs:{type:"text",placeholder:"+7"},domProps:{value:t.inputPhoneModel},on:{input:function(e){e.target.composing||(t.inputPhoneModel=e.target.value)}}}),t._v(" "),e("button",{staticClass:"button next"},[t._v("Далее")]),t._v(" "),e("p",[t._v("войти через электронную почту")])])])])}),[],!1,null,"003cae6b",null);e.default=component.exports},698:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAxOSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeDE9IjEiIHkxPSIxNy41IiB4Mj0iMTciIHkyPSIxNy41IiBzdHJva2U9IiM2ODVGNUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxsaW5lIHgxPSIxIiB5MT0iMTAuNSIgeDI9IjE3IiB5Mj0iMTAuNSIgc3Ryb2tlPSIjNjg1RjVGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8bGluZSB4MT0iMSIgeTE9IjMuNSIgeDI9IjE3IiB5Mj0iMy41IiBzdHJva2U9IiM2ODVGNUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo="},699:function(t,e,o){t.exports=o.p+"img/logo.306502a.svg"},700:function(t,e,o){t.exports=o.p+"img/search.54dd31d.svg"},701:function(t,e,o){"use strict";o(664)},702:function(t,e,o){var n=o(73),r=o(178),c=o(703),d=o(678),l=o(679),f=o(704),v=o(705),x=o(706),h=o(707),m=o(708),M=n((function(i){return i[1]})),_=r(c),w=r(d),j=r(l),I=r(f),N=r(v),y=r(x),k=r(h),C=r(m);M.push([t.i,'.mobileMenu[data-v-f4606d6c]{background-color:#fff;border-top:1px solid #d3d3d3;bottom:0;display:flex;height:50px;justify-content:space-between;left:0;margin:0 auto;padding:0 30px;position:fixed;right:0;width:100%;z-index:100}.mobileMenu .mobile_button[data-v-f4606d6c]{align-items:center;display:flex;flex-direction:column;gap:5px;justify-content:center}.mobileMenu .mobile_button p[data-v-f4606d6c]{color:#685f5f;font-family:"Roboto";font-size:10px;font-style:normal;font-weight:500;letter-spacing:-.02em;line-height:12px;text-align:center}.searchButtons[data-v-f4606d6c]{align-items:center;display:flex;transition:1s}.searchButtons .search[data-v-f4606d6c]{transition:1s}.home[data-v-f4606d6c]{align-items:center;background-image:url('+_+");display:flex}.favorite[data-v-f4606d6c],.home[data-v-f4606d6c]{background-size:24px 24px;height:24px;width:24px}.favorite[data-v-f4606d6c]{background-image:url("+w+")}.favorite[data-v-f4606d6c]:hover{background-image:url("+j+")}.cart[data-v-f4606d6c]{background-image:url("+I+");background-size:24px 24px;height:24px;position:relative;width:24px}.cart[data-v-f4606d6c]:hover{background-image:url("+N+")}.account[data-v-f4606d6c]{background-image:url("+y+");background-size:24px 24px;cursor:pointer;height:24px;width:24px}.account[data-v-f4606d6c]:hover{background-image:url("+k+")}.searchInputWrapper[data-v-f4606d6c]{align-items:center;border:1px solid #a9a1a1;border-radius:4px;box-sizing:border-box;display:flex;gap:10px;height:34px;justify-content:space-between;left:6px;max-width:240px;padding:0 6px;top:58px;transition:1s;width:100%}.searchInputWrapper i[data-v-f4606d6c]{background-image:url("+C+");cursor:pointer;height:18px;width:18px}.searchInput[data-v-f4606d6c]{align-items:center;background-color:inherit;display:flex;font-size:16px;font-weight:400;height:100%;line-height:19px;transition:1s}.searchInput[data-v-f4606d6c]::-moz-placeholder{color:#dbd7d2}.searchInput[data-v-f4606d6c]::placeholder{color:#dbd7d2}.cartCounter[data-v-f4606d6c]{background:#9e8b7b;border:1px solid #fff;border-radius:50%;color:#fff;font-size:13px;height:18px;line-height:15px;margin-left:12px!important;top:0;width:18px}.cartCounter[data-v-f4606d6c],a#logo[data-v-f4606d6c]{position:absolute;text-align:center}a#logo[data-v-f4606d6c]{left:0;margin:0 auto;max-width:91px;right:0;top:8px;transition:all 1s ease}.openedLogo[data-v-f4606d6c]{top:28px!important}.burger__menu[data-v-f4606d6c]{align-items:center;color:#685f5f;display:flex;font-size:16px;font-weight:400;gap:20px;line-height:19px}.flex[data-v-f4606d6c]{align-items:center;gap:15px}header[data-v-f4606d6c]{height:58px;position:fixed;top:0;transition:all .5s;width:100%;z-index:2}.opened[data-v-f4606d6c]{height:100px!important}.notMainPage[data-v-f4606d6c],.opened[data-v-f4606d6c]{background:#fff;box-shadow:0 1px 0 0 #bababa}.header[data-v-f4606d6c]{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;margin:0 auto;max-width:1676px}button[data-v-f4606d6c]{background:none;cursor:pointer}.buttons[data-v-f4606d6c]{align-items:center;display:flex;gap:30px}.buttons img[data-v-f4606d6c]{cursor:pointer;height:24px;width:24px}@media(max-width:1900px){header[data-v-f4606d6c]{padding:0 32px}}@media(max-width:1165px){header[data-v-f4606d6c]{padding:0 24px}}@media(max-width:640px){header[data-v-f4606d6c]{padding:0 10px}}",""]),M.locals={},t.exports=M},703:function(t,e,o){t.exports=o.p+"img/home.0a93ae8.svg"},704:function(t,e,o){t.exports=o.p+"img/cart.321773a.svg"},705:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAxOSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjY2MDkgNy42NjI4NUMxNy42MzQ2IDcuMjA5NjQgMTcuMjcyMiA2Ljg1NjM0IDE2LjgzNDQgNi44NTcxNEgxMy41Mjg2VjQuMjg1NzFDMTMuNTI4NiAxLjkxODc3IDExLjY3ODUgMCA5LjM5NjI5IDBDNy4xMTQwOSAwIDUuMjY0MDEgMS45MTg3NyA1LjI2NDAxIDQuMjg1NzFWNi44NTcxNEgxLjk1ODE4QzEuNTIwNDIgNi44NTYzNCAxLjE1Nzk3IDcuMjA5NjQgMS4xMzE3MyA3LjY2Mjg1TDAuNDA0NDQ0IDIxLjI4MjlDMC4zMjY4NjEgMjIuNzAwNyAxLjM3MjIzIDIzLjkxNTQgMi43MzkzNCAyMy45OTU5QzIuNzg3NDMgMjMuOTk4NyAyLjgzNTYyIDI0LjAwMDEgMi44ODM4MSAyNEgxNS45MTdDMTcuMjg2NCAyNC4wMDIzIDE4LjM5ODIgMjIuODUyOSAxOC40MDA0IDIxLjQzMjdDMTguNDAwNSAyMS4zODI3IDE4LjM5OTEgMjEuMzMyNyAxOC4zOTY0IDIxLjI4MjlMMTcuNjYwOSA3LjY2Mjg1Wk02LjkxNjkyIDQuMjg1NzFDNi45MTY5MiAyLjg2NTU0IDguMDI2OTYgMS43MTQyOSA5LjM5NjI5IDEuNzE0MjlDMTAuNzY1NiAxLjcxNDI5IDExLjg3NTcgMi44NjU1NCAxMS44NzU3IDQuMjg1NzFWNi44NTcxNEg2LjkxNjkyVjQuMjg1NzFaIiBmaWxsPSIjNjg1RjVGIi8+Cjwvc3ZnPgo="},706:function(t,e,o){t.exports=o.p+"img/account.fbb40ea.svg"},707:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjkxNTUgMTIuNzMzNEMxNS40MzE4IDEyLjczMzQgMTguMjgyMyA5Ljg4Mjk1IDE4LjI4MjMgNi4zNjY3MUMxOC4yODIzIDIuODUwNDcgMTUuNDMxOCAwIDExLjkxNTUgMEM4LjM5OTMgMCA1LjU0ODgzIDIuODUwNDcgNS41NDg4MyA2LjM2NjcxQzUuNTQ4ODMgOS44ODI5NSA4LjM5OTMgMTIuNzMzNCAxMS45MTU1IDEyLjczMzRaIiBmaWxsPSIjNjg1RjVGIi8+CjxwYXRoIGQ9Ik0yMC45ODkxIDIxLjI4MThDMjAuMzI3NCAyMi41MzI1IDE5LjA4NjkgMjMuMjc5MyAxNy42NzIxIDIzLjI3OTNINi4xNTgxNkM0Ljc0NDIgMjMuMjc5MyAzLjUwNTIzIDIyLjUzMjUgMi44NDI3OCAyMS4yODI2QzIuMTgwMzMgMjAuMDMxMSAyLjI2MDAxIDE4LjU4NTkgMy4wOTQzMiAxNy4zNTc5QzMuOTMxNzYgMTYuMTI1OSA1LjE4OTQ4IDE1LjI4MyA2LjYzNjI1IDE0Ljk4NTRDOC4zNjE5IDE0LjYzMDcgMTAuMTM4MyAxNC40NTEgMTEuOTE1NSAxNC40NTFDMTMuNjkyOCAxNC40NTEgMTUuNDY5MiAxNC42MzA3IDE3LjE5NDggMTQuOTg1NEMxOC42NDA4IDE1LjI4MyAxOS44OTkzIDE2LjEyNjcgMjAuNzM5MSAxNy4zNjE4TDIwLjc3NjYgMTcuNDE2NUMyMS41NzE5IDE4LjU4NjcgMjEuNjUxNSAyMC4wMzExIDIwLjk4OTEgMjEuMjgxOFoiIGZpbGw9IiM2ODVGNUYiLz4KPC9zdmc+Cg=="},708:function(t,e,o){t.exports=o.p+"img/loopInput.82be065.svg"},709:function(t,e,o){"use strict";o(665)},710:function(t,e,o){var n=o(73)((function(i){return i[1]}));n.push([t.i,'.jscb[data-v-392bd2c1]{align-items:center;display:flex;gap:20px}.jscb .buttons_help .telegram[data-v-392bd2c1]{height:40px!important;width:40px!important}section[data-v-392bd2c1]{background-color:#f7f7f7;padding-bottom:40px;padding-top:50px}footer[data-v-392bd2c1],section[data-v-392bd2c1]{margin:0 auto;width:100%}footer[data-v-392bd2c1]{align-items:flex-start;gap:100px;height:300px;justify-content:space-between;max-width:1676px}footer[data-v-392bd2c1],form[data-v-392bd2c1]{display:flex}form[data-v-392bd2c1]{gap:40px;margin-bottom:40px}.column[data-v-392bd2c1]{color:#a9a1a1;display:flex;flex-direction:column;font-size:16px;gap:20px;line-height:19px;max-width:338px}.column h5[data-v-392bd2c1]{color:#685f5f;font-family:"Playfair Display",serif;font-size:20px;line-height:27px}.column .links[data-v-392bd2c1]{display:flex;flex-direction:column;gap:30px}.column .links a[data-v-392bd2c1]{color:#848484;-webkit-text-decoration:none;text-decoration:none}.column .links a[data-v-392bd2c1]:hover{color:#5b5353}.left[data-v-392bd2c1]{height:90%;justify-content:space-between;max-width:480px}.left[data-v-392bd2c1],.left .text[data-v-392bd2c1]{display:flex;flex-direction:column}.left .text[data-v-392bd2c1]{gap:20px}.left .text p[data-v-392bd2c1]{color:#a9a1a1;font-size:16px;font-weight:400;line-height:19px}.left h5[data-v-392bd2c1]{color:#685f5f;font-family:"Playfair Display",serif;font-size:36px;font-weight:600;line-height:43px;margin-bottom:35px}.left .form p[data-v-392bd2c1]{font-size:10px}.right[data-v-392bd2c1]{display:flex;font-size:15px;gap:40px;justify-content:space-between;letter-spacing:-.001em;width:100%}input[type=email][data-v-392bd2c1]{background-color:inherit;border-bottom:1px solid #a1a1a1;border-radius:4px;color:#a9a1a1;height:35px;min-width:300px}input[type=email][data-v-392bd2c1]::-moz-placeholder{color:#a9a1a1}input[type=email][data-v-392bd2c1]::placeholder{color:#a9a1a1}button[data-v-392bd2c1]{background-color:inherit;color:#1a1a1a;cursor:pointer;font-size:16px;font-weight:400;line-height:19px;text-align:center}@media(max-width:1500px){.column[data-v-392bd2c1]{width:100%}.left[data-v-392bd2c1]{max-width:228px}.left .text h5[data-v-392bd2c1]{font-size:20px}.column[data-v-392bd2c1]{gap:18px;max-width:228px}.column .links[data-v-392bd2c1],form[data-v-392bd2c1]{gap:20px}form[data-v-392bd2c1]{align-items:flex-end;flex-direction:column}form input[type=email][data-v-392bd2c1]{min-width:0;min-width:auto}.copyright[data-v-392bd2c1]{color:#685f5f;text-align:right}}@media(max-width:1024px){footer[data-v-392bd2c1]{flex-wrap:wrap;gap:70px;height:100%}}@media(max-width:640px){footer[data-v-392bd2c1]{align-items:center;flex-direction:column;flex-wrap:nowrap}}',""]),n.locals={},t.exports=n},742:function(t,e,o){"use strict";o(695)},743:function(t,e,o){var n=o(73)((function(i){return i[1]}));n.push([t.i,".mainSlider[data-v-03956590]{position:relative}.item-slide[data-v-03956590]{width:387px!important}.linkToCatalog[data-v-03956590]:hover{color:#5b5353}a[data-v-03956590]{color:#b8b8b8;-webkit-text-decoration:none;text-decoration:none}img[data-v-03956590]{height:auto;max-width:100%}.mainSlider[data-v-03956590],section[data-v-03956590]{overflow:hidden}section[data-v-03956590]{display:flex;flex-direction:column;gap:60px;margin:0 auto;max-width:1676px;width:100%}section h2[data-v-03956590]{color:#685f5f;font-size:24px;font-weight:600;line-height:29px}",""]),n.locals={},t.exports=n},747:function(t,e,o){t.exports=o.p+"img/bc0e3668564533.5b6171f3d0b17.cb3a441.jpg"},748:function(t,e,o){var content=o(797);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("1a91399e",content,!0,{sourceMap:!1})},749:function(t,e,o){var content=o(803);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("3f47ff9a",content,!0,{sourceMap:!1})},757:function(t,e,o){"use strict";o.r(e);o(77),o(43);var n=o(661),r=o(851),c=o(848),d=o(849),l=o(850);o(674);r.a.use([c.a,d.a,l.a]);var f={props:{title:{type:String}},data:function(){return{slider:null}},components:{Item:n.default},computed:{products:function(){return this.$store.getters["catalog/getProducts"]},productsInCart:function(){return this.$store.getters.productsInCart}},mounted:function(){setTimeout((function(){new r.a(".mainSlider",{slidesPerView:"auto",spaceBetween:40,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}),1e3)}},v=(o(742),o(75)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"jcsb"},[e("h2",[t._v(t._s(t.title))]),t._v(" "),e("Nuxt-Link",{staticClass:"linkToCatalog",attrs:{to:"/catalog"}},[t._v("смотреть все")])],1),t._v(" "),e("div",{staticClass:"mainSlider"},[e("div",{staticClass:"swiper-wrapper"},t._l(this.products.slice(0,12),(function(t){return e("div",{key:t.slug,staticClass:"swiper-slide item-slide"},[e("item",{key:t.id,attrs:{item:t,inSlider:"inSlider"}})],1)})),0),t._v(" "),e("div",{staticClass:"swiper-button-prev"}),t._v(" "),e("div",{staticClass:"swiper-button-next"})])])}),[],!1,null,"03956590",null);e.default=component.exports;installComponents(component,{Item:o(661).default})},796:function(t,e,o){"use strict";o(748)},797:function(t,e,o){var n=o(73)((function(i){return i[1]}));n.push([t.i,"section[data-v-13916dd1]{margin:0 auto;max-width:1920px;padding:100px 0;width:100%}.collections[data-v-13916dd1]{align-items:flex-start;display:flex;gap:5.2631578947%}.collection_right[data-v-13916dd1]{display:flex;flex-direction:column-reverse}.collection_left[data-v-13916dd1]{display:flex;flex-direction:column}img[data-v-13916dd1]{height:auto;width:100%}.left[data-v-13916dd1]{margin:2vh 0 0}.right[data-v-13916dd1]{margin:0 0 2vh}.text h3[data-v-13916dd1]{font-size:calc(8.5px + 3.90625vw);letter-spacing:-.04em}.text p[data-v-13916dd1]{font-size:calc(10.5px + .46875vw);letter-spacing:-.025em;line-height:30px}@media(max-width:768px){.collection_right[data-v-13916dd1],.collections[data-v-13916dd1]{flex-direction:column}.collection_right[data-v-13916dd1]{margin-top:4vh}.collection_right .right[data-v-13916dd1]{margin:2vh 0 0}}",""]),n.locals={},t.exports=n},798:function(t,e,o){t.exports=o.p+"img/back.5d771a1.jpg"},799:function(t,e,o){t.exports=o.p+"img/back2.e916d4d.jpg"},800:function(t,e,o){t.exports=o.p+"img/back3.9331c0f.jpg"},801:function(t,e,o){t.exports=o.p+"img/slogan.a092223.svg"},802:function(t,e,o){"use strict";o(749)},803:function(t,e,o){var n=o(73)((function(i){return i[1]}));n.push([t.i,".flex[data-v-1502d055]{display:flex;flex-direction:column;gap:100px;justify-content:space-between}.swiper-pagination[data-v-1502d055]{align-self:flex-end;display:flex;gap:20px;position:absolute;right:60px}section[data-v-1502d055]{margin:0!important;padding:0!important}.swiper[data-v-1502d055]{overflow:hidden}.swiper[data-v-1502d055],section img.slide[data-v-1502d055]{height:100vh;position:absolute;width:100%}section img.slide[data-v-1502d055]{-o-object-fit:cover;object-fit:cover;z-index:1}.wrapper[data-v-1502d055]{align-items:center;display:flex;flex-direction:row;height:100vh;justify-content:center;margin:0 auto}.wrapper img[data-v-1502d055]{height:auto;width:100%;z-index:1}main[data-v-1502d055]{gap:80px;justify-content:space-between}.assortment[data-v-1502d055],main[data-v-1502d055]{display:flex;flex-direction:column;z-index:1}.assortment[data-v-1502d055]{gap:35px}.assortment a[data-v-1502d055]{color:#fff;font-size:15px;-webkit-text-decoration:none;text-decoration:none;width:110px}footer[data-v-1502d055]{color:#fff;z-index:1}.text[data-v-1502d055]{display:flex;gap:10%;padding-bottom:100px}.text h1[data-v-1502d055]{font-size:6.35vw}.text h1[data-v-1502d055],.text p[data-v-1502d055],.text span i[data-v-1502d055]{color:#fff}.text p[data-v-1502d055]{font-size:14px;margin-top:50px;width:33%}.sale[data-v-1502d055],.sale a[data-v-1502d055]{z-index:1}.sale a[data-v-1502d055]{color:#fff;font-size:15px;-webkit-text-decoration:none;text-decoration:none}",""]),n.locals={},t.exports=n},815:function(t,e,o){var content=o(847);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("52088675",content,!0,{sourceMap:!1})},825:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"collections p60"},[e("div",{staticClass:"collection_left"},[e("img",{attrs:{src:o(747),alt:""}}),t._v(" "),e("div",{staticClass:"text"},[e("h3",{staticClass:"left"},[t._v("Living large in a small space")]),t._v(" "),e("p",{staticClass:"left"},[t._v("\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore\n          ipsum totam ipsa dolorem facilis temporibus quam, inventore nostrum\n          accusantium nesciunt fugiat cum aperiam id provident ex praesentium\n          quibusdam optio molestias, unde consequatur. Eum necessitatibus\n          natus maiores eveniet quidem sapiente illo?\n        ")])])]),t._v(" "),e("div",{staticClass:"collection_right"},[e("img",{attrs:{src:o(747),alt:""}}),t._v(" "),e("div",{staticClass:"text"},[e("h3",{staticClass:"right"},[t._v("We’ve got some ideas on how to decorate")]),t._v(" "),e("p",{staticClass:"right"},[t._v("\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore\n          ipsum totam ipsa dolorem facilis temporibus quam, inventore nostrum\n          accusantium nesciunt fugiat cum aperiam id provident ex praesentium\n          quibusdam optio molestias, unde consequatur. Eum necessitatibus\n          natus maiores eveniet quidem sapiente illo?\n        ")])])])])])}],r={},c=(o(796),o(75)),component=Object(c.a)(r,(function(){this._self._c;return this._m(0)}),n,!1,null,"13916dd1",null);e.default=component.exports},826:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this._self._c;return t("div",{staticClass:"swiper-slide"},[t("img",{staticClass:"slide",attrs:{src:o(799),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"swiper-slide"},[t("img",{staticClass:"slide",attrs:{src:o(800),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"wrapper p60"},[t("div",{staticClass:"flex"},[t("img",{attrs:{src:o(801),alt:""}})])])}],r=o(660),c=o(851),d=o(848),l=o(849),f=o(850);o(674);c.a.use([d.a,l.a,f.a]);var v={props:{photo_1:"",photo_2:"",photo_3:""},mounted:function(){new c.a(".swiper",{slidesPerView:1,autoplay:{delay:1e4},speed:4e3,allowTouchMove:!1,pagination:{clickable:!0,el:".swiper-pagination",modifierClass:".swiper-pagination-header "}})},components:{BurgerMenu:r.default},name:"IndexPage"},x=(o(802),o(75)),component=Object(x.a)(v,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"swiper"},[e("div",{staticClass:"swiper-wrapper"},[e("div",{staticClass:"swiper-slide"},[e("img",{staticClass:"slide",attrs:{src:o(798),alt:""}})]),t._v(" "),t._m(0),t._v(" "),t._m(1)])]),t._v(" "),t._m(2)])}),n,!1,null,"1502d055",null);e.default=component.exports},846:function(t,e,o){"use strict";o(815)},847:function(t,e,o){var n=o(73)((function(i){return i[1]}));n.push([t.i,".wrapper[data-v-0fb96f0c]{margin:0}",""]),n.locals={},t.exports=n},859:function(t,e,o){"use strict";o.r(e);var n=o(4),r=(o(35),o(825)),c=o(672),d=o(673),l=o(757),f=o(826),v=o(660),x={components:{HeaderSlider:f.default,Collections:r.default,Footer:d.default,BurgerMenu:v.default,HeaderBlack:c.default,ItemsSlider:l.default},name:"IndexPage",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(o=t.store).getters["catalog/getProducts"].length){e.next=4;break}return e.next=4,o.dispatch("catalog/fetchProducts");case 4:if(0!==o.getters["catalog/getCategories"].length){e.next=7;break}return e.next=7,o.dispatch("catalog/fetchCategories");case 7:case"end":return e.stop()}}),e)})))()}},h=(o(846),o(75)),component=Object(h.a)(x,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e("HeaderBlack"),t._v(" "),e("Transition",{attrs:{name:"slide-fade"}},[0!=t.$store.state.burgerMenuOpened?e("BurgerMenu"):t._e()],1),t._v(" "),e("HeaderSlider",{attrs:{photo_1:"back"}}),t._v(" "),e("ItemsSlider",{attrs:{title:"Bestsellers"}}),t._v(" "),e("ItemsSlider",{attrs:{title:"Новинки"}}),t._v(" "),e("HeaderSlider"),t._v(" "),e("ItemsSlider",{attrs:{title:"deqo + LaPizza"}}),t._v(" "),e("HeaderSlider"),t._v(" "),e("ItemsSlider",{attrs:{title:"Новая категория"}}),t._v(" "),e("Footer")],1)}),[],!1,null,"0fb96f0c",null);e.default=component.exports}}]);