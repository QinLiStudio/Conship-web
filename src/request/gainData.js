/*
 * @FilePath: \Conship-web\src\request\gainData.js
 * @Author: Solitude-DDD
 * @Date: 2022-06-19 12:25:24
 * @Description: 获取功能接口
 */
import axios from 'axios'
let config = {
  method: 'get',
  url: '',
}
export async function gain() {
  const { data: res } = await axios(config)
  console.log(JSON.stringify(res.data))
}
