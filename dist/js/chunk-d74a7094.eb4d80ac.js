(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d74a7094"],{5965:function(e,t,o){},"6e1a":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e._self._c;return t("Side_Bar",[t("div",[t("div",{staticClass:"DetailBook"},[t("h1",[e._v("Chi tiết sách "+e._s(e.book.title))]),t("div",[t("div",[t("label",[e._v("Mã sách: ")]),t("span",[e._v(e._s(e.book.id))])]),t("div",[t("label",[e._v("Người đăng: ")]),t("span",[e._v(e._s(e.book.user.fullname))])]),t("div",[t("label",[e._v("Tên sách: ")]),t("span",[e._v(e._s(e.book.title))])]),t("div",[t("label",[e._v("Ảnh: ")]),t("img",{attrs:{src:e.book.image,height:"90px",width:"65px"}})]),t("div",[t("label",[e._v("Thể loại: ")]),t("span",[e._v(e._s(e.book.category.name))])]),t("div",[t("label",[e._v("Nội dung: ")]),t("span",[e._v(e._s(e.book.description))])]),t("div",[t("label",[e._v("Tác giả: ")]),t("span",[e._v(e._s(e.book.author))])]),t("div",[t("label",[e._v("Nhà xuất bản: ")]),t("span",[e._v(e._s(e.book.publisher))])]),t("div",[t("label",[e._v("Năm xuất bản: ")]),t("span",[e._v(e._s(e.book.year))])]),t("div",[t("label",[e._v("Ngôn ngữ: ")]),t("span",[e._v(e._s(e.book.language))])]),t("div",[t("label",[e._v("Số trang: ")]),t("span",[e._v(e._s(e.book.numberOfPages))])]),t("div",[t("label",[e._v("Khối lượng: ")]),t("span",[e._v(e._s(e.book.weight))])]),t("div",[t("label",[e._v("Giá bìa: ")]),t("span",[e._v(e._s(e.book.coverPrice))])]),t("div",[t("label",[e._v("Giá cọc: ")]),t("span",[e._v(e._s(e.book.depositPrice))])]),t("div",[t("label",[e._v("Tình trạng: ")]),t("span",[e._v(e._s(e.book.statusBook))])]),t("div",[t("label",[e._v("Ngày đăng: ")]),t("span",[e._v(e._s(e.book.postedDate))])]),t("div",[t("label",[e._v("Cho phép đổi: ")]),t("span",[e._v(e._s(e.book.isExchange))])]),t("div",[t("label",[e._v("Cho phép thuê: ")]),t("span",[e._v(e._s(e.book.isRent))])]),t("div",[t("label",[e._v("Phí thuê: ")]),t("span",[e._v(e._s(e.book.rentFee))])]),t("div",[t("label",[e._v("Số ngày: ")]),t("span",[e._v(e._s(e.book.numberOfDays))])]),t("div",[t("label",[e._v("Trạng thái: ")]),t("span",[e._v(e._s(e.book.status))])]),t("br")])]),t("button",[t("router-link",{staticClass:"au-btn au-btn-icon au-btn--brown au-btn--small btn-router",attrs:{to:"/ManageBook"}},[e._v("Quay lại")])],1)])])},n=[],s=o("cde1"),a=o("fbfb"),l=o("d0be"),r={name:"DetailBook",components:{Side_Bar:l["a"]},data(){return{book:""}},created(){this.getBookById()},methods:{getBookById(){const e=a["d"].DETAIL_BOOK+this.$route.query.id;s["a"].callApi(e,"GET",{}).then(e=>{this.book=e.data.data}).catch(()=>{})}}},d=r,c=(o("e3a8"),o("2877")),u=Object(c["a"])(d,i,n,!1,null,null,null);t["default"]=u.exports},"785e":function(e,t,o){"use strict";o("5965")},c285:function(e,t,o){},d0be:function(e,t,o){"use strict";var i=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"sidebar",class:e.isOpened?"open":"",style:e.cssVars},[t("div",{staticClass:"logo-details",staticStyle:{margin:"6px 14px 0 14px"}},[e.menuLogo?t("img",{staticClass:"menu-logo icon",attrs:{src:e.menuLogo,alt:"menu-logo"}}):e._e(),t("div",{staticClass:"logo_name"},[e._v(e._s(e.menuTitle))]),t("i",{staticClass:"bx",class:e.isOpened?"bx-menu-alt-right":"bx-menu",attrs:{id:"btn"},on:{click:function(t){e.isOpened=!e.isOpened}}})]),t("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"space-between","flex-grow":"1","max-height":"calc(100% - 60px)"}},[t("div",{staticStyle:{margin:"6px 14px 0 14px"},attrs:{id:"my-scroll"}},[t("ul",{staticClass:"nav-list",staticStyle:{overflow:"visible"}},e._l(e.menuItems,(function(o,i){return t("span",{key:i},[t("li",[t("a",{attrs:{href:o.link}},[t("i",{staticClass:"bx",class:o.icon||"bx-square-rounded"}),t("span",{staticClass:"links_name"},[e._v(e._s(o.name))])]),t("span",{staticClass:"tooltip"},[e._v(e._s(o.tooltip||o.name))])])])})),0)]),e.isLoggedIn?t("div",{staticClass:"profile"},[t("div",{staticClass:"profile-details"},[e.profileImg?t("img",{attrs:{src:e.profileImg,alt:"profileImg"}}):t("i",{staticClass:"bx bxs-user-rectangle"}),t("div",{staticClass:"name_job"},[t("div",{staticClass:"job"},[e._v(e._s(e.user.name))])])]),e.isExitButton?t("button",{staticClass:"bx bx-log-out",staticStyle:{"font-size":"30px",color:"#9D6B54"},attrs:{id:"log_out"},on:{click:e.HandleLogout}}):e._e()]):e._e()])]),e._t("default")],2)},n=[],s=(o("14d9"),o("48ac")),a=o.n(s),l={name:"Side_Bar",props:{
//! Menu settings
isMenuOpen:{type:Boolean,default:!0},menuTitle:{type:String,default:"TRẠM SÁCH"},menuIcon:{type:String,default:"bxl-c-plus-plus"},isPaddingLeft:{type:Boolean,default:!0},menuOpenedPaddingLeftBody:{type:String,default:"300px"},menuClosedPaddingLeftBody:{type:String,default:"78px"},
//! Menu items
menuItems:{type:Array,default:()=>[{link:"/ManageBook",name:"Quản lý sách",tooltip:"Analytics",icon:"bx-book"},{link:"/ManagePost",name:"Quản lý bài đăng",tooltip:"Files",icon:"bx-book-content"},{link:"/ManageTransaction/exchange",name:"Quản lý giao dịch",tooltip:"Dashboard",icon:"bx-cart-alt"},{link:"/ManageBill/exchange-bill",name:"Quản lý hóa đơn",tooltip:"User",icon:"bx-receipt"},{link:"/ManageCategory",name:"Quản lý thể loại",tooltip:"Order",icon:"bx-category"},{link:"/ManageFee",name:"Quản lý phí",tooltip:"Saved",icon:"bx-money"},{link:"/ManageUser",name:"Quản lý người dùng",tooltip:"Messages",icon:"bx-user"},{link:"/ManageAdmin",name:"Quản lý Admin",tooltip:"Setting",icon:"bx-cog"},{link:"/",name:"Trang chủ",tooltip:"Saved",icon:"bx-home"}]},
//! Profile detailes
profileImg:{type:String,default:""},profileName:{type:String,default:""},profileRole:{type:String,default:""},isExitButton:{type:Boolean,default:!0},isLoggedIn:{type:Boolean,default:!0},
//! Styles
bgColor:{type:String,default:"#DFD5CB"},secondaryColor:{type:String,default:"#DFD5CB"},homeSectionColor:{type:String,default:"#e4e9f7"},logoTitleColor:{type:String,default:"#9D6B54"},iconsColor:{type:String,default:"#9D6B54"},itemsTooltipColor:{type:String,default:"#9D6B54"},searchInputTextColor:{type:String,default:"#fff"},menuItemsHoverColor:{type:String,default:"#9D6B54"},menuItemsTextColor:{type:String,default:"#9D6B54"},menuFooterTextColor:{type:String,default:"#9D6B54"}},data(){return{user:"",isOpened:!1}},created(){this.getUserInfo()},methods:{getUserInfo(){let e=this.$cookies.get("token");try{this.user=a.a.decode(e,"utf-8")}catch(t){console.log("Not yet Login: ",t)}},HandleLogout(){this.$cookies.remove("token"),this.$router.push("/")}},mounted(){this.isOpened=this.isMenuOpen},computed:{cssVars(){return{"--padding-left-body":this.isOpened?this.menuOpenedPaddingLeftBody:this.menuClosedPaddingLeftBody,"--bg-color":this.bgColor,"--secondary-color":this.secondaryColor,"--home-section-color":this.homeSectionColor,"--logo-title-color":this.logoTitleColor,"--icons-color":this.iconsColor,"--items-tooltip-color":this.itemsTooltipColor,"--serach-input-text-color":this.searchInputTextColor,"--menu-items-hover-color":this.menuItemsHoverColor,"--menu-items-text-color":this.menuItemsTextColor,"--menu-footer-text-color":this.menuFooterTextColor}}},watch:{isOpened(){window.document.body.style.paddingLeft=this.isOpened&&this.isPaddingLeft?this.menuOpenedPaddingLeftBody:this.menuClosedPaddingLeftBody}}},r=l,d=(o("785e"),o("2877")),c=Object(d["a"])(r,i,n,!1,null,null,null);t["a"]=c.exports},e3a8:function(e,t,o){"use strict";o("c285")}}]);
//# sourceMappingURL=chunk-d74a7094.eb4d80ac.js.map