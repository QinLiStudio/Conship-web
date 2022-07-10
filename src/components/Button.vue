<!--
 * @Author: Louisvent 719681964@qq.com
 * @Date: 2022-06-21 17:25:33
 * @LastEditors: Louisvent 719681964@qq.com
 * @LastEditTime: 2022-07-10 09:22:57
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
    <button id="pushbtn" @click="pushbtn(url, secret)">提交</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Button',
  data() {
    return {
      url: '',
      secret: '',
    }
  },
  props: ['content'],
  methods: {
    postbtn() {
      this.$router.push('/push1')
    },
    updatebtn() {
      this.$router.push('/update')
      localStorage.removeItem('GET')
    },
    documentbtn() {
      this.$router.push('/doc')
    },
    pushbtn(url, secret) {
      this.$router.push('/push2?url=' + url + '&secret=' + secret)
    },
    async pushlanguage() {
      const { data: res } = await axios.post(
        'http://127.0.0.1:4523/m1/1111612-0-default/meta?apifoxResponseId=56847483',
        { content: this.content }
      )
      console.log(res)
      console.log(res.data.url)
      console.log(res.data.secret)
      const _this = this
      _this.url = res.data.url
      _this.secret = res.data.secret
      // if (res.code === 200) {
      //   document.querySelector('#pushbtn').disabled = false
      // } else {
      //   document.querySelector('#pushbtn').disabled = true
      // }
    },
    async updatemessage() {
      const { data: res } = await axios.put(
        'http://127.0.0.1:4523/m1/1111612-0-default/meta?apifoxResponseId=56847483',
        { content: this.content }
      )
      console.log(res)
      console.log(res.data.url)
      console.log(res.data.secret)
      const _this = this
      _this.url = res.data.url
      _this.secret = res.data.secret
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
  width: 90px;
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
