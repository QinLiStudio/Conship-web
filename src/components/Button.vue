<!--
 * @Author: Louisvent 719681964@qq.com
 * @Date: 2022-06-21 17:25:33
 * @LastEditors: Louisvent 719681964@qq.com
 * @LastEditTime: 2022-06-21 18:18:20
 * @FilePath: \前端\Conship-web\src\components\Button.vue
 * @Description: 配置文件托管平台按钮
 * 
 * Copyright (c) 2022 by Louisvent 719681964@qq.com, All Rights Reserved. 
-->

<template>
  <div class="button">
    <el-button id="postbtn" @click="postbtn(), pushlanguage()">上传</el-button>
    <el-button id="updatebtn" @click="updatebtn(), updatemessage()">修改</el-button>
    <el-button @click="documentbtn">文档</el-button>
    <button id="pushbtn" @click="pushbtn()">提交</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Button',
  data() {
    return {
      url: '',
    }
  },
  mounted() {
    document.querySelector('#postbtn').addEventListener('click', function () {
      this.pushlanguage()
    })
    document.querySelector('#updatebtn').addEventListener('click', function () {
      this.updatemessage()
    })
  },
  props: ['content'],
  methods: {
    postbtn() {
      this.$router.push('/push1')
    },
    updatebtn() {
      this.$router.push('/update')
    },
    documentbtn() {
      this.$router.push('/doc')
    },
    pushbtn() {
      this.$router.push('/push2')
    },
    async pushlanguage() {
      const { data: res } = await axios.post('http://127.0.0.1:4523/m1/1151307-0-default/push', {
        content: this.content,
      })
      console.log(res)
      console.log(res.data.url)
      console.log(res.data.secret)
      this.url = res.data.url
      this.secret = res.data.secret
      localStorage.setItem('URL', JSON.stringify(this.url))
      localStorage.setItem('SECRET', JSON.stringify(this.secret))
      // if (res.code === 200) {
      //   document.querySelector('#pushbtn').disabled = false
      // } else {
      //   document.querySelector('#pushbtn').disabled = true
      // }
    },
    async updatemessage() {
      const { data: res } = await axios.put('http://127.0.0.1:4523/m1/1151307-0-default/update', {
        content: this.content,
      })
      console.log(res)
      console.log(res.data.url)
      console.log(res.data.secret)
      this.url = res.data.url
      this.secret = res.data.secret
      localStorage.setItem('URL', JSON.stringify(this.url))
      localStorage.setItem('SECRET', JSON.stringify(this.secret))
    },
  },
}
</script>

<style scoped>
.button {
  position: absolute;
  margin-left: -120px;
  margin-top: 40px;
  z-index: 99;
  border: 2px solid black;
  border-radius: 10px;
  width: 85px;
}
.el-button {
  margin-left: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  height: 30px;
}
#pushbtn {
  position: absolute;
  width: 90px;
  height: 40px;
  border-radius: 7px;
  border: 1px solid grey;
  background-color: white;
  margin-left: 850px;
  margin-top: 380px;
}
</style>
