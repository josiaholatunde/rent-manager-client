(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,n){},47:function(e,t,n){},75:function(e,t,n){},79:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(15),c=n.n(s),l=(n(47),n(4)),o=n(7),i=n(18),u=n(38),d=n(39),j=n(3),m="CREATE_USER",b="SET_LOGGED_IN_USER",h="SET_ERROR",p="LOG_USER_OUT",O="LOGIN_USER",f="SET_LOADING",g="CREATE_RENT_REQUEST",x={createdUser:null,token:null,user:null,error:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case m:return Object(j.a)(Object(j.a)({},e),{},{createdUser:r});case O:return Object(j.a)(Object(j.a)({},e),{},{token:r.token,user:r.user});case b:return Object(j.a)(Object(j.a)({},e),{},{user:r.user,token:r.token});case h:return Object(j.a)(Object(j.a)({},e),{},{error:r});case p:return Object(j.a)(Object(j.a)({},e),{},{user:null,token:null,error:null,isLoading:!1,createdUser:null,loginMode:null});default:return e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case f:return r;default:return e}},N={rentRequest:null},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case g:return Object(j.a)(Object(j.a)({},e),{},{rentRequest:r});default:return e}},S=Object(i.combineReducers)({auth:v,loading:y,rentRequest:w}),A=[u.a],q=Object(i.createStore)(S,{},Object(d.composeWithDevTools)(i.applyMiddleware.apply(void 0,A))),k=(n(51),n(52),n(14)),T=n(13),E=n.n(T),R=n(17),P=n(40),_=n.n(P),C=n(10),L=Object(C.a)(),I=n(16),U=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5e3;switch(e){case"info":return I.NotificationManager.info(t);case"success":return I.NotificationManager.success(t,n);case"warning":return I.NotificationManager.warning(t,n,r);case"danger":return I.NotificationManager.error(t,n,r);default:return I.NotificationManager.info(t)}},M=_.a.create({baseURL:"http://localhost:6755/api/v1",timeout:1e4,headers:{"Content-Type":"application/json"}});M.interceptors.response.use((function(e){return e}),(function(e){if(e.response&&401===e.response.status){U("danger","Token expired"),L.push({pathname:"/login",state:L.location}),W()}return Promise.reject(e)}));var D=M,F=function(){return{type:f,payload:!0}},B=function(){return{type:f,payload:!1}},G=function(e){e?D.defaults.headers.common.Authorization=e:delete D.defaults.headers.common.Authorization},H=function(e,t){return function(){var n=Object(R.a)(E.a.mark((function n(r){return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{r(F()),setTimeout(Object(R.a)(E.a.mark((function n(){var a,s,c,l;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,D.post("/register",e);case 3:a=n.sent,(s=a.data)&&(c=s.data,r({type:m,payload:c}),r(B()),U("success","Registration was successful"),t.push("/login")),n.next=15;break;case 8:n.prev=8,n.t0=n.catch(0),r(B()),l=n.t0.response&&n.t0.response.data.message,U("danger",l||"Error occurred while creating user account"),n.t0.response&&n.t0.response.data.error&&n.t0.response.data.error.length>0&&(l+="\n"+Object.values(n.t0.response.data.error).map((function(e){return e.msg})).join("\n"),U("danger",l)),r({type:h,payload:l});case 15:case"end":return n.stop()}}),n,null,[[0,8]])}))),2e3)}catch(a){r(B()),console.error("Error",a)}case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},W=function(){return function(){var e=Object(R.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem("user",null),localStorage.setItem("token",null),t(J()),t(K());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},J=function(){return{type:p}},K=function(){return{type:"CLEAR_USER"}},z=function(e,t){var n=t.history,r=t.location;return function(t){try{t(F()),setTimeout(Object(R.a)(E.a.mark((function a(){var s,c,l,o,i,u;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,D.post("/login",e);case 3:s=a.sent,(c=s.data)&&(l=c&&c.data,o=l.token,i=l.user,G(o),t({type:O,payload:{user:i,token:o}}),t(B()),Y({user:i,token:o}),U("success","Login was successful"),r.state&&r.state.pathname?n.push(r.state.pathname):n.push("/rent-request/add")),a.next=15;break;case 8:a.prev=8,a.t0=a.catch(0),t(B()),u=a.t0.response&&a.t0.response.data.message,U("danger",u||"Error occurred while logging in user"),a.t0.response&&a.t0.response.data.error&&a.t0.response.data.error.length>0&&(u+="\n"+Object.values(a.t0.response.data.error).map((function(e){return e.msg})).join("\n"),U("danger",u)),t({type:h,payload:u});case 15:case"end":return a.stop()}}),a,null,[[0,8]])}))),2e3)}catch(a){t(B()),console.log("An error occurred while setting loading")}}},Y=function(e){var t=e.user,n=e.token;t&&localStorage.setItem("user",JSON.stringify(t)),n&&localStorage.setItem("token",n)},Q=(n.p,n(75),n(1)),V=Object(l.g)((function(e){var t=e.history,n=Object(o.d)((function(e){return e.auth})).user,a=Object(o.c)(),s=function(e){if(e&&e.fullName){var t=e.fullName;return t.trim().length>4?t.substr(0,4):t}return e&&e.fullName};return Object(Q.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-purple sticky-top",children:Object(Q.jsxs)("div",{className:"container",children:[Object(Q.jsx)(k.a,{className:"navbar-brand",to:"/",children:Object(Q.jsx)("h3",{children:"Kwaba"})}),Object(Q.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(Q.jsx)("ul",{className:"navbar-nav mr-auto",children:Object(Q.jsx)("li",{className:"nav-item",children:Object(Q.jsx)(k.a,{className:"nav-link",to:"/rent-request/add",children:"Rent Request Application"})})}),Object(Q.jsx)("ul",{className:"navbar-nav nav-right ml-auto",children:n?Object(Q.jsxs)(r.Fragment,{children:[Object(Q.jsx)("li",{className:"nav-item d-flex align-items-center",children:Object(Q.jsxs)("span",{children:["Hello ",s(n)]})}),Object(Q.jsx)("li",{className:"nav-item ml-3",children:Object(Q.jsx)("button",{type:"button",className:"btn btn-outline-light",onClick:function(){return a(W()),t.push("/login"),void U("success","Successfully logged out")},children:"Logout"})})]}):Object(Q.jsxs)(r.Fragment,{children:[Object(Q.jsx)("li",{className:"nav-item d-flex align-items-center px-3",children:Object(Q.jsx)(k.a,{className:"nav-link",to:"/sign-up",children:"Sign up"})}),Object(Q.jsx)("li",{className:"nav-item d-flex align-items-center",children:Object(Q.jsx)(k.a,{className:"btn btn-outline-light",to:"/login",children:"Login"})})]})})]})]})})})),X=n(8),Z=(n(37),function(e,t){if(isNaN(e))return e;var n=t&&t.code?t.code:"NG",r=t&&t.currency?t.currency:"NGN";return new Intl.NumberFormat("en-".concat(n),{style:"currency",currency:r,currencyDisplay:"symbol"}).format(e)}),$=function(){return JSON.parse(localStorage.getItem("user"))},ee=n.p+"static/media/spinner.7942ae58.gif",te=function(e){e.loading;var t=e.message;return Object(Q.jsxs)("div",{style:ne,children:[Object(Q.jsx)("img",{src:ee,alt:"Loader",style:{height:"100vh",width:"100%",objectFit:"contain"}}),Object(Q.jsx)("span",{style:{position:"absolute",top:"72%"},children:t})]})},ne={display:"flex",justifyContent:"center",alignItems:"center"};te.defaultProps={message:"Loading..."};var re=Object(o.b)((function(e){return{loading:e.loading}}))(te),ae=(n(79),Object(o.b)(null,null)(Object(l.g)((function(e){var t=e.history,n=e.salaryAmount,r=e.requestAmount,a=e.paymentPlan,s=e.handleRequestAmount,c=e.handlePaymentPlan,l=(e.handleShouldDisplayPaymentBreakDown,Object(o.c)()),i=Object(o.d)((function(e){return e.loading}));return i?Object(Q.jsx)(re,{}):Object(Q.jsx)("div",{className:"card p-3",children:Object(Q.jsxs)("div",{className:"card-body",children:[Object(Q.jsx)("h5",{className:"text-dark-purple",children:"Payment Breakdown"}),Object(Q.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(function(e,t){return function(n){try{n(F()),setTimeout(Object(R.a)(E.a.mark((function r(){var a,s,c,l,o;return E.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a=$(),r.next=4,D.post("/rent-request",Object(j.a)(Object(j.a)({},e),{},{requester:a._id}));case 4:s=r.sent,(c=s.data)&&(l=c.data,n({type:g,payload:l}),n(B()),U("success","Successfully created rent request"),t.push("/rent-request/add")),r.next=16;break;case 9:r.prev=9,r.t0=r.catch(0),n(B()),o=r.t0.response&&r.t0.response.data.message,U("danger",o||"Error occurred while creating user account"),r.t0.response&&r.t0.response.data.error&&r.t0.response.data.error.length>0&&(o+="\n"+Object.values(r.t0.response.data.error).map((function(e){return e.msg})).join("\n"),U("danger",o)),n({type:h,payload:o});case 16:case"end":return r.stop()}}),r,null,[[0,9]])}))),2e3)}catch(r){n(B()),console.error("Error",r)}}}({requestAmount:r,paymentPlan:a,salaryAmount:n},t))},className:"mt-3",children:[Object(Q.jsxs)("div",{className:"form-group my-3",children:[Object(Q.jsx)("label",{children:"Rent request amount ?"}),Object(Q.jsx)("input",{type:"number",name:"requestAmount",value:r,className:"form-control",onChange:function(e){var t=e.target.value;return s(t)},placeholder:"Amount"})]}),Object(Q.jsxs)("div",{className:"form-group my-3",children:[Object(Q.jsx)("label",{children:"Monthly payment plan ?"}),Object(Q.jsxs)("select",{className:"form-control",name:"paymentPlan",value:a,onChange:function(e){var t=e.target.value;return c(t)},children:[Object(Q.jsx)("option",{value:"1",children:"1 Month"}),Object(Q.jsx)("option",{value:"3",children:"3 Months"}),Object(Q.jsx)("option",{value:"6",children:"6 Months"}),Object(Q.jsx)("option",{value:"12",children:"12 Months"})]})]}),Object(Q.jsxs)("div",{className:"form-group my-3",children:[Object(Q.jsx)("label",{children:"Payment Option "}),Object(Q.jsxs)("div",{className:"card light-purple payment-option-card p-3",children:[Object(Q.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(Q.jsx)("div",{children:" Pre-approved amount"}),Object(Q.jsxs)("div",{children:[" ",Z(r)," "]})]}),Object(Q.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(Q.jsx)("div",{children:" Monthly Payment"}),Object(Q.jsxs)("div",{children:[" ",function(e,t){var n=e/t,r=(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"http://localhost:6755/api/v1"}).MONTHLY_INTEREST||2)+100;return Z(r*n/100)}(r,a)," "]})]}),Object(Q.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(Q.jsx)("div",{children:" Tenor"}),Object(Q.jsxs)("div",{children:["  ",a,1===a?" month":" months"," "]})]})]})]}),Object(Q.jsx)("div",{className:"form-group my-5",children:Object(Q.jsx)("input",{type:"submit",className:"btn btn-lg btn-purple form-control",value:"Accept"})})]})]})})})))),se=n(25),ce=(n(80),function(e){var t=e.handleRentRequest,n=e.salaryAmount,a=e.paymentPlan,s=e.requestAmount,c=e.handleRequestAmount,l=e.handlePaymentPlan,o=e.handleSalaryAmount,i=Object(r.useState)("renew_rent"),u=Object(X.a)(i,2),d=u[0],m=u[1],b=Object(r.useState)({}),h=Object(X.a)(b,2),p=h[0],O=h[1];return Object(Q.jsx)("div",{className:"card p-3",children:Object(Q.jsxs)("div",{className:"card-body",children:[Object(Q.jsxs)("div",{class:"d-flex justify-content-between",children:[Object(Q.jsx)("h5",{className:"text-dark-purple",children:"Payment Option"}),Object(Q.jsx)("div",{className:"d-flex",style:{width:30,height:30},children:Object(Q.jsx)(se.a,{value:50,text:"50%",styles:Object(se.b)({backgroundColor:"#25dc99"})})})]}),Object(Q.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(){var e={};return s&&0!==s.trim().length||(e.requestAmount="The request amount field is required"),n&&0!==n.trim().length||(e.salaryAmount="The salary amount field is required"),a||(e.paymentPlan="The payment plan field is required"),!(Object.keys(e).length>0)||(O(e),!1)}()&&t({requestAmount:s,salaryAmount:n,paymentPlan:a})},className:"mt-3",children:[Object(Q.jsxs)("div",{className:"form-group",children:[Object(Q.jsx)("label",{children:"What's your accomodation status ?"}),Object(Q.jsx)("div",{className:"burger-card".concat(" ","renew_rent"===d&&"purple"),onClick:function(){return m("renew_rent")},children:"Looking to renew my rent"}),Object(Q.jsx)("div",{className:"burger-card my-3 ".concat("pay_new_place"===d&&"purple"),onClick:function(){return m("pay_new_place")},children:"Want to pay for a new place"}),Object(Q.jsx)("div",{className:"burger-card ".concat("still_searching"===d&&"purple"),onClick:function(){return m("still_searching")},children:"I'm still searching"})]}),Object(Q.jsxs)("div",{className:"form-group my-3",children:[Object(Q.jsx)("label",{children:"How much is your rent request amount ?"}),Object(Q.jsx)("input",{type:"number",name:"requestAmount",value:s,className:"form-control",onChange:function(e){var t=e.target.value;c(t),function(e){var t=Object(j.a)({},p);e&&0!==e.trim().length?delete t.requestAmount:t.requestAmount="The request amount field is required",O(t)}(t)},placeholder:"Amount"}),p.requestAmount&&Object(Q.jsx)("span",{className:"text-danger error-text",children:p.requestAmount})]}),Object(Q.jsxs)("div",{className:"form-group my-3",children:[Object(Q.jsx)("label",{children:"How much do you earn monthly ?"}),Object(Q.jsx)("input",{type:"number",name:"salaryAmount",value:n,className:"form-control",onChange:function(e){var t=e.target.value;o(t),function(e){var t=Object(j.a)({},p);e&&0!==e.trim().length?delete t.salaryAmount:t.salaryAmount="The salary amount field is required",O(t)}(t)},placeholder:"Amount"}),p.salaryAmount&&Object(Q.jsx)("span",{className:"text-danger error-text",children:p.salaryAmount})]}),Object(Q.jsxs)("div",{className:"form-group my-3",children:[Object(Q.jsx)("label",{children:"Choose a monthly payment plan ?"}),Object(Q.jsxs)("select",{className:"form-control",name:"paymentPlan",value:a,onChange:function(e){var t=e.target.value;l(t)},children:[Object(Q.jsx)("option",{value:"1",children:"1 Month"}),Object(Q.jsx)("option",{value:"3",children:"3 Months"}),Object(Q.jsx)("option",{value:"6",children:"6 Months"}),Object(Q.jsx)("option",{value:"12",children:"12 Months"})]}),p.paymentPlan&&Object(Q.jsx)("span",{className:"text-danger error-text",children:p.paymentPlan})]}),Object(Q.jsx)("div",{className:"form-group my-5",children:Object(Q.jsx)("input",{type:"submit",disabled:Object.keys(p).length>0,className:"btn btn-lg btn-green form-control",value:"Next"})})]})]})})}),le=function(){var e=Object(r.useState)(""),t=Object(X.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(""),c=Object(X.a)(s,2),l=c[0],o=c[1],i=Object(r.useState)(""),u=Object(X.a)(i,2),d=u[0],j=u[1],m=Object(r.useState)(!1),b=Object(X.a)(m,2),h=b[0],p=b[1];return Object(Q.jsx)("div",{className:"row mt-5",children:Object(Q.jsxs)("div",{className:"col-lg-6 offset-lg-3",children:[Object(Q.jsx)("h5",{children:"My Rent"}),h?Object(Q.jsx)(ae,{salaryAmount:l,handleRequestAmount:a,handlePaymentPlan:j,requestAmount:n,paymentPlan:d,handleShouldDisplayPaymentBreakDown:function(e){return p(e)}}):Object(Q.jsx)(ce,{handleRentRequest:function(){p(!0)},handleRequestAmount:a,handlePaymentPlan:j,handleSalaryAmount:o,requestAmount:n,paymentPlan:d,salaryAmount:l})]})})},oe=Object(o.b)(null,{createUserAccount:H})(Object(l.g)((function(e){var t=e.history,n=Object(r.useState)(""),a=Object(X.a)(n,2),s=a[0],c=a[1],l=Object(r.useState)(""),i=Object(X.a)(l,2),u=i[0],d=i[1],m=Object(r.useState)(""),b=Object(X.a)(m,2),h=b[0],p=b[1],O=Object(r.useState)({}),f=Object(X.a)(O,2),g=f[0],x=f[1],v=Object(o.c)(),y=Object(o.d)((function(e){return e.loading}));return y?Object(Q.jsx)(re,{}):Object(Q.jsx)("div",{className:"row mt-5",children:Object(Q.jsxs)("div",{className:"col-lg-6 offset-lg-3",children:[Object(Q.jsx)("h5",{children:"Register"}),Object(Q.jsx)("div",{className:"card p-3",children:Object(Q.jsx)("div",{className:"card-body",children:Object(Q.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={};if(s&&0!==s.trim().length||(n.userName="The user name field is required"),u&&0!==u.trim().length||(n.fullName="The full name field is required"),h&&0!==h.trim().length||(n.password="The password field is required"),Object.keys(n).length>0)return x(n),!1;v(H({userName:s,fullName:u,password:h},t))},children:[Object(Q.jsxs)("div",{className:"form-group",children:[Object(Q.jsx)("label",{htmlFor:"userName",children:" Username "}),Object(Q.jsx)("input",{type:"text",name:"userName",value:s,id:"userName",className:"form-control",onChange:function(e){var t=e.target.value;c(t),function(e){var t=Object(j.a)({},g);e&&0!==e.trim().length?delete t.userName:t.userName="The user name field is required",x(t)}(t)},placeholder:"Enter your preferred username ?"}),g.userName&&Object(Q.jsx)("span",{className:"text-danger error-text",children:g.userName})]}),Object(Q.jsxs)("div",{className:"form-group",children:[Object(Q.jsx)("label",{htmlFor:"fullName",children:" Full Name "}),Object(Q.jsx)("input",{type:"text",name:"fullName",value:u,id:"fullName",className:"form-control",onChange:function(e){var t=e.target.value;d(t),function(e){var t=Object(j.a)({},g);e&&0!==e.trim().length?delete t.fullName:t.fullName="The full name field is required",x(t)}(t)},placeholder:"Enter your full name ?"}),g.fullName&&Object(Q.jsx)("span",{className:"text-danger error-text",children:g.fullName})]}),Object(Q.jsxs)("div",{className:"form-group",children:[Object(Q.jsx)("label",{htmlFor:"password",children:" Password "}),Object(Q.jsx)("input",{type:"password",name:"password",value:h,id:"password",className:"form-control",onChange:function(e){var t=e.target.value;p(t),function(e){var t=Object(j.a)({},g);e&&0!==e.trim().length?delete t.password:t.password="The password field is required",x(t)}(t)},placeholder:"Enter your password ?"}),g.password&&Object(Q.jsx)("span",{className:"text-danger error-text",children:g.password})]}),Object(Q.jsx)("div",{className:"form-group",children:Object(Q.jsx)("input",{type:"submit",disabled:Object.keys(g).length>0,className:"btn btn-lg btn-purple form-control",value:"Register"})})]})})})]})})}))),ie=Object(o.b)(null,{loginUser:z})(Object(l.g)((function(e){var t=e.history,n=e.location,a=Object(r.useState)(""),s=Object(X.a)(a,2),c=s[0],l=s[1],i=Object(r.useState)(""),u=Object(X.a)(i,2),d=u[0],m=u[1],b=Object(r.useState)({}),h=Object(X.a)(b,2),p=h[0],O=h[1],f=Object(o.c)(),g=Object(o.d)((function(e){return e.loading}));return g?Object(Q.jsx)(re,{}):Object(Q.jsx)("div",{className:"row mt-5",children:Object(Q.jsxs)("div",{className:"col-lg-6 offset-lg-3",children:[Object(Q.jsx)("h5",{children:"Login"}),Object(Q.jsx)("div",{className:"card p-3",children:Object(Q.jsx)("div",{className:"card-body",children:Object(Q.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r={};if(c&&0!==c.trim().length||(r.userName="The user name field is required"),d&&0!==d.trim().length||(r.password="The password field is required"),Object.keys(r).length>0)return O(r),!1;f(z({userName:c,password:d},{history:t,location:n}))},children:[Object(Q.jsxs)("div",{className:"form-group",children:[Object(Q.jsx)("label",{htmlFor:"userName",children:" Username "}),Object(Q.jsx)("input",{type:"text",name:"userName",value:c,id:"userName",className:"form-control",onChange:function(e){var t=e.target.value;l(t),function(e){var t=Object(j.a)({},p);e&&0!==e.trim().length?delete t.userName:t.userName="The user name field is required",O(t)}(t)},placeholder:"Enter your preferred username ?"}),p.userName&&Object(Q.jsx)("span",{className:"text-danger error-text",children:p.userName})]}),Object(Q.jsxs)("div",{className:"form-group",children:[Object(Q.jsx)("label",{htmlFor:"password",children:" Password "}),Object(Q.jsx)("input",{type:"password",name:"password",value:d,id:"password",className:"form-control",onChange:function(e){var t=e.target.value;m(t),function(e){var t=Object(j.a)({},p);e&&0!==e.trim().length?delete t.password:t.password="The password field is required",O(t)}(t)},placeholder:"Enter your password ?"}),p.password&&Object(Q.jsx)("span",{className:"text-danger error-text",children:p.password})]}),Object(Q.jsx)("div",{className:"form-group",children:Object(Q.jsx)("input",{type:"submit",disabled:Object.keys(p).length>0,className:"btn btn-lg btn-purple form-control",value:"Login"})})]})})})]})})}))),ue=(n(81),function(){return Object(Q.jsx)(r.Fragment,{children:Object(Q.jsx)(I.NotificationContainer,{})})}),de=(n(82),n(41)),je=["isUserLoggedIn","component"],me=Object(o.b)((function(e){return{isUserLoggedIn:null!==e.auth.user}}))((function(e){var t=e.isUserLoggedIn,n=e.component,r=Object(de.a)(e,je);return t||U("You are not authorized to access this route"),Object(Q.jsx)(l.b,Object(j.a)(Object(j.a)({},r),{},{render:function(e){return t?Object(Q.jsx)(n,Object(j.a)({},e)):Object(Q.jsx)(l.a,{to:{pathname:"/login",state:e.location}})}}))})),be=localStorage.getItem("token"),he=localStorage.getItem("user");be&&he&&Object.keys(he).length>0&&(G(be),he=JSON.parse(he),q.dispatch({type:b,payload:{user:he,token:be}}));var pe=function(){return Object(Q.jsx)("div",{className:"App",children:Object(Q.jsx)(o.a,{store:q,children:Object(Q.jsxs)(l.c,{history:L,children:[Object(Q.jsx)(V,{}),Object(Q.jsx)("div",{className:"container py-2",children:Object(Q.jsxs)(l.d,{children:[Object(Q.jsx)(l.b,{path:"/login",exact:!0,component:ie}),Object(Q.jsx)(l.b,{path:"/sign-up",exact:!0,component:oe}),Object(Q.jsx)(me,{path:"/rent-request/add",exact:!0,component:le})]})}),Object(Q.jsx)(ue,{})]})})})},Oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};c.a.render(Object(Q.jsx)(a.a.StrictMode,{children:Object(Q.jsx)(pe,{})}),document.getElementById("root")),Oe()}},[[83,1,2]]]);
//# sourceMappingURL=main.17a1d8b4.chunk.js.map