(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-93e19a98"],{"0952":function(t,e,a){"use strict";a("fb37")},"7b37":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("Side_Bar",[e("div",{staticClass:"ml"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[t.showDialogED?e("ExchangeDetailDialog",{staticClass:"modal",attrs:{show:t.showDialogED,cancel:t.cancelDialogDetail}},[e("table",{staticClass:"table"},[e("thead",[e("tr",{staticClass:"header"},[e("td",[t._v("Mã")]),e("td",[t._v("Mã Sách 1")]),e("td",[t._v("TT Sách 1 trước GD")]),e("td",[t._v("TT Sách 1 sau GD")]),e("td",[t._v("Mã Sách 2")]),e("td",[t._v("TT Sách 2 trước GD")]),e("td",[t._v("TT Sách 2 sau GD")]),e("td",[t._v("Thời gian tạo")]),e("td",[t._v("Hạn GD")]),e("td",[t._v("Trạng thái")]),t.showEditED?t._e():e("td",[t._v("Hủy")]),t.showEditED?e("td",[t._v("Lưu")]):t._e()])]),t._l(t.listExchangeDetail,(function(a){return e("tbody",{key:a.id},[t.showEditED?t._e():e("tr",[e("td",[t._v(t._s(a.id))]),e("td",[t._v(t._s(a.book1Id))]),null==a.beforeStatusBook1?e("td",[t._v("Chưa cập nhật")]):e("td",[t._v(t._s(a.beforeStatusBook1))]),null==a.afterStatusBook1?e("td",[t._v("Chưa cập nhật")]):e("td",[t._v(t._s(a.afterStatusBook1))]),e("td",[t._v(t._s(a.book2Id))]),null==a.beforeStatusBook2?e("td",[t._v("Chưa cập nhật")]):e("td",[t._v(t._s(a.beforeStatusBook2))]),null==a.afterStatusBook2?e("td",[t._v("Chưa cập nhật")]):e("td",[t._v(t._s(a.afterStatusBook2))]),e("td",[t._v(t._s(t._f("format")(a.requestTime)))]),e("td",[t._v(t._s(t._f("formatDate")(a.expiredDate)))]),"Trading"==a.status?e("td",[e("span",{staticClass:"role trading"},[t._v("ĐANG GD")])]):t._e(),"Complete"==a.status?e("td",[e("span",{staticClass:"role complete"},[t._v("HOÀN THÀNH")])]):t._e(),"Cancel"==a.status?e("td",[e("span",{staticClass:"role cancel"},[t._v("ĐÃ HỦY")])]):t._e(),"Waiting"==a.status?e("td",[e("span",{staticClass:"role waiting"},[t._v("ĐANG ĐỢI")])]):t._e(),"Waiting"==a.status?e("td",[e("button",{staticClass:"tableBtnAction",on:{click:function(e){return t.HandleCancelExchangeDetail(a.id,a.exchangeId)}}},[e("Icon",{attrs:{icon:"mdi:cancel-box"}})],1)]):e("td",[e("button",{staticStyle:{"font-size":"30px",cursor:"not-allowed"},attrs:{disabled:""}},[e("Icon",{attrs:{icon:"mdi:cancel-box"}})],1)])]),t.showEditED&&"Cancel"!=a.status&&"Waiting"!=a.status?e("tr",[e("td",[t._v(t._s(a.id))]),e("td",[t._v(t._s(a.book1Id))]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.beforeStatusBook1,expression:"item.beforeStatusBook1"}],staticClass:"editInput",attrs:{type:"text",maxlength:"50",placeholder:"Nhập tình trạng sách"},domProps:{value:a.beforeStatusBook1},on:{input:function(e){e.target.composing||t.$set(a,"beforeStatusBook1",e.target.value)}}})]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.afterStatusBook1,expression:"item.afterStatusBook1"}],staticClass:"editInput",attrs:{type:"text",maxlength:"50",placeholder:"Nhập tình trạng sách"},domProps:{value:a.afterStatusBook1},on:{input:function(e){e.target.composing||t.$set(a,"afterStatusBook1",e.target.value)}}})]),e("td",[t._v(t._s(a.book2Id))]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.beforeStatusBook2,expression:"item.beforeStatusBook2"}],staticClass:"editInput",attrs:{type:"text",maxlength:"50",placeholder:"Nhập tình trạng sách"},domProps:{value:a.beforeStatusBook2},on:{input:function(e){e.target.composing||t.$set(a,"beforeStatusBook2",e.target.value)}}})]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.afterStatusBook2,expression:"item.afterStatusBook2"}],staticClass:"editInput",attrs:{type:"text",maxlength:"50",placeholder:"Nhập tình trạng sách"},domProps:{value:a.afterStatusBook2},on:{input:function(e){e.target.composing||t.$set(a,"afterStatusBook2",e.target.value)}}})]),e("td",[t._v(t._s(t._f("format")(a.requestTime)))]),e("td",[t._v(t._s(t._f("formatDate")(a.expiredDate)))]),"Trading"==a.status?e("td",[e("span",{staticClass:"role trading"},[t._v("ĐANG GD")])]):t._e(),"Complete"==a.status?e("td",[e("span",{staticClass:"role complete"},[t._v("HOÀN THÀNH")])]):t._e(),"Cancel"==a.status?e("td",[e("span",{staticClass:"role cancel"},[t._v("ĐÃ HỦY")])]):t._e(),"Waiting"==a.status?e("td",[e("span",{staticClass:"role waiting"},[t._v("ĐANG ĐỢI")])]):t._e(),e("td",[e("button",{staticClass:"tableBtnAction",on:{click:function(e){return t.editExchangeDetail(a.id,a.exchangeId)}}},[e("Icon",{attrs:{icon:"dashicons:cloud-saved"}})],1)])]):t._e()])}))],2),e("div",{staticClass:"divBtn"},[t.showEditED?t._e():e("button",{staticClass:"au-btn au-btn-icon au-btn--brown au-btn--small btn-router btnUpdate",on:{click:function(e){t.showEditED=!0}}},[t._v("Cập nhật")]),t.showEditED?e("button",{staticClass:"au-btn au-btn-icon au-btn--brown au-btn--small btn-router btnUpdate",on:{click:function(e){t.showEditED=!1}}},[t._v("Xong")]):t._e()])]):t._e(),t.showDialogBD?e("ExchangeBillDialog",{staticClass:"modal",attrs:{show:t.showDialogBD,cancel:t.cancelDialogBill}},[e("table",{staticClass:"table"},[e("thead",[e("tr",{staticClass:"header"},[e("td",[t._v("Mã hóa đơn")]),e("td",[t._v("Mã/Tên KH")]),e("td",[t._v("Tổng sách")]),e("td",[t._v("Phí cọc")]),e("td",[t._v("Phí ship")]),e("td",[t._v("Phí dịch vụ")]),e("td",[t._v("Tổng tiền")]),e("td",[t._v("TT Thanh toán")]),e("td",[t._v("Ngày thanh toán")]),e("td",[t._v("Phương thức thanh toán")])])]),t._l(t.listExchangeBills,(function(a){return e("tbody",{key:a.id},[e("tr",[e("td",[t._v(t._s(a.id))]),e("td",[t._v(t._s(a.userId)+"/"+t._s(a.user.fullname))]),e("td",[t._v(t._s(a.totalBook))]),e("td",[t._v(t._s(a.depositFee.toLocaleString())+"đ")]),e("td",[t._v(t._s(a.feeId1Navigation.price.toLocaleString())+"đ")]),a.feeId3Navigation?e("td",[t._v(t._s(a.feeId2Navigation.price.toLocaleString())+"đ + "+t._s(a.totalBook-1)+"x"+t._s(a.feeId3Navigation.price)+"đ")]):e("td",[t._v(t._s(a.feeId2Navigation.price.toLocaleString())+"đ")]),e("td",[t._v(t._s(a.totalAmount))]),a.isPaid?e("td",[e("span",{staticClass:"role paid"},[t._v("ĐÃ THANH TOÁN")])]):e("td",[e("span",{staticClass:"role notPaid"},[t._v("CHƯA THANH TOÁN")])]),a.paidDate?e("td",[t._v(t._s(a.paidDate))]):e("td",[t._v("Chưa thanh toán")]),e("td",[t._v(t._s(a.payments))])])])}))],2)]):t._e(),t.showDialogUE?e("UpdateExchangeDialog",{staticClass:"modal",attrs:{show:t.showDialogUE}},[e("div",{staticClass:"topDialog"},[e("div",{staticClass:"dialogTitle"},[t._v("CẬP NHẬT GIAO DỊCH SỐ "+t._s(t.exchange.id))]),e("button",{staticClass:"dialogExit",on:{click:t.cancelDialogUE}},[t._v("X")])]),e("div",{staticClass:"updateBody"},[e("div",{staticClass:"updateLeft"},[e("div",{staticClass:"customer"},[t._v("KHÁCH HÀNG 1")]),e("label",{staticClass:"labelFee"},[t._v("TT Vận Chuyển: ")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.exchange.storageStatus1,expression:"exchange.storageStatus1"}],staticClass:"sl",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.exchange,"storageStatus1",e.target.multiple?a:a[0])}}},t._l(t.listStatus,(function(a){return e("option",{key:a.id,domProps:{value:a.id}},[t._v(t._s(a.name))])})),0),e("br"),e("br"),e("label",{staticClass:"labelFee"},[t._v("Ngày nhận: ")]),"Received"==t.exchange.storageStatus1?e("input",{directives:[{name:"model",rawName:"v-model",value:t.exchange.receiveDate1,expression:"exchange.receiveDate1"}],staticClass:"sl",attrs:{type:"date",required:""},domProps:{value:t.exchange.receiveDate1},on:{input:function(e){e.target.composing||t.$set(t.exchange,"receiveDate1",e.target.value)}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.exchange.receiveDate1,expression:"exchange.receiveDate1"}],staticClass:"sl",attrs:{type:"date",disabled:"",required:""},domProps:{value:t.exchange.receiveDate1},on:{input:function(e){e.target.composing||t.$set(t.exchange,"receiveDate1",e.target.value)}}}),e("br"),e("br"),e("label",{staticClass:"labelFee"},[t._v("Ngày gửi: ")]),"Sent"==t.exchange.storageStatus1?e("input",{directives:[{name:"model",rawName:"v-model",value:t.exchange.sendDate1,expression:"exchange.sendDate1"}],staticClass:"sl",attrs:{type:"date",required:""},domProps:{value:t.exchange.sendDate1},on:{input:function(e){e.target.composing||t.$set(t.exchange,"sendDate1",e.target.value)}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.exchange.sendDate1,expression:"exchange.sendDate1"}],staticClass:"sl",attrs:{type:"date",disabled:"",required:""},domProps:{value:t.exchange.sendDate1},on:{input:function(e){e.target.composing||t.$set(t.exchange,"sendDate1",e.target.value)}}}),e("br"),e("br"),e("label",{staticClass:"labelFee"},[t._v("Ngày thu hồi: ")]),"Recall"==t.exchange.storageStatus1?e("input",{directives:[{name:"model",rawName:"v-model",value:t.exchange.recallDate1,expression:"exchange.recallDate1"}],staticClass:"sl",attrs:{type:"date",required:""},domProps:{value:t.exchange.recallDate1},on:{input:function(e){e.target.composing||t.$set(t.exchange,"recallDate1",e.target.value)}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.exchange.recallDate1,expression:"exchange.recallDate1"}],staticClass:"sl",attrs:{type:"date",disabled:"",required:""},domProps:{value:t.exchange.recallDate1},on:{input:function(e){e.target.composing||t.$set(t.exchange,"recallDate1",e.target.value)}}}),e("br"),e("br"),e("label",{staticClass:"labelFee"},[t._v("Ngày hoàn trả: ")]),"Refund"==t.exchange.storageStatus1?e("input",{directives:[{name:"model",rawName:"v-model",value:t.exchange.refundDate1,expression:"exchange.refundDate1"}],staticClass:"sl",attrs:{type:"date",required:""},domProps:{value:t.exchange.refundDate1},on:{input:function(e){e.target.composing||t.$set(t.exchange,"refundDate1",e.target.value)}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.exchange.refundDate1,expression:"exchange.refundDate1"}],staticClass:"sl",attrs:{type:"date",disabled:"",required:""},domProps:{value:t.exchange.refundDate1},on:{input:function(e){e.target.composing||t.$set(t.exchange,"refundDate1",e.target.value)}}}),e("br")]),e("div",{staticClass:"updateRight"},[e("div",{staticClass:"customer"},[t._v("KHÁCH HÀNG 2")]),e("label",{staticClass:"labelFee"},[t._v("TT Vận Chuyển: ")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.exchange.storageStatus2,expression:"exchange.storageStatus2"}],staticClass:"sl",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.exchange,"storageStatus2",e.target.multiple?a:a[0])}}},t._l(t.listStatus,(function(a){return e("option",{key:a.id,domProps:{value:a.id}},[t._v(t._s(a.name))])})),0),e("br"),e("br"),e("label",{staticClass:"labelFee"},[t._v("Ngày nhận: ")]),"Received"==t.exchange.storageStatus2?e("input",{directives:[{name:"model",rawName:"v-model",value:t.exchange.receiveDate2,expression:"exchange.receiveDate2"}],staticClass:"sl",attrs:{type:"date",required:""},domProps:{value:t.exchange.receiveDate2},on:{input:function(e){e.target.composing||t.$set(t.exchange,"receiveDate2",e.target.value)}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.exchange.receiveDate2,expression:"exchange.receiveDate2"}],staticClass:"sl",attrs:{type:"date",disabled:"",required:""},domProps:{value:t.exchange.receiveDate2},on:{input:function(e){e.target.composing||t.$set(t.exchange,"receiveDate2",e.target.value)}}}),e("br"),e("br"),e("label",{staticClass:"labelFee"},[t._v("Ngày gửi: ")]),"Sent"==t.exchange.storageStatus2?e("input",{directives:[{name:"model",rawName:"v-model",value:t.exchange.sendDate2,expression:"exchange.sendDate2"}],staticClass:"sl",attrs:{type:"date",required:""},domProps:{value:t.exchange.sendDate2},on:{input:function(e){e.target.composing||t.$set(t.exchange,"sendDate2",e.target.value)}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.exchange.sendDate2,expression:"exchange.sendDate2"}],staticClass:"sl",attrs:{type:"date",disabled:"",required:""},domProps:{value:t.exchange.sendDate2},on:{input:function(e){e.target.composing||t.$set(t.exchange,"sendDate2",e.target.value)}}}),e("br"),e("br"),e("label",{staticClass:"labelFee"},[t._v("Ngày thu hồi: ")]),"Recall"==t.exchange.storageStatus2?e("input",{directives:[{name:"model",rawName:"v-model",value:t.exchange.recallDate2,expression:"exchange.recallDate2"}],staticClass:"sl",attrs:{type:"date",required:""},domProps:{value:t.exchange.recallDate2},on:{input:function(e){e.target.composing||t.$set(t.exchange,"recallDate2",e.target.value)}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.exchange.recallDate2,expression:"exchange.recallDate2"}],staticClass:"sl",attrs:{type:"date",disabled:"",required:""},domProps:{value:t.exchange.recallDate2},on:{input:function(e){e.target.composing||t.$set(t.exchange,"recallDate2",e.target.value)}}}),e("br"),e("br"),e("label",{staticClass:"labelFee"},[t._v("Ngày hoàn trả: ")]),"Refund"==t.exchange.storageStatus2?e("input",{directives:[{name:"model",rawName:"v-model",value:t.exchange.refundDate2,expression:"exchange.refundDate2"}],staticClass:"sl",attrs:{type:"date",required:""},domProps:{value:t.exchange.refundDate2},on:{input:function(e){e.target.composing||t.$set(t.exchange,"refundDate2",e.target.value)}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.exchange.refundDate2,expression:"exchange.refundDate2"}],staticClass:"sl",attrs:{type:"date",disabled:"",required:""},domProps:{value:t.exchange.refundDate2},on:{input:function(e){e.target.composing||t.$set(t.exchange,"refundDate2",e.target.value)}}}),e("br")])]),e("div",{staticClass:"divBtn"},["Refund"==t.exchange.storageStatus1&&"Refund"==t.exchange.storageStatus2?e("button",{staticClass:"dialogBtn",on:{click:function(e){return t.HandleComplete(t.exchange.id)}}},[t._v("Hoàn Thành")]):e("button",{staticClass:"dialogBtn",on:{click:t.saveUE}},[t._v("Cập Nhật")])])]):t._e(),e("div",{staticClass:"user-data m-b-30"},[e("LoadingDialog",{directives:[{name:"show",rawName:"v-show",value:t.spinner,expression:"spinner"}],staticStyle:{"z-index":"999999"}}),e("div",{staticClass:"titleMB"},[t._v("QUẢN LÝ GIAO DỊCH ĐỔI")]),e("hr"),e("div",{staticClass:"search-transaction"},[e("router-link",{staticClass:"au-btn au-btn-icon au-btn--brown au-btn--small btn-router",staticStyle:{height:"50px","padding-top":"10px"},attrs:{to:"/ManageTransaction/rent"}},[t._v("Xem giao dịch thuê")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"selectCss",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.filter=e.target.multiple?a:a[0]},function(e){return t.onchange(e)}]}},t._l(t.listFilter,(function(a){return e("option",{key:a,domProps:{value:a}},[t._v(t._s(a))])})),0),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"number",placeholder:"Nhập mã giao dịch"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),e("button",{on:{click:t.HandleSearch}},[t._v("Tìm")])])],1),0==t.totalExchanges&&""==t.filter?e("div",{staticClass:"table-responsive table-data noResult"},[t._v(" Không tìm thấy giao dịch tương ứng! ")]):e("div",{staticClass:"table-responsive table-data"},[e("table",{staticClass:"table"},[e("thead",[e("tr",[e("td",[t._v("Chi tiết")]),e("td",[t._v("Mã GD")]),e("td",[t._v("Khách hàng 1")]),e("td",[t._v("Vận đơn KH1")]),e("td",[t._v("Khách hàng 2")]),e("td",[t._v("Vận đơn KH2")]),e("td",[t._v("Ngày tạo")]),e("td",[t._v("Trạng thái")]),e("td",[t._v("Hóa đơn")]),e("td",[t._v("Cập nhật")])])]),t._l(t.listExchanges,(function(a){return e("tbody",{key:a.id},[e("tr",[e("td",{staticStyle:{"padding-left":"12px"}},[e("button",{staticClass:"tableBtnAction",on:{click:function(e){return t.openDialogDetail(a.id)}}},[e("Icon",{attrs:{icon:"ic:baseline-remove-red-eye"}})],1)]),e("td",[t._v(t._s(a.id))]),e("td",[t._v(t._s(a.userId1)+" - "+t._s(a.userId1Navigation.fullname))]),"Waiting"==a.storageStatus1?e("td",[e("span",{staticClass:"role tradingWaiting"},[t._v("ĐANG ĐỢI")])]):t._e(),"Received"==a.storageStatus1?e("td",[e("span",{staticClass:"role tradingStatus"},[t._v("ĐÃ NHẬN - "+t._s(t._f("formatDate")(a.receiveDate1)))])]):t._e(),"Sent"==a.storageStatus1?e("td",[e("span",{staticClass:"role tradingStatus"},[t._v("ĐÃ GỬI - "+t._s(t._f("formatDate")(a.sendDate1)))])]):t._e(),"Recall"==a.storageStatus1?e("td",[e("span",{staticClass:"role tradingStatus"},[t._v("ĐÃ THU HỒI - "+t._s(t._f("formatDate")(a.recallDate1)))])]):t._e(),"Refund"==a.storageStatus1?e("td",[e("span",{staticClass:"role tradingStatus"},[t._v("ĐÃ HOÀN TRẢ - "+t._s(t._f("formatDate")(a.refundDate1)))])]):t._e(),e("td",[t._v(t._s(a.userId2)+" - "+t._s(a.userId2Navigation.fullname))]),"Waiting"==a.storageStatus2?e("td",[e("span",{staticClass:"role tradingWaiting"},[t._v("ĐANG ĐỢI")])]):t._e(),"Received"==a.storageStatus2?e("td",[e("span",{staticClass:"role tradingStatus"},[t._v("ĐÃ NHẬN - "+t._s(t._f("formatDate")(a.receiveDate2)))])]):t._e(),"Sent"==a.storageStatus2?e("td",[e("span",{staticClass:"role tradingStatus"},[t._v("ĐÃ GỬI - "+t._s(t._f("formatDate")(a.sendDate2)))])]):t._e(),"Recall"==a.storageStatus2?e("td",[e("span",{staticClass:"role tradingStatus"},[t._v("ĐÃ THU HÔI - "+t._s(t._f("formatDate")(a.recallDate2)))])]):t._e(),"Refund"==a.storageStatus2?e("td",[e("span",{staticClass:"role tradingStatus"},[t._v("ĐÃ HOÀN TRẢ - "+t._s(t._f("formatDate")(a.refundDate2)))])]):t._e(),e("td",[t._v(t._s(t._f("formatDate")(a.date)))]),"Trading"==a.status?e("td",[e("span",{staticClass:"role trading"},[t._v("ĐANG GD")])]):t._e(),"Complete"==a.status?e("td",[e("span",{staticClass:"role complete"},[t._v("HOÀN THÀNH")])]):t._e(),"Cancel"==a.status?e("td",[e("span",{staticClass:"role cancel"},[t._v("ĐÃ HỦY")])]):t._e(),"Waiting"==a.status?e("td",[e("span",{staticClass:"role waiting"},[t._v("ĐANG ĐỢI")])]):t._e(),e("td",[e("button",{staticClass:"tableBtnAction",on:{click:function(e){return t.openDialogBill(a.id)}}},[e("Icon",{attrs:{icon:"ic:baseline-remove-red-eye"}})],1)]),"Waiting"==a.status?e("td",[e("button",{staticClass:"tableBtnAction",on:{click:function(e){return t.HandleTrading(a.id)}}},[e("Icon",{attrs:{icon:"material-symbols:check-box-rounded"}})],1),e("button",{staticClass:"tableBtnAction",on:{click:function(e){return t.HandleCanCelExchange(a.id)}}},[e("Icon",{attrs:{icon:"mdi:cancel-box"}})],1)]):t._e(),"Complete"==a.status||"Cancel"==a.status?e("td",[e("button",{staticStyle:{"font-size":"30px",cursor:"not-allowed"},attrs:{disabled:""}},[e("Icon",{attrs:{icon:"material-symbols:check-box-rounded"}})],1),e("button",{staticStyle:{"font-size":"30px",cursor:"not-allowed"},attrs:{disabled:""}},[e("Icon",{attrs:{icon:"mdi:cancel-box"}})],1)]):t._e(),"Trading"==a.status?e("td",{staticStyle:{"padding-left":"25px"}},[e("button",{staticClass:"tableBtnAction",on:{click:function(e){return t.openDialogUE(a.id)}}},[e("Icon",{attrs:{icon:"material-symbols:edit-document-rounded"}})],1)]):t._e()])])}))],2),e("div",{staticClass:"paging-transaction"},[""==t.filter?e("b-pagination",{staticClass:"page-number",attrs:{"total-rows":t.totalExchanges,"per-page":10},on:{input:t.getExchanges},scopedSlots:t._u([{key:"first-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("‹‹")])]},proxy:!0},{key:"prev-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("‹")])]},proxy:!0},{key:"next-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("›")])]},proxy:!0},{key:"last-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("››")])]},proxy:!0},{key:"page",fn:function({page:a,active:s}){return[s?e("b",{staticStyle:{color:"white"}},[t._v(t._s(a)+" ")]):e("b",{staticStyle:{color:"#9D6B54"}},[t._v(t._s(a))])]}}],null,!1,1684021845),model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t._e(),"Tất Cả"==t.filter?e("b-pagination",{staticClass:"page-number",attrs:{"total-rows":t.totalExchanges,"per-page":10},on:{input:t.getExchanges},scopedSlots:t._u([{key:"first-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("‹‹")])]},proxy:!0},{key:"prev-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("‹")])]},proxy:!0},{key:"next-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("›")])]},proxy:!0},{key:"last-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("››")])]},proxy:!0},{key:"page",fn:function({page:a,active:s}){return[s?e("b",{staticStyle:{color:"white"}},[t._v(t._s(a)+" ")]):e("b",{staticStyle:{color:"#9D6B54"}},[t._v(t._s(a))])]}}],null,!1,1684021845),model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t._e(),"Đang Đợi"==t.filter?e("b-pagination",{staticClass:"page-number",attrs:{"total-rows":t.totalExchanges,"per-page":10},on:{input:t.getExchangeWaiting},scopedSlots:t._u([{key:"first-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("‹‹")])]},proxy:!0},{key:"prev-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("‹")])]},proxy:!0},{key:"next-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("›")])]},proxy:!0},{key:"last-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("››")])]},proxy:!0},{key:"page",fn:function({page:a,active:s}){return[s?e("b",{staticStyle:{color:"white"}},[t._v(t._s(a)+" ")]):e("b",{staticStyle:{color:"#9D6B54"}},[t._v(t._s(a))])]}}],null,!1,1684021845),model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t._e(),"Đang Giao Dịch"==t.filter?e("b-pagination",{staticClass:"page-number",attrs:{"total-rows":t.totalExchanges,"per-page":10},on:{input:t.getExchangeTrading},scopedSlots:t._u([{key:"first-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("‹‹")])]},proxy:!0},{key:"prev-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("‹")])]},proxy:!0},{key:"next-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("›")])]},proxy:!0},{key:"last-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("››")])]},proxy:!0},{key:"page",fn:function({page:a,active:s}){return[s?e("b",{staticStyle:{color:"white"}},[t._v(t._s(a)+" ")]):e("b",{staticStyle:{color:"#9D6B54"}},[t._v(t._s(a))])]}}],null,!1,1684021845),model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t._e(),"Đã Hoàn Thành"==t.filter?e("b-pagination",{staticClass:"page-number",attrs:{"total-rows":t.totalExchanges,"per-page":10},on:{input:t.getExchangeComplete},scopedSlots:t._u([{key:"first-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("‹‹")])]},proxy:!0},{key:"prev-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("‹")])]},proxy:!0},{key:"next-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("›")])]},proxy:!0},{key:"last-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("››")])]},proxy:!0},{key:"page",fn:function({page:a,active:s}){return[s?e("b",{staticStyle:{color:"white"}},[t._v(t._s(a)+" ")]):e("b",{staticStyle:{color:"#9D6B54"}},[t._v(t._s(a))])]}}],null,!1,1684021845),model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t._e(),"Đã Hủy"==t.filter?e("b-pagination",{staticClass:"page-number",attrs:{"total-rows":t.totalExchanges,"per-page":10},on:{input:t.getExchangeCancel},scopedSlots:t._u([{key:"first-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("‹‹")])]},proxy:!0},{key:"prev-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("‹")])]},proxy:!0},{key:"next-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("›")])]},proxy:!0},{key:"last-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("››")])]},proxy:!0},{key:"page",fn:function({page:a,active:s}){return[s?e("b",{staticStyle:{color:"white"}},[t._v(t._s(a)+" ")]):e("b",{staticStyle:{color:"#9D6B54"}},[t._v(t._s(a))])]}}],null,!1,1684021845),model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t._e()],1)])],1)],1)])])])},n=[],i=a("cde1"),o=a("fbfb"),l=a("d0be"),r=a("482f"),c=a("7009"),d=a("6ba0"),g=a("b34b"),u=a("5ea9"),h={name:"GetExchanges",components:{Side_Bar:l["a"],LoadingDialog:r["a"],ExchangeDetailDialog:c["a"],ExchangeBillDialog:d["a"],UpdateExchangeDialog:g["a"],Icon:u["a"]},data(){return{listExchanges:"",totalExchanges:"",listExchangeDetail:"",listExchangeBills:"",exchange:"",search:"",isSearch:"",spinner:!1,filter:"Tất Cả",listFilter:["Tất Cả","Đang Đợi","Đang Giao Dịch","Đã Hoàn Thành","Đã Hủy"],listStatus:[{id:"Waiting",name:"Đang Đợi"},{id:"Received",name:"Đã Nhận"},{id:"Sent",name:"Đã Gửi"},{id:"Recall",name:"Đã Thu Hồi"},{id:"Refund",name:"Đã Hoàn Trả"}],page:"",showDialogED:!1,showDialogBD:!1,showDialogUE:!1,showEditED:!1,beforeStatusBook1:"",afterStatusBook1:"",beforeStatusBook2:"",afterStatusBook2:""}},created(){this.isSearch=!1,this.getExchanges(1)},methods:{onchange(t){this.isSearch=!1,this.search="","Tất Cả"===t.target.value&&this.getExchanges(1),"Đang Đợi"===t.target.value&&this.getExchangeWaiting(1),"Đang Giao Dịch"===t.target.value&&this.getExchangeTrading(1),"Đã Hoàn Thành"===t.target.value&&this.getExchangeComplete(1),"Đã Hủy"===t.target.value&&this.getExchangeCancel(1)},getExchanges(t){this.spinner=!0,this.isSearch?i["a"].callApi(o["h"].SEARCH_EXCHANGE+t,"POST",{id:this.search}).then(e=>{this.listExchanges=e.data.data,this.totalExchanges=e.data.numberOfRecords,this.page=t,this.spinner=!1}).catch(()=>{}):i["a"].callApi(o["h"].LIST_EXCHANGE+t,"GET",{}).then(e=>{this.listExchanges=e.data.data,this.totalExchanges=e.data.numberOfRecords,this.page=t,this.spinner=!1}).catch(()=>{})},getExchangeWaiting(t){this.spinner=!0,i["a"].callApi(o["h"].WAITING_EXCHANGE+t,"GET",{}).then(e=>{this.listExchanges=e.data.data,this.totalExchanges=e.data.numberOfRecords,this.page=t,this.spinner=!1}).catch(()=>{})},getExchangeTrading(t){this.spinner=!0,i["a"].callApi(o["h"].TRADING_EXCHANGE+t,"GET",{}).then(e=>{this.listExchanges=e.data.data,this.totalExchanges=e.data.numberOfRecords,this.page=t,this.spinner=!1}).catch(()=>{})},getExchangeComplete(t){this.spinner=!0,i["a"].callApi(o["h"].COMPLETE_EXCHANGE+t,"GET",{}).then(e=>{this.listExchanges=e.data.data,this.totalExchanges=e.data.numberOfRecords,this.page=t,this.spinner=!1}).catch(()=>{})},getExchangeCancel(t){this.spinner=!0,i["a"].callApi(o["h"].CANCEL_EXCHANGE+t,"GET",{}).then(e=>{this.listExchanges=e.data.data,this.totalExchanges=e.data.numberOfRecords,this.page=t,this.spinner=!1}).catch(()=>{})},getExchangeDetail(t){this.listExchangeDetail="",i["a"].callApi(o["h"].DETAIL_EXCHANGE+t,"GET",{}).then(t=>{this.listExchangeDetail=t.data.data}).catch(()=>{})},getExchangeBill(t){this.listExchangeBills="",i["a"].callApi(o["h"].BILL_EXCHANGE+t,"GET",{}).then(t=>{this.listExchangeBills=t.data.data}).catch(()=>{})},getExchangeById(t){this.exchange="",i["a"].callApi(o["h"].EXCHANGE_BYID+t,"GET",{}).then(t=>{this.exchange=t.data.data}).catch(()=>{})},HandleSearch(){return this.search?(this.filter="",this.isSearch=!0):(this.filter="Tất Cả",this.isSearch=!1),this.getExchanges(1)},HandleTrading(t){i["a"].callApi(o["h"].HANDLE_TRADE_EXCHANGE+t,"PUT",{}).then(t=>{"UPDATE_SUCCESS"===t.data.message&&(""===this.filter&&this.getExchanges(this.page),"Tất Cả"===this.filter&&this.getExchanges(this.page),"Đang Đợi"===this.filter&&this.getExchangeWaiting(this.page))}).catch(()=>{})},HandleComplete(t){i["a"].callApi(o["h"].HANDLE_COMPLETE_EXCHANGE+t,"PUT",{}).then(t=>{"UPDATE_SUCCESS"===t.data.message&&this.saveUE()}).catch(()=>{})},openDialogDetail(t){this.showDialogED=!0,this.getExchangeDetail(t)},cancelDialogDetail(){this.showDialogED=!1},openDialogBill(t){this.showDialogBD=!0,this.getExchangeBill(t)},cancelDialogBill(){this.showDialogBD=!1},openDialogUE(t){this.getExchangeById(t),this.showDialogUE=!0},cancelDialogUE(){this.showDialogUE=!1},saveUE(){this.spinner=!0,i["a"].callApi(o["h"].UPDATE_STATUS_EXCHANGE+this.exchange.id,"PUT",{storageStatus1:this.exchange.storageStatus1,storageStatus2:this.exchange.storageStatus2,sendDate1:this.exchange.sendDate1,receiveDate1:this.exchange.receiveDate1,recallDate1:this.exchange.recallDate1,refundDate1:this.exchange.refundDate1,sendDate2:this.exchange.sendDate2,receiveDate2:this.exchange.receiveDate2,recallDate2:this.exchange.recallDate2,refundDate2:this.exchange.refundDate2}).then(t=>{"UPDATE_SUCCESS"===t.data.message&&(alert("Cập nhật thành công"),""===this.filter&&this.getExchanges(this.page),"Tất Cả"===this.filter&&this.getExchanges(this.page),"Đang Giao Dịch"===this.filter&&this.getExchangeTrading(this.page),this.showDialogUE=!1)}).catch(()=>{}),this.showDialogUE=!1},editExchangeDetail(t,e){const a=this.listExchangeDetail.filter(e=>e.id==t);i["a"].callApi(o["h"].UPDATE_DETAIL_EXCHANGE+t,"PUT",{beforeStatusBook1:a[0].beforeStatusBook1,beforeStatusBook2:a[0].beforeStatusBook2,afterStatusBook1:a[0].afterStatusBook1,afterStatusBook2:a[0].afterStatusBook2}).then(t=>{"UPDATE_SUCCESS"===t.data.message&&(alert("Cập nhật thành công!"),this.getExchangeDetail(e))}).catch(()=>{})},HandleCancelExchangeDetail(t,e){i["a"].callApi(o["m"].CANCEL_EXCHANGE_DETAIL+t,"PUT",{}).then(t=>{"SUCCESS"===t.data.message&&this.getExchangeDetail(e)}).catch(()=>{alert("Không thành công!")})},HandleCanCelExchange(t){this.spinner=!0,i["a"].callApi(o["m"].CANCEL_EXCHANGE+t,"PUT",{}).then(t=>{"SUCCESS"===t.data.message&&(""===this.filter&&this.getExchanges(this.page),"Tất Cả"===this.filter&&this.getExchanges(this.page),"Đang Đợi"===this.filter&&this.getExchangeWaiting(this.page))}).catch(()=>{alert("Không thành công!")})}},filters:{formatDate(t){return new Date(t).toLocaleDateString("en-GB")},format(t){return new Date(t).toLocaleString("en-GB")}}},p=h,v=(a("0952"),a("2877")),_=Object(v["a"])(p,s,n,!1,null,null,null);e["default"]=_.exports},fb37:function(t,e,a){}}]);
//# sourceMappingURL=chunk-93e19a98.15036f57.js.map