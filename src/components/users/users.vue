<template>
  <el-card class="box-card">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 搜索 -->
    <el-row class="inputSearchRow" style="width: 100%">
      <el-input placeholder="请输入内容" v-model="nickName" class="inputSearch">
        <el-button slot="append" @click.prevent="searchByParam()" icon="el-icon-search">搜索</el-button>
      </el-input>
      <el-button class="addButton" type="primary">添加</el-button>
    </el-row>

    <!-- 表格 -->
    <el-table class="tableMargin" :data="userList" border style="width: 100%">
      <el-table-column type="index" prop="avatarUrl" label="序号" width="60"></el-table-column>

      <el-table-column prop="avatarUrl" label="微信头像" width="120">
        <template slot-scope="scope">
          <el-image style="border-radius:40px" :src="scope.row.avatarUrl" :fit="fit"></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="nickName" label="微信昵称" width="120"></el-table-column>
      <el-table-column prop="phone" label="手机号" width="120"></el-table-column>
      <el-table-column prop="ctime" label="创建时间" width="200">
        <!-- 不同的组件不是共用独立的作用域 -->
        <!-- slot,row 传值 ; solt-scope 会自动去找数据源userList ,所以slot-scope里写什么都无所谓 -->
        <template slot-scope="scope">{{scope.row.ctime | fmtdate}}</template>
      </el-table-column>
      <el-table-column prop="state" label="用户状态" width="80">
        <template slot-scope="scpoe">
          <el-switch v-model="scpoe.row.state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="operation" label="操作">
        <template>
          <el-button type="text">交易记录</el-button>
          <el-button type="text">浏览记录</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalCount"
    ></el-pagination>
  </el-card>
</template>

<script>
import apiUserSearch from "@/api/users";
import request from "@/utils/request.js";
export default {
  data() {
    return {
      nickName: "",
      page: 1,
      limit: 5,
      userList: [],
      totalCount: 1
    };
  },
  created() {
    this.getUserList();
  },

  methods: {
    //输入参数查询
    searchByParam() {
      this.getUserList();
    },

    //分页的相关方法
    handleSizeChange(val) {
      console.log("每页${val}条");
      this.limit = val;
      this.getUserList();
    },
    handleCurrentChange(val) {
      console.log("当前页${val}");
      this.page = val;
      this.getUserList();
    },

    async getUserList() {
      const res = await apiUserSearch.userSearch(
        this.nickName,
        this.page,
        this.limit
      );

      // 给表个数据赋值
      const { success, code, message, data } = res.data;
      if (code === 200) {
        // 给字段赋值
        this.userList = data.result;
        // 给数据的总数赋值
        this.totalCount = data.page.totalCount;
        console.log("this.totalCount" + this.totalCount);
      } else {
        this.$message.console.error(message);
      }
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