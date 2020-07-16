import Mock from 'mockjs'
import homeApi from './home.js'
import userApi from './user'
import permissionApi from './permission'

//设置200-2000毫秒延迟
Mock.setup({
    timeout: '200-2000'
})

//首页相关
//拦截/home/getData
Mock.mock(/\/home\/getData/,'get',homeApi.getStatisticalData)

// 用户相关
Mock.mock(/\/user\/getUser/, 'get', userApi.getUserList)
Mock.mock(/\/user\/edit/, 'post', userApi.updateUser)
Mock.mock(/\/user\/del/, 'get', userApi.deleteUser)
Mock.mock(/\/user\/add/, 'post', userApi.createUser)


// 权限相关
Mock.mock(/\/permission\/getMenu/, 'post', permissionApi.getMenu)