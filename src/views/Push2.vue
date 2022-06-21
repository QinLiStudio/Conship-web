<!--
 * @Author: Louisvent 719681964@qq.com
 * @Date: 2022-06-21 17:24:42
 * @LastEditors: Louisvent 719681964@qq.com
 * @LastEditTime: 2022-06-21 18:19:40
 * @FilePath: \前端\Conship-web\src\views\Push2.vue
 * @Description: 配置文件托管平台提交
 * 
 * Copyright (c) 2022 by Louisvent 719681964@qq.com, All Rights Reserved. 
-->

<template>
  <div id="push2">
    <Button></Button>
    <img class="pushpicture" src="../assets/提交成功.png" alt="" />
    <h3 class="successword">提交成功</h3>
    <div class="box">
      <div class="linkbox">
        <p>链接:</p>
        <input class="linkinput" :value="url" type="text" />
      </div>
      <div class="secretbox">
        <p>密钥:</p>
        <input class="secretinput" :value="secret" type="text" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button.vue'
export default {
  name: 'Push2',
  data() {
    return {
      url: JSON.parse(localStorage.getItem('URL')),
      secret: JSON.parse(localStorage.getItem('SECRET')),
    }
  },
  components: {
    Button,
  },
}
</script>

<style lang="less" scoped>
#push2 {
  position: absolute;
  margin-left: 130px;
  border: 2px solid black;
  border-radius: 10px;
  width: 900px;
  height: 600px;
}
/deep/#pushbtn {
  display: none;
}
.pushpicture {
  width: 250px;
  height: 250px;
  margin-top: 50px;
  margin-left: 330px;
}
.successword {
  display: flex;
  justify-content: center;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 200px;
}
.linkbox {
  display: flex;
  flex-direction: row;
  width: 270px;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.secretbox {
  display: flex;
  flex-direction: row;
  width: 270px;
  height: 40px;
  justify-content: center;
  align-items: center;
}
.linkinput {
  width: 200px;
  height: 30px;
  border-radius: 7px;
  margin-left: 10px;
}
.secretinput {
  width: 200px;
  height: 30px;
  border-radius: 7px;
  margin-left: 10px;
}
</style>
