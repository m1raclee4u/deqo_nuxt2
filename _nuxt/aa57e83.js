(window.webpackJsonp=window.webpackJsonp||[]).push([[42,31,32],{713:function(t,e,n){var content=n(752);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("262f2344",content,!0,{sourceMap:!1})},751:function(t,e,n){"use strict";n(713)},752:function(t,e,n){var o=n(30)((function(i){return i[1]}));o.push([t.i,".mainSlider[data-v-05ce4cda]{position:relative}.item-slide[data-v-05ce4cda]{width:387px!important}.linkToCatalog[data-v-05ce4cda]:hover{color:#5b5353}a[data-v-05ce4cda]{color:#b8b8b8;-webkit-text-decoration:none;text-decoration:none}img[data-v-05ce4cda]{height:auto;max-width:100%}.mainSlider[data-v-05ce4cda],section[data-v-05ce4cda]{overflow:hidden}section[data-v-05ce4cda]{display:flex;flex-direction:column;gap:60px;margin:0 auto;max-width:1676px;width:100%}section h2[data-v-05ce4cda]{color:#685f5f;font-size:24px;font-weight:600;line-height:29px}",""]),o.locals={},t.exports=o},756:function(t,e,n){var content=n(805);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("384855fa",content,!0,{sourceMap:!1})},761:function(t,e,n){"use strict";n.r(e);n(49);var o=n(696),r=n(875),c=n(872),l=n(873),d=n(874);n(698);r.a.use([c.a,l.a,d.a]);var f={props:{title:{type:String},products:Array},data:function(){return{slider:null}},components:{Item:o.default},computed:{productsInCart:function(){return this.$store.getters.productsInCart}},mounted:function(){setTimeout((function(){new r.a(".mainSlider",{slidesPerView:"auto",spaceBetween:40,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}),1e3)}},v=(n(751),n(23)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"jcsb"},[e("h2",[t._v(t._s(t.title))]),t._v(" "),e("Nuxt-Link",{staticClass:"linkToCatalog",attrs:{to:"/catalog"}},[t._v("смотреть все")])],1),t._v(" "),e("div",{staticClass:"mainSlider"},[e("div",{staticClass:"swiper-wrapper"},t._l(this.products,(function(t){return e("div",{key:t.slug,staticClass:"swiper-slide item-slide"},[e("item",{key:t.id,attrs:{item:t,inSlider:"inSlider"}})],1)})),0),t._v(" "),e("div",{staticClass:"swiper-button-prev"}),t._v(" "),e("div",{staticClass:"swiper-button-next"})])])}),[],!1,null,"05ce4cda",null);e.default=component.exports;installComponents(component,{Item:n(696).default})},803:function(t,e,n){t.exports=n.p+"img/slogan.a092223.svg"},804:function(t,e,n){"use strict";n(756)},805:function(t,e,n){var o=n(30)((function(i){return i[1]}));o.push([t.i,".flex[data-v-c0413662]{display:flex;flex-direction:column;gap:60px;justify-content:space-between}.swiper-pagination[data-v-c0413662]{align-self:flex-end;display:flex;gap:20px;position:absolute;right:60px}section[data-v-c0413662]{margin:0!important;padding:0!important}.swiper[data-v-c0413662]{overflow:hidden}.swiper[data-v-c0413662],section img.slide[data-v-c0413662]{height:100vh;position:absolute;width:100%}section img.slide[data-v-c0413662]{-o-object-fit:cover;object-fit:cover;z-index:1}.wrapper[data-v-c0413662]{align-items:center;display:flex;flex-direction:row;height:100vh;justify-content:center;margin:0 auto}.wrapper img[data-v-c0413662]{height:auto;width:100%;z-index:1}main[data-v-c0413662]{gap:80px;justify-content:space-between}.assortment[data-v-c0413662],main[data-v-c0413662]{display:flex;flex-direction:column;z-index:1}.assortment[data-v-c0413662]{gap:35px}.assortment a[data-v-c0413662]{color:#fff;font-size:15px;-webkit-text-decoration:none;text-decoration:none;width:110px}footer[data-v-c0413662]{color:#fff;z-index:1}.text[data-v-c0413662]{display:flex;gap:10%;padding-bottom:100px}.text h1[data-v-c0413662]{font-size:6.35vw}.text h1[data-v-c0413662],.text p[data-v-c0413662],.text span i[data-v-c0413662]{color:#fff}.text p[data-v-c0413662]{font-size:14px;margin-top:50px;width:33%}.sale[data-v-c0413662],.sale a[data-v-c0413662]{z-index:1}.sale a[data-v-c0413662]{color:#fff;font-size:15px;-webkit-text-decoration:none;text-decoration:none}",""]),o.locals={},t.exports=o},821:function(t,e,n){var content=n(866);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("7ee5bb12",content,!0,{sourceMap:!1})},838:function(t,e,n){"use strict";n.r(e);var o=n(247),r=n(875),c=n(872),l=n(873),d=n(874);n(698);r.a.use([c.a,l.a,d.a]);var f={props:{images:Array,isMainSlider:Boolean},mounted:function(){new r.a(".swiper",{slidesPerView:1,autoplay:{delay:1e4},speed:4e3,allowTouchMove:!1,pagination:{clickable:!0,el:".swiper-pagination",modifierClass:".swiper-pagination-header "}})},components:{BurgerMenu:o.default},name:"IndexPage"},v=(n(804),n(23)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("section",[t.images.length>0?e("div",{staticClass:"swiper"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.images,(function(image){return e("div",{staticClass:"swiper-slide"},[e("img",{staticClass:"slide",attrs:{src:image.image,alt:""}})])})),0)]):t._e(),t._v(" "),e("div",{staticClass:"wrapper p60"},[e("div",{staticClass:"flex"},[t.isMainSlider?e("img",{attrs:{src:n(803),alt:""}}):t._e()])])])}),[],!1,null,"c0413662",null);e.default=component.exports},865:function(t,e,n){"use strict";n(821)},866:function(t,e,n){var o=n(30)((function(i){return i[1]}));o.push([t.i,".wrapper[data-v-471920ae]{margin:0}.collections section[data-v-471920ae]{padding:60px 0}",""]),o.locals={},t.exports=o},884:function(t,e,n){"use strict";n.r(e);var o=n(4),r=(n(39),n(761)),c={data:function(){return{isMainSlider:!0,mainSlider_images:[{id:1,image:"/back.jpg"},{id:2,image:"/back.jpg"}],collections:[{collection_id:1,slider_images:[{id:1,image:"/new_collection.webp"}],slider_title:"diego + La Pizza",slider_subtitle:"dego + La Pizza",collection_title:"dego + La Pizza",collection_logo:"",link:"",button_text:"",slider_text_position:""},{collection_id:2,slider_images:[{id:1,image:"/new_2.webp"}],slider_title:"diego + La Pizza",slider_subtitle:"dego + La Pizza",collection_title:"deqo & Louis Vuitton",collection_logo:"",link:"",button_text:"",slider_text_position:""}]}},components:{HeaderSlider:n(838).default,ItemsSlider:r.default},computed:{products:function(){return this.$store.getters["catalog/getProducts"]}},name:"IndexPage",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(n=t.store).getters["catalog/getProducts"].length){e.next=4;break}return e.next=4,n.dispatch("catalog/fetchProducts");case 4:if(0!==n.getters["catalog/getCategories"].length){e.next=7;break}return e.next=7,n.dispatch("catalog/fetchCategories");case 7:case"end":return e.stop()}}),e)})))()}},l=(n(865),n(23)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e("HeaderSlider",{attrs:{images:t.mainSlider_images,isMainSlider:t.isMainSlider}}),t._v(" "),e("ItemsSlider",{attrs:{products:t.products,title:"Bestsellers"}}),t._v(" "),e("ItemsSlider",{attrs:{products:t.products,title:"Новинки"}}),t._v(" "),e("div",{staticClass:"collections"},t._l(t.collections,(function(n){return e("div",{staticClass:"collection"},[e("HeaderSlider",{attrs:{images:n.slider_images}}),t._v(" "),e("ItemsSlider",{attrs:{products:t.products,title:n.collection_title}})],1)})),0)],1)}),[],!1,null,"471920ae",null);e.default=component.exports}}]);