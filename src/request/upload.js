/*
 * @FilePath: \Conship-web\src\request\upload.js
 * @Author: Solitude-DDD
 * @Date: 2022-06-19 12:36:18
 * @Description: 上传功能接口
 */
import axios from 'axios'
let data = {}
let config = {
  method: 'post',
  url: '',
  headers: {
    'Content-Type': 'application/json',
  },
  data: data,
}
export async function upload() {
  const { data: res } = await axios(config)
  console.log(JSON.stringify(res.data))
}
