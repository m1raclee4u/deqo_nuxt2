(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{703:function(t,e,n){"use strict";n.r(e);var r=n(38),o=(n(78),{data:function(){return{value:[0,3500]}},computed:{max:function(){return Math.max.apply(Math,Object(r.a)(this.$store.getters.products.map((function(t){return t.price}))))},min:function(){return Math.min.apply(Math,Object(r.a)(this.$store.getters.products.map((function(t){return t.price}))))}},methods:{updateFiltered:function(){this.$emit("updateFiltered",this.value)}}}),l=(n(737),n(75)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"filter"},[e("h3",[t._v("Цена")]),t._v(" "),e("div",{staticClass:"customRow"},[e("p",[t._v("От "+t._s(t.value[0])+"₽ до ₽ "+t._s(t.value[1]))])]),t._v(" "),e("el-slider",{staticClass:"filterRange",attrs:{range:"",min:t.min,max:t.max},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),e("button",{on:{click:t.updateFiltered}},[t._v("Фильтр")])],1)}),[],!1,null,"d6e27c64",null);e.default=component.exports},708:function(t,e,n){var content=n(738);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(74).default)("658efe3a",content,!0,{sourceMap:!1})},737:function(t,e,n){"use strict";n(708)},738:function(t,e,n){var r=n(73)((function(i){return i[1]}));r.push([t.i,".filterRange[data-v-d6e27c64]{margin:0 auto;width:95%}.el-slider__runway[data-v-d6e27c64]{color:#fff!important}button[data-v-d6e27c64]{font-size:11px;font-weight:700;height:35px;text-transform:uppercase;width:100px}.customRow[data-v-d6e27c64]{align-items:center;display:flex;flex-wrap:nowrap;justify-content:space-between;margin-bottom:25px}.filter[data-v-d6e27c64]{display:flex;flex-direction:column;gap:20px}.filter h3[data-v-d6e27c64]{color:#685f5f;font-size:20px;font-weight:600;line-height:24px;margin-bottom:20px}.filter P[data-v-d6e27c64]{color:#a9a1a1;font-size:16px;font-weight:400;line-height:19px}.filter P span[data-v-d6e27c64]{font-weight:600}.filter input[type=range][data-v-d6e27c64]{width:100%}",""]),r.locals={},t.exports=r}}]);