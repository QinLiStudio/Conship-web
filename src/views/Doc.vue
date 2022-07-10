<!--
 * @Author: Louisvent 719681964@qq.com
 * @Date: 2022-06-21 17:24:21
 * @LastEditors: Louisvent 719681964@qq.com
 * @LastEditTime: 2022-07-10 09:11:44
 * @FilePath: \前端\Conship-web\src\views\Doc.vue
 * @Description: 配置文件托管平台文档
 * 
 * Copyright (c) 2022 by Louisvent 719681964@qq.com, All Rights Reserved. 
-->

<template>
  <div id="doc">
    <Button></Button>
    <div>
      <h1 class="title">此页面用来介绍该项目的使用方法</h1>
      <h2>该项目主要包含三种功能,分别是上传、修改和删除</h2>
      <p>
        1.上传功能:将需要存储的配置文件输入后点击上传按钮,如果成功上传页面下方的提交按钮将会投入使用,点击提交按钮页面将跳转到提交成功页面并返回专属链接和密钥。
      </p>
      <p style="color: red">
        (注意:密钥在修改和删除功能中尤为重要请使用者妥善保存。链接和密钥都可以对所上传配置文件进行查看)
      </p>
      <p>
        2.修改功能:使用修改功能首先需要使用者通过特定的密钥将所需修改内容进行获取,进行修改后点击修改按钮配置文件将会被修改,
        点击提交按钮页面将跳转到提交成功页面并返回全新的专属链接和密钥。
      </p>
      <p>3.删除功能:点击删除按钮该配置文件将会删除其专属链接和密钥也会一并删除</p>
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
.title {
  display: flex;
  justify-content: center;
}
p {
  font-size: 20px;
}
/deep/#pushbtn {
  display: none;
}
</style>
