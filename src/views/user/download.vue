<template>
  <div class="download  router-view browser">
    <div class="main">
    <img class="logo" src="@/assets/img/downloadLogo.png" alt="">
<!--    <p>Wallet on chain</p>-->
<!--    <p class="text">woc数据资产管理链上银行</p>-->
    <img class="Introduction" src="@/assets/img/download.png" alt="">
    <div class="bottom">
      <div class="btn" @click="download(1)">
        <img src="@/assets/img/ios.png" alt="">
        <span>ios</span>
      </div>
      <div class="btn" @click="download(2)">
        <img src="@/assets/img/android.png" alt="">
        <span>Android</span>
      </div>
    </div>
    </div>
    <toBrowser :browser="browser"></toBrowser>
  </div>
</template>

<script>
import {getAppVersion} from 'api/user';
import toBrowser from './v-brower'

export default {
  name: 'download',
  data() {
    return {
      browser: false,
      loading: true,
      iosUrl: '',
      androidUrl: '',

    }
  },
  created() {
    this.getData()
  },
  components: {
    toBrowser
  },
  methods: {
    getData() {
      getAppVersion({ClientType: 'H5'}).then((res) => {
        this.loading = false;



        if (res.respCode == '00000') {
          this.iosUrl = res.iosUpdatePath
          this.androidUrl = res.azUpdatePath
        } else {
          this.$toast({
            message: res.respMsg,
            duration: 1000,
          })
        }
      }).catch(() => {
        this.loading = false;
      });
    },
    download(type) {
      let ua = navigator.userAgent.toLowerCase()
      if (ua.match(/MicroMessenger/i) == 'micromessenger') { //判断是否是微信内置浏览器
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
.iconanzhuo, .iconios1 {
  font-size: 18px;
}

.download {
  height: 100%;
  width: 100%;
  background: url("../../assets/img/downloadBg.png") no-repeat center;
  background-size: 100% 100%;
  padding-top: 40px;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
.main{
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
  .logo {
    width: 90px;
    height: 125px;
    margin: 35px auto 34px;
    display: block;
  }
  .Introduction{
    width: 210px;
    height: 419px;
    margin: 0 auto 30px;
    display: block;
  }
  .bottom {
    margin: 0 auto;
    padding-bottom: 20px;
  }

  p {
    text-align: center;
    color: #1678ff;
    font-size: 24px;
  }
  .text{
    margin-top: 10px;
    font-size: 16px;
  }

  .btn {
    width: 310px;
    height: 48px;
    line-height: 48px;
    margin: 0 auto 15px;
    text-align: center;
    background-color: #1678ff;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border-radius: 24px;

    img {
      width: 16px;
      height: 19px;
      margin-right: 14px;
      vertical-align: middle;

      &:last-child {
        width: 17px;
        height: 18px;
      }
    }
  }

  .browser {
    width: 100%;
    height: 100%;
    position: absolute;
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
      transform: translateX(-50%);
    }

    p {
      margin-top: 100px;
      margin-right: 0.5rem;
      margin-bottom: 10px;
    }

    div {
      margin-top: 0.3rem;
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
}
</style>
