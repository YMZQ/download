<template>
  <div class="browser" v-if="browser">
    <div class="browser_main">
      <p>1.<span class="ysj">点击右上角菜单</span></p>
      <div class="display_flex">
        <p>2.</p>
        <p>点击</p>
        <i>
          <img src="@/assets/img/download/liulanqi.png">
          <p>在浏览器中打开</p>
        </i>
        <p>在浏览器中打开进行下载</p>
      </div>
      <img src="@/assets/img/download/toLiulanqi.png" class="positionImg">
    </div>
  </div>
</template>

<script>

export default {
  props: {
    browser: {
      type: Boolean,
      default: false
    }
  },
  name: "download",
  data() {
    return {}
  },
  created() {
  },
  methods: {}
}
</script>

<style lang="less" scoped>

.browser {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 14px;

  .browser_main {
    position: absolute;
    width: 300px;
    left: 50%;
    top: 20px;
    padding-top: 100px;
    box-sizing: border-box;
    transform: translateX(-50%);

    .display_flex {
      display: flex;
      margin-top: 20px;
    }
  }

  div {
    overflow: hidden;
    i {
      display: block;
      font-style: normal;
      float: left;

      img {
        width: 33px;
        padding-bottom: 5px;
        margin: 0 auto;
        display: block;
      }
      p {
        margin: 0;
      }
    }
  }

  .positionImg {
    position: absolute;
    right: 1.2rem;
    top: 1.8rem;
    display: block;
    width: 50px;
    height: 60px;
  }
}

</style>