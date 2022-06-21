<!--
 * @Author: Louisvent 719681964@qq.com
 * @Date: 2022-06-21 17:25:41
 * @LastEditors: Louisvent 719681964@qq.com
 * @LastEditTime: 2022-06-21 18:20:12
 * @FilePath: \前端\Conship-web\src\components\Language.vue
 * @Description: 配置文件托管平台修改语言
 * 
 * Copyright (c) 2022 by Louisvent 719681964@qq.com, All Rights Reserved. 
-->

<template>
  <div>
    <el-dropdown>
      <span class="el-dropdown-link"> 请选择语言<i class="el-icon-arrow-down el-icon--right"></i> </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><button @click="jsonlanguage()">json</button></el-dropdown-item>
        <el-dropdown-item><button @click="javascriptlanguage()">javaScript</button></el-dropdown-item>
        <el-dropdown-item><button @click="htmllanguage()">html</button></el-dropdown-item>
        <el-dropdown-item><button @click="xmllanguage()">xml</button></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Language',
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: 'json',
        },
        {
          value: '选项2',
          label: 'javascript',
        },
        {
          value: '选项3',
          label: 'html',
        },
        {
          value: '选项4',
          label: 'xml',
        },
      ],
      value: '',
    }
  },
  methods: {
    jsonlanguage() {
      this.$emit('languagejson', this.options[0].label)
    },
    javascriptlanguage() {
      this.$emit('languagejavascript', this.options[1].label)
    },
    htmllanguage() {
      this.$emit('languagehtml', this.options[2].label)
    },
    xmllanguage() {
      this.$emit('languagexml', this.options[3].label)
    },
  },
}
</script>
<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
button {
  border: none;
  background-color: white;
}
</style>
