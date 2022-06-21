<!--
 * @FilePath: \Conship-web\src\views\HomeView.vue
 * @Author: Solitude-DDD
 * @Date: 2022-06-20 15:12:41
 * @Description: 配置文件上传页面
-->
<template>
  <div class="homepage">
    <el-row type="flex" justify="center" align="top" class="mian-container">
      <MenuBar></MenuBar>
      <el-col type="flex" justify="center" class="main-content-box" :span="15">
        <MonacoEditor width="700" height="500" theme="vs" language="json"></MonacoEditor>
        <el-divider></el-divider>
        <el-row type="flex" justify="space-between" align="middle" class="main-btn-container">
          <el-col :span="6" class="main-btns">
            <el-select v-model="type" placeholder="请选择">
              <el-option v-for="item in typeList" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="6" class="main-btns">
            <el-button plain>提 交</el-button>
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
      typeList: [
        { value: '选项1', label: 'json' },
        { value: '选项2', label: 'ymal' },
        { value: '选项3', label: 'xml' },
        { value: '选项4', label: 'ini' },
      ],
      type: '',
    }
  },
  methods: {
    selectFormat() {
      console.log(this)
    },
  },
}
</script>

<style>
body {
  min-width: 1200px;
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
  border-radius: 5px;
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
