(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0baa9a"],{"37bb":function(t,e,a){"use strict";a.r(e);var d=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"DetailRent"},[e("h1",[t._v("Chi tiết giao dịch thuê")]),e("br"),e("table",{attrs:{border:"1px"}},[t._m(0),t._l(t.rent,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.rentId))]),e("td",[t._v(t._s(a.id))]),e("td",[t._v(t._s(a.bookId))]),e("td",[t._v(t._s(a.beforeStatusBook))]),e("td",[t._v(t._s(a.afterStatusBook))]),e("td",[t._v(t._s(a.storageStatusBook))]),e("td",[t._v(t._s(a.requestTime))]),e("td",[t._v(t._s(a.expiredDate))]),e("td",[t._v(t._s(a.status))]),t._m(1,!0)])}))],2)]),e("br"),e("button",[e("router-link",{attrs:{to:"/ManageTransaction/rent"}},[t._v("Quay lại")])],1)])},r=[function(){var t=this,e=t._self._c;return e("tr",[e("td",[t._v("Mã giao dịch")]),e("td",[t._v("Mã chi tiết giao dịch")]),e("td",[t._v("Mã sách")]),e("td",[t._v("TT sách trước giao dịch")]),e("td",[t._v("TT sách sau giao dịch")]),e("td",[t._v("TT lưu trữ sách")]),e("td",[t._v("Thời gian tạo")]),e("td",[t._v("Ngày hết hạn")]),e("td",[t._v("Trạng thái")])])},function(){var t=this,e=t._self._c;return e("td",[e("button",[t._v("Hủy")])])}],s=a("fbfb"),n=a("cde1"),i={name:"DetailRent",data(){return{rent:""}},created(){this.getRentById()},methods:{getRentById(){const t=s["h"].DETAIL_RENT+this.$route.query.id;n["a"].callApi(t,"GET",{}).then(t=>{this.rent=t.data.data}).catch(()=>{})}}},_=i,o=a("2877"),c=Object(o["a"])(_,d,r,!1,null,"5976dd0a",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0baa9a.106ec6ea.js.map