(window.webpackJsonp=window.webpackJsonp||[]).push([[26,12,25],{641:function(t,e,o){var content=o(647);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(75).default)("6e5c1d5a",content,!0,{sourceMap:!1})},642:function(t,e,o){var content=o(652);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(75).default)("48b13c4c",content,!0,{sourceMap:!1})},643:function(t,e,o){t.exports=o.p+"img/heart.f78729b.svg"},644:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjQ5MDcgMjIuNzAwNkMxMS42NTIyIDIyLjc2NyAxMS44MjU0IDIyLjgwMDUgMTIgMjIuNzk5MkMxMi4xNzMzIDIyLjc5OTQgMTIuMzQ0OSAyMi43NjU0IDEyLjUwNSAyMi42OTlDMTIuNjY1IDIyLjYzMjYgMTIuODEwNCAyMi41MzUyIDEyLjkzMjYgMjIuNDEyNUwyMS45MDM1IDEzLjQ0OTZDMjIuNzA5IDEyLjY0MjcgMjMuMzEwNSAxMS42NTU2IDIzLjY1ODMgMTAuNTdDMjQuMDA2IDkuNDg0NDkgMjQuMDg5OSA4LjMzMTc5IDIzLjkwMyA3LjIwNzQxQzIzLjcxNjEgNi4wODMwNCAyMy4yNjM4IDUuMDE5MzQgMjIuNTgzNSA0LjEwNDQyQzIxLjkwMzMgMy4xODk1MSAyMS4wMTQ3IDIuNDQ5NzEgMTkuOTkxMyAxLjk0NjMyQzE4LjcwMDQgMS4zMDIzIDE3LjI0MzQgMS4wNjc1NCAxNS44MTUzIDEuMjczNDJDMTQuMzg3MiAxLjQ3OTMgMTMuMDU2MSAyLjExNjAyIDEyIDMuMDk4NEMxMC45NDQ1IDIuMTE1IDkuNjEzMjggMS40Nzc2MSA4LjE4NDkzIDEuMjcxNjlDNi43NTY1OCAxLjA2NTc3IDUuMjk5MzYgMS4zMDExNyA0LjAwODcgMS45NDYzMkMyLjk4NTM0IDIuNDQ5NzEgMi4wOTY3NCAzLjE4OTUxIDEuNDE2NDkgNC4xMDQ0MkMwLjczNjI0OSA1LjAxOTM0IDAuMjgzOTQzIDYuMDgzMDQgMC4wOTcwNDEgNy4yMDc0MUMtMC4wODk4NjA5IDguMzMxNzkgLTAuMDA1OTc5MzcgOS40ODQ0OSAwLjM0MTczNyAxMC41N0MwLjY4OTQ1NCAxMS42NTU2IDEuMjkxIDEyLjY0MjcgMi4wOTY1NCAxMy40NDk2TDExLjA1OTQgMjIuNDEyNUMxMS4xODI1IDIyLjUzNjIgMTEuMzI5MiAyMi42MzQxIDExLjQ5MDcgMjIuNzAwNloiIGZpbGw9IiM2ODVGNUYiLz4KPC9zdmc+Cg=="},646:function(t,e,o){"use strict";o(641)},647:function(t,e,o){var r=o(74),n=o(176),c=o(644),d=o(643),l=r(!1),M=n(c),f=n(d);l.push([t.i,".buttonFavorite[data-v-fd3e7cf4]{position:absolute;top:14px;right:14px}.added[data-v-fd3e7cf4]{background-image:url("+M+")!important}.big[data-v-fd3e7cf4]{width:40px!important;height:40px!important}.like[data-v-fd3e7cf4]{background-image:url("+f+");background-repeat:no-repeat;background-position:50%;background-color:unset;background-size:cover;width:30px;height:30px}.like[data-v-fd3e7cf4]:hover{background-image:url("+M+")}",""]),t.exports=l},649:function(t,e,o){"use strict";o.r(e);o(59),o(47),o(43),o(104),o(48),o(105);var r=o(30),n=(o(246),o(21),o(42),o(106));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{item:{type:Object,required:!0}},computed:d(d({},Object(n.d)({products:function(t){return t.favorites.products}})),{},{isProductAdded:function(){var t=this;return this.products.find((function(p){return p.id===t.item.id}))},currentRoute:function(){return"category-item"===this.$route.name}}),methods:d(d({},Object(n.b)({addProduct:"favorites/addProduct",removeProduct:"favorites/removeProduct"})),{},{buyClickHandler:function(){this.addProduct(this.item)},addedClickHandler:function(){this.removeProduct(this.item.id)}})},M=(o(646),o(76)),component=Object(M.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"buttonFavorite"},[t.isProductAdded?e("button",{staticClass:"like added",class:{big:t.currentRoute},on:{click:function(e){return e.preventDefault(),t.addedClickHandler.apply(null,arguments)}}}):e("button",{staticClass:"like",class:{big:t.currentRoute},on:{click:function(e){return e.preventDefault(),t.buyClickHandler.apply(null,arguments)}}})])}),[],!1,null,"fd3e7cf4",null);e.default=component.exports},651:function(t,e,o){"use strict";o(642)},652:function(t,e,o){var r=o(74)(!1);r.push([t.i,'.input_color_1[data-v-9d4a6dae]{width:16px;height:16px;border-radius:50%}.top[data-v-9d4a6dae]{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;font-weight:400}.top .quantity[data-v-9d4a6dae]{font-size:14px;line-height:17px;color:#a9a1a1;font-weight:400}.tag[data-v-9d4a6dae]{width:58px;height:58px;left:14px;top:14px;border-radius:50%;border:1px solid #685f5f;text-align:center;line-height:100%}.tag[data-v-9d4a6dae],.tag p[data-v-9d4a6dae]{position:absolute}.tag p[data-v-9d4a6dae]{top:17px;left:13px;color:#685f5f}.ItemCart[data-v-9d4a6dae]{position:relative;max-width:387px;width:100%;height:587px;padding-bottom:60px}.ItemCart img[data-v-9d4a6dae]{width:100%;height:auto;background-color:#000;margin-top:100px;margin-bottom:25px}.ItemCart p[data-v-9d4a6dae]{font-family:"RF Dewi";font-style:normal;font-weight:600;font-size:16px;line-height:19px;color:#685f5f}.colors[data-v-9d4a6dae]{grid-gap:10px;gap:10px}.ItemCart__price[data-v-9d4a6dae]{display:flex;align-items:center;grid-gap:30px;gap:30px}.ItemCart__price p[data-v-9d4a6dae]{font-style:normal;font-weight:700;font-size:20px;line-height:23px;color:#685f5f}.ItemCart__price .old[data-v-9d4a6dae]{color:grey;text-decoration:line-through}@media(max-width:1280px){.ItemCart[data-v-9d4a6dae]{padding-bottom:60px}.ItemCart img[data-v-9d4a6dae]{max-width:100%;height:auto;background-color:#000;margin-bottom:25px}.ItemCart p[data-v-9d4a6dae]{margin-bottom:20px;font-size:13px}}',""]),t.exports=r},657:function(t,e,o){"use strict";o.r(e);o(60),o(42);var r=o(649),n=o(809),c=o(806),d=o(807),l=o(808);o(656);n.a.use([c.a,d.a,l.a]);var M={props:{item:{type:Object,required:!0}},data:function(){return{}},components:{ButtonFavorite:r.default}},f=(o(651),o(76)),component=Object(f.a)(M,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"ItemCart"},[e("ButtonFavorite",{attrs:{item:t.item}}),t._v(" "),e("Nuxt-Link",{attrs:{to:"/".concat(t.item.category,"/").concat(t.item.name)}},[e("img",{staticClass:"card__img",attrs:{src:"https://frontend-test.idaproject.com"+t.item.photo,alt:t.item.name}}),t._v(" "),e("div",{staticClass:"tag"},[e("p",[t._v("ХИТ")])])]),t._v(" "),e("div",{staticClass:"top"},[e("p",[t._v(t._s(t.item.name))]),t._v(" "),e("p",{staticClass:"quantity"},[t._v("осталось "+t._s(3)+" шт.")])]),t._v(" "),e("div",{staticClass:"ItemCart__price"},[e("p",[t._v(t._s(t.item.price)+" ₽")]),t._v(" "),e("div",{staticClass:"flex colors"},t._l(t.$store.state.colors,(function(t){return e("div",{key:t.id,staticClass:"input_color_1",attrs:{id:t.id,disabled:""}})})),0)])],1)}),[],!1,null,"9d4a6dae",null);e.default=component.exports},682:function(t,e,o){var content=o(717);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(75).default)("0f0a1264",content,!0,{sourceMap:!1})},716:function(t,e,o){"use strict";o(682)},717:function(t,e,o){var r=o(74)(!1);r.push([t.i,".linkToCatalog[data-v-40485c44]:hover{color:#5b5353}a[data-v-40485c44]{text-decoration:none;color:#b8b8b8}img[data-v-40485c44]{max-width:100%;height:auto}section[data-v-40485c44]{display:flex;flex-direction:column;grid-gap:60px;gap:60px;margin:0 auto;max-width:1676px;width:100%;overflow:hidden}section h2[data-v-40485c44]{font-weight:600;font-size:24px;line-height:29px;color:#685f5f}",""]),t.exports=r},726:function(t,e,o){"use strict";o.r(e);o(77);var r=o(657),n=o(809),c=o(806),d=o(807),l=o(808);o(656);n.a.use([c.a,d.a,l.a]);var M={props:{title:{type:String}},components:{Item:r.default},computed:{products:function(){return this.$store.getters.products},productsInCart:function(){return this.$store.getters.productsInCart}},beforeMount:function(){0===this.$store.getters.products.length&&this.$store.dispatch("fetchProducts"),0===this.$store.getters.categories.length&&this.$store.dispatch("fetchCategories")},mounted:function(){new n.a(".bestsellers",{slidesPerView:4,spaceBetween:40})},updated:function(){new n.a(".bestsellers",{slidesPerView:4,spaceBetween:40})}},f=(o(716),o(76)),component=Object(f.a)(M,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"jcsb"},[e("h2",[t._v(t._s(t.title))]),t._v(" "),e("Nuxt-Link",{staticClass:"linkToCatalog",attrs:{to:"catalog"}},[t._v("смотреть все")])],1),t._v(" "),e("div",{staticClass:"bestsellers"},[e("div",{staticClass:"swiper-wrapper"},t._l(this.products.slice(0,8),(function(t){return e("div",{key:t.id,staticClass:"swiper-slide"},[e("item",{key:t.id,attrs:{item:t}})],1)})),0)])])}),[],!1,null,"40485c44",null);e.default=component.exports}}]);