(window.webpackJsonp=window.webpackJsonp||[]).push([[33,6,10],{642:function(e,t,o){var content=o(648);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(75).default)("6e5c1d5a",content,!0,{sourceMap:!1})},643:function(e,t,o){var content=o(653);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(75).default)("48b13c4c",content,!0,{sourceMap:!1})},647:function(e,t,o){"use strict";o(642)},648:function(e,t,o){var r=o(74),d=o(175),c=o(645),n=o(644),l=r(!1),f=d(c),h=d(n);l.push([e.i,".buttonFavorite[data-v-fd3e7cf4]{position:absolute;top:14px;right:14px}.added[data-v-fd3e7cf4]{background-image:url("+f+")!important}.big[data-v-fd3e7cf4]{width:40px!important;height:40px!important}.like[data-v-fd3e7cf4]{background-image:url("+h+");background-repeat:no-repeat;background-position:50%;background-color:unset;background-size:cover;width:30px;height:30px}.like[data-v-fd3e7cf4]:hover{background-image:url("+f+")}",""]),e.exports=l},650:function(e,t,o){"use strict";o.r(t);o(59),o(47),o(43),o(104),o(48),o(105);var r=o(30),d=(o(245),o(21),o(42),o(106));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function n(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={props:{item:{type:Object,required:!0}},computed:n(n({},Object(d.d)({products:function(e){return e.favorites.products}})),{},{isProductAdded:function(){var e=this;return this.products.find((function(p){return p.id===e.item.id}))},currentRoute:function(){return"category-item"===this.$route.name}}),methods:n(n({},Object(d.b)({addProduct:"favorites/addProduct",removeProduct:"favorites/removeProduct"})),{},{buyClickHandler:function(){this.addProduct(this.item)},addedClickHandler:function(){this.removeProduct(this.item.id)}})},f=(o(647),o(76)),component=Object(f.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"buttonFavorite"},[e.isProductAdded?t("button",{staticClass:"like added",class:{big:e.currentRoute},on:{click:function(t){return t.preventDefault(),e.addedClickHandler.apply(null,arguments)}}}):t("button",{staticClass:"like",class:{big:e.currentRoute},on:{click:function(t){return t.preventDefault(),e.buyClickHandler.apply(null,arguments)}}})])}),[],!1,null,"fd3e7cf4",null);t.default=component.exports},652:function(e,t,o){"use strict";o(643)},653:function(e,t,o){var r=o(74)(!1);r.push([e.i,'.input_color_1[data-v-9d4a6dae]{width:16px;height:16px;border-radius:50%}.top[data-v-9d4a6dae]{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;font-weight:400}.top .quantity[data-v-9d4a6dae]{font-size:14px;line-height:17px;color:#a9a1a1;font-weight:400}.tag[data-v-9d4a6dae]{width:58px;height:58px;left:14px;top:14px;border-radius:50%;border:1px solid #685f5f;text-align:center;line-height:100%}.tag[data-v-9d4a6dae],.tag p[data-v-9d4a6dae]{position:absolute}.tag p[data-v-9d4a6dae]{top:17px;left:13px;color:#685f5f}.ItemCart[data-v-9d4a6dae]{position:relative;max-width:387px;width:100%;height:587px;padding-bottom:60px}.ItemCart img[data-v-9d4a6dae]{width:100%;height:auto;background-color:#000;margin-top:100px;margin-bottom:25px}.ItemCart p[data-v-9d4a6dae]{font-family:"RF Dewi";font-style:normal;font-weight:600;font-size:16px;line-height:19px;color:#685f5f}.colors[data-v-9d4a6dae]{grid-gap:10px;gap:10px}.ItemCart__price[data-v-9d4a6dae]{display:flex;align-items:center;grid-gap:30px;gap:30px}.ItemCart__price p[data-v-9d4a6dae]{font-style:normal;font-weight:700;font-size:20px;line-height:23px;color:#685f5f}.ItemCart__price .old[data-v-9d4a6dae]{color:grey;text-decoration:line-through}@media(max-width:1280px){.ItemCart[data-v-9d4a6dae]{padding-bottom:60px}.ItemCart img[data-v-9d4a6dae]{max-width:100%;height:auto;background-color:#000;margin-bottom:25px}.ItemCart p[data-v-9d4a6dae]{margin-bottom:20px;font-size:13px}}',""]),e.exports=r},655:function(e,t,o){"use strict";o.r(t);o(60),o(42);var r=o(650),d=o(810),c=o(807),n=o(808),l=o(809);o(656);d.a.use([c.a,n.a,l.a]);var f={props:{item:{type:Object,required:!0}},data:function(){return{}},components:{ButtonFavorite:r.default}},h=(o(652),o(76)),component=Object(h.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"ItemCart"},[t("ButtonFavorite",{attrs:{item:e.item}}),e._v(" "),t("Nuxt-Link",{attrs:{to:"/".concat(e.item.category,"/").concat(e.item.name)}},[t("img",{staticClass:"card__img",attrs:{src:"https://frontend-test.idaproject.com"+e.item.photo,alt:e.item.name}}),e._v(" "),t("div",{staticClass:"tag"},[t("p",[e._v("ХИТ")])])]),e._v(" "),t("div",{staticClass:"top"},[t("p",[e._v(e._s(e.item.name))]),e._v(" "),t("p",{staticClass:"quantity"},[e._v("осталось "+e._s(3)+" шт.")])]),e._v(" "),t("div",{staticClass:"ItemCart__price"},[t("p",[e._v(e._s(e.item.price)+" ₽")]),e._v(" "),t("div",{staticClass:"flex colors"},e._l(e.$store.state.colors,(function(e){return t("div",{key:e.id,staticClass:"input_color_1",attrs:{id:e.id,disabled:""}})})),0)])],1)}),[],!1,null,"9d4a6dae",null);t.default=component.exports},701:function(e,t,o){var content=o(740);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(75).default)("2c2f2db0",content,!0,{sourceMap:!1})},702:function(e,t,o){var content=o(742);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(75).default)("70941e2b",content,!0,{sourceMap:!1})},739:function(e,t,o){"use strict";o(701)},740:function(e,t,o){var r=o(74)(!1);r.push([e.i,'.sizes[data-v-77ec3c40]{display:flex;flex-wrap:wrap;grid-gap:14px;gap:14px}.custom-radio[data-v-77ec3c40]{position:absolute;z-index:-1;opacity:0}.custom-radio+label[data-v-77ec3c40]{display:inline-flex;align-items:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;content:"";display:inline-block;width:1em;height:1em;flex-shrink:0;flex-grow:0;border:1px solid #adb5bd;border-radius:50%;margin-right:.5em;background-repeat:no-repeat;background-position:50%;background-size:50% 50%}.custom-radio:checked+label[data-v-77ec3c40]{border-color:#0b76ef;background-color:#0b76ef}.custom-radio:not(:disabled):not(:checked)+label[data-v-77ec3c40]:hover{border-color:#b3d7ff}.custom-radio:not(:disabled):active+label[data-v-77ec3c40]{background-color:#b3d7ff;border-color:#b3d7ff}.custom-radio:focus+label[data-v-77ec3c40]{box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-radio:focus:not(:checked)+label[data-v-77ec3c40]{border-color:#80bdff}.custom-radio:disabled+label[data-v-77ec3c40]{background-color:#e9ecef}.colors[data-v-77ec3c40]{display:flex;flex-direction:column;grid-gap:25px;gap:25px;width:280px}.colors h3[data-v-77ec3c40]{font-weight:600;font-size:20px;line-height:24px;color:#685f5f}',""]),e.exports=r},741:function(e,t,o){"use strict";o(702)},742:function(e,t,o){var r=o(74)(!1);r.push([e.i,'.colors_row[data-v-1e4240e0]{display:flex;flex-wrap:wrap;grid-gap:10px;gap:10px}.custom-radio[data-v-1e4240e0]{position:absolute;z-index:-1;opacity:0}.custom-radio+label[data-v-1e4240e0]{display:inline-flex;align-items:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;content:"";display:inline-block;width:1em;height:1em;flex-shrink:0;flex-grow:0;border:1px solid #adb5bd;border-radius:50%;margin-right:.5em;background-repeat:no-repeat;background-position:50%;background-size:50% 50%}.custom-radio:checked+label[data-v-1e4240e0]{border-color:#0b76ef;background-color:#0b76ef}.custom-radio:not(:disabled):not(:checked)+label[data-v-1e4240e0]:hover{border-color:#b3d7ff}.custom-radio:not(:disabled):active+label[data-v-1e4240e0]{background-color:#b3d7ff;border-color:#b3d7ff}.custom-radio:focus+label[data-v-1e4240e0]{box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-radio:focus:not(:checked)+label[data-v-1e4240e0]{border-color:#80bdff}.custom-radio:disabled+label[data-v-1e4240e0]{background-color:#e9ecef}.colors[data-v-1e4240e0]{display:flex;flex-direction:column;grid-gap:25px;gap:25px;width:280px}.colors span[data-v-1e4240e0]{word-wrap:break-word}.colors h3[data-v-1e4240e0]{font-weight:600;font-size:20px;line-height:24px;color:#685f5f}',""]),e.exports=r},763:function(e,t,o){"use strict";o.r(t);var r={data:function(){return{checkedColor:[]}},methods:{addCheckedColor:function(){this.$emit("updateCheckedColor",this.checkedColor)}}},d=(o(739),o(76)),component=Object(d.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"colors"},[t("h3",[e._v("Размер")]),e._v(" "),t("div",{staticClass:"sizes flex"},e._l(e.$store.state.sizes,(function(o){return t("div",{key:o.id,staticClass:"form_radio_btn"},[t("input",{attrs:{name:"size",type:"checkbox",id:o},domProps:{value:o}}),e._v(" "),t("label",{attrs:{id:o,for:o}},[e._v(e._s(o))])])})),0)])}),[],!1,null,"77ec3c40",null);t.default=component.exports},766:function(e,t,o){var content=o(787);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(75).default)("590d4978",content,!0,{sourceMap:!1})},777:function(e,t,o){"use strict";o.r(t);o(60),o(77),o(42);var r={data:function(){return{checkedColor:[],aCheckedColors:[]}},methods:{addCheckedColor:function(){for(var e in this.aCheckedColors=[],this.checkedColor)if(Object.hasOwnProperty.call(this.checkedColor,e)){var element=this.checkedColor[e];this.aCheckedColors.push(String(element.name))}this.aCheckedColors=String(this.aCheckedColors),this.$emit("updateCheckedColor",this.checkedColor)}}},d=(o(741),o(76)),component=Object(d.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"colors"},[t("h3",[e._v("Цвет "),""!=e.checkedColor?t("span",[e._v(e._s(e.aCheckedColors))]):e._e()]),e._v(" "),t("div",{staticClass:"flex colors_row"},e._l(e.$store.state.colors,(function(o){return t("div",{key:o.id,staticClass:"form_radio_btn_color"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedColor,expression:"checkedColor"}],attrs:{name:"color",type:"checkbox",id:o.id},domProps:{value:o,checked:Array.isArray(e.checkedColor)?e._i(e.checkedColor,o)>-1:e.checkedColor},on:{change:[function(t){var r=e.checkedColor,d=t.target,c=!!d.checked;if(Array.isArray(r)){var n=o,l=e._i(r,n);d.checked?l<0&&(e.checkedColor=r.concat([n])):l>-1&&(e.checkedColor=r.slice(0,l).concat(r.slice(l+1)))}else e.checkedColor=c},e.addCheckedColor]}}),e._v(" "),t("label",{attrs:{id:o.id,for:o.id}})])})),0)])}),[],!1,null,"1e4240e0",null);t.default=component.exports},786:function(e,t,o){"use strict";o(766)},787:function(e,t,o){var r=o(74),d=o(175),c=o(700),n=r(!1),l=d(c);n.push([e.i,".Breadcrumbs[data-v-09ba4c8f]{width:100%}.delete[data-v-09ba4c8f]{display:block;flex-shrink:0;width:11px;height:11px;margin-right:9px;background:url("+l+");background-size:cover;cursor:pointer}button[data-v-09ba4c8f]{font-size:11px;padding:10px 9px;font-weight:600}.aic[data-v-09ba4c8f],button[data-v-09ba4c8f]{display:flex;align-items:center}.aic[data-v-09ba4c8f]{position:relative;width:100%;margin-bottom:40px;min-height:32px;grid-gap:20px;gap:20px}.aic p[data-v-09ba4c8f]{font-style:normal;font-weight:400;font-size:16px;line-height:19px;color:#a9a1a1}.items__main[data-v-09ba4c8f]{width:100%}.items__main button[data-v-09ba4c8f]{margin:40px auto 0;justify-content:center;align-items:center;padding:20px 109px;grid-gap:10px;gap:10px;width:410px;height:64px;background:#685f5f;border-radius:4px;font-weight:400;font-size:18px;line-height:22px;color:#fff}.items[data-v-09ba4c8f]{display:flex;flex-wrap:wrap;grid-gap:14px;gap:14px}.item[data-v-09ba4c8f]:nth-child(3n+3){margin-right:0}main[data-v-09ba4c8f]{justify-content:space-between;grid-gap:60px;gap:60px;padding:40px 60px;min-height:50vh}aside[data-v-09ba4c8f],main[data-v-09ba4c8f]{display:flex}aside[data-v-09ba4c8f]{width:280px;flex-direction:column;grid-gap:45px;gap:45px}",""]),e.exports=n},812:function(e,t,o){"use strict";o.r(t);o(43),o(21),o(42),o(59),o(77);var r=o(687),d=o(688),c=o(689),n=o(680),l=o(655),f=o(662),h=o(664),v=o(763),m={components:{HeaderBlack:n.default,Item:l.default,AsideFilter:d.default,Filters:c.default,AsideCategories:r.default,BurgerMenu:f.default,Footer:h.default,AsideSize:v.default},props:["category"],data:function(){return{showFilter:!1,filterLabel:"цене",productsInCartId:[],checkedId:"",checkedColor:"",checkedFiltered:"",currentPage:1,maxPerPage:9,showReadMore:!0}},methods:{sortByChecked:function(e){this.checkedId=e},sortByCheckedColor:function(e){this.checkedColor=e},sortByFiltered:function(e){this.checkedFiltered=e},getChecked:function(data){this.checkedFiltered=data},loadMore:function(){this.currentPage+=1}},computed:{products:function(){var e=[];if(0!==this.checkedId.length){for(var i=0;i<this.checkedId.length;i++)for(var t=this.checkedId[i],o=0;o<this.$store.getters.products.length;o++){var r=this.$store.getters.products[o];r.category==t&&e.push(r)}return e}return this.$store.getters.products},productsInCart:function(){return this.$store.getters.productsInCart},foundResults:function(){return this.products.length},totalResults:function(){return Object.keys(this.orders).length},pageCount:function(){return Math.ceil(this.totalResults/this.maxPerPage)},pageOffest:function(){return this.maxPerPage*this.currentPage},paginatedProducts:function(){return this.products.slice(0,this.currentPage*this.maxPerPage)}},mounted:function(){0===this.$store.getters.products.length&&this.$store.dispatch("fetchProducts"),0===this.$store.getters.categories.length&&this.$store.dispatch("fetchCategories")}},x=(o(786),o(76)),component=Object(x.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrapper"},[0!=e.$store.state.burgerMenuOpened?t("BurgerMenu"):e._e(),e._v(" "),t("HeaderBlack"),e._v(" "),t("main",{staticClass:"main"},[t("aside",{staticClass:"aside"},[t("aside-categories",{on:{updateChecked:e.sortByChecked,checked:e.getChecked}}),e._v(" "),t("aside-filter",{on:{updateFiltered:e.sortByFiltered}}),e._v(" "),t("aside-color",{on:{updateCheckedColor:e.sortByCheckedColor}}),e._v(" "),t("aside-size")],1),e._v(" "),t("div",{staticClass:"items__main"},[""!=this.checkedId?t("div",{staticClass:"aic"},[t("p",[e._v("Найдено "+e._s(e.foundResults)+" подходящих товаров")]),e._v(" "),e._l(e.$store.state.categories.filter((function(e){return 1==e.checked})),(function(o){return t("div",{key:o.id},[t("button",[t("i",{staticClass:"delete"}),e._v("       \n                        "+e._s(o.name)+"\n                    ")])])}))],2):e._e(),e._v(" "),t("div",{staticClass:"items row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-3"},e._l(this.paginatedProducts,(function(e){return t("div",{key:e.id,staticClass:"col item"},[t("item",{key:e.id,attrs:{item:e}})],1)})),0),e._v(" "),e.currentPage*e.maxPerPage<this.products.length?t("button",{on:{click:e.loadMore}},[e._v("Загрузить больше")]):e._e()])]),e._v(" "),t("Footer")],1)}),[],!1,null,"09ba4c8f",null);t.default=component.exports;installComponents(component,{AsideCategories:o(687).default,AsideFilter:o(688).default,AsideColor:o(777).default,AsideSize:o(763).default})}}]);