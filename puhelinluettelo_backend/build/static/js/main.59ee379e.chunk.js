(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),u=t.n(o),c=(t(20),t(4)),l=t(2),i=function(e){var n=e.filter,t=e.handleFilterChange;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},m=function(e){var n=e.person,t=e.handleRemove;return r.a.createElement("li",null,n.name,"  ",n.number," ",r.a.createElement("button",{onClick:function(){return t(n.id)}},"delete"))},d=function(e){var n=e.persons,t=e.filter,a=e.handleRemove;return r.a.createElement("ul",null,n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return r.a.createElement(m,{key:e.name,person:e,handleRemove:a})})))},s=function(e){var n=e.addPerson,t=e.newName,a=e.handleNameChange,o=e.newNumber,u=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:o,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},f=t(3),h=t.n(f),b="http://localhost:3001/api/persons",g=function(){return h.a.get(b).then((function(e){return e.data}))},v=function(e){return h.a.post(b,e).then((function(e){return e.data}))},p=function(e,n){return h.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},E=function(e){return h.a.delete("".concat(b,"/").concat(e))},w=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{style:{color:"green",background:"lightgrey",borderStyle:"solid",borderRadius:5,padding:10,marginBttom:10,fontSize:20}},n)},j=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{style:{color:"red",background:"lightgrey",borderStyle:"solid",borderRadius:5,padding:10,marginBttom:10,fontSize:20}},n)},O=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),m=Object(l.a)(u,2),f=m[0],h=m[1],b=Object(a.useState)(""),O=Object(l.a)(b,2),y=O[0],C=O[1],S=Object(a.useState)(""),k=Object(l.a)(S,2),N=k[0],R=k[1],B=Object(a.useState)(null),T=Object(l.a)(B,2),D=T[0],P=T[1],z=Object(a.useState)(null),A=Object(l.a)(z,2),F=A[0],I=A[1];return Object(a.useEffect)((function(){g().then((function(e){o(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(w,{message:D}),r.a.createElement(j,{message:F}),r.a.createElement(i,{filter:N,handleFilterChange:function(e){R(e.target.value)}}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(s,{addPerson:function(e){if(e.preventDefault(),t.some((function(e){return e.name===f}))){if(window.confirm("".concat(f," is already added to phonebook, replace the old number with a new one?"))){var n=t.find((function(e){return e.name===f})),a=Object(c.a)(Object(c.a)({},n),{},{number:y}),r=n.id;p(r,a).then((function(e){o(t.map((function(n){return n.id!==r?n:e}))),P("Number changed for ".concat(a.name)),setTimeout((function(){P(null)}),5e3)})).catch((function(e){I("Information of ".concat(n.name," has already been removed from the sercer")),setTimeout((function(){I(null)}),5e3)}))}return h(""),void C("")}v({name:f,number:y}).then((function(e){o(t.concat(e)),h(""),C(""),P("Added ".concat(e.name)),setTimeout((function(){P(null)}),5e3)}))},newName:f,handleNameChange:function(e){h(e.target.value)},newNumber:y,handleNumberChange:function(e){C(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(d,{persons:t,filter:N,handleRemove:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&(E(e),g().then((function(e){o(e),P("Deleted ".concat(n.name)),setTimeout((function(){P(null)}),5e3)})))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.59ee379e.chunk.js.map