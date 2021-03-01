<template>
  <div class="pagination">
    <el-pagination
        background
        hide-on-single-page
        layout="prev, pager, next"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size="10"
        :total="total">
    </el-pagination>
  </div>
</template>

<script>

export default {
  props: {
    total: Number
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('page-change', val)
    },
    handleCurrentChange(val) {
      this.$emit('page-change', val)
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less">
.pagination{
  width: 100%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
}
</style>
