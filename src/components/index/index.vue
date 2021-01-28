<template>
  <div id="index" class="mainbox">
    <div class="left">
      <div class="up">
        <div class="title">
          <span class="iconfont"> &#xe626;</span>
          设备运行状态
        </div>
      </div>
      <div class="down">
        <div class="title">
          <span class="iconfont" style="color: red;">&#xe65e;</span>
          设备故障信息
        </div>
        <div class="table" style="height: 100%;">
          <el-table
            :data="breakInforTableData"
            height="100%"
            :row-style="{ height: '0', padding: '0' }"
            :cell-style="{ padding: '0', textAlign: 'center', color: '#fff' }"
            :header-cell-style="{ height: 0, padding: 0, textAlign: 'center', color: '#fff' }"
            style="width: 100%;border-radius: 5px;"
            empty-text="无故障数据"
          >
            <el-table-column prop="date" label="设备名称"> </el-table-column>
            <el-table-column prop="date" label="发生时间"> </el-table-column>
            <el-table-column prop="date" label="事件"> </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="title">
        <span class="iconfont">&#xe60a;</span>
        实时监测
      </div>
    </div>
    <div class="right">
      <div class="up">
        <div class="title">
          <span class="iconfont">&#xe614;</span>
          选择断面
        </div>
        <div class="select">
          <div class="DM" style="margin-bottom: 30px;">
            <el-select v-model="DMvalue" placeholder="请选择">
              <el-option v-for="item in DMoptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="down">
        <div class="title">
          <span class="iconfont">&#xe622;</span>
          实时水情
        </div>
        <div class="select">
          <div class="TYPE" style="margin-bottom: 30px;">
            <span class="fontColorBlue" style="font-size: 14px; ">测站类型：</span>
            <el-select v-model="TYPEvalue" placeholder="请选择" size="mini">
              <el-option v-for="item in TYPEoptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </div>
          <div class="table" style="height: 100%; padding:0;">
            <el-table
              :data="realtimeTableData"
              height="100%"
              :row-style="{ height: '0', padding: '0' }"
              :cell-style="{ padding: '0', textAlign: 'center', color: '#fff' }"
              :header-cell-style="{ height: 0, padding: 0, textAlign: 'center', color: '#fff' }"
              style="width: 100%;border-radius: 5px;"
              empty-text="表中数据为空"
            >
              <el-table-column prop="date" label="测站名称"> </el-table-column>
              <el-table-column prop="date" label="观测日期"> </el-table-column>
              <el-table-column prop="date" label="流量"> </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      breakInforTableData: [],
      DMvalue: '',
      DMoptions: [
        {
          value: '选项1',
          label: '黄金糕'
        }
      ],
      TYPEvalue: '',
      TYPEoptions: [
        {
          value: '选项1',
          label: '黄金糕'
        }
      ],
      realtimeTableData: []
    }
  },
  mounted() {
    var arr = []
    for (var i = 0; i < 150; i++) {
      arr.push({
        date: '2016-05-03' + i,
        name: '123',
        address: i
      })
    }
    this.breakInforTableData = arr
    // this.$route.params.pcode = 60
    // console.log(this.$route)
  }
}
</script>
<style lang="less" scoped></style>
