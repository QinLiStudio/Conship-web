/*
 * @FilePath: \Conship-web\src\request\delect.js
 * @Author: Solitude-DDD
 * @Date: 2022-06-19 12:00:30
 * @Description: 删除功能接口
 */
import axios from 'axios'
let data = {}
let config = {
  method: 'delete',
  url: '',
  headers: {
    'Content-Type': 'application/json',
  },
  data: data,
}
export async function delect() {
  const { data: res } = await axios(config)
  console.log(JSON.stringify(res.data))
}
