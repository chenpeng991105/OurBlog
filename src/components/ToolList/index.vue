<template>
  <div class="tool-list">
    <div class="tool-item" v-for="item in toolList" :key="item.id">
      <a :href="item.url" target="_blank">{{ item.name }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toolList: [
        {id: 1, name: '网易云刷等级', url: 'https://tools.miku.ac/163_daka/'},
        {id: 2, name: '网易云刷等级', url: 'https://tools.miku.ac/163_daka/'},
        {id: 3, name: '网易云刷等级', url: 'https://tools.miku.ac/163_daka/'},
        {id: 4, name: '网易云刷等级', url: 'https://tools.miku.ac/163_daka/'},
        {id: 5, name: '网易云刷等级', url: 'https://tools.miku.ac/163_daka/'},
        {id: 6, name: '网易云刷等级', url: 'https://tools.miku.ac/163_daka/'},
        {id: 7, name: '网易云刷等级', url: 'https://tools.miku.ac/163_daka/'},
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.tool-list {
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
}

.tool-item {
  display: inline-block;
  width: calc(25% - 82px);
  height: 35px;
  line-height: 35px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 10px;
  padding: 2px 8px;
  border: 1px solid #fff;
  box-shadow: 0 3px 6px rgba(0,0,0,.15);
  border-radius: 4px;
  color: #213135;
  font-weight: 700;
  transition: all .3s;
  &:hover{
    border-color: #249ffd;
    background-color: #249ffd;
    color: #fff;
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
  }
}
@media screen and (min-width: 769px) and (max-width: 1176px) {
  .tool-list {
    padding: 15px 10px;
  }

  .tool-item {
    width: calc((100% - 74px)  / 4);
    margin: 8px;
    padding: 2px 0;
    border: 1px solid #249ffd;
    box-shadow: none;
  }
}
@media screen and (min-width: 601px) and (max-width: 768px) {
  .tool-list {
    padding: 15px 10px;
  }

  .tool-item {
    width: calc((100% - 56px) / 3);
    margin: 8px;
    padding: 2px 0;
    border: 1px solid #249ffd;
    box-shadow: none;
    font-weight: normal;
  }
}
@media screen and (max-width: 600px) {
  .tool-list {
    padding: 15px 10px;
  }

  .tool-item {
    width: calc((100% - 38px) / 2);
    margin: 6px 8px;
    padding: 2px 0;
    border: 1px solid #249ffd;
    box-shadow: none;
    font-weight: normal;
  }
}
</style>
