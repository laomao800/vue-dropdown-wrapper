(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{140:function(e,t,l){},246:function(e,t,l){"use strict";var c=l(140);l.n(c).a},275:function(e,t,l){"use strict";l.r(t);var c={data:function(){return{selection1:[],selection2:[],options:["value1","value2","value3","value4","value5"]}}},n=(l(246),l(1)),i=Object(n.a)(c,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"inline-wrap"},[l("select-wrapper",{attrs:{multiple:!0,placeholder:"Select multiple value"},model:{value:e.selection1,callback:function(t){e.selection1=t},expression:"selection1"}},[l("div",{staticClass:"option-wrap"},e._l(e.options,(function(t){return l("label",{key:t},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.selection1,expression:"selection1"}],attrs:{name:"multiple",type:"checkbox"},domProps:{value:t,checked:Array.isArray(e.selection1)?e._i(e.selection1,t)>-1:e.selection1},on:{change:function(l){var c=e.selection1,n=l.target,i=!!n.checked;if(Array.isArray(c)){var s=t,o=e._i(c,s);n.checked?o<0&&(e.selection1=c.concat([s])):o>-1&&(e.selection1=c.slice(0,o).concat(c.slice(o+1)))}else e.selection1=i}}}),e._v("\n        "+e._s(t)+"\n      ")])})),0)]),e._v(" "),l("select-wrapper",{attrs:{multiple:!0,limit:2,placeholder:"Select multiple value"},model:{value:e.selection2,callback:function(t){e.selection2=t},expression:"selection2"}},[l("div",{staticClass:"option-wrap"},e._l(e.options,(function(t){return l("label",{key:t},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.selection2,expression:"selection2"}],attrs:{name:"multiple",type:"checkbox"},domProps:{value:t,checked:Array.isArray(e.selection2)?e._i(e.selection2,t)>-1:e.selection2},on:{change:function(l){var c=e.selection2,n=l.target,i=!!n.checked;if(Array.isArray(c)){var s=t,o=e._i(c,s);n.checked?o<0&&(e.selection2=c.concat([s])):o>-1&&(e.selection2=c.slice(0,o).concat(c.slice(o+1)))}else e.selection2=i}}}),e._v("\n        "+e._s(t)+"\n      ")])})),0)])],1)}),[],!1,null,"4478e946",null);t.default=i.exports}}]);