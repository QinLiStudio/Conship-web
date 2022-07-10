/*
 * @FilePath: \Conship-web\src\request\myAxios.js
 * @Author: Solitude-DDD
 * @Date: 2022-07-06 17:40:16
 * @Description:
 */

import axios from 'axios'

const baseURL = 'http://127.0.0.1:4523/m1/1111612-0-default/meta'

export async function myAxios(method, Data) {
  if (method == 'get') {
    const { data: res } = await axios({
      method: 'get',
      url: baseURL + '?secret=' + Data,
    })
    return res
  } else if (method == 'del') {
    const { data: res } = await axios({
      method: 'del',
      url: baseURL + '?apifoxResponseId=56874523?secret=' + Data,
    })
    return res
  } else {
    const { data: res } = await axios({
      method: method,
      url: baseURL + '?apifoxResponseId=56847483',
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
