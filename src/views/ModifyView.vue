<!--
 * @FilePath: \Conship-web\src\views\ModifyView.vue
 * @Author: Solitude-DDD
 * @Date: 2022-06-20 18:12:41
 * @Description: 修改上传的配置文件页面
-->
<template>
  <div class="modifypage">
    <el-row type="flex" justify="center" align="top" class="mian-container">
      <MenuBar></MenuBar>
      <el-col type="flex" justify="center" class="main-content-box" :span="15">
        <el-row type="flex" justify="flex-start" align="middle" class="content-search-container">
          <el-col :span="8" class="main-btns">
            <el-input placeholder="请输入密钥或链接" v-model="input" clearable> </el-input>
          </el-col>
          <el-col :span="3" class="main-btns">
            <el-button plain> 加 载 </el-button>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <MonacoEditor width="700" height="411" theme="vs" language="json"></MonacoEditor>
        <el-divider></el-divider>
        <el-row type="flex" justify="space-between" align="middle" class="main-btn-container">
          <el-col :span="6" class="main-btns">
            <el-select v-model="type" placeholder="请选择">
              <el-option v-for="item in typeList" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="6" class="main-btns">
            <el-button plain> 提 交 </el-button>
            <el-button plain> 删 除 </el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MonacoEditor from 'monaco-editor-vue'
import MenuBar from '@/components/MenuBar.vue'
export default {
  components: {
    MonacoEditor,
    MenuBar,
  },
  data() {
    return {
      input: '',
    }
  },
}
</script>

<style></style>
