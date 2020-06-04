<template>
  <div>
      测试
  </div>
</template>

<script>
import {getTestList, getTesDetail, getTesDetail2, getTestLogin} from '../apis'

export default {
  data() {
    return {

    }
  },
  mounted() {
      this.getTestList()
      this.getTesDetail2()
      this.getTestLogin()
  },
  methods: {
    async getTestList() {
        const res = await getTestList()
        console.log(res)
    },
    async getTesDetail2() {
        const params = {
            id: 123
        }
        const res = await getTesDetail2(params)
        console.log(res)
    },
    async getTestLogin() {
        const params = {
            userName: '测试',
            password: '123456'
        }
        const res = await getTestLogin(params)
        console.log(res)
    },
    
  },
  components: {

  }
}
</script>

<style scoped>

</style>
