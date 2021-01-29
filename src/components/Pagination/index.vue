<template>
  <div class="pagination">
    <el-pagination
        background
        layout="prev, pager, next"
        :total="100">
    </el-pagination>
  </div>
</template>

<script>

export default {
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
