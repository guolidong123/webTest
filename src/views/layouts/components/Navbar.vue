<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container"></hamburger>

    <breadcrumb class="breadcrumb-container"></breadcrumb>

    <div class="right-menu">
      <error-log class="errLog-container right-menu-item"></error-log>

      <!--<el-tooltip effect="dark" :content="$t('navbar.screenfull')" placement="bottom">-->
      <!--<screenfull class="screenfull right-menu-item"></screenfull>-->
      <!--</el-tooltip>-->

      <!--<lang-select class="international right-menu-item"></lang-select>-->

      <!--<el-tooltip effect="dark" :content="$t('navbar.theme')" placement="bottom">-->
      <!--<theme-picker class="theme-switch right-menu-item"></theme-picker>-->
      <!--</el-tooltip>-->
      <el-dropdown>
        <div class="msg">
          <span class="number" v-if="msgLength">{{msgLength}}</span>
          <i class="el-icon-bell"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item v-if="msgLength">
              您有{{msgLength}}条消息
            </el-dropdown-item>
            <el-dropdown-item v-else>
              没有新消息
            </el-dropdown-item>
          </router-link>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          hello <span class="username">{{username}}</span>
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>

            </el-dropdown-item>
          </router-link>
          <router-link to="/setting/profile">
            <el-dropdown-item>
              修改个人信息
            </el-dropdown-item>
          </router-link>
          <router-link to="/">
            <el-dropdown-item divided>
              <span @click="logout" style="display:block;">登出</span>
            </el-dropdown-item>
          </router-link>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-menu>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Breadcrumb from '@/components/Breadcrumb'
  import Hamburger from '@/components/Hamburger'
  import ErrorLog from '@/components/ErrorLog'
  import Screenfull from '@/components/Screenfull'
  import LangSelect from '@/components/LangSelect'
  import ThemePicker from '@/components/ThemePicker'


  export default {
    components: {
      Breadcrumb,
      Hamburger,
      ErrorLog,
      Screenfull,
      LangSelect,
      ThemePicker
    },
    computed: {
    username() {
      return '果果'
    },
    msgLength () {
      return 1;
    }
  },
    methods: {

      logout() {
        alert("登出")
      }
    }
    /*computed: {
      ...mapGetters([
        'sidebar',
        'name',
        'avatar'
      ]),
    username() {
      return this.$store.state.user.username
    },
    msgLength () {
      return this.$store.state.user.newMsgNum;
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()// In order to re-instantiate the vue-router object to avoid bugs
    })
    }
  }
  */
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../../../styles/variables.scss';
  .navbar {
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .breadcrumb-container{
    float: left;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    float: right;
    height: 100%;
  &:focus{
     outline: none;
   }
  .right-menu-item {
    display: inline-block;
    margin: 0 8px;
  }
  .screenfull {
    height: 20px;
  }
  .international{
    vertical-align: top;
  }
  .theme-switch {
    vertical-align: 15px;
  }
  .avatar-container {
    height: 50px;
    margin-right: 30px;
  .avatar-wrapper {
    cursor: pointer;
    margin-top: 4px;
    position: relative;
  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
  .el-icon-caret-bottom {
    position: absolute;
    right: -20px;
    top: 20px;
    font-size: 12px;
  }
  .username {
    color: $green
  }
  }
  }
  }
  .msg {
    position: relative;
    width: 24px;
    font-size: 18px;
    cursor: pointer;
  &:hover {
     color: $light-blue;
   }
  .number {
    position: absolute;
    right: 0;
    top: -5px;
    font-size: 14px;
    color: $red;
  }
  }
  }
</style>
