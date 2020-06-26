<template>
  <div class="home">home</div>
</template>

<script>
export default {
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

<style>
</style>