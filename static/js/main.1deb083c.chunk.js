(this.webpackJsonprequestum=this.webpackJsonprequestum||[]).push([[0],{16:function(e,t,n){e.exports={ldioCwrkaot4409:"Loader_ldioCwrkaot4409__2epRu",loadingioSpinnerDoubleRingOo07n99i5y:"Loader_loadingioSpinnerDoubleRingOo07n99i5y__1ob4L"}},26:function(e,t,n){e.exports={card:"Card_card__1xXTM"}},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(0),c=n.n(i),s=n(7),a=n.n(s),l=n(9);n(40),n(41),n(42);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.createElement("path",{fillRule:"evenodd",d:"M16.18 7.895H9.443L0 0h26.034c5.342.308 8.302 3.195 8.88 8.661.035.765.035 2.155 0 4.17-.178 3.113-1.704 5.493-4.58 7.139.153.149 2.001 1.726 5.543 4.733H29.14l-4.184-3.617H8.122v3.617H3.734V16.81h16.098l-3.757-3.22h6.704l3.784 3.22c2.658-.733 3.988-2.274 3.988-4.623.009-.884.009-1.955 0-3.213-.374-2.813-1.83-4.37-4.371-4.67-.202.006-4.981.006-14.338 0l4.339 3.591z"});function j(e,t){var n=e.title,r=e.titleId,c=u(e,["title","titleId"]);return i.createElement("svg",o({fill:"#f5f5dc",width:"70px",height:"70px",viewBox:"0 0 35 20",id:"logo",ref:t,"aria-labelledby":r},c),n?i.createElement("title",{id:r},n):null,d)}var h=i.forwardRef(j),p=(n.p,function(){return Object(r.jsxs)("header",{className:"header",children:[Object(r.jsxs)("div",{className:"header__section",children:[Object(r.jsx)(h,{className:"header__logo"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{className:"header__title",children:"requestum"}),Object(r.jsx)("p",{className:"header__subtitle",children:"web development company"})]})]}),Object(r.jsx)("p",{className:"header__description",children:"Github users search app"})]})}),b=n(10),O=n(11),f=n(4),m=n.n(f),v=n(26),g=function(e){var t=e.result,n=t.name,c=t.description,s=t.language,a=Object(i.useState)(!1),l=Object(O.a)(a,2),o=l[0],u=l[1];return Object(r.jsxs)("li",{className:v.card,children:[Object(r.jsx)("h4",{children:n}),Object(r.jsxs)("p",{children:["Language: ",Object(r.jsx)("span",{children:s})]}),Object(r.jsxs)("p",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:o?"normal":"nowrap"},onClick:function(){return u(!o)},children:["Description: ",Object(r.jsx)("span",{children:c})]})]})};g.protoType={name:m.a.string.isRequired,description:m.a.string.isRequired,language:m.a.string.isRequired};var x=g,y=(n(43),"SET_RESULTS"),_="SET_HISTORY_ITEM",S="SET_IS_SEARCHING",N=n(27),w=n.n(N),I=n(28),R=n.n(I),E=n(16),T=function(){return Object(r.jsx)("div",{className:E.loadingioSpinnerDoubleRingOo07n99i5y,children:Object(r.jsxs)("div",{className:E.ldioCwrkaot4409,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{})}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{})})]})})},k=Object(l.b)((function(e){return{results:e.app.results,historyItems:e.app.historyItems,isSearching:e.app.isSearching}}),(function(e){return{setResults:function(t){return e(function(e){return{type:y,payload:e}}(t))},setHistoryItem:function(t){return e(function(e){return{type:_,payload:e}}(t))},setIsSearching:function(t){return e(function(e){return{type:S,payload:e}}(t))}}}))((function(e){var t=e.results,n=e.setResults,c=e.historyItems,s=e.setHistoryItem,a=e.isSearching,l=e.setIsSearching,o=Object(i.useState)(""),u=Object(O.a)(o,2),d=u[0],j=u[1];var h=function(e,t){var n;return function(){clearTimeout(n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];n=setTimeout.apply(void 0,[e,t].concat(i))}}((function(e){var t=e.target.value;j(t)}),1e3);return Object(i.useEffect)((function(){var e=JSON.parse(localStorage.getItem("historyItems"));e&&e.length&&s(e.slice(0,5))}),[]),Object(i.useEffect)((function(){var e;d?(s([{id:w.a.generate(),name:d}].concat(Object(b.a)(c))),l(!0),(e=d,R.a.get("".concat("https://api.github.com/search/repositories?q=").concat(e,"&per_page=5"))).then((function(e){var t=e.data;l(!1),n(t.items)}))):n([])}),[d]),Object(i.useEffect)((function(){c&&localStorage.setItem("historyItems",JSON.stringify(c))}),[c]),Object(r.jsxs)("main",{className:"main",children:[Object(r.jsxs)("div",{className:"main__input-block",children:[Object(r.jsx)("input",{className:"main__input",onChange:h,type:"text",placeholder:"Type to find"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"main__text",children:"Search history:"}),c.length?Object(r.jsx)("ul",{className:"main__list",children:c.slice(0,5).map((function(e){var t=e.id,n=e.name;return Object(r.jsx)("li",{className:"main__item",children:n},t)}))}):Object(r.jsx)("p",{className:"main__text-empty",children:"You have no history yet"})]})]}),Object(r.jsx)("ul",{className:"main__list lists",children:a?Object(r.jsx)("li",{className:"loader",children:Object(r.jsx)(T,{})}):Object(r.jsx)(r.Fragment,{children:t.length?t.map((function(e){return Object(r.jsx)(x,{result:e},e.id)})):Object(r.jsx)("li",{className:"loader",children:"No results"})})})]})})),H=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(p,{}),Object(r.jsx)(k,{})]})},q=n(3),C=n(29),L=Object(q.combineReducers)({results:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(b.a)(t.payload);default:return e}},historyItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return t.payload;default:return e}},isSearching:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return t.payload;default:return e}}}),D=Object(q.combineReducers)({app:L}),J=Object(q.createStore)(D,Object(C.devToolsEnhancer)());a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(l.a,{store:J,children:Object(r.jsx)(H,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.1deb083c.chunk.js.map