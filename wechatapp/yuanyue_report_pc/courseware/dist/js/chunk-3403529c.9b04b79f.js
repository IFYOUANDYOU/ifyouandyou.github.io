(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3403529c"],{1110:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index"},[a("div",{staticClass:"left_text"},[a("div",{staticClass:"text"},[a("h4",[t._v(t._s(t.examInfo.examName))]),a("div",{staticClass:"title"},[a("h3",[t._v(t._s(t.examInfo.examSubject)+" 评卷课件")]),a("div",{staticClass:"back"})]),a("h5",[t._v(t._s(t.examInfo.className)+"级"+t._s(t.examInfo.examTime)+"  ")])])]),a("a",{staticClass:"right_btn",on:{click:t.click}})])},i=[],n=a("0ebf"),c={data:function(){return{exmaId:"",examInfo:{className:"",examName:"",examSubject:"",examTime:""}}},props:{type:{default:1},isShow:{default:!0}},created:function(){this.exmaId=this.$route.params.id,console.log(this.$route.params),this.getInfomation()},methods:{getInfomation:function(){var t=this;Object(n["b"])({id:this.exmaId}).then(function(e){console.log(e),t.examInfo=e.data})},click:function(){this.$router.push({path:"/choose/"+this.exmaId})}}},o=c,l=(a("b2cf"),a("2877")),m=Object(l["a"])(o,s,i,!1,null,null,null);e["default"]=m.exports},b2cf:function(t,e,a){"use strict";var s=a("ee29"),i=a.n(s);i.a},ee29:function(t,e,a){}}]);
//# sourceMappingURL=chunk-3403529c.9b04b79f.js.map