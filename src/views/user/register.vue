<template>
  <div class="register router-view browser">
    <p class="title">欢迎注册</p>
    <van-form validate-first @failed="onFailed" @submit="onSubmit">
      <van-field
          v-model="value1"
          name="pattern"
          placeholder="请输入用户名"
          :rules="[{ pattern, message: '请输入用户名' }]"
      />
      <van-field
          v-model="value2"
          name="validator"
          type="password"
          placeholder="请输入6位数数字密码"
          :rules="[{ validator, message: '请输入6位数数字密码' }]"
      />
      <van-field
          v-model="value3"
          name="asyncValidator"
          placeholder="请确认密码"
      />
      <van-field
          v-model="value3"
          name="asyncValidator"
          placeholder="邀请码（选填）"
      />
      <van-button round block native-type="submit">注册</van-button>
      <p>已经是注册用户？ <span @click="login">立即登录</span></p>
    </van-form>

    <div class="download">
        <img src="@/assets/img/dlogo.png" alt="">
<!--      <span>GCEX</span>-->
      <span @click="routerTo('/download')">去下载</span>
    </div>
    <v-brower :isBrower="isBrower"></v-brower>
  </div>
</template>

<script>
import vBrower from './v-brower'
import vCode from '@/components/v-code/v-code'
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      code: '',
      pattern: /^1[0-9]{10,10}$/,
      isBrower: false
    }
  },
  created() {
  },
  computed: {},
  components: {
    vBrower,
    vCode
  },
  mounted() {

  },

  methods: {
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(textval) {
      const pwdregex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{6,18}$/
      return pwdregex.test(textval)
    },
    onFailed(errorInfo) {
      console.log('failed', errorInfo);
    },
    onSubmit() {
      console.log(123)
    },
    login() {
      let that = this;
      let flag = 0;//0:ios,1:android

      if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
        flag = 1;
      } else if (navigator.userAgent.match(/android/i)) {
        flag = 0;
      }
      let ua = navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        that.isBrower = true
        return false
      }

      let loadDateTime = new Date(); // 设置时间阈值，在规定时间里面没有打开对应App的话，跳去下载页。
      window.setTimeout(function () {
        let timeOutDateTime = new Date();
        if (timeOutDateTime - loadDateTime < 5000) {
          that.routerTo("/download")
        } else {
          window.close();
        }
      }, 1000);
      if (flag == 1) {
        window.location = "mzozy://"; // iOS端URL Schema
      } else if (flag == 0) {
        window.location = "mzapp://ozy/open"; // Android端URL Schema
      }
    },
    routerTo(path) {
      this.$router.push(path);
    },
  }
}
</script>
<style lang="less" scoped>

input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #c8cddd;
}

input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #c8cddd;
}

input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #c8cddd;
}

input::-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #c8cddd;
}

.router-view {
  background: linear-gradient(180deg, #fff, #fff);
  padding: 0 15px;
  box-sizing: border-box;

  .title {
    font-weight: bold;
    font-size: 28px;
    letter-spacing: 0px;
    color: #333333;
    text-align: left;
    margin-bottom: 30px;
  }

  .van-cell {
    padding: 0;
    margin-bottom: 23px;

    /deep/ .van-field__control {
      height: 40px;
      color: #333;
    }

    &::after {
      border-color: #c8cddd;
      left: 0;
      right: 0;
    }
  }

  p {
    text-align: center;
    color: #6b6d7e;
    font-size: 14px;

    span {
      color: #37d3a0;
    }
  }

  .van-button--round {
    margin: 40px 0 110px;
    border-radius: 4px;
    color: #fefefe;
    font-weight: bold;
    background-color: #37d3a0;
  }

}

.download {
  width: 100%;
  height: 45px;
  line-height: 45px;
  padding: 0 15px;
  box-sizing: border-box;
  background-color: rgba(55, 211, 160, 0.1);
  position: fixed;
  bottom: 0;
  left: 0;
  color: rgb(55,211,160);
  font-size: 12px;
  overflow: hidden;

  img {
    width: 96px;
    height: 21px;
    vertical-align: middle;
    margin-right: 11px;
  }

  span {
    &:last-child {
      float: right;
      display: inline-block;
      border: 1px solid rgb(55,211,160);
      height: 24px;
      padding: 0 11px;
      box-sizing: border-box;
      line-height: 24px;
      text-align: center;
      border-radius: 4px;
      margin-top: 10px;
    }
  }

}

</style>
