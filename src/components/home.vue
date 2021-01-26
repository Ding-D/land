<template>
  <div id="home">
    <el-container>
      <!-- 导航栏开始 -->
      <el-header>
        <div class="left">
          <div class="logo">
            <h1>西夏水库</h1>
          </div>
          <div class="choose">
            <router-link to="/index">动态监视</router-link>
            <router-link to="/hsyb">洪水预报</router-link>
            <router-link to="/report">逐日报表</router-link>
            <router-link to="/slfx">渗流分析</router-link>
            <router-link to="/view">全景图</router-link>
          </div>
        </div>
        <div class="right">
          <div class="user">用户：</div>
          <el-dropdown class="log-on" trigger="click">
            <span class="el-dropdown-link"> 注销<i class="el-icon-arrow-down el-icon--right"></i> </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <!-- 导航栏结束 -->
      <!-- 图表展示区域 开始 -->
      <el-main>
        <router-view />
      </el-main>
      <!-- 图表展示区域 结束-->
    </el-container>
  </div>
</template>
<script>
export default {
  methods: {
    handle() {
      console.log(1)
      this.change()
    }
  },
  computed: {}
}
</script>
<style lang="less" scoped></style>
