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
      <el-form-item>
        <el-button type="primary"  @click="onSubmit" >查询</el-button>
        <!-- <el-button type="primary"  @click="quickCreate" >批量新建</el-button> -->
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
      <template slot-scope="scope">
        {{scope.row.user.userName}}
      </template>
      </el-table-column>
      <el-table-column
        prop="nickName"
        label="昵称"
        width="180"
      >
      <template slot-scope="scope">
        {{scope.row.user.nickName}}
      </template>
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
      >
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容"
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
  </div>

</template>

<script>
import { getAllBlogs, quickCreate, delUser, editUser } from '../../apis'

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
        city: '',
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
      const res = await getAllBlogs(params)
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
      obj.gender = +obj.gender
      // this.ruleForm = obj
      Object.assign(this.ruleForm, obj)
    },
    async close() {
      console.log(this.ruleForm)
      const res = await editUser(this.ruleForm)
      this.page = 1
      this.getUserList()
      this.dialogVisible= false

    }
  },
  components: {},
}
</script>

<style scoped>
</style>
