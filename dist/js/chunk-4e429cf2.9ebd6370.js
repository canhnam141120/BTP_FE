(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e429cf2"],{2934:function(t,a,s){},6812:function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"GetRentBills"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"user-data m-b-30"},[t._m(0),a("button",{staticClass:"au-btn au-btn-icon au-btn--green au-btn--small"},[a("router-link",{attrs:{to:"/ManageBill/exchange-bill"}},[t._v("Xem hóa đơn đổi")])],1),a("div",{staticClass:"table-responsive table-data"},[a("table",{staticClass:"table"},[t._m(1),t._l(t.listBills,(function(s){return a("tbody",{key:s.id},[a("tr",[t._m(2,!0),a("td",[a("div",{staticClass:"table-data__info"},[a("h6",[t._v(t._s(s.id))])])]),a("td",[a("span",[t._v(t._s(s.exchangeId))])]),a("td",[a("span",[a("i",[t._v(t._s(s.user.fullname))])])]),a("td",[a("span",[t._v(" "+t._s(s.totalBook)+" ")])]),a("td",[a("span",[t._v(t._s(s.totalAmount))])]),a("td",[a("span",[t._v(" "+t._s(s.depositFee)+" ")])]),a("td",[a("span",{staticClass:"role admin"},[a("i",[t._v(t._s(s.rentFee))])])]),a("td",[a("span",[t._v(" "+t._s(s.isPaid)+" ")])]),a("td",[a("span",[t._v(" "+t._s(s.paidDate)+" ")])]),a("td",[a("span",[t._v(" "+t._s(s.payments)+" ")])]),a("td",[a("span",[a("button",{staticClass:"au-btn au-btn-icon au-btn--green au-btn--small"},[a("router-link",{attrs:{to:{name:"DetailRentBill",query:{id:s.id}}}},[t._v("Chi tiết")])],1)])])])])}))],2)]),a("br"),a("button",{staticClass:"au-btn au-btn-icon au-btn--green au-btn--small"},[a("router-link",{staticClass:"zmdi zmdi-plus",attrs:{to:"/ManageIndex"}},[t._v("Quay lại")])],1),a("br"),a("br")])])])])},i=[function(){var t=this,a=t._self._c;return a("h3",{staticClass:"title-3 m-b-30"},[a("i",{staticClass:"zmdi zmdi-account-calendar"}),t._v("Danh sách tất cả hóa đơn thuê")])},function(){var t=this,a=t._self._c;return a("thead",[a("tr",[a("td",[a("label",{staticClass:"au-checkbox"},[a("input",{attrs:{type:"checkbox"}}),a("span",{staticClass:"au-checkmark"})])]),a("td",[t._v("Mã hóa đơn:")]),a("td",[t._v("Mã giao dịch")]),a("td",[t._v("Tên khách hàng")]),a("td",[t._v("Số cuốn sách")]),a("td",[t._v("Số tiền")]),a("td",[t._v("Phí đặt cọc")]),a("td",[t._v("Phí thuê")]),a("td",[t._v("Trạng thái thanh toán")]),a("td",[t._v("Ngày thanh toán")]),a("td",[t._v("Phương thức thanh toán")])])])},function(){var t=this,a=t._self._c;return a("td",[a("label",{staticClass:"au-checkbox"},[a("input",{attrs:{type:"checkbox"}}),a("span",{staticClass:"au-checkmark"})])])}],e=s("cde1"),l=s("fbfb"),c={name:"GetRentBills",data(){return{listBills:""}},created(){this.getRentBills()},methods:{getRentBills(){e["a"].callApi(l["c"].LIST_BILL_RENT,"GET",{}).then(t=>{this.listBills=t.data.data}).catch(()=>{})}}},d=c,u=(s("8af9"),s("2877")),r=Object(u["a"])(d,n,i,!1,null,"1afa8580",null);a["default"]=r.exports},"8af9":function(t,a,s){"use strict";s("2934")}}]);
//# sourceMappingURL=chunk-4e429cf2.9ebd6370.js.map