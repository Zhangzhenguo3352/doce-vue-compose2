# chart 图标组件

> 基础用法

:::demo ### 使用第三方 方式实现


```html
<template>
    <category
        :title="title"
        :x-axis-data="xAxisData"
        :series-data="seriesData"
    ></category>
    <bar3d :bar3d-data="bar3dData"></bar3d>
</template>
<script>
import { Category, Bar3d } from 'vo-ui'
import {bar3dData} from '../../components/data'
export default {
    name: 'checkbox',
    components: {
        Category, Bar3d
    },
    data() {
        return {
            title: '某个需求的柱状图',
            xAxisData: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
            seriesData: [{ // 2d 柱状图的 销量数据
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }],
            bar3dData,  // 给3d 图的数据
        }
    }
}
</script>
```

:::

> ## 柱状图

| 名称        | 说明          
| ------------- |:-------------|
| title     | 图表的标题 |
| xAxisData      | 图表当前的名字 |
| seriesData | 给图标的数据 |



> ## 3d图

| 名称        | 说明          
| ------------- |:-------------|
| bar3dData | 给图标的数据 |