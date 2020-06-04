<template>
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="ruleForm"
      >
      <el-form-item
        label="用户名"
        prop="userName"
        >
        <el-input type="text" v-model="ruleForm.userName" autocomplete="off" ></el-input>
      </el-form-item>
      <el-form-item
        label="昵称"
        prop="nickName"
        >
        <el-input type="text" v-model="ruleForm.nickName" autocomplete="off" ></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
      >
        <el-input type="password" v-model="ruleForm.password" autocomplete="off" ></el-input>
      </el-form-item>
      <el-form-item
        label="性别"
        prop="gender"
        >
        <el-select class='w100' v-model="ruleForm.gender" placeholder="请选择">
          <el-option
            v-for="item in genderList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class='w100' @click="submitForm('ruleForm')" >注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { isExist, register } from '../apis/index.js'
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    var checkUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        password: '',
        userName: '',
        nickName: '',
        gender: 1,
      },
      genderList: [
        {
          value: 1,
          label: '男'
        },
        {
          value: 0,
          label: '女'
        },
        {
          value: 2,
          label: '保密'
        }
      ],
      rules: {
        password: [{ validator: validatePass, trigger: 'blur' }],
        userName: [{ validator: checkUserName, trigger: 'blur' }],
      },
    }
  },
  methods: {
   async submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          register(this.ruleForm).then(res => {
            console.log(res)
            this.$message.success('注册成功')
            this.$router.push('/login')
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
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
