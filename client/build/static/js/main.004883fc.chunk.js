(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(27),r=n.n(a),l=(n(36),n(8)),o=n(2),i=n(0);var d=function(){return Object(i.jsxs)("div",{className:"m-4 py-4 px-12",children:[Object(i.jsx)("div",{className:"font-bold text-3xl",children:"Cart items"}),Object(i.jsxs)("ul",{className:"my-4",children:[Object(i.jsx)("li",{children:Object(i.jsxs)("div",{className:"flex justify-between",children:[Object(i.jsx)("div",{children:"No."}),Object(i.jsx)("div",{children:"Item"}),Object(i.jsx)("div",{children:"Count"}),Object(i.jsx)("div",{children:"Cost"})]})}),Object(i.jsx)("li",{children:Object(i.jsxs)("div",{className:"flex justify-between",children:[Object(i.jsx)("div",{children:"1)"}),Object(i.jsx)("div",{children:"IPhone"}),Object(i.jsx)("div",{children:"1"}),Object(i.jsx)("div",{children:"60000"})]})})]}),Object(i.jsx)(l.b,{to:"/user",className:"px-5 py-2 rounded-full bg-green-500 hover:bg-green-600",children:"Pay"})]})};var j=function(){return Object(i.jsx)("div",{className:"h-40 flex flex-col  items-center justify-center",children:Object(i.jsx)("div",{className:"text-center font-bold text-5xl",children:"Ecommerce E-Cart"})})},u=n(17),b=n.n(u),x=n(30),h=n(13),O=n(31),m=n.n(O);var p=function(){var e=Object(c.useState)("dishu"),t=Object(h.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)("+918660436070"),r=Object(h.a)(a,2),o=r[0],d=r[1],j=Object(c.useState)("dishuj15@gmail.com"),u=Object(h.a)(j,2),O=u[0],p=u[1],f=function(){var e=Object(x.a)(b.a.mark((function e(t){var c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(t),console.log(n,o,O),e.prev=3,console.log("1"),e.next=7,m.a.post("/api/payment",{name:n,email:O,phone:o,amount:6e4});case 7:return c=e.sent,console.log("2"),console.log(c),e.next=12,c.data;case 12:s=e.sent,console.log("3"),console.log("data",s),s&&(console.log("response:",s),window.location.href="https://www.google.com"),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.log("Erorr;",e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsxs)("div",{className:"flex items-center justify-center flex-col mt-20",children:[Object(i.jsx)("div",{className:"shadow appearance-none border rounded w-15 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",children:Object(i.jsx)(l.b,{to:"/cart",children:"Back"})}),Object(i.jsxs)("form",{onSubmit:f,children:[Object(i.jsxs)("div",{className:"my-2",children:[Object(i.jsx)("label",{children:"Name:"}),Object(i.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",name:"name",type:"text",value:n,onChange:function(e){return s(e.target.value)}})]}),Object(i.jsxs)("div",{className:"my-2",children:[Object(i.jsx)("label",{children:"Email:"}),Object(i.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"email",value:O,onChange:function(e){return p(e.target.value)}})]}),Object(i.jsxs)("div",{className:"my-2",children:[Object(i.jsx)("label",{children:"Phone number:"}),Object(i.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"number",value:o,onChange:function(e){return d(e.target.value)}})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{className:"bg-yellow-100 hover:bg-yellow-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow",children:"Pay"})})]})]})};var f=function(){return Object(i.jsxs)(l.a,{children:[Object(i.jsxs)("div",{className:"flex justify-end m-3 py-4 px-10 text-lg",children:[Object(i.jsx)("div",{children:Object(i.jsx)(l.b,{to:"/",children:"Home"})}),Object(i.jsx)("div",{className:"mx-2",children:Object(i.jsx)(l.b,{to:"/cart",children:"Cart"})})]}),Object(i.jsxs)(o.c,{children:[Object(i.jsx)(o.a,{exact:!0,path:"/",children:Object(i.jsx)(j,{})}),Object(i.jsx)(o.a,{path:"/cart",children:Object(i.jsx)(d,{})}),Object(i.jsx)(o.a,{path:"/user",children:Object(i.jsx)(p,{})})]})]})};n(62);r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.004883fc.chunk.js.map