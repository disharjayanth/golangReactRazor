(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(27),r=c.n(a),l=(c(36),c(8)),i=c(2),o=c(0);var j=function(){return Object(o.jsxs)("div",{className:"m-4 py-4 px-12",children:[Object(o.jsx)("div",{className:"font-bold text-3xl",children:"Cart items"}),Object(o.jsxs)("ul",{className:"my-4",children:[Object(o.jsx)("li",{children:Object(o.jsxs)("div",{className:"flex justify-between",children:[Object(o.jsx)("div",{children:"No."}),Object(o.jsx)("div",{children:"Item"}),Object(o.jsx)("div",{children:"Count"}),Object(o.jsx)("div",{children:"Cost"})]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("div",{className:"flex justify-between",children:[Object(o.jsx)("div",{children:"1)"}),Object(o.jsx)("div",{children:"IPhone"}),Object(o.jsx)("div",{children:"1"}),Object(o.jsx)("div",{children:"60000"})]})})]}),Object(o.jsx)(l.b,{to:"/user",className:"px-5 py-2 rounded-full bg-green-500 hover:bg-green-600",children:"Pay"})]})};var d=function(){return Object(o.jsx)("div",{className:"h-40 flex flex-col  items-center justify-center",children:Object(o.jsx)("div",{className:"text-center font-bold text-5xl",children:"Ecommerce E-Cart"})})},u=c(17),b=c.n(u),x=c(30),h=c(10),O=c(31),m=c.n(O);var p=function(){var e=Object(n.useState)("dishu"),t=Object(h.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)("+918660436070"),r=Object(h.a)(a,2),i=r[0],j=r[1],d=Object(n.useState)("dishuj15@gmail.com"),u=Object(h.a)(d,2),O=u[0],p=u[1],f=Object(n.useState)(""),v=Object(h.a)(f,2),g=v[0],y=v[1],w=Object(n.useState)(!1),N=Object(h.a)(w,2),C=N[0],S=N[1],E=function(){var e=Object(x.a)(b.a.mark((function e(t){var n,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(t),console.log(c,i,O),e.prev=3,e.next=6,m.a.post("/api/payment",{name:c,email:O,phone:i,amount:6e4});case 6:return n=e.sent,e.next=9,n.data;case 9:s=e.sent,console.log("data",s),s&&(console.log("response:",s),y(s),S(!0)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.log("Erorr;",e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){!0===C&&""!==g&&(window.location.href=g)}),[g,C]),Object(o.jsxs)("div",{className:"flex items-center justify-center flex-col mt-20",children:[Object(o.jsx)("div",{className:"shadow appearance-none border rounded w-15 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",children:Object(o.jsx)(l.b,{to:"/cart",children:"Back"})}),Object(o.jsxs)("form",{onSubmit:E,children:[Object(o.jsxs)("div",{className:"my-2",children:[Object(o.jsx)("label",{children:"Name:"}),Object(o.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",name:"name",type:"text",value:c,onChange:function(e){return s(e.target.value)}})]}),Object(o.jsxs)("div",{className:"my-2",children:[Object(o.jsx)("label",{children:"Email:"}),Object(o.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"email",value:O,onChange:function(e){return p(e.target.value)}})]}),Object(o.jsxs)("div",{className:"my-2",children:[Object(o.jsx)("label",{children:"Phone number:"}),Object(o.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"number",value:i,onChange:function(e){return j(e.target.value)}})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"bg-yellow-100 hover:bg-yellow-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow",children:"Pay"})})]})]})};var f=function(){return Object(o.jsxs)(l.a,{children:[Object(o.jsxs)("div",{className:"flex justify-end m-3 py-4 px-10 text-lg",children:[Object(o.jsx)("div",{children:Object(o.jsx)(l.b,{to:"/",children:"Home"})}),Object(o.jsx)("div",{className:"mx-2",children:Object(o.jsx)(l.b,{to:"/cart",children:"Cart"})})]}),Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{exact:!0,path:"/",children:Object(o.jsx)(d,{})}),Object(o.jsx)(i.a,{path:"/cart",children:Object(o.jsx)(j,{})}),Object(o.jsx)(i.a,{path:"/user",children:Object(o.jsx)(p,{})})]})]})};c(62);r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.690e259f.chunk.js.map