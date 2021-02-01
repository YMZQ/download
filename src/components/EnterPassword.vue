<template>
  <van-popup v-model="vanpopup" closeable round close-icon="close" position="bottom"
             :style="{ height:toastType==0? '46%': '65%' }">
    <div class="title">{{title}}</div>
    <!--    首页预购展示-->
    <div class="index" v-if="toastType==1">
      <div style="position:relative;margin-bottom:20px ">
        <img src="@/assets/img/usdt.png" alt="">
        <van-field left-icon="#" v-model="from.number" type="number" :placeholder="$t('请输入数量')"/>
        <div class="coin schedule">
          <p>USDT</p>
          <div class="line"></div>
          <div>{{$t('预约')}}1%</div>
        </div>
      </div>
      <div class="available">
        <p class="ccc">{{$t('可用')}}：<span class="green">2284.10 USDT</span></p>
        <p @click="route('/Recharge')">{{$t('充币')}}</p>
      </div>
      <p class="message">{{$t('请输入交易密码')}}</p>
    </div>
    <van-password-input
        :value="from.password"
        :error-info="errorInfo"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
    />
    <van-number-keyboard
        v-model="from.password"
        gutter='0'
        :show="showKeyboard"
        extra-key
        delete-button-text="删除"
    />
  </van-popup>
</template>

<script>
import {Toast} from "../plugins/vant";

export default {
  name: "EnterPassword",
  props: {
    popup: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '输入密码'
    },
    toastType: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      errorInfo: '',
      showKeyboard: true,
      show: true,
      from: {
        number: '',
        password: '',
      }
    };
  },
  computed: {
    vanpopup: {
      get() {
        this.from.password = ''
        this.from.number = ''
        return this.popup;
      },
      set(value) {
        this.from.password = ''
        this.from.number = ''
        this.$emit("update:popup", value);
      }
    }
  },
  watch: {
    password(value) {
      if (value.length === 6) {
        this.$emit("password", this.from);
        this.vanpopup = false
      }
    },
  },
  methods:{
    route(url) {
      if (url) {
        this.$router.push(url)
      }
    },
  }
}
</script>

<style lang="less" scoped>
.title {
  font-weight: 500;
  font-size: 16px;
  line-height: 55px;
  text-align: center;
}

.index {
  padding: 0 10px 10px;
  box-sizing: border-box;

  img {
    position: absolute;
    left: 8px;
    top: 10px;
    width: 25px;
    height: 25px;
    z-index: 99999
  }

  .schedule {
    width: 35%;
    position: absolute;
    display: flex;
    align-items: center;
    right: 10px;
    top: 10px;

    p {
      color: #000;
      font-size: 14px;
    }

    div {
      padding: 4px 10px;
      color: #0bbb80;
      border: 1px solid #0bbb80;
      border-radius: 4px;
    }

    .line {
      border-radius: 0;
      border: none;
      padding: 0;
      width: 1px;
      height: 15px;
      background-color: #ccc;
      margin: 0 10px;
    }
  }

  .van-cell {
    background-color: #eef3ef;

    &::after {
      border: none;
    }

    .van-field__control {
      color: #000;
    }

  }


  p {
    margin: 0;
  }

  .message {
    text-align: center;
    color: #000;
    margin-top: 10px;
  }

  .available {
    display: flex;
    justify-content: space-between;

    color: #2EC998;
    font-size: 14px;

    .ccc {
      color: #999
    }

    .green {
      color: #2EC998;
    }
  }

}

/deep/ .van-number-keyboard {
  padding: 0 10px 20px;
  box-sizing: border-box;
  background-color: #fff;

  .van-key__wrapper {
    height: 45px;

    &:nth-of-type(10) {

      .van-key {
        height: 45px;
        border-radius: 0;
        background-color: #ebedf0;
      }
    }

    &:nth-of-type(12) {

      .van-key {
        border-radius: 0;
        background-color: #ebedf0;
      }
    }
  }

  .van-key__collapse-icon {
    &:first-of-type {
      width: 0rem;
      background-color: #fff;
    }
  }
}
</style>
