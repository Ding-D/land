<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    // async myinit() {
    //   const { data: res } = await this.$http.post('login', {
    //     username: 'admin',
    //     password: '123456'
    //   })
    //   console.log(res)
    // }
  },
  mounted() {
    // this.myinit()
  }
}
</script>
<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
