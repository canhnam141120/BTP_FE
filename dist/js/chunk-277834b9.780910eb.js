(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-277834b9"],{"00da":function(t,a,s){},be0f:function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"GetExchanges"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"user-data m-b-30"},[t._m(0),a("button",{staticClass:"au-btn au-btn-icon au-btn--green au-btn--small"},[a("router-link",{staticClass:"zmdi zmdi-plus",attrs:{to:"/ManageTransaction/exchange"}},[t._v("Xem giao dịch đổi")])],1),a("div",{staticClass:"table-responsive table-data"},[a("table",{staticClass:"table"},[t._m(1),t._l(t.listRents,(function(s){return a("tbody",{key:s.id},[a("tr",[t._m(2,!0),a("td",[a("div",{staticClass:"table-data__info"},[a("h6",[t._v(t._s(s.id))])])]),a("td",[a("span",[t._v(t._s(s.ownerId))])]),a("td",[a("span",[a("i",[t._v(t._s(s.owner.fullname))])])]),a("td",[a("span",[t._v(" "+t._s(s.renterId)+" ")])]),a("td",[a("span",[t._v(t._s(s.renter.fullname))])]),a("td",[a("span",[t._v(" "+t._s(s.date)+" ")])]),a("td",[a("span",{staticClass:"role admin"},[a("i",[t._v(t._s(s.status))])])]),a("td",[a("span",[a("button",{staticClass:"au-btn au-btn-icon au-btn--green au-btn--small"},[a("router-link",{attrs:{to:{name:"RentBill",query:{id:s.id}}}},[a("button",[t._v("Hóa đơn")])])],1)])]),a("td",[a("span",[a("button",{staticClass:"au-btn au-btn-icon au-btn--green au-btn--small"},[a("router-link",{attrs:{to:{name:"DetailRent",query:{id:s.id}}}},[a("button",[t._v("Chi tiết")])])],1)])])])])}))],2)]),a("br"),a("button",{staticClass:"au-btn au-btn-icon au-btn--green au-btn--small"},[a("router-link",{staticClass:"zmdi zmdi-plus",attrs:{to:"/ManageIndex"}},[t._v("Quay lại")])],1),a("br"),a("br")])])])])},e=[function(){var t=this,a=t._self._c;return a("h3",{staticClass:"title-3 m-b-30"},[a("i",{staticClass:"zmdi zmdi-account-calendar"}),t._v("Danh sách tất cả giao dịch thuê")])},function(){var t=this,a=t._self._c;return a("thead",[a("tr",[a("td",[a("label",{staticClass:"au-checkbox"},[a("input",{attrs:{type:"checkbox"}}),a("span",{staticClass:"au-checkmark"})])]),a("td",[t._v("Mã giao dịch")]),a("td",[t._v("Mã khách hàng 1")]),a("td",[t._v("Tên khách hàng 1")]),a("td",[t._v("Mã khách hàng 2")]),a("td",[t._v("Tên khách hàng 2")]),a("td",[t._v("Ngày tạo")]),a("td",[t._v("Trạng thái hoạt động")])])])},function(){var t=this,a=t._self._c;return a("td",[a("label",{staticClass:"au-checkbox"},[a("input",{attrs:{type:"checkbox"}}),a("span",{staticClass:"au-checkmark"})])])}],i=s("cde1"),c=s("fbfb"),l={name:"GetRents",data(){return{listRents:""}},created(){this.getRents()},methods:{getRents(){i["a"].callApi(c["h"].LIST_RENT,"GET",{}).then(t=>{this.listRents=t.data.data}).catch(()=>{})}}},d=l,u=(s("d932"),s("2877")),r=Object(u["a"])(d,n,e,!1,null,"46c3d794",null);a["default"]=r.exports},d932:function(t,a,s){"use strict";s("00da")}}]);
//# sourceMappingURL=chunk-277834b9.780910eb.js.map