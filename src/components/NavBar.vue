<template>
  <div>
    <van-nav-bar
      :title="title"
      :right-text="rightText"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #left>
        <van-icon name="arrow-left" size="20"/>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    title: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    },
    rightUrl: {
      type: String,
      default: ''
    },

  },
  data() {
    return {}
  },
  created() {

  },
  method() {

  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      if (this.rightUrl) {
        this.$router.push(this.rightUrl)
      }
    },
  }
}
</script>

<style lang="less" scoped>

.van-nav-bar {
  background-color: #20242c;

  &::after {
    border-bottom-width: 0;
  }

  /deep/ .van-ellipsis {
    color: #fff !important;
  }

}
/deep/.van-nav-bar {
  .van-icon {
    color: #FFF;
    font-size: 21px!important;
  }
}
/deep/ .van-nav-bar__text {
  color: #6e768d;
}
.van-nav-bar {
  padding-top: 20px;
  height: 66px;
  line-height: 46px;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  align-items: center;
  display: flex;
  z-index: 100!important;
} .van-nav-bar {
  padding-top: 0!important;
  height: 46px!important;
}
</style>
