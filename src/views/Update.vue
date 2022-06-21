<!--
 * @Author: Louisvent 719681964@qq.com
 * @Date: 2022-06-21 17:24:51
 * @LastEditors: Louisvent 719681964@qq.com
 * @LastEditTime: 2022-06-21 18:19:54
 * @FilePath: \前端\Conship-web\src\views\Update.vue
 * @Description: 配置文件托管平台修改
 * 
 * Copyright (c) 2022 by Louisvent 719681964@qq.com, All Rights Reserved. 
-->

<template>
  <div id="app">
    <Button :content="this.options.value"></Button>
    <div class="secretbox">
      <p>密钥：</p>
      <input class="secretinput" v-model="secret" type="text" />
      <button id="getmessagebtn" @click="getmessage()">加载</button>
    </div>
    <MonacoEditor
      class="editor"
      width="800"
      height="500"
      theme="vs-dark"
      :language="language"
      :options="options"
      @change="onChange"
    ></MonacoEditor>
    <button id="deletebtn" @click="deletemessage()">删除</button>
  </div>
</template>

<script>
import Button from '../components/Button.vue'
import MonacoEditor from 'monaco-editor-vue'
import axios from 'axios'
export default {
  name: 'Update',
  data() {
    return {
      secret: '',
      options: {
        // Monaco Editor Options
        value: '',
      },
      language: '',
    }
  },
  components: {
    Button,
    MonacoEditor,
  },
  mounted() {
    document.querySelector('#getmessagebtn').addEventListener('click', function () {
      this.getmessage()
    })
    document.querySelector('#deletebtn').addEventListener('click', function () {
      this.deletemessage()
    })
  },
  methods: {
    async getmessage() {
      const { data: res } = await axios.get('http://127.0.0.1:4523/m1/1151307-0-default/secret', {
        params: {
          secret: this.secret,
        },
      })
      console.log(res)
      console.log(res.data.content)
    },
    async deletemessage() {
      const { data: res } = await axios.delete('http://127.0.0.1:4523/m1/1151307-0-default/delete', {
        secret: this.secret,
      })
      console.log(res)
    },
    onChange(value) {
      this.options.value = value
      console.log(value)
    },
  },
}
</script>

<style lang="less" scoped>
#app {
  position: absolute;
  margin-left: 130px;
  border: 2px solid black;
  border-radius: 10px;
}
.editor {
  margin-left: 50px;
  margin-top: 15px;
}
.secretbox {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 50px;
  margin-bottom: -20px;
}
.secretinput {
  height: 25px;
  width: 200px;
  border-radius: 7px;
}
#getmessagebtn {
  width: 70px;
  height: 30px;
  border-radius: 7px;
  margin-left: 10px;
  border: 1px solid black;
  background-color: white;
}
#deletebtn {
  margin-left: 750px;
  margin-top: 4px;
  width: 90px;
  height: 40px;
  border-radius: 7px;
  border: 1px solid grey;
  background-color: white;
}
/deep/#pushbtn {
  position: absolute;
  margin-left: 750px;
}
</style>
