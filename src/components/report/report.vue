<template>
  <div id="report" class="mainbox">
    <div class="left-box">
      <div class="select" style="padding-top: 50px;border:0;">
        <div class="station">
          <span style="margin-right: 16px;">站点：</span>
          <el-select v-model="YBMXvalue" filterable placeholder="请选择">
            <el-option v-for="item in YBMXoptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
        </div>
        <div class="year" v-show="ZRBBchange">
          <span style="margin-right: 16px;">年份：</span>
          <el-select v-model="YBDMvalue" filterable placeholder="请选择">
            <el-option v-for="item in YBDMoptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
        </div>
        <div class="jcl" v-show="GCXchange">
          <span>监测量：</span>
          <el-select v-model="YBDMvalue" filterable placeholder="请选择">
            <el-option v-for="item in YBDMoptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
        </div>
        <div class="dateBlock" v-show="GCXchange">
          <el-date-picker
            v-model="value2"
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
        <el-button style="display:block; margin-bottom: 20px;" @click="ZRBBchangeClick()">查看逐日报表</el-button>
        <el-button style="display:block; margin-bottom: 0px;" @click="GCXchangeClick()">查看过程线</el-button>
      </div>
    </div>
    <div class="right-box">
      <div id="myChart"></div>
    </div>
  </div>
</template>
<script>
import { parseDateStr } from '@/static/js/common.js'

export default {
  data() {
    return {
      // 站点数据
      YBMXoptions: [
        {
          value: '选项1',
          label: '黄金糕'
        }
      ],
      YBMXvalue: '',
      // 年份
      YBDMoptions: [
        {
          value: '选项1',
          label: '黄金糕'
        }
      ],
      YBDMvalue: '',
      // 监测量
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
      value1: '',
      value2: '',
      ZRBBchange: false,
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
