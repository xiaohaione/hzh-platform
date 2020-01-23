<template>
  <el-card class="box-card">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 搜索 -->
    <el-row class="inputSearchRow" style="width: 100%">
      <el-input placeholder="请输入内容" class="inputSearch">
        <el-button slot="append" icon="el-icon-search">搜索</el-button>
      </el-input>
      <el-button class="addButton" @click.prevent="pushAddVideo()" type="primary">添加</el-button>
    </el-row>
    <!-- 视频列表 -->
    <!-- <p>
      一、import
      <el-button class="play-btn">play1</el-button>
    </p>-->
    <el-table class="tableMargin" :data="videList" border style="width: 100%">
      <el-table-column prop="videos" label="视频" width="100%">
        <template>
          <!-- <el-image style="border-radius:40px" :src="scope.row.avatarUrl" :fit="fit"></el-image> -->
          <video controls @click.prevent="play1()" ref="videoDom1" class="video-box" autoplay>
            <source src type="video/mp4" />
          </video>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import request from "@/utils/request.js";
// 2.组件内引用
// import { videoPlayer } from "vue-video-player";
// import "video.js/dist/video-js.css";
// import video1 from "../../../../Test/aa-30-542.mp4";
// 连接路径并返回
// function resolve(dir) {
//   return path.join(Test, "..", dir);
// }
var importURL = "../../../../Test/aa-30-542.mp4";
export default {
  name: "HelloWorld",
  data() {
    return {
      videoUrl1: "",
      videoUrl2: "",
      videList: [
        {
          videos: "D:/Test/aa-30-542.mp4"
        }
      ],
      videoUrl: "D:/Test/aa-30-542.mp4"
    };
  },
  created() {
    this.play1();
  },
  methods: {
    play1() {
      // console.log("dir=>" + this.resolve.path());
      this.$refs.videoDom1.src = require("../../../../Test/aa-30-542.mp4");
    },
    // play2() {
    //   this.$refs.videoDom2.src = this.videoUrl;
    // },
    pushAddVideo() {
      const vm = this;
      vm.$router.push({ name: "addVideo" });
    }
  }
};
</script>

<style>
.box-card {
  height: 100%;
}
.inputSearch {
  margin-top: 20px;
  margin-left: 30px;
  width: 300px;
}
.video-player {
  margin-top: 30px;
  /* margin-left: 40px; */
}
.addButton {
  margin-left: 40px;
}

.div-video {
  height: 20px;
  width: 200px;
}
</style>