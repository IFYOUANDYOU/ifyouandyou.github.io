(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f09f3af"],{"0cc8":function(t,a,s){"use strict";var i=s("1cab"),e=s.n(i);e.a},"1b61":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAgCAYAAAB3j6rJAAADtElEQVRYR82X348TVRTHv+e23W0JrEaeIMEXIwGzCYbepdPZGbAb5VcgdkMi/4BL4pvvRgmS+Kpvhh//gL64BFAWcRfodLbDTokmG36FJ03gCYMV2e529x4zK1On3bYzbcPqvJ5zz/nMOfeeH4SQr+A42wVEHgr7megtAJtfHHlCzHcgcFVBTZqZzIMwW53k1E540761TwhxGoAZ0UFBKfXpXn3PjYj6DWprQGZmZpKJ1NBXAJ8A0Ba0jTMG6GxtofJxLperdgPU4Mi27deUSFwCKNuNkbW6PCtU7Yiu679HtVMHcV13Q3UZ0wAyLQ5PM+ibmML00NDgr568Ull8fUVgjMDHAYy1OOMk4xiTUj6PAlMHsRz3HBgfNh26x8wfmdmR652MFWbn3iGirwHsaEr8eSMjJyKDvLiYM413gm/GsXJU07RKFEOWZW2iROoiM+8L6LNSKhflAq9GxCq5BQBGwMD9ZBwZKeUfUSB8Hdd1X6kuo9QUGcvQZOjLo4Jzexex+rnhL5jNvdmRYjcQvq5t39KVEFYwukzibTOz+5eOdcQquacAfPavEl0ztPR7vUD4Z6xS+UeA3w3Y+NzQ5MkwEO+l5HwlYjoxmk2f6wekOFueYOKzARvXDU3WfbSyTVbJfQRgiy8Uit7U9fTDvkCK7hscQ9DGY0OTW8MisghgwFd6dWNycHh4eKkfkPn5+YGnz6qeXf9bMjQ52BUIlqtDhmH8+V+ANKUGO3Vd3usHpNhjav43l3U9nu9pQ5OBErE23i0LmlDK0PU9di/pKTq3s8zKK4b1PhapoLUq8QzcTcWRXdcS74G0anpEdINrC0ejvqB2TY+Zx8K6t8dQD1+xNHeGQd5UFvz6GgMYmDI1eTBKiiMORnSNGN+quPopRfTbk0RiYNNftW1MZDLhg6a+EvS7xETHzEz6UhhMw6joOM7mGscut5nSwmy1ky8BPG5oI993rKzNQtu2U0oMftn78AzPodfgNgRLfBhMx3WCYrEviFmPEgomsqHUJ97FLJbc/QxMAkg1wDDnjezIDy27b5gT23Z3rBDeJ8IBADuDCxaAu8yYijEuNLcF2ykfUMweTLLug7DIK5Q39fSVZr/d7i1h3A3ygl0+SIK/iwLzUkE8qlWYGE+CERwDqoIor2fSUz75SwdZrdyzc4dA5KWpPvcAWCAgP6rJqw0FrauY96BsleYOA+SlqQ5DwOSoJsfXFeSfnhaAIb5Se/5s3N+R1yU1wQAWnPIRYkzUFirHg4v635OcrzDMDtLAAAAAAElFTkSuQmCC"},"1bb3":function(t,a,s){},"1cab":function(t,a,s){},"37f2":function(t,a,s){"use strict";var i=s("1bb3"),e=s.n(i);e.a},"6fec":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[t.ispop?i("div",{staticClass:"pop_up"},[i("div",{staticClass:"content"},[i("img",{staticClass:"close",attrs:{src:s("fcdf"),alt:""},on:{click:t.changePop}}),i("div",{staticClass:"tapgroup"},t._l(t.similarityList,function(a,s){return i("div",{staticClass:"item.id == similarityId?'tap active':'tap'",on:{click:function(s){return t.changeSee(a)}}},[t._v("\n                    练习"+t._s(s+1)+"\n                ")])}),0),t._l(t.similarityList,function(a){return t.similarityId==a.id?i("div",[i("div",{staticClass:"source"},[i("div",{staticClass:"title",on:{click:t.changSate}},[t.isUnfold?i("img",{attrs:{src:s("a1da"),alt:""}}):t._e(),t.isUnfold?t._e():i("img",{attrs:{src:s("81b7"),alt:""}}),i("div",{staticClass:"c"},[i("span",{staticStyle:{"font-weight":"bold"}},[t._v("题目来源:")]),t._v("\n                            "+t._s(a.source)+"\n                        ")])]),t.isUnfold?i("div",{staticClass:"img"},[i("img",{attrs:{src:s("9165"),alt:""}})]):t._e()]),i("div",{staticClass:"source analysis"},[i("div",{staticClass:"title",on:{click:t.changSate1}},[t.isUnfoldA?i("img",{attrs:{src:s("a1da"),alt:""}}):t._e(),t.isUnfoldA?t._e():i("img",{attrs:{src:s("81b7"),alt:""}}),i("div",{staticClass:"c"},[t._v("\n                            答案解析\n                        ")])]),t.isUnfoldA?i("div",{staticClass:"imgs"},[i("div",{staticClass:"c"},[i("div",{staticClass:"btn"},[t._v("答案")]),i("div",[t._v(t._s(a.answer2))])]),i("div",{staticClass:"c"},[i("div",{staticClass:"btn"},[t._v("分析")]),i("div",{domProps:{innerHTML:t._s(a.parse)}},[t._v("\n                                "+t._s(a.parse)+"\n                            ")])])]):t._e()])]):t._e()})],2)]):t._e(),i("div",{staticClass:"main"},[i("Header",{attrs:{"now-data":t.nowExamData},on:{listenToChildEvent:t.changePop}}),t.knowledgePoint.length>0?i("div",{staticClass:"choose"},[i("div",{staticClass:"middle_"},[i("img",{attrs:{src:t.nowExamData&&t.nowExamData.questionPic[0].url}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:1==t.nowExamData.type,expression:"nowExamData.type==1"}],staticClass:"text_",attrs:{"now-data":t.nowExamData}},[i("p",[i("span",[t._v("知识点：")]),t._l(t.knowledgePoint,function(a,s){return i("a",{attrs:{href:"#"}},[t._v("\n                        "+t._s(a)+"\n                        "),t.knowledgePoint?i("span",[t._v("|")]):t._e()])})],2)]),i("div",{directives:[{name:"show",rawName:"v-show",value:1==t.nowExamData.type,expression:"nowExamData.type==1"}],staticClass:"footer_"},[i("el-row",[i("el-col",{attrs:{span:6}},[i("div",{staticClass:"grid-content bg-purple"},[i("div",{staticStyle:{height:"250px",width:"250px"},attrs:{id:"chart"}})])]),i("el-col",{attrs:{span:11}},[i("ul",[i("li",{staticClass:"th"},[i("span",[t._v("选项")]),i("span",[t._v("选择率")]),i("span",[t._v("选择人数")])]),t._l(t.selectinfor,function(a,s){return i("li",{class:1==t.type?"active":"",on:{click:function(s){return t.changeAnswer(a,t.index)}}},[i("span",[t._v(t._s(a.option))]),i("span",[t._v(t._s(a.optionRatio))]),i("span",[t._v(t._s(a.optionNumber))])])})],2)]),i("el-col",{attrs:{span:7}},[i("div",{staticClass:"grid-content bg-purple"},[i("div",{staticClass:"panel"},[i("p",[t._v("选择"),i("strong",[t._v(t._s(t.studentListArr&&t.studentListArr.option))]),t._v("的人")]),i("div",{staticClass:"name"},t._l(t.studentListArr.nameList,function(a,s){return i("span",[t._v(t._s(a))])}),0)])])])],1)],1),i("div",{directives:[{name:"show",rawName:"v-show",value:1!=t.nowExamData.type,expression:"nowExamData.type!=1"}],staticClass:"text",attrs:{"now-data":t.nowExamData}},[i("p",[i("span",[t._v("知识点：")]),t._l(t.knowledgePoint,function(a,s){return i("a",{attrs:{href:"#"}},[t._v("\n                        "+t._s(a)+"\n                        "),s!=t.knowledgePoint.length-1?i("span",[t._v("|")]):t._e()])})],2)]),i("Footer",{directives:[{name:"show",rawName:"v-show",value:1!=t.nowExamData.type,expression:"nowExamData.type!=1"}],attrs:{"now-data":t.nowExamData}})],1):t._e()],1)])},e=[],n=s("a960"),o=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"footer"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isLayer,expression:"isLayer"}],staticClass:"layer-wrapper"},[i("div",{staticClass:"layer",on:{click:t.closeLayer}})]),i("div",{staticClass:"bottom-wrapper"},[i("div",{staticClass:"left"},[i("p",[t._v("答题情况")]),i("ul",{staticClass:"btn-wrapper"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isLayer,expression:"isLayer"}],staticClass:"info-wrapper"},[i("div",{staticClass:"left-layer"},[i("div",{staticClass:"search"},[i("p",[i("img",{attrs:{src:s("1b61"),alt:""},on:{click:t.clicksearchstudent}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputinforstu,expression:"inputinforstu"}],attrs:{type:"text",placeholder:"搜索学生"},domProps:{value:t.inputinforstu},on:{input:function(a){a.target.composing||(t.inputinforstu=a.target.value)}}})])]),t._m(0),t._l(t.studentinfor,function(a,s){return i("div",{staticClass:"item",on:{click:function(s){return t.showImg(a)}}},[i("div",[i("span",[t._v(t._s(a.studentName))]),i("span",[t._v(t._s(a.score))])])])})],2),i("div",{staticClass:"right-layer"},[i("img",{attrs:{src:t.chooseData&&t.chooseData.answerPostion[0].url,alt:""}})])]),i("li",{class:1==t.type?"active":"",on:{click:function(a){return t.showLayer(1)}}},[i("span",[t._v(t._s(t.sujectiveinfor.fullMark||0)+"人")]),i("span",[t._v("满分")])]),i("li",{class:2==t.type?"active":"",on:{click:function(a){return t.showLayer(2)}}},[i("span",[t._v(t._s(t.sujectiveinfor.dropPoints||0)+"人")]),i("span",[t._v("丢分")])]),i("li",{class:3==t.type?"active":"",on:{click:function(a){return t.showLayer(3)}}},[i("span",[t._v(t._s(t.sujectiveinfor.noMarks||0)+"人")]),i("span",[t._v("零分")])]),i("li",{class:4==t.type?"active":"",on:{click:function(a){return t.showLayer(4)}}},[i("span",[t._v(t._s(t.sujectiveinfor.collect||0)+"人")]),i("span",[t._v("收藏")])])])]),i("div",{staticClass:"right"},[i("div",{staticClass:"hight_score"},[i("p",{staticClass:"hight_number"},[t._v(t._s(t.sujectiveinfor.topScore||0))]),i("p",[t._v("班级最高分")])]),i("div",{staticClass:"lower_score"},[i("p",{staticClass:"lower_number"},[t._v(t._s(t.sujectiveinfor.lowScore||0))]),i("p",[t._v("班级最低分")])]),i("div",{staticClass:"totall_score"},[i("p",{staticClass:"totall_number"},[t._v(t._s(t.sujectiveinfor.standardScore||0))]),i("p",[t._v("题目总分")])])])])])},c=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"top"},[s("span",[t._v("姓名")]),s("span",[t._v("得分")])])}],r=s("0ebf"),l={data:function(){return{num:10,type:1,isLayer:!1,studentinfor:[],sujectiveinfor:{dropPoints:"",topScore:"",noMarks:"",standardScore:"",lowScore:"",collect:"",fullMark:""},chooseData:"",inputinforstu:"",inputlist:""}},props:{nowData:{default:""}},watch:{nowData:function(t,a){t&&this.getSubjective()}},methods:{showLayer:function(t){var a=this;this.type=t,this.isLayer=!0;var s={examId:533,questionId:1251,sectionType:t};Object(r["i"])(s).then(function(t){console.log(t),a.studentinfor=t.data,a.studentinfor.map(function(t){return t.answerPostion=JSON.parse(t.answerPostion),t}),a.chooseData=a.studentinfor[0]})},getSubjective:function(){var t=this;Object(r["l"])({examId:this.nowData.examId,questionId:this.nowData.id}).then(function(a){console.log(a),t.sujectiveinfor=a.data})},closeLayer:function(){this.isLayer=!1},showImg:function(t){this.chooseData=t},clicksearchstudent:function(t){var a=this,s={examId:this.nowData.examId,questionId:this.nowData.id,sectionType:t};Object(r["i"])(s).then(function(t){console.log(t),a.studentinfor=t.data})}},mounted:function(){}},d=l,u=(s("0cc8"),s("2877")),v=Object(u["a"])(d,o,c,!1,null,"0c9b675f",null),p=v.exports,f={data:function(){return{type:1,examId:"",myEchats:"",tableData:[],studentListArr:[],examListData:[],nowExamData:"",index:11,selectinfor:[],acquaintanceTopicSize:"",knowledgePoint:"",similarityList:"",similarityId:"",isUnfold:!1,isUnfoldA:!1,ispop:!1}},watch:{nowExamData:function(t,a){console.log(t),t&&this.getSelectRatio()}},created:function(){this.examId=1211,this.getExmaList(),console.log(this.examId)},mounted:function(){},methods:{changeSee:function(t){console.log(t.id),this.similarityId=t.id},changSate:function(){console.log(111),this.isUnfold=!this.isUnfold},changSate1:function(){this.isUnfoldA=!this.isUnfoldA},changePop:function(){var t=this;console.log(1111),this.ispop=!this.ispop,this.ispop&&Object(r["a"])({questionId:this.nowExamData&&this.nowExamData.id}).then(function(a){console.log(a),t.similarityList=a.data,t.similarityId=a.data[0].id})},loadChat:function(t){var a=[];this.selectinfor.map(function(t){a.push({value:t.optionNumber,name:t.option})});var s={tooltip:{show:!0},color:["#5CB3FF","#FF6047","#FFBFB5","#FFBFB5"],label:{normal:{show:!0,position:"innner"}},series:[{type:"pie",radius:"60%",center:["50%","50%"],data:a,label:{normal:{show:!0,position:"innner"}},itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},i=this.$echarts.init(document.getElementById("chart"));i.setOption(s)},getRatioData:function(){var t=this;Object(r["h"])({examId:this.examId,questionId:this.nowExamData&&this.nowExamData.id}).then(function(a){console.log(a),t.nowExamData.acquaintanceTopicSize=a.data.acquaintanceTopicSize,t.knowledgePoint=a.data.knowledgePoint})},getExmaList:function(){var t=this;Object(r["g"])({id:this.examId}).then(function(a){console.log(a),t.examListData=a.data,t.examListData.map(function(t){return t.questionPic=JSON.parse(t.questionPic),t}),t.nowExamData=t.examListData[t.index],console.log(t.nowExamData),t.getRatioData()})},getSelectRatio:function(){var t=this;Object(r["j"])({examId:this.nowExamData.examId,questionId:this.nowExamData.id}).then(function(a){console.log(a),t.selectinfor=a.data,t.studentListArr=t.selectinfor[0],t.loadChat(),console.log("1212321e32e")})},changeAnswer:function(t,a){console.log(t),console.log(a),this.studentListArr=t}},components:{Header:n["a"],Footer:p}},h=f,m=(s("37f2"),Object(u["a"])(h,i,e,!1,null,null,null));a["default"]=m.exports},"81b7":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAAM0lEQVQYV2M8cvzMOwZGBkEGCHjDeOTEmUYGBoY6qEAd4+3bt9lfvP24goGB4Y8gD0c0AIL9D55LYTVpAAAAAElFTkSuQmCC"},9165:function(t,a,s){t.exports=s.p+"img/test.4e71a9c3.png"},a1da:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAAMklEQVQYV2NsaGhgY+SVWMTwn+HPU17GRMaGnhmNjIyMdQwQUMfY2DPjHQMjoyBU4A0AbVYMV+VpyWcAAAAASUVORK5CYII="},a960:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"top_"},[s("div",{staticClass:"title"},[s("p",{staticClass:"subject"},[t._v("题号："),s("span",{staticClass:"number"},[t._v(t._s(t.nowData.question))]),t._v("、"),s("span",{staticClass:"type"},[t._v(t._s(1==t.nowData.type?"选择题":"客观题"))])]),s("div",{staticClass:"back"}),s("div",{staticClass:"score"},[s("div",{staticClass:"average"},[s("p",[t._v("班级平均得分")]),s("p",{staticClass:"ave_number"},[t._v(" "+t._s(t.chooseInfo.classRatio))])]),s("div",{staticClass:"rate"},[s("p",[t._v("得分率")]),s("p",{staticClass:"rate_number"},[t._v(" "+t._s(t.chooseInfo.avg))])])])]),0!=t.nowData.acquaintanceTopicSize?s("div",{staticClass:"right_btn"},[s("button",{on:{click:t.practise}},[t._v("相似题练习")])]):t._e()])},e=[],n=s("0ebf"),o={data:function(){return{exmaId:"",chooseInfo:{classRatio:"",avg:""}}},props:{nowData:{default:""}},created:function(){this.examId=this.$route.params.id,console.log(this.nowData)},watch:{nowData:function(t,a){t&&this.getRatioData(t.examId,t.id)}},mounted:function(){},methods:{getRatioData:function(t,a){var s=this;Object(n["h"])({examId:t,questionId:a}).then(function(t){console.log(t),t.data&&(s.chooseInfo=t.data)})},getExmaList:function(){var t=this;Object(n["g"])({id:this.examId}).then(function(a){console.log(a),t.chooseInfo=a.data,t.chooseInfo.map(function(t){return t}),t.nowExamData=t.chooseInfo[t.index],console.log(t.nowExamData),t.getRatioData()})},practise:function(){console.log(3333),this.$emit("listenToChildEvent")}}},c=o,r=(s("c77b"),s("2877")),l=Object(r["a"])(c,i,e,!1,null,"f3b58194",null);a["a"]=l.exports},c77b:function(t,a,s){"use strict";var i=s("ec81"),e=s.n(i);e.a},ec81:function(t,a,s){},fcdf:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9UlEQVQ4T2NkoBAwUqifYZAZsH//fgFWTt61DH+YYm1sjJ4he+/IkXNSDCz/Fv/+zhzs6Gj4ASaH4YVDx0+XMTExJjH8ZnKCGQLVvO/f///z7CxNu5ANxhoGyIaAFbP+2/fvH6ZmkBTOQAQZwsjIkAxS9P8/w1x0m3F6ASYBdfZ5hv8MDAx/mQzRwwSvASDN/1n+7mdkZJoDccG/FMY/zI7YDMHwwpFz56T+/4JotjE37gYZcOTk2VKwIWzMjjZGqLGDacCJM3sZGP/vsDE3BWuGe+nk6VKG/4weNhYmznhjYfeZM/yuJiYfsSVxbHKDLCmTkzMBEllmEQ6cOAcAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=chunk-7f09f3af.a11ddd7d.js.map