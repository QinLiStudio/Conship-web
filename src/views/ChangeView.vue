<!--
 * @Author: wangbyyds 1362872827@qq.com
 * @Date: 2022-06-20 23:23:56
 * @LastEditors: wangbyyds 1362872827@qq.com
 * @LastEditTime: 2022-06-26 10:37:00
 * @FilePath: \Conship-web-main\src\views\ChangeView.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by wangbyyds 1362872827@qq.com, All Rights Reserved. 
-->
<template>
  <div class="home">
    <MyChose />
    <div class="main">
      <div class="topBar">
        <MyInput placeholder="密钥" type="text" v-model="uname" clearable></MyInput>
        <MyButton type="plain">加载</MyButton>
      </div>
      <MonacoEditor
        width="550"
        height="350"
        theme="vs-dark"
        language="javascript"
        :options="options"
        @change="onChange"
        style="margin-top: 20px"
      ></MonacoEditor>
      <div class="bottom">
        <Select :selectData="selectData" :selValue="selValue" color="white" @getValue="getValue" />
        <div class="BtnContainer"><MyButton type="plain">提交</MyButton> <MyButton type="plain">删除</MyButton></div>
      </div>
    </div>
  </div>
</template>

<script>
import MyChose from '@/components/MyChose.vue'
import MyInput from '@/components/MyInput.vue'
import MyButton from '@/components/MyButton.vue'
import MonacoEditor from 'monaco-editor-vue'
import Select from '@/components/SelectFormat.vue'

export default {
  name: 'HomeView',
  components: {
    MyChose,
    MyInput,
    MyButton,
    MonacoEditor,
    Select,
  },
  data() {
    return {
      options: {
        //Monaco Editor Options
      },
      uname: '',
      upwd: '',
      selectData: [
        {
          name: 'json',
          value: 11,
        },
        {
          name: 'yaml',
          value: 12,
        },
        {
          name: 'tomal',
          value: 13,
        },
        {
          name: 'sh',
          value: 14,
        },
      ],
      selValue: '',
    }
  },
  created() {
    // 初始化下拉框
    this.selValue = this.selectData[0].value
  },
  methods: {
    onChange(value) {
      console.log(value)
    },
  },
}
</script>

<style>
/*清除默认样式*/

* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

img {
  vertical-align: top;
  border: none;
}

.home {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
/* main框 */

.main {
  width: 600px;
  height: 500px;
  padding-top: 20px;
  margin-left: 20px;
  border: 2px black solid;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

/* 顶部topBar框 */
.topBar {
  width: 540px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.topBar > :last-child {
  margin-left: 20px;
}

/* bottom底边div */
.bottom {
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
