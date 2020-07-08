<template>
  <div class="manage">
    <div class="manage-header">
      <!--表头-->
      <el-button type="primary">+新增</el-button>
      <common-form inline :formLabel="formLabel" :form="searchFrom">
        <el-button type="primary">搜索</el-button>
      </common-form>
    </div>
    <common-table></common-table>
  </div>
</template>

<script>
import CommonForm from "../../components/CommonForm";
import CommonTable from "../../components/CommonTable";

export default {
  components: {
    CommonForm,
    CommonTable
  },
  data() {
    return {
      searchFrom: {
        keyword: ""
      },
      formLabel: [
        {
          model: "keyword",
          label: ""
        }
      ]
    };
  }
};
</script>

<style scoped>
.manage {
  height: 90%;
  padding-bottom: 20px;
  overflow: hidden;
}
.manage-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
</style>