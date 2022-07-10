<!--
 * @Author: Louisvent 719681964@qq.com
 * @Date: 2022-06-21 17:23:46
 * @LastEditors: Louisvent 719681964@qq.com
 * @LastEditTime: 2022-07-10 09:16:20
 * @FilePath: \前端\Conship-web\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Louisvent 719681964@qq.com, All Rights Reserved. 
-->
<template>
  <div id="app">
    <router-view v-if="isShow"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload,
    }
  },
  data() {
    return {
      isShow: true,
    }
  },
  methods: {
    reload() {
      this.isShow = false
      this.$nextTick(() => {
        this.isShow = true
      })
    },
  },
}
</script>

<style lang="scss">
#app {
  width: 900px;
  height: 600px;
}
</style>
