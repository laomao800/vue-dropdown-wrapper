(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{125:function(e,a,l){},260:function(e,a,l){"use strict";var t=l(125);l.n(t).a},279:function(e,a,l){"use strict";l.r(a);var t={data:function(){return{value1:[],value2:void 0,options:["value1","value2","value3","value4","value5"]}}},n=(l(260),l(1)),u=Object(n.a)(t,(function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"inline-wrap"},[l("div",[l("div",{staticStyle:{"margin-bottom":"0.4em"}},[e._v("value: "+e._s(e.value1))]),e._v(" "),l("select-wrapper",{attrs:{multiple:!0,limit:2,clearable:"",placeholder:"Select multiple value"},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}},[l("div",{staticClass:"option-wrap"},e._l(e.options,(function(a){return l("label",{key:a},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.value1,expression:"value1"}],attrs:{name:"multiple",type:"checkbox"},domProps:{value:a,checked:Array.isArray(e.value1)?e._i(e.value1,a)>-1:e.value1},on:{change:function(l){var t=e.value1,n=l.target,u=!!n.checked;if(Array.isArray(t)){var i=a,v=e._i(t,i);n.checked?v<0&&(e.value1=t.concat([i])):v>-1&&(e.value1=t.slice(0,v).concat(t.slice(v+1)))}else e.value1=u}}}),e._v("\n          "+e._s(a)+"\n        ")])})),0)])],1),e._v(" "),l("div",[l("div",{staticStyle:{"margin-bottom":"0.4em"}},[e._v("value: "+e._s(e.value2))]),e._v(" "),l("select-wrapper",{attrs:{clearable:"",placeholder:"Select single value"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}},[l("div",{staticClass:"option-wrap"},e._l(e.options,(function(a){return l("label",{key:a},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.value2,expression:"value2"}],attrs:{name:"single",type:"radio"},domProps:{value:a,checked:e._q(e.value2,a)},on:{change:function(l){e.value2=a}}}),e._v("\n          "+e._s(a)+"\n        ")])})),0)])],1)])}),[],!1,null,"250b3b01",null);a.default=u.exports}}]);