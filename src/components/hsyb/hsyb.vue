<template>
  <div id="hsyb" class="mainbox">
    <div class="left">
      <div class="up">
        <div class="title">
          洪水预报模型选择
        </div>
        <div class="select">
          <div class="YBMX" style="margin-bottom: 30px;">
            <span>预报模型：</span>
            <el-select v-model="YBMXvalue" placeholder="请选择">
              <el-option v-for="item in YBMXoptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </div>
          <div class="YBDM">
            <span>预报断面：</span>
            <el-select v-model="YBDMvalue" placeholder="请选择">
              <el-option v-for="item in YBDMoptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="down">
        <div class="title">
          预报结果列表
        </div>
      </div>
    </div>
    <div class="center">
      <div class="title">
        预报流量过程线
      </div>
    </div>
    <div class="right">
      <div class="up">
        <div class="title">
          预报流量数据
        </div>
        <div class="table">
          <el-table
            :data="tableData"
            height="100%"
            :row-style="{ height: '0', padding: '0' }"
            :cell-style="{ padding: '0', textAlign: 'center', color: '#fff' }"
            :header-cell-style="{ height: 0, padding: 0, textAlign: 'center', color: '#fff' }"
            style="width: 100%;border-radius: 5px;"
          >
            <el-table-column prop="date" label="时间" width="180"> </el-table-column>
            <el-table-column prop="name" label="面雨量(mm)"> </el-table-column>
            <el-table-column prop="address" label="流量"> </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="down">
        <div class="title">
          洪水特征值
        </div>
        <div class="table">
          <el-table
            :data="tableData"
            height="100%"
            :row-style="{ height: '0', padding: '0' }"
            :cell-style="{ padding: '0', textAlign: 'center', color: '#fff' }"
            :header-cell-style="{ height: 0, padding: 0, textAlign: 'center', color: '#fff' }"
            style="width: 100%;border-radius: 5px;"
          >
            <el-table-column prop="date" label="时间" width="180"> </el-table-column>
            <el-table-column prop="name" label="面雨量(mm)"> </el-table-column>
            <el-table-column prop="address" label="流量"> </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      YBMXoptions: [
        {
          value: '选项1',
          label: '黄金糕'
        }
      ],
      YBMXvalue: '',
      YBDMoptions: [
        {
          value: '选项1',
          label: '黄金糕'
        }
      ],
      YBDMvalue: '',
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
      ]
    }
  }
}
</script>
<style lang="less" scoped></style>
