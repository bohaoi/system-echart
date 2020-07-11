import Mock from 'mockjs'
import homeApi from './home.js'
import userApi from './user'

//设置200-2000毫秒延迟
Mock.setup({
    timeout: '200-2000'
})

//首页相关
//拦截/home/getData
Mock.mock(/\/home\/getData/,'get',homeApi.getStatisticalData)

// 用户相关
Mock.mock(/\/user\/getUser/, 'get', userApi.getUserList)