<template>
  <div class="index">
    <el-container>
      <el-aside width="200px">
        <common-aside></common-aside>
      </el-aside>
      <el-container>
        <el-header>
          <common-header></common-header>
        </el-header>
        <common-tab></common-tab>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from "../components/CommonAside";
import CommonHeader from "../components/CommonHeader";
import CommonTab from "../components/CommonTab";

export default {
  components: {
    CommonAside,
    CommonHeader,
    CommonTab
  }
};
</script>

<style scoped>
.index {
  height: 100vh;
}
.el-header {
  background-color: rgb(206, 201, 219);
  padding: 0;
}
</style>