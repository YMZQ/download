<template>
    <div @click="doVerificate" class="code-btn" :disabled="!show">
        <span v-show="show">{{ $t('获取验证码') }}</span>
        <span v-show="!show" class="count">{{ $t('重新发送') }}({{ count }})</span>
    </div>
</template>

<script>
import { doSmsCode, register } from 'api/user'

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
        this.$toast({
          message: '请输入手机号码',
          duration: 1000,
        })
        return;
      }
      this.doSmsCode();
    },
         doSmsCode() {
           let params = {};
           params.account = this.account;
           params.useType = this.actionType;
           params.token = '';
           doSmsCode(params).then((res) => {
             this.loading = false;
             if (res.code == 0) {
               this.$toast({
                 message: '发送成功',
                 duration: 1000,
               })
               this.getCode();
             } else {
               this.$toast({
                 message: res.msg,
                 duration: 1000,
               })
             }
           }).catch(() => {
             this.loading = false;
           });
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
