<template>
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      ref="ruleForm"
      label-width="100px"
      class="ruleForm"
    >
      <el-form-item
        label="用户名"
        prop="userName"
      >
        <el-input
          type="text"
          v-model="ruleForm.userName"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
      >
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class='w100'
          @click="submitForm('ruleForm')"
        >登陆</el-button>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class='w100'
          @click="register"
        >去注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {login} from '../apis'
export default {
  data() {

    return {
      ruleForm: {
        userName: '',
        password: '',
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login(this.ruleForm).then(res => {
            localStorage.setItem('token', res)
            this.$router.push('/')
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    register() {
      this.$router.push(
        {
          name: 'register'
        }
      )
    }
  },
  components: {},
}
</script>

<style lang="less" scoped>
.ruleForm {
  width: 500px;
  padding: 20px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
