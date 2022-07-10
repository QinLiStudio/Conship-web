<!--
 * @FilePath: \Conship-web\src\views\HomeView.vue
 * @Author: Solitude-DDD
 * @Date: 2022-07-03 16:10:32
 * @Description: 配置文件上传页面
-->
<template>
  <div class="homepage">
    <el-row type="flex" justify="center" align="top" class="mian-container">
      <!-- 左侧菜单栏 -->
      <MenuBar></MenuBar>
      <!-- 右侧内容块 -->
      <el-col type="flex" justify="center" class="main-content-box" :span="15">
        <MonacoEditor width="700" height="500" theme="vs" :language="type" v-model="content"></MonacoEditor>
        <el-divider></el-divider>
        <el-row type="flex" justify="space-between" align="middle" class="main-btn-container">
          <el-col :span="6" class="main-btns">
            <el-select v-model="type" placeholder="请选择">
              <el-option v-for="item in typeList" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="6" class="main-btns">
            <el-button plain @click="UploadConfig">提 交</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MonacoEditor from 'monaco-editor-vue'
import MenuBar from '@/components/MenuBar.vue'
import { myAxios } from '@/request/myAxios'
import router from '@/router'
export default {
  components: {
    MonacoEditor,
    MenuBar,
  },
  data() {
    return {
      typeList: [
        { value: 'json', label: 'json' },
        { value: 'ymal', label: 'ymal' },
        { value: 'xml', label: 'xml' },
        { value: 'ini', label: 'ini' },
      ],
      type: '',
      content: '',
    }
  },
  methods: {
    UploadConfig() {
      myAxios('post', this.content)
        .then((response) => {
          console.log(response)
          if (response.status_code == 201) {
            router.push({
              name: '/post',
              params: { id: response.data.url, secret: response.data.secret },
            })
          } else {
            alert(response.error_message)
          }
        })
        .catch(function (error) {
          console.log(error)
          alert('提交失败')
        })
    },
  },
}
</script>

<style>
body {
  min-width: 1150px;
  padding: 0;
  margin: 0;
  background-color: #a7abb7;
}
.mian-container {
  top: 50px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.main-content-box {
  height: 640px;
  border: 2px solid #fff;
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  flex-direction: column;
  padding: 1%;
  margin-left: 1%;
  background-color: #fffffe;
}
.main-btn-container {
  position: relative;
  margin: 10px;
  width: calc(100% - 20px);
}
.main-btns {
  display: flex;
  justify-content: flex-end;
  align-content: center;
}
</style>
