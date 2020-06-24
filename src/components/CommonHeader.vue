<template>
  <div class="content">
    <!--左侧-->
    <div class="l-content">
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!--右侧-->
    <div class="r-content">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <!-- <img :src="userImg" class="user" /> -->
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      userImg:require("../assets/images/user.png")
    }
  }
};
</script>

<style scoped>
.content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.l-content {
  display: flex;
}

.el-button {
  padding: 10px 15px;
  margin-right: 20px;
  margin-left: 20px;
}

.el-breadcrumb {
  display: flex;
  align-items: center;
  font-size: 14px;
}

.el-dropdown{
  margin-right: 20px;
}

/* .user{
  width: 45px;
  height: 45px;
  border-radius: 15px;
} */
</style>