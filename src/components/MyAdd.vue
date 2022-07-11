<template>
  <div>
    <div><AllButton /></div>
    <div class="waibian">
      <div><img src="@/assets/img.jpg" class="imgs" /></div>
      <div>链接:<input type="text" class="lianjie" :value="url" /></div>
      <div>密码:<input type="text" class="mima" :value="secret" /></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyAdd',
  data() {
    return {
      url: JSON.parse(localStorage.getItem('URL')),
      secret: JSON.parse(localStorage.getItem('SECRET')),
    }
  },
}
</script>
<style>
.imgs {
  width: 600px;
  height: 400px;
}
</style>
