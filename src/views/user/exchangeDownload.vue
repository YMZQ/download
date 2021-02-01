<template>
  <div class="download  router-view">
    <div class="bg">
      <img src="@/assets/img/download/downloadLogo.png" alt="">
    </div>
    <ul>
      <li>
        <img src="@/assets/img/download/icon4.png" alt="">
        <div>
          <p>服务至上</p>
          <p>用户至上原则</p>
          <p>7x24小时优质服务</p>
        </div>
      </li>
      <li>
        <div class="flex1">
          <p class="rem-ml-22">多重安保</p>
          <p>手机安保、实名认证安保、Google双重认证安保、离线钱包、服务器SLB均衡同时备份 确保用户资金安全无忧</p>
        </div>
        <img src="@/assets/img/download/icon2.png" alt="">
      </li>
      <li>
        <img src="@/assets/img/download/icon3.png" alt="">
        <div class="flex1">
          <p class="rem-ml-22">多终端服务</p>
          <p>Web、手机等多终端支持为客户提供安全、稳定、可信的数字资产交易服务</p></div>
      </li>
      <li>
        <div class="flex1">
          <p class="rem-ml-22">多业态发展</p>
          <p>币兑支持多业态发展 用创新与科技推动数字资产智能化</p>
        </div>
        <img src="@/assets/img/download/icon1.png" alt="">
      </li>
    </ul>

    <div class="btn">
      <div @click="download(0)">
        <img class="androidImg" src="@/assets/img/download/android.png" alt="">
        <p>Android</p>
      </div>
      <div @click="download(1)">
        <img class="iosImg" src="@/assets/img/download/ios.png" alt="">
        <p>ios</p>
      </div>
    </div>
    <toBrowser :browser="browser"></toBrowser>
  </div>
</template>

<script>
import {getAppVersion} from '@/api/user';
import toBrowser from './v-brower'

export default {
  name: "download",
  data() {
    return {
      browser: false ,
      loading: true,
      iosUrl: '',
      androidUrl: ''
    }
  },
  components: {
    toBrowser
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      getAppVersion().then((res) => {
        this.loading = false;
        if (res.code == 200) {
          this.iosUrl = res.data.ios.pcIosUrl
          this.androidUrl = res.data.android.downloadUrl
        } else {
          this.$message({
            message: res.msg,
            type: 'warning'
          })
        }
      }).catch(() => {
        this.loading = false;
      });
    },
    download(type) {
      let ua = navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == "micromessenger") { //判断是否是微信内置浏览器
        this.browser = true
      } else {
        if (type == 1) {
          if (this.iosUrl) {
            location.href = this.iosUrl
          }
        } else {
          if (this.iosUrl) {
            location.href = this.androidUrl
          }
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.router-view {
  padding: 0;
}


.download {
  .bg {
    width: 100%;
    height: 540px;
    background: url("../../assets/img/download/bg.png") no-repeat center;
    background-size: 100% 100%;
    padding-top: 60px;
    box-sizing: border-box;

    img {
      display: block;
      width: 300px;
      height: 66px;
      margin: 0 auto;
    }
  }

  ul {
    padding-bottom: 110px;

    li {
      display: flex;
      align-items: center;
      padding: 50px;
      box-sizing: border-box;

      img {
        display: block;
        width: 60px;
        height: 64px;
        margin-right: 40px;
      }

      div {
        flex: 1;

        p {
          color: #333;
          font-size: 14px;

          &:first-child {
            color: #506aef;
            font-weight: bold;
            font-size: 17px;
            margin-bottom: 12px;
          }
        }
      }

      &:nth-child(2n) {
        background-color: #f5f6fa;

        img {
          margin-left: 40px;
          margin-right: 0;
        }

        div {
          p {
            color: #666;

            &:first-child {
              color: #506aef;
            }
          }
        }
      }
    }

  }

  .btn {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 30px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;

    div {
      width: 45%;
      height: 50px;
      background-color: #3268d5;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      //box-shadow: 1px 2px 3px 4px #3268D5;
      .androidImg {
        width: 17px;
        height: 19px;
        margin-right: 10px;
      }

      .iosImg {
        width: 16px;
        height: 19px;
        margin-right: 10px;
      }

      p {
        color: #fff;
        font-size: 14px;
        font-weight: bold;
      }
    }

  }
}
</style>
