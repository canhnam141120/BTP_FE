(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3872248c"],{"30b6":function(t,n,i){"use strict";i("e8c7")},"41ad":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t._self._c;return n("Layout",[n("main",{staticStyle:{"flex-grow":"1"}},[n("div",{staticClass:"body"},[n("div",{staticClass:"container"},[n("h1",[t._v("Vui lòng xác thực tài khoản nhé!")]),n("label",{attrs:{for:"email"}},[n("b",[t._v("Mã xác thực")])]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.verifyCode,expression:"verifyCode"}],attrs:{type:"text",placeholder:"code",required:""},domProps:{value:t.verifyCode},on:{input:function(n){n.target.composing||(t.verifyCode=n.target.value)}}})]),n("button",{on:{click:t.HandleVerifyRegister}},[t._v("Xac nhan")])])])])])},a=[],r=(i("14d9"),i("cde1")),s=i("fbfb"),o=i("ebad"),c={name:"VerifyRegister",components:{Layout:o["a"]},data(){return{verifyCode:""}},methods:{HandleVerifyRegister(){r["a"].callApi(s["m"].VERIFY_EMAIL,"PUT",{verifyCode:this.verifyCode}).then(t=>{"VERIFY_SUCCESS"===t.data.message&&this.$router.push({name:"Login"})}).catch(()=>{alert("Xac thực không thành công!")})}}},l=c,u=i("2877"),f=Object(u["a"])(l,e,a,!1,null,"35447ed7",null);n["default"]=f.exports},"48ac":function(t,n,i){!function(n,i){t.exports=i()}(0,(function(){return function(t){function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var i={};return n.m=t,n.c=i,n.i=function(t){return t},n.d=function(t,i,e){n.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(i,"a",i),i},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/vue-jwt-decode/dist",n(n.s=10)}([function(t,n,i){t.exports=!i(1)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var i=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=i)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var i=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=i)},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,i){var e=i(16);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n){var i=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:i)(t)}},function(t,n,i){var e=i(6),a=i(5);t.exports=function(t){return e(a(t))}},function(t,n,i){"use strict";var e=i(11),a=i.n(e);n.a={install:function(t){t.prototype.$jwtDec=this,t.jwtDec=this},decode:function(t){if("string"!=typeof t&!t instanceof String)return null;var n=t.split(".");if(n.length<2)return null;var i=JSON.parse(atob(n[0])),e=JSON.parse(atob(n[1]));return a()({},i,e)}}},function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i(9);n.default=e.a},function(t,n,i){t.exports={default:i(12),__esModule:!0}},function(t,n,i){i(38),t.exports=i(4).Object.assign},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,i){var e=i(3);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n,i){var e=i(8),a=i(34),r=i(33);t.exports=function(t){return function(n,i,s){var o,c=e(n),l=a(c.length),u=r(s,l);if(t&&i!=i){for(;l>u;)if((o=c[u++])!=o)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===i)return t||u||0;return!t&&-1}}},function(t,n){var i={}.toString;t.exports=function(t){return i.call(t).slice(8,-1)}},function(t,n,i){var e=i(13);t.exports=function(t,n,i){if(e(t),void 0===n)return t;switch(i){case 1:return function(i){return t.call(n,i)};case 2:return function(i,e){return t.call(n,i,e)};case 3:return function(i,e,a){return t.call(n,i,e,a)}}return function(){return t.apply(n,arguments)}}},function(t,n,i){var e=i(3),a=i(2).document,r=e(a)&&e(a.createElement);t.exports=function(t){return r?a.createElement(t):{}}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,i){var e=i(2),a=i(4),r=i(17),s=i(22),o=function(t,n,i){var c,l,u,f=t&o.F,h=t&o.G,p=t&o.S,v=t&o.P,_=t&o.B,m=t&o.W,d=h?a:a[n]||(a[n]={}),g=d.prototype,C=h?e:p?e[n]:(e[n]||{}).prototype;for(c in h&&(i=n),i)(l=!f&&C&&void 0!==C[c])&&c in d||(u=l?C[c]:i[c],d[c]=h&&"function"!=typeof C[c]?i[c]:_&&l?r(u,e):m&&C[c]==u?function(t){var n=function(n,i,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,i)}return new t(n,i,e)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(u):v&&"function"==typeof u?r(Function.call,u):u,v&&((d.virtual||(d.virtual={}))[c]=u,t&o.R&&g&&!g[c]&&s(g,c,u)))};o.F=1,o.G=2,o.S=4,o.P=8,o.B=16,o.W=32,o.U=64,o.R=128,t.exports=o},function(t,n){var i={}.hasOwnProperty;t.exports=function(t,n){return i.call(t,n)}},function(t,n,i){var e=i(25),a=i(30);t.exports=i(0)?function(t,n,i){return e.f(t,n,a(1,i))}:function(t,n,i){return t[n]=i,t}},function(t,n,i){t.exports=!i(0)&&!i(1)((function(){return 7!=Object.defineProperty(i(18)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,i){"use strict";var e=i(28),a=i(26),r=i(29),s=i(35),o=i(6),c=Object.assign;t.exports=!c||i(1)((function(){var t={},n={},i=Symbol(),e="abcdefghijklmnopqrst";return t[i]=7,e.split("").forEach((function(t){n[t]=t})),7!=c({},t)[i]||Object.keys(c({},n)).join("")!=e}))?function(t,n){for(var i=s(t),c=arguments.length,l=1,u=a.f,f=r.f;c>l;)for(var h,p=o(arguments[l++]),v=u?e(p).concat(u(p)):e(p),_=v.length,m=0;_>m;)f.call(p,h=v[m++])&&(i[h]=p[h]);return i}:c},function(t,n,i){var e=i(14),a=i(23),r=i(36),s=Object.defineProperty;n.f=i(0)?Object.defineProperty:function(t,n,i){if(e(t),n=r(n,!0),e(i),a)try{return s(t,n,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(t[n]=i.value),t}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,i){var e=i(21),a=i(8),r=i(15)(!1),s=i(31)("IE_PROTO");t.exports=function(t,n){var i,o=a(t),c=0,l=[];for(i in o)i!=s&&e(o,i)&&l.push(i);for(;n.length>c;)e(o,i=n[c++])&&(~r(l,i)||l.push(i));return l}},function(t,n,i){var e=i(27),a=i(19);t.exports=Object.keys||function(t){return e(t,a)}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,i){var e=i(32)("keys"),a=i(37);t.exports=function(t){return e[t]||(e[t]=a(t))}},function(t,n,i){var e=i(2),a=e["__core-js_shared__"]||(e["__core-js_shared__"]={});t.exports=function(t){return a[t]||(a[t]={})}},function(t,n,i){var e=i(7),a=Math.max,r=Math.min;t.exports=function(t,n){return t=e(t),t<0?a(t+n,0):r(t,n)}},function(t,n,i){var e=i(7),a=Math.min;t.exports=function(t){return t>0?a(e(t),9007199254740991):0}},function(t,n,i){var e=i(5);t.exports=function(t){return Object(e(t))}},function(t,n,i){var e=i(3);t.exports=function(t,n){if(!e(t))return t;var i,a;if(n&&"function"==typeof(i=t.toString)&&!e(a=i.call(t)))return a;if("function"==typeof(i=t.valueOf)&&!e(a=i.call(t)))return a;if(!n&&"function"==typeof(i=t.toString)&&!e(a=i.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},function(t,n){var i=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++i+e).toString(36))}},function(t,n,i){var e=i(20);e(e.S+e.F,"Object",{assign:i(24)})}])}))},d8b4:function(t,n,i){t.exports=i.p+"img/logo.d67a157a.png"},e8c7:function(t,n,i){},ebad:function(t,n,i){"use strict";var e=function(){var t=this,n=t._self._c;return n("div",{staticStyle:{display:"flex","flex-direction":"column","min-height":"100vh"}},[n("header",{staticClass:"Main__header"},[n("div",{staticClass:"Main__header__container"},[t._m(0),n("div",[n("nav",{staticClass:"Main__nav"},[n("router-link",{staticClass:"Main__list__item home",attrs:{to:"/","active-color":"#9D6B54"}},[t._v("Trang Chủ ")]),n("router-link",{staticClass:"Main__list__item course-management",attrs:{to:"/course-management","active-color":"#9D6B54"}},[t._v("Tủ sách ")]),n("router-link",{staticClass:"Main__list__item class-management",attrs:{to:"/class-management","active-color":"#9D6B54"}},[t._v("Blog ")]),n("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/users-management","active-color":"#9D6B54"}},[t._v("Chính sách và điều khoản ")]),n("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/users-management","active-color":"#9D6B54"}},[t._v("Quy trình ")]),n("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/users-management","active-color":"#9D6B54"}},[t._v("Giới thiệu ")]),n("span",{staticClass:"Main__indicator"})],1)]),n("ul",{staticClass:"Main__account"},[this.$cookies.get("token")?n("nav",[n("li",[n("b-dropdown",{staticStyle:{padding:"0"},attrs:{right:"",text:"Right align",variant:"black","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("label",{staticStyle:{"margin-bottom":"0"}},[n("span",{staticClass:"Main__avatar"},[t._v("TB")])])]},proxy:!0}])},[n("p",{staticClass:"dropdown-item"},[t._v(" Thông báo 1 ")]),n("hr",{staticStyle:{margin:"5px"}}),n("p",{staticClass:"dropdown-item"},[t._v(" Thông báo 2 ")])])],1),n("li",[n("b-dropdown",{staticStyle:{padding:"0"},attrs:{right:"",text:"Right align",variant:"black","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("label",{staticStyle:{"margin-bottom":"0"}},[n("span",{staticClass:"Main__avatar"},[t._v("T")])])]},proxy:!0}])},[n("a",{staticClass:"dropdown-item",attrs:{href:"/PersonalIndex"}},[n("div",{staticStyle:{display:"flex","align-items":"center",width:"100%"}},[n("span",{staticClass:"Main__avatar"},[t._v("T")]),n("p",{staticClass:"Main__name"},[t._v(" "+t._s(t.user.name)+" ")])]),n("div",{staticStyle:{float:"right","font-size":"14px",padding:"0 5px 0 0"}})]),n("hr",{staticStyle:{margin:"5px"}}),1==t.user.role||2==t.user.role?n("div",[n("router-link",{staticClass:"dropdown-item",attrs:{to:"/ManageIndex"}},[n("i",{staticClass:"la la-sign-in-alt"}),t._v(" Quản trị ")]),n("hr",{staticStyle:{margin:"5px"}})],1):t._e(),n("button",{staticClass:"dropdown-item",on:{click:t.HandleLogout}},[n("i",{staticClass:"la la-sign-in-alt"}),t._v(" Đăng xuất ")])])],1)]):n("nav",[n("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/login"}},[t._v("Đăng nhập")]),n("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/register"}},[t._v("Đăng ký")])],1)])])]),t._t("default"),t._m(1)],2)},a=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"Main__logo"},[n("a",{attrs:{href:"/"}},[n("img",{attrs:{src:i("d8b4"),alt:"Logo Trạm Sách"}})])])},function(){var t=this,n=t._self._c;return n("footer",[n("div",{staticClass:"Main__subfooter"},[n("div",{staticClass:"Main__subfooter__container"},[n("div",{staticClass:"contact"},[n("span",[t._v("ĐĂNG KÝ NHẬN TIN:")]),n("input",{staticClass:"input1",attrs:{type:"text",placeholder:"Nhập tên của bạn"}}),n("input",{staticClass:"input2",attrs:{type:"text",placeholder:"Nhập email của bạn"}}),n("button",[t._v("ĐĂNG KÝ")])])])]),n("div",{staticClass:"Main__footer"},[n("div",{staticClass:"Main__footer__container"},[n("div",{staticClass:"grid"},[n("div",{staticClass:"grid-row"},[n("div",{staticClass:"grid-column"},[n("a",{attrs:{href:"/"}},[n("img",{attrs:{src:i("d8b4"),alt:"Logo Trạm Sách"}})]),n("br"),n("span",[t._v("Tất cả các giao dịch ở Trạm Sách được")]),n("br"),n("span",[t._v("chúng tôi đảm bảo kiểm duyệt qua ")]),n("br"),n("span",[t._v("hình thức và giao hàng tận nơi trong ")]),n("br"),n("span",[t._v(" địa bàn nội thành TP Hà Nội. Không")]),n("br"),n("span",[t._v("hỗ trợ giao dịch trực tiếp tại Trạm.")])]),n("div",{staticClass:"grid-column"},[n("h3",{staticClass:"heading"},[t._v("TÀI KHOẢN")]),n("ul",{staticClass:"list"},[n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Đăng nhập/Đăng ký")])]),n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Thay đổi thông tin cá nhân")])]),n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Thay đổi thông tin giao hàng")])]),n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Tủ sách")])]),n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Trang cá nhân")])]),n("li",{staticClass:"item"},[n("span",{staticClass:"contact_info"},[t._v("tramsachhn@gmail.com")])])])]),n("div",{staticClass:"grid-column"},[n("h3",{staticClass:"heading"},[t._v("HỖ TRỢ")]),n("ul",{staticClass:"list"},[n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách kiểm duyệt")])]),n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách cọc - hoàn tiền")])]),n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách bảo mật thanh toán")])]),n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Quy trình giao dịch")])]),n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Trung tâm hỗ trợ")])]),n("li",{staticClass:"item"},[n("span",{staticClass:"contact_info"},[t._v("Hotline: 0961284654")])])])]),n("div",{staticClass:"grid-column"},[n("h3",{staticClass:"heading"},[t._v("DỊCH VỤ")]),n("ul",{staticClass:"list"},[n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Điều khoản sử dụng")])]),n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách bảo mật thông tin cá nhân")])]),n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách bảo mật thanh toán")])]),n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Phương thức thanh toán")])]),n("li",{staticClass:"item"},[n("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Giới thiệu Trạm Sách")])]),n("li",{staticClass:"item"},[n("span",{staticClass:"contact_info"},[t._v("Số 1 Đào Duy Anh, Đống Đa, Hà Nội")])])])])])])])])])}],r=i("48ac"),s=i.n(r),o={name:"Layout",data(){return{user:""}},created(){this.getUserInfo()},methods:{getUserInfo(){let t=this.$cookies.get("token");try{this.user=s.a.decode(t,"utf-8"),console.log(this.user)}catch(n){console.log("Not yet Login: ",n)}},HandleLogout(){this.$cookies.remove("token"),this.$router.go()}}},c=o,l=(i("30b6"),i("2877")),u=Object(l["a"])(c,e,a,!1,null,null,null);n["a"]=u.exports}}]);
//# sourceMappingURL=chunk-3872248c.06c36016.js.map