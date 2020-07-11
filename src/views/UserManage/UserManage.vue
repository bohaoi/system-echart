<template>
  <div class="manage">
    <div class="manage-header">
      <!--表头-->
      <el-button type="primary">+新增</el-button>
      <common-form inline :formLabel="formLabel" :form="searchFrom">
        <el-button type="primary">搜索</el-button>
      </common-form>
    </div>
    <common-table
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      @changePage="getList()"
    ></common-table>
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
      tableData: [],
      tableLabel: [
        {
          prop: "name",
          label: "姓名"
        },
        {
          prop: "age",
          label: "年龄"
        },
        {
          prop: "sexLabel",
          label: "性别"
        },
        {
          prop: "birth",
          label: "出生日期"
        },
        {
          prop: "addr",
          label: "地址"
        }
      ],
      config: {
        page: 1,
        total: 10,
        loading: false
      },
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
  },
  methods: {
    getList() {
      this.config.loading = true;
      this.$http
        .get('/api/user/getUser', {
          params: {
            page: this.config.page,
            name
          }
        })
        .then(res => {
          console.log(res)
          this.tableData = res.data.list.map(item => {
            item.sexLabel = item.sex === 0 ? '女' : '男'
            return item
          })
          this.config.total = res.data.count
          this.config.loading = false
        })
    }
  },
  created() {
    this.getList();
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