<template>
  <div>
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-change="handleChange"
      :file-list="fileList"
    >
      <div class="updata">
        <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
      </div>
    </el-upload>

    <div class="search">
      <el-button type="primary" icon="el-icon-search" name="first" @click="querySort">修改</el-button>
    </div>
    <div class="file">
      <el-button type="primary" icon="el-icon-message" name="second" @click="file">文件</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
    }
  },
  methods: {
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3)
    },
    querySort() {
      this.$router.push({ path: '/MyUpdate/' })
    },
    file() {
      this.$router.push({ path: '/ShowData/' })
    },
  },
}
</script>

<style>
.button {
  width: 80px;
  height: 500px;
  border-color: black;
}
.updata {
  margin-left: -700px;
  margin-top: 150px;
}
.search {
  position: relative;
  margin-left: -700px;
  margin-top: 40px;
}
.file {
  margin-top: 35px;
  margin-left: -700px;
}
</style>
