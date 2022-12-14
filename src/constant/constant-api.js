
export const API_BOOK = Object.freeze({
    LIST_BOOK_FOLLOW: "https://book-trading-platform.herokuapp.com/api/Book/from-favorite-users",
    TOP_BOOK: "https://book-trading-platform.herokuapp.com/api/Book/top-book",
    LIST_BOOK: "https://book-trading-platform.herokuapp.com/api/Book/all",
    FILTER_BOOK: "https://book-trading-platform.herokuapp.com/api/Book/by-filter",
    LIST_BOOK_EXCHANGE: "https://book-trading-platform.herokuapp.com/api/Book/allIsExchange",
    LIST_BOOK_RENT: "https://book-trading-platform.herokuapp.com/api/Book/allIsRent",
    DETAIL_BOOK: "https://book-trading-platform.herokuapp.com/api/Book/",
    CATEGORY_BOOK: "https://book-trading-platform.herokuapp.com/api/Book/category{id}",
    CATEGORY_6BOOK: "https://book-trading-platform.herokuapp.com/api/Book/6book/category",
    GET_FEEDBACK_BOOK: "https://book-trading-platform.herokuapp.com/api/Book/feedback/",
    USER_BOOK: "https://book-trading-platform.herokuapp.com/api/Book/user",
    USER_BOOK6: "https://book-trading-platform.herokuapp.com/api/Book/6book/user",
    SEARCH_BOOK: "https://book-trading-platform.herokuapp.com/api/Book/search-by-title?page=",
    SEARCH_BOOK_USER: "https://book-trading-platform.herokuapp.com/api/Book/search-book-user/user",
    CREATE_BOOK: "https://book-trading-platform.herokuapp.com/api/Book/create",
    FEEDBACK_BOOK: "https://book-trading-platform.herokuapp.com/api/Book/feedback/create/",
    EDIT_BOOK: "https://book-trading-platform.herokuapp.com/api/Book/edit/",
    HIDE_BOOK: "https://book-trading-platform.herokuapp.com/api/Book/hide/",
    SHOW_BOOK: "https://book-trading-platform.herokuapp.com/api/Book/show/"
})

export const API_MANAGE_ADMIN = Object.freeze({
    LIST_ADMIN: "https://book-trading-platform.herokuapp.com/api/ManageAdmin/all",
    REMOVE_ADMIN: "https://book-trading-platform.herokuapp.com/api/ManageAdmin/remove/",
    SEARCH_ADMIN: "https://book-trading-platform.herokuapp.com/api/ManageAdmin/search"
})

export const API_MANAGE_BILL = Object.freeze({
    LIST_BILL_EXCHANGE: "https://book-trading-platform.herokuapp.com/api/ManageBill/exchange-bill/all",
    DETAIL_BILL_EXCHANGE: "https://book-trading-platform.herokuapp.com/api/ManageBill/exchange-bill/",
    UPDATE_BILL_EXCHANGE: "https://book-trading-platform.herokuapp.com/api/ManageBill/exchange-bill/update",
    LIST_BILL_RENT: "https://book-trading-platform.herokuapp.com/api/ManageBill/rent-bill/all",
    DETAIL_BILL_RENT: "https://book-trading-platform.herokuapp.com/api/ManageBill/rent-bill/",
    UPDATE_BILL_RENT: "https://book-trading-platform.herokuapp.com/api/ManageBill/rent-bill/update/",
})

export const API_MANAGE_CATEGORY = Object.freeze({
    All_CATEGORY: "https://book-trading-platform.herokuapp.com/api/ManageCategory/getAll",
    LIST_CATEGORY: "https://book-trading-platform.herokuapp.com/api/ManageCategory/all",
    DETAIL_CATEGORY: "https://book-trading-platform.herokuapp.com/api/ManageCategory/",
    CREATE_CATEGORY: "https://book-trading-platform.herokuapp.com/api/ManageCategory/create",
    EDIT_CATEGORY: "https://book-trading-platform.herokuapp.com/api/ManageCategory/edit/",
    DELETE_CATEGORY: "https://book-trading-platform.herokuapp.com/api/ManageCategory/delete/",
})

export const API_MANAGE_FEE = Object.freeze({
    LIST_FEE: "https://book-trading-platform.herokuapp.com/api/ManageFee/all",
    DETAIL_FEE: "https://book-trading-platform.herokuapp.com/api/ManageFee/",
    CREATE_FEE: "https://book-trading-platform.herokuapp.com/api/ManageFee/create"
})

