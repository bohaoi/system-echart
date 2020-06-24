<template>
  <div class="tabs">
    <el-tag
      :key="tag.name"
      v-for="tag in tags"
      :closable = "tag.name!=='home'"
      :disable-transitions="false"
      @close="handleClose(tag)"
    >{{tag.label}}</el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState({
      tags: state => state.tab.tabsList
    })
  },
  methods: {
    ...mapMutations({
        close:"closeTab"
    }),
    handleClose(tag) {
      this.close(tag);
    }
  }
};
</script>

<style>
.tabs {
  padding: 15px;
  box-shadow: 0px 0px 1px rgb(122, 103, 103);
}

.el-tag {
  margin-right: 15px;
  cursor: pointer;
}
</style>