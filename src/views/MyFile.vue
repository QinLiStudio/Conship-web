<template>
  <div id="app">
    <div class="waibian">
      <input type="text" class="neibian" />

      <el-col :span="12">
        <div class="sub-title"></div>
        <el-autocomplete
          class="inline-input"
          v-model="state1"
          :fetch-suggestions="querySearch"
          placeholder="json"
          @select="handleSelect"
        ></el-autocomplete>
      </el-col>

      <div class="tijiao">
        <el-button
          type="primary"
          plain
          prop="tijiao"
          @click="
            submitForm()
            jump()
            go()
          "
          >提交</el-button
        >
      </div>
    </div>
    <MonacoEditor
      width="555"
      height="410"
      class="mona"
      theme="vs-dark"
      language="javascript"
      v-model="content"
      :options="options"
      @change="onChange"
    ></MonacoEditor>
  </div>
</template>

<script>
import axios from 'axios'
import MonacoEditor from 'monaco-editor-vue'
import bus from '@/store/bus'

export default {
  name: 'App',
  components: {
    MonacoEditor,
  },
  data() {
    return {
      restaurants: [],
      state1: '',
      content: '',
    }
  },
  methods: {
    async submitForm() {
      const { data: res } = await axios.post(
        'https://mock.apifox.cn/m1/1111612-0-default/meta?apifoxResponseId=56847483',
        {
          content: this.content,
        }
      )
      console.log(res)
      console.log(res.data.url)
      console.log(res.data.secret)
      this.url = res.data.url
      this.secret = res.data.secret
      localStorage.setItem('URL', JSON.stringify(this.url))
      localStorage.setItem('SECRET', JSON.stringify(this.secret))
      if (res.code === 200) {
        alert('提交失败！')
      } else {
        alert('提交成功！')
      }
    },
    jump() {
      this.$router.push({ path: '/MyAdd/' })
    },
    go() {
      bus.$emit('toMyUpdate', this.options.value)
    },

    querySearch(queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter(queryString) {
      return (restaurant) => {
        return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
      }
    },
    loadAll() {
      return [{ value: 'yaml' }, { value: 'toml' }, { value: 'sh' }, { value: 'json' }]
    },
    handleSelect(item) {
      console.log(item)
    },
  },
  mounted() {
    this.restaurants = this.loadAll()
  },
}
</script>

<style>
.waibian {
  height: 550px;
  width: 600px;
  border: 0.1em solid rgb(0, 0, 0);
  margin-left: 480px;
  margin-top: -200px;
}
.neibian {
  margin: 0 auto;
  height: 400px;
  width: 550px;
  border: 0.1em solid rgb(0, 0, 0);
  margin-top: 20px;
  margin-left: -2.5px;
}
.inline-input {
  margin-top: 55px;
  margin-left: 55px;
}
.tijiao {
  margin-left: 450px;
  margin-top: 50px;
}
.mona {
  margin-left: 503px;
  margin-top: -540px;
}
</style>
