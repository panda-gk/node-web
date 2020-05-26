<template>
  <div class="home">
      头部
     <router-view />
     尾部
  </div>
</template>

<script>
// @ is an alias to /src
import API from './../api'
import {getHome, getIndex, getIndexTest, login,getJson } from '../apis'
import { async } from 'q';
export default {
  name: 'home',
  components: {
  },
  mounted () {
    // this.login()
    // this.getHome()

    // this.getIndex()
    // this.getIndexTest()
    // this.getJson()
  },
  methods: {
    async getHome () {
      const params = {
        userName: 'jjjj',
        psd: 1234
      }
      const res = await getHome(params)
      console.log(res)
    },
    async getIndex() {
     const params = {
       id: 1,
     }
     const res = await getIndex(params)
     console.log(res)
    },
    async getIndexTest() {
      const res = await getIndexTest()
      console.log(res)
    },
    async login() {
      const params = {
        userName: 'abc',
        password: '1234'
      }
      const res = await login(params)
      console.log(res)
    },
   async getJson() {
      const res = await getJson()
    }

  }
}
</script>
