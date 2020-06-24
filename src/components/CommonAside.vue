<template>
  <div class="c-aside">
    <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff">
      <el-menu-item
        :index="item.path"
        v-for="item in noChildren"
        :key="item.path"
        @click="clickMenu(item)"
      >
        <i :class="'el-icon-'+ item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>

      <el-submenu :index="item.label" v-for="(item,index) in hasChildren" :key="index">
        <template slot="title">
          <i :class="'el-icon-'+ item.icon"></i>
          <span>{{item.label}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            class="other"
            :index="subItem.path"
            v-for="(subItem,subIndex) in item.children"
            :key="subIndex"
            @click="clickMenu(subItem)"
          >
            <i :class="'el-icon-'+ subItem.icon"></i>
            {{subItem.label}}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  computed: {
    noChildren() {
      return this.asideMenu.filter(item => !item.children);
    },
    hasChildren() {
      return this.asideMenu.filter(item => item.children);
    }
  },
  data() {
    return {
      asideMenu: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home"
        },
        {
          path: "/video",
          name: "video",
          label: "视频管理",
          icon: "video-play"
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user"
        },
        {
          label: "其他",
          icon: "location-outline",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "服务",
              icon: "service"
            },
            {
              path: "/page2",
              name: "page2",
              label: "删除",
              icon: "delete"
            }
          ]
        }
      ]
    };
  },
  methods: {
    clickMenu(item) {
      this.$router.push({ name: item.name });
      this.$store.commit("selectMenu", item);
    }
  }
};
</script>

<style scoped>
.el-menu {
  border: none;
}
.c-aside {
  width: 100%;
  height: 100%;
}
.el-menu-vertical-demo {
  height: 969px;
  background-color: "#545c64";
  padding: 0px;
}
</style>