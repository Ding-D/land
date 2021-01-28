<template>
  <div id="home">
    <el-container>
      <!-- 导航栏开始 -->
      <el-header>
        <div class="left">
          <div class="logo" @click="stationChange()">
            <img src="../assets/landLogo.png" alt="" />
            <h1>{{ stationText }}</h1>
          </div>
          <div class="choose">
            <router-link v-for="(e, key, i) in routerLink" :key="i" :to="e.to" :class="e.class">
              <span class="iconfont" v-html="e.icon" style="font-size: 15px;"></span>
              {{ e.text }}
            </router-link>
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
        <!-- 滚动条 start -->
        <marquee align="absmiddle" behavior="scroll" scrollamount="5" style="background: transparent;">{{ marqueeText }}</marquee>
        <!-- 滚动条 end-->
        <router-view />
      </el-main>
      <!-- 图表展示区域 结束-->
    </el-container>

    <el-dialog title="选择工程" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <div class="gc" style="margin-bottom: 30px;">
        <el-select v-model="GCvalue" filterable placeholder="请选择">
          <el-option v-for="item in GCoptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pcode: null,
      routerLink: [
        { to: '', class: 'index', text: '动态监视', icon: '&#xe671;' },
        { to: '', class: 'hsyb', text: '洪水预报', icon: '&#xe639;' },
        { to: '', class: 'report', text: '逐日报表', icon: '&#xe606;' },
        { to: '', class: 'slfx', text: '渗流分析', icon: '&#xe632;' },
        { to: '', class: 'view', text: '全景图', icon: '&#xe629;' }
      ],
      stationText: '西夏水库',
      dialogVisible: false,
      GCvalue: '',
      GCoptions: [
        {
          value: '选项1',
          label: '黄金糕'
        }
      ],
      marqueeText: '1111111111111111111111111111111'
    }
  },
  mounted() {
    for (var i = 0; i < this.routerLink.length; i++) {
      this.routerLink[i].to = '/' + this.routerLink[i].class
    }
    this.pcode = this.$store.dispatch('handle')
  },
  methods: {
    stationChange() {
      this.dialogVisible = true
    },
    handleClose() {
      this.dialogVisible = false
    }
  },
  computed: {}
}
</script>
<style lang="less" scoped></style>
