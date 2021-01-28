<template>
  <div id="report" class="mainbox">
    <div class="left-box">
      <div class="select" style="padding-top: 50px;border:0;">
        <div class="station">
          <span class="selectFont" style="margin-right: 16px;">站点：</span>
          <el-select v-model="stationvalue" filterable placeholder="请选择">
            <el-option v-for="item in stationoptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
        </div>
        <div class="year" v-show="ZRBBchange">
          <span class="selectFont" style="margin-right: 16px;">年份：</span>
          <el-select v-model="YEARvalue" filterable placeholder="请选择">
            <el-option v-for="item in YEARoptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
        </div>
        <div class="jcl" v-show="GCXchange">
          <span class="selectFont">监测量：</span>
          <el-select v-model="JCLvalue" filterable placeholder="请选择">
            <el-option v-for="item in JCLoptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
        </div>
        <div class="dateBlock" v-show="GCXchange">
          <el-date-picker
            v-model="dateBlockValue"
            type="datetimerange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
            @change="dataPickerChange()"
          >
          </el-date-picker>
        </div>
        <el-button type="primary" style="display:block; margin-bottom: 20px;" @click="ZRBBchangeClick()">查看逐日报表</el-button>
        <el-button type="primary" style="display:block;" @click="GCXchangeClick()">查看过程线</el-button>
      </div>
    </div>
    <div class="right-box">
      <div id="myChart"></div>
    </div>
  </div>
</template>
<script>
import { parseDateStr } from '@/assets/js/common.js'

export default {
  data() {
    return {
      // 站点数据
      stationoptions: [
        {
          value: '选项1',
          label: '黄金糕'
        }
      ],
      stationvalue: '',
      // 年份
      YEARoptions: [
        {
          value: '选项1',
          label: '黄金糕'
        }
      ],
      YEARvalue: '',
      // 监测量
      JCLoptions: [
        {
          value: '选项1',
          label: '黄金糕'
        }
      ],
      JCLvalue: '',
      // 开始时间
      // 结束时间
      // 右侧表格数据
      tableData: [
        {
          date: '2016-05-03',
          name: '123',
          address: '123'
        },
        {
          date: '2016-05-02',
          name: '123',
          address: '123'
        },
        {
          date: '2016-05-04',
          name: '123',
          address: '123'
        },
        {
          date: '2016-05-01',
          name: '123',
          address: '123'
        },
        {
          date: '2016-05-08',
          name: '123',
          address: '123'
        },
        {
          date: '2016-05-06',
          name: '123',
          address: '123'
        },
        {
          date: '2016-05-07',
          name: '123',
          address: '123'
        },
        {
          date: '2016-05-08',
          name: '123',
          address: '123'
        },
        {
          date: '2016-05-06',
          name: '123',
          address: '123'
        },
        {
          date: '2016-05-07',
          name: '123',
          address: '123'
        }
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [parseDateStr(start), parseDateStr(end)])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [parseDateStr(start), parseDateStr(end)])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [parseDateStr(start), parseDateStr(end)])
            }
          }
        ]
      },
      dateBlockValue: '',
      // 逐日报表选择栏显示隐藏
      ZRBBchange: false,
      // 工程线选择栏显示隐藏
      GCXchange: false
    }
  },
  mounted() {
    console.log(parseDateStr('2020'))
  },
  methods: {
    dataPickerChange() {
      console.log(this.value2)
    },
    ZRBBchangeClick() {
      this.ZRBBchange = true
      this.GCXchange = false
    },
    GCXchangeClick() {
      this.ZRBBchange = false
      this.GCXchange = true
    }
  }
}
</script>
<style lang="less" scoped></style>
