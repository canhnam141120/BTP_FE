(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e7cc3de"],{"0c04":function(t,i,e){"use strict";e("50c0")},"2c55":function(t,i,e){t.exports=e.p+"img/lggd.3f2d3dfd.png"},"482f":function(t,i,e){"use strict";var s=function(){var t=this,i=t._self._c;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"dialog"},[i("div",{staticClass:"dialogContent"},[i("b-button",{staticClass:"spinner",attrs:{disabled:""}},[i("b-spinner")],1)],1)])},n=[],a={name:"LoadingDialog",props:["show","cancel","confirm"]},o=a,r=(e("ef67"),e("2877")),c=Object(r["a"])(o,s,n,!1,null,"764a15da",null);i["a"]=c.exports},"48ac":function(t,i,e){!function(i,e){t.exports=e()}(0,(function(){return function(t){function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}var e={};return i.m=t,i.c=e,i.i=function(t){return t},i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="/vue-jwt-decode/dist",i(i.s=10)}([function(t,i,e){t.exports=!e(1)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,i){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,i){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,i){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,i){var e=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=e)},function(t,i){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,i,e){var s=e(16);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==s(t)?t.split(""):Object(t)}},function(t,i){var e=Math.ceil,s=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?s:e)(t)}},function(t,i,e){var s=e(6),n=e(5);t.exports=function(t){return s(n(t))}},function(t,i,e){"use strict";var s=e(11),n=e.n(s);i.a={install:function(t){t.prototype.$jwtDec=this,t.jwtDec=this},decode:function(t){if("string"!=typeof t&!t instanceof String)return null;var i=t.split(".");if(i.length<2)return null;var e=JSON.parse(atob(i[0])),s=JSON.parse(atob(i[1]));return n()({},e,s)}}},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e(9);i.default=s.a},function(t,i,e){t.exports={default:e(12),__esModule:!0}},function(t,i,e){e(38),t.exports=e(4).Object.assign},function(t,i){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,i,e){var s=e(3);t.exports=function(t){if(!s(t))throw TypeError(t+" is not an object!");return t}},function(t,i,e){var s=e(8),n=e(34),a=e(33);t.exports=function(t){return function(i,e,o){var r,c=s(i),l=n(c.length),u=a(o,l);if(t&&e!=e){for(;l>u;)if((r=c[u++])!=r)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===e)return t||u||0;return!t&&-1}}},function(t,i){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,i,e){var s=e(13);t.exports=function(t,i,e){if(s(t),void 0===i)return t;switch(e){case 1:return function(e){return t.call(i,e)};case 2:return function(e,s){return t.call(i,e,s)};case 3:return function(e,s,n){return t.call(i,e,s,n)}}return function(){return t.apply(i,arguments)}}},function(t,i,e){var s=e(3),n=e(2).document,a=s(n)&&s(n.createElement);t.exports=function(t){return a?n.createElement(t):{}}},function(t,i){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,i,e){var s=e(2),n=e(4),a=e(17),o=e(22),r=function(t,i,e){var c,l,u,d=t&r.F,h=t&r.G,f=t&r.S,p=t&r.P,v=t&r.B,_=t&r.W,m=h?n:n[i]||(n[i]={}),g=m.prototype,y=h?s:f?s[i]:(s[i]||{}).prototype;for(c in h&&(e=i),e)(l=!d&&y&&void 0!==y[c])&&c in m||(u=l?y[c]:e[c],m[c]=h&&"function"!=typeof y[c]?e[c]:v&&l?a(u,s):_&&y[c]==u?function(t){var i=function(i,e,s){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(i);case 2:return new t(i,e)}return new t(i,e,s)}return t.apply(this,arguments)};return i.prototype=t.prototype,i}(u):p&&"function"==typeof u?a(Function.call,u):u,p&&((m.virtual||(m.virtual={}))[c]=u,t&r.R&&g&&!g[c]&&o(g,c,u)))};r.F=1,r.G=2,r.S=4,r.P=8,r.B=16,r.W=32,r.U=64,r.R=128,t.exports=r},function(t,i){var e={}.hasOwnProperty;t.exports=function(t,i){return e.call(t,i)}},function(t,i,e){var s=e(25),n=e(30);t.exports=e(0)?function(t,i,e){return s.f(t,i,n(1,e))}:function(t,i,e){return t[i]=e,t}},function(t,i,e){t.exports=!e(0)&&!e(1)((function(){return 7!=Object.defineProperty(e(18)("div"),"a",{get:function(){return 7}}).a}))},function(t,i,e){"use strict";var s=e(28),n=e(26),a=e(29),o=e(35),r=e(6),c=Object.assign;t.exports=!c||e(1)((function(){var t={},i={},e=Symbol(),s="abcdefghijklmnopqrst";return t[e]=7,s.split("").forEach((function(t){i[t]=t})),7!=c({},t)[e]||Object.keys(c({},i)).join("")!=s}))?function(t,i){for(var e=o(t),c=arguments.length,l=1,u=n.f,d=a.f;c>l;)for(var h,f=r(arguments[l++]),p=u?s(f).concat(u(f)):s(f),v=p.length,_=0;v>_;)d.call(f,h=p[_++])&&(e[h]=f[h]);return e}:c},function(t,i,e){var s=e(14),n=e(23),a=e(36),o=Object.defineProperty;i.f=e(0)?Object.defineProperty:function(t,i,e){if(s(t),i=a(i,!0),s(e),n)try{return o(t,i,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[i]=e.value),t}},function(t,i){i.f=Object.getOwnPropertySymbols},function(t,i,e){var s=e(21),n=e(8),a=e(15)(!1),o=e(31)("IE_PROTO");t.exports=function(t,i){var e,r=n(t),c=0,l=[];for(e in r)e!=o&&s(r,e)&&l.push(e);for(;i.length>c;)s(r,e=i[c++])&&(~a(l,e)||l.push(e));return l}},function(t,i,e){var s=e(27),n=e(19);t.exports=Object.keys||function(t){return s(t,n)}},function(t,i){i.f={}.propertyIsEnumerable},function(t,i){t.exports=function(t,i){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:i}}},function(t,i,e){var s=e(32)("keys"),n=e(37);t.exports=function(t){return s[t]||(s[t]=n(t))}},function(t,i,e){var s=e(2),n=s["__core-js_shared__"]||(s["__core-js_shared__"]={});t.exports=function(t){return n[t]||(n[t]={})}},function(t,i,e){var s=e(7),n=Math.max,a=Math.min;t.exports=function(t,i){return t=s(t),t<0?n(t+i,0):a(t,i)}},function(t,i,e){var s=e(7),n=Math.min;t.exports=function(t){return t>0?n(s(t),9007199254740991):0}},function(t,i,e){var s=e(5);t.exports=function(t){return Object(s(t))}},function(t,i,e){var s=e(3);t.exports=function(t,i){if(!s(t))return t;var e,n;if(i&&"function"==typeof(e=t.toString)&&!s(n=e.call(t)))return n;if("function"==typeof(e=t.valueOf)&&!s(n=e.call(t)))return n;if(!i&&"function"==typeof(e=t.toString)&&!s(n=e.call(t)))return n;throw TypeError("Can't convert object to primitive value")}},function(t,i){var e=0,s=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+s).toString(36))}},function(t,i,e){var s=e(20);s(s.S+s.F,"Object",{assign:e(24)})}])}))},"50c0":function(t,i,e){},6617:function(t,i,e){t.exports=e.p+"img/deliver.70fd754c.png"},"8c4e8":function(t,i,e){},ae8c:function(t,i,e){},c53d:function(t,i,e){"use strict";e.r(i);var s=function(){var t,i,e,s=this,n=s._self._c;return n("Layout",[n("main",{staticStyle:{"flex-grow":"1"}},[n("LoadingDialog",{directives:[{name:"show",rawName:"v-show",value:s.spinner,expression:"spinner"}]}),n("div",{staticClass:"postDetail"},[n("div",{staticClass:"container"},[n("div",{staticClass:"leftPD"},[n("div",{staticClass:"bottom"},[n("div",{staticClass:"leftTop"},[n("div",{staticClass:"authorPD"},[n("div",{staticStyle:{"margin-left":"auto","margin-right":"auto",width:"80px"}},[n("img",{staticClass:"authorAvatar",attrs:{src:null===(t=s.post.user)||void 0===t?void 0:t.avatar,alt:"Ảnh đại diện"}})]),n("div",{staticClass:"authorName"},[s._v(s._s(null===(i=s.post.user)||void 0===i?void 0:i.fullname))]),n("div",{staticClass:"authorNumber"},[s._v(s._s(null===(e=s.post.user)||void 0===e?void 0:e.likeNumber)+" người thích")]),n("div",{staticStyle:{"margin-left":"auto","margin-right":"auto",width:"fit-content"}},[s.userByToken.UserId!=s.post.userId?n("router-link",{staticClass:"authorBtn",attrs:{to:{name:"OtherPerson",query:{id:s.post.userId}}}},[s._v("Xem")]):n("router-link",{staticClass:"authorBtn",attrs:{to:"/MyBooks"}},[s._v("Trang cá nhân")])],1),n("hr")]),n("div",{staticClass:"contentPD"},[n("div",{staticClass:"titlePD"},[s._v(s._s(s.post.title))]),n("hr"),n("div",{staticClass:"imgPD"},[n("img",{staticClass:"displayPD",attrs:{src:s.post.image,alt:"Ảnh minh họa"}})])])]),n("div",{staticClass:"leftBottom"},[n("div",{staticClass:"mainPD"},[s._v(s._s(s.post.content))]),n("div",{staticClass:"endPD"},[n("div",{staticClass:"createDate"},[n("Icon",{staticClass:"iconTime",attrs:{icon:"ic:twotone-access-time"}}),s._v(s._s(s._f("formatDate")(s.post.createdDate)))],1),""==s.userByToken||s.checkLike?s._e():n("button",{staticClass:"btnLike",on:{click:s.HandleLike}},[n("Icon",{staticStyle:{width:"20px",height:"20px","margin-right":"2%"},attrs:{icon:"ant-design:like-filled"}}),s._v(" Thích ")],1),""!=s.userByToken&&s.checkLike?n("button",{staticClass:"btnLike",on:{click:s.HandleUnLike}},[n("Icon",{staticStyle:{width:"20px",height:"20px","margin-right":"2%"},attrs:{icon:"ant-design:dislike-filled"}}),s._v(" Bỏ Thích ")],1):s._e()])])])]),n("div",{staticClass:"rightPD"},[n("div",{staticClass:"userPost"},[n("div",{staticClass:"subTitle"},[s._v("Cùng tác giả")]),n("hr",{staticClass:"hrPD"}),s._l(s.listUserPost,(function(t){return n("div",{key:t.id},[n("router-link",{staticClass:"postTitlePD",attrs:{to:{name:"PostDetail",query:{id:t.id}}},nativeOn:{click:function(t){return s.loadPage.apply(null,arguments)}}},[s._v(s._s(t.title))]),n("hr",{staticClass:"hrPD2"})],1)}))],2),n("div",{staticClass:"topPost"},[n("div",{staticClass:"subTitle"},[s._v("Bài viết mới nhất")]),n("hr",{staticClass:"hrPD"}),s._l(s.list6Post,(function(t){return n("div",{key:t.id},[n("router-link",{staticClass:"postTitlePD",attrs:{to:{name:"PostDetail",query:{id:t.id}}},nativeOn:{click:function(t){return s.loadPage.apply(null,arguments)}}},[s._v(s._s(t.title))]),n("hr",{staticClass:"hrPD2"})],1)}))],2)])])])],1)])},n=[],a=(e("14d9"),e("cde1")),o=e("fbfb"),r=e("ebad"),c=e("5ea9"),l=e("482f"),u=e("48ac"),d=e.n(u),h={name:"BookDetail",components:{Layout:r["a"],Icon:c["a"],LoadingDialog:l["a"]},data(){return{userByToken:"",info:"",post:"",list6Post:"",listUserPost:"",spinner:!1,checkLike:!1}},created(){this.$cookies.get("token")&&(this.userByToken=d.a.decode(this.$cookies.get("token"),"utf-8"),this.CheckLike()),this.getPostById(),this.get6Post(),this.getMyInformation()},methods:{getPostById(){const t=o["j"].DETAIL_POST+this.$route.query.id;a["a"].callApi(t,"GET",{}).then(t=>{t.data.data?(this.post=t.data.data,this.getPostUser(this.post.userId)):this.$router.push({name:"404Page"})}).catch(()=>{})},get6Post(){a["a"].callApi(o["j"].POST6,"GET",{}).then(t=>{this.list6Post=t.data.data}).catch(()=>{})},getPostUser(t){const i=o["j"].USER_POST+t;a["a"].callApi(i,"GET",{}).then(t=>{this.listUserPost=t.data.data}).catch(()=>{})},getMyInformation(){this.userByToken=d.a.decode(this.$cookies.get("token"),"utf-8"),a["a"].callApi(o["i"].INFORMATION,"POST",{userId:this.userByToken.UserId}).then(t=>{this.info=t.data.data}).catch(()=>{})},loadPage(){this.loading=!0,this.$cookies.get("token")&&this.CheckLike(),this.getPostById()},HandleLike(){this.userByToken=d.a.decode(this.$cookies.get("token"),"utf-8"),a["a"].callApi(o["i"].ADD_POST_FAVORITE+this.$route.query.id,"POST",{userId:this.userByToken.UserId}).then(t=>{"ADD_SUCCESS"==t.data.message&&(this.getPostById(),this.checkLike=!0)}).catch(()=>{})},HandleUnLike(){this.userByToken=d.a.decode(this.$cookies.get("token"),"utf-8"),a["a"].callApi(o["i"].DELETE_POST_FAVORITE+this.$route.query.id,"DELETE",{userId:this.userByToken.UserId}).then(t=>{"DELETE_SUCCESS"==t.data.message&&(this.getPostById(),this.checkLike=!1)}).catch(()=>{})},CheckLike(){this.userByToken=d.a.decode(this.$cookies.get("token"),"utf-8"),a["a"].callApi(o["i"].CHECK_POST_LIKE+this.$route.query.id,"POST",{userId:this.userByToken.UserId}).then(t=>{"TRUE"==t.data.message?this.checkLike=!0:this.checkLike=!1}).catch(()=>{})}},filters:{formatDate(t){return new Date(t).toLocaleString("en-GB")}}},f=h,p=(e("0c04"),e("2877")),v=Object(p["a"])(f,s,n,!1,null,"d37010da",null);i["default"]=v.exports},d92d:function(t,i,e){"use strict";e("8c4e8")},ebad:function(t,i,e){"use strict";var s=function(){var t=this,i=t._self._c;return i("div",{staticStyle:{display:"flex","flex-direction":"column","min-height":"100vh"}},[i("header",{staticClass:"Main__header"},[i("div",{staticClass:"Main__header__container"},[t._m(0),i("div",[i("nav",{staticClass:"Main__nav",staticStyle:{"padding-left":"50px"}},[i("router-link",{staticClass:"Main__list__item home",attrs:{to:"/","active-color":"#9D6B54"}},[t._v("Trang Chủ ")]),i("router-link",{staticClass:"Main__list__item course-management btnCategory",attrs:{to:"/AllBooks","active-color":"#9D6B54"}},[t._v("Tủ sách")]),i("router-link",{staticClass:"Main__list__item class-management",attrs:{to:"/BlogIndex","active-color":"#9D6B54"}},[t._v("Trạm đọc ")]),i("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/PolicyTerms","active-color":"#9D6B54"}},[t._v("Chính sách & điều khoản ")]),i("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/Process","active-color":"#9D6B54"}},[t._v("Quy trình ")]),i("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/Introduce","active-color":"#9D6B54"}},[t._v("Giới thiệu ")]),i("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/QA","active-color":"#9D6B54"}},[t._v("Q&A ")])],1)]),i("ul",{staticClass:"Main__account"},[this.$cookies.get("token")?i("nav",[i("li",[i("b-dropdown",{attrs:{variant:"black","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[i("Icon",{staticClass:"icon",attrs:{icon:"tabler:bell-ringing-2"}}),i("div",{staticClass:"countNoti"},[t._v(t._s(t.count))])]},proxy:!0}])},[i("div",{staticClass:"titleNoti"},[t._v("THÔNG BÁO")]),""!=t.noti?i("div",[t._l(t.noti,(function(e){return i("div",{key:e.id,staticClass:"notification"},[e.isRead?i("div",{staticStyle:{padding:"5px 10px"}},[t._v(t._s(e.content))]):i("div",{staticStyle:{"background-color":"#F0ECE4","border-radius":"5px",padding:"5px 10px"}},[t._v(t._s(e.content))])])})),i("div",{staticClass:"allNoti"},[i("router-link",{staticClass:"linkAllNoti",attrs:{to:"AllNotification"}},[t._v("Xem tất cả")])],1)],2):i("div",{staticClass:"noBookNoti"},[t._v("Danh sách trống!")])])],1),i("li",[i("b-dropdown",{attrs:{right:"",text:"Right align",variant:"black","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[i("img",{staticClass:"icon",attrs:{src:t.user.avatar}})]},proxy:!0}])},[i("div",{staticClass:"dropdown-item-top"},[i("img",{staticClass:"icon",attrs:{src:t.user.avatar}}),i("div",[t._v(t._s(t.user.fullname))]),i("div",{staticStyle:{color:"grey"}},[t._v(t._s(t.user.email))])]),i("hr",{staticStyle:{margin:"5px"}}),3===t.user.roleId?i("router-link",{staticClass:"dropdown-item",attrs:{to:"/MyBooks"}},[i("Icon",{staticClass:"iconPerson",attrs:{icon:"ph:folder-user-bold"}}),t._v(" Quản lý cá nhân ")],1):t._e(),3===t.user.roleId?i("hr",{staticStyle:{margin:"5px"}}):t._e(),3===t.user.roleId?i("router-link",{staticClass:"dropdown-item",attrs:{to:"/MyTransaction"}},[i("Icon",{staticClass:"iconPerson",attrs:{icon:"uil:transaction"}}),t._v(" Giao dịch ")],1):t._e(),3===t.user.roleId?i("hr",{staticStyle:{margin:"5px"}}):t._e(),3===t.user.roleId?i("router-link",{staticClass:"dropdown-item",attrs:{to:"/MyRequests"}},[i("Icon",{staticClass:"iconPerson",attrs:{icon:"bx:mail-send"}}),t._v(" Yêu cầu đã gửi ")],1):t._e(),3===t.user.roleId?i("hr",{staticStyle:{margin:"5px"}}):t._e(),i("router-link",{staticClass:"dropdown-item",attrs:{to:"/MyInformation"}},[i("Icon",{staticClass:"iconPerson",attrs:{icon:"mdi:user-card-details-outline"}}),t._v(" Thông tin cá nhân ")],1),i("hr",{staticStyle:{margin:"5px"}}),1==t.user.roleId||2==t.user.roleId?i("div",[i("router-link",{staticClass:"dropdown-item",attrs:{to:"/ManageIndex"}},[i("Icon",{staticClass:"iconPerson",attrs:{icon:"material-symbols:format-list-bulleted-rounded"}}),t._v(" Quản trị ")],1),i("hr",{staticStyle:{margin:"5px"}})],1):t._e(),i("button",{staticClass:"dropdown-item",on:{click:t.HandleLogout}},[i("Icon",{staticClass:"iconPerson",attrs:{icon:"uil:signout"}}),t._v(" Đăng xuất ")],1)],1)],1)]):i("nav",[i("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/login"}},[t._v("Đăng nhập")]),i("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/register"}},[t._v("Đăng ký")])],1)])])]),t._t("default"),i("footer",[t._m(1),i("div",{staticClass:"Main__footer"},[i("div",{staticClass:"Main__footer__container"},[i("div",{staticClass:"grid"},[i("div",{staticClass:"grid-row"},[t._m(2),i("div",{staticClass:"grid-column"},[i("h3",{staticClass:"heading"},[t._v("TÀI KHOẢN")]),i("ul",{staticClass:"list"},[i("li",{staticClass:"item"},[i("router-link",{staticClass:"item-link",attrs:{to:"/MyBooks"}},[t._v("Trang cá nhân")])],1),i("li",{staticClass:"item"},[i("router-link",{staticClass:"item-link",attrs:{to:"/MyTransaction"}},[t._v("Giao dịch")])],1),i("li",{staticClass:"item"},[i("router-link",{staticClass:"item-link",attrs:{to:"/MyRequests"}},[t._v("Yêu cầu")])],1),i("li",{staticClass:"item"},[i("router-link",{staticClass:"item-link",attrs:{to:"/MyInformation"}},[t._v("Thông tin cá nhân")])],1),i("h3",{staticClass:"heading",staticStyle:{"margin-top":"10px"}},[t._v("LIÊN HỆ")]),i("li",{staticClass:"item",staticStyle:{display:"flex",color:"#9d6b54"}},[i("Icon",{staticStyle:{height:"30px"},attrs:{icon:"material-symbols:mail"}}),i("label",{staticClass:"contact_info",staticStyle:{height:"27px"}},[t._v("tramsachhn@gmail.com")])],1)])]),i("div",{staticClass:"grid-column"},[i("h3",{staticClass:"heading"},[t._v("HỖ TRỢ")]),i("ul",{staticClass:"list"},[i("li",{staticClass:"item"},[i("router-link",{staticClass:"item-link",attrs:{to:"/Policy-Accept"}},[t._v("Chính sách kiểm duyệt")])],1),i("li",{staticClass:"item"},[i("router-link",{staticClass:"item-link",attrs:{to:"/Policy-Cencorship"}},[t._v("Chính sách vận chuyển & dịch vụ")])],1),i("li",{staticClass:"item"},[i("router-link",{staticClass:"item-link",attrs:{to:"/Policy-Comp"}},[t._v("Chính sách đền bù")])],1),i("li",{staticClass:"item"},[i("router-link",{staticClass:"item-link",attrs:{to:"/Policy-Support"}},[t._v("Trung tâm hỗ trợ & liên hệ")])],1),i("h3",{staticClass:"heading",staticStyle:{"margin-top":"10px"}},[t._v(" ")]),i("li",{staticClass:"item",staticStyle:{display:"flex",color:"#9d6b54"}},[i("Icon",{staticStyle:{height:"30px"},attrs:{icon:"ic:round-phone-enabled"}}),i("label",{staticClass:"contact_info",staticStyle:{height:"27px"}},[t._v("Hotline: 0961284654")])],1)])]),i("div",{staticClass:"grid-column"},[i("h3",{staticClass:"heading"},[t._v("DỊCH VỤ")]),i("ul",{staticClass:"list"},[i("li",{staticClass:"item"},[i("router-link",{staticClass:"item-link",attrs:{to:"/TermOfUse"}},[t._v("Điều khoản sử dụng")])],1),i("li",{staticClass:"item"},[i("router-link",{staticClass:"item-link",attrs:{to:"/Policy-Infomation"}},[t._v("Chính sách bảo mật thông tin cá nhân")])],1),i("li",{staticClass:"item"},[i("router-link",{staticClass:"item-link",attrs:{to:"/Policy-Payment"}},[t._v("Chính sách bảo mật thanh toán")])],1),i("li",{staticClass:"item"},[i("router-link",{staticClass:"item-link",attrs:{to:"/Guide-Payment"}},[t._v("Phương thức thanh toán")])],1),i("h3",{staticClass:"heading",staticStyle:{"margin-top":"10px"}},[t._v(" ")]),i("li",{staticClass:"item",staticStyle:{display:"flex",color:"#9d6b54"}},[i("Icon",{staticStyle:{height:"30px"},attrs:{icon:"material-symbols:location-on"}}),i("label",{staticClass:"contact_info",staticStyle:{height:"27px"}},[t._v("Số 1 Đào Duy Anh, Đống Đa, HN")])],1)])])])])])])])],2)},n=[function(){var t=this,i=t._self._c;return i("div",{staticClass:"Main__logo"},[i("a",{attrs:{href:"/"}},[i("img",{attrs:{src:e("2c55"),alt:"Logo Trạm Sách"}})])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"Main__subfooter"},[i("div",{staticClass:"Main__subfooter__container"},[i("div",{staticClass:"contact"},[i("span",[t._v("ĐĂNG KÝ NHẬN TIN:")]),i("input",{staticClass:"input1",attrs:{type:"text",placeholder:"Nhập tên của bạn"}}),i("input",{staticClass:"input2",attrs:{type:"text",placeholder:"Nhập email của bạn"}}),i("button",[t._v("ĐĂNG KÝ")])])])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"grid-column"},[i("div",{staticStyle:{"text-align":"center"}},[i("img",{staticStyle:{width:"150px"},attrs:{src:e("6617"),alt:"Logo Trạm Sách"}})]),i("label",{staticStyle:{"margin-top":"10px",color:"grey","font-size":"16px","text-align":"justify"}},[t._v("Tất cả các giao dịch ở Trạm Sách được chúng tôi đảm bảo kiểm duyệt qua hình thức và giao hàng tận nơi trong địa bàn nội thành TP Hà Nội. Không hỗ trợ giao dịch trực tiếp tại Trạm! ")])])}],a=e("48ac"),o=e.n(a),r=e("fbfb"),c=e("cde1"),l=e("5ea9"),u={name:"Layout",components:{Icon:l["a"]},data(){return{userByToken:"",user:"",noti:"",userId:"",count:""}},created(){this.$cookies.get("token")&&(this.getUserInfoByToken(),this.getNotifications(),this.getNotificationsNotRead())},methods:{getUserInfoByToken(){let t=this.$cookies.get("token");this.userByToken=o.a.decode(t,"utf-8"),c["a"].callApi(r["i"].INFORMATION,"POST",{userId:this.userByToken.UserId}).then(t=>{this.user=t.data.data}).catch(()=>{})},getNotifications(){let t=this.$cookies.get("token");this.userByToken=o.a.decode(t,"utf-8"),c["a"].callApi(r["i"].NOTIFICATION_10,"POST",{userId:this.userByToken.UserId}).then(t=>{this.noti=t.data.data}).catch(()=>{})},getNotificationsNotRead(){let t=this.$cookies.get("token");this.userByToken=o.a.decode(t,"utf-8"),c["a"].callApi(r["i"].NOTIFICATION_NOT_READ,"POST",{userId:this.userByToken.UserId}).then(t=>{this.count=t.data.numberOfRecords}).catch(()=>{})},HandleLogout(){this.$cookies.remove("token"),window.location.replace("/")}}},d=u,h=(e("d92d"),e("2877")),f=Object(h["a"])(d,s,n,!1,null,null,null);i["a"]=f.exports},ef67:function(t,i,e){"use strict";e("ae8c")}}]);
//# sourceMappingURL=chunk-2e7cc3de.6f5e7038.js.map