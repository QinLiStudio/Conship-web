<!--
 * @FilePath: \Conship-web\src\components\MenuBar.vue
 * @Author: Solitude-DDD
 * @Date: 2022-06-21 02:09:48
 * @Description: 左侧统一菜单栏
-->
<template>
  <el-col type="flex" justify="center" align="top" :span="3" class="menu-container">
    <el-menu background-color="#fffffe" text-color="#5f6368" active-text-color="#b972e3" :default-active="$route.path">
      <el-menu-item v-for="item in menuList" :key="item.menuName" @click="next(item.path)" :index="item.path">
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.menuName }}</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>

<script>
export default {
  data() {
    return {
      // 左侧菜单栏数据
      menuList: [
        { id: 0, menuName: '上传', path: '/home' },
        { id: 1, menuName: '修改', path: '/modify' },
        { id: 2, menuName: '文档', path: '/file' },
      ],
    }
  },
  methods: {
    next(router) {
      this.$router.push(router)
    },
  },
}
</script>

<style>
.menu-container {
  border: 2px solid #fff;
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 1%;
  max-width: 130px;
  background-color: #fffffe;
}
</style>
