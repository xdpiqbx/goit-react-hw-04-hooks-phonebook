(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__3oYqT",ContactForm__title:"ContactForm_ContactForm__title__19mIi",ContactForm__input:"ContactForm_ContactForm__input__1AxIu",ContactForm__btn:"ContactForm_ContactForm__btn__sdtxx"}},,,function(t,e,n){t.exports={listItem:"Contact_listItem__1sRQ9",name:"Contact_name__2jhqD",btn:"Contact_btn__2cm3g"}},,,function(t,e,n){t.exports={AppContainer:"App_AppContainer__3kkDy",contacts__title:"App_contacts__title__rqq1-"}},,,function(t,e,n){t.exports={list:"ContactList_list__1tVwz"}},function(t,e,n){t.exports={container:"Filter_container__2xSK1"}},,,,,,function(t,e,n){},,,function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),o=n.n(a),r=n(11),s=n.n(r),i=(n(19),n(10)),l=n(4),u=n(9),m=n.n(u),j=n(3),b=n.n(j),_=n(24),d=function(t){var e=Object(a.useState)(""),n=Object(l.a)(e,2),o=n[0],r=n[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),u=i[0],m=i[1],j=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":return void r(c);case"number":return void m(c);default:return}};return Object(c.jsx)("div",{className:b.a.ContactForm,children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o&&u&&t.getContact({id:Object(_.a)(),name:o,number:u}),r(""),m("")},children:[Object(c.jsxs)("label",{children:[Object(c.jsx)("span",{className:b.a.ContactForm__title,children:"Name"}),Object(c.jsx)("input",{className:b.a.ContactForm__input,type:"text",name:"name",value:o,onChange:j})]}),Object(c.jsxs)("label",{children:[Object(c.jsx)("span",{className:b.a.ContactForm__title,children:"Phone"}),Object(c.jsx)("input",{className:b.a.ContactForm__input,type:"text",name:"number",value:u,onChange:j})]}),Object(c.jsx)("button",{className:b.a.ContactForm__btn,type:"submit",children:"Add contact"})]})})},f=n(2),p=n.n(f),h=n(6),O=n.n(h),C=function(t){var e=t.contact,n=t.deleteContact;return Object(c.jsxs)("li",{className:O.a.listItem,children:[Object(c.jsxs)("span",{className:O.a.name,children:[e.name,": "]}),Object(c.jsx)("span",{className:O.a.number,children:e.number}),Object(c.jsx)("button",{className:O.a.btn,type:"button",onClick:function(){return n(e.id)},children:"Delete"})]})},x=n(12),g=n.n(x),v=function(t){var e=t.contacts,n=t.deleteContact;return e.length>0?Object(c.jsx)("ul",{className:g.a.list,children:e.map((function(t){return Object(c.jsx)(C,{contact:t,deleteContact:n},t.id)}))}):Object(c.jsx)("h2",{children:"There is no contacts"})},F=v;v.protoTypes={contacts:p.a.objectOf(p.a.shape({name:p.a.string,number:p.a.string,id:p.a.string})),deleteContact:p.a.func};var N=n(13),S=n.n(N),y=function(t){var e=t.filter,n=t.filterHandler;return Object(c.jsxs)("div",{className:S.a.container,children:[Object(c.jsx)("h3",{children:"Find contacts by name"}),Object(c.jsx)("input",{name:"filter",value:e,onChange:n})]})},k=y;function I(){var t=Object(a.useState)(""),e=Object(l.a)(t,2),n=e[0],o=e[1],r=Object(a.useState)(""),s=Object(l.a)(r,2),u=s[0],j=s[1];Object(a.useEffect)((function(){var t,e=localStorage.getItem("contacts");o(Object(i.a)(null!==(t=JSON.parse(e))&&void 0!==t?t:[]))}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(c.jsxs)("div",{className:m.a.AppContainer,children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(d,{getContact:function(t){if(n&&n.find((function(e){return e.name===t.name})))return void alert("".concat(t.name," is already in contacts"));o((function(e){return[t].concat(Object(i.a)(e))}))}}),Object(c.jsx)("h2",{className:m.a.contacts__title,children:"Contacts"}),Object(c.jsx)(k,{filterHandler:function(t){var e=t.currentTarget.value;j(e)}}),Object(c.jsx)(F,{contacts:u?n.filter((function(t){return t.name.toLowerCase().includes(u.toLowerCase())})):n,deleteContact:function(t){var e=localStorage.getItem("contacts"),n=JSON.parse(e).filter((function(e){return e.id!==t}));o(n)}})]})}y.protoTypes={filter:p.a.string,filterHandler:p.a.func};var w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),o(t),r(t)}))};s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(I,{})}),document.getElementById("root")),w()}],[[22,1,2]]]);
//# sourceMappingURL=main.e64b17f0.chunk.js.map