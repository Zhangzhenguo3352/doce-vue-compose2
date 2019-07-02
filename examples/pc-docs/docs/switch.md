# switch 开关组件

> 基础用法

:::demo ### 通过 `input 中 type="button"` 和 css3 过渡的方式实现

```html
<template>
    <switch-component 
        :xchange="switchChange" 
        :init-data="switchInitData" 
        :checked-type="checkedType">
    </switch-component> {{checkedType}}
</template>
<script>
import { SwitchComponent } from 'vo-ui'
export default {
    components: {
        SwitchComponent
    },
    data() {
        return {
            checkedType: true,
        };
    },
    methods: {
        // switch 开关事件
        switchChange(e) {
            this.checkedType = !e
        },
        // 初始化给的 开关数据
        switchInitData(e) {
            this.checkedType = e
        }
    }
};
</script>
```


:::


> ## 开关配置

| 名称        | 说明          
| ------------- |:-------------|
| :xchange | switch 开关事件 |
| :init-data | 回显，初始化给的 开关数据，显示了当前状态 |
| :checked-type | 开关 是否 打开的状态，需要需要传进去 |

