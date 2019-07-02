
<template>
    <div>
      <div :id="id" :style="{width: '100%', height: '500px'}"></div>
    </div>
</template>

<script>
import Vue from 'vue'
// import echarts from 'echarts'
import 'echarts-gl'
import uuidv4 from 'uuid/v4'

const uuid = uuidv4()
// Vue.prototype.$echarts = echarts 
export default {
  name: 'Bar3d',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      id: uuid
    }
  },
  props: {
    
    bar3dData: {
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
            grid3D: {},
            tooltip: {},
            xAxis3D: {
                type: 'category'
            },
            yAxis3D: {
                type: 'category'
            },
            zAxis3D: {},
            visualMap: {
                max: 1e8,
                dimension: 'Population'
            },
            dataset: {
                dimensions: [
                    'Income',
                    'Life Expectancy',
                    'Population',
                    'Country',
                    {name: 'Year', type: 'ordinal'}
                ],
                source: this.bar3dData
            },
            series: [
                {
                    type: 'bar3D',
                    // symbolSize: symbolSize,
                    shading: 'lambert',
                    encode: {
                        x: 'Year',
                        y: 'Country',
                        z: 'Life Expectancy',
                        tooltip: [0, 1, 2, 3, 4]
                    }
                }
            ]
        });
    }
  }
}

</script>

<style lang="scss" scoped>

</style>