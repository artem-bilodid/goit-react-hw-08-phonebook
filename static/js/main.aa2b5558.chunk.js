(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],[,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return a}));var r={};n.r(r),n.d(r,"signupRequest",(function(){return d})),n.d(r,"signupSuccess",(function(){return l})),n.d(r,"signupError",(function(){return j})),n.d(r,"loginRequest",(function(){return p})),n.d(r,"loginSuccess",(function(){return h})),n.d(r,"loginError",(function(){return O})),n.d(r,"logoutRequest",(function(){return g})),n.d(r,"logoutSuccess",(function(){return v})),n.d(r,"logoutError",(function(){return x})),n.d(r,"getCurrentUserRequest",(function(){return m})),n.d(r,"getCurrentUserSuccess",(function(){return w})),n.d(r,"getCurrentUserError",(function(){return k}));var c={};n.r(c),n.d(c,"setToken",(function(){return y})),n.d(c,"login",(function(){return C})),n.d(c,"signup",(function(){return U})),n.d(c,"logout",(function(){return I})),n.d(c,"getCurrentUser",(function(){return S}));var u={};n.r(u),n.d(u,"getUser",(function(){return R})),n.d(u,"getToken",(function(){return P})),n.d(u,"getIsLoggedIn",(function(){return L})),n.d(u,"getIsCurrentUserRetreived",(function(){return q}));var a={};n.r(a),n.d(a,"auth",(function(){return G}));var o,s,i,f,b=n(3),d=Object(b.b)("auth/signup/request"),l=Object(b.b)("auth/signup/success"),j=Object(b.b)("auth/signup/error"),p=Object(b.b)("auth/login/request"),h=Object(b.b)("auth/login/success"),O=Object(b.b)("auth/login/error"),g=Object(b.b)("auth/logout/request"),v=Object(b.b)("auth/logout/success"),x=Object(b.b)("auth/logout/error"),m=Object(b.b)("auth/getCurrentUser/request"),w=Object(b.b)("auth/getCurrentUser/success"),k=Object(b.b)("auth/getCurrentUser/error"),_=n(5),N=n.n(_),E=n(8),T=n(15),y=function(e){T.g(e)},C=function(e){var t=e.email,n=e.password;return function(){var e=Object(E.a)(N.a.mark((function e(c){var u,a,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(r.loginRequest()),e.prev=1,e.next=4,T.e({email:t,password:n});case 4:u=e.sent,a=u.user,o=u.token,c(r.loginSuccess({user:a,token:o})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),c(r.loginError());case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},U=function(e){var t=e.name,n=e.email,c=e.password;return function(){var e=Object(E.a)(N.a.mark((function e(u){var a,o,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(r.signupRequest()),e.prev=1,e.next=4,T.h({name:t,email:n,password:c});case 4:a=e.sent,o=a.user,s=a.token,u(r.signupSuccess({user:o,token:s})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),u(r.signupError());case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},I=function(){return function(){var e=Object(E.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(r.logoutRequest()),e.prev=1,e.next=4,T.f();case 4:t(r.logoutSuccess()),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t(r.logoutError());case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},S=function(e){var t=e.email,n=e.password;return function(){var e=Object(E.a)(N.a.mark((function e(c){var u,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(r.getCurrentUserRequest()),e.prev=1,e.next=4,T.d({email:t,password:n});case 4:u=e.sent,a=u.user,c(r.getCurrentUserSuccess({user:a})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),c(r.getCurrentUserError());case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},R=function(e){return e.auth.user},P=function(e){return e.auth.token},L=function(e){return e.auth.isLoggedIn},q=function(e){return e.auth.isCurrentUserRetreived},A=n(4),D=n(6),M={name:null,email:null},B=Object(b.c)(M,(o={},Object(A.a)(o,l,(function(e,t){return t.payload.user})),Object(A.a)(o,h,(function(e,t){return t.payload.user})),Object(A.a)(o,v,(function(){return M})),Object(A.a)(o,w,(function(e,t){return t.payload})),o)),z=Object(b.c)(null,(s={},Object(A.a)(s,l,(function(e,t){return t.payload.token})),Object(A.a)(s,h,(function(e,t){return t.payload.token})),Object(A.a)(s,v,(function(){return null})),s)),F=Object(b.c)(!1,(i={},Object(A.a)(i,l,(function(){return!0})),Object(A.a)(i,h,(function(){return!0})),Object(A.a)(i,w,(function(){return!0})),Object(A.a)(i,v,(function(){return!1})),i)),J=Object(b.c)(!1,(f={},Object(A.a)(f,w,(function(){return!0})),Object(A.a)(f,l,(function(){return!0})),Object(A.a)(f,h,(function(){return!0})),Object(A.a)(f,v,(function(){return!1})),f)),G=Object(D.b)({user:B,token:z,isLoggedIn:F,isCurrentUserRetreived:J})},,,function(e,t,n){"use strict";n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return u})),n.d(t,"g",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return b})),n.d(t,"d",(function(){return d}));var r=n(3),c=Object(r.b)("contacts/get/request"),u=Object(r.b)("contacts/get/success"),a=Object(r.b)("contacts/get/error"),o=Object(r.b)("contacts/add/request"),s=Object(r.b)("contacts/add/success"),i=Object(r.b)("contacts/add/error"),f=Object(r.b)("contacts/delete/request"),b=Object(r.b)("contacts/delete/success"),d=Object(r.b)("contacts/delete/error")},,,function(e,t,n){"use strict";n.d(t,"g",(function(){return j})),n.d(t,"h",(function(){return p})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return O})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return v})),n.d(t,"a",(function(){return x})),n.d(t,"b",(function(){return m}));var r=n(5),c=n.n(r),u=n(8),a={BASE_URL:"https://connections-api.herokuapp.com",SIGNUP_ENDPOINT:"users/signup",LOGIN_ENDPOINT:"users/login",LOGOUT_ENDPOINT:"users/logout",CURRENT_USER_ENDPOINT:"users/current",CONTACTS_ENDPOINT:"contacts"},o=a.BASE_URL,s=a.SIGNUP_ENDPOINT,i=a.LOGIN_ENDPOINT,f=a.LOGOUT_ENDPOINT,b=a.CURRENT_USER_ENDPOINT,d=a.CONTACTS_ENDPOINT,l="",j=function(e){l=e},p=function(){var e=Object(u.a)(c.a.mark((function e(t){var n,r,u,a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.email,u=t.password,e.prev=1,e.next=4,fetch("".concat(o,"/").concat(s),{method:"POST",body:JSON.stringify({name:n,email:r,password:u}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l)}});case 4:if((a=e.sent).ok){e.next=7;break}throw new Error(a.statusText);case 7:return e.next=9,a.json();case 9:return i=e.sent,e.abrupt("return",i);case 13:throw e.prev=13,e.t0=e.catch(1),new Error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(c.a.mark((function e(t){var n,r,u,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,r=t.password,e.prev=1,e.next=4,fetch("".concat(o,"/").concat(i),{method:"POST",body:JSON.stringify({email:n,password:r}),headers:{"Content-Type":"application/json"}});case 4:if((u=e.sent).ok){e.next=7;break}throw new Error(u.statusText);case 7:return e.next=9,u.json();case 9:return a=e.sent,e.abrupt("return",a);case 13:throw e.prev=13,e.t0=e.catch(1),new Error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/").concat(f),{method:"POST",headers:{Authorization:"Bearer ".concat(l)}});case 3:if((t=e.sent).ok){e.next=6;break}throw new Error(t.statusText);case 6:return e.next=8,t.json();case 8:return n=e.sent,e.abrupt("return",n);case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/").concat(b),{headers:{Authorization:"Bearer ".concat(l)}});case 3:if((t=e.sent).ok){e.next=6;break}throw new Error(t.statusText);case 6:return e.next=8,t.json();case 8:return n=e.sent,e.abrupt("return",n);case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/").concat(d),{headers:{Authorization:"Bearer ".concat(l)}});case 3:if((t=e.sent).ok){e.next=6;break}throw new Error(t.statusText);case 6:return e.next=8,t.json();case 8:return n=e.sent,e.abrupt("return",n);case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(c.a.mark((function e(t){var n,r,u,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.number,e.prev=1,e.next=4,fetch("".concat(o,"/").concat(d),{method:"POST",body:JSON.stringify({name:n,number:r}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l)}});case 4:if((u=e.sent).ok){e.next=7;break}throw new Error(u.statusText);case 7:return e.next=9,u.json();case 9:return a=e.sent,e.abrupt("return",a);case 13:throw e.prev=13,e.t0=e.catch(1),new Error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/").concat(d,"/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(l)}});case 3:if((n=e.sent).ok){e.next=6;break}throw new Error(n.statusText);case 6:return e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},function(e,t,n){e.exports={navigation:"Navigation_navigation__1EgxP",userMenu:"Navigation_userMenu__1YHf4",link:"Navigation_link__2BM9A",active:"Navigation_active__3kWJm"}},function(e,t,n){e.exports={userMenu:"UserMenu_userMenu__RecPU",link:"UserMenu_link__11Lyo",active:"UserMenu_active__3p9o7",name:"UserMenu_name__ShW9l",logout:"UserMenu_logout__tOJWD"}},,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(26),c=n.n(r),u=n(1),a=function(e){var t=e.children;return Object(u.jsx)("div",{className:c.a.container,children:t})}},function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(3),c=Object(r.b)("filter/change")},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(28),c=n.n(r),u=n(29),a=n.n(u),o=n(1),s=function(){return Object(o.jsx)("div",{className:c.a.loaderContainer,children:Object(o.jsx)(a.a,{color:"#71b6f9",loading:!0,css:"\n    display: block;\n    margin: 0 auto;\n  ",size:15})})}},function(e,t,n){e.exports={header:"Header_header__1v0yI"}},function(e,t,n){e.exports={container:"Container_container__3eZVY"}},,function(e,t,n){e.exports={loaderContainer:"Loader_loaderContainer__NmpJF"}},,,,,,,function(e,t,n){},,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r,c,u=n(0),a=n.n(u),o=n(18),s=n.n(o),i=(n(34),n(35),n(2)),f=n(25),b=n.n(f),d=n(1),l=function(e){var t=e.children;return Object(d.jsx)("header",{className:b.a.header,children:t})},j=n(22),p=n(16),h=n.n(p),O=n(11),g=n(17),v=n.n(g),x=n(10),m=n(9),w=function(e){var t=function(e){return e.isActive?v.a.active:v.a.link},n=Object(x.b)(),r=Object(x.c)(m.d.getToken),c=Object(x.c)(m.d.getIsLoggedIn),a=Object(x.c)(m.d.getIsCurrentUserRetreived),o=Object(x.c)(m.d.getUser).name;Object(u.useEffect)((function(){r&&m.b.setToken(r)}),[r]);return Object(d.jsx)(d.Fragment,{children:c&&a?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{className:v.a.name,children:o}),Object(d.jsx)("button",{className:v.a.logout,type:"button",onClick:function(){n(m.b.logout())},children:"Logout"})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O.b,{className:t,to:"/register",children:"Register"}),Object(d.jsx)(O.b,{className:t,to:"/login",children:"Login"})]})})},k=function(e){var t=Object(x.c)(m.d.getIsLoggedIn),n=Object(x.c)(m.d.getIsCurrentUserRetreived);return Object(d.jsxs)("nav",{className:h.a.navigation,children:[t&&n&&Object(d.jsx)(O.b,{className:function(e){return e.isActive?h.a.active:h.a.link},to:"/",children:"Contacts"}),Object(d.jsx)("div",{className:h.a.userMenu,children:Object(d.jsx)(w,{})})]})},_=n(24),N=Object(u.lazy)((function(){return n.e(0).then(n.bind(null,60))})),E=Object(u.lazy)((function(){return n.e(1).then(n.bind(null,61))})),T=Object(u.lazy)((function(){return n.e(2).then(n.bind(null,62))})),y=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l,{children:Object(d.jsx)(j.a,{children:Object(d.jsx)(k,{})})}),Object(d.jsx)(u.Suspense,{fallback:Object(d.jsx)(_.a,{}),children:Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{path:"/",element:Object(d.jsx)(N,{})}),Object(d.jsx)(i.b,{path:"/login",element:Object(d.jsx)(E,{})}),Object(d.jsx)(i.b,{path:"/register",element:Object(d.jsx)(T,{})})]})})]})},C=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,59)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,u=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),u(e),a(e)}))},U=n(3),I=n(4),S=n(6),R=n(12),P=Object(U.c)([],Object(I.a)({},R.i,(function(e,t){return t.payload}))),L=Object(U.c)(!0,(r={},Object(I.a)(r,R.h,(function(){return!0})),Object(I.a)(r,R.i,(function(){return!1})),Object(I.a)(r,R.g,(function(){return!1})),r)),q=Object(U.c)(!0,(c={},Object(I.a)(c,R.i,(function(){return!1})),Object(I.a)(c,R.c,(function(){return!0})),Object(I.a)(c,R.f,(function(){return!0})),c)),A=Object(S.b)({items:P,isLoading:L,isInvalidated:q}),D=n(23),M=Object(U.c)("",Object(I.a)({},D.a,(function(e,t){return t.payload}))),B=Object(U.a)({reducer:{contacts:A,filter:M,auth:m.c.auth}});s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(x.a,{store:B,children:Object(d.jsx)(O.a,{children:Object(d.jsx)(y,{})})})}),document.getElementById("root")),C()}],[[49,4,5]]]);
//# sourceMappingURL=main.aa2b5558.chunk.js.map