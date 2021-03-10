<template>
    <div>
      <img src="@/assets/img/activity1.png" alt="">
      <img src="@/assets/img/activity2.png" alt="">
      <div class="qrBox">
<!--        <img src="@/assets/moblie/qr.png" alt="">-->
        <p>扫一扫添加客服</p>
      </div>
    </div>
</template>

<script>
export default {
  name: "activity"
}
</script>

<style scoped lang="less">
    img{
      display: block;
      width: 100% ;
    }
    .qrBox {
      width: 100%;
      height: 311px;
      background: url('~@/assets/img/activity3.png') no-repeat center;
      background-size: 100% 100%;
      padding-top: 80px;
      box-sizing: border-box;

      img {
        width: 120px;
        height: 120px;
        margin: 0 auto 10px;
      }

      p {
        text-align: center;
        color: #516ab5;
        font-size: 12px;
      }
    }
</style>
