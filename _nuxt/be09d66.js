(window.webpackJsonp=window.webpackJsonp||[]).push([[44,31],{1038:function(t,e,o){"use strict";var n=o(6),r=o(1039);n({target:"String",proto:!0,forced:o(1040)("link")},{link:function(t){return r(this,"a","href",t)}})},1039:function(t,e,o){var n=o(9),r=o(42),l=o(20),d=/"/g,c=n("".replace);t.exports=function(t,e,o,n){var f=l(r(t)),v="<"+e;return""!==o&&(v+=" "+o+'="'+c(l(n),d,"&quot;")+'"'),v+">"+f+"</"+e+">"}},1040:function(t,e,o){var n=o(8);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},1041:function(t,e,o){t.exports=o.p+"img/slogan.a092223.svg"},1042:function(t,e,o){"use strict";o(985)},1043:function(t,e,o){var n=o(28)((function(i){return i[1]}));n.push([t.i,".topright[data-v-7132fdab]{right:45px;text-align:right}.topleft[data-v-7132fdab],.topright[data-v-7132fdab]{position:absolute;top:60px}.topleft[data-v-7132fdab]{left:45px}.bottomright[data-v-7132fdab]{right:45px;text-align:right}.bottomleft[data-v-7132fdab],.bottomright[data-v-7132fdab]{bottom:60px;position:absolute}.bottomleft[data-v-7132fdab]{left:45px}.info[data-v-7132fdab]{color:#fff;position:absolute;width:40%;z-index:10}.info h3[data-v-7132fdab]{font-size:4vw;font-weight:400;margin-bottom:.7vw!important}.info p[data-v-7132fdab]{font-size:1.5vw;line-height:130%;margin-bottom:2vw!important}.info button[data-v-7132fdab]{background-color:transparent;border-color:#fff;color:#fff;font-size:1.5vw;height:5vw;max-width:50%}.info button[data-v-7132fdab]:hover{background-color:#fff;color:#000}.flex[data-v-7132fdab]{display:flex;flex-direction:column;gap:60px;justify-content:space-between}.swiper-pagination[data-v-7132fdab]{align-self:flex-end;display:flex;gap:20px;position:absolute;right:60px}section[data-v-7132fdab]{margin:0!important;padding:0!important}.swiper[data-v-7132fdab]{overflow:hidden}.swiper[data-v-7132fdab],section img.slide[data-v-7132fdab]{height:100vh;position:absolute;width:100%}section img.slide[data-v-7132fdab]{-o-object-fit:cover;object-fit:cover;z-index:1}.wrapper[data-v-7132fdab]{align-items:center;display:flex;flex-direction:row;height:100vh;justify-content:center;margin:0 auto}.wrapper img[data-v-7132fdab]{height:auto;width:100%;z-index:1}main[data-v-7132fdab]{gap:80px;justify-content:space-between}.assortment[data-v-7132fdab],main[data-v-7132fdab]{display:flex;flex-direction:column;z-index:1}.assortment[data-v-7132fdab]{gap:35px}.assortment a[data-v-7132fdab]{color:#fff;font-size:15px;-webkit-text-decoration:none;text-decoration:none;width:110px}footer[data-v-7132fdab]{color:#fff;z-index:1}.text[data-v-7132fdab]{display:flex;gap:10%;padding-bottom:100px}.text h1[data-v-7132fdab]{font-size:6.35vw}.text h1[data-v-7132fdab],.text p[data-v-7132fdab],.text span i[data-v-7132fdab]{color:#fff}.text p[data-v-7132fdab]{font-size:14px;margin-top:50px;width:33%}.sale[data-v-7132fdab],.sale a[data-v-7132fdab]{z-index:1}.sale a[data-v-7132fdab]{color:#fff;font-size:15px;-webkit-text-decoration:none;text-decoration:none}@media(max-width:640px){.swiper[data-v-7132fdab],.wrapper[data-v-7132fdab]{height:calc(100vh - 50px)}}@media screen and (orientation:portrait){.info[data-v-7132fdab]{bottom:10vw!important;color:#fff;left:0;margin:0 auto;padding:0 10px;position:absolute;right:0;text-align:center!important;width:100%;z-index:10}.info h3[data-v-7132fdab]{font-size:10vw;font-weight:400;margin-bottom:2vw!important}.info p[data-v-7132fdab]{font-size:3vw;line-height:130%;margin-bottom:6vw!important}.info button[data-v-7132fdab]{background-color:transparent;border-color:#fff;color:#fff;font-size:3vw;height:9vw;max-width:50%}.info button[data-v-7132fdab]:hover{background-color:#fff;color:#000}}",""]),n.locals={},t.exports=n},1067:function(t,e,o){var content=o(1118);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(29).default)("490bd619",content,!0,{sourceMap:!1})},1081:function(t,e,o){"use strict";o.r(e);o(118),o(148),o(1038);var n=o(278),r=o(1124),l=o(1121),d=o(1122),c=o(1123),f=(o(804),o(798));r.a.use([l.a,d.a,c.a]);var v={data:function(){return{IH:new f.a}},props:{images:Array,isMainSlider:Boolean},computed:{positionInfo:function(){return this.images.position}},mounted:function(){new r.a(".swiper",{slidesPerView:1,autoplay:{delay:1e4},speed:4e3,allowTouchMove:!1,pagination:{clickable:!0,el:".swiper-pagination",modifierClass:".swiper-pagination-header "}})},components:{BurgerMenu:n.default},name:"IndexPage"},m=(o(1042),o(23)),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"swiper"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.images,(function(image){return e("div",{staticClass:"swiper-slide"},[t.$route.path.includes("collections")?t._e():e("div",{staticClass:"info",class:{topright:"topright"===(null==image?void 0:image.position),topleft:"topleft"===(null==image?void 0:image.position),bottomright:"bottomright"===(null==image?void 0:image.position),bottomleft:"bottomleft"===(null==image?void 0:image.position)}},[e("h3",[t._v(t._s(null==image?void 0:image.title))]),t._v(" "),e("p",[t._v(t._s(null==image?void 0:image.sub_title))]),t._v(" "),null!=image&&image.link?e("button",{staticClass:"button",on:{click:function(e){return t.$router.push("".concat(null==image?void 0:image.link))}}},[t._v("\n            "+t._s(null==image?void 0:image.button_text)+"\n          ")]):t._e()]),t._v(" "),e("picture",[e("source",{attrs:{srcset:t.IH.getUrl(t.$axios.defaults.baseURL+"/"+image.image,1920,t.fm="webp")}}),t._v(" "),e("img",{staticClass:"slide",attrs:{src:t.IH.getUrl(t.$axios.defaults.baseURL+"/"+image.image,1920,t.fm="jpg"),alt:""}})])])})),0)]),t._v(" "),e("div",{staticClass:"wrapper p60"},[e("div",{staticClass:"flex"},[t.isMainSlider?e("img",{attrs:{src:o(1041),alt:""}}):t._e()])])])}),[],!1,null,"7132fdab",null);e.default=component.exports},1117:function(t,e,o){"use strict";o(1067)},1118:function(t,e,o){var n=o(28)((function(i){return i[1]}));n.push([t.i,".wrapper[data-v-2915822a]{margin:0}.collections[data-v-2915822a]{display:flex;flex-direction:column;gap:60px;margin-bottom:60px}",""]),n.locals={},t.exports=n},1138:function(t,e,o){"use strict";o.r(e);var n=o(3),r=(o(30),o(990)),l={data:function(){return{isMainSlider:!0}},components:{HeaderSlider:o(1081).default,ItemsSlider:r.default},computed:{products:function(){return this.$store.getters["catalog/getProducts"]},collections:function(){return this.$store.getters["collections/getCollections"]}},name:"IndexPage",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.store,n=t.$axios,0!==o.getters["catalog/getProducts"].length){e.next=4;break}return e.next=4,o.dispatch("catalog/fetchProducts");case 4:if(0!==o.getters["catalog/getCategories"].length){e.next=7;break}return e.next=7,o.dispatch("catalog/fetchCategories");case 7:if(0!==o.getters["collections/getCollections"].length){e.next=10;break}return e.next=10,o.dispatch("collections/fetchCollections");case 10:return e.next=12,n.$get("/main-slides");case 12:return r=e.sent,e.abrupt("return",{mainSlider_images:r});case 14:case"end":return e.stop()}}),e)})))()}},d=(o(1117),o(23)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e("HeaderSlider",{attrs:{images:t.mainSlider_images.slides,isMainSlider:t.isMainSlider}}),t._v(" "),e("ItemsSlider",{attrs:{products:t.products,title:"Bestsellers"}}),t._v(" "),e("ItemsSlider",{attrs:{products:t.products,title:"Новинки"}}),t._v(" "),e("div",{staticClass:"collections"},t._l(t.collections,(function(o){return e("div",{staticClass:"collection wrapper"},[(null==o?void 0:o.slides.length)>0?e("HeaderSlider",{attrs:{images:null==o?void 0:o.slides}}):t._e(),t._v(" "),e("ItemsSlider",{attrs:{collection:o,products:o.products,title:o.title}})],1)})),0)],1)}),[],!1,null,"2915822a",null);e.default=component.exports},814:function(t,e,o){var content=o(981);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(29).default)("cf10aeda",content,!0,{sourceMap:!1})},980:function(t,e,o){"use strict";o(814)},981:function(t,e,o){var n=o(28)((function(i){return i[1]}));n.push([t.i,".notSwiper[data-v-7eceb334]{display:flex;gap:5px}.mainSlider[data-v-7eceb334]{position:relative}.item-slide[data-v-7eceb334]{width:387px!important}.linkToCatalog[data-v-7eceb334]:hover{color:#5b5353}a[data-v-7eceb334]{color:#b8b8b8;-webkit-text-decoration:none;text-decoration:none}img[data-v-7eceb334]{height:auto;max-width:100%}.mainSlider[data-v-7eceb334],section[data-v-7eceb334]{overflow:hidden}section[data-v-7eceb334]{display:flex;flex-direction:column;gap:60px;margin:0 auto;max-width:1676px;width:100%}section h2[data-v-7eceb334]{color:#685f5f;font-size:24px;font-weight:600;line-height:29px}.moreThan4[data-v-7eceb334]{grid-row-gap:20px;display:grid!important;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,1fr);width:100%!important}@media(max-width:1200px){section[data-v-7eceb334]{gap:45px}}@media(max-width:640px){section[data-v-7eceb334]{gap:30px}}@media screen and (max-width:768px){.swiper-wrapper[data-v-7eceb334]{display:flex}.swiper-wrapper .item-slide[data-v-7eceb334]{grid-row-gap:20px;display:grid;grid-template-columns:repeat(2,1fr);width:100%!important}}",""]),n.locals={},t.exports=n},985:function(t,e,o){var content=o(1043);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(29).default)("27c01d58",content,!0,{sourceMap:!1})},990:function(t,e,o){"use strict";o.r(e);o(89);var n=o(794),r=o(821),l=o.n(r),d=o(1124),c=o(1121),f=o(1122),v=o(1123);o(804);d.a.use([c.a,f.a,v.a]);var m={props:{collection:Object,title:{type:String},products:Array},data:function(){return{slider:null,isMobileSwiper:!1}},components:{Item:n.default},computed:{productsInCart:function(){return this.$store.getters.productsInCart},splitArray:function(){return l.a.chunk(this.products,4)}},mounted:function(){var t=this,e=window.matchMedia("(max-width:768px)");this.isMobileSwiper=e.matches;var o=function(e){return t.isMobileSwiper=e.matches};e.addListener(o),this.$once("hook:beforeDestroy",(function(){return e.removeListener(o)}));new d.a(".mainSlider",{slidesPerView:"auto",edgeSwipeDetection:!0,spaceBetween:5,loop:!0,loopedSlides:4,width:387,breakpoints:{768:{slidesPerView:1,loop:!0}}})}},h=(o(980),o(23)),component=Object(h.a)(m,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"jcsb"},[e("h2",[t._v(t._s(t.title))]),t._v(" "),this.collection?e("Nuxt-Link",{staticClass:"linkToCatalog",attrs:{to:"collections/".concat(t.collection.slug)}},[t._v("смотреть все\n    ")]):e("Nuxt-Link",{staticClass:"linkToCatalog",attrs:{to:"/catalog"}},[t._v("смотреть все")])],1),t._v(" "),e("div",{class:{mainSlider:t.products.length>4}},[t.isMobileSwiper?t._e():e("div",{staticClass:"swiper-wrapper",class:{notSwiper:t.products.length<4}},t._l(t.products.slice(0,this.products.length),(function(t){return e("div",{key:t.slug,staticClass:"swiper-slide item-slide"},[e("item",{key:t.id,attrs:{item:t,inSlider:"inSlider"}})],1)})),0),t._v(" "),t.isMobileSwiper?e("div",{staticClass:"swiper-wrapper"},t._l(this.splitArray,(function(o){return e("div",{key:o.id,staticClass:"swiper-slide",class:{moreThan4:t.products.length>3,"item-slide":t.products.length<4}},t._l(o,(function(t){return e("div",{staticClass:"items"},[e("item",{key:t.id,attrs:{item:t,inSlider:"inSlider"}})],1)})),0)})),0):t._e()])])}),[],!1,null,"7eceb334",null);e.default=component.exports;installComponents(component,{Item:o(794).default})}}]);