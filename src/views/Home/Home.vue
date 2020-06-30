<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <!--管理员-->
      <el-card shadow="hover" style="height:290px">
        <!--管理员-->
        <div class="user">
          8
          <!-- <img :src="userImg"/> -->
        </div>
        <!--登录时间-->
        <!-- <div>8</div> -->
      </el-card>
      <!--数据-->
      <el-card shadow="hover" style="height:522px; margin-top:20px;">24</el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card shadow="hover" v-for="item in 6" :key="item">
          <i class="icon" icon="el-icon-picture"></i>
          <div class="detail">
            <p class="nums">￥1234</p>
            <p class="txt">今日支付订单</p>
          </div>
        </el-card>
      </div>
      <!--echart-->
      <el-card shadow="hover">
        <div style="height:280px"></div>
      </el-card>
      <!--图-->
      <div class="graph">
        <el-card class="l-graph">
          <div style="height:260px"></div>
        </el-card>
        <el-card class="r-graph">
          <div style="height:260px"></div>
        </el-card>
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
.home {
  /* background: #000; */
}
.num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.num .el-card {
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
.graph {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.graph .el-card {
  width: 48%;
}
</style>