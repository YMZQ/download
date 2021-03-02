<template>
    <div @click="doVerificate" class="code-btn" :disabled="!show">
        <span v-show="show">{{ $t('获取验证码') }}</span>
        <span v-show="!show" class="count">{{ $t('重新发送') }}({{ count }})</span>
    </div>
</template>

<script>
// import {doSmsCode} from '@/api';

export default {
  props: {
    account: {
      type: [String, Number],
      default: ''
    },
    useraccount: {
      type: [String, Number],
      default: ''
    },
    actionType: {
      type: [String, Number],
      default: ''
    },
    veriCode: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      TIME_COUNT: 60, //验证码倒计时60s
      count: '',
      show: true,
    };
  },
  methods: {
    doVerificate() {
      if (!this.account) {
        // this.$message({
        //   message: this.$i18n.t('请输入手机号码'),
        //   type: 'warning'
        // })
        return;
      }
      // if (!this.useraccount) {
      //   this.$message({
      //     message: this.$i18n.t('message.tuuname'),
      //     type: 'warning'
      //   })
      //   return;
      // }
      // if (this.actionType === 'R') {
      //   if (!this.veriCode) {
      //     this.$message({
      //       message: this.$i18n.t('短信类型'),
      //       type: 'warning'
      //     })
      //     return;
      //   }
      // }
      this.doSmsCode();
    },
        async doSmsCode() {
          // let params = {};
          // params.account = this.account;
          // params.useType = this.actionType;
          // params.token = '';
          // let res = await doSmsCode(params);
          // if (res.code == 0) {
            this.getCode();
          //   // this.$message({
          //   //   message: '发送成功',
          //   //   type: 'success'
          //   // })
          // } else {
          //   // this.$message({
          //   //   message: '发送失败',
          //   //   type: 'err'
          //   // })
          // }
        },
        // 验证码倒计时60s
        getCode() {
            if (!this.timer) {
                this.count = this.TIME_COUNT;
                this.show = false;
                this.timer = setInterval(() => {
                    if (this.count > 0 && this.count <= this.TIME_COUNT) {
                        this.count--;
                    } else {
                        this.show = true;
                        clearInterval(this.timer);
                        this.timer = null;
                    }
                }, 1000);
            }
        },
        clearCode() {
            this.count = this.TIME_COUNT;
            clearInterval(this.timer);
            this.timer = null;
            this.show = true;
        }
    }
};
</script>

<style lang="less" scoped>
.code-btn{
	font-size: 16px;
	color: #37d3a0;
	.count{
		color: #a9aeb8;
	}
}
</style>
