<!--
 * @Author: Louisvent 719681964@qq.com
 * @Date: 2022-06-21 17:24:21
 * @LastEditors: Louisvent 719681964@qq.com
 * @LastEditTime: 2022-06-21 19:48:28
 * @FilePath: \前端\Conship-web\src\views\Doc.vue
 * @Description: 配置文件托管平台文档
 * 
 * Copyright (c) 2022 by Louisvent 719681964@qq.com, All Rights Reserved. 
-->

<template>
  <div id="doc">
    <Button></Button>
    <div>
      <h2>此页面用来介绍该项目的使用方法</h2>
      <p>该项目主要包含三种功能,分别是上传、修改和删除</p>
      <p>
        上传功能:将需要存储的配置文件输入后点击上传按钮,如果成功上传页面下方的提交按钮将会投入使用,点击提交按钮页面将跳转到提交成功页面并返回专属链接和密钥。
      </p>
      <p style="color: red">密钥在修改和删除功能中尤为重要请使用者妥善保存。链接和密钥都可以对所上传配置文件进行查看</p>
      <p>修改功能: 通过密钥获取文章</p>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button.vue'
export default {
  name: 'Doc',
  components: {
    Button,
  },
}
</script>

<style lang="less" scoped>
#doc {
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
</style>
