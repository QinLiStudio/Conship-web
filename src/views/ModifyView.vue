<!--
 * @FilePath: \Conship-web\src\views\ModifyView.vue
 * @Author: Solitude-DDD
 * @Date: 2022-07-02 10:12:12
 * @Description: 修改上传的配置文件页面
-->
<template>
  <div class="modifypage">
    <el-row type="flex" justify="center" align="top" class="mian-container">
      <!-- 左侧菜单栏 -->
      <MenuBar></MenuBar>
      <!-- 右侧内容块 -->
      <el-col type="flex" justify="center" class="main-content-box" :span="15">
        <el-row type="flex" justify="flex-start" align="middle" class="content-search-container">
          <el-col :span="8" class="main-btns">
            <el-input placeholder="请输入密钥或链接" v-model="input" clearable></el-input>
          </el-col>
          <el-col :span="3" class="main-btns">
            <el-button plain @click="SearchConfig"> 加 载 </el-button>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <MonacoEditor width="700" height="411" theme="vs" :language="type" v-model="content"></MonacoEditor>
        <el-divider></el-divider>
        <el-row type="flex" justify="space-between" align="middle" class="main-btn-container">
          <el-col :span="6" class="main-btns">
            <el-select v-model="type" placeholder="请选择">
              <el-option v-for="item in typeList" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="6" class="main-btns">
            <el-button plain @click="ModifyConfig"> 提 交 </el-button>
            <el-button plain @click="DelectConfig"> 删 除 </el-button>
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
export default {
  components: {
    MonacoEditor,
    MenuBar,
  },
  data() {
    return {
      input: '',
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
  created() {},
  methods: {
    SearchConfig() {
      myAxios('get', this.input)
        .then((response) => {
          console.log(response)
          this.content = response.data
        })
        .catch((error) => {
          console.log(error)
          alert('提交失败')
        })
    },
    ModifyConfig() {
      if (this.input == '' || this.content == '') {
        alert('请先加载需要修改的配置文件')
      } else {
        myAxios('put', this.content)
          .then((response) => {
            console.log(response)
            if (response.status_code == 201) {
              alert('修改成功')
            } else {
              alert(response.error_message)
            }
          })
          .catch((error) => {
            console.log(error)
            alert('提交失败')
          })
      }
    },
    DelectConfig() {
      if (this.input == '' || this.content == '') {
        alert('请先加载需要删除的配置文件')
      } else {
        myAxios('del', this.input)
          .then((response) => {
            console.log(response)
            if (response.status_code == 204) {
              this.input = ''
              this.content = ''
              alert('删除成功')
            } else {
              alert(response.error_message)
            }
          })
          .catch((error) => {
            console.log(error)
            alert('删除失败')
          })
      }
    },
  },
}
</script>

<style></style>
