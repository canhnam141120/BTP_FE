(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84c8a500"],{2815:function(t,n,a){},"30b6":function(t,n,a){"use strict";a("e8c7")},"3dcd":function(t,n,a){"use strict";a("2815")},"48ac":function(t,n,a){!function(n,a){t.exports=a()}(0,(function(){return function(t){function n(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var a={};return n.m=t,n.c=a,n.i=function(t){return t},n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/vue-jwt-decode/dist",n(n.s=10)}([function(t,n,a){t.exports=!a(1)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var a=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=a)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var a=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=a)},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,a){var e=a(16);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n){var a=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:a)(t)}},function(t,n,a){var e=a(6),i=a(5);t.exports=function(t){return e(i(t))}},function(t,n,a){"use strict";var e=a(11),i=a.n(e);n.a={install:function(t){t.prototype.$jwtDec=this,t.jwtDec=this},decode:function(t){if("string"!=typeof t&!t instanceof String)return null;var n=t.split(".");if(n.length<2)return null;var a=JSON.parse(atob(n[0])),e=JSON.parse(atob(n[1]));return i()({},a,e)}}},function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(9);n.default=e.a},function(t,n,a){t.exports={default:a(12),__esModule:!0}},function(t,n,a){a(38),t.exports=a(4).Object.assign},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,a){var e=a(3);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n,a){var e=a(8),i=a(34),s=a(33);t.exports=function(t){return function(n,a,r){var o,c=e(n),l=i(c.length),u=s(r,l);if(t&&a!=a){for(;l>u;)if((o=c[u++])!=o)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===a)return t||u||0;return!t&&-1}}},function(t,n){var a={}.toString;t.exports=function(t){return a.call(t).slice(8,-1)}},function(t,n,a){var e=a(13);t.exports=function(t,n,a){if(e(t),void 0===n)return t;switch(a){case 1:return function(a){return t.call(n,a)};case 2:return function(a,e){return t.call(n,a,e)};case 3:return function(a,e,i){return t.call(n,a,e,i)}}return function(){return t.apply(n,arguments)}}},function(t,n,a){var e=a(3),i=a(2).document,s=e(i)&&e(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,a){var e=a(2),i=a(4),s=a(17),r=a(22),o=function(t,n,a){var c,l,u,f=t&o.F,h=t&o.G,p=t&o.S,m=t&o.P,d=t&o.B,v=t&o.W,_=h?i:i[n]||(i[n]={}),g=_.prototype,C=h?e:p?e[n]:(e[n]||{}).prototype;for(c in h&&(a=n),a)(l=!f&&C&&void 0!==C[c])&&c in _||(u=l?C[c]:a[c],_[c]=h&&"function"!=typeof C[c]?a[c]:d&&l?s(u,e):v&&C[c]==u?function(t){var n=function(n,a,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,a)}return new t(n,a,e)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(u):m&&"function"==typeof u?s(Function.call,u):u,m&&((_.virtual||(_.virtual={}))[c]=u,t&o.R&&g&&!g[c]&&r(g,c,u)))};o.F=1,o.G=2,o.S=4,o.P=8,o.B=16,o.W=32,o.U=64,o.R=128,t.exports=o},function(t,n){var a={}.hasOwnProperty;t.exports=function(t,n){return a.call(t,n)}},function(t,n,a){var e=a(25),i=a(30);t.exports=a(0)?function(t,n,a){return e.f(t,n,i(1,a))}:function(t,n,a){return t[n]=a,t}},function(t,n,a){t.exports=!a(0)&&!a(1)((function(){return 7!=Object.defineProperty(a(18)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,a){"use strict";var e=a(28),i=a(26),s=a(29),r=a(35),o=a(6),c=Object.assign;t.exports=!c||a(1)((function(){var t={},n={},a=Symbol(),e="abcdefghijklmnopqrst";return t[a]=7,e.split("").forEach((function(t){n[t]=t})),7!=c({},t)[a]||Object.keys(c({},n)).join("")!=e}))?function(t,n){for(var a=r(t),c=arguments.length,l=1,u=i.f,f=s.f;c>l;)for(var h,p=o(arguments[l++]),m=u?e(p).concat(u(p)):e(p),d=m.length,v=0;d>v;)f.call(p,h=m[v++])&&(a[h]=p[h]);return a}:c},function(t,n,a){var e=a(14),i=a(23),s=a(36),r=Object.defineProperty;n.f=a(0)?Object.defineProperty:function(t,n,a){if(e(t),n=s(n,!0),e(a),i)try{return r(t,n,a)}catch(t){}if("get"in a||"set"in a)throw TypeError("Accessors not supported!");return"value"in a&&(t[n]=a.value),t}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,a){var e=a(21),i=a(8),s=a(15)(!1),r=a(31)("IE_PROTO");t.exports=function(t,n){var a,o=i(t),c=0,l=[];for(a in o)a!=r&&e(o,a)&&l.push(a);for(;n.length>c;)e(o,a=n[c++])&&(~s(l,a)||l.push(a));return l}},function(t,n,a){var e=a(27),i=a(19);t.exports=Object.keys||function(t){return e(t,i)}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,a){var e=a(32)("keys"),i=a(37);t.exports=function(t){return e[t]||(e[t]=i(t))}},function(t,n,a){var e=a(2),i=e["__core-js_shared__"]||(e["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,a){var e=a(7),i=Math.max,s=Math.min;t.exports=function(t,n){return t=e(t),t<0?i(t+n,0):s(t,n)}},function(t,n,a){var e=a(7),i=Math.min;t.exports=function(t){return t>0?i(e(t),9007199254740991):0}},function(t,n,a){var e=a(5);t.exports=function(t){return Object(e(t))}},function(t,n,a){var e=a(3);t.exports=function(t,n){if(!e(t))return t;var a,i;if(n&&"function"==typeof(a=t.toString)&&!e(i=a.call(t)))return i;if("function"==typeof(a=t.valueOf)&&!e(i=a.call(t)))return i;if(!n&&"function"==typeof(a=t.toString)&&!e(i=a.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n){var a=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++a+e).toString(36))}},function(t,n,a){var e=a(20);e(e.S+e.F,"Object",{assign:a(24)})}])}))},d8b4:function(t,n,a){t.exports=a.p+"img/logo.d67a157a.png"},e8c7:function(t,n,a){},ebad:function(t,n,a){"use strict";var e=function(){var t=this,n=t._self._c;return n("div",{staticStyle:{display:"flex","flex-direction":"column","min-height":"100vh"}},[n("header",{staticClass:"Main__header"},[n("div",{staticClass:"Main__header__container"},[t._m(0),n("div",[n("nav",{staticClass:"Main__nav"},[n("router-link",{staticClass:"Main__list__item home",attrs:{to:"/","active-color":"#9D6B54"}},[t._v("Trang Chủ ")]),n("router-link",{staticClass:"Main__list__item course-management",attrs:{to:"/course-management","active-color":"#9D6B54"}},[t._v("Tủ sách ")]),n("router-link",{staticClass:"Main__list__item class-management",attrs:{to:"/class-management","active-color":"#9D6B54"}},[t._v("Blog ")]),n("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/users-management","active-color":"#9D6B54"}},[t._v("Chính sách và điều khoản ")]),n("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/users-management","active-color":"#9D6B54"}},[t._v("Quy trình ")]),n("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/users-management","active-color":"#9D6B54"}},[t._v("Giới thiệu ")]),n("span",{staticClass:"Main__indicator"})],1)]),n("ul",{staticClass:"Main__account"},[this.$cookies.get("token")?n("nav",[n("li",[n("b-dropdown",{staticStyle:{padding:"0"},attrs:{right:"",text:"Right align",variant:"black","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("label",{staticStyle:{"margin-bottom":"0"}},[n("span",{staticClass:"Main__avatar"},[t._v("TB")])])]},proxy:!0}])},[n("p",{staticClass:"dropdown-item"},[t._v(" Thông báo 1 ")]),n("hr",{staticStyle:{margin:"5px"}}),n("p",{staticClass:"dropdown-item"},[t._v(" Thông báo 2 ")])])],1),n("li",[n("b-dropdown",{staticStyle:{padding:"0"},attrs:{right:"",text:"Right align",variant:"black","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("label",{staticStyle:{"margin-bottom":"0"}},[n("span",{staticClass:"Main__avatar"},[t._v("T")])])]},proxy:!0}])},[n("a",{staticClass:"dropdown-item",attrs:{href:"/PersonalIndex"}},[n("div",{staticStyle:{display:"flex","align-items":"center",width:"100%"}},[n("span",{staticClass:"Main__avatar"},[t._v("T")]),n("p",{staticClass:"Main__name"},[t._v(" "+t._s(t.user.name)+" ")])]),n("div",{staticStyle:{float:"right","font-size":"14px",padding:"0 5px 0 0"}})]),n("hr",{staticStyle:{margin:"5px"}}),1==t.user.role||2==t.user.role?n("div",[n("router-link",{staticClass:"dropdown-item",attrs:{to:"/ManageIndex"}},[n("i",{staticClass:"la la-sign-in-alt"}),t._v(" Quản trị ")]),n("hr",{staticStyle:{margin:"5px"}})],1):t._e(),n("button",{staticClass:"dropdown-item",on:{click:t.HandleLogout}},[n("i",{staticClass:"la la-sign-in-alt"}),t._v(" Đăng xuất ")])])],1)]):n("nav",[n("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/login"}},[t._v("Đăng nhập")]),n("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/register"}},[t._v("Đăng ký")])],1)])])]),t._t("default"),t._m(1)],2)},i=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"Main__logo"},[n("a",{attrs:{href:"/"}},[n("img",{attrs:{src:a("d8b4"),alt:"Logo Trạm Sách"}})])])},function(){var t=this,n=t._self._c;return n("footer",[n("div",{staticClass:"Main__subfooter"},[n("div",{staticClass:"Main__subfooter__container"},[n("div",{staticClass:"contact"},[n("span",[t._v("ĐĂNG KÝ NHẬN TIN:")]),n("input",{staticClass:"input1",attrs:{type:"text",placeholder:"Nhập tên của bạn"}}),n("input",{staticClass:"input2",attrs:{type:"text",placeholder:"Nhập email của bạn"}}),n("button",[t._v("ĐĂNG KÝ")])])])]),n("div",{staticClass:"Main__footer"},[n("div",{staticClass:"Main__footer__container"},[n("div",{staticClass:"grid"},[n("div",{staticClass:"grid-row"},[n("div",{staticClass:"grid-column"},[n("a",{attrs:{href:"/"}},[n("img",{attrs:{src:a("d8b4"),alt:"Logo Trạm Sách"}})]),n("br"),n("span",[t._v("Tất cả các giao dịch ở Trạm Sách được")]),n("br"),n("span",[t._v("chúng tôi đảm bảo kiểm duyệt qua ")]),n("br"),n("span",[t._v("hình thức và giao hàng tận nơi trong ")]),n("br"),n("span",[t._v(" địa bàn nội thành TP Hà Nội. Không")]),n("br"),n("span",[t._v("hỗ trợ giao dịch trực tiếp tại Trạm.")])]),n("div",{staticClass:"grid-column"},[n("h3",{staticClass:"heading"},[t._v("TÀI KHOẢN")]),n("ul",{staticClass:"list"},[n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Đăng nhập/Đăng ký")])]),n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Thay đổi thông tin cá nhân")])]),n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Thay đổi thông tin giao hàng")])]),n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Tủ sách")])]),n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Trang cá nhân")])]),n("li",{staticClass:"item"},[n("span",{staticClass:"contact_info"},[t._v("tramsachhn@gmail.com")])])])]),n("div",{staticClass:"grid-column"},[n("h3",{staticClass:"heading"},[t._v("HỖ TRỢ")]),n("ul",{staticClass:"list"},[n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách kiểm duyệt")])]),n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách cọc - hoàn tiền")])]),n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách bảo mật thanh toán")])]),n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Quy trình giao dịch")])]),n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Trung tâm hỗ trợ")])]),n("li",{staticClass:"item"},[n("span",{staticClass:"contact_info"},[t._v("Hotline: 0961284654")])])])]),n("div",{staticClass:"grid-column"},[n("h3",{staticClass:"heading"},[t._v("DỊCH VỤ")]),n("ul",{staticClass:"list"},[n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Điều khoản sử dụng")])]),n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách bảo mật thông tin cá nhân")])]),n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách bảo mật thanh toán")])]),n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Phương thức thanh toán")])]),n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Giới thiệu Trạm Sách")])]),n("li",{staticClass:"item"},[n("span",{staticClass:"contact_info"},[t._v("Số 1 Đào Duy Anh, Đống Đa, Hà Nội")])])])])])])])])])}],s=a("48ac"),r=a.n(s),o={name:"Layout",data(){return{user:""}},created(){this.getUserInfo()},methods:{getUserInfo(){let t=this.$cookies.get("token");try{this.user=r.a.decode(t,"utf-8"),console.log(this.user)}catch(n){console.log("Not yet Login: ",n)}},HandleLogout(){this.$cookies.remove("token"),this.$router.go()}}},c=o,l=(a("30b6"),a("2877")),u=Object(l["a"])(c,e,i,!1,null,null,null);n["a"]=u.exports},f908:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t._self._c;return n("Layout",[n("main",{staticStyle:{"flex-grow":"1"}},[n("div",{staticClass:"body"},[n("div",{staticClass:"container"},[n("h1",[n("strong",[t._v("Chào bạn")]),t._v(" Hãy đăng nhập nhé!")]),n("label",{attrs:{for:"email"}},[n("b",[t._v("Email")])]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"Username",required:""},domProps:{value:t.email},on:{input:function(n){n.target.composing||(t.email=n.target.value)}}})]),n("label",{attrs:{for:"password"}},[n("b",[t._v("Password")])]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",required:"",placeholder:"Mật khẩu"},domProps:{value:t.password},on:{input:function(n){n.target.composing||(t.password=n.target.value)}}})]),n("button",{on:{click:t.HandleLogin}},[t._v("Đăng nhập")]),n("hr"),n("br"),n("label",{attrs:{for:"email"}},[n("b",[t._v("Chưa có tài khoản?")])]),t._v("   "),n("button",[n("router-link",{attrs:{to:"/register"}},[t._v("Đăng ký")])],1),n("button",{on:{click:t.HandleForgotPassword}},[t._v("Quên mật khẩu?")])])])])])},i=[],s=(a("14d9"),a("cde1")),r=a("fbfb"),o=a("ebad"),c={name:"Login",components:{Layout:o["a"]},data(){return{email:"",password:""}},methods:{HandleLogin(){s["a"].callApi(r["m"].USER_LOGIN,"POST",{email:this.email,password:this.password}).then(t=>{"LOGIN_SUCCESS"===t.data.message&&(this.$cookies.set("token",t.data.data.accessToken),this.$router.push({name:"HomePage"})),console.log(t)}).catch(()=>{alert("Sai tai khoan")})},HandleForgotPassword(){""===this.email&&alert("Vui lòng nhập email của bạn!"),s["a"].callApi(r["m"].FORGOT_PASSWORD,"POST",{email:this.email}).then(t=>{t.data.message.includes("SUCCESS")&&this.$router.push({name:"ResetPassword"}),console.log(t)}).catch(()=>{})}}},l=c,u=(a("3dcd"),a("2877")),f=Object(u["a"])(l,e,i,!1,null,"694fca8d",null);n["default"]=f.exports}}]);
//# sourceMappingURL=chunk-84c8a500.342dee13.js.map