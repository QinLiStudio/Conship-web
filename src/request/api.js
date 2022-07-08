/*
 * @Author: wangbyyds 1362872827@qq.com
 * @Date: 2022-07-07 13:41:52
 * @LastEditors: wangbyyds 1362872827@qq.com
 * @LastEditTime: 2022-07-08 22:06:44
 * @FilePath: \Conship-web\src\request\api.js
 * @Description:
 *
 * Copyright (c) 2022 by wangbyyds 1362872827@qq.com, All Rights Reserved.
 */
import request from './axios'

//上传content内容 post
export const PostHomeAPI = (params) => request.post('/meta?apifoxResponseId=56847483', params)

//输入secret通过get请求得到文本
// export const GetContentAPI = (params) => request.get('/secret', params)
