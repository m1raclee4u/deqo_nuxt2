(window.webpackJsonp=window.webpackJsonp||[]).push([[33,5,9],{645:function(e,t,o){var content=o(651);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(75).default)("35555ebf",content,!0,{sourceMap:!1})},646:function(e,t,o){var content=o(656);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(75).default)("46e897b8",content,!0,{sourceMap:!1})},650:function(e,t,o){"use strict";o(645)},651:function(e,t,o){var r=o(74),c=o(177),d=o(648),n=o(647),l=r((function(i){return i[1]})),f=c(d),h=c(n);l.push([e.i,".buttonFavorite[data-v-fd3e7cf4]{position:absolute;right:14px;top:14px}.added[data-v-fd3e7cf4]{background-image:url("+f+")!important}.big[data-v-fd3e7cf4]{height:40px!important;width:40px!important}.like[data-v-fd3e7cf4]{background-color:transparent;background-color:initial;background-image:url("+h+");background-position:50%;background-repeat:no-repeat;background-size:cover;height:30px;width:30px}.like[data-v-fd3e7cf4]:hover{background-image:url("+f+")}",""]),l.locals={},e.exports=l},653:function(e,t,o){"use strict";o.r(t);o(60),o(49),o(44),o(105),o(50),o(106);var r=o(30),c=(o(246),o(21),o(43),o(107));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function n(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={props:{item:{type:Object,required:!0}},computed:n(n({},Object(c.d)({products:function(e){return e.favorites.products}})),{},{isProductAdded:function(){var e=this;return this.products.find((function(p){return p.id===e.item.id}))},currentRoute:function(){return"category-item"===this.$route.name}}),methods:n(n({},Object(c.b)({addProduct:"favorites/addProduct",removeProduct:"favorites/removeProduct"})),{},{buyClickHandler:function(){this.addProduct(this.item)},addedClickHandler:function(){this.removeProduct(this.item.id)}})},f=(o(650),o(76)),component=Object(f.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"buttonFavorite"},[e.isProductAdded?t("button",{staticClass:"like added",class:{big:e.currentRoute},on:{click:function(t){return t.preventDefault(),e.addedClickHandler.apply(null,arguments)}}}):t("button",{staticClass:"like",class:{big:e.currentRoute},on:{click:function(t){return t.preventDefault(),e.buyClickHandler.apply(null,arguments)}}})])}),[],!1,null,"fd3e7cf4",null);t.default=component.exports},655:function(e,t,o){"use strict";o(646)},656:function(e,t,o){var r=o(74)((function(i){return i[1]}));r.push([e.i,'.input_color_1[data-v-9d4a6dae]{border-radius:50%;height:16px;width:16px}.top[data-v-9d4a6dae]{align-items:center;display:flex;font-weight:400;justify-content:space-between;margin-bottom:10px}.top .quantity[data-v-9d4a6dae]{color:#a9a1a1;font-size:14px;font-weight:400;line-height:17px}.tag[data-v-9d4a6dae]{border:1px solid #685f5f;border-radius:50%;height:58px;left:14px;line-height:100%;text-align:center;top:14px;width:58px}.tag[data-v-9d4a6dae],.tag p[data-v-9d4a6dae]{position:absolute}.tag p[data-v-9d4a6dae]{color:#685f5f;left:13px;top:17px}.ItemCart[data-v-9d4a6dae]{height:587px;max-width:387px;padding-bottom:60px;position:relative;width:100%}.ItemCart img[data-v-9d4a6dae]{background-color:#000;height:auto;margin-bottom:25px;margin-top:100px;width:100%}.ItemCart p[data-v-9d4a6dae]{color:#685f5f;font-family:"RF Dewi";font-size:16px;font-style:normal;font-weight:600;line-height:19px}.colors[data-v-9d4a6dae]{gap:10px}.ItemCart__price[data-v-9d4a6dae]{align-items:center;display:flex;gap:30px}.ItemCart__price p[data-v-9d4a6dae]{color:#685f5f;font-size:20px;font-style:normal;font-weight:700;line-height:23px}.ItemCart__price .old[data-v-9d4a6dae]{color:gray;-webkit-text-decoration:line-through;text-decoration:line-through}@media(max-width:1280px){.ItemCart[data-v-9d4a6dae]{padding-bottom:60px}.ItemCart img[data-v-9d4a6dae]{background-color:#000;height:auto;margin-bottom:25px;max-width:100%}.ItemCart p[data-v-9d4a6dae]{font-size:13px;margin-bottom:20px}}',""]),r.locals={},e.exports=r},661:function(e,t,o){"use strict";o.r(t);o(61),o(43);var r=o(653),c=o(813),d=o(810),n=o(811),l=o(812);o(660);c.a.use([d.a,n.a,l.a]);var f={props:{item:{type:Object,required:!0}},data:function(){return{}},components:{ButtonFavorite:r.default}},h=(o(655),o(76)),component=Object(h.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"ItemCart"},[t("ButtonFavorite",{attrs:{item:e.item}}),e._v(" "),t("Nuxt-Link",{attrs:{to:"/".concat(e.item.category,"/").concat(e.item.name)}},[t("img",{staticClass:"card__img",attrs:{src:"https://frontend-test.idaproject.com"+e.item.photo,alt:e.item.name}}),e._v(" "),t("div",{staticClass:"tag"},[t("p",[e._v("ХИТ")])])]),e._v(" "),t("div",{staticClass:"top"},[t("p",[e._v(e._s(e.item.name))]),e._v(" "),t("p",{staticClass:"quantity"},[e._v("осталось "+e._s(3)+" шт.")])]),e._v(" "),t("div",{staticClass:"ItemCart__price"},[t("p",[e._v(e._s(e.item.price)+" ₽")]),e._v(" "),t("div",{staticClass:"flex colors"},e._l(e.$store.state.colors,(function(e){return t("div",{key:e.id,staticClass:"input_color_1",attrs:{id:e.id,disabled:""}})})),0)])],1)}),[],!1,null,"9d4a6dae",null);t.default=component.exports},712:function(e,t,o){var content=o(747);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(75).default)("bd18ced8",content,!0,{sourceMap:!1})},713:function(e,t,o){var content=o(749);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(75).default)("72112297",content,!0,{sourceMap:!1})},746:function(e,t,o){"use strict";o(712)},747:function(e,t,o){var r=o(74)((function(i){return i[1]}));r.push([e.i,'.sizes[data-v-77ec3c40]{display:flex;flex-wrap:wrap;gap:14px}.custom-radio[data-v-77ec3c40]{opacity:0;position:absolute;z-index:-1}.custom-radio+label[data-v-77ec3c40]{align-items:center;background-position:50%;background-repeat:no-repeat;background-size:50% 50%;border:1px solid #adb5bd;border-radius:50%;content:"";display:inline-flex;display:inline-block;flex-grow:0;flex-shrink:0;height:1em;margin-right:.5em;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.custom-radio:checked+label[data-v-77ec3c40]{background-color:#0b76ef;border-color:#0b76ef}.custom-radio:not(:disabled):not(:checked)+label[data-v-77ec3c40]:hover{border-color:#b3d7ff}.custom-radio:not(:disabled):active+label[data-v-77ec3c40]{background-color:#b3d7ff;border-color:#b3d7ff}.custom-radio:focus+label[data-v-77ec3c40]{box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-radio:focus:not(:checked)+label[data-v-77ec3c40]{border-color:#80bdff}.custom-radio:disabled+label[data-v-77ec3c40]{background-color:#e9ecef}.colors[data-v-77ec3c40]{display:flex;flex-direction:column;gap:25px;width:280px}.colors h3[data-v-77ec3c40]{color:#685f5f;font-size:20px;font-weight:600;line-height:24px}',""]),r.locals={},e.exports=r},748:function(e,t,o){"use strict";o(713)},749:function(e,t,o){var r=o(74)((function(i){return i[1]}));r.push([e.i,'.colors_row[data-v-1e4240e0]{display:flex;flex-wrap:wrap;gap:10px}.custom-radio[data-v-1e4240e0]{opacity:0;position:absolute;z-index:-1}.custom-radio+label[data-v-1e4240e0]{align-items:center;background-position:50%;background-repeat:no-repeat;background-size:50% 50%;border:1px solid #adb5bd;border-radius:50%;content:"";display:inline-flex;display:inline-block;flex-grow:0;flex-shrink:0;height:1em;margin-right:.5em;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.custom-radio:checked+label[data-v-1e4240e0]{background-color:#0b76ef;border-color:#0b76ef}.custom-radio:not(:disabled):not(:checked)+label[data-v-1e4240e0]:hover{border-color:#b3d7ff}.custom-radio:not(:disabled):active+label[data-v-1e4240e0]{background-color:#b3d7ff;border-color:#b3d7ff}.custom-radio:focus+label[data-v-1e4240e0]{box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-radio:focus:not(:checked)+label[data-v-1e4240e0]{border-color:#80bdff}.custom-radio:disabled+label[data-v-1e4240e0]{background-color:#e9ecef}.colors[data-v-1e4240e0]{display:flex;flex-direction:column;gap:25px;width:280px}.colors span[data-v-1e4240e0]{word-wrap:break-word}.colors h3[data-v-1e4240e0]{color:#685f5f;font-size:20px;font-weight:600;line-height:24px}',""]),r.locals={},e.exports=r},774:function(e,t,o){"use strict";o.r(t);var r={data:function(){return{checkedColor:[]}},methods:{addCheckedColor:function(){this.$emit("updateCheckedColor",this.checkedColor)}}},c=(o(746),o(76)),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"colors"},[t("h3",[e._v("Размер")]),e._v(" "),t("div",{staticClass:"sizes flex"},e._l(e.$store.state.sizes,(function(o){return t("div",{key:o.id,staticClass:"form_radio_btn"},[t("input",{attrs:{name:"size",type:"checkbox",id:o},domProps:{value:o}}),e._v(" "),t("label",{attrs:{id:o,for:o}},[e._v(e._s(o))])])})),0)])}),[],!1,null,"77ec3c40",null);t.default=component.exports},776:function(e,t,o){var content=o(797);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(75).default)("2084c237",content,!0,{sourceMap:!1})},786:function(e,t,o){"use strict";o.r(t);o(61),o(77),o(43);var r={data:function(){return{checkedColor:[],aCheckedColors:[]}},methods:{addCheckedColor:function(){for(var e in this.aCheckedColors=[],this.checkedColor)if(Object.hasOwnProperty.call(this.checkedColor,e)){var element=this.checkedColor[e];this.aCheckedColors.push(String(element.name))}this.aCheckedColors=String(this.aCheckedColors),this.$emit("updateCheckedColor",this.checkedColor)}}},c=(o(748),o(76)),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"colors"},[t("h3",[e._v("Цвет "),""!=e.checkedColor?t("span",[e._v(e._s(e.aCheckedColors))]):e._e()]),e._v(" "),t("div",{staticClass:"flex colors_row"},e._l(e.$store.state.colors,(function(o){return t("div",{key:o.id,staticClass:"form_radio_btn_color"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedColor,expression:"checkedColor"}],attrs:{name:"color",type:"checkbox",id:o.id},domProps:{value:o,checked:Array.isArray(e.checkedColor)?e._i(e.checkedColor,o)>-1:e.checkedColor},on:{change:[function(t){var r=e.checkedColor,c=t.target,d=!!c.checked;if(Array.isArray(r)){var n=o,l=e._i(r,n);c.checked?l<0&&(e.checkedColor=r.concat([n])):l>-1&&(e.checkedColor=r.slice(0,l).concat(r.slice(l+1)))}else e.checkedColor=d},e.addCheckedColor]}}),e._v(" "),t("label",{attrs:{id:o.id,for:o.id}})])})),0)])}),[],!1,null,"1e4240e0",null);t.default=component.exports},796:function(e,t,o){"use strict";o(776)},797:function(e,t,o){var r=o(74),c=o(177),d=o(711),n=r((function(i){return i[1]})),l=c(d);n.push([e.i,".Breadcrumbs[data-v-72f19eee]{width:100%}.delete[data-v-72f19eee]{background:url("+l+");background-size:cover;cursor:pointer;display:block;flex-shrink:0;height:11px;margin-right:9px;width:11px}button[data-v-72f19eee]{font-size:11px;font-weight:600;padding:10px 9px}.aic[data-v-72f19eee],button[data-v-72f19eee]{align-items:center;display:flex}.aic[data-v-72f19eee]{gap:20px;margin-bottom:40px;min-height:32px;position:relative;width:100%}.aic p[data-v-72f19eee]{color:#a9a1a1;font-size:16px;font-style:normal;font-weight:400;line-height:19px}.items__main[data-v-72f19eee]{width:100%}.items__main button[data-v-72f19eee]{align-items:center;background:#685f5f;border-radius:4px;color:#fff;font-size:18px;font-weight:400;gap:10px;height:64px;justify-content:center;line-height:22px;margin:40px auto 0;padding:20px 109px;width:410px}.items[data-v-72f19eee]{display:flex;flex-wrap:wrap;gap:14px}.item[data-v-72f19eee]:nth-child(3n+3){margin-right:0}main[data-v-72f19eee]{gap:60px;justify-content:space-between;min-height:50vh;padding:40px 60px}aside[data-v-72f19eee],main[data-v-72f19eee]{display:flex}aside[data-v-72f19eee]{flex-direction:column;gap:45px;width:280px}",""]),n.locals={},e.exports=n},815:function(e,t,o){"use strict";o.r(t);o(44),o(21),o(43),o(60),o(77);var r=o(700),c=o(701),d=o(702),n=o(673),l=o(661),f=o(663),h=o(674),v=o(774),m={components:{HeaderBlack:n.default,Item:l.default,AsideFilter:c.default,Filters:d.default,AsideCategories:r.default,BurgerMenu:f.default,Footer:h.default,AsideSize:v.default},props:["category"],data:function(){return{showFilter:!1,filterLabel:"цене",productsInCartId:[],checkedId:"",checkedColor:"",checkedFiltered:"",currentPage:1,maxPerPage:9,showReadMore:!0}},methods:{sortByChecked:function(e){this.checkedId=e},sortByCheckedColor:function(e){this.checkedColor=e},sortByFiltered:function(e){this.checkedFiltered=e},getChecked:function(data){this.checkedFiltered=data},loadMore:function(){this.currentPage+=1}},computed:{products:function(){var e=[];if(0!==this.checkedId.length){for(var i=0;i<this.checkedId.length;i++)for(var t=this.checkedId[i],o=0;o<this.$store.getters.products.length;o++){var r=this.$store.getters.products[o];r.category==t&&e.push(r)}return e}return this.$store.getters.products},productsInCart:function(){return this.$store.getters.productsInCart},foundResults:function(){return this.products.length},totalResults:function(){return Object.keys(this.orders).length},pageCount:function(){return Math.ceil(this.totalResults/this.maxPerPage)},pageOffest:function(){return this.maxPerPage*this.currentPage},paginatedProducts:function(){return this.products.slice(0,this.currentPage*this.maxPerPage)}},mounted:function(){0===this.$store.getters.products.length&&this.$store.dispatch("fetchProducts"),0===this.$store.getters.categories.length&&this.$store.dispatch("fetchCategories")}},x=(o(796),o(76)),component=Object(x.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrapper"},[t("Transition",{attrs:{name:"slide-fade"}},[0!=e.$store.state.burgerMenuOpened?t("BurgerMenu"):e._e()],1),e._v(" "),t("HeaderBlack"),e._v(" "),t("main",{staticClass:"main"},[t("aside",{staticClass:"aside"},[t("aside-categories",{on:{updateChecked:e.sortByChecked,checked:e.getChecked}}),e._v(" "),t("aside-filter",{on:{updateFiltered:e.sortByFiltered}}),e._v(" "),t("aside-color",{on:{updateCheckedColor:e.sortByCheckedColor}}),e._v(" "),t("aside-size")],1),e._v(" "),t("div",{staticClass:"items__main"},[""!=this.checkedId?t("div",{staticClass:"aic"},[t("p",[e._v("Найдено "+e._s(e.foundResults)+" подходящих товаров")]),e._v(" "),e._l(e.$store.state.categories.filter((function(e){return 1==e.checked})),(function(o){return t("div",{key:o.id},[t("button",[t("i",{staticClass:"delete"}),e._v("       \n                        "+e._s(o.name)+"\n                    ")])])}))],2):e._e(),e._v(" "),t("div",{staticClass:"items row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-3"},e._l(this.paginatedProducts,(function(e){return t("div",{key:e.id,staticClass:"col item"},[t("item",{key:e.id,attrs:{item:e}})],1)})),0),e._v(" "),e.currentPage*e.maxPerPage<this.products.length?t("button",{on:{click:e.loadMore}},[e._v("Загрузить больше")]):e._e()])]),e._v(" "),t("Footer")],1)}),[],!1,null,"72f19eee",null);t.default=component.exports;installComponents(component,{AsideCategories:o(700).default,AsideFilter:o(701).default,AsideColor:o(786).default,AsideSize:o(774).default})}}]);