<template>
  <div id="index" class="mainbox">
    <div class="left">
      <div class="up">
        <div class="title">
          <span class="iconfont">&#xe614; </span>
          浸润线时间列表
        </div>
        <div class="table" style="height: 85%;">
          <el-table
            :data="tableListData"
            height="100%"
            :row-style="{ height: '0', padding: '0' }"
            :cell-style="{ padding: '0', textAlign: 'center', color: '#fff' }"
            :header-cell-style="{ height: 0, padding: 0, textAlign: 'center', color: '#fff' }"
            style="width: 100%;border-radius: 5px;"
            @row-click="tableDataClick"
            ref="tableDataRef"
          >
            <el-table-column prop="date" label="时间"> </el-table-column>
          </el-table>
        </div>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="1"
          :pager-count="5"
          :page-size="pagination.size"
          layout="total, prev, pager, next,jumper"
          :total="pagination.total"
          style="width: 100%; text-align: center; overflow:auto;"
        >
        </el-pagination>
      </div>
      <div class="down">
        <div class="title">
          <span class="iconfont">&#xe614; </span>

          浸润线特征值
        </div>
        <div class="table" style="height: 85%;">
          <el-table
            :data="JRXTZZtableData"
            height="100%"
            :row-style="{ height: '0', padding: '0' }"
            :cell-style="{ padding: '0', textAlign: 'center', color: '#fff' }"
            :header-cell-style="{ height: 0, padding: 0, textAlign: 'center', color: '#fff' }"
            style="width: 100%;border-radius: 5px;"
          >
            <el-table-column prop="date" label="桩号"> </el-table-column>
            <el-table-column prop="date" label="轴距"> </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="title">
        <span class="iconfont">&#xe61d;</span>
        浸润线实时监测
      </div>
    </div>
    <div class="right">
      <div class="up">
        <div class="title">
          <span class="iconfont">&#xe614; </span>
          选择断面
        </div>
        <div class="select">
          <div class="dm" style="margin-bottom: 30px;">
            <el-select v-model="DMvalue" placeholder="请选择">
              <el-option v-for="item in DMoptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="down">
        <div class="title">
          <span class="iconfont">&#xe614; </span>
          测站监测
        </div>
        <div class="select">
          <div class="czjc" style="margin-bottom: 30px;">
            <span class="fontColorBlue" style="font-size: 14px; ">测站类型：</span>
            <el-select v-model="CZJCvalue" placeholder="请选择" size="mini">
              <el-option v-for="item in CZJCoptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </div>
          <div class="table" style="height: 85%; padding: 0;">
            <el-table
              :data="CZJCtableData"
              height="100%"
              :row-style="{ height: '0', padding: '0' }"
              :cell-style="{ padding: '0', textAlign: 'center', color: '#fff' }"
              :header-cell-style="{ height: 0, padding: 0, textAlign: 'center', color: '#fff' }"
              style="width: 100%;border-radius: 5px;"
            >
              <el-table-column prop="date" label="时间"> </el-table-column>
              <el-table-column prop="date" label="观测时间"> </el-table-column>
              <el-table-column prop="date" label="水位"> </el-table-column>
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
      tableDataArr: [],
      tableListData: null,
      pagination: {
        total: 50,
        page: 0,
        size: 10
      },
      DMoptions: [],
      DMvalue: '',
      CZJCoptions: [],
      CZJCvalue: '',
      CZJCtableData: [],
      JRXTZZtableData: []
    }
  },
  mounted() {
    var arr = []
    for (var j = 0; j < 150; j++) {
      arr.push({
        date: '2016-05-03' + j,
        name: '123',
        address: j
      })
    }
    this.pagination.total = arr.length
    this.tableDataArr = this._.chunk(arr, this.pagination.size)
    this.tableListData = this.tableDataArr[0]
    this.CZJCtableData = arr
    this.JRXTZZtableData = arr
    // console.log(this.tableDataArr)

    for (var i = 0; i < 30; i++) {
      this.DMoptions.push({
        value: '选项' + i,
        label: '黄金糕' + i
      })
      this.CZJCoptions.push({
        value: '选项' + i,
        label: '黄金糕' + i
      })
    }
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.tableListData = this.tableDataArr[val - 1]
    },
    tableDataClick(r, c, e) {
      var trArr = this.$refs.tableDataRef.$el.children[2].children[0].children[1].children
      for (var i = 0; i < trArr.length; i++) {
        if (trArr[i].children[0].children[0] === e.target) {
          trArr[i].children[0].children[0].style.background = 'red'
        } else {
          trArr[i].children[0].children[0].style.background = ''
        }
      }
    }
  }
}
</script>
<style lang="less" scoped></style>
