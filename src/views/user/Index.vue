<template>
  <div>
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline fl"
      >
      <el-form-item label="用户名称">
        <el-input
          v-model="formInline.userName"
          placeholder="用户名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select
          v-model="formInline.city"
          placeholder="活动区域"
        >
          <el-option
            label="区域一"
            value="shanghai"
          ></el-option>
          <el-option
            label="区域二"
            value="beijing"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"  @click="onSubmit" >查询</el-button>
        <el-button type="primary"  @click="quickCreate" >批量新建</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData.list"
      style="width: 100%"
     >
      <el-table-column
        prop="userName"
        label="姓名"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="nickName"
        label="姓名"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="city"
        label="地址"
      >
      </el-table-column>
      <el-table-column
        prop="createdAt"
        label="创建时间"
      >
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="edit(scope.row)"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="delUser(scope.row.id)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="fr"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="page"
      :page-sizes="[5, 10, 20, 40]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.total"
      >
    </el-pagination>
    <el-dialog
      title="编辑"
      :visible.sync="dialogVisible"
      width="30%"
     >
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="ruleForm"
        label-position='left'

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
        <!-- <el-form-item>
          <el-button type="primary" class='w100' @click="submitForm('ruleForm')" >注册</el-button>
        </el-form-item> -->
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="close">确 定</el-button>
      </span>
</el-dialog>
  </div>

</template>

<script>
import { getUserList, quickCreate, delUser, editUser } from '../../apis'

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
      tableData: {},
      page: 1,
      size: 10,
      formInline: {
        userName: '',
        city: '',
      },
      dialogVisible: false,
      rules: {
        password: [{ validator: validatePass, trigger: 'blur' }],
        userName: [{ validator: checkUserName, trigger: 'blur' }],
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
      ruleForm: {
        password: '',
        userName: '',
        nickName: '',
        gender: 1,
      },
    }
  },
  mounted() {
    this.getUserList()
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.size = val
      this.getUserList()
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.page = val
      this.getUserList()
    },
    onSubmit() {
      console.log('submit!')
      this.getUserList()
    },
    async quickCreate() {
      await quickCreate()
    },
    async getUserList() {
      const params = {
        page: this.page,
        size: this.size,
        userName: this.formInline.userName,
      }
      const res = await getUserList(params)
      //  console.log(res)
      this.tableData = res
    },
    async delUser(id) {
      const res = await delUser({id})
      this.$message.success('删除成功')
      this.getUserList()
    },
    edit(obj) {
      this.dialogVisible = true
      // this.ruleForm = obj
      Object.assign(this.ruleForm, obj)
    },
    async close() {
      console.log(this.ruleForm)
      const res = await editUser(this.ruleForm)
    }
  },
  components: {},
}
</script>

<style scoped>
</style>
