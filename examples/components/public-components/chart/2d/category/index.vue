
<template>
    <div>
        <div :id="id" :style="{width: '100%', height: '300px'}"></div>
    </div>
</template>

<script>
import Vue from 'vue'
import echarts from 'echarts'
import uuidv4 from 'uuid/v4'
Vue.prototype.$echarts = echarts 
const uuid = uuidv4()
export default {
  name: 'Category',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      id: uuid
    }
  },
  props: {
    title: {
      type: String,
      default: 'title'
    },
    xAxisData: {
      type: Array,
      default: () => []
    },
    seriesData: {
      type: Array,
      default: () => []
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById(uuid))
        // 绘制图表
        myChart.setOption({
            title: { text: this.title },
            tooltip: {},
            xAxis: {
                data: this.xAxisData
            },
            yAxis: {},
            series: this.seriesData
        });
    }
  }
}

</script>

<style lang="scss" scoped>

</style>