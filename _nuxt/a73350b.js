(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{705:function(t,e,o){var content=o(722);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(31).default)("2241c156",content,!0,{sourceMap:!1})},721:function(t,e,o){"use strict";o(705)},722:function(t,e,o){var n=o(30)((function(i){return i[1]}));n.push([t.i,".pvz[data-v-244be470]{display:flex;flex-direction:column;gap:5px;height:100%;max-width:300px;width:100%}.pvz img[data-v-244be470]{height:auto;max-height:150px;-o-object-fit:cover;object-fit:cover;width:100%}.pvz button[data-v-244be470]{background-color:#018440;border-radius:4px;color:#fff;font-size:16px;height:50px}",""]),n.locals={},t.exports=n},757:function(t,e,o){"use strict";o.r(e);o(38);var n=o(874),l=o(871),r=o(872),c=o(873);o(698);n.a.use([l.a,r.a,c.a]);var v={name:"balloon",props:{pvz:Object},methods:{},mounted:function(){new n.a(".office_image_slider",{slidesPerView:1,spaceBetween:40,loop:!1,navigation:{nextEl:".swiper-button-next-ballonn",prevEl:".swiper-button-prev-ballonn"}})}},d=(o(721),o(23)),component=Object(d.a)(v,(function(){var t,e=this,o=e._self._c;return o("div",{staticClass:"pvz",attrs:{"data-id":e.pvz.code}},[o("h1",{staticClass:"pvz__name"},[e._v("Название: "+e._s(e.pvz.name))]),e._v(" "),o("p",{staticClass:"pvz__address"},[e._v("Адрес: "+e._s(e.pvz.location.address))]),e._v(" "),o("p",[e._v("Рабочие часы: "+e._s(e.pvz.work_time))]),e._v(" "),null!==(t=e.pvz)&&void 0!==t&&t.office_image_list?o("div",{staticClass:"office_image_slider"},[o("div",{staticClass:"swiper-wrapper"},e._l(e.pvz.office_image_list,(function(image){return o("img",{key:image.slug,staticClass:"swiper-slide item-slide",attrs:{src:image.url}})})),0),e._v(" "),o("div",{staticClass:"swiper-button-prev-ballonn"}),e._v(" "),o("div",{staticClass:"swiper-button-next-balloon"})]):e._e(),e._v(" "),o("button",{attrs:{id:"btn"}},[e._v("Выбрать")])])}),[],!1,null,"244be470",null);e.default=component.exports}}]);