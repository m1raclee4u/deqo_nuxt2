(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{682:function(e,t,r){var content=r(717);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(74).default)("ae719e96",content,!0,{sourceMap:!1})},705:function(e,t,r){"use strict";r.r(t);r(61),r(50),r(42),r(104),r(51),r(105);var o=r(7),n=r(38),c=(r(43),r(245),r(22),r(62),r(106));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={props:{item:{type:Object,required:!0},sizeChecked:{},colorChecked:{}},computed:f(f({itemComputed:function(){return JSON.parse(JSON.stringify(this.item))}},Object(c.d)({products:function(e){return e.cart.products}})),{},{isProductAdded:function(){var e=this;return this.products.find((function(p){if(p.id===e.itemComputed.id&&p.color===e.itemComputed.color&&p.size===e.itemComputed.size)return!0}))}}),methods:f(f({},Object(c.b)({addProduct:"cart/addProduct"})),{},{buyClickHandler:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(function(e){return new Promise((function(t){return setTimeout(t,e)}))}),e.$set(e.itemComputed,"color",e.colorChecked),e.$set(e.itemComputed,"quantity",1),console.log(e.itemComputed),e.addProduct(e.itemComputed);case 5:case"end":return t.stop()}}),t)})))()}})},m=(r(716),r(75)),component=Object(m.a)(l,(function(){var e=this,t=e._self._c;return e.isProductAdded?t("button",{staticClass:"remove",on:{click:function(t){return e.$router.push("/cart")}}},[e._v("\n  Перейти в корзину\n")]):t("button",{on:{click:e.buyClickHandler}},[e._v("\n  Добавить в корзину\n")])}),[],!1,null,"269e8e36",null);t.default=component.exports},716:function(e,t,r){"use strict";r(682)},717:function(e,t,r){var o=r(73)((function(i){return i[1]}));o.push([e.i,".remove[data-v-269e8e36]{background:#fff;color:#685f5f}.remove[data-v-269e8e36],button[data-v-269e8e36]{border:2px solid #685f5f;border-radius:4px}button[data-v-269e8e36]{background:#685f5f;color:#fff;cursor:pointer;font-size:20px;height:60px;line-height:24px;text-align:center;width:100%}",""]),o.locals={},e.exports=o}}]);