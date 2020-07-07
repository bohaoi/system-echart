<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <!--管理员-->
      <el-card shadow="hover" style="height:290px">
        <!--管理员-->
        <div class="user">
          <img :src="userImg" />
          <div class="userinfo">
            <p class="name">Nick</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <!--登录时间-->
        <div class="login-info">
          <p>
            上次登录时间:
            <span>2019年10月1号</span>
          </p>
          <p>
            上次登录地点:
            <span>上海</span>
          </p>
        </div>
      </el-card>
      <!--数据-->
      <el-card shadow="hover" style="height:535px; margin-top:20px;">
        <el-table :data="tableData">
          <el-table-column
            show-overflow-tooltip
            v-for="(val,key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card
          class="num-card"
          shadow="hover"
          v-for="item in countData"
          :key="item.name"
          :body-style="{display:'flex',padding:0}"
        >
          <i class="icons" :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
          <div class="detail">
            <p class="nums">￥{{item.value}}</p>
            <p class="txt">{{item.name}}</p>
          </div>
        </el-card>
      </div>
      <!--echart-->
      <el-card shadow="hover">
        <echart style="height:280px" :chartData="echartData.order"></echart>
      </el-card>
      <!--图-->
      <div class="graph">
        <el-card class="l-graph" shadow="hover">
          <echart style="height:260px" :chartData="echartData.user"></echart>
        </el-card>
        <el-card class="r-graph" shadow="hover">
          <echart style="height:260px" :chartData='echartData.video' :isAxisChart = false></echart>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import echart from "../../components/EChart";

export default {
  components: {
    echart
  },
  data() {
    return {
      userImg: require("../../assets/images/user.png"),
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "eleme",
          color: "#2ec7c9"
        },
        {
          name: "今日收藏订单",
          value: 1234,
          icon: "star-on",
          color: "#ffb980"
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#2ec7c9"
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9"
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "success",
          color: "#ffb980"
        },
        {
          name: "本月收藏订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9"
        }
      ],
      tableData: [],
      tableLabel: {
        name: "名称",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买"
      },
      echartData: {
        order: {
          xData: [],
          series: []
        },
        user: {
          xData: [],
          series: []
        },
        video: {
          series: []
        }
      }
    };
  },
  methods: {
    getTableData() {
      //调用/home/getData接口
      this.$http
        .get("/home/getData")
        .then(res => {
          res = res.data;
          this.tableData = res.data.tableData;
          console.log(res);

          //订单折线图
          const order = res.data.orderData;
          this.echartData.order.xData = order.date;

          //1.取出series中的name部分---键名
          let keyArray = Object.keys(order.data[0]);
          //2.循环添加数据
          keyArray.forEach(key => {
            this.echartData.order.series.push({
              name: key === "wechat" ? "小程序" : key,
              data: order.data.map(item => item[key]),
              type: "line"
            });
          });

          //用户柱状图
          this.echartData.user.xData = res.data.userData.map(item => item.date);
          this.echartData.user.series.push({
            name: "新增用户",
            data: res.data.userData.map(item => item.new),
            type: "bar"
          });
          this.echartData.user.series.push({
            name: "活跃用户",
            data: res.data.userData.push(item => item.active),
            type: "bar",
            barGap: 0
          });

          //视频饼图
          this.echartData.video.series.push({
            data: res.data.videoData,
            type: "pie"
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getTableData();
  }
};
</script>

<style scoped>
.home {
  /* background: #000; */
}
.user {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #cccccc;
}
.user img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 40px;
}
.userinfo .name {
  font-size: 32px;
}
.userinfo .access {
  margin-top: 15px;
  color: #999999;
}
.login-info p {
  line-height: 28px;
  font-size: 16px;
  color: #999999;
}

.login-info p span {
  color: #666666;
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

.icons {
  float: left;
  font-size: 30px;
  width: 80px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  color: #52474b;
}
.detail {
  margin-left: 20px;
  display: flex;
  /* margin-top: 19px; */
  flex-direction: column;
  justify-content: center;
}
.nums {
  margin-bottom: 5px;
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