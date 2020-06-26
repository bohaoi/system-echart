<template>
  <div class="content">
    <!--左侧-->
    <div class="l-content">
      <el-button class="l-button" type="primary" icon="el-icon-s-operation" @click="collapseMenu"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <!-- <el-breadcrumb-item v-if="current">132</el-breadcrumb-item> -->
        <el-breadcrumb-item :to="current.path" v-if="current">{{current.label}}</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- </el-breadcrumb> -->
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
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      current: state => state.tab.currentMenu
    })
  },
  data() {
    return {
      userImg: require("../assets/images/user.png")
    };
  },
  methods: {
    collapseMenu() {
      this.$store.commit("collapseMenu");
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
  padding: 8px 10px;
  margin-right: 20px;
  margin-left: 17px;
  /* background-color: rgb(136, 121, 121); */
  border: none;
  /* line-height: 1; */
}

.el-button--primary {
  border-color: transparent;
}

.el-breadcrumb {
  display: flex;
  align-items: center;
  font-size: 14px;
}

.el-dropdown {
  margin-right: 20px;
}

/* .user{
  width: 45px;
  height: 45px;
  border-radius: 15px;
} */

.el-breadcrumb__item:last-child .el-breadcrumb__inner {
  color: #606266;
}
</style>