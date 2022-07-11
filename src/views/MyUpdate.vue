<template>
  <div>
    <div class="waibians">
      <div>
        <div class="jiazai">
          <input type="text" v-model="secret" />
        </div>
        <div class="get">
          <el-button type="primary" class="get" @click="get()">加载</el-button>
        </div>
        <div>
          <input type="text" class="neibians" prop="content" id="content" />
        </div>
        <div class="dele">
          <el-button type="primary" plain prop="tijiao" @click="update()">提交</el-button>
        </div>
        <div class="tijiaos">
          <el-button type="primary" plain prop="tijiao" @click="dele()" id="dele">删除</el-button>
        </div>
      </div>
      <MonacoEditor
        width="555"
        height="305"
        class="monaz"
        theme="vs-dark"
        language="javascript"
        v-model="content"
        :options="options"
        @change="onChange"
      ></MonacoEditor>
    </div>
  </div>
</template>

<script>
import MonacoEditor from 'monaco-editor-vue'
import axios from 'axios'
import bus from '@/store/bus'
export default {
  name: 'App',
  components: {
    MonacoEditor,
  },
  data() {
    return {}
  },
  mounted() {
    bus.$on('toMyUpdate', (data) => {
      this.options.value = data
    })
  },
  methods: {
    async get() {
      const { data: res } = await axios.get('https://mock.apifox.cn/m1/1111612-0-default/meta', {
        params: {
          secret: this.secret,
        },
      })
      console.log(res)
      console.log(res.data.content)
    },
    async dele() {
      const { data: res } = await axios.delete('https://mock.apifox.cn/m1/1111612-0-default/meta', {
        params: {
          secret: this.secret,
        },
      })
      console.log(res)
    },
    myAxios(axiosConfig) {
      const service = axios.create({
        baseURL: 'https://mock.apifox.cn/m1/1111612-0-default/meta?apifoxResponseId=56847483', // 设置统一的请求前缀
        timeout: 10000, // 设置统一的超时时长
      })
      return service(axiosConfig)
    },

    loginAPI() {
      return this.myAxios({
        url: 'https://mock.apifox.cn/m1/1111612-0-default/meta?apifoxResponseId=56847483',
        method: 'put',
        data: {
          serect: this.serect,
          content: this.content,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      })
    },

    async update() {
      const res = await this.loginAPI(this.ruleForm)
      if (res.code === 200) {
        alert('修改失败！')
      } else {
        alert('修改成功！')
      }
    },
  },
}
</script>
<style>
.jiazai {
  margin-left: -300px;
  margin-top: 50px;
}
.get {
  margin-top: -30px;
  margin-left: 150px;
}

.waibians {
  height: 550px;
  width: 600px;
  border: 0.1em solid rgb(0, 0, 0);
  margin-left: 480px;
  margin-top: -250px;
}
.neibians {
  margin: 0 auto;
  height: 300px;
  width: 550px;
  border: 0.1em solid rgb(0, 0, 0);
  margin-left: -2.5px;
  margin-top: 35px;
}
.monaz {
  margin-left: 20.5px;
  margin-top: -385px;
}
.tijiaos {
  margin-left: 350px;
  margin-top: -35px;
}
.dele {
  margin-left: -250px;
  margin-top: 35px;
}
</style>
