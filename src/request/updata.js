/*
 * @FilePath: \Conship-web\src\request\updata.js
 * @Author: Solitude-DDD
 * @Date: 2022-06-19 12:12:30
 * @Description: 更新功能接口
 */
import axios from 'axios'
let data = {
  secret: '',
  content: '',
}
let config = {
  // 设置axios参数
  method: 'put',
  url: '',
  headers: {
    'Content-Type': 'application/json',
  },
  data: JSON.stringify(data),
}

export async function updata() {
  const { data: res } = await axios(config)
  console.log(JSON.stringify(res.data))
}
