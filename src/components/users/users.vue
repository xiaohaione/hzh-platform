<template>
  <el-card class="box-card">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 搜索 -->
    <el-row class="inputSearchRow">
      <el-input placeholder="请输入内容" v-model="query" class="inputSearch">
        <el-button slot="append" @click.prevent="getUserList()" icon="el-icon-search">搜索</el-button>
      </el-input>
      <el-button class="addButton" type="primary">添加</el-button>
    </el-row>

    <!-- 表格 -->
    <el-table class="tableMargin" :data="tableData" border style="width: 100%">
      <el-table-column type="index" label="序号" width="60"></el-table-column>
      <el-table-column prop="avatarUrl" label="微信头像" width="100"></el-table-column>
      <el-table-column prop="nickName" label="微信昵称" width="100"></el-table-column>
      <el-table-column prop="phone" label="手机号" width="180"></el-table-column>
      <el-table-column prop="ctime" label="创建时间"></el-table-column>
    </el-table>

    <!-- 分页 -->
  </el-card>
</template>

<script>
import apiUserSearch from "@/api/users";
export default {
  data() {
    return {
      nickName: "",
      page: 1,
      limit: 10,
      tableData: [
        {
          avatarUrl: "2016-05-02",
          nickName: "王小虎",
          phone: "上海市普陀区金沙江路 1518 弄",
          ctime: "1314235457657"
        },
        {
          avatarUrl: "2016-05-02",
          nickName: "王小虎",
          phone: "上海市普陀区金沙江路 1518 弄",
          ctime: "1314235457657"
        }
      ]
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    async getUserList() {
      const res = await apiUserSearch.userSearch(
        this.nickName,
        this.page,
        this.limit,
        localStorage.getItem("token"),
        localStorage.getItem("username"),
        localStorage.getItem("password")
      );
    }
  }
};
</script>

<style>
.box-card {
  height: 100%;
}
.inputSearch {
  width: 300px;
}
.inputSearchRow {
  margin-top: 30px;
  margin-left: 40px;
}
.addButton {
  margin-left: 40px;
}
.tableMargin {
  margin-top: 20px;
}
</style>