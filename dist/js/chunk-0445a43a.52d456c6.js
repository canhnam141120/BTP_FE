(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0445a43a"],{"0418":function(t,e,n){"use strict";var r=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{display:"flex","flex-direction":"column","min-height":"100vh"}},[e("header",{staticClass:"Main__header"},[e("div",{staticClass:"Main__header__container"},[t._m(0),e("div",[e("nav",{staticClass:"Main__nav",staticStyle:{"padding-left":"50px"}},[e("router-link",{staticClass:"Main__list__item home",attrs:{to:"/","active-color":"#9D6B54"}},[t._v("Trang Chủ ")]),e("router-link",{staticClass:"Main__list__item course-management btnCategory",attrs:{to:"/AllBooks","active-color":"#9D6B54"}},[t._v("Tủ sách")]),e("router-link",{staticClass:"Main__list__item class-management",attrs:{to:"/BlogIndex","active-color":"#9D6B54"}},[t._v("Trạm đọc ")]),e("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/Policy&Terms","active-color":"#9D6B54"}},[t._v("Chính sách & điều khoản ")]),e("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/users-management","active-color":"#9D6B54"}},[t._v("Quy trình ")]),e("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/users-management","active-color":"#9D6B54"}},[t._v("Giới thiệu ")])],1)]),e("ul",{staticClass:"Main__account"},[this.$cookies.get("token")?e("nav",[e("li",[e("b-dropdown",{attrs:{variant:"black","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("Icon",{staticClass:"icon",attrs:{icon:"tabler:bell-ringing-2"}}),e("div",{staticClass:"countNoti"},[t._v(t._s(t.count))])]},proxy:!0}])},[e("div",{staticClass:"titleNoti"},[t._v("Thông Báo")]),""!=t.noti?e("div",[t._l(t.noti,(function(n){return e("div",{key:n.id,staticClass:"notification"},[n.isRead?e("div",{staticStyle:{padding:"5px 10px"}},[t._v(t._s(n.content))]):e("div",{staticStyle:{"background-color":"#F0ECE4","border-radius":"5px",padding:"5px 10px"}},[t._v(t._s(n.content))])])})),e("div",{staticClass:"allNoti"},[e("router-link",{staticClass:"linkAllNoti",attrs:{to:"AllNotification"}},[t._v("Xem tất cả")])],1)],2):e("div",{staticClass:"noBookNoti"},[t._v("Danh sách trống!")])])],1),e("li",[e("b-dropdown",{attrs:{right:"",text:"Right align",variant:"black","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("img",{staticClass:"icon",attrs:{src:t.user.avatar}})]},proxy:!0}])},[e("div",{staticClass:"dropdown-item-top"},[e("img",{staticClass:"icon",attrs:{src:t.user.avatar}}),e("div",[t._v(t._s(t.user.fullname))]),e("div",{staticStyle:{color:"grey"}},[t._v(t._s(t.user.email))])]),e("hr",{staticStyle:{margin:"5px"}}),e("router-link",{staticClass:"dropdown-item",attrs:{to:"/MyBooks"}},[e("Icon",{staticClass:"iconPerson",attrs:{icon:"ic:round-person-pin"}}),t._v(" Trang cá nhân ")],1),e("hr",{staticStyle:{margin:"5px"}}),1==t.user.roleId||2==t.user.roleId?e("div",[e("router-link",{staticClass:"dropdown-item",attrs:{to:"/ManageIndex"}},[e("Icon",{staticClass:"iconPerson",attrs:{icon:"bi:list-task"}}),t._v(" Quản trị ")],1),e("hr",{staticStyle:{margin:"5px"}})],1):t._e(),e("button",{staticClass:"dropdown-item",on:{click:t.HandleLogout}},[e("Icon",{staticClass:"iconPerson",attrs:{icon:"uil:signout"}}),t._v(" Đăng xuất ")],1)],1)],1)]):e("nav",[e("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/login"}},[t._v("Đăng nhập")]),e("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/register"}},[t._v("Đăng ký")])],1)])])]),t._t("default")],2)},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"Main__logo"},[e("a",{attrs:{href:"/"}},[e("img",{attrs:{src:n("d8b4"),alt:"Logo Trạm Sách"}})])])}],o=n("48ac"),s=n.n(o),i=n("fbfb"),c=n("cde1"),l=n("5ea9"),u={name:"Layout",components:{Icon:l["a"]},data(){return{userByToken:"",user:"",noti:"",userId:"",count:""}},created(){this.getUserInfoByToken(),this.getNotifications(),this.getNotificationsNotRead()},methods:{getUserInfoByToken(){let t=this.$cookies.get("token");this.userByToken=s.a.decode(t,"utf-8"),c["a"].callApi(i["i"].INFORMATION,"POST",{userId:this.userByToken.UserId}).then(t=>{this.user=t.data.data}).catch(()=>{})},getNotifications(){let t=this.$cookies.get("token");this.userByToken=s.a.decode(t,"utf-8"),c["a"].callApi(i["i"].NOTIFICATION_10,"POST",{userId:this.userByToken.UserId}).then(t=>{this.noti=t.data.data}).catch(()=>{})},getNotificationsNotRead(){let t=this.$cookies.get("token");this.userByToken=s.a.decode(t,"utf-8"),c["a"].callApi(i["i"].NOTIFICATION_NOT_READ,"POST",{userId:this.userByToken.UserId}).then(t=>{this.count=t.data.numberOfRecords}).catch(()=>{})},HandleLogout(){this.$cookies.remove("token"),window.location.replace("/")}}},d=u,f=(n("a720"),n("2877")),p=Object(f["a"])(d,r,a,!1,null,null,null);e["a"]=p.exports},"0677":function(t,e,n){},"33e1":function(t,e,n){},"482f":function(t,e,n){"use strict";var r=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"dialog"},[e("div",{staticClass:"dialogContent"},[e("b-button",{staticClass:"spinner",attrs:{disabled:""}},[e("b-spinner")],1)],1)])},a=[],o={name:"LoadingDialog",props:["show","cancel","confirm"]},s=o,i=(n("ef67"),n("2877")),c=Object(i["a"])(s,r,a,!1,null,"764a15da",null);e["a"]=c.exports},"48ac":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){return function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/vue-jwt-decode/dist",e(e.s=10)}([function(t,e,n){t.exports=!n(1)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(16);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(6),a=n(5);t.exports=function(t){return r(a(t))}},function(t,e,n){"use strict";var r=n(11),a=n.n(r);e.a={install:function(t){t.prototype.$jwtDec=this,t.jwtDec=this},decode:function(t){if("string"!=typeof t&!t instanceof String)return null;var e=t.split(".");if(e.length<2)return null;var n=JSON.parse(atob(e[0])),r=JSON.parse(atob(e[1]));return a()({},n,r)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9);e.default=r.a},function(t,e,n){t.exports={default:n(12),__esModule:!0}},function(t,e,n){n(38),t.exports=n(4).Object.assign},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(3);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(8),a=n(34),o=n(33);t.exports=function(t){return function(e,n,s){var i,c=r(e),l=a(c.length),u=o(s,l);if(t&&n!=n){for(;l>u;)if((i=c[u++])!=i)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(13);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,a){return t.call(e,n,r,a)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(3),a=n(2).document,o=r(a)&&r(a.createElement);t.exports=function(t){return o?a.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(2),a=n(4),o=n(17),s=n(22),i=function(t,e,n){var c,l,u,d=t&i.F,f=t&i.G,p=t&i.S,h=t&i.P,v=t&i.B,m=t&i.W,g=f?a:a[e]||(a[e]={}),_=g.prototype,b=f?r:p?r[e]:(r[e]||{}).prototype;for(c in f&&(n=e),n)(l=!d&&b&&void 0!==b[c])&&c in g||(u=l?b[c]:n[c],g[c]=f&&"function"!=typeof b[c]?n[c]:v&&l?o(u,r):m&&b[c]==u?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(u):h&&"function"==typeof u?o(Function.call,u):u,h&&((g.virtual||(g.virtual={}))[c]=u,t&i.R&&_&&!_[c]&&s(_,c,u)))};i.F=1,i.G=2,i.S=4,i.P=8,i.B=16,i.W=32,i.U=64,i.R=128,t.exports=i},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(25),a=n(30);t.exports=n(0)?function(t,e,n){return r.f(t,e,a(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(0)&&!n(1)((function(){return 7!=Object.defineProperty(n(18)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){"use strict";var r=n(28),a=n(26),o=n(29),s=n(35),i=n(6),c=Object.assign;t.exports=!c||n(1)((function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r}))?function(t,e){for(var n=s(t),c=arguments.length,l=1,u=a.f,d=o.f;c>l;)for(var f,p=i(arguments[l++]),h=u?r(p).concat(u(p)):r(p),v=h.length,m=0;v>m;)d.call(p,f=h[m++])&&(n[f]=p[f]);return n}:c},function(t,e,n){var r=n(14),a=n(23),o=n(36),s=Object.defineProperty;e.f=n(0)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),a)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(21),a=n(8),o=n(15)(!1),s=n(31)("IE_PROTO");t.exports=function(t,e){var n,i=a(t),c=0,l=[];for(n in i)n!=s&&r(i,n)&&l.push(n);for(;e.length>c;)r(i,n=e[c++])&&(~o(l,n)||l.push(n));return l}},function(t,e,n){var r=n(27),a=n(19);t.exports=Object.keys||function(t){return r(t,a)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(32)("keys"),a=n(37);t.exports=function(t){return r[t]||(r[t]=a(t))}},function(t,e,n){var r=n(2),a=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return a[t]||(a[t]={})}},function(t,e,n){var r=n(7),a=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?a(t+e,0):o(t,e)}},function(t,e,n){var r=n(7),a=Math.min;t.exports=function(t){return t>0?a(r(t),9007199254740991):0}},function(t,e,n){var r=n(5);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(3);t.exports=function(t,e){if(!r(t))return t;var n,a;if(e&&"function"==typeof(n=t.toString)&&!r(a=n.call(t)))return a;if("function"==typeof(n=t.valueOf)&&!r(a=n.call(t)))return a;if(!e&&"function"==typeof(n=t.toString)&&!r(a=n.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(20);r(r.S+r.F,"Object",{assign:n(24)})}])}))},"5ca8":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("Header",[e("main",{staticStyle:{"flex-grow":"1","background-image":"url('https://f5-zpcloud.zdn.vn/2258788996442817451/dd48482006abc0f599ba.jpg')","background-size":"cover"}},[e("div",{attrs:{id:"login"}},[e("div",{staticClass:"container"},[e("label",{staticClass:"close-btn fas fa-times",attrs:{for:"show",title:"close"}}),e("div",{staticClass:"title"},[t._v(" Đăng ký hệ thống ")]),e("div",{staticClass:"main"},[e("div",{staticClass:"row"},[e("div",{staticClass:"column"},[e("div",{staticClass:"data"},[e("label",[t._v("Email")]),this.regxMail.test(this.email)?e("label",{staticStyle:{color:"green"}},[e("Icon",{attrs:{icon:"material-symbols:check-small-rounded"}})],1):e("label",{staticStyle:{color:"#ca0303"}},[t._v(" *")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",maxlength:"30",required:"",placeholder:"Ví dụ: acb@gmail.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),e("div",{staticClass:"data"},[e("label",[t._v("Mật khẩu")]),this.password.length<8||this.password.length>30?e("label",{staticStyle:{color:"#ca0303"}},[t._v(" *")]):e("label",{staticStyle:{color:"green"}},[e("Icon",{attrs:{icon:"material-symbols:check-small-rounded"}})],1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",maxlength:"50",required:"",placeholder:"Nhập mật khẩu"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),e("div",{staticClass:"data"},[e("label",[t._v("Xác nhận mật khẩu")]),this.passwordCheck&&this.password===this.passwordCheck?e("label",{staticStyle:{color:"green"}},[e("Icon",{attrs:{icon:"material-symbols:check-small-rounded"}})],1):e("label",{staticStyle:{color:"#ca0303"}},[t._v(" *")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordCheck,expression:"passwordCheck"}],attrs:{type:"password",maxlength:"50",required:"",placeholder:"Xác nhận mật khẩu"},domProps:{value:t.passwordCheck},on:{input:function(e){e.target.composing||(t.passwordCheck=e.target.value)}}})])]),e("div",{staticClass:"column"},[e("div",{staticClass:"data"},[e("label",[t._v("Họ và tên")]),this.fullname.length<5||this.fullname.length>30?e("label",{staticStyle:{color:"#ca0303"}},[t._v(" *")]):e("label",{staticStyle:{color:"green"}},[e("Icon",{attrs:{icon:"material-symbols:check-small-rounded"}})],1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.fullname,expression:"fullname"}],attrs:{type:"text",maxlength:"30",required:"",placeholder:"Ví dụ: Nguyễn Văn A"},domProps:{value:t.fullname},on:{input:function(e){e.target.composing||(t.fullname=e.target.value)}}})]),e("div",{staticClass:"data"},[e("label",[t._v("Số điện thoại")]),this.regxPhone.test(this.phone)?e("label",{staticStyle:{color:"green"}},[e("Icon",{attrs:{icon:"material-symbols:check-small-rounded"}})],1):e("label",{staticStyle:{color:"#ca0303"}},[t._v(" *")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",maxlength:"10",required:"",placeholder:"Ví dụ: 0123456789"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),e("div",{staticClass:"data"},[e("label",[t._v("Địa chỉ")]),this.address.length<10||this.address.length>100?e("label",{staticStyle:{color:"#ca0303"}},[t._v(" *")]):e("label",{staticStyle:{color:"green"}},[e("Icon",{attrs:{icon:"material-symbols:check-small-rounded"}})],1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{type:"text",maxlength:"100",required:"",placeholder:"Ví dụ: Số 1, Đào Duy Anh, Đống Đa, Hà Nội"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})])])]),e("div",[this.regxMail.test(this.email)&&this.password.length>=8&&this.password.length<=30&&this.fullname.length>=5&&this.fullname.length<=30&&this.password===this.passwordCheck&&this.regxPhone.test(this.phone)&&(this.address.length>=10||this.address.length<=100)?e("button",{staticClass:"btn",on:{click:t.HandleRegister}},[t._v("Đăng ký")]):e("button",{staticClass:"btnDisable",attrs:{disabled:""}},[t._v("Đăng ký")])]),t.err.length?e("label",{staticClass:"result"},[t._v(t._s(this.err))]):t._e(),e("div",{staticClass:"term"},[e("label",[t._v("Bằng việc đăng ký, bạn đồng ý với "),e("strong",[t._v("Trạm Sách")]),t._v(" về ")]),e("label",[e("label"),t._v(" "),e("router-link",{attrs:{to:"/Policy&Terms"}},[t._v(" Điều khoản dịch vụ")]),t._v(" & "),e("router-link",{attrs:{to:"/Policy&Terms"}},[t._v(" Các chính sách")])],1)]),e("div",{staticClass:"under"},[e("router-link",{staticClass:"link",attrs:{to:"/login"}},[t._v("Đã có tài khoản?")])],1)])])]),e("LoadingDialog",{directives:[{name:"show",rawName:"v-show",value:t.spinner,expression:"spinner"}]})],1)])},a=[],o=(n("14d9"),n("cde1")),s=n("fbfb"),i=n("0418"),c=n("482f"),l=n("5ea9"),u={name:"Register",components:{Header:i["a"],LoadingDialog:c["a"],Icon:l["a"]},data(){return{email:"",password:"",passwordCheck:"",phone:"",fullname:"",address:"",err:"",spinner:!1,regxMail:/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,regxPhone:/^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/}},methods:{HandleRegister(){this.spinner=!0,o["a"].callApi(s["m"].USER_REGISTER,"POST",{email:this.email,phone:this.phone,fullname:this.fullname,password:this.password,addressMain:this.address}).then(t=>{"REGISTER_SUCCESS"===t.data.message&&this.$router.push({name:"VerifyRegister"}),"EMAIL_IS_EXIST"===t.data.message&&(this.err="Email đăng ký đã được sử dụng!"),this.spinner=!1}).catch(()=>{this.err="Đăng ký không thành công!"})}}},d=u,f=(n("c11d"),n("2877")),p=Object(f["a"])(d,r,a,!1,null,"c23e16b6",null);e["default"]=p.exports},a720:function(t,e,n){"use strict";n("0677")},ae8c:function(t,e,n){},c11d:function(t,e,n){"use strict";n("33e1")},d8b4:function(t,e,n){t.exports=n.p+"img/logo.d67a157a.png"},ef67:function(t,e,n){"use strict";n("ae8c")}}]);
//# sourceMappingURL=chunk-0445a43a.52d456c6.js.map