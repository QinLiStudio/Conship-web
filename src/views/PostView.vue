<!--
 * @FilePath: \Conship-web\src\views\PostView.vue
 * @Author: Solitude-DDD
 * @Date: 2022-07-01 18:02:22
 * @Description: 上传结果展示文档后的页面
-->
<template>
  <div class="postpage">
    <el-row type="flex" justify="center" align="top" class="mian-container">
      <!-- 左侧菜单栏 -->
      <MenuBar></MenuBar>
      <!-- 右侧内容块 -->
      <el-col type="flex" justify="center" class="main-content-box" :span="15">
        <el-row type="flex" justify="center" align="middle" class="icon-box">
          <el-col :span="12">
            <img src="../assets/提交成功.png" alt="提交成功" />
            <h1>提交成功</h1>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle" class="input-box">
          <span>链接：</span>
          <el-col :span="12">
            <el-input :disabled="true" v-model="link"></el-input>
          </el-col>
          <el-col :span="2">
            <el-button :plain="true" @click="Copy(link)">复制</el-button>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle" class="input-box">
          <span>密钥：</span>
          <el-col :span="12">
            <el-input :disabled="true" v-model="key"></el-input>
          </el-col>
          <el-col :span="2">
            <el-button :plain="true" @click="Copy(key)">复制</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar.vue'
export default {
  components: {
    MenuBar,
  },
  data() {
    return {
      link: this.$route.params.id,
      key: this.$route.params.secret,
    }
  },
  created() {
    if (this.link == undefined || this.key == undefined) {
      this.$router.push({
        path: '/home',
      })
    }
  },
  methods: {
    Copy(data) {
      let elInput = document.createElement('input')
      elInput.value = data
      document.body.appendChild(elInput)
      // 选择对象
      elInput.select()
      // 执行浏览器复制命令
      document.execCommand('Copy')
      this.$message({ type: 'success', message: '复制成功!' })
      elInput.remove()
    },
  },
}
</script>

<style>
img {
  width: 300px;
  padding: 0 calc(50% - 150px);
}
h1 {
  text-align: center;
}
.icon-box,
.input-box {
  margin: 20px;
}
</style>
