(this["webpackJsonpcra-front"]=this["webpackJsonpcra-front"]||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(2),r=n.n(a),i=n(16),s=n.n(i),j=(n(23),n(6)),o=n(7),u=(n(24),n(17)),d=n.n(u),l=function(){return d.a.get("/api/names").then((function(t){return t.data}))};var b=function(){var t=Object(a.useState)([]),e=Object(o.a)(t,2),n=e[0],r=e[1],i=Object(a.useState)("quantity"),s=Object(o.a)(i,2),u=s[0],d=s[1];Object(a.useEffect)((function(){l().then((function(t){r(t)}))}),[]);var b=function(){return"alphabetical"===u},h=b()?"quantical":"aplhabetical",O=function(t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t.name}),Object(c.jsx)("td",{children:t.amount})]},t.rowid)},f="alphabetical"===u?Object(j.a)(n).sort((function(t,e){return t.name>e.name})).map(O):Object(j.a)(n).sort((function(t,e){return t.amount<e.amount})).map(O),p=n.reduce((function(t,e){return t+e.amount}),0);return Object(c.jsxs)("div",{className:"App-container",children:[Object(c.jsx)("header",{className:"App-header",children:Object(c.jsx)("h1",{children:"Name Application"})}),Object(c.jsxs)("div",{className:"App-content",children:[Object(c.jsx)("div",{children:Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Name"}),Object(c.jsx)("th",{children:"Amount"})]})}),Object(c.jsx)("tbody",{children:f})]})}),Object(c.jsx)("div",{children:Object(c.jsxs)("button",{onClick:function(){return b()?d("quantity"):d("alphabetical")},children:["Change to ",h," ordering"]})}),Object(c.jsxs)("div",{children:["total names: ",p]})]}),Object(c.jsx)("div",{className:"App-footer",children:Object(c.jsx)("p",{children:"Mayde by Jere Tofferi"})})]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),h()}},[[43,1,2]]]);
//# sourceMappingURL=main.8e3eeb88.chunk.js.map