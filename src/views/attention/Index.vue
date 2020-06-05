<template>
  <div>
     <el-checkbox-group v-model="checkList">
        <el-checkbox v-for="item in tags" :label="item.id" :key="item.id">{{item.userName}}</el-checkbox>
    </el-checkbox-group>
    <el-button type="primary" @click="attention">关注</el-button>

  </div>
</template>

<script>
import { getAllUser, attentionOther, getAttentionOther, getMyFan } from '../../apis' 

export default {
  data() {
    return {
        tags: [],
        checkList: []
    }
  },
  mounted() {
    //   this.getAllUser()
      this.getAttentionOther()
      this.getMyFan()
  },
  methods: {
    async getAllUser() {
        const res = await getAllUser()
            this.tags =  res.map(el => {
             return {
                 ...el,
                 type: ''
             }
         })
         
    },
   async attention() {
       const params = {
           userId: this.checkList[0]
       }
       const res = await attentionOther(params)
       console.log(res)
    },
    // 我关注的
    async getAttentionOther() {
        const res = await getAttentionOther()
        console.log(res)
    },
    async getMyFan() {
        const res = await getMyFan()
        console.log(res)
    }
    
  },
  components: {

  }
}
</script>

<style scoped>

</style>
