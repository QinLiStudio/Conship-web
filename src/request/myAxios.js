/*
 * @FilePath: \Conship-web\src\request\myAxios.js
 * @Author: Solitude-DDD
 * @Date: 2022-07-06 17:40:16
 * @Description: 简单封装调用axios
 */

import axios from 'axios'
const baseURL = 'http://127.0.0.1:4523/m1/1111612-0-default/meta'
// const re = /^[a-zA-Z0-9]{8}$/

export async function myAxios(method, Data) {
  if (method == 'get') {
    // if (re.test(Data)) {
    const { data: res } = await axios({
      method: method,
      url: baseURL + '/{secret=' + Data + '}',
    })
    return res
    // } else {
    //   const { data: res } = await axios({
    //     method: method,
    //     url: baseURL + '/{path=' + Data + '}',
    //   })
    //   return res
    // }
  } else if (method == 'del') {
    const { data: res } = await axios({
      method: 'delete',
      url: baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        secret: Data,
      },
    })
    return res
  } else {
    const { data: res } = await axios({
      method: method,
      url: baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        content: Data,
      },
    })
    return res
  }
}
