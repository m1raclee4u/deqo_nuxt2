(window.webpackJsonp=window.webpackJsonp||[]).push([[36,18,22],{642:function(t,e,o){var content=o(648);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(75).default)("6e5c1d5a",content,!0,{sourceMap:!1})},643:function(t,e,o){var content=o(653);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(75).default)("48b13c4c",content,!0,{sourceMap:!1})},647:function(t,e,o){"use strict";o(642)},648:function(t,e,o){var r=o(74),c=o(175),n=o(645),d=o(644),l=r(!1),f=c(n),v=c(d);l.push([t.i,".buttonFavorite[data-v-fd3e7cf4]{position:absolute;top:14px;right:14px}.added[data-v-fd3e7cf4]{background-image:url("+f+")!important}.big[data-v-fd3e7cf4]{width:40px!important;height:40px!important}.like[data-v-fd3e7cf4]{background-image:url("+v+");background-repeat:no-repeat;background-position:50%;background-color:unset;background-size:cover;width:30px;height:30px}.like[data-v-fd3e7cf4]:hover{background-image:url("+f+")}",""]),t.exports=l},650:function(t,e,o){"use strict";o.r(e);o(59),o(47),o(43),o(104),o(48),o(105);var r=o(30),c=(o(245),o(21),o(42),o(106));function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{item:{type:Object,required:!0}},computed:d(d({},Object(c.d)({products:function(t){return t.favorites.products}})),{},{isProductAdded:function(){var t=this;return this.products.find((function(p){return p.id===t.item.id}))},currentRoute:function(){return"category-item"===this.$route.name}}),methods:d(d({},Object(c.b)({addProduct:"favorites/addProduct",removeProduct:"favorites/removeProduct"})),{},{buyClickHandler:function(){this.addProduct(this.item)},addedClickHandler:function(){this.removeProduct(this.item.id)}})},f=(o(647),o(76)),component=Object(f.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"buttonFavorite"},[t.isProductAdded?e("button",{staticClass:"like added",class:{big:t.currentRoute},on:{click:function(e){return e.preventDefault(),t.addedClickHandler.apply(null,arguments)}}}):e("button",{staticClass:"like",class:{big:t.currentRoute},on:{click:function(e){return e.preventDefault(),t.buyClickHandler.apply(null,arguments)}}})])}),[],!1,null,"fd3e7cf4",null);e.default=component.exports},652:function(t,e,o){"use strict";o(643)},653:function(t,e,o){var r=o(74)(!1);r.push([t.i,'.input_color_1[data-v-9d4a6dae]{width:16px;height:16px;border-radius:50%}.top[data-v-9d4a6dae]{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;font-weight:400}.top .quantity[data-v-9d4a6dae]{font-size:14px;line-height:17px;color:#a9a1a1;font-weight:400}.tag[data-v-9d4a6dae]{width:58px;height:58px;left:14px;top:14px;border-radius:50%;border:1px solid #685f5f;text-align:center;line-height:100%}.tag[data-v-9d4a6dae],.tag p[data-v-9d4a6dae]{position:absolute}.tag p[data-v-9d4a6dae]{top:17px;left:13px;color:#685f5f}.ItemCart[data-v-9d4a6dae]{position:relative;max-width:387px;width:100%;height:587px;padding-bottom:60px}.ItemCart img[data-v-9d4a6dae]{width:100%;height:auto;background-color:#000;margin-top:100px;margin-bottom:25px}.ItemCart p[data-v-9d4a6dae]{font-family:"RF Dewi";font-style:normal;font-weight:600;font-size:16px;line-height:19px;color:#685f5f}.colors[data-v-9d4a6dae]{grid-gap:10px;gap:10px}.ItemCart__price[data-v-9d4a6dae]{display:flex;align-items:center;grid-gap:30px;gap:30px}.ItemCart__price p[data-v-9d4a6dae]{font-style:normal;font-weight:700;font-size:20px;line-height:23px;color:#685f5f}.ItemCart__price .old[data-v-9d4a6dae]{color:grey;text-decoration:line-through}@media(max-width:1280px){.ItemCart[data-v-9d4a6dae]{padding-bottom:60px}.ItemCart img[data-v-9d4a6dae]{max-width:100%;height:auto;background-color:#000;margin-bottom:25px}.ItemCart p[data-v-9d4a6dae]{margin-bottom:20px;font-size:13px}}',""]),t.exports=r},655:function(t,e,o){"use strict";o.r(e);o(60),o(42);var r=o(650),c=o(810),n=o(807),d=o(808),l=o(809);o(656);c.a.use([n.a,d.a,l.a]);var f={props:{item:{type:Object,required:!0}},data:function(){return{}},components:{ButtonFavorite:r.default}},v=(o(652),o(76)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"ItemCart"},[e("ButtonFavorite",{attrs:{item:t.item}}),t._v(" "),e("Nuxt-Link",{attrs:{to:"/".concat(t.item.category,"/").concat(t.item.name)}},[e("img",{staticClass:"card__img",attrs:{src:"https://frontend-test.idaproject.com"+t.item.photo,alt:t.item.name}}),t._v(" "),e("div",{staticClass:"tag"},[e("p",[t._v("ХИТ")])])]),t._v(" "),e("div",{staticClass:"top"},[e("p",[t._v(t._s(t.item.name))]),t._v(" "),e("p",{staticClass:"quantity"},[t._v("осталось "+t._s(3)+" шт.")])]),t._v(" "),e("div",{staticClass:"ItemCart__price"},[e("p",[t._v(t._s(t.item.price)+" ₽")]),t._v(" "),e("div",{staticClass:"flex colors"},t._l(t.$store.state.colors,(function(t){return e("div",{key:t.id,staticClass:"input_color_1",attrs:{id:t.id,disabled:""}})})),0)])],1)}),[],!1,null,"9d4a6dae",null);e.default=component.exports},661:function(t,e,o){var content=o(686);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(75).default)("42ea5753",content,!0,{sourceMap:!1})},664:function(t,e,o){"use strict";o.r(e);var r={},c=(o(685),o(76)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("section",[e("footer",{},[t._m(0),t._v(" "),e("div",{staticClass:"right"},[e("div",{staticClass:"column"},[e("h5",[t._v("Информация")]),t._v(" "),e("div",{staticClass:"links"},[e("Nuxt-Link",{attrs:{to:"/delivery"}},[t._v("Оплата и доставка")]),t._v(" "),e("Nuxt-Link",{attrs:{to:"/refund"}},[t._v("Обмен и возврат")]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Оферта")]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Политика конфиденциальности")]),t._v(" "),e("Nuxt-Link",{staticClass:"todo",attrs:{to:""}},[t._v("Пользовательское соглашение")])],1)]),t._v(" "),t._m(1)])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"left"},[e("div",{staticClass:"text"},[e("h5",[t._v("Получайте скидки")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")])]),t._v(" "),e("div",{staticClass:"form"},[e("form",{attrs:{action:""}},[e("input",{attrs:{type:"email",name:"",placeholder:"Введите своей email",id:"email"}}),t._v(" "),e("button",{attrs:{type:"submit"}},[t._v("Отправить")])]),t._v(" "),e("p",[t._v("DEQO 2023")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"column"},[e("h5",[t._v("Контакты")]),t._v(" "),e("div",{staticClass:"links"},[e("a",{attrs:{href:"mailto:example@mail.ru"}},[t._v("example@mail.ru")]),t._v(" "),e("a",{attrs:{href:"tel:+7 (822) 156-90-15"}},[t._v("+7 (822) 156-90-15")])])])}],!1,null,"44c2c4c4",null);e.default=component.exports},679:function(t,e,o){var content=o(715);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(75).default)("7cad3493",content,!0,{sourceMap:!1})},685:function(t,e,o){"use strict";o(661)},686:function(t,e,o){var r=o(74)(!1);r.push([t.i,"section[data-v-44c2c4c4]{margin:0 auto;width:100%;padding:50px 0 40px;background-color:#f7f7f7}footer[data-v-44c2c4c4]{justify-content:space-between;align-items:flex-start;height:300px;max-width:1676px;margin:0 auto}footer[data-v-44c2c4c4],form[data-v-44c2c4c4]{display:flex}form[data-v-44c2c4c4]{grid-gap:40px;gap:40px;margin-bottom:40px}.left[data-v-44c2c4c4]{height:90%;justify-content:space-between;max-width:480px}.left[data-v-44c2c4c4],.left .text[data-v-44c2c4c4]{display:flex;flex-direction:column}.left .text[data-v-44c2c4c4]{grid-gap:20px;gap:20px}.left .text p[data-v-44c2c4c4]{font-weight:400;font-size:16px;line-height:19px;color:#a9a1a1}.left h5[data-v-44c2c4c4]{font-weight:600;font-size:36px;line-height:43px;color:#685f5f;margin-bottom:35px}.left .form p[data-v-44c2c4c4]{font-size:10px}.right[data-v-44c2c4c4]{display:flex;grid-gap:150px;gap:150px;font-size:15px;letter-spacing:-.001em}.right .column[data-v-44c2c4c4]{display:flex;grid-gap:50px;gap:50px;font-size:16px;line-height:19px;color:#a9a1a1}.right .column h5[data-v-44c2c4c4]{font-weight:600;font-size:18px;line-height:21px;color:#685f5f}.right .links[data-v-44c2c4c4]{display:flex;flex-direction:column;grid-gap:30px;gap:30px}.right .links a[data-v-44c2c4c4]{text-decoration:none;color:#848484}input[type=email][data-v-44c2c4c4]{background-color:inherit;min-width:300px;height:35px;border-radius:4px;color:#a9a1a1;border-bottom:1px solid #a1a1a1}input[type=email][data-v-44c2c4c4]::-moz-placeholder{color:#a9a1a1}input[type=email][data-v-44c2c4c4]::placeholder{color:#a9a1a1}button[data-v-44c2c4c4]{background-color:inherit;font-weight:400;font-size:16px;line-height:19px;text-align:center;cursor:pointer;color:#1a1a1a}@media(max-width:1200px){.right .column[data-v-44c2c4c4]{flex-direction:column;grid-gap:30px;gap:30px}}",""]),t.exports=r},711:function(t,e,o){t.exports=o.p+"img/bc0e3668564533.5b6171f3d0b17.cb3a441.jpg"},712:function(t,e,o){var content=o(744);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(75).default)("dd36031a",content,!0,{sourceMap:!1})},714:function(t,e,o){"use strict";o(679)},715:function(t,e,o){var r=o(74)(!1);r.push([t.i,"a[data-v-727fa116]{text-decoration:none;color:#b8b8b8}img[data-v-727fa116]{max-width:100%;height:auto}section[data-v-727fa116]{margin:0 auto;max-width:1676px;width:100%;overflow:hidden}section h2[data-v-727fa116]{padding-bottom:60px;font-weight:600;font-size:24px;line-height:29px;color:#685f5f}",""]),t.exports=r},723:function(t,e,o){"use strict";o.r(e);o(77);var r=o(655),c=o(810),n=o(807),d=o(808),l=o(809);o(656);c.a.use([n.a,d.a,l.a]);var f={props:{title:{type:String}},components:{Item:r.default},computed:{products:function(){return this.$store.getters.products},productsInCart:function(){return this.$store.getters.productsInCart}},beforeMount:function(){0===this.$store.getters.products.length&&this.$store.dispatch("fetchProducts"),0===this.$store.getters.categories.length&&this.$store.dispatch("fetchCategories")},mounted:function(){new c.a(".bestsellers",{slidesPerView:4,spaceBetween:40})},updated:function(){new c.a(".bestsellers",{slidesPerView:4,spaceBetween:40})}},v=(o(714),o(76)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"jcsb"},[e("h2",[t._v(t._s(t.title))]),t._v(" "),e("Nuxt-Link",{attrs:{to:"catalog"}},[t._v("смотреть все")])],1),t._v(" "),e("div",{staticClass:"bestsellers"},[e("div",{staticClass:"swiper-wrapper"},t._l(this.products.slice(0,8),(function(t){return e("div",{key:t.id,staticClass:"swiper-slide"},[e("item",{key:t.id,attrs:{item:t}})],1)})),0)])])}),[],!1,null,"727fa116",null);e.default=component.exports},743:function(t,e,o){"use strict";o(712)},744:function(t,e,o){var r=o(74)(!1);r.push([t.i,"section[data-v-c4a56ca6]{max-width:1920px;margin:0 auto;width:100%;padding:100px 0}.collections[data-v-c4a56ca6]{display:flex;align-items:flex-start;grid-gap:5.2631578947%;gap:5.2631578947%}.collection_right[data-v-c4a56ca6]{display:flex;flex-direction:column-reverse}.collection_left[data-v-c4a56ca6]{display:flex;flex-direction:column}img[data-v-c4a56ca6]{width:100%;height:auto}.left[data-v-c4a56ca6]{margin:2vh 0 0}.right[data-v-c4a56ca6]{margin:0 0 2vh}.text h3[data-v-c4a56ca6]{font-size:calc(8.5px + 3.90625vw);letter-spacing:-.04em}.text p[data-v-c4a56ca6]{font-size:calc(10.5px + .46875vw);letter-spacing:-.025em;line-height:30px}@media(max-width:768px){.collection_right[data-v-c4a56ca6],.collections[data-v-c4a56ca6]{flex-direction:column}.collection_right[data-v-c4a56ca6]{margin-top:4vh}.collection_right .right[data-v-c4a56ca6]{margin:2vh 0 0}}",""]),t.exports=r},771:function(t,e,o){var content=o(801);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(75).default)("08529962",content,!0,{sourceMap:!1})},778:function(t,e,o){"use strict";o.r(e);var r=[function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"collections p60"},[e("div",{staticClass:"collection_left"},[e("img",{attrs:{src:o(711),alt:""}}),t._v(" "),e("div",{staticClass:"text"},[e("h3",{staticClass:"left"},[t._v("Living large in a  small space")]),t._v(" "),e("p",{staticClass:"left"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsum totam ipsa dolorem facilis temporibus quam, inventore nostrum accusantium nesciunt fugiat cum aperiam id provident ex praesentium quibusdam optio molestias, unde consequatur. Eum necessitatibus natus maiores eveniet quidem sapiente illo?")])])]),t._v(" "),e("div",{staticClass:"collection_right"},[e("img",{attrs:{src:o(711),alt:""}}),t._v(" "),e("div",{staticClass:"text"},[e("h3",{staticClass:"right"},[t._v("We’ve got some ideas \n                on how to decorate \n                ")]),t._v(" "),e("p",{staticClass:"right"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsum totam ipsa dolorem facilis temporibus quam, inventore nostrum accusantium nesciunt fugiat cum aperiam id provident ex praesentium quibusdam optio molestias, unde consequatur. Eum necessitatibus natus maiores eveniet quidem sapiente illo?")])])])])])}],c={},n=(o(743),o(76)),component=Object(n.a)(c,(function(){this._self._c;return this._m(0)}),r,!1,null,"c4a56ca6",null);e.default=component.exports},800:function(t,e,o){"use strict";o(771)},801:function(t,e,o){var r=o(74)(!1);r.push([t.i,".wrapper[data-v-3a3be569]{margin:0}",""]),t.exports=r},816:function(t,e,o){"use strict";o.r(e);var r=o(778),c=o(764),n=o(664),d=o(723),l=o(806),f=o(662),v={components:{HeaderSlider:l.default,Collections:r.default,Footer:n.default,BurgerMenu:f.default,Header:c.default,ItemsSlider:d.default},name:"IndexPage"},m=(o(800),o(76)),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e("Header"),t._v(" "),0!=t.$store.state.burgerMenuOpened?e("BurgerMenu"):t._e(),t._v(" "),e("HeaderSlider",{attrs:{photo_1:"back"}}),t._v(" "),e("ItemsSlider",{attrs:{title:"Bestsellers"}}),t._v(" "),e("ItemsSlider",{attrs:{title:"Новинки"}}),t._v(" "),e("HeaderSlider"),t._v(" "),e("ItemsSlider",{attrs:{title:"deqo + LaPizza"}}),t._v(" "),e("HeaderSlider"),t._v(" "),e("ItemsSlider",{attrs:{title:"Новая категория"}}),t._v(" "),e("Footer")],1)}),[],!1,null,"3a3be569",null);e.default=component.exports}}]);