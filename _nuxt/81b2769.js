(window.webpackJsonp=window.webpackJsonp||[]).push([[44,31],{1036:function(t,e,o){"use strict";var n=o(6),r=o(1037);n({target:"String",proto:!0,forced:o(1038)("link")},{link:function(t){return r(this,"a","href",t)}})},1037:function(t,e,o){var n=o(9),r=o(42),l=o(20),c=/"/g,d=n("".replace);t.exports=function(t,e,o,n){var f=l(r(t)),v="<"+e;return""!==o&&(v+=" "+o+'="'+d(l(n),c,"&quot;")+'"'),v+">"+f+"</"+e+">"}},1038:function(t,e,o){var n=o(8);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},1039:function(t,e,o){t.exports=o.p+"img/slogan.a092223.svg"},1040:function(t,e,o){"use strict";o(983)},1041:function(t,e,o){var n=o(32)((function(i){return i[1]}));n.push([t.i,".topright[data-v-4c5395e6]{right:45px;text-align:right}.topleft[data-v-4c5395e6],.topright[data-v-4c5395e6]{position:absolute;top:60px}.topleft[data-v-4c5395e6]{left:45px}.bottomright[data-v-4c5395e6]{right:45px;text-align:right}.bottomleft[data-v-4c5395e6],.bottomright[data-v-4c5395e6]{bottom:60px;position:absolute}.bottomleft[data-v-4c5395e6]{left:45px}.info[data-v-4c5395e6]{color:#fff;position:absolute;width:40%;z-index:10}.info h3[data-v-4c5395e6]{font-size:80px;font-weight:400}.info h3[data-v-4c5395e6],.info p[data-v-4c5395e6]{margin-bottom:20px!important}.info p[data-v-4c5395e6]{font-size:20px;line-height:130%}.info button[data-v-4c5395e6]{background-color:transparent;border-color:#fff;color:#fff;max-width:50%}.info button[data-v-4c5395e6]:hover{background-color:#fff;color:#000}.flex[data-v-4c5395e6]{display:flex;flex-direction:column;gap:60px;justify-content:space-between}.swiper-pagination[data-v-4c5395e6]{align-self:flex-end;display:flex;gap:20px;position:absolute;right:60px}section[data-v-4c5395e6]{margin:0!important;padding:0!important}.swiper[data-v-4c5395e6]{overflow:hidden}.swiper[data-v-4c5395e6],section img.slide[data-v-4c5395e6]{height:100vh;position:absolute;width:100%}section img.slide[data-v-4c5395e6]{-o-object-fit:cover;object-fit:cover;z-index:1}.wrapper[data-v-4c5395e6]{align-items:center;display:flex;flex-direction:row;height:100vh;justify-content:center;margin:0 auto}.wrapper img[data-v-4c5395e6]{height:auto;width:100%;z-index:1}main[data-v-4c5395e6]{gap:80px;justify-content:space-between}.assortment[data-v-4c5395e6],main[data-v-4c5395e6]{display:flex;flex-direction:column;z-index:1}.assortment[data-v-4c5395e6]{gap:35px}.assortment a[data-v-4c5395e6]{color:#fff;font-size:15px;-webkit-text-decoration:none;text-decoration:none;width:110px}footer[data-v-4c5395e6]{color:#fff;z-index:1}.text[data-v-4c5395e6]{display:flex;gap:10%;padding-bottom:100px}.text h1[data-v-4c5395e6]{font-size:6.35vw}.text h1[data-v-4c5395e6],.text p[data-v-4c5395e6],.text span i[data-v-4c5395e6]{color:#fff}.text p[data-v-4c5395e6]{font-size:14px;margin-top:50px;width:33%}.sale[data-v-4c5395e6],.sale a[data-v-4c5395e6]{z-index:1}.sale a[data-v-4c5395e6]{color:#fff;font-size:15px;-webkit-text-decoration:none;text-decoration:none}",""]),n.locals={},t.exports=n},1064:function(t,e,o){var content=o(1113);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("490bd619",content,!0,{sourceMap:!1})},1078:function(t,e,o){"use strict";o.r(e);o(1036);var n=o(277),r=o(1119),l=o(1116),c=o(1117),d=o(1118),f=(o(801),o(793));r.a.use([l.a,c.a,d.a]);var v={data:function(){return{IH:new f.a}},props:{images:Array,isMainSlider:Boolean},computed:{positionInfo:function(){return this.images.position}},mounted:function(){new r.a(".swiper",{slidesPerView:1,autoplay:{delay:1e4},speed:4e3,allowTouchMove:!1,pagination:{clickable:!0,el:".swiper-pagination",modifierClass:".swiper-pagination-header "}})},components:{BurgerMenu:n.default},name:"IndexPage"},m=(o(1040),o(23)),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"swiper"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.images,(function(image){return e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"info",class:{topright:"topright"===(null==image?void 0:image.position),topleft:"topleft"===(null==image?void 0:image.position),bottomright:"bottomright"===(null==image?void 0:image.position),bottomleft:"bottomleft"===(null==image?void 0:image.position)}},[e("h3",[t._v(t._s(null==image?void 0:image.title))]),t._v(" "),e("p",[t._v(t._s(null==image?void 0:image.sub_title))]),t._v(" "),null!=image&&image.link?e("button",{staticClass:"button",on:{click:function(e){return t.$router.push("".concat(null==image?void 0:image.link))}}},[t._v("\n            "+t._s(null==image?void 0:image.button_text)+"\n          ")]):t._e()]),t._v(" "),e("picture",[e("source",{attrs:{srcset:t.IH.getUrl(t.$axios.defaults.baseURL+"/"+image.image,1920,t.fm="webp")}}),t._v(" "),e("img",{staticClass:"slide",attrs:{src:t.IH.getUrl(t.$axios.defaults.baseURL+"/"+image.image,1920,t.fm="jpg"),alt:""}})])])})),0)]),t._v(" "),e("div",{staticClass:"wrapper p60"},[e("div",{staticClass:"flex"},[t.isMainSlider?e("img",{attrs:{src:o(1039),alt:""}}):t._e()])])])}),[],!1,null,"4c5395e6",null);e.default=component.exports},1112:function(t,e,o){"use strict";o(1064)},1113:function(t,e,o){var n=o(32)((function(i){return i[1]}));n.push([t.i,".wrapper[data-v-2915822a]{margin:0}.collections[data-v-2915822a]{display:flex;flex-direction:column;gap:60px;margin-bottom:60px}",""]),n.locals={},t.exports=n},1132:function(t,e,o){"use strict";o.r(e);var n=o(3),r=(o(28),o(988)),l={data:function(){return{isMainSlider:!0}},components:{HeaderSlider:o(1078).default,ItemsSlider:r.default},computed:{products:function(){return this.$store.getters["catalog/getProducts"]},collections:function(){return this.$store.getters["collections/getCollections"]}},name:"IndexPage",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.store,n=t.$axios,0!==o.getters["catalog/getProducts"].length){e.next=4;break}return e.next=4,o.dispatch("catalog/fetchProducts");case 4:if(0!==o.getters["catalog/getCategories"].length){e.next=7;break}return e.next=7,o.dispatch("catalog/fetchCategories");case 7:if(0!==o.getters["collections/getCollections"].length){e.next=10;break}return e.next=10,o.dispatch("collections/fetchCollections");case 10:return e.next=12,n.$get("/main-slides");case 12:return r=e.sent,e.abrupt("return",{mainSlider_images:r});case 14:case"end":return e.stop()}}),e)})))()}},c=(o(1112),o(23)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e("HeaderSlider",{attrs:{images:t.mainSlider_images.slides,isMainSlider:t.isMainSlider}}),t._v(" "),e("ItemsSlider",{attrs:{products:t.products,title:"Bestsellers"}}),t._v(" "),e("ItemsSlider",{attrs:{products:t.products,title:"Новинки"}}),t._v(" "),e("div",{staticClass:"collections"},t._l(t.collections,(function(o){return e("div",{staticClass:"collection wrapper"},[(null==o?void 0:o.slides.length)>0?e("HeaderSlider",{attrs:{images:null==o?void 0:o.slides}}):t._e(),t._v(" "),e("ItemsSlider",{attrs:{collection:o,products:o.products,title:o.title}})],1)})),0)],1)}),[],!1,null,"2915822a",null);e.default=component.exports},810:function(t,e,o){var content=o(979);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("bb4dab8c",content,!0,{sourceMap:!1})},978:function(t,e,o){"use strict";o(810)},979:function(t,e,o){var n=o(32)((function(i){return i[1]}));n.push([t.i,".mainSlider[data-v-d797b29a]{position:relative}.item-slide[data-v-d797b29a]{width:387px!important}.linkToCatalog[data-v-d797b29a]:hover{color:#5b5353}a[data-v-d797b29a]{color:#b8b8b8;-webkit-text-decoration:none;text-decoration:none}img[data-v-d797b29a]{height:auto;max-width:100%}.mainSlider[data-v-d797b29a],section[data-v-d797b29a]{overflow:hidden}section[data-v-d797b29a]{display:flex;flex-direction:column;gap:60px;margin:0 auto;max-width:1676px;width:100%}section h2[data-v-d797b29a]{color:#685f5f;font-size:24px;font-weight:600;line-height:29px}@media screen and (max-width:768px){.swiper-wrapper[data-v-d797b29a]{grid-row-gap:40px;display:grid!important;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,1fr)}}",""]),n.locals={},t.exports=n},983:function(t,e,o){var content=o(1041);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("78cea9dc",content,!0,{sourceMap:!1})},988:function(t,e,o){"use strict";o.r(e);o(41);var n=o(790),r=o(818),l=o.n(r),c=o(1119),d=o(1116),f=o(1117),v=o(1118);o(801);c.a.use([d.a,f.a,v.a]);var m={props:{collection:Object,title:{type:String},products:Array},data:function(){return{slider:null,isMobileSwiper:!1}},components:{Item:n.default},computed:{productsInCart:function(){return this.$store.getters.productsInCart},splitArray:function(){return l.a.chunk(this.products,4)}},mounted:function(){var t=this,e=window.matchMedia("(max-width:768px)");this.isMobileSwiper=e.matches;var o=function(e){return t.isMobileSwiper=e.matches};e.addListener(o),this.$once("hook:beforeDestroy",(function(){return e.removeListener(o)})),setTimeout((function(){new c.a(".mainSlider",{slidesPerView:"auto",spaceBetween:5,loop:!1,breakpoints:{320:{slidesPerView:2,spaceBetween:20},480:{slidesPerView:2,spaceBetween:5},640:{slidesPerView:2,spaceBetween:5,loop:!1}}})}),1e3)}},x=(o(978),o(23)),component=Object(x.a)(m,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"jcsb"},[e("h2",[t._v(t._s(t.title))]),t._v(" "),this.collection?e("Nuxt-Link",{staticClass:"linkToCatalog",attrs:{to:"collections/".concat(t.collection.slug)}},[t._v("смотреть все")]):e("Nuxt-Link",{staticClass:"linkToCatalog",attrs:{to:"/catalog"}},[t._v("смотреть все")])],1),t._v(" "),e("div",{staticClass:"mainSlider"},[t.isMobileSwiper?t._e():e("div",{staticClass:"swiper-wrapper"},t._l(this.products,(function(t){return e("div",{key:t.slug,staticClass:"swiper-slide item-slide"},[e("item",{key:t.id,attrs:{item:t,inSlider:"inSlider"}})],1)})),0),t._v(" "),t.isMobileSwiper?e("div",{staticClass:"swiper-wrapper"},t._l(this.splitArray,(function(o){return e("div",{key:o.id,staticClass:"swiper-slide item-slide"},t._l(o,(function(t){return e("div",{staticClass:"items"},[e("item",{key:t.id,attrs:{item:t,inSlider:"inSlider"}})],1)})),0)})),0):t._e()])])}),[],!1,null,"d797b29a",null);e.default=component.exports;installComponents(component,{Item:o(790).default})}}]);