(window.webpackJsonp=window.webpackJsonp||[]).push([[45,32],{1032:function(t,e,o){var content=o(1118);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("490bd619",content,!0,{sourceMap:!1})},1044:function(t,e,o){"use strict";o.r(e);o(78),o(109),o(982);var n=o(248),r=o(1124),l=o(1121),d=o(1122),c=o(1123),f=(o(717),o(711));r.a.use([l.a,d.a,c.a]);var v={data:function(){return{IH:new f.a}},props:{images:Array,isMainSlider:Boolean},computed:{positionInfo:function(){return this.images.position}},mounted:function(){new r.a(".swiper",{slidesPerView:1,autoplay:{delay:1e4},speed:4e3,allowTouchMove:!1,pagination:{clickable:!0,el:".swiper-pagination",modifierClass:".swiper-pagination-header "}})},components:{BurgerMenu:n.default},name:"IndexPage"},h=(o(986),o(23)),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"swiper"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.images,(function(image){return e("div",{staticClass:"swiper-slide"},[t.$route.path.includes("collections")?t._e():e("div",{staticClass:"info",class:{topright:"topright"===(null==image?void 0:image.position),topleft:"topleft"===(null==image?void 0:image.position),bottomright:"bottomright"===(null==image?void 0:image.position),bottomleft:"bottomleft"===(null==image?void 0:image.position)}},[e("h3",[t._v(t._s(null==image?void 0:image.title))]),t._v(" "),e("p",[t._v(t._s(null==image?void 0:image.sub_title))]),t._v(" "),null!=image&&image.link?e("button",{staticClass:"button",on:{click:function(e){return t.$router.push("".concat(null==image?void 0:image.link))}}},[t._v("\n            "+t._s(null==image?void 0:image.button_text)+"\n          ")]):t._e()]),t._v(" "),e("picture",[e("source",{attrs:{srcset:t.IH.getUrl(t.$axios.defaults.baseURL+"/"+image.image,1920,t.fm="webp")}}),t._v(" "),e("img",{staticClass:"slide",attrs:{src:t.IH.getUrl(t.$axios.defaults.baseURL+"/"+image.image,1920,t.fm="jpg"),alt:""}})])])})),0)]),t._v(" "),e("div",{staticClass:"wrapper p60"},[e("div",{staticClass:"flex"},[t.isMainSlider?e("img",{attrs:{src:o(985),alt:""}}):t._e()])])])}),[],!1,null,"2630979b",null);e.default=component.exports},1117:function(t,e,o){"use strict";o(1032)},1118:function(t,e,o){var n=o(31)((function(i){return i[1]}));n.push([t.i,".wrapper[data-v-2915822a]{margin:0}.collections[data-v-2915822a]{display:flex;flex-direction:column;gap:60px;margin-bottom:60px}",""]),n.locals={},t.exports=n},1139:function(t,e,o){"use strict";o.r(e);var n=o(3),r=(o(28),o(925)),l={data:function(){return{isMainSlider:!0}},components:{HeaderSlider:o(1044).default,ItemsSlider:r.default},computed:{products:function(){return this.$store.getters["catalog/getProducts"]},collections:function(){return this.$store.getters["collections/getCollections"]}},name:"IndexPage",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.store,n=t.$axios,0!==o.getters["catalog/getProducts"].length){e.next=4;break}return e.next=4,o.dispatch("catalog/fetchProducts");case 4:if(0!==o.getters["catalog/getCategories"].length){e.next=7;break}return e.next=7,o.dispatch("catalog/fetchCategories");case 7:if(0!==o.getters["collections/getCollections"].length){e.next=10;break}return e.next=10,o.dispatch("collections/fetchCollections");case 10:return e.next=12,n.$get("/main-slides");case 12:return r=e.sent,e.abrupt("return",{mainSlider_images:r});case 14:case"end":return e.stop()}}),e)})))()}},d=(o(1117),o(23)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e("HeaderSlider",{attrs:{images:t.mainSlider_images.slides,isMainSlider:t.isMainSlider}}),t._v(" "),e("ItemsSlider",{attrs:{products:t.products,title:"Bestsellers"}}),t._v(" "),e("ItemsSlider",{attrs:{products:t.products,title:"Новинки"}}),t._v(" "),e("div",{staticClass:"collections"},t._l(t.collections,(function(o){return e("div",{staticClass:"collection wrapper"},[(null==o?void 0:o.slides.length)>0?e("HeaderSlider",{attrs:{images:null==o?void 0:o.slides}}):t._e(),t._v(" "),e("ItemsSlider",{attrs:{collection:o,products:o.products,title:o.title}})],1)})),0)],1)}),[],!1,null,"2915822a",null);e.default=component.exports},735:function(t,e,o){var content=o(910);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("a17d29b4",content,!0,{sourceMap:!1})},909:function(t,e,o){"use strict";o(735)},910:function(t,e,o){var n=o(31)((function(i){return i[1]}));n.push([t.i,".notSwiper[data-v-66308473]{display:flex;gap:5px}.mainSlider[data-v-66308473]{max-width:1676px;position:relative;width:100%}.linkToCatalog[data-v-66308473]:hover{color:#5b5353}a[data-v-66308473]{color:#b8b8b8;-webkit-text-decoration:none;text-decoration:none}img[data-v-66308473]{height:auto;max-width:100%}.mainSlider[data-v-66308473],section[data-v-66308473]{overflow:hidden}section[data-v-66308473]{display:flex;flex-direction:column;gap:60px;margin:0 auto;max-width:1676px;width:100%}section h2[data-v-66308473]{color:#685f5f;font-size:24px;font-weight:600;line-height:29px}.moreThan4[data-v-66308473]{grid-row-gap:20px;display:grid!important;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,1fr);width:100%!important}@media(max-width:1200px){section[data-v-66308473]{gap:45px}}@media(max-width:640px){section[data-v-66308473]{gap:30px}}@media screen and (max-width:768px){.swiper-wrapper[data-v-66308473]{display:flex}.swiper-wrapper .item-slide[data-v-66308473]{grid-row-gap:20px;display:grid;grid-template-columns:repeat(2,1fr);width:100%!important}}",""]),n.locals={},t.exports=n},914:function(t,e,o){var content=o(987);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("28534638",content,!0,{sourceMap:!1})},925:function(t,e,o){"use strict";o.r(e);o(80),o(40);var n=o(707),r=o(745),l=o.n(r),d=o(1124),c=o(1121),f=o(1122),v=o(1123);o(717);d.a.use([c.a,f.a,v.a]);var h={props:{collection:Object,title:{type:String},products:Array},data:function(){return{wrapperWidth:0,slider:null,isMobileSwiper:!1}},components:{Item:n.default},computed:{productsInCart:function(){return this.$store.getters.productsInCart},splitArray:function(){return l.a.chunk(this.products,4)},slides_number:function(){return this.wrapperWidth=document.querySelector(".mainSlider").offsetWidth,(this.wrapperWidth-20-5*this.products.length)/387}},updated:function(){this.wrapperWidth=document.querySelector(".mainSlider").offsetWidth},watch:{wrapperWidth:function(t){new d.a(".mainSlider",{slidesPerView:4,loop:!1,breakpoints:{0:{slidesPerView:1,loop:!1},768:{slidesPerView:this.slides_number,loop:!0,longSwipes:!1,centeredSlides:!0,spaceBetween:5}}})}},mounted:function(){var t=this,e=window.matchMedia("(max-width:768px)");this.isMobileSwiper=e.matches;var o=function(e){return t.isMobileSwiper=e.matches};e.addListener(o),this.$once("hook:beforeDestroy",(function(){return e.removeListener(o)})),setTimeout((function(){new d.a(".mainSlider",{slidesPerView:4,loop:!1,breakpoints:{0:{slidesPerView:1,loop:!1},768:{slidesPerView:t.slides_number,loop:!0,longSwipes:!1,centeredSlides:!0,spaceBetween:5}}})}),500)}},m=(o(909),o(23)),component=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"jcsb"},[e("h2",[t._v(t._s(t.title))]),t._v(" "),this.collection?e("Nuxt-Link",{staticClass:"linkToCatalog",attrs:{to:"collections/".concat(t.collection.slug)}},[t._v("смотреть все\n    ")]):e("Nuxt-Link",{staticClass:"linkToCatalog",attrs:{to:"/catalog"}},[t._v("смотреть все")])],1),t._v(" "),e("div",{class:{mainSlider:t.products.length>4}},[t.isMobileSwiper?t._e():e("div",{class:{notSwiper:t.products.length<4,"swiper-wrapper":t.products.length>4}},t._l(t.products.slice(0,this.products.length),(function(o){return e("div",{key:o.slug,class:{"item-slide":t.products.length<4,"swiper-slide":t.products.length>3}},[e("item",{key:o.id,attrs:{item:o,inSlider:"inSlider"}})],1)})),0),t._v(" "),t.isMobileSwiper?e("div",{staticClass:"swiper-wrapper"},t._l(this.splitArray,(function(o){return e("div",{key:o.id,class:{moreThan4:t.products.length>3,"item-slide":t.products.length<4,"swiper-slide":t.products.length>3}},t._l(o,(function(t){return e("div",{staticClass:"items"},[e("item",{key:t.id,attrs:{item:t}})],1)})),0)})),0):t._e()])])}),[],!1,null,"66308473",null);e.default=component.exports;installComponents(component,{Item:o(707).default})},982:function(t,e,o){"use strict";var n=o(6),r=o(983);n({target:"String",proto:!0,forced:o(984)("link")},{link:function(t){return r(this,"a","href",t)}})},983:function(t,e,o){var n=o(9),r=o(41),l=o(20),d=/"/g,c=n("".replace);t.exports=function(t,e,o,n){var f=l(r(t)),v="<"+e;return""!==o&&(v+=" "+o+'="'+c(l(n),d,"&quot;")+'"'),v+">"+f+"</"+e+">"}},984:function(t,e,o){var n=o(8);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},985:function(t,e,o){t.exports=o.p+"img/slogan.a092223.svg"},986:function(t,e,o){"use strict";o(914)},987:function(t,e,o){var n=o(31)((function(i){return i[1]}));n.push([t.i,".topright[data-v-2630979b]{right:45px;text-align:right}.topleft[data-v-2630979b],.topright[data-v-2630979b]{position:absolute;top:60px}.topleft[data-v-2630979b]{left:45px}.bottomright[data-v-2630979b]{right:45px;text-align:right}.bottomleft[data-v-2630979b],.bottomright[data-v-2630979b]{bottom:60px;position:absolute}.bottomleft[data-v-2630979b]{left:45px}.info[data-v-2630979b]{color:#fff;position:absolute;text-shadow:0 0 10px rgba(0,0,0,.33);width:40%;z-index:10}.info h3[data-v-2630979b]{font-size:4vw;font-weight:400;margin-bottom:.7vw!important}.info p[data-v-2630979b]{font-size:1.5vw;line-height:130%;margin-bottom:2vw!important}.info button[data-v-2630979b]{background-color:transparent;border-color:#fff;color:#fff;font-size:1.5vw;height:5vw;max-width:50%;text-shadow:0 0 10px rgba(0,0,0,.33)}.info button[data-v-2630979b]:hover{background-color:#fff;color:#000}.flex[data-v-2630979b]{display:flex;flex-direction:column;gap:60px;justify-content:space-between}.swiper-pagination[data-v-2630979b]{align-self:flex-end;display:flex;gap:20px;position:absolute;right:60px}section[data-v-2630979b]{margin:0!important;padding:0!important}.swiper[data-v-2630979b]{overflow:hidden}.swiper[data-v-2630979b],section img.slide[data-v-2630979b]{height:100vh;position:absolute;width:100%}section img.slide[data-v-2630979b]{-o-object-fit:cover;object-fit:cover;z-index:1}.wrapper[data-v-2630979b]{align-items:center;display:flex;flex-direction:row;height:100vh;justify-content:center;margin:0 auto}.wrapper img[data-v-2630979b]{height:auto;width:100%;z-index:1}main[data-v-2630979b]{gap:80px;justify-content:space-between}.assortment[data-v-2630979b],main[data-v-2630979b]{display:flex;flex-direction:column;z-index:1}.assortment[data-v-2630979b]{gap:35px}.assortment a[data-v-2630979b]{color:#fff;font-size:15px;-webkit-text-decoration:none;text-decoration:none;width:110px}footer[data-v-2630979b]{color:#fff;z-index:1}.text[data-v-2630979b]{display:flex;gap:10%;padding-bottom:100px}.text h1[data-v-2630979b]{font-size:6.35vw}.text h1[data-v-2630979b],.text p[data-v-2630979b],.text span i[data-v-2630979b]{color:#fff}.text p[data-v-2630979b]{font-size:14px;margin-top:50px;width:33%}.sale[data-v-2630979b],.sale a[data-v-2630979b]{z-index:1}.sale a[data-v-2630979b]{color:#fff;font-size:15px;-webkit-text-decoration:none;text-decoration:none}@media(max-width:640px){.swiper[data-v-2630979b],.wrapper[data-v-2630979b]{height:calc(100vh - 50px)}}@media screen and (orientation:portrait){.info[data-v-2630979b]{bottom:10vw!important;color:#fff;left:0;margin:0 auto;padding:0 10px;position:absolute;right:0;text-align:center!important;width:100%;z-index:10}.info h3[data-v-2630979b]{font-size:10vw;font-weight:400;margin-bottom:2vw!important}.info p[data-v-2630979b]{font-size:3vw;line-height:130%;margin-bottom:6vw!important}.info button[data-v-2630979b]{background-color:transparent;border-color:#fff;color:#fff;font-size:3vw;height:9vw;max-width:50%}.info button[data-v-2630979b]:hover{background-color:#fff;color:#000}}",""]),n.locals={},t.exports=n}}]);