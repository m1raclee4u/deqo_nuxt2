(window.webpackJsonp=window.webpackJsonp||[]).push([[2,11,20,24,34],{655:function(t,e,o){var content=o(667);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("13731aef",content,!0,{sourceMap:!1})},657:function(t,e,o){var content=o(677);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("6f11698f",content,!0,{sourceMap:!1})},658:function(t,e,o){var content=o(682);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("368c5131",content,!0,{sourceMap:!1})},660:function(t,e,o){"use strict";o.r(e);o(50);var n={computed:{categories:function(){return this.$store.getters.categories}},methods:{addChecked:function(){this.$emit("updateChecked",this.checkedId)}},mounted:function(){0===this.$store.getters.categories.length&&this.$store.dispatch("fetchCategories")}},r=(o(681),o(75)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapperBurgerMenu"},[e("div",{staticClass:"burger_menu"},[e("div",{staticClass:"top column"},t._l(t.categories,(function(n){return e("div",{key:n.id,staticClass:"filter_categories"},[e("header",[e("div",{staticClass:"left"},[e("img",{attrs:{src:o(680),alt:""}}),t._v(" "),e("h5",{staticClass:"title"},[t._v(t._s(n.name))])]),t._v(" "),e("div",{staticClass:"right"},[e("Nuxt-link",{attrs:{to:"/catalog"},on:{click:function(t){return this.$emit("checked",n.name)}}},[e("p",{on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}},[t._v("\n                больше\n              ")])])],1)]),t._v(" "),e("main",t._l(t.$store.state.categoryTags,(function(o){return e("button",{key:o.id,staticClass:"todo"},[t._v("\n            "+t._s(o)+"\n          ")])})),0),t._v(" "),e("hr",{staticStyle:{color:"#7f7777"}})])})),0),t._v(" "),e("div",{staticClass:"bottom column"},[e("Nuxt-Link",{attrs:{to:"/delivery"}},[e("p",{on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}},[t._v("\n          Оплата и доставка\n        ")])]),t._v(" "),e("Nuxt-Link",{attrs:{to:"/refund"}},[e("p",{on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}},[t._v("\n          Обмен и возврат\n        ")])]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Акции")]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Размерная сетка")]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Частые вопросы")])],1)]),t._v(" "),e("div",{staticClass:"menu",on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}})])}),[],!1,null,"2878a19e",null);e.default=component.exports},663:function(t,e,o){"use strict";o.r(e);var n={props:{footer:{type:String}},data:function(){return{location:this.footer}}},r=(o(666),o(75)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"buttons_help"},[e("a",{staticClass:"telegram",class:{button_footer:"footer"===t.footer},attrs:{href:"https://t.me/whodatandrey",target:"_blank"}}),t._v(" "),e("a",{staticClass:"vk",class:{button_footer:"footer"===t.footer},attrs:{href:"https://vk.com/",target:"_blank"}})])}),[],!1,null,"48ec4e7f",null);e.default=component.exports},664:function(t,e,o){var content=o(702);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("06a8c170",content,!0,{sourceMap:!1})},665:function(t,e,o){var content=o(710);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("c8fa2280",content,!0,{sourceMap:!1})},666:function(t,e,o){"use strict";o(655)},667:function(t,e,o){var n=o(73),r=o(178),c=o(668),l=o(669),d=o(670),x=o(671),f=n((function(i){return i[1]})),M=r(c),v=r(l),h=r(d),m=r(x);f.push([t.i,".button_footer[data-v-48ec4e7f]{height:40px!important;width:40px!important}.buttons_help[data-v-48ec4e7f]{display:flex;gap:20px;justify-content:flex-end}.telegram[data-v-48ec4e7f]{background-color:inherit;background-image:url("+M+");background-size:cover;border-radius:10px;cursor:pointer;height:50px;width:50px}.telegram[data-v-48ec4e7f]:hover{background-image:url("+v+")}.vk[data-v-48ec4e7f]{background-color:inherit;background-image:url("+h+");background-size:cover;border-radius:10px;cursor:pointer;height:50px;width:50px}.vk[data-v-48ec4e7f]:hover{background-image:url("+m+")}",""]),f.locals={},t.exports=f},668:function(t,e,o){t.exports=o.p+"img/telegram.d651aaf.svg"},669:function(t,e,o){t.exports=o.p+"img/telegram_on.a2f03d0.svg"},670:function(t,e,o){t.exports=o.p+"img/vk.ee70316.svg"},671:function(t,e,o){t.exports=o.p+"img/vk_on.af08820.svg"},672:function(t,e,o){"use strict";o.r(e);o(50),o(62),o(51),o(53),o(16),o(104),o(52),o(105);var n=o(40),r=o(106);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{headerOpened:!1,whiteHeader:!1,searchShown:!1,showMobileMenu:!1}},mounted:function(){var t=this,e=window.matchMedia("(max-width:640px)");this.showMobileMenu=e.matches;var o=function(e){return t.showMobileMenu=e.matches};e.addListener(o),this.$once("hook:beforeDestroy",(function(){return e.removeListener(o)}))},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>0?this.whiteHeader=!0:this.whiteHeader=!1}},components:{Login:o(696).default},computed:l(l({},Object(r.c)("cart",["getProducts"])),{},{scrollPostion:function(){return window.scrollY}})},x=(o(701),o(75)),component=Object(x.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{position:"absolute"}},[e("header",{class:{notMainPage:"index"!=t.$route.name||!0===t.whiteHeader||!0===t.searchShown}},[e("div",{staticClass:"header"},[e("div",{staticClass:"flex"},[e("button",{staticClass:"burger__menu",on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}},[e("img",{attrs:{src:o(698),alt:""}}),t._v(" "),t.showMobileMenu?t._e():e("p",[t._v("каталог")])])]),t._v(" "),t.showMobileMenu?t._e():e("Nuxt-link",{class:{openedLogo:t.headerOpened},attrs:{id:"logo",to:"/"}},[e("img",{attrs:{src:o(699),alt:""}})]),t._v(" "),e("div",{staticClass:"buttons"},[e("div",{staticClass:"searchButtons"},[!1===t.searchShown?e("img",{staticClass:"search",attrs:{src:o(700),alt:""},on:{click:function(e){t.searchShown=!t.searchShown}}}):t._e(),t._v(" "),!0===t.searchShown?e("div",{staticClass:"searchInputWrapper"},[e("i",{on:{click:function(e){return t.$router.push("/catalog")}}}),t._v(" "),e("input",{staticClass:"searchInput",attrs:{type:"search",name:"",id:"",placeholder:"Я ищу"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$router.push("/catalog")}}})]):t._e()]),t._v(" "),t.showMobileMenu?t._e():e("Nuxt-link",{staticClass:"favorite",attrs:{to:"/favorite"}}),t._v(" "),e("client-only",[t.showMobileMenu?t._e():e("Nuxt-link",{staticClass:"cart",attrs:{to:"/cart"}},[t.getProducts.length>0?e("span",{staticClass:"cartCounter"},[t._v("\n            "+t._s(t.getProducts.length)+"\n          ")]):t._e()])],1),t._v(" "),t.showMobileMenu?t._e():e("div",{staticClass:"account",on:{click:function(e){return t.$store.commit("SET_LOGIN_OPENED",!t.$store.state.login)}}})],1)],1),t._v(" "),t.showMobileMenu?e("div",{staticClass:"mobileMenu buttons"},[e("div",{staticClass:"mobile_button"},[e("Nuxt-link",{staticClass:"home",attrs:{to:"/"}}),t._v(" "),e("p",[t._v("главная")])],1),t._v(" "),e("div",{staticClass:"mobile_button"},[e("Nuxt-link",{staticClass:"favorite",attrs:{to:"/favorite"}}),t._v(" "),e("p",[t._v("вишлист")])],1),t._v(" "),e("div",{staticClass:"mobile_button"},[e("Nuxt-link",{staticClass:"cart",attrs:{to:"/cart"}},[t.getProducts.length>0?e("span",{staticClass:"cartCounter"},[t._v("\n            "+t._s(t.getProducts.length)+"\n          ")]):t._e()]),t._v(" "),e("p",[t._v("корзина")])],1),t._v(" "),e("div",{staticClass:"mobile_button"},[e("div",{staticClass:"account",on:{click:function(e){return t.$store.commit("SET_LOGIN_OPENED",!t.$store.state.login)}}}),t._v(" "),e("p",[t._v("аккаунт")])])]):t._e()]),t._v(" "),0!=t.$store.state.login?e("Login"):t._e()],1)}),[],!1,null,"16a8200f",null);e.default=component.exports},673:function(t,e,o){"use strict";o.r(e);var n={},r=(o(709),o(75)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("section",[e("footer",{},[t._m(0),t._v(" "),e("div",{staticClass:"column"},[e("h5",[t._v("О нас")]),t._v(" "),e("div",{staticClass:"links"},[e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Концепция и ценности бренда")]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Сотрудничество")]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Работа в DEQO")])],1)]),t._v(" "),e("div",{staticClass:"column"},[e("h5",[t._v("Покупателям")]),t._v(" "),e("div",{staticClass:"links"},[e("Nuxt-Link",{attrs:{to:"/delivery"}},[t._v("Оплата и доставка")]),t._v(" "),e("Nuxt-Link",{attrs:{to:"/refund"}},[t._v("Обмен и возврат")]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Оферта")]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Политика конфиденциальности")]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Пользовательское соглашение")])],1)]),t._v(" "),e("div",{staticClass:"column"},[e("h5",[t._v("Контакты")]),t._v(" "),e("div",{staticClass:"links"},[e("a",{attrs:{href:"mailto:hello.deqo@gmail.com?subject=Вопрос по &body=Здравствуйте! Возник вопрос по поводу"}},[t._v("example@mail.ru")]),t._v(" "),e("a",{attrs:{href:"tel:+7 (822) 156-90-15"}},[t._v("+7 (822) 156-90-15")]),t._v(" "),e("div",{staticClass:"jscb"},[e("buttons-social",{attrs:{footer:"footer"}})],1)])])]),t._v(" "),e("p",{staticClass:"copyright"},[t._v("DEQO 2023")])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"left"},[e("div",{staticClass:"text"},[e("h5",[t._v("Получайте скидки")]),t._v(" "),e("p",[t._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt\n        ")])]),t._v(" "),e("div",{staticClass:"form"},[e("form",{attrs:{action:""}},[e("input",{attrs:{type:"email",name:"",placeholder:"Введите своей email",id:"email"}}),t._v(" "),e("button",{attrs:{type:"submit"}},[t._v("Отправить")])])])])}],!1,null,"392bd2c1",null);e.default=component.exports;installComponents(component,{ButtonsSocial:o(663).default})},676:function(t,e,o){"use strict";o(657)},677:function(t,e,o){var n=o(73)((function(i){return i[1]}));n.push([t.i,".margin[data-v-003cae6b]{margin-top:-110px}.buttons[data-v-003cae6b]{color:#685f5f;display:flex;flex-direction:column;gap:20px}.buttons p[data-v-003cae6b]{cursor:pointer;font-size:18px;font-weight:400;line-height:22px;text-align:center;width:100%}.buttons .button[data-v-003cae6b]{border:1px solid #685f5f;border-radius:4px;font-size:20px;font-weight:600;line-height:24px;padding:18px 20px;text-align:left}.buttons .next[data-v-003cae6b]{background-color:#a9a1a1;border:none;color:#fff;cursor:pointer;font-weight:400;text-align:center}.popup[data-v-003cae6b]{z-index:300}.login[data-v-003cae6b],.popup[data-v-003cae6b]{height:100vh;position:fixed;width:100vw}.login[data-v-003cae6b]{background-color:#000;opacity:.5}.loginPopUp[data-v-003cae6b]{background-color:#fff;display:flex;flex-direction:column;gap:40px;height:420px;left:0;margin:0 auto;padding:85px 110px;position:fixed;right:0;top:33%;width:600px}.loginPopUp h3[data-v-003cae6b]{color:#685f5f;font-size:24px;font-weight:700;line-height:28px;text-align:center;width:100%}",""]),n.locals={},t.exports=n},680:function(t,e,o){t.exports=o.p+"img/icon-t-shirt.21369e9.svg"},681:function(t,e,o){"use strict";o(658)},682:function(t,e,o){var n=o(73)((function(i){return i[1]}));n.push([t.i,'.wrapperBurgerMenu[data-v-2878a19e]{height:100vh;max-width:100%;position:fixed;top:0;width:100vw;z-index:2000}.filter_categories[data-v-2878a19e]{display:flex;flex-direction:column;gap:22px}.filter_categories button[data-v-2878a19e]{background:none;border:1px solid #7f7777;border-radius:30px;color:#7f7777;padding:4px 16px}.filter_categories main[data-v-2878a19e]{display:flex;flex-wrap:wrap;gap:10px}.filter_categories header[data-v-2878a19e]{display:flex;justify-content:space-between}.filter_categories header p[data-v-2878a19e]{color:#bababa;font-weight:300}.filter_categories .left[data-v-2878a19e]{display:flex;gap:10px}.filter_categories .left h5[data-v-2878a19e]{color:#fff;font-size:18px;font-weight:700;line-height:21px}.filter_categories .right a[data-v-2878a19e]{color:#bababa;font-size:14px;font-weight:300;line-height:16px;text-align:center}a[data-v-2878a19e]{color:#bababa;font-family:"RF Dewi";font-size:20px;font-style:normal;font-weight:400;line-height:24px;-webkit-text-decoration:none;text-decoration:none}.menu[data-v-2878a19e]{background-color:#202020;box-sizing:border-box;cursor:pointer;height:100vh;max-width:100%;opacity:.2;position:fixed;top:0;width:100vw;z-index:2000}.column[data-v-2878a19e]{gap:30px}.burger_menu[data-v-2878a19e],.column[data-v-2878a19e]{display:flex;flex-direction:column}.burger_menu[data-v-2878a19e]{background-color:#202020;height:100vh;justify-content:space-between;padding:60px;position:fixed;top:0;width:405px;z-index:2020}@media(max-width:1900px){.burger_menu[data-v-2878a19e]{margin:0 -32px}}',""]),n.locals={},t.exports=n},696:function(t,e,o){"use strict";o.r(e);o(50);var n={data:function(){return{inputPhoneModel:""}},computed:{isItemPage:function(){return"index"!==this.$route.name}}},r=(o(676),o(75)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"popup",class:{margin:t.isItemPage}},[e("div",{staticClass:"login",on:{click:function(e){return t.$store.commit("SET_LOGIN_OPENED",!t.$store.state.login)}}}),t._v(" "),e("div",{staticClass:"loginPopUp"},[e("h3",[t._v("Вход | Регистрация")]),t._v(" "),e("div",{staticClass:"buttons"},[e("input",{directives:[{name:"mask",rawName:"v-mask",value:"+7 (###) ### ## ##",expression:"'+7 (###) ### ## ##'"},{name:"model",rawName:"v-model",value:t.inputPhoneModel,expression:"inputPhoneModel"}],staticClass:"button",attrs:{type:"text",placeholder:"+7"},domProps:{value:t.inputPhoneModel},on:{input:function(e){e.target.composing||(t.inputPhoneModel=e.target.value)}}}),t._v(" "),e("button",{staticClass:"button next"},[t._v("Далее")]),t._v(" "),e("p",[t._v("войти через электронную почту")])])])])}),[],!1,null,"003cae6b",null);e.default=component.exports},698:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAxOSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeDE9IjEiIHkxPSIxNy41IiB4Mj0iMTciIHkyPSIxNy41IiBzdHJva2U9IiM2ODVGNUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxsaW5lIHgxPSIxIiB5MT0iMTAuNSIgeDI9IjE3IiB5Mj0iMTAuNSIgc3Ryb2tlPSIjNjg1RjVGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8bGluZSB4MT0iMSIgeTE9IjMuNSIgeDI9IjE3IiB5Mj0iMy41IiBzdHJva2U9IiM2ODVGNUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo="},699:function(t,e,o){t.exports=o.p+"img/logo.306502a.svg"},700:function(t,e,o){t.exports=o.p+"img/search.54dd31d.svg"},701:function(t,e,o){"use strict";o(664)},702:function(t,e,o){var n=o(73),r=o(178),c=o(703),l=o(678),d=o(679),x=o(704),f=o(705),M=o(706),v=o(707),h=o(708),m=n((function(i){return i[1]})),j=r(c),I=r(l),N=r(d),y=r(x),D=r(f),_=r(M),w=r(v),k=r(h);m.push([t.i,'.mobileMenu[data-v-16a8200f]{background-color:#fff;border-top:1px solid #d3d3d3;bottom:0;display:flex;height:50px;justify-content:space-between;left:0;margin:0 auto;padding:0 30px;position:fixed;right:0;width:100%;z-index:100}.mobileMenu .mobile_button[data-v-16a8200f]{align-items:center;display:flex;flex-direction:column;gap:5px;justify-content:center}.mobileMenu .mobile_button p[data-v-16a8200f]{color:#685f5f;font-family:"Roboto";font-size:10px;font-style:normal;font-weight:500;letter-spacing:-.02em;line-height:12px;text-align:center}.searchButtons[data-v-16a8200f]{align-items:center;display:flex;transition:1s}.searchButtons .search[data-v-16a8200f]{transition:1s}.home[data-v-16a8200f]{align-items:center;background-image:url('+j+");display:flex}.favorite[data-v-16a8200f],.home[data-v-16a8200f]{background-size:24px 24px;height:24px;width:24px}.favorite[data-v-16a8200f]{background-image:url("+I+")}.favorite[data-v-16a8200f]:hover{background-image:url("+N+")}.cart[data-v-16a8200f]{background-image:url("+y+");background-size:24px 24px;height:24px;position:relative;width:24px}.cart[data-v-16a8200f]:hover{background-image:url("+D+")}.account[data-v-16a8200f]{background-image:url("+_+");background-size:24px 24px;cursor:pointer;height:24px;width:24px}.account[data-v-16a8200f]:hover{background-image:url("+w+")}.searchInputWrapper[data-v-16a8200f]{align-items:center;border:1px solid #a9a1a1;border-radius:4px;box-sizing:border-box;display:flex;gap:10px;height:34px;justify-content:space-between;left:6px;max-width:240px;padding:0 6px;top:58px;transition:1s;width:100%}.searchInputWrapper i[data-v-16a8200f]{background-image:url("+k+");cursor:pointer;height:18px;width:18px}.searchInput[data-v-16a8200f]{align-items:center;background-color:inherit;display:flex;font-size:16px;font-weight:400;height:100%;line-height:19px;transition:1s}.searchInput[data-v-16a8200f]::-moz-placeholder{color:#dbd7d2}.searchInput[data-v-16a8200f]::placeholder{color:#dbd7d2}.cartCounter[data-v-16a8200f]{background:#9e8b7b;border:1px solid #fff;border-radius:50%;color:#fff;font-size:13px;height:18px;line-height:15px;margin-left:12px!important;top:0;width:18px}.cartCounter[data-v-16a8200f],a#logo[data-v-16a8200f]{position:absolute;text-align:center}a#logo[data-v-16a8200f]{left:0;margin:0 auto;max-width:91px;right:0;top:8px;transition:all 1s ease}.openedLogo[data-v-16a8200f]{top:28px!important}.burger__menu[data-v-16a8200f]{align-items:center;color:#685f5f;display:flex;font-size:16px;font-weight:400;gap:20px;line-height:19px}.flex[data-v-16a8200f]{align-items:center;gap:15px}header[data-v-16a8200f]{height:58px;position:fixed;top:0;transition:all .5s;width:100%;z-index:2}.opened[data-v-16a8200f]{height:100px!important}.notMainPage[data-v-16a8200f],.opened[data-v-16a8200f]{background:#fff;box-shadow:0 1px 0 0 #bababa}.header[data-v-16a8200f]{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;margin:0 auto;max-width:1676px}button[data-v-16a8200f]{background:none;cursor:pointer}.buttons[data-v-16a8200f]{align-items:center;display:flex;gap:30px}.buttons img[data-v-16a8200f]{cursor:pointer;height:24px;width:24px}@media(max-width:1900px){header[data-v-16a8200f]{padding:0 32px}}@media(max-width:1165px){header[data-v-16a8200f]{padding:0 24px}}@media(max-width:640px){header[data-v-16a8200f]{padding:0 10px}}",""]),m.locals={},t.exports=m},703:function(t,e,o){t.exports=o.p+"img/home.0a93ae8.svg"},704:function(t,e,o){t.exports=o.p+"img/cart.321773a.svg"},705:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAxOSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjY2MDkgNy42NjI4NUMxNy42MzQ2IDcuMjA5NjQgMTcuMjcyMiA2Ljg1NjM0IDE2LjgzNDQgNi44NTcxNEgxMy41Mjg2VjQuMjg1NzFDMTMuNTI4NiAxLjkxODc3IDExLjY3ODUgMCA5LjM5NjI5IDBDNy4xMTQwOSAwIDUuMjY0MDEgMS45MTg3NyA1LjI2NDAxIDQuMjg1NzFWNi44NTcxNEgxLjk1ODE4QzEuNTIwNDIgNi44NTYzNCAxLjE1Nzk3IDcuMjA5NjQgMS4xMzE3MyA3LjY2Mjg1TDAuNDA0NDQ0IDIxLjI4MjlDMC4zMjY4NjEgMjIuNzAwNyAxLjM3MjIzIDIzLjkxNTQgMi43MzkzNCAyMy45OTU5QzIuNzg3NDMgMjMuOTk4NyAyLjgzNTYyIDI0LjAwMDEgMi44ODM4MSAyNEgxNS45MTdDMTcuMjg2NCAyNC4wMDIzIDE4LjM5ODIgMjIuODUyOSAxOC40MDA0IDIxLjQzMjdDMTguNDAwNSAyMS4zODI3IDE4LjM5OTEgMjEuMzMyNyAxOC4zOTY0IDIxLjI4MjlMMTcuNjYwOSA3LjY2Mjg1Wk02LjkxNjkyIDQuMjg1NzFDNi45MTY5MiAyLjg2NTU0IDguMDI2OTYgMS43MTQyOSA5LjM5NjI5IDEuNzE0MjlDMTAuNzY1NiAxLjcxNDI5IDExLjg3NTcgMi44NjU1NCAxMS44NzU3IDQuMjg1NzFWNi44NTcxNEg2LjkxNjkyVjQuMjg1NzFaIiBmaWxsPSIjNjg1RjVGIi8+Cjwvc3ZnPgo="},706:function(t,e,o){t.exports=o.p+"img/account.fbb40ea.svg"},707:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjkxNTUgMTIuNzMzNEMxNS40MzE4IDEyLjczMzQgMTguMjgyMyA5Ljg4Mjk1IDE4LjI4MjMgNi4zNjY3MUMxOC4yODIzIDIuODUwNDcgMTUuNDMxOCAwIDExLjkxNTUgMEM4LjM5OTMgMCA1LjU0ODgzIDIuODUwNDcgNS41NDg4MyA2LjM2NjcxQzUuNTQ4ODMgOS44ODI5NSA4LjM5OTMgMTIuNzMzNCAxMS45MTU1IDEyLjczMzRaIiBmaWxsPSIjNjg1RjVGIi8+CjxwYXRoIGQ9Ik0yMC45ODkxIDIxLjI4MThDMjAuMzI3NCAyMi41MzI1IDE5LjA4NjkgMjMuMjc5MyAxNy42NzIxIDIzLjI3OTNINi4xNTgxNkM0Ljc0NDIgMjMuMjc5MyAzLjUwNTIzIDIyLjUzMjUgMi44NDI3OCAyMS4yODI2QzIuMTgwMzMgMjAuMDMxMSAyLjI2MDAxIDE4LjU4NTkgMy4wOTQzMiAxNy4zNTc5QzMuOTMxNzYgMTYuMTI1OSA1LjE4OTQ4IDE1LjI4MyA2LjYzNjI1IDE0Ljk4NTRDOC4zNjE5IDE0LjYzMDcgMTAuMTM4MyAxNC40NTEgMTEuOTE1NSAxNC40NTFDMTMuNjkyOCAxNC40NTEgMTUuNDY5MiAxNC42MzA3IDE3LjE5NDggMTQuOTg1NEMxOC42NDA4IDE1LjI4MyAxOS44OTkzIDE2LjEyNjcgMjAuNzM5MSAxNy4zNjE4TDIwLjc3NjYgMTcuNDE2NUMyMS41NzE5IDE4LjU4NjcgMjEuNjUxNSAyMC4wMzExIDIwLjk4OTEgMjEuMjgxOFoiIGZpbGw9IiM2ODVGNUYiLz4KPC9zdmc+Cg=="},708:function(t,e,o){t.exports=o.p+"img/loopInput.82be065.svg"},709:function(t,e,o){"use strict";o(665)},710:function(t,e,o){var n=o(73)((function(i){return i[1]}));n.push([t.i,'.jscb[data-v-392bd2c1]{align-items:center;display:flex;gap:20px}.jscb .buttons_help .telegram[data-v-392bd2c1]{height:40px!important;width:40px!important}section[data-v-392bd2c1]{background-color:#f7f7f7;padding-bottom:40px;padding-top:50px}footer[data-v-392bd2c1],section[data-v-392bd2c1]{margin:0 auto;width:100%}footer[data-v-392bd2c1]{align-items:flex-start;gap:100px;height:300px;justify-content:space-between;max-width:1676px}footer[data-v-392bd2c1],form[data-v-392bd2c1]{display:flex}form[data-v-392bd2c1]{gap:40px;margin-bottom:40px}.column[data-v-392bd2c1]{color:#a9a1a1;display:flex;flex-direction:column;font-size:16px;gap:20px;line-height:19px;max-width:338px}.column h5[data-v-392bd2c1]{color:#685f5f;font-family:"Playfair Display",serif;font-size:20px;line-height:27px}.column .links[data-v-392bd2c1]{display:flex;flex-direction:column;gap:30px}.column .links a[data-v-392bd2c1]{color:#848484;-webkit-text-decoration:none;text-decoration:none}.column .links a[data-v-392bd2c1]:hover{color:#5b5353}.left[data-v-392bd2c1]{height:90%;justify-content:space-between;max-width:480px}.left[data-v-392bd2c1],.left .text[data-v-392bd2c1]{display:flex;flex-direction:column}.left .text[data-v-392bd2c1]{gap:20px}.left .text p[data-v-392bd2c1]{color:#a9a1a1;font-size:16px;font-weight:400;line-height:19px}.left h5[data-v-392bd2c1]{color:#685f5f;font-family:"Playfair Display",serif;font-size:36px;font-weight:600;line-height:43px;margin-bottom:35px}.left .form p[data-v-392bd2c1]{font-size:10px}.right[data-v-392bd2c1]{display:flex;font-size:15px;gap:40px;justify-content:space-between;letter-spacing:-.001em;width:100%}input[type=email][data-v-392bd2c1]{background-color:inherit;border-bottom:1px solid #a1a1a1;border-radius:4px;color:#a9a1a1;height:35px;min-width:300px}input[type=email][data-v-392bd2c1]::-moz-placeholder{color:#a9a1a1}input[type=email][data-v-392bd2c1]::placeholder{color:#a9a1a1}button[data-v-392bd2c1]{background-color:inherit;color:#1a1a1a;cursor:pointer;font-size:16px;font-weight:400;line-height:19px;text-align:center}@media(max-width:1500px){.column[data-v-392bd2c1]{width:100%}.left[data-v-392bd2c1]{max-width:228px}.left .text h5[data-v-392bd2c1]{font-size:20px}.column[data-v-392bd2c1]{gap:18px;max-width:228px}.column .links[data-v-392bd2c1],form[data-v-392bd2c1]{gap:20px}form[data-v-392bd2c1]{align-items:flex-end;flex-direction:column}form input[type=email][data-v-392bd2c1]{min-width:0;min-width:auto}.copyright[data-v-392bd2c1]{color:#685f5f;text-align:right}}@media(max-width:1024px){footer[data-v-392bd2c1]{flex-wrap:wrap;gap:70px;height:100%}}@media(max-width:640px){footer[data-v-392bd2c1]{align-items:center;flex-direction:column;flex-wrap:nowrap}}',""]),n.locals={},t.exports=n},712:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjI5Mjg5IDMuMjkyODlDMy42ODM0MiAyLjkwMjM3IDQuMzE2NTggMi45MDIzNyA0LjcwNzExIDMuMjkyODlMOCA2LjU4NTc5TDExLjI5MjkgMy4yOTI4OUMxMS42ODM0IDIuOTAyMzcgMTIuMzE2NiAyLjkwMjM3IDEyLjcwNzEgMy4yOTI4OUMxMy4wOTc2IDMuNjgzNDIgMTMuMDk3NiA0LjMxNjU4IDEyLjcwNzEgNC43MDcxMUw5LjQxNDIxIDhMMTIuNzA3MSAxMS4yOTI5QzEzLjA5NzYgMTEuNjgzNCAxMy4wOTc2IDEyLjMxNjYgMTIuNzA3MSAxMi43MDcxQzEyLjMxNjYgMTMuMDk3NiAxMS42ODM0IDEzLjA5NzYgMTEuMjkyOSAxMi43MDcxTDggOS40MTQyMUw0LjcwNzExIDEyLjcwNzFDNC4zMTY1OCAxMy4wOTc2IDMuNjgzNDIgMTMuMDk3NiAzLjI5Mjg5IDEyLjcwNzFDMi45MDIzNyAxMi4zMTY2IDIuOTAyMzcgMTEuNjgzNCAzLjI5Mjg5IDExLjI5MjlMNi41ODU3OSA4TDMuMjkyODkgNC43MDcxMUMyLjkwMjM3IDQuMzE2NTggMi45MDIzNyAzLjY4MzQyIDMuMjkyODkgMy4yOTI4OVoiIGZpbGw9IiMxODNCNTkiLz4KPC9zdmc+Cg=="}}]);