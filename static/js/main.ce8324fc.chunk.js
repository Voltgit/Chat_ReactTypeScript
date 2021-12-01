(this["webpackJsonptypescript-chat"]=this["webpackJsonptypescript-chat"]||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(8),s=n.n(r),i=n(7),u=n(13),o=n(2),l=function(){return Object(i.b)()},j=i.c,d=n(5),h=Object(d.b)({name:"app",initialState:{user:null},reducers:{loginUser:function(e,t){e.user=t.payload},logoutUser:function(e){e.user=null}}}),b=h.reducer,m=h.actions,p=m.loginUser,O=m.logoutUser,g=(n(24),Object(d.b)({name:"chat",initialState:{messages:[]},reducers:{addMessage:{reducer:function(e,t){e.messages.push(t.payload)},prepare:function(e){return e.nanoid=Object(d.c)(),{payload:e}}}}})),x=g.reducer,f=g.actions.addMessage;function v(e,t){return function(n,c){if(t){var a={date:Date.now(),owner:e,text:t};n(f(a))}}}var _=Object(d.b)({name:"chatInput",initialState:{value:""},reducers:{changeInputValue:function(e,t){e.value=t.payload},clearInput:function(e){e.value=""}}}),N=_.actions,w=N.changeInputValue,y=N.clearInput,F=_.reducer,I=n(1),k=function(e){var t=l(),n=j((function(e){return e.app.user})),c=j((function(e){return e.chatInput.value}));return Object(I.jsxs)("div",{className:"chat-input",children:[Object(I.jsx)("input",{value:c,onChange:function(e){t(w(e.target.value))},onKeyDown:function(e){"Enter"===e.key&&(t(v(n,c)),t(y()))},placeholder:"Enter the message"}),Object(I.jsx)("button",{onClick:function(){t(v(n,c)),t(y())},children:"\u27a4"})]})},L=n(6);var D;n(26);!function(e){e.owner="owner",e.guest="guest"}(D||(D={}));var V=function(e){var t=e.user,n=e.message,c=e.variant,a=function(e){var t=new Date(e);return["".concat(t.getDate(),".").concat(t.getMonth(),".").concat(t.getFullYear()),"".concat(t.getHours(),":").concat(t.getMinutes())]}(n.date),r=Object(L.a)(a,2),s=r[0],i=r[1];return c=t.name===n.owner.name?D.owner:D.guest,Object(I.jsxs)("div",{className:"chat-item ".concat(c===D.guest?"chat-item_guest":""),children:[Object(I.jsxs)("div",{className:"chat-item__top",children:[Object(I.jsx)("div",{className:"chat-item__username",children:"".concat(n.owner.name)}),Object(I.jsx)("div",{style:{width:"3rem"}}),Object(I.jsxs)("div",{className:"chat-item__date",children:[Object(I.jsx)("span",{children:s}),"\xa0",Object(I.jsx)("span",{children:i})]})]}),Object(I.jsx)("div",{className:"chat-item__bottom",children:Object(I.jsx)("div",{className:"chat-item__message",children:n.text})})]})},C=(n(27),function(e){var t=e.user,n=l(),c=j((function(e){return e.chat.messages}));Date.now();return Object(I.jsxs)("div",{className:"chat",children:[Object(I.jsxs)("div",{className:"chat__header",children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("span",{children:"Username:"}),"\xa0",Object(I.jsx)("span",{className:"chat__username",children:t.name})]}),Object(I.jsx)("div",{className:"chat__logout",children:Object(I.jsx)("span",{onClick:function(){return n(O())},children:"Log out"})})]}),Object(I.jsx)("div",{className:"chat__messages",children:c.map((function(e){return Object(I.jsx)(V,{user:t,message:e},e.nanoid)}))}),Object(I.jsx)(k,{})]})}),E=function(e){var t=e.user;return Object(I.jsx)(I.Fragment,{children:t?Object(I.jsx)(C,{user:t}):Object(I.jsx)(o.a,{to:"/login"})})},M=(n(28),Object(d.b)({name:"userForm",initialState:{value:""},reducers:{changeLoginFormValue:function(e,t){e.value=t.payload},clearLoginFormValue:function(e){e.value=""}}}));var S=M.reducer,U=M.actions,A=U.changeLoginFormValue,J=U.clearLoginFormValue,K=function(){var e=l(),t=j((function(e){return e.loginForm.value})),n=j((function(e){return e.app.user}));function c(){var n;e((n=t,function(e,t){n&&e(p({name:n,isAdmin:!1}))})),e(J())}return Object(I.jsx)(I.Fragment,{children:n?Object(I.jsx)(o.a,{to:"/chat"}):Object(I.jsxs)("div",{className:"login-form",children:[Object(I.jsx)("span",{className:"login-form__title",children:"Login page"}),Object(I.jsx)("input",{value:t,onChange:function(t){e(A(t.target.value))},onKeyDown:function(e){"Enter"===e.key&&c()},placeholder:"Enter username"}),Object(I.jsx)("button",{onClick:c,children:"Log in"})]})})},B=function(e){return Object(I.jsx)(K,{})};n(29);var H=function(){var e=j((function(e){return e.app.user}));return Object(I.jsx)(u.a,{children:Object(I.jsx)("div",{className:"App",children:Object(I.jsx)("div",{className:"wrapper",children:Object(I.jsxs)(o.d,{children:[Object(I.jsx)(o.b,{path:"/chat",element:Object(I.jsx)(E,{user:e})}),Object(I.jsx)(o.b,{path:"/login",element:Object(I.jsx)(B,{})}),Object(I.jsx)(o.b,{path:"*",element:Object(I.jsx)(o.a,{to:"/login"})})]})})})})},T=Object(d.a)({devTools:!0,reducer:{app:b,chat:x,chatInput:F,loginForm:S}});n(30);s.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(i.a,{store:T,children:Object(I.jsx)(H,{})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.ce8324fc.chunk.js.map