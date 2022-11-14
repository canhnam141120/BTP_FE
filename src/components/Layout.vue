<template>
  <div style="display: flex; flex-direction: column; min-height: 100vh">
    <header class="Main__header">
      <div class="Main__header__container">
        <div class="Main__logo">
          <a>
            <img src="@/assets/image/logo.svg" alt="Login with google"/>
          </a>
        </div>
        <div>
          <nav class="Main__nav">
            <router-link
                to="/home"
                class="Main__list__item home"
                active-color="#0078d4"
            >Trang Chủ
            </router-link>
            <router-link
                to="/course-management"
                class="Main__list__item course-management"
                active-color="#0078d4"
            >Tủ sách
            </router-link>
            <router-link
                to="/class-management"
                class="Main__list__item class-management"
                active-color="#0078d4"
            >Blog
            </router-link>
            <router-link
                to="/users-management"
                class="Main__list__item musers-management"
                active-color="#0078d4"
            >Chính sách và điều khoản
            </router-link>
            <router-link
                to="/users-management"
                class="Main__list__item musers-management"
                active-color="#0078d4"
            >Quy trình
            </router-link>
            <router-link
                to="/users-management"
                class="Main__list__item musers-management"
                active-color="#0078d4"
            >Giới thiệu
            </router-link>
            <router-link
                to="/users-management"
                class="Main__list__item musers-management"
                active-color="#0078d4"
            >Event
            </router-link>
            <span class="Main__indicator"></span>
          </nav>
        </div>
        <ul class="Main__account">

          <li>
            <b-dropdown right text="Right align" variant="black" no-caret style="padding: 0">
              <template v-slot:button-content style="padding: 0">
                <label style="margin-bottom: 0">
                  <span class="Main__avatar">T</span>
                </label>
              </template>
              <a href="/user-profile" class="dropdown-item">
                <div style="display: flex; align-items: center; width: 100%">
                  <span class="Main__avatar">T</span>
                  <p class="Main__email">
                    thang@emailaaaaaaaaaaaaaaaaaaaaaa.com
                  </p>
                </div>
                <div style="float: right; font-size:14px; padding:0 5px 0 0"><i>admin</i></div>
              </a>
              <hr />
              <a href="/login" class="dropdown-item">
                <i class="la la-sign-in-alt"></i>
                Logout
              </a>
            </b-dropdown>
          </li>
        </ul>
      </div>
    </header>
    <slot/>
    <footer class="Main__footer">
      <div class="Main__footer__container">

      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Layout"
}
</script>

<style lang="scss">
.Main {
  &__site {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 576px) {
      max-width: 540px;
    }
    @media (min-width: 768px) {
      max-width: 720px;
    }
    @media (min-width: 992px) {
      max-width: 960px;
    }
    @media (min-width: 1200px) {
      max-width: 1140px;
    }
    @media (min-width: 1500px) {
      max-width: 1440px;
    }
    @media (min-width: 1600px) {
      max-width: 1560px;
    }
  }

  &__header {
    padding: 10px 0;
    z-index: 10;
    border-bottom: 1px solid #D9D9D9;
    position: sticky;
    top: 0;
    background: white;

    &__container {
      max-width: 1920px;
      margin-left: auto;
      margin-right: auto;
      padding-right: 15px;
      padding-left: 15px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__logo {
    padding-right: 20px;
  }

  &__logo img {
    width: 125px;
    height: auto;
    position: unset;
    margin-right: 15px;
  }

  &__nav {
    flex-grow: 1;
    display: flex;
    align-items: center;
    padding: 0 20px 0 0;
    position: relative;
    height: auto;
    width: auto;
    background: inherit;
    max-width: 100%;
    transform: none;
    transition: none;
  }

  &__list {
    list-style: none;
    padding-left: 32px;
    margin: 0;
    position: relative;

    &__item {
      display: inline-block;
      color: #111111;
      margin-right: 24px;
      width: auto;
      position: relative;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      line-height: 20px;
    }

    &__item:before {
      content: '';
      position: absolute;
      bottom: -7px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #0078d4;
      opacity: 0;
      transition: 0.3s;
    }

    &__item:not(.is_active):hover:before {
      opacity: 1;
      bottom: -20px;
    }

    &__item:not(.is_active):hover {
      color: #0078d4;
      text-decoration: none;
    }
  }

  &__account {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    li {
      font-size: 1rem;
      display: inline-flex;
      margin-bottom: 0;
      margin-left: 12px;
    }

    &__item h3 {
      font-weight: 400;
      transition: all 300ms;
      margin-bottom: 0;
      margin-top: 0;
      font-size: 16px;
      cursor: pointer;
    }

    &__item a {
      font-weight: 400;
      transition: all 300ms;
      margin-bottom: 0;
      margin-top: 0;
      text-decoration: none;
      color: black;
    }
  }

  &__chat {
    background: #E4E6EB;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 5px;
    transition: all 300ms;
    padding: 4px 8px;
  }

  &__notify {
    text-align: center;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    width: 32px;
    height: 32px;
    background: #E4E6EB;
  }

  &__avatar {
    cursor: pointer;
    height: 32px;
    min-width: 32px;
    width: 32px;
    border-radius: 50%;
    text-transform: uppercase;
    color: white;
    font-weight: 500;
    font-size: 14px;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__indicator {
    position: absolute;
    left: 0;
    bottom: -20px;
    transition: 0.4s;
    height: 3px;
    z-index: 1;
  }

  &__footer {
    font-size: 16px;
    line-height: 1.38;
    color: #111111;
    background: #FAFAFA;
    bottom: 0;
    left: 0;
    right: 0;

    &__container {
      width: 100%;
      padding: 45px 15px 25px;
      margin-right: auto;
      margin-left: auto;
      @media (min-width: 576px) {
        max-width: 540px;
      }
      @media (min-width: 768px) {
        max-width: 720px;
      }
      @media (min-width: 992px) {
        max-width: 960px;
      }
      @media (min-width: 1200px) {
        max-width: 1140px;
      }
      @media (min-width: 1500px) {
        max-width: 1440px;
      }
      @media (min-width: 1600px) {
        max-width: 1560px;
      }
    }

    &__logo {
      margin-bottom: 10px;
      // height: 24px;
      width: 153px;
    }
  }

  &__email {
    margin: 0;
    font-size: 14px;
    font-weight: 550;
    white-space: nowrap;
    padding-left: 10px;
    text-overflow: ellipsis;
    overflow: hidden
  }
}

.btn-group > .btn {
  padding: 0;
}

.dropdown-menu {
  min-width: 220px;
  max-width: 300px;
  right: 0 !important;
  left: auto !important;
  height: auto;
  transform: unset !important;
  top: 50px !important;
}

</style>