<template>
  <div class="layout-content">
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <router-view v-else></router-view>
  </div>
</template>

<script>

export default {
  name: 'AppLayout',
  data() {
    return {

    }
  },
  watch: {

  },
  components: {
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>

</style>
