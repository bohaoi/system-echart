<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <!--管理员-->
      <el-card shadow="hover">
        <!--管理员-->
        <div class="user">
          8
          <!-- <img :src="userImg"/> -->
        </div>
        <!--登录时间-->
        <div>8</div>
      </el-card>
      <!--数据-->
      <el-card>24</el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card v-for="item in 6" :key="item"> 
          <i class="icon" icon="el-icon-picture"></i>
          <div class="detail">
            <p class="nums">￥</p>
            <p class="txt">100</p>
          </div>
        </el-card>
      </div>
      <!--echart-->
      <el-card>echart</el-card>
      <!--图-->
      <div class="graph">
        <el-card class="l-graph">l</el-card>
        <el-card class="r-graph">r</el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      userImg: require("../../assets/images/user.png")
    };
  },
  mounted() {
    //调用/home/getData接口
    this.$http
      .get("/home/getData")
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.num{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.el-card{
  width: 32%;
  margin-bottom: 20px;
}
.icon {
      font-size: 30px;
      width: 80px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      color: #fff;
    }
</style>