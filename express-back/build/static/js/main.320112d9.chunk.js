(this["webpackJsonpcra-front"]=this["webpackJsonpcra-front"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(2),r=n.n(a),i=n(16),s=n.n(i),j=(n(23),n(6)),o=n(7),d=(n(24),n(17)),l=n.n(d),u=function(){return l.a.get("/api/names").then((function(e){return e.data}))};var b=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)("alphabetical"),s=Object(o.a)(i,2),d=s[0],l=s[1];Object(a.useEffect)((function(){u().then((function(e){r(e)}))}),[]);var b=function(){return"alphabetical"===d},h=b()?"quantical":"aplhabetical",O=function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.name}),Object(c.jsx)("td",{children:e.amount})]},e.rowid)},f="alphabetical"===d?Object(j.a)(n).sort((function(e,t){return e.name>t.name})).map(O):Object(j.a)(n).sort((function(e,t){return e.amount<t.amount})).map(O),p=n.reduce((function(e,t){return e+t.amount}),0);return Object(c.jsxs)("div",{className:"App-container",children:[Object(c.jsx)("header",{className:"App-header",children:Object(c.jsx)("h1",{children:"Name Application"})}),Object(c.jsxs)("div",{className:"App-content",children:[Object(c.jsx)("div",{children:Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Name"}),Object(c.jsx)("th",{children:"Amount"})]})}),Object(c.jsx)("tbody",{children:f})]})}),Object(c.jsx)("div",{children:Object(c.jsxs)("button",{onClick:function(){return b()?l("quantity"):l("alphabetical")},children:["Change to ",h," ordering"]})}),Object(c.jsxs)("div",{children:["total names: ",p]})]}),Object(c.jsx)("div",{className:"App-footer",children:Object(c.jsx)("p",{children:"Mayde by Jere Tofferi"})})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),h()}},[[43,1,2]]]);
//# sourceMappingURL=main.320112d9.chunk.js.map