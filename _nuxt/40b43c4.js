(window.webpackJsonp=window.webpackJsonp||[]).push([[33,5,9],{644:function(t,e,o){var content=o(650);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("41d31d1c",content,!0,{sourceMap:!1})},645:function(t,e,o){var content=o(656);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("1287ee1c",content,!0,{sourceMap:!1})},649:function(t,e,o){"use strict";o(644)},650:function(t,e,o){var r=o(73),c=o(177),d=o(647),n=o(651),l=o(646),f=r((function(i){return i[1]})),h=c(d),v=c(n),m=c(l);f.push([t.i,".buttonFavorite[data-v-93a571c8]{height:60px;position:absolute;right:14px;top:14px}.added[data-v-93a571c8]{background-image:url("+h+")!important}.block[data-v-93a571c8]{position:relative!important;right:auto;top:auto}.big[data-v-93a571c8]{background-color:#685f5f!important;background-image:url("+v+")!important;background-size:24px 22px!important;border-radius:4px;height:60px!important;position:relative;transition:.1s;width:60px!important}.big[data-v-93a571c8]:hover{background-size:27px 24px!important}.like[data-v-93a571c8]{background-color:transparent;background-color:initial;background-image:url("+m+");background-position:50%;background-repeat:no-repeat;background-size:cover;height:30px;width:30px}.like[data-v-93a571c8]:hover{background-image:url("+h+")}",""]),f.locals={},t.exports=f},651:function(t,e,o){t.exports=o.p+"img/heart_small.b964ed9.svg"},653:function(t,e,o){"use strict";o.r(e);o(60),o(48),o(42),o(104),o(49),o(105);var r=o(29),c=(o(244),o(22),o(59),o(106));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function n(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{item:{type:Object,required:!0}},computed:n(n({},Object(c.d)({products:function(t){return t.favorites.products}})),{},{isProductAdded:function(){var t=this;return this.products.find((function(p){return p.id===t.item.id}))},currentRoute:function(){return"category-item"===this.$route.name}}),methods:n(n({},Object(c.b)({addProduct:"favorites/addProduct",removeProduct:"favorites/removeProduct"})),{},{buyClickHandler:function(){this.addProduct(this.item)},addedClickHandler:function(){this.removeProduct(this.item.id)}})},f=(o(649),o(75)),component=Object(f.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"buttonFavorite",class:{block:t.currentRoute}},[t.isProductAdded?e("button",{staticClass:"like added",class:{big:t.currentRoute},on:{click:function(e){return e.preventDefault(),t.addedClickHandler.apply(null,arguments)}}}):e("button",{staticClass:"like",class:{big:t.currentRoute},on:{click:function(e){return e.preventDefault(),t.buyClickHandler.apply(null,arguments)}}})])}),[],!1,null,"93a571c8",null);e.default=component.exports},655:function(t,e,o){"use strict";o(645)},656:function(t,e,o){var r=o(73)((function(i){return i[1]}));r.push([t.i,'.input_color_1[data-v-3a4259d8]{border-radius:50%;height:16px;width:16px}.top[data-v-3a4259d8]{align-items:center;display:flex;font-weight:400;justify-content:space-between;margin-bottom:10px}.top .quantity[data-v-3a4259d8]{color:#a9a1a1;font-size:14px;font-weight:400;line-height:17px}.tag[data-v-3a4259d8]{border:1px solid #685f5f;border-radius:50%;height:58px;left:14px;line-height:100%;text-align:center;top:14px;width:58px}.tag[data-v-3a4259d8],.tag p[data-v-3a4259d8]{position:absolute}.tag p[data-v-3a4259d8]{color:#685f5f;left:13px;top:17px}.ItemCart[data-v-3a4259d8]{max-width:405px;position:relative;width:100%}.ItemCart img[data-v-3a4259d8]{background-color:#000;height:auto;margin-bottom:25px;margin-top:100px;width:100%}.ItemCart p[data-v-3a4259d8]{color:#685f5f;font-family:"RF Dewi";font-size:16px;font-style:normal;font-weight:600;line-height:19px}.colors[data-v-3a4259d8]{gap:10px}.ItemCart__price[data-v-3a4259d8]{align-items:center;display:flex;gap:30px}.ItemCart__price p[data-v-3a4259d8]{color:#685f5f;font-size:20px;font-style:normal;font-weight:700;line-height:23px}.ItemCart__price .old[data-v-3a4259d8]{color:gray;-webkit-text-decoration:line-through;text-decoration:line-through}@media(max-width:1280px){.ItemCart img[data-v-3a4259d8]{background-color:#000;height:auto;margin-bottom:25px;max-width:100%}.ItemCart p[data-v-3a4259d8]{font-size:13px;margin-bottom:20px}}',""]),r.locals={},t.exports=r},661:function(t,e,o){"use strict";o.r(e);o(61),o(59);var r=o(653),c=o(814),d=o(811),n=o(812),l=o(813);o(660);c.a.use([d.a,n.a,l.a]);var f={props:{item:{type:Object,required:!0}},data:function(){return{}},components:{ButtonFavorite:r.default}},h=(o(655),o(75)),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"ItemCart"},[e("ButtonFavorite",{attrs:{item:t.item}}),t._v(" "),e("Nuxt-Link",{attrs:{to:"/".concat(t.item.category,"/").concat(t.item.name)}},[e("img",{staticClass:"card__img",attrs:{src:"https://frontend-test.idaproject.com"+t.item.photo,alt:t.item.name}}),t._v(" "),e("div",{staticClass:"tag"},[e("p",[t._v("ХИТ")])])]),t._v(" "),e("div",{staticClass:"top"},[e("p",[t._v(t._s(t.item.name))]),t._v(" "),e("p",{staticClass:"quantity"},[t._v("осталось "+t._s(3)+" шт.")])]),t._v(" "),e("div",{staticClass:"ItemCart__price"},[e("p",[t._v(t._s(t.item.price)+" ₽")]),t._v(" "),e("div",{staticClass:"flex colors"},t._l(t.$store.state.colors,(function(t){return e("div",{key:t.id,staticClass:"input_color_1",attrs:{id:t.id,disabled:""}})})),0)])],1)}),[],!1,null,"3a4259d8",null);e.default=component.exports},714:function(t,e,o){var content=o(751);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("76d679c8",content,!0,{sourceMap:!1})},715:function(t,e,o){var content=o(753);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("4f985f80",content,!0,{sourceMap:!1})},750:function(t,e,o){"use strict";o(714)},751:function(t,e,o){var r=o(73)((function(i){return i[1]}));r.push([t.i,'.sizes[data-v-31cc27fe]{display:flex;flex-wrap:wrap;gap:14px}.custom-radio[data-v-31cc27fe]{opacity:0;position:absolute;z-index:-1}.custom-radio+label[data-v-31cc27fe]{align-items:center;background-position:50%;background-repeat:no-repeat;background-size:50% 50%;border:1px solid #adb5bd;border-radius:50%;content:"";display:inline-flex;display:inline-block;flex-grow:0;flex-shrink:0;height:1em;margin-right:.5em;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.custom-radio:checked+label[data-v-31cc27fe]{background-color:#0b76ef;border-color:#0b76ef}.custom-radio:not(:disabled):not(:checked)+label[data-v-31cc27fe]:hover{border-color:#b3d7ff}.custom-radio:not(:disabled):active+label[data-v-31cc27fe]{background-color:#b3d7ff;border-color:#b3d7ff}.custom-radio:focus+label[data-v-31cc27fe]{box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-radio:focus:not(:checked)+label[data-v-31cc27fe]{border-color:#80bdff}.custom-radio:disabled+label[data-v-31cc27fe]{background-color:#e9ecef}.colors[data-v-31cc27fe]{display:flex;flex-direction:column;gap:25px;width:320px}.colors h3[data-v-31cc27fe]{color:#685f5f;font-size:20px;font-weight:600;line-height:24px}',""]),r.locals={},t.exports=r},752:function(t,e,o){"use strict";o(715)},753:function(t,e,o){var r=o(73)((function(i){return i[1]}));r.push([t.i,'.colors_row[data-v-21838bfd]{display:flex;flex-wrap:wrap;gap:10px}.custom-radio[data-v-21838bfd]{opacity:0;position:absolute;z-index:-1}.custom-radio+label[data-v-21838bfd]{align-items:center;background-position:50%;background-repeat:no-repeat;background-size:50% 50%;border:1px solid #adb5bd;border-radius:50%;content:"";display:inline-flex;display:inline-block;flex-grow:0;flex-shrink:0;height:1em;margin-right:.5em;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.custom-radio:checked+label[data-v-21838bfd]{background-color:#0b76ef;border-color:#0b76ef}.custom-radio:not(:disabled):not(:checked)+label[data-v-21838bfd]:hover{border-color:#b3d7ff}.custom-radio:not(:disabled):active+label[data-v-21838bfd]{background-color:#b3d7ff;border-color:#b3d7ff}.custom-radio:focus+label[data-v-21838bfd]{box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-radio:focus:not(:checked)+label[data-v-21838bfd]{border-color:#80bdff}.custom-radio:disabled+label[data-v-21838bfd]{background-color:#e9ecef}.colors[data-v-21838bfd]{display:flex;flex-direction:column;gap:25px;width:320px}.colors span[data-v-21838bfd]{word-wrap:break-word}.colors h3[data-v-21838bfd]{color:#685f5f;font-size:20px;font-weight:600;line-height:24px}',""]),r.locals={},t.exports=r},776:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{checkedColor:[]}},methods:{addCheckedColor:function(){this.$emit("updateCheckedColor",this.checkedColor)}}},c=(o(750),o(75)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"colors"},[e("h3",[t._v("Размер")]),t._v(" "),e("div",{staticClass:"sizes flex"},t._l(t.$store.state.sizes,(function(o){return e("div",{key:o.id,staticClass:"form_radio_btn"},[e("input",{attrs:{name:"size",type:"checkbox",id:o},domProps:{value:o}}),t._v(" "),e("label",{attrs:{id:o,for:o}},[t._v(t._s(o))])])})),0)])}),[],!1,null,"31cc27fe",null);e.default=component.exports},778:function(t,e,o){var content=o(798);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(74).default)("42120c72",content,!0,{sourceMap:!1})},788:function(t,e,o){"use strict";o.r(e);o(61),o(76),o(59);var r={data:function(){return{checkedColor:[],aCheckedColors:[]}},methods:{addCheckedColor:function(){for(var t in this.aCheckedColors=[],this.checkedColor)if(Object.hasOwnProperty.call(this.checkedColor,t)){var element=this.checkedColor[t];this.aCheckedColors.push(String(element.name))}this.aCheckedColors=String(this.aCheckedColors),this.$emit("updateCheckedColor",this.checkedColor)}}},c=(o(752),o(75)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"colors"},[e("h3",[t._v("\n    Цвет "),""!=t.checkedColor?e("span",[t._v(t._s(t.aCheckedColors))]):t._e()]),t._v(" "),e("div",{staticClass:"flex colors_row"},t._l(t.$store.state.colors,(function(o){return e("div",{key:o.id,staticClass:"form_radio_btn_color"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedColor,expression:"checkedColor"}],attrs:{name:"color",type:"checkbox",id:o.id},domProps:{value:o,checked:Array.isArray(t.checkedColor)?t._i(t.checkedColor,o)>-1:t.checkedColor},on:{change:[function(e){var r=t.checkedColor,c=e.target,d=!!c.checked;if(Array.isArray(r)){var n=o,l=t._i(r,n);c.checked?l<0&&(t.checkedColor=r.concat([n])):l>-1&&(t.checkedColor=r.slice(0,l).concat(r.slice(l+1)))}else t.checkedColor=d},t.addCheckedColor]}}),t._v(" "),e("label",{attrs:{id:o.id,for:o.id}})])})),0)])}),[],!1,null,"21838bfd",null);e.default=component.exports},797:function(t,e,o){"use strict";o(778)},798:function(t,e,o){var r=o(73),c=o(177),d=o(713),n=r((function(i){return i[1]})),l=c(d);n.push([t.i,".Breadcrumbs[data-v-74d0060c]{width:100%}.delete[data-v-74d0060c]{background:url("+l+");background-size:cover;cursor:pointer;display:block;flex-shrink:0;height:11px;margin-right:9px;width:11px}button[data-v-74d0060c]{background:#685f5f;border:2px solid #685f5f;border-radius:4px;color:#fff;cursor:pointer;font-size:20px;height:60px;line-height:24px;text-align:center;width:100%}.aic[data-v-74d0060c]{align-items:center;display:flex;gap:20px;margin-bottom:40px;min-height:32px;position:relative;width:100%}.aic p[data-v-74d0060c]{color:#a9a1a1;font-size:16px;font-style:normal;font-weight:400;line-height:19px}.items__main[data-v-74d0060c]{width:100%}.items__main button[data-v-74d0060c]{align-items:center;background:#685f5f;border-radius:4px;color:#fff;display:flex;font-size:18px;font-weight:400;gap:10px;height:64px;justify-content:center;line-height:22px;margin:40px auto 0;padding:20px 109px;width:410px}.items[data-v-74d0060c]{display:flex;flex-wrap:wrap;gap:40px}.item[data-v-74d0060c]:nth-child(3n+3){margin-right:0}main[data-v-74d0060c]{gap:60px;justify-content:space-between;margin:0 auto;max-width:1676px;min-height:55vh;width:100%}aside[data-v-74d0060c],main[data-v-74d0060c]{display:flex}aside[data-v-74d0060c]{flex-direction:column;gap:45px;width:320px}",""]),n.locals={},t.exports=n},816:function(t,e,o){"use strict";o.r(e);o(42),o(22),o(59),o(60),o(76);var r=o(702),c=o(703),d=o(704),n=o(673),l=o(661),f=o(663),h=o(674),v=o(776),m={components:{HeaderBlack:n.default,Item:l.default,AsideFilter:c.default,Filters:d.default,AsideCategories:r.default,BurgerMenu:f.default,Footer:h.default,AsideSize:v.default},props:["category"],data:function(){return{showFilter:!1,filterLabel:"цене",productsInCartId:[],checkedId:"",checkedColor:"",checkedFiltered:"",currentPage:1,maxPerPage:9,showReadMore:!0}},methods:{sortByChecked:function(t){this.checkedId=t},sortByCheckedColor:function(t){this.checkedColor=t},sortByFiltered:function(t){this.checkedFiltered=t},getChecked:function(data){this.checkedFiltered=data},loadMore:function(){this.currentPage+=1}},computed:{products:function(){var t=[];if(0!==this.checkedId.length){for(var i=0;i<this.checkedId.length;i++)for(var e=this.checkedId[i],o=0;o<this.$store.getters.products.length;o++){var r=this.$store.getters.products[o];r.category==e&&t.push(r)}return t}return this.$store.getters.products},productsInCart:function(){return this.$store.getters.productsInCart},foundResults:function(){return this.products.length},totalResults:function(){return Object.keys(this.orders).length},pageCount:function(){return Math.ceil(this.totalResults/this.maxPerPage)},pageOffest:function(){return this.maxPerPage*this.currentPage},paginatedProducts:function(){return this.products.slice(0,this.currentPage*this.maxPerPage)}},mounted:function(){0===this.$store.getters.products.length&&this.$store.dispatch("fetchProducts"),0===this.$store.getters.categories.length&&this.$store.dispatch("fetchCategories")}},x=(o(797),o(75)),component=Object(x.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e("Transition",{attrs:{name:"slide-fade"}},[0!=t.$store.state.burgerMenuOpened?e("BurgerMenu"):t._e()],1),t._v(" "),e("HeaderBlack"),t._v(" "),e("main",{staticClass:"main"},[e("aside",{staticClass:"aside"},[e("aside-categories",{on:{updateChecked:t.sortByChecked,checked:t.getChecked}}),t._v(" "),e("aside-filter",{on:{updateFiltered:t.sortByFiltered}}),t._v(" "),e("aside-color",{on:{updateCheckedColor:t.sortByCheckedColor}}),t._v(" "),e("aside-size"),t._v(" "),e("button",{staticClass:"filter"},[t._v("Отсортировать по фильтрам")])],1),t._v(" "),e("div",{staticClass:"items__main"},[""!=this.checkedId?e("div",{staticClass:"aic"},[e("p",[t._v("Найдено "+t._s(t.foundResults)+" подходящих товаров")]),t._v(" "),t._l(t.$store.state.categories.filter((function(t){return 1==t.checked})),(function(o){return e("div",{key:o.id},[e("button",[e("i",{staticClass:"delete"}),t._v("\n            "+t._s(o.name)+"\n          ")])])}))],2):t._e(),t._v(" "),e("div",{staticClass:"items row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-3"},t._l(this.paginatedProducts,(function(t){return e("div",{key:t.id,staticClass:"col item"},[e("item",{key:t.id,attrs:{item:t}})],1)})),0),t._v(" "),t.currentPage*t.maxPerPage<this.products.length?e("button",{on:{click:t.loadMore}},[t._v("\n        Загрузить больше\n      ")]):t._e()])]),t._v(" "),e("Footer")],1)}),[],!1,null,"74d0060c",null);e.default=component.exports;installComponents(component,{AsideCategories:o(702).default,AsideFilter:o(703).default,AsideColor:o(788).default,AsideSize:o(776).default})}}]);