export const API_PERSONAL = Object.freeze({
    CHECK_USER_LIKE: "https://book-trading-platform.herokuapp.com/api/Personal/checkUserLike/",
    CHECK_BOOK_LIKE: "https://book-trading-platform.herokuapp.com/api/Personal/checkBookLike/",
    CHECK_POST_LIKE: "https://book-trading-platform.herokuapp.com/api/Personal/checkPostLike/",
    NOTIFICATION: "https://book-trading-platform.herokuapp.com/api/Personal/notification/all",
    NOTIFICATION_NOT_READ: "https://book-trading-platform.herokuapp.com/api/Personal/notification/notRead",
    NOTIFICATION_10: "https://book-trading-platform.herokuapp.com/api/Personal/notification/top10new",
    MARK_READ_NOTIFICATION: "https://book-trading-platform.herokuapp.com/api/Personal/notification/mark-read/",
    MARK_READ_NOTIFICATION_ALL: "https://book-trading-platform.herokuapp.com/api/Personal/notification/mark-read-all",
    BOOK_CAN_TRADE: "https://book-trading-platform.herokuapp.com/api/Personal/can-trade",
    LIST_BOOK: "https://book-trading-platform.herokuapp.com/api/Personal/my-book-list",
    LIST_BOOK_APPROVED: "https://book-trading-platform.herokuapp.com/api/Personal/my-approved-book-list",
    LIST_BOOK_DENIED: "https://book-trading-platform.herokuapp.com/api/Personal/my-denied-book-list",
    LIST_BOOK_WAITING: "https://book-trading-platform.herokuapp.com/api/Personal/my-waiting-book-list",
    SEARCH_MY_BOOK: "https://book-trading-platform.herokuapp.com/api/Personal/search-my-book",
    SEARCH_MY_POST: "https://book-trading-platform.herokuapp.com/api/Personal/search-my-post",
    LIST_POST: "https://book-trading-platform.herokuapp.com/api/Personal/my-post-list",
    LIST_POST_APPROVED: "https://book-trading-platform.herokuapp.com/api/Personal/my-approved-post-list",
    LIST_POST_DENIED: "https://book-trading-platform.herokuapp.com/api/Personal/my-denied-post-list",
    LIST_POST_WAITING: "https://book-trading-platform.herokuapp.com/api/Personal/my-waiting-post-list",
    LIST_BOOK_FAVORITE: "https://book-trading-platform.herokuapp.com/api/Personal/my-favorites-book",
    ADD_BOOK_FAVORITE: "https://book-trading-platform.herokuapp.com/api/Personal/my-favorites-book/add/",
    DELETE_BOOK_FAVORITE: "https://book-trading-platform.herokuapp.com/api/Personal/un-favorites-book/",
    LIST_POST_FAVORITE: "https://book-trading-platform.herokuapp.com/api/Personal/my-favorites-post",
    ADD_POST_FAVORITE: "https://book-trading-platform.herokuapp.com/api/Personal/my-favorites-post/add/",
    DELETE_POST_FAVORITE: "https://book-trading-platform.herokuapp.com/api/Personal/un-favorites-post/",
    LIST_USER_FAVORITE: "https://book-trading-platform.herokuapp.com/api/Personal/my-favorites-user",
    ADD_USER_FAVORITE: "https://book-trading-platform.herokuapp.com/api/Personal/my-favorites-user/add/",
    DELETE_USER_FAVORITE: "https://book-trading-platform.herokuapp.com/api/Personal/un-favorites-user/",
    INFORMATION: "https://book-trading-platform.herokuapp.com/api/Personal/my-profile",
    EDIT_INFORMATION: "https://book-trading-platform.herokuapp.com/api/Personal/edit-profile",
    CHANGE_PASSWORD: "https://book-trading-platform.herokuapp.com/api/Personal/edit-password",
    LIST_REQUEST_SEND: "https://book-trading-platform.herokuapp.com/api/Personal/request-send",
    LIST_REQUEST_RECEIVED: "https://book-trading-platform.herokuapp.com/api/Personal/request-received/",
    LIST_EXCHANGE: "https://book-trading-platform.herokuapp.com/api/Personal/my-transaction-exchange-all",
    DETAIL_EXCHANGE: "https://book-trading-platform.herokuapp.com/api/Personal/my-transaction-exchange-detail/{id}",
    BILL_EXCHANGE: "https://book-trading-platform.herokuapp.com/api/Personal/my-transaction-exchange-bill/",
    ALL_BILL_EXCHANGE: "https://book-trading-platform.herokuapp.com/api/Personal/my-exchange-bill-all",
    LIST_RENT: "https://book-trading-platform.herokuapp.com/api/Personal/my-transaction-rent-all",
    DETAIL_RENT: "https://book-trading-platform.herokuapp.com/api/Personal/my-transaction-rent-detail/{id}",
    BILL_RENT: "https://book-trading-platform.herokuapp.com/api/Personal/my-transaction-rent-bill/",
    ALL_BILL_RENT: "https://book-trading-platform.herokuapp.com/api/Personal/my-rent-bill-all",
    INFO_SHIP: "https://book-trading-platform.herokuapp.com/api/Personal/my-infoShip",
    EDIT_SHIP_INFO: "https://book-trading-platform.herokuapp.com/api/Personal/update-info-shipping"
})

