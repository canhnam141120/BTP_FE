(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43f840fb"],{"29ff":function(t,e,n){"use strict";n("6101")},5965:function(t,e,n){},6101:function(t,e,n){},"785e":function(t,e,n){"use strict";n("5965")},d0be:function(t,e,n){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"sidebar",class:t.isOpened?"open":"",style:t.cssVars},[e("div",{staticClass:"logo-details",staticStyle:{margin:"6px 14px 0 14px"}},[t.menuLogo?e("img",{staticClass:"menu-logo icon",attrs:{src:t.menuLogo,alt:"menu-logo"}}):t._e(),e("div",{staticClass:"logo_name"},[t._v(t._s(t.menuTitle))]),e("i",{staticClass:"bx",class:t.isOpened?"bx-menu-alt-right":"bx-menu",attrs:{id:"btn"},on:{click:function(e){t.isOpened=!t.isOpened}}})]),e("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"space-between","flex-grow":"1","max-height":"calc(100% - 60px)"}},[e("div",{staticStyle:{margin:"6px 14px 0 14px"},attrs:{id:"my-scroll"}},[e("ul",{staticClass:"nav-list",staticStyle:{overflow:"visible"}},t._l(t.menuItems,(function(n,a){return e("span",{key:a},[e("li",[e("a",{attrs:{href:n.link}},[e("i",{staticClass:"bx",class:n.icon||"bx-square-rounded"}),e("span",{staticClass:"links_name"},[t._v(t._s(n.name))])]),e("span",{staticClass:"tooltip"},[t._v(t._s(n.tooltip||n.name))])])])})),0)]),t.isLoggedIn?e("div",{staticClass:"profile"},[e("div",{staticClass:"profile-details"},[t.profileImg?e("img",{attrs:{src:t.profileImg,alt:"profileImg"}}):e("i",{staticClass:"bx bxs-user-rectangle"}),e("div",{staticClass:"name_job"},[e("div",{staticClass:"job"},[t._v(t._s(t.user.name))])])]),t.isExitButton?e("button",{staticClass:"bx bx-log-out",staticStyle:{"font-size":"30px",color:"#9D6B54"},attrs:{id:"log_out"},on:{click:t.HandleLogout}}):t._e()]):t._e()])]),t._t("default")],2)},i=[],o=(n("14d9"),n("48ac")),s=n.n(o),l={name:"Side_Bar",props:{
//! Menu settings
isMenuOpen:{type:Boolean,default:!0},menuTitle:{type:String,default:"TRẠM SÁCH"},menuIcon:{type:String,default:"bxl-c-plus-plus"},isPaddingLeft:{type:Boolean,default:!0},menuOpenedPaddingLeftBody:{type:String,default:"300px"},menuClosedPaddingLeftBody:{type:String,default:"78px"},
//! Menu items
menuItems:{type:Array,default:()=>[{link:"/ManageBook",name:"Quản lý sách",tooltip:"Analytics",icon:"bx-book"},{link:"/ManagePost",name:"Quản lý bài đăng",tooltip:"Files",icon:"bx-book-content"},{link:"/ManageTransaction/exchange",name:"Quản lý giao dịch",tooltip:"Dashboard",icon:"bx-cart-alt"},{link:"/ManageBill/exchange-bill",name:"Quản lý hóa đơn",tooltip:"User",icon:"bx-receipt"},{link:"/ManageCategory",name:"Quản lý thể loại",tooltip:"Order",icon:"bx-category"},{link:"/ManageFee",name:"Quản lý phí",tooltip:"Saved",icon:"bx-money"},{link:"/ManageUser",name:"Quản lý người dùng",tooltip:"Messages",icon:"bx-user"},{link:"/ManageAdmin",name:"Quản lý Admin",tooltip:"Setting",icon:"bx-cog"},{link:"/",name:"Trang chủ",tooltip:"Saved",icon:"bx-home"}]},
//! Profile detailes
profileImg:{type:String,default:""},profileName:{type:String,default:""},profileRole:{type:String,default:""},isExitButton:{type:Boolean,default:!0},isLoggedIn:{type:Boolean,default:!0},
//! Styles
bgColor:{type:String,default:"#DFD5CB"},secondaryColor:{type:String,default:"#DFD5CB"},homeSectionColor:{type:String,default:"#e4e9f7"},logoTitleColor:{type:String,default:"#9D6B54"},iconsColor:{type:String,default:"#9D6B54"},itemsTooltipColor:{type:String,default:"#9D6B54"},searchInputTextColor:{type:String,default:"#fff"},menuItemsHoverColor:{type:String,default:"#9D6B54"},menuItemsTextColor:{type:String,default:"#9D6B54"},menuFooterTextColor:{type:String,default:"#9D6B54"}},data(){return{user:"",isOpened:!1}},created(){this.getUserInfo()},methods:{getUserInfo(){let t=this.$cookies.get("token");try{this.user=s.a.decode(t,"utf-8")}catch(e){console.log("Not yet Login: ",e)}},HandleLogout(){this.$cookies.remove("token"),this.$router.push("/")}},mounted(){this.isOpened=this.isMenuOpen},computed:{cssVars(){return{"--padding-left-body":this.isOpened?this.menuOpenedPaddingLeftBody:this.menuClosedPaddingLeftBody,"--bg-color":this.bgColor,"--secondary-color":this.secondaryColor,"--home-section-color":this.homeSectionColor,"--logo-title-color":this.logoTitleColor,"--icons-color":this.iconsColor,"--items-tooltip-color":this.itemsTooltipColor,"--serach-input-text-color":this.searchInputTextColor,"--menu-items-hover-color":this.menuItemsHoverColor,"--menu-items-text-color":this.menuItemsTextColor,"--menu-footer-text-color":this.menuFooterTextColor}}},watch:{isOpened(){window.document.body.style.paddingLeft=this.isOpened&&this.isPaddingLeft?this.menuOpenedPaddingLeftBody:this.menuClosedPaddingLeftBody}}},d=l,r=(n("785e"),n("2877")),c=Object(r["a"])(d,a,i,!1,null,null,null);e["a"]=c.exports},fcd9:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("Side_Bar",[e("div",{staticClass:"GetRentBills"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"user-data m-b-30"},[e("h3",{staticClass:"title-3 m-b-30"},[e("i",{staticClass:"zmdi zmdi-account-calendar"}),t._v("Danh sách tất cả hóa đơn đổi")]),e("button",{staticClass:"au-btn au-btn-icon au-btn--brown au-btn--small"},[e("router-link",{staticClass:"btn-router",attrs:{to:"/ManageBill/rent-bill"}},[t._v("Xem hóa đơn thuê")])],1),e("div",{staticClass:"table-responsive table-data"},[e("table",{staticClass:"table"},[e("thead",[e("tr",[e("td",[t._v("Mã hóa đơn")]),e("td",[t._v("Mã giao dịch")]),e("td",[t._v("Tên khách hàng")]),e("td",[t._v("Số cuốn sách")]),e("td",[t._v("Số tiền")]),e("td",[t._v("Phí đặt cọc")]),e("td",[t._v("Trạng thái thanh toán")]),e("td",[t._v("Ngày thanh toán")]),e("td",[t._v("Phương thức thanh toán")]),e("td")])]),t._l(t.listBills,(function(n){return e("tbody",{key:n.id},[e("tr",[e("td",[e("div",{staticClass:"table-data__info"},[e("h6",[t._v(t._s(n.id))])])]),e("td",[t._v(t._s(n.exchangeId))]),e("td",[t._v(t._s(n.user.fullname))]),e("td",[t._v(t._s(n.totalBook))]),e("td",[t._v(t._s(n.totalAmount))]),e("td",[t._v(t._s(n.depositFee))]),n.isPaid?e("td",[e("span",{staticClass:"role approved"},[t._v(t._s(n.isPaid))])]):e("td",[e("span",{staticClass:"role denied"},[t._v(t._s(n.isPaid))])]),e("td",[t._v(t._s(n.paidDate))]),e("td",[t._v(t._s(n.payments))]),e("td",[e("router-link",{staticClass:"au-btn au-btn-icon au-btn--brown au-btn--small btn-router",attrs:{to:{name:"DetailExchangeBill",query:{id:n.id}}}},[t._v("Chi tiết")])],1),e("td",[e("button",{staticClass:"au-btn au-btn-icon au-btn--brown au-btn--small",on:{click:function(e){return t.HandlePayment(n.id)}}},[t._v("Thanh toán")])])])])}))],2)])])])])])])},i=[],o=n("cde1"),s=n("fbfb"),l=n("d0be"),d={name:"GetExchangeBills",components:{Side_Bar:l["a"]},data(){return{listBills:""}},created(){this.getExchangeBills()},methods:{getExchangeBills(){o["a"].callApi(s["c"].LIST_BILL_EXCHANGE,"GET",{}).then(t=>{this.listBills=t.data.data}).catch(()=>{})},HandlePayment(t){const e=s["l"].CREATE_URL_PAY+t;o["a"].callApi(e,"POST",{}).then(t=>{if("CREATE_SUCCESS"===t.data.message){let e=t.data.data;window.location.href=e}console.log(t)}).catch(()=>{alert("CREATE_FAILED!")})}}},r=d,c=(n("29ff"),n("2877")),u=Object(c["a"])(r,a,i,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-43f840fb.5a5dfcd2.js.map