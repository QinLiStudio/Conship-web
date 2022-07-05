<!--
 * @Author: wangbyyds 1362872827@qq.com
 * @Date: 2022-06-20 22:12:44
 * @LastEditors: wangbyyds 1362872827@qq.com
 * @LastEditTime: 2022-06-26 10:36:45
 * @FilePath: \Conship-web-main\src\components\MyButton.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by wangbyyds 1362872827@qq.com, All Rights Reserved. 
-->
<template>
  <button class="button ellipsis" :class="[size, type]">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    size: {
      type: String,
      default: 'middle',
    },
    type: {
      type: String,
      default: 'default',
    },
  },
}
</script>
<style scoped lang="less">
.button {
  appearance: none;
  border: none;
  outline: none;
  background: #fff;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
}
.large {
  width: 240px;
  height: 50px;
  font-size: 16px;
}
.middle {
  width: 120px;
  height: 40px;
  font-size: 17px;
  border-radius: 10px;
}
.small {
  width: 100px;
  height: 32px;
  font-size: 14px;
}
.mini {
  width: 60px;
  height: 32px;
  font-size: 14px;
}
.default {
  border-color: #e4e4e4;
  color: #666;
}
.primary {
  border-color: #27ba9b;
  background: #27ba9b;
  color: #fff;
}
.plain {
  border-color: #27ba9b;
  color: #27ba9b;
  background: lighten(#27ba9b, 50%);
}
.gray {
  border-color: #ccc;
  background: #ccc;
  color: #fff;
}
</style>