export const API_POST = Object.freeze({
    TOP_POST: "https://book-trading-platform.herokuapp.com/api/Post/top-post",
    POST6: "https://book-trading-platform.herokuapp.com/api/Post/6post",
    USER_POST: "https://book-trading-platform.herokuapp.com/api/Post/user",
    LIST_POST: "https://book-trading-platform.herokuapp.com/api/Post/all",
    DETAIL_POST: "https://book-trading-platform.herokuapp.com/api/Post/",
    COMMENT_OF_POST: "https://book-trading-platform.herokuapp.com/api/Post/comment/",
    SEARCH_POST: "https://book-trading-platform.herokuapp.com/api/Post/search",
    UPDATE_POST: "https://book-trading-platform.herokuapp.com/api/Post/update/",
    SEARCH_POST_USER: "https://book-trading-platform.herokuapp.com/api/Post/search/user",
    CREATE_POST: "https://book-trading-platform.herokuapp.com/api/Post/create",
    COMMENT_POST: "https://book-trading-platform.herokuapp.com/api/Post/comment/create/",
    HIDE_POST: "https://book-trading-platform.herokuapp.com/api/Post/hide/",
    SHOW_POST: "https://book-trading-platform.herokuapp.com/api/Post/show/"
})

export const API_USER = Object.freeze({
    USER_LOGIN:"https://book-trading-platform.herokuapp.com/api/User/login",
    USER_REGISTER: "https://book-trading-platform.herokuapp.com/api/User/register",
    USER_LOGOUT: "https://book-trading-platform.herokuapp.com/api/User/logout",
    VERIFY_EMAIL: "https://book-trading-platform.herokuapp.com/api/User/verify-email",
    FORGOT_PASSWORD: "https://book-trading-platform.herokuapp.com/api/User/forgot-password",
    RESET_PASSWORD: "https://book-trading-platform.herokuapp.com/api/User/reset-password",
    NEW_TOKEN: "https://book-trading-platform.herokuapp.com/api/User/new-token"
})

export const API_REQUEST = Object.freeze({
    REQUEST: "https://book-trading-platform.herokuapp.com/api/Request/create/",
    CANCEL_REQUEST: "https://book-trading-platform.herokuapp.com/api/Request/cancel/",
    ACCEPT_REQUEST: "https://book-trading-platform.herokuapp.com/api/Request/accept/",
    DENIED_REQUEST: "https://book-trading-platform.herokuapp.com/api/Request/denied/",
    RENT: "https://book-trading-platform.herokuapp.com/api/Request/rent/",
})

export const API_TRANSACTION = Object.freeze({
    CANCEL_EXCHANGE: "https://book-trading-platform.herokuapp.com/api/Transaction/exchange/cancel/",
    CANCEL_EXCHANGE_DETAIL: "https://book-trading-platform.herokuapp.com/api/Transaction/exchange-detail/cancel/",
    CANCEL_RENT: "https://book-trading-platform.herokuapp.com/api/Transaction/rent/cancel/",
    CANCEL_RENT_DETAIL: "https://book-trading-platform.herokuapp.com/api/Transaction/rent-detail/cancel/",
    CREATE_URL_PAY: "https://book-trading-platform.herokuapp.com/api/Transaction/payment/",
    UPDATE_PAY: "https://book-trading-platform.herokuapp.com/api/Transaction/payment/update?",
    CREATE_URL_PAY_RENT: "https://book-trading-platform.herokuapp.com/api/Transaction/paymentrent/",
    UPDATE_PAY_RENT: "https://book-trading-platform.herokuapp.com/api/Transaction/paymentrent/update?",
})

export const API_MANAGE_USER= Object.freeze({
    LIST_USER: "https://book-trading-platform.herokuapp.com/api/ManageUser/all",
    LIST_BAN_USER:"https://book-trading-platform.herokuapp.com/api/ManageUser/ban-list",
    LIST_ACTIVE_USER: "https://book-trading-platform.herokuapp.com/api/ManageUser/active-list",
    TOP: "https://book-trading-platform.herokuapp.com/api/ManageUser/top",
    DETAIL_USER: "https://book-trading-platform.herokuapp.com/api/ManageUser/",
    SEARCH_USER: "https://book-trading-platform.herokuapp.com/api/ManageUser/search",
    BAN_USER: "https://book-trading-platform.herokuapp.com/api/ManageUser/ban/",
    ACTIVE_USER: "https://book-trading-platform.herokuapp.com/api/ManageUser/active/",
    AUTHORITY_USER: "https://book-trading-platform.herokuapp.com/api/ManageUser/authority/",
})

