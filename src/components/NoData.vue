<template>
  <div class="no-data">
    <img src="@/assets/img/nodata.png" alt=""><br>{{$t('暂无数据')}}
  </div>
</template>

<script>
export default {
  name: "NoData"
}
</script>


<style lang="less" scoped>
.no-data {
  margin-top: 100px;
  text-align: center;

  img {
    width: 100px;
    height: 64px;
  }
}
</style>
