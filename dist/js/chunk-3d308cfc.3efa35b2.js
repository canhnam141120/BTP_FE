(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d308cfc"],{2079:function(t,s,i){},2314:function(t,s,i){"use strict";var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"menu-sidebarPS"},[s("div",{staticClass:"title"},[t._v("TRANG CÁ NHÂN")]),s("div",{staticClass:"group-btn"},[s("button",{staticClass:"btn"},[s("button",{staticClass:"btn-icon"},[s("Icon",{attrs:{icon:"material-symbols:menu-book-outline-rounded"}})],1),s("router-link",{staticClass:"side-btn",attrs:{to:"/MyBooks"}},[t._v("Tủ sách")])],1),s("div",{staticClass:"btn"},[s("button",{staticClass:"btn-icon"},[s("Icon",{attrs:{icon:"mdi:post-outline"}})],1),s("router-link",{staticClass:"side-btn",attrs:{to:"/MyPosts"}},[t._v("Bài đăng")])],1),s("div",{staticClass:"btn"},[s("button",{staticClass:"btn-icon"},[s("Icon",{attrs:{icon:"mdi:cards-heart-outline"}})],1),s("router-link",{staticClass:"side-btn",attrs:{to:"/MyFavorites"}},[t._v("Danh sách yêu thích")])],1),s("div",{staticClass:"btn"},[s("button",{staticClass:"btn-icon"},[s("Icon",{attrs:{icon:"mdi:chat-question-outline"}})],1),s("router-link",{staticClass:"side-btn",attrs:{to:"/MyRequests"}},[t._v("Yêu cầu đã gửi")])],1),s("div",{staticClass:"btn"},[s("button",{staticClass:"btn-icon"},[s("Icon",{attrs:{icon:"ic:outline-swap-horizontal-circle"}})],1),s("router-link",{staticClass:"side-btn",attrs:{to:"/MyTransaction"}},[t._v("Giao dịch")])],1),s("div",{staticClass:"btn"},[s("button",{staticClass:"btn-icon"},[s("Icon",{attrs:{icon:"iconoir:profile-circled"}})],1),s("router-link",{staticClass:"side-btn",attrs:{to:"/MyInformation"}},[t._v("Thông tin cá nhân")])],1)])])},n=[],e=i("5ea9"),c={name:"SideBar_Personal",components:{Icon:e["a"]}},o=c,r=(i("7b68"),i("2877")),l=Object(r["a"])(o,a,n,!1,null,"55f02002",null);s["a"]=l.exports},5300:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t._self._c;return s("Layout",[s("main",{staticStyle:{"flex-grow":"1"}},[s("div",{staticClass:"myFVR"},[s("div",{staticClass:"containerMF"},[s("div",{staticClass:"left-contentMF"},[s("SideBar_Personal")],1),s("div",{staticClass:"right-contentMF"},[s("div",[t._v("DS yêu thích của tôi")])])])])])])},n=[],e=i("2314"),c=i("ebad"),o={name:"MyFavorites",components:{SideBar_Personal:e["a"],Layout:c["a"]}},r=o,l=(i("9317"),i("2877")),u=Object(l["a"])(r,a,n,!1,null,null,null);s["default"]=u.exports},"7b68":function(t,s,i){"use strict";i("2079")},9317:function(t,s,i){"use strict";i("d748")},"992a":function(t,s,i){},b317:function(t,s,i){"use strict";i("992a")},d748:function(t,s,i){},d8b4:function(t,s,i){t.exports=i.p+"img/logo.d67a157a.png"},de39:function(t,s,i){t.exports=i.p+"img/bell.92b8bb8e.png"},ebad:function(t,s,i){"use strict";var a=function(){var t=this,s=t._self._c;return s("div",{staticStyle:{display:"flex","flex-direction":"column","min-height":"100vh"}},[s("header",{staticClass:"Main__header"},[s("div",{staticClass:"Main__header__container"},[t._m(0),s("div",[s("nav",{staticClass:"Main__nav"},[s("router-link",{staticClass:"Main__list__item home",attrs:{to:"/","active-color":"#9D6B54"}},[t._v("Trang Chủ ")]),s("router-link",{staticClass:"Main__list__item course-management",attrs:{to:"/AllBooks","active-color":"#9D6B54"}},[t._v("Tủ sách ")]),s("router-link",{staticClass:"Main__list__item class-management",attrs:{to:"/BlogIndex","active-color":"#9D6B54"}},[t._v("Trạm đọc ")]),s("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/users-management","active-color":"#9D6B54"}},[t._v("Chính sách & điều khoản ")]),s("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/users-management","active-color":"#9D6B54"}},[t._v("Quy trình ")]),s("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/users-management","active-color":"#9D6B54"}},[t._v("Giới thiệu ")])],1)]),s("ul",{staticClass:"Main__account"},[this.$cookies.get("token")?s("nav",[s("li",[s("b-dropdown",{attrs:{right:"",text:"Right align",variant:"black","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[s("img",{staticClass:"icon",attrs:{src:i("de39")}})]},proxy:!0}])},t._l(t.noti,(function(i){return s("div",{key:i.id,staticClass:"dropdown-item notification"},[t._v(' "'+t._s(i.content)+'" ')])})),0)],1),s("li",[s("b-dropdown",{attrs:{right:"",text:"Right align",variant:"black","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[s("img",{staticClass:"icon",attrs:{src:t.user.avatar}})]},proxy:!0}])},[s("router-link",{staticClass:"dropdown-item",attrs:{to:"/MyBooks"}},[t._v(" "+t._s(t.user.fullname)+" ")]),s("hr",{staticStyle:{margin:"5px"}}),1==t.user.roleId||2==t.user.roleId?s("div",[s("router-link",{staticClass:"dropdown-item",attrs:{to:"/ManageIndex"}},[t._v(" Quản trị ")]),s("hr",{staticStyle:{margin:"5px"}})],1):t._e(),s("button",{staticClass:"dropdown-item",on:{click:t.HandleLogout}},[t._v("Đăng xuất")])],1)],1)]):s("nav",[s("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/login"}},[t._v("Đăng nhập")]),s("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/register"}},[t._v("Đăng ký")])],1)])])]),t._t("default"),s("footer",[t._m(1),s("div",{staticClass:"Main__footer"},[s("div",{staticClass:"Main__footer__container"},[s("div",{staticClass:"grid"},[s("div",{staticClass:"grid-row"},[t._m(2),s("div",{staticClass:"grid-column"},[s("h3",{staticClass:"heading"},[t._v("TÀI KHOẢN")]),s("ul",{staticClass:"list"},[s("li",{staticClass:"item"},[this.$cookies.get("token")?s("a",{staticClass:"item-link",staticStyle:{cursor:"pointer"},on:{click:t.HandleLogout}},[t._v("Đăng xuất")]):s("a",{staticClass:"item-link",attrs:{href:"/login"}},[t._v("Đăng nhập/Đăng ký")])]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)])]),t._m(8),t._m(9)])])])])])],2)},n=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"Main__logo"},[s("a",{attrs:{href:"/"}},[s("img",{attrs:{src:i("d8b4"),alt:"Logo Trạm Sách"}})])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"Main__subfooter"},[s("div",{staticClass:"Main__subfooter__container"},[s("div",{staticClass:"contact"},[s("span",[t._v("ĐĂNG KÝ NHẬN TIN:")]),s("input",{staticClass:"input1",attrs:{type:"text",placeholder:"Nhập tên của bạn"}}),s("input",{staticClass:"input2",attrs:{type:"text",placeholder:"Nhập email của bạn"}}),s("button",[t._v("ĐĂNG KÝ")])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"grid-column"},[s("a",{attrs:{href:"/"}},[s("img",{attrs:{src:i("d8b4"),alt:"Logo Trạm Sách"}})]),s("br"),s("span",[t._v("Tất cả các giao dịch ở Trạm Sách được")]),s("br"),s("span",[t._v("chúng tôi đảm bảo kiểm duyệt qua ")]),s("br"),s("span",[t._v("hình thức và giao hàng tận nơi trong ")]),s("br"),s("span",[t._v(" địa bàn nội thành TP Hà Nội. Không")]),s("br"),s("span",[t._v("hỗ trợ giao dịch trực tiếp tại Trạm.")])])},function(){var t=this,s=t._self._c;return s("li",{staticClass:"item"},[s("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Thay đổi thông tin cá nhân")])])},function(){var t=this,s=t._self._c;return s("li",{staticClass:"item"},[s("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Thay đổi thông tin giao hàng")])])},function(){var t=this,s=t._self._c;return s("li",{staticClass:"item"},[s("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Tủ sách")])])},function(){var t=this,s=t._self._c;return s("li",{staticClass:"item"},[s("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Trang cá nhân")])])},function(){var t=this,s=t._self._c;return s("li",{staticClass:"item"},[s("span",{staticClass:"contact_info"},[t._v("tramsachhn@gmail.com")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"grid-column"},[s("h3",{staticClass:"heading"},[t._v("HỖ TRỢ")]),s("ul",{staticClass:"list"},[s("li",{staticClass:"item"},[s("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách kiểm duyệt")])]),s("li",{staticClass:"item"},[s("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách cọc - hoàn tiền")])]),s("li",{staticClass:"item"},[s("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách bảo mật thanh toán")])]),s("li",{staticClass:"item"},[s("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Quy trình giao dịch")])]),s("li",{staticClass:"item"},[s("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Trung tâm hỗ trợ")])]),s("li",{staticClass:"item"},[s("span",{staticClass:"contact_info"},[t._v("Hotline: 0961284654")])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"grid-column"},[s("h3",{staticClass:"heading"},[t._v("DỊCH VỤ")]),s("ul",{staticClass:"list"},[s("li",{staticClass:"item"},[s("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Điều khoản sử dụng")])]),s("li",{staticClass:"item"},[s("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách bảo mật thông tin cá nhân")])]),s("li",{staticClass:"item"},[s("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách bảo mật thanh toán")])]),s("li",{staticClass:"item"},[s("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Phương thức thanh toán")])]),s("li",{staticClass:"item"},[s("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Giới thiệu Trạm Sách")])]),s("li",{staticClass:"item"},[s("span",{staticClass:"contact_info"},[t._v("Số 1 Đào Duy Anh, Đống Đa, Hà Nội")])])])])}],e=i("48ac"),c=i.n(e),o=i("fbfb"),r=i("cde1"),l={name:"Layout",data(){return{userByToken:"",user:"",noti:"",userId:""}},created(){this.getUserInfoByToken(),this.getNotifications()},methods:{getUserInfoByToken(){let t=this.$cookies.get("token");this.userByToken=c.a.decode(t,"utf-8"),r["a"].callApi(o["j"].INFORMATION,"POST",{userId:this.userByToken.UserId}).then(t=>{this.user=t.data.data}).catch(()=>{})},getNotifications(){let t=this.$cookies.get("token");this.userByToken=c.a.decode(t,"utf-8"),r["a"].callApi(o["j"].NOTIFICATION_10,"POST",{userId:this.userByToken.UserId}).then(t=>{this.noti=t.data.data}).catch(()=>{})},HandleLogout(){this.$cookies.remove("token"),window.location.replace("/")}}},u=l,_=(i("b317"),i("2877")),h=Object(_["a"])(u,a,n,!1,null,null,null);s["a"]=h.exports}}]);
//# sourceMappingURL=chunk-3d308cfc.3efa35b2.js.map