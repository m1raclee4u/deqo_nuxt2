(window.webpackJsonp=window.webpackJsonp||[]).push([[9,8],{783:function(t,e,n){"use strict";n.r(e);var o={},l=(n(796),n(23)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"help"},[e("span",[t._v("Возникли вопросы или нужна помощь — свяжитесь с нами:")]),t._v(" "),e("buttons-social")],1)}),[],!1,null,"11230a15",null);e.default=component.exports;installComponents(component,{ButtonsSocial:n(453).default})},786:function(t,e,n){var content=n(797);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("8000abb0",content,!0,{sourceMap:!1})},788:function(t,e,n){var content=n(803);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("5a106c5b",content,!0,{sourceMap:!1})},791:function(t,e,n){"use strict";n.r(e);n(40),n(454),n(118),n(148);var o={components:{AsideHelp:n(783).default},props:{links:Array,orderId:Number},computed:{currentRouteName:function(){return"cart"===this.$route.name?"Корзина":"favorite"===this.$route.name?"Избранное":"catalog"===this.$route.name?"Каталог":"delivery"===this.$route.name?"Доставка":"refund"===this.$route.name?"Обмен и возврат":this.$route.name.includes("edit")?"Личные данные":"profile"===this.$route.name?"Мои заказы":this.$route.name.includes("order")?"Заказ #".concat(null==this?void 0:this.orderId):void 0}}},l=(n(802),n(23)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("aside",{staticClass:"aside"},[e("h3",[t._v(t._s(t.currentRouteName))]),t._v(" "),e("ul",t._l(t.links,(function(link){return e("li",{key:link.id},[e("button",{on:{click:function(e){return t.$router.push("".concat(null==link?void 0:link.slug))}}},[t._v(t._s(link.name))])])})),0),t._v(" "),e("aside-help",{staticClass:"asideHelp"})],1)}),[],!1,null,"6df24810",null);e.default=component.exports;installComponents(component,{AsideHelp:n(783).default})},796:function(t,e,n){"use strict";n(786)},797:function(t,e,n){var o=n(32)((function(i){return i[1]}));o.push([t.i,".help[data-v-11230a15]{display:flex;flex-direction:column;gap:20px;width:270px}.help span[data-v-11230a15]{color:#a9a1a1;font-size:16px;font-weight:400;line-height:160%;text-align:right}@media(max-width:1472px){span[data-v-11230a15]{text-align:left!important}}",""]),o.locals={},t.exports=o},802:function(t,e,n){"use strict";n(788)},803:function(t,e,n){var o=n(32)((function(i){return i[1]}));o.push([t.i,".asideHelp[data-v-6df24810]{display:none}aside[data-v-6df24810]{align-items:flex-start;display:flex;flex-direction:column;gap:45px;text-align:center;width:270px}aside h3[data-v-6df24810]{color:#4a4444;font-size:28px;font-weight:700;line-height:33px}aside ul[data-v-6df24810]{display:flex;flex-direction:column}aside ul a[data-v-6df24810],aside ul button[data-v-6df24810]{color:#a9a1a1;-webkit-text-decoration:none;text-decoration:none}aside ul button[data-v-6df24810]{background:inherit;font-size:20px;margin-left:-15px;padding:14px 20px;text-align:left}aside ul button[data-v-6df24810]:hover{background:#dbd7d2;border-radius:30px;padding:14px 20px}aside ul li[data-v-6df24810]{list-style-type:none;text-align:left;-webkit-text-decoration:none;text-decoration:none}@media(max-width:1472px){.asideHelp[data-v-6df24810]{align-items:flex-start;display:flex!important}.help span[data-v-6df24810]{text-align:left}}",""]),o.locals={},t.exports=o}}]);