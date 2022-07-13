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
            <el-input placeholder="请输入密钥" v-model="input" clearable></el-input>
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
            <el-button :plain="true" @click="ModifyConfig"> 提 交 </el-button>
            <el-button :plain="true" @click="DelectConfig"> 删 除 </el-button>
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
      statu: '',
    }
  },
  methods: {
    SearchConfig() {
      myAxios('get', this.input)
        .then((response) => {
          console.log(response)
          // if (response.code == 200) {
          this.content = response
          this.statu = this.content
          this.$message('加载成功')
          // } else {
          // this.$message(response.msg)
          // }
        })
        .catch((error) => {
          console.log(error)
          this.$message('加载失败')
        })
    },
    ModifyConfig() {
      if (this.input == '' || this.statu == '') {
        this.$message('请先加载需要修改的配置文件')
      } else if (this.statu == this.content) {
        this.$message('请修改后再提交')
      } else {
        this.$confirm('此操作将修改该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            myAxios('put', this.content)
              .then((response) => {
                console.log(response)
                if (response.code == 200) {
                  this.statu = this.content
                  this.$message({ type: 'success', message: '修改成功!' })
                } else {
                  this.$message(response.msg)
                }
              })
              .catch((error) => {
                console.log(error)
                this.$message('提交失败')
              })
          })
          .catch(() => {
            this.$message('已取消修改')
          })
      }
    },
    DelectConfig() {
      if (this.input == '' || this.statu == '') {
        this.$message('请先加载需要删除的配置文件')
      } else {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            myAxios('del', this.input)
              .then((response) => {
                console.log(response)
                if (response.code == 200) {
                  this.input = ''
                  this.content = ''
                  this.statu = ''
                  this.$message({ type: 'success', message: '删除成功!' })
                } else {
                  this.$message(response.msg)
                }
              })
              .catch((error) => {
                console.log(error)
                this.$message('删除失败')
              })
          })
          .catch(() => {
            this.$message('已取消删除')
          })
      }
    },
  },
}
</script>

<style></style>
