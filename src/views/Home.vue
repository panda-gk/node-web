<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="fr pd20">{{userInfo.userName}}</div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="#d3dce6"
          >
            <el-submenu index="1" v-for="(menu, index) in menus" :key="index">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{menu.meta.title}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item :index="`${index + 1}-${i + 1}`" v-for="(sonItem, i) in menu.children" :key="i" @click="skip(sonItem)">
                  <a href="javascript:;" >{{sonItem.meta.title}}</a>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import API from './../api'
import menus from '../router/user.js'
import { getUserInfo } from '../apis'
export default {
  name: 'home',
  data () {
    return {
      menus,
      userInfo: {
        userName: ''
      }
    }
  },
  components: {},
  mounted() {
    this.getUserInfo()
  },
  methods: {
   async getUserInfo() {
     const res = await getUserInfo()
     this.userInfo = res
    },
  skip(sonItem) {
    this.$router.push({
      name: sonItem.name
    })
  }
  },
}
</script>
<style scoped>
.home {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 100%;
}
.el-menu-item-group__title {
  display: none;
  padding: 0
}
.el-submenu .el-menu-item {
  padding: 0;
  padding-left: 25px !important;
}
</style>
