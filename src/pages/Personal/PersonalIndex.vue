<template>
  <div>
    <aside className="menu-sidebar d-none d-lg-block">
      <div className="logo">
        <a href="#">
          <img src="src/image/logo-tramsach.png" alt="Trạm Sách"/>
        </a>
      </div>
      <div className="menu-sidebar__content js-scrollbar1">
        <nav className="navbar-sidebar">
          <ul className="list-unstyled navbar__list">
            <li className="active">
              <button>
                <router-link to="/Personal/MyInformation">Thông tin cá nhân</router-link>
              </button>
              <br><br>
            </li>
            <li className="active">
              <button>
                <router-link to="/Personal/MyBooks">Sách của tôi</router-link>
              </button>
            </li>
            <li className="active">
              <button>
                <router-link to="/Personal/MyPosts">Bài đăng của tôi</router-link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  </div>
</template>