export const API_MANAGE_POST = Object.freeze({
    LIST_POST: "https://book-trading-platform.herokuapp.com/api/ManagePost/all",
    LIST_POST_APPROVED:"https://book-trading-platform.herokuapp.com/api/ManagePost/approved",
    LIST_POST_WAITING: "https://book-trading-platform.herokuapp.com/api/ManagePost/waiting",
    LIST_POST_DENIED: "https://book-trading-platform.herokuapp.com/api/ManagePost/denied",
    DETAIL_POST: "https://book-trading-platform.herokuapp.com/api/ManagePost/",
    SEARCH_POST: "https://book-trading-platform.herokuapp.com/api/ManagePost/search",
    APPROVED_POST: "https://book-trading-platform.herokuapp.com/api/ManagePost/approved/",
    DENIED_POST: "https://book-trading-platform.herokuapp.com/api/ManagePost/denied/",
    COMMENT_OF_POST: "https://book-trading-platform.herokuapp.com/api/ManagePost/comment/",
    DELETE_COMMENT: "https://book-trading-platform.herokuapp.com/api/ManagePost/delete-comment/",
})

export const API_MANAGE_BOOK = Object.freeze({
    LIST_BOOK: "https://book-trading-platform.herokuapp.com/api/ManageBook/all",
    LIST_BOOK_APPROVED:"https://book-trading-platform.herokuapp.com/api/ManageBook/approved",
    LIST_BOOK_WAITING: "https://book-trading-platform.herokuapp.com/api/ManageBook/waiting",
    LIST_BOOK_DENIED: "https://book-trading-platform.herokuapp.com/api/ManageBook/denied",
    DETAIL_BOOK: "https://book-trading-platform.herokuapp.com/api/ManageBook/",
    SEARCH_BOOK: "https://book-trading-platform.herokuapp.com/api/ManageBook/search",
    APPROVED_BOOK: "https://book-trading-platform.herokuapp.com/api/ManageBook/approved/",
    DENIED_BOOK: "https://book-trading-platform.herokuapp.com/api/ManageBook/denied/",
    FEEDBACK_BOOK: "https://book-trading-platform.herokuapp.com/api/ManageBook/feedback/",
    DELETE_FEEDBACK: "https://book-trading-platform.herokuapp.com/api/ManageBook/delete-feedback/",
    DASHBOARD: "https://book-trading-platform.herokuapp.com/api/ManageBook/dashBoard",
})

export const API_MANAGE_TRANSACTION= Object.freeze({
    LIST_EXCHANGE: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/exchange/all",
    EXCHANGE_BYID: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/exchange/",
    WAITING_EXCHANGE: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/exchange/waiting",
    TRADING_EXCHANGE: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/exchange/trading",
    COMPLETE_EXCHANGE: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/exchange/complete",
    CANCEL_EXCHANGE: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/exchange/cancel",
    SEARCH_EXCHANGE: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/exchange/search",
    DETAIL_EXCHANGE:"https://book-trading-platform.herokuapp.com/api/ManageTransaction/exchange/detail/",
    BILL_EXCHANGE: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/exchange/bill/",
    UPDATE_STATUS_EXCHANGE: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/exchange/update-status/",
    UPDATE_REFUND_EXCHANGE: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/exchange/update-refund/",
    HANDLE_TRADE_EXCHANGE: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/exchange/trading/",
    HANDLE_COMPLETE_EXCHANGE: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/exchange/complete/",
    UPDATE_DETAIL_EXCHANGE: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/exchange-detail/update-status/",
    LIST_RENT: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/rent/all",
    RENT_BYID: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/rent/",
    WAITING_RENT: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/rent/waiting",
    TRADING_RENT: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/rent/trading",
    COMPLETE_RENT: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/rent/complete",
    CANCEL_RENT: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/rent/cancel",
    SEARCH_RENT: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/rent/search",
    DETAIL_RENT: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/rent/detail/",
    BILL_RENT: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/rent/bill/",
    UPDATE_STATUS_RENT: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/rent/update-status/",
    UPDATE_REFUND_RENT: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/rent/update-refund/",
    HANDLE_TRADE_RENT: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/rent/trading/",
    HANDLE_COMPLETE_RENT: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/rent/complete/",
    UPDATE_DETAIL_RENT: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/rent-detail/update-status/",
    DASHBOARD: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/dashBoard",
    AUTO_TRADING_EX: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/autoTradingExchange",
    AUTO_TRADING_RENT: "https://book-trading-platform.herokuapp.com/api/ManageTransaction/autoTradingRent"
})