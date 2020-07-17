<template>
  <div class="login">
    <div class="form_container">
      <span class="title">全员销售概况</span>
      <el-form :model="form" class="loginForm" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名" autofocus></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" placeholder="请输入密码" ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="submit_btn" type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    login() {
      this.$http.post("api/permission/getMenu", this.form).then(res => {
        res = res.data;
        if (res.code === 20000) {
          this.$store.commit("clearMenu");
          this.$store.commit("setMenu", res.data.menu);
          this.$store.commit("setToken", res.data.token);
          this.$store.commit("addMenu", this.$router);
          this.$router.push({ name: "home" });
        } else {
          this.$message.warning(res.data.message);
        }
      });
    }
  }
};
</script>

<style scoped>
html,
body {
  margin: 0;
  height: 100%;
}

.login {
  position: relative;
  width: 100%;
  height: 100%;
  background: url(../../assets/bg.png) no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
}

.form_container {
  width: 370px;
  height: 210px;
  position: absolute;
  top: 15%;
  left: 35%;
  padding: 25px;
  border-radius: 5px;
  text-align: center;
}

.form_container .title {
  /* height: 20px; */
  font-family: "Microsoft YaHei";
  font-weight: bold;

  font-size: 26px;
  /* color: #fff; */
}

.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #ccc;
  padding-top: 50px;
}
.submit_btn {
  width: 100%;
}
</style>
