(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d8b5fd60"],{"03f4":function(t,e,n){"use strict";n("a327")},"0418":function(t,e,n){"use strict";var r=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{display:"flex","flex-direction":"column","min-height":"100vh"}},[e("header",{staticClass:"Main__header"},[e("div",{staticClass:"Main__header__container"},[t._m(0),e("div",[e("nav",{staticClass:"Main__nav",staticStyle:{"padding-left":"50px"}},[e("router-link",{staticClass:"Main__list__item home",attrs:{to:"/","active-color":"#9D6B54"}},[t._v("Trang Chủ ")]),e("router-link",{staticClass:"Main__list__item course-management btnCategory",attrs:{to:"/AllBooks","active-color":"#9D6B54"}},[t._v("Tủ sách")]),e("router-link",{staticClass:"Main__list__item class-management",attrs:{to:"/BlogIndex","active-color":"#9D6B54"}},[t._v("Trạm đọc ")]),e("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/Policy&Terms","active-color":"#9D6B54"}},[t._v("Chính sách & điều khoản ")]),e("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/users-management","active-color":"#9D6B54"}},[t._v("Quy trình ")]),e("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/users-management","active-color":"#9D6B54"}},[t._v("Giới thiệu ")])],1)]),e("ul",{staticClass:"Main__account"},[this.$cookies.get("token")?e("nav",[e("li",[e("b-dropdown",{attrs:{variant:"black","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("Icon",{staticClass:"icon",attrs:{icon:"tabler:bell-ringing-2"}}),e("div",{staticClass:"countNoti"},[t._v(t._s(t.count))])]},proxy:!0}])},[e("div",{staticClass:"titleNoti"},[t._v("Thông Báo")]),t._l(t.noti,(function(n){return e("div",{key:n.id,staticClass:"notification"},[n.isRead?e("div",{staticStyle:{"padding-left":"10px",height:"25px","padding-top":"5px"}},[t._v('"'+t._s(n.content)+'"')]):e("div",{staticStyle:{"background-color":"#F0ECE4",height:"25px","padding-left":"10px","padding-top":"5px"}},[t._v('"'+t._s(n.content)+'"')]),e("hr",{staticStyle:{"margin-top":"0px","margin-bottom":"0px"}})])})),e("div",{staticClass:"allNoti"},[e("router-link",{staticClass:"linkAllNoti",attrs:{to:"AllNotification"}},[t._v("Xem tất cả")])],1)],2)],1),e("li",[e("b-dropdown",{attrs:{right:"",text:"Right align",variant:"black","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("img",{staticClass:"icon",attrs:{src:t.user.avatar}})]},proxy:!0}])},[e("div",{staticClass:"dropdown-item-top"},[e("img",{staticClass:"icon",attrs:{src:t.user.avatar}}),e("div",[t._v(t._s(t.user.fullname))]),e("div",{staticStyle:{color:"grey"}},[t._v(t._s(t.user.email))])]),e("hr",{staticStyle:{margin:"5px"}}),e("router-link",{staticClass:"dropdown-item",attrs:{to:"/MyBooks"}},[e("Icon",{staticClass:"iconPerson",attrs:{icon:"ic:round-person-pin"}}),t._v(" Trang cá nhân ")],1),e("hr",{staticStyle:{margin:"5px"}}),1==t.user.roleId||2==t.user.roleId?e("div",[e("router-link",{staticClass:"dropdown-item",attrs:{to:"/ManageIndex"}},[e("Icon",{staticClass:"iconPerson",attrs:{icon:"bi:list-task"}}),t._v(" Quản trị ")],1),e("hr",{staticStyle:{margin:"5px"}})],1):t._e(),e("button",{staticClass:"dropdown-item",on:{click:t.HandleLogout}},[e("Icon",{staticClass:"iconPerson",attrs:{icon:"uil:signout"}}),t._v(" Đăng xuất ")],1)],1)],1)]):e("nav",[e("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/login"}},[t._v("Đăng nhập")]),e("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/register"}},[t._v("Đăng ký")])],1)])])]),t._t("default")],2)},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"Main__logo"},[e("a",{attrs:{href:"/"}},[e("img",{attrs:{src:n("d8b4"),alt:"Logo Trạm Sách"}})])])}],i=n("48ac"),a=n.n(i),o=n("fbfb"),c=n("cde1"),l=n("5ea9"),u={name:"Layout",components:{Icon:l["a"]},data(){return{userByToken:"",user:"",noti:"",userId:"",count:""}},created(){this.getUserInfoByToken(),this.getNotifications(),this.getNotificationsNotRead()},methods:{getUserInfoByToken(){let t=this.$cookies.get("token");this.userByToken=a.a.decode(t,"utf-8"),c["a"].callApi(o["i"].INFORMATION,"POST",{userId:this.userByToken.UserId}).then(t=>{this.user=t.data.data}).catch(()=>{})},getNotifications(){let t=this.$cookies.get("token");this.userByToken=a.a.decode(t,"utf-8"),c["a"].callApi(o["i"].NOTIFICATION_10,"POST",{userId:this.userByToken.UserId}).then(t=>{this.noti=t.data.data}).catch(()=>{})},getNotificationsNotRead(){let t=this.$cookies.get("token");this.userByToken=a.a.decode(t,"utf-8"),c["a"].callApi(o["i"].NOTIFICATION_NOT_READ,"POST",{userId:this.userByToken.UserId}).then(t=>{this.count=t.data.numberOfRecords}).catch(()=>{})},HandleLogout(){this.$cookies.remove("token"),window.location.replace("/")}}},d=u,p=(n("3a0a"),n("2877")),h=Object(p["a"])(d,r,s,!1,null,null,null);e["a"]=h.exports},"3a0a":function(t,e,n){"use strict";n("a7bb")},"482f":function(t,e,n){"use strict";var r=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"dialog"},[e("div",{staticClass:"dialogContent"},[e("b-button",{staticClass:"spinner",attrs:{disabled:""}},[e("b-spinner")],1)],1)])},s=[],i={name:"LoadingDialog",props:["show","cancel","confirm"]},a=i,o=(n("ef67"),n("2877")),c=Object(o["a"])(a,r,s,!1,null,"764a15da",null);e["a"]=c.exports},"48ac":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){return function(t){function e(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/vue-jwt-decode/dist",e(e.s=10)}([function(t,e,n){t.exports=!n(1)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(16);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(6),s=n(5);t.exports=function(t){return r(s(t))}},function(t,e,n){"use strict";var r=n(11),s=n.n(r);e.a={install:function(t){t.prototype.$jwtDec=this,t.jwtDec=this},decode:function(t){if("string"!=typeof t&!t instanceof String)return null;var e=t.split(".");if(e.length<2)return null;var n=JSON.parse(atob(e[0])),r=JSON.parse(atob(e[1]));return s()({},n,r)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9);e.default=r.a},function(t,e,n){t.exports={default:n(12),__esModule:!0}},function(t,e,n){n(38),t.exports=n(4).Object.assign},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(3);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(8),s=n(34),i=n(33);t.exports=function(t){return function(e,n,a){var o,c=r(e),l=s(c.length),u=i(a,l);if(t&&n!=n){for(;l>u;)if((o=c[u++])!=o)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(13);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,s){return t.call(e,n,r,s)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(3),s=n(2).document,i=r(s)&&r(s.createElement);t.exports=function(t){return i?s.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(2),s=n(4),i=n(17),a=n(22),o=function(t,e,n){var c,l,u,d=t&o.F,p=t&o.G,h=t&o.S,f=t&o.P,v=t&o.B,m=t&o.W,g=p?s:s[e]||(s[e]={}),_=g.prototype,b=p?r:h?r[e]:(r[e]||{}).prototype;for(c in p&&(n=e),n)(l=!d&&b&&void 0!==b[c])&&c in g||(u=l?b[c]:n[c],g[c]=p&&"function"!=typeof b[c]?n[c]:v&&l?i(u,r):m&&b[c]==u?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(u):f&&"function"==typeof u?i(Function.call,u):u,f&&((g.virtual||(g.virtual={}))[c]=u,t&o.R&&_&&!_[c]&&a(_,c,u)))};o.F=1,o.G=2,o.S=4,o.P=8,o.B=16,o.W=32,o.U=64,o.R=128,t.exports=o},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(25),s=n(30);t.exports=n(0)?function(t,e,n){return r.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(0)&&!n(1)((function(){return 7!=Object.defineProperty(n(18)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){"use strict";var r=n(28),s=n(26),i=n(29),a=n(35),o=n(6),c=Object.assign;t.exports=!c||n(1)((function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r}))?function(t,e){for(var n=a(t),c=arguments.length,l=1,u=s.f,d=i.f;c>l;)for(var p,h=o(arguments[l++]),f=u?r(h).concat(u(h)):r(h),v=f.length,m=0;v>m;)d.call(h,p=f[m++])&&(n[p]=h[p]);return n}:c},function(t,e,n){var r=n(14),s=n(23),i=n(36),a=Object.defineProperty;e.f=n(0)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),s)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(21),s=n(8),i=n(15)(!1),a=n(31)("IE_PROTO");t.exports=function(t,e){var n,o=s(t),c=0,l=[];for(n in o)n!=a&&r(o,n)&&l.push(n);for(;e.length>c;)r(o,n=e[c++])&&(~i(l,n)||l.push(n));return l}},function(t,e,n){var r=n(27),s=n(19);t.exports=Object.keys||function(t){return r(t,s)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(32)("keys"),s=n(37);t.exports=function(t){return r[t]||(r[t]=s(t))}},function(t,e,n){var r=n(2),s=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return s[t]||(s[t]={})}},function(t,e,n){var r=n(7),s=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?s(t+e,0):i(t,e)}},function(t,e,n){var r=n(7),s=Math.min;t.exports=function(t){return t>0?s(r(t),9007199254740991):0}},function(t,e,n){var r=n(5);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(3);t.exports=function(t,e){if(!r(t))return t;var n,s;if(e&&"function"==typeof(n=t.toString)&&!r(s=n.call(t)))return s;if("function"==typeof(n=t.valueOf)&&!r(s=n.call(t)))return s;if(!e&&"function"==typeof(n=t.toString)&&!r(s=n.call(t)))return s;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(20);r(r.S+r.F,"Object",{assign:n(24)})}])}))},"5ca8":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("Header",[e("main",{staticStyle:{"flex-grow":"1","background-image":"url('https://f5-zpcloud.zdn.vn/2258788996442817451/dd48482006abc0f599ba.jpg')","background-size":"cover"}},[e("div",{attrs:{id:"login"}},[e("div",{staticClass:"container"},[e("label",{staticClass:"close-btn fas fa-times",attrs:{for:"show",title:"close"}}),e("div",{staticClass:"title"},[t._v(" Đăng ký hệ thống ")]),e("div",{staticClass:"main"},[e("div",{staticClass:"row"},[e("div",{staticClass:"column"},[e("div",{staticClass:"data"},[e("label",[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",maxlength:"30",required:"",placeholder:"Ví dụ: acb@gmail.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t.errMail.length?e("label",{staticClass:"err"},[t._v(t._s(this.errMail))]):t._e()]),e("div",{staticClass:"data"},[e("label",[t._v("Mật khẩu")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",maxlength:"50",required:"",placeholder:"Nhập mật khẩu"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t.errPass.length?e("label",{staticClass:"err"},[t._v(t._s(this.errPass))]):t._e()]),e("div",{staticClass:"data"},[e("label",[t._v("Xác nhận mật khẩu")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordCheck,expression:"passwordCheck"}],attrs:{type:"password",maxlength:"50",required:"",placeholder:"Xác nhận mật khẩu"},domProps:{value:t.passwordCheck},on:{input:function(e){e.target.composing||(t.passwordCheck=e.target.value)}}}),t.errPassCheck.length?e("label",{staticClass:"err"},[t._v(t._s(this.errPassCheck))]):t._e()])]),e("div",{staticClass:"column"},[e("div",{staticClass:"data"},[e("label",[t._v("Họ và tên")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.fullname,expression:"fullname"}],attrs:{type:"text",maxlength:"30",required:"",placeholder:"Ví dụ: Nguyễn Văn A"},domProps:{value:t.fullname},on:{input:function(e){e.target.composing||(t.fullname=e.target.value)}}}),t.errName.length?e("label",{staticClass:"err"},[t._v(t._s(this.errName))]):t._e()]),e("div",{staticClass:"data"},[e("label",[t._v("Số điện thoại")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",maxlength:"10",required:"",placeholder:"Ví dụ: 0123456789"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t.errPhone.length?e("label",{staticClass:"err"},[t._v(t._s(this.errPhone))]):t._e()]),e("div",{staticClass:"data"},[e("label",[t._v("Địa chỉ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{type:"text",maxlength:"100",required:"",placeholder:"Ví dụ: Số 1, Đào Duy Anh, Đống Đa, Hà Nội"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),t.errAddress.length?e("label",{staticClass:"err"},[t._v(t._s(this.errAddress))]):t._e()])])]),e("div",{staticClass:"btn"},[e("button",{on:{click:t.HandleRegister}},[t._v("Đăng ký")])]),t.err.length?e("label",{staticClass:"result"},[t._v(t._s(this.err))]):t._e(),e("div",{staticClass:"term"},[e("label",[t._v("Bằng việc đăng ký, bạn đồng ý với "),e("strong",[t._v("Trạm Sách")]),t._v(" về ")]),e("label",[e("label"),t._v(" "),e("router-link",{attrs:{to:"/"}},[t._v(" Điều khoản dịch vụ")]),t._v(" & "),e("router-link",{attrs:{to:"/"}},[t._v(" Các chính sách")])],1)]),e("div",{staticClass:"under"},[e("router-link",{staticClass:"link",attrs:{to:"/login"}},[t._v("Đã có tài khoản?")])],1)])])]),e("LoadingDialog",{directives:[{name:"show",rawName:"v-show",value:t.spinner,expression:"spinner"}]})],1)])},s=[],i=(n("14d9"),n("cde1")),a=n("fbfb"),o=n("0418"),c=n("482f"),l={name:"Register",components:{Header:o["a"],LoadingDialog:c["a"]},data(){return{email:"",password:"",passwordCheck:"",phone:"",fullname:"",address:"",errMail:"",errPass:"",errPassCheck:"",errName:"",errPhone:"",errAddress:"",err:"",spinner:!1}},methods:{HandleRegister(){let t=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,e=/^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/;this.errMail="",this.errPass="",this.errPassCheck="",this.errName="",this.errPhone="",this.errAddress="",this.err="",this.email?t.test(this.email)||(this.errMail="Email không đúng định dạng!"):this.errMail="Vui lòng nhập email!",this.password||(this.errPass="Vui lòng nhập mật khẩu!"),this.passwordCheck?this.password!=this.passwordCheck&&(this.errPassCheck="Không khớp với mật khẩu!"):this.errPassCheck="Vui lòng xác nhận mật khẩu!",this.fullname||(this.errName="Vui lòng nhập tên đầy đủ!"),this.phone?e.test(this.phone)||(this.errPhone="Số điện thoại không hợp lệ!"):this.errPhone="Vui lòng nhập số điện thoại!",this.address||(this.errAddress="Vui lòng nhập địa chỉ!"),t.test(this.email)&&this.password&&this.fullname&&e.test(this.phone)&&this.address&&(this.spinner=!0,i["a"].callApi(a["m"].USER_REGISTER,"POST",{email:this.email,phone:this.phone,fullname:this.fullname,password:this.password,addressMain:this.address}).then(t=>{"REGISTER_SUCCESS"===t.data.message&&this.$router.push({name:"VerifyRegister"}),"EMAIL_IS_EXIST"===t.data.message&&(this.err="Email đăng ký đã được sử dụng!"),this.spinner=!1}).catch(()=>{this.err="Đăng ký không thành công!"}))}}},u=l,d=(n("03f4"),n("2877")),p=Object(d["a"])(u,r,s,!1,null,"97d2fed4",null);e["default"]=p.exports},a327:function(t,e,n){},a7bb:function(t,e,n){},ae8c:function(t,e,n){},d8b4:function(t,e,n){t.exports=n.p+"img/logo.d67a157a.png"},ef67:function(t,e,n){"use strict";n("ae8c")}}]);
//# sourceMappingURL=chunk-d8b5fd60.7e1e22f7.js.map