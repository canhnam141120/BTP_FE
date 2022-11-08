<template>
  <div>
    <div>
      <h1>Giao diện quản trị</h1>
      <button><router-link to="/ManageAdmin">Quản lý quản trị viên</router-link></button><br><br>
      <button><router-link to="/ManageTransaction/exchange">Quản lý giao dịch</router-link></button><br><br>
      <button><router-link to="/ManageBill/exchange-bill">Quản lý hóa đơn</router-link></button><br><br>
      <button><router-link to="/ManageUser">Quản lý người dùng</router-link></button><br><br>
      <button><router-link to="/ManageBook">Quản lý sách</router-link></button><br><br>
      <button><router-link to="/ManagePost">Quản lý bài đăng</router-link></button><br><br>
      <button><router-link to="/ManageCategory">Quản lý thể loại</router-link></button><br><br>
      <button><router-link to="/ManageFee">Quản lý phí</router-link></button>
    </div>
    <br>
    <button><router-link to="/">Về trang web</router-link></button>
  </div>
</template>

