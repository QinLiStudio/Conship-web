/*
 * @Author: wangbyyds 1362872827@qq.com
 * @Date: 2022-07-05 14:17:22
 * @LastEditors: wangbyyds 1362872827@qq.com
 * @LastEditTime: 2022-07-08 22:06:02
 * @FilePath: \Conship-web\src\request\axios.js
 * @Description:
 *
 * Copyright (c) 2022 by wangbyyds 1362872827@qq.com, All Rights Reserved.
 */

import axios from 'axios'

//创建一个实例
const instance = axios.create({
  // baseURL: 'http://127.0.0.1:4523/m1/1151307-0-default',
  baseURL: 'http://127.0.0.1:4523/m1/1111612-0-default',
  timeout: 4000,
})

//拦截器——请求拦截
instance.interceptors.request.use(
  (config) => {
    //部分接口需要拿到token
    // let token = localStorage.getItem('token')
    // if (token) {
    //   config.headers = {
    //     'a-token': token,
    //   }
    // }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

//拦截器——响应拦截
instance.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    return Promise.reject(err)
  }
)

//整体导出
export default instance
