(window.webpackJsonp=window.webpackJsonp||[]).push([[2,15,23,28],{644:function(t,e,o){t.exports=o.p+"img/heart.f78729b.svg"},645:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjQ5MDcgMjIuNzAwNkMxMS42NTIyIDIyLjc2NyAxMS44MjU0IDIyLjgwMDUgMTIgMjIuNzk5MkMxMi4xNzMzIDIyLjc5OTQgMTIuMzQ0OSAyMi43NjU0IDEyLjUwNSAyMi42OTlDMTIuNjY1IDIyLjYzMjYgMTIuODEwNCAyMi41MzUyIDEyLjkzMjYgMjIuNDEyNUwyMS45MDM1IDEzLjQ0OTZDMjIuNzA5IDEyLjY0MjcgMjMuMzEwNSAxMS42NTU2IDIzLjY1ODMgMTAuNTdDMjQuMDA2IDkuNDg0NDkgMjQuMDg5OSA4LjMzMTc5IDIzLjkwMyA3LjIwNzQxQzIzLjcxNjEgNi4wODMwNCAyMy4yNjM4IDUuMDE5MzQgMjIuNTgzNSA0LjEwNDQyQzIxLjkwMzMgMy4xODk1MSAyMS4wMTQ3IDIuNDQ5NzEgMTkuOTkxMyAxLjk0NjMyQzE4LjcwMDQgMS4zMDIzIDE3LjI0MzQgMS4wNjc1NCAxNS44MTUzIDEuMjczNDJDMTQuMzg3MiAxLjQ3OTMgMTMuMDU2MSAyLjExNjAyIDEyIDMuMDk4NEMxMC45NDQ1IDIuMTE1IDkuNjEzMjggMS40Nzc2MSA4LjE4NDkzIDEuMjcxNjlDNi43NTY1OCAxLjA2NTc3IDUuMjk5MzYgMS4zMDExNyA0LjAwODcgMS45NDYzMkMyLjk4NTM0IDIuNDQ5NzEgMi4wOTY3NCAzLjE4OTUxIDEuNDE2NDkgNC4xMDQ0MkMwLjczNjI0OSA1LjAxOTM0IDAuMjgzOTQzIDYuMDgzMDQgMC4wOTcwNDEgNy4yMDc0MUMtMC4wODk4NjA5IDguMzMxNzkgLTAuMDA1OTc5MzcgOS40ODQ0OSAwLjM0MTczNyAxMC41N0MwLjY4OTQ1NCAxMS42NTU2IDEuMjkxIDEyLjY0MjcgMi4wOTY1NCAxMy40NDk2TDExLjA1OTQgMjIuNDEyNUMxMS4xODI1IDIyLjUzNjIgMTEuMzI5MiAyMi42MzQxIDExLjQ5MDcgMjIuNzAwNloiIGZpbGw9IiM2ODVGNUYiLz4KPC9zdmc+Cg=="},646:function(t,e,o){var content=o(659);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(75).default)("d759cdf2",content,!0,{sourceMap:!1})},658:function(t,e,o){"use strict";o(646)},659:function(t,e,o){var n=o(74)(!1);n.push([t.i,".margin[data-v-4853b814]{margin-top:-110px}.buttons[data-v-4853b814]{display:flex;flex-direction:column;grid-gap:20px;gap:20px;color:#685f5f}.buttons p[data-v-4853b814]{width:100%;text-align:center;font-weight:400;font-size:18px;line-height:22px;cursor:pointer}.buttons .button[data-v-4853b814]{text-align:left;padding:18px 20px;font-weight:600;font-size:20px;line-height:24px;border:1px solid #685f5f;border-radius:4px}.buttons .next[data-v-4853b814]{border:none;text-align:center;color:#fff;font-weight:400;background-color:#a9a1a1;cursor:pointer}.popup[data-v-4853b814]{z-index:300}.login[data-v-4853b814],.popup[data-v-4853b814]{width:100vw;height:100vh;position:fixed}.login[data-v-4853b814]{background-color:#000;opacity:.5}.loginPopUp[data-v-4853b814]{display:flex;flex-direction:column;grid-gap:40px;gap:40px;position:fixed;width:600px;height:420px;background-color:#fff;top:33%;right:0;left:0;margin:0 auto;padding:85px 110px}.loginPopUp h3[data-v-4853b814]{width:100%;text-align:center;font-weight:700;font-size:24px;line-height:28px;color:#685f5f}",""]),t.exports=n},660:function(t,e,o){var content=o(684);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(75).default)("5ae423f6",content,!0,{sourceMap:!1})},662:function(t,e,o){"use strict";o.r(e);o(42);var n={computed:{categories:function(){return this.$store.getters.categories}},methods:{addChecked:function(){this.$emit("updateChecked",this.checkedId)}},mounted:function(){0===this.$store.getters.categories.length&&this.$store.dispatch("fetchCategories")}},r=(o(683),o(76)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"menu",on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}},[e("div",{staticClass:"burger_menu"},[e("div",{staticClass:"top column"},t._l(t.categories,(function(n){return e("div",{key:n.id,staticClass:"filter_categories"},[e("header",[e("div",{staticClass:"left"},[e("img",{attrs:{src:o(682),alt:""}}),t._v(" "),e("h5",{staticClass:"title"},[t._v(t._s(n.name))])]),t._v(" "),e("div",{staticClass:"right"},[e("Nuxt-link",{attrs:{to:"/catalog"},on:{click:function(t){return this.$emit("checked",n.name)}}},[e("p",{on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}},[t._v("больше")])])],1)]),t._v(" "),e("main",t._l(t.$store.state.categoryTags,(function(o){return e("button",{key:o.id,staticClass:"todo"},[t._v(t._s(o))])})),0),t._v(" "),e("hr",{staticStyle:{color:"#7F7777"}})])})),0),t._v(" "),e("div",{staticClass:"bottom column"},[e("Nuxt-Link",{attrs:{to:"/delivery"}},[e("p",{on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}},[t._v("Оплата и доставка")])]),t._v(" "),e("Nuxt-Link",{attrs:{to:"/refund"}},[e("p",{on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}},[t._v("Обмен и возврат")])]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Акции")]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Размерная сетка")]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Частые вопросы")])],1)])])}),[],!1,null,"76f61325",null);e.default=component.exports},663:function(t,e,o){"use strict";o.r(e);o(42);var n={data:function(){return{inputPhoneModel:""}},computed:{isItemPage:function(){return"index"!==this.$route.name}}},r=(o(658),o(76)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"popup",class:{margin:t.isItemPage}},[e("div",{staticClass:"login",on:{click:function(e){return t.$store.commit("SET_LOGIN_OPENED",!t.$store.state.login)}}}),t._v(" "),e("div",{staticClass:"loginPopUp"},[e("h3",[t._v("Вход  |  Регистрация")]),t._v(" "),e("div",{staticClass:"buttons"},[e("input",{directives:[{name:"mask",rawName:"v-mask",value:"+7 (###) ### ## ##",expression:"'+7 (###) ### ## ##'"},{name:"model",rawName:"v-model",value:t.inputPhoneModel,expression:"inputPhoneModel"}],staticClass:"button",attrs:{type:"text",placeholder:"+7"},domProps:{value:t.inputPhoneModel},on:{input:function(e){e.target.composing||(t.inputPhoneModel=e.target.value)}}}),t._v(" "),e("button",{staticClass:"button next"},[t._v("Далее")]),t._v(" "),e("p",[t._v("войти через электронную почту")])])])])}),[],!1,null,"4853b814",null);e.default=component.exports},666:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAxOSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeDE9IjEiIHkxPSIxNy41IiB4Mj0iMTciIHkyPSIxNy41IiBzdHJva2U9IiM2ODVGNUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxsaW5lIHgxPSIxIiB5MT0iMTAuNSIgeDI9IjE3IiB5Mj0iMTAuNSIgc3Ryb2tlPSIjNjg1RjVGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8bGluZSB4MT0iMSIgeTE9IjMuNSIgeDI9IjE3IiB5Mj0iMy41IiBzdHJva2U9IiM2ODVGNUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo="},667:function(t,e,o){t.exports=o.p+"img/logo.4f3659f.svg"},668:function(t,e,o){t.exports=o.p+"img/search.54dd31d.svg"},669:function(t,e,o){t.exports=o.p+"img/cart.321773a.svg"},670:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAxOSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjY2MDkgNy42NjI4NUMxNy42MzQ2IDcuMjA5NjQgMTcuMjcyMiA2Ljg1NjM0IDE2LjgzNDQgNi44NTcxNEgxMy41Mjg2VjQuMjg1NzFDMTMuNTI4NiAxLjkxODc3IDExLjY3ODUgMCA5LjM5NjI5IDBDNy4xMTQwOSAwIDUuMjY0MDEgMS45MTg3NyA1LjI2NDAxIDQuMjg1NzFWNi44NTcxNEgxLjk1ODE4QzEuNTIwNDIgNi44NTYzNCAxLjE1Nzk3IDcuMjA5NjQgMS4xMzE3MyA3LjY2Mjg1TDAuNDA0NDQ0IDIxLjI4MjlDMC4zMjY4NjEgMjIuNzAwNyAxLjM3MjIzIDIzLjkxNTQgMi43MzkzNCAyMy45OTU5QzIuNzg3NDMgMjMuOTk4NyAyLjgzNTYyIDI0LjAwMDEgMi44ODM4MSAyNEgxNS45MTdDMTcuMjg2NCAyNC4wMDIzIDE4LjM5ODIgMjIuODUyOSAxOC40MDA0IDIxLjQzMjdDMTguNDAwNSAyMS4zODI3IDE4LjM5OTEgMjEuMzMyNyAxOC4zOTY0IDIxLjI4MjlMMTcuNjYwOSA3LjY2Mjg1Wk02LjkxNjkyIDQuMjg1NzFDNi45MTY5MiAyLjg2NTU0IDguMDI2OTYgMS43MTQyOSA5LjM5NjI5IDEuNzE0MjlDMTAuNzY1NiAxLjcxNDI5IDExLjg3NTcgMi44NjU1NCAxMS44NzU3IDQuMjg1NzFWNi44NTcxNEg2LjkxNjkyVjQuMjg1NzFaIiBmaWxsPSIjNjg1RjVGIi8+Cjwvc3ZnPgo="},671:function(t,e,o){t.exports=o.p+"img/account.fbb40ea.svg"},672:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjkxNTUgMTIuNzMzNEMxNS40MzE4IDEyLjczMzQgMTguMjgyMyA5Ljg4Mjk1IDE4LjI4MjMgNi4zNjY3MUMxOC4yODIzIDIuODUwNDcgMTUuNDMxOCAwIDExLjkxNTUgMEM4LjM5OTMgMCA1LjU0ODgzIDIuODUwNDcgNS41NDg4MyA2LjM2NjcxQzUuNTQ4ODMgOS44ODI5NSA4LjM5OTMgMTIuNzMzNCAxMS45MTU1IDEyLjczMzRaIiBmaWxsPSIjNjg1RjVGIi8+CjxwYXRoIGQ9Ik0yMC45ODkxIDIxLjI4MThDMjAuMzI3NCAyMi41MzI1IDE5LjA4NjkgMjMuMjc5MyAxNy42NzIxIDIzLjI3OTNINi4xNTgxNkM0Ljc0NDIgMjMuMjc5MyAzLjUwNTIzIDIyLjUzMjUgMi44NDI3OCAyMS4yODI2QzIuMTgwMzMgMjAuMDMxMSAyLjI2MDAxIDE4LjU4NTkgMy4wOTQzMiAxNy4zNTc5QzMuOTMxNzYgMTYuMTI1OSA1LjE4OTQ4IDE1LjI4MyA2LjYzNjI1IDE0Ljk4NTRDOC4zNjE5IDE0LjYzMDcgMTAuMTM4MyAxNC40NTEgMTEuOTE1NSAxNC40NTFDMTMuNjkyOCAxNC40NTEgMTUuNDY5MiAxNC42MzA3IDE3LjE5NDggMTQuOTg1NEMxOC42NDA4IDE1LjI4MyAxOS44OTkzIDE2LjEyNjcgMjAuNzM5MSAxNy4zNjE4TDIwLjc3NjYgMTcuNDE2NUMyMS41NzE5IDE4LjU4NjcgMjEuNjUxNSAyMC4wMzExIDIwLjk4OTEgMjEuMjgxOFoiIGZpbGw9IiM2ODVGNUYiLz4KPC9zdmc+Cg=="},682:function(t,e,o){t.exports=o.p+"img/icon-t-shirt.21369e9.svg"},683:function(t,e,o){"use strict";o(660)},684:function(t,e,o){var n=o(74)(!1);n.push([t.i,'.filter_categories[data-v-76f61325]{display:flex;flex-direction:column;grid-gap:22px;gap:22px}.filter_categories button[data-v-76f61325]{border:1px solid #7f7777;border-radius:30px;padding:4px 16px;background:none;color:#7f7777}.filter_categories main[data-v-76f61325]{display:flex;flex-wrap:wrap;grid-gap:10px;gap:10px}.filter_categories header[data-v-76f61325]{display:flex;justify-content:space-between}.filter_categories header p[data-v-76f61325]{color:#bababa;font-weight:300}.filter_categories .left[data-v-76f61325]{grid-gap:10px;gap:10px;display:flex}.filter_categories .left h5[data-v-76f61325]{font-weight:700;font-size:18px;line-height:21px;color:#fff}.filter_categories .right a[data-v-76f61325]{font-weight:300;font-size:14px;line-height:16px;text-align:center;color:#bababa}a[data-v-76f61325]{font-family:"RF Dewi";font-style:normal;font-weight:400;font-size:20px;line-height:24px;text-decoration:none;color:#bababa}.menu[data-v-76f61325]{box-sizing:border-box;position:fixed;background-color:rgba(32,32,32,0);height:100vh;width:100vw;max-width:100%;top:0;z-index:2000;cursor:pointer}.column[data-v-76f61325]{grid-gap:30px;gap:30px}.burger_menu[data-v-76f61325],.column[data-v-76f61325]{display:flex;flex-direction:column}.burger_menu[data-v-76f61325]{justify-content:space-between;position:absolute;background-color:#202020;top:0;width:405px;height:100vh;padding:60px;z-index:2000}',""]),t.exports=n},713:function(t,e,o){var content=o(746);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(75).default)("4f0d1ef4",content,!0,{sourceMap:!1})},745:function(t,e,o){"use strict";o(713)},746:function(t,e,o){var n=o(74),r=o(175),c=o(644),d=o(645),M=o(669),l=o(670),x=o(671),j=o(672),f=n(!1),N=r(c),I=r(d),D=r(M),v=r(l),y=r(x),h=r(j);f.push([t.i,".cartCounter[data-v-74aece56]{top:0;margin-top:12px!important;margin-left:12px!important;width:18px;height:18px;border-radius:50%;background:#9e8b7b;font-size:13px;line-height:15px;color:#fff;border:1px solid #fff}.cartCounter[data-v-74aece56],a#logo[data-v-74aece56]{position:absolute;text-align:center}a#logo[data-v-74aece56]{margin:0 auto;top:14px;left:0;right:0;max-width:91px}.burger__menu[data-v-74aece56]{display:flex;align-items:center;grid-gap:20px;gap:20px}.flex[data-v-74aece56]{grid-gap:15px;gap:15px;align-items:center}header[data-v-74aece56]{z-index:2;width:100%;position:fixed;top:0}.header[data-v-74aece56]{max-width:1676px;margin:0 auto;height:58px;display:flex;justify-content:space-between;align-items:center}button[data-v-74aece56]{cursor:pointer;background:none}.buttons[data-v-74aece56]{display:flex;align-items:center;grid-gap:30px;gap:30px}.buttons .favorite[data-v-74aece56]{width:24px;height:24px;background-size:24px 24px;background-image:url("+N+")}.buttons .favorite[data-v-74aece56]:hover{background-image:url("+I+")}.buttons .cart[data-v-74aece56]{width:24px;height:24px;background-size:24px 24px;background-image:url("+D+")}.buttons .cart[data-v-74aece56]:hover{background-image:url("+v+")}.buttons .account[data-v-74aece56]{cursor:pointer;width:24px;height:24px;background-size:24px 24px;background-image:url("+y+")}.buttons .account[data-v-74aece56]:hover{background-image:url("+h+")}.buttons img[data-v-74aece56]{width:24px;height:24px;cursor:pointer}",""]),t.exports=f},764:function(t,e,o){"use strict";o.r(e);o(59),o(47),o(43),o(21),o(104),o(48),o(105);var n=o(30),r=o(106);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var M={data:function(){return{scrollPosition:0}},components:{Login:o(663).default},computed:d(d({},Object(r.c)("cart",["getProducts"])),{},{productsQuantity:function(){var t=0;for(var e in this.getProducts)if(Object.hasOwnProperty.call(this.getProducts,e)){var element=this.getProducts[e];0!=element.quantity&&(t+=element.quantity)}return t}})},l=(o(745),o(76)),component=Object(l.a)(M,(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{position:"absolute"}},[e("header",{},[e("div",{staticClass:"header"},[e("div",{staticClass:"flex"},[e("button",{staticClass:"burger__menu",on:{click:function(e){return t.$store.commit("SET_MENU_OPENED",!t.$store.state.burgerMenuOpened)}}},[e("img",{attrs:{src:o(666),alt:""}}),t._v("\n                каталог\n            ")])]),t._v(" "),e("Nuxt-link",{attrs:{id:"logo",to:"/"}},[e("img",{attrs:{src:o(667),alt:""}})]),t._v(" "),e("div",{staticClass:"buttons"},[e("img",{staticClass:"todo search",attrs:{src:o(668),alt:""}}),t._v(" "),e("Nuxt-link",{staticClass:"favorite",attrs:{to:"/favorite"}}),t._v(" "),e("Nuxt-link",{staticClass:"cart",attrs:{to:"/cart"}},[t.productsQuantity>0?e("p",{staticClass:"cartCounter"},[t._v(t._s(t.productsQuantity))]):t._e()]),t._v(" "),e("div",{staticClass:"account",on:{click:function(e){return t.$store.commit("SET_LOGIN_OPENED",!t.$store.state.login)}}})],1)],1)]),t._v(" "),0!=t.$store.state.login?e("Login"):t._e()],1)}),[],!1,null,"74aece56",null);e.default=component.exports},770:function(t,e,o){var content=o(799);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(75).default)("ecc774a6",content,!0,{sourceMap:!1})},794:function(t,e,o){t.exports=o.p+"img/back.5d771a1.jpg"},795:function(t,e,o){t.exports=o.p+"img/back2.e916d4d.jpg"},796:function(t,e,o){t.exports=o.p+"img/back3.9331c0f.jpg"},797:function(t,e,o){t.exports=o.p+"img/slogan.cea88c1.svg"},798:function(t,e,o){"use strict";o(770)},799:function(t,e,o){var n=o(74)(!1);n.push([t.i,".flex[data-v-661b2d9a]{display:flex;flex-direction:column;justify-content:space-between;grid-gap:100px;gap:100px}.swiper-pagination[data-v-661b2d9a]{display:flex;grid-gap:20px;gap:20px;right:60px;position:absolute;align-self:flex-end}section[data-v-661b2d9a]{padding:0!important;margin:0!important}.swiper[data-v-661b2d9a]{overflow:hidden}.swiper[data-v-661b2d9a],section img.slide[data-v-661b2d9a]{position:absolute;width:100%;height:100vh}section img.slide[data-v-661b2d9a]{-o-object-fit:cover;object-fit:cover;z-index:1}.wrapper[data-v-661b2d9a]{height:100vh;display:flex;flex-direction:row;justify-content:center;align-items:center;margin:0 auto}.wrapper img[data-v-661b2d9a]{width:100%;height:auto;z-index:1}main[data-v-661b2d9a]{justify-content:space-between;grid-gap:80px;gap:80px}.assortment[data-v-661b2d9a],main[data-v-661b2d9a]{z-index:1;display:flex;flex-direction:column}.assortment[data-v-661b2d9a]{grid-gap:35px;gap:35px}.assortment a[data-v-661b2d9a]{font-size:15px;text-decoration:none;color:#fff;width:110px}footer[data-v-661b2d9a]{z-index:1;color:#fff}.text[data-v-661b2d9a]{display:flex;grid-gap:10%;gap:10%;padding-bottom:100px}.text h1[data-v-661b2d9a]{font-size:6.35vw}.text h1[data-v-661b2d9a],.text p[data-v-661b2d9a],.text span i[data-v-661b2d9a]{color:#fff}.text p[data-v-661b2d9a]{margin-top:50px;width:33%;font-size:14px}.sale[data-v-661b2d9a],.sale a[data-v-661b2d9a]{z-index:1}.sale a[data-v-661b2d9a]{font-size:15px;color:#fff;text-decoration:none}",""]),t.exports=n},806:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this._self._c;return t("div",{staticClass:"swiper-slide"},[t("img",{staticClass:"slide",attrs:{src:o(795),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"swiper-slide"},[t("img",{staticClass:"slide",attrs:{src:o(796),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"wrapper p60"},[t("div",{staticClass:"flex"},[t("img",{attrs:{src:o(797),alt:""}})])])}],r=o(764),c=o(662),d=o(810),M=o(807),l=o(808),x=o(809);o(656);d.a.use([M.a,l.a,x.a]);var j={props:{photo_1:"",photo_2:"",photo_3:""},mounted:function(){new d.a(".swiper",{slidesPerView:1,autoplay:{delay:1e4},speed:4e3,allowTouchMove:!1,pagination:{clickable:!0,el:".swiper-pagination",modifierClass:".swiper-pagination-header "}})},components:{Header:r.default,BurgerMenu:c.default},name:"IndexPage"},f=(o(798),o(76)),component=Object(f.a)(j,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"swiper"},[e("div",{staticClass:"swiper-wrapper"},[e("div",{staticClass:"swiper-slide"},[e("img",{staticClass:"slide",attrs:{src:o(794),alt:""}})]),t._v(" "),t._m(0),t._v(" "),t._m(1)])]),t._v(" "),t._m(2)])}),n,!1,null,"661b2d9a",null);e.default=component.exports}}]);