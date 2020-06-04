<template>
  <div class="content">
    <el-form
      label-width="80px"
      ref="formLabelAlign"
      :model="formLabelAlign"
      >
      <el-form-item label="标题">
        <el-input v-model="formLabelAlign.title"></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <el-input :autosize='autosize' type="textarea" v-model="formLabelAlign.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formLabelAlign')">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {createBlog} from '../../apis' 
export default {
  data() {
    return {
      autosize: { minRows: 6, maxRows: 10 },
      formLabelAlign: {
        title: '',
        content: '',
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          createBlog(this.formLabelAlign).then(res => {
            console.log(res)
            this.$message.success('创建成功')
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  },
  components: {},
}
</script>

<style scoped>
.content {
  width: 500px;
}
.ul {
  text-decoration: underline;
}
.content {
  text-align: left;
}
</style>
