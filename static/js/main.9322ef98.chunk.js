(this["webpackJsonptest-task"]=this["webpackJsonptest-task"]||[]).push([[0],{169:function(e,t,n){e.exports=n(276)},174:function(e,t,n){},276:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(11);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(174);var r=n(137),i=n(25),l=function(e){return{type:"GET_EDIT_POST",payload:e}},s=n(14),m=n(305),u=n(307),d=function(e){var t=e.input,n=e.type,a=e.className,o=e.pattern,r=e.placeholder,i=e.required;return c.a.createElement(u.a,null,c.a.createElement(m.a,Object.assign({className:a,required:i},t,{pattern:o,type:n,label:r,variant:"outlined"})))},p=n(130),E=n(131),f=n(306),b=n(136),h=n.n(b),v=n(135),O=n.n(v),y={getEditPostAction:l,removePostAction:function(e){return{type:"REMOVE_POST",payload:e}}};var j=Object(s.f)(Object(i.b)((function(e){return{announcement:e.announcement}}),y)(Object(E.a)({form:"search_announcement"})((function(e){var t=e.announcement,n=e.getEditPostAction,o=e.removePostAction,i=e.history,l=Object(a.useState)(""),s=Object(r.a)(l,2),m=s[0],u=s[1],E=t&&t.posts&&t.posts.filter((function(e){return e&&e.title?e.title.includes(m)||e.description.includes(m):""}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"box-header"},c.a.createElement(f.a,{size:"medium",color:"primary",className:"btn-create",variant:"contained",onClick:function(){return i.push("/announcement-form")}},"Create card"),c.a.createElement(p.a,{name:"search",placeholder:"Search",component:d,onChange:function(e){return u(e.target.value)}})),E&&E.length>0?c.a.createElement("div",null,E.map((function(e,t){return c.a.createElement("div",{className:"card",key:e.id},c.a.createElement("div",{className:"top-box"},c.a.createElement("h3",null,e.title),c.a.createElement("p",null,e.date)),c.a.createElement("p",{className:"description"},e.description),c.a.createElement("div",{className:"box-buttons"},c.a.createElement(f.a,{size:"small",startIcon:c.a.createElement(O.a,null),variant:"contained",color:"primary",onClick:function(){return n(e),void i.push("/announcement-form")}},"Edit post"),c.a.createElement(f.a,{size:"small",startIcon:c.a.createElement(h.a,null),variant:"contained",color:"secondary",onClick:function(){return o(e)}},"Delete")))}))):c.a.createElement("div",{className:"not-found"},c.a.createElement("h2",null,"Nothing Found")))})))),N=Object(E.a)({form:"form_announcement"})((function(e){var t=e.handleSubmit,n=e.post;return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{action:"form",onSubmit:t,className:"form"},n?c.a.createElement("h1",null,"Edit Announcement"):c.a.createElement("h1",null,"Add Announcement"),c.a.createElement(p.a,{name:"title",component:d,required:!0,placeholder:"title"}),c.a.createElement(p.a,{name:"description",component:d,required:!0,placeholder:"description",className:"inp-description"}),c.a.createElement("div",{className:"box-buttons"},c.a.createElement(f.a,{size:"medium",color:"primary",variant:"contained",type:"submit"},n?"Save":"Create"))))})),g=n(53),_=n(101),A=n.n(_);var T={getAnnouncementAction:function(e){return{type:"GET_ANNOUNCEMENT",payload:e}},getEditPostAction:l,getUpdatePostAction:function(e){return{type:"GET_UPDATE_POST",payload:e}},reset:g.a},P=Object(s.f)(Object(i.b)((function(e){return{announcement:e.announcement}}),T)((function(e){var t=e.getAnnouncementAction,n=e.getEditPostAction,a=e.getUpdatePostAction,o=e.reset,r=e.history,i=e.announcement;return c.a.createElement("div",{className:"container-form"},c.a.createElement(f.a,{size:"medium",color:"primary",className:"btn-back",variant:"contained",onClick:function(){return r.push("/")}},"Go to back"),c.a.createElement(N,{initialValues:i.edit_post,onSubmit:i.edit_post?function(e){e.date=A()(new Date).calendar(),a(e),o("form_announcement"),r.push("/"),n(null)}:function(e){e.id="f".concat((+new Date).toString(16)),e.date=A()(new Date).calendar(),t(e),o("form_announcement"),r.push("/")},post:i.edit_post}))})));var k=Object(s.f)((function(){return c.a.createElement("div",{className:"App"},c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/",component:j}),c.a.createElement(s.a,{exact:!0,path:"/announcement-form",component:P})))})),S=n(54),w=n(17),C=n(132),x=n(79),D=n(28),G={posts:[],edit_post:null},I=Object(w.b)({form:C.a,announcement:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ANNOUNCEMENT":return Object(D.a)(Object(D.a)({},e),{},{posts:[].concat(Object(x.a)(e.posts),[t.payload])});case"GET_EDIT_POST":return Object(D.a)(Object(D.a)({},e),{},{edit_post:t.payload});case"GET_UPDATE_POST":var n=e.posts.findIndex((function(e){return e.id===t.payload.id}));return e.posts.splice(n,1,t.payload),Object(D.a)(Object(D.a)({},e),{},{posts:Object(x.a)(e.posts)});case"REMOVE_POST":return Object(D.a)(Object(D.a)({},e),{},{posts:Object(x.a)(e.posts.filter((function(e){return e.id!==t.payload.id})))});default:return Object(D.a)({},e)}}}),U=Object(w.c)(I);Object(o.render)(c.a.createElement(i.a,{store:U},c.a.createElement(S.a,null,c.a.createElement(k,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[169,1,2]]]);
//# sourceMappingURL=main.9322ef98.chunk.js.map