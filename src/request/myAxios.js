/*
 * @FilePath: \Conship-web\src\request\myAxios.js
 * @Author: Solitude-DDD
 * @Date: 2022-07-06 17:40:16
 * @Description: 简单封装调用axios
 */
import axios from 'axios'
const baseURL = 'https://qlapi.sylu.edu.cn/conship'

export async function myAxios(method, Data) {
  if (method == 'get') {
    const { data: res } = await axios({
      method: method,
      url: baseURL + '/meta/' + Data,
    })
    return res
  } else if (method == 'del') {
    const { data: res } = await axios({
      method: 'delete',
      url: baseURL + '/meta',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: {
        secret: Data,
      },
    })
    return res
  } else {
    const { data: res } = await axios({
      method: method,
      url: baseURL + '/meta',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: {
        content: Data,
      },
    })
    return res
  }
}
