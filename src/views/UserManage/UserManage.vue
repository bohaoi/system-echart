<template>
  <div class="manage">
    <!--嵌套表格-->
    <el-dialog :title="operateType ==='add' ? '新增用户' : '编辑用户'" :visible.sync="isShow">
      <common-form :formLabel="operateFormLabel" :form="operateForm" ref="form"></common-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>

    <div class="manage-header">
      <!--表头-->
      <el-button type="primary" @click="addUser">+新增</el-button>
      <common-form inline :formLabel="formLabel" :form="searchFrom">
        <el-button type="primary" @click="getList(searchFrom.keyword)">搜索</el-button>
      </common-form>
    </div>
    <common-table
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      @changePage="getList()"
      @edit="editUser"
      @del="delUser"
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
      operateType: "add",
      operateFormLabel: [
        {
          model: "name",
          label: "姓名"
        },
        {
          model: "age",
          label: "年龄"
        },
        {
          model: "sex",
          label: "性别",
          type: "select",
          opts: [
            {
              label: "男",
              value: 1
            },
            {
              label: "女",
              value: 0
            }
          ]
        },
        {
          model: "birth",
          label: "出生日期",
          type: "date"
        },
        {
          model: "addr",
          label: "地址"
        }
      ],
      operateForm: {
        name: "",
        addr: "",
        age: "",
        birth: "",
        sex: ""
      },
      isShow: false,
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
    addUser() {
      (this.operateForm = {}), (this.operateType = "add"), (this.isShow = true);
    },
    delUser(row) {
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let id = row.id;
          this.$http
            .get("/api/user/del", {
              params: {
                id
              }
            })
            .then(res => {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.getList();
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    editUser(row) {
      this.operateType = "edit";
      this.isShow = true;
      this.operateForm = row;
    },
    confirm() {
      if (this.operateType === "edit") {
        this.$http.post("/api/user/edit", this.operateForm).then(res => {
          this.isShow = false;
          this.getList();
        });
      } else {
        this.$http.post("/api/user/add", this.operateForm).then(res => {
          this.isShow = false;
          this.getList();
        });
      }
    },
    getList(name = "") {
      this.config.loading = true;
      this.$http
        .get("/api/user/getUser", {
          params: {
            page: this.config.page,
            name
          }
        })
        .then(res => {
          console.log(res);
          this.tableData = res.data.list.map(item => {
            item.sexLabel = item.sex === 0 ? "女" : "男";
            return item;
          });
          this.config.total = res.data.count;
          this.config.loading = false;
        });
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