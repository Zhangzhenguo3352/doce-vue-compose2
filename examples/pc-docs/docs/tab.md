# tab 组件

> 基础用法

:::demo ### 通过 `计算当前元素距离左边的位置长度` 方式实现

```html
<template>
    <tabs :default-key="defaultKey" :xchang="tabChangeFn" :line-width="1">
        <tabs-item tab="Tab 1" key="1">Content of Tab Pane 1</tabs-item>
        <tabs-item tab="Tab 2" key="2">Content of Tab Pane 2</tabs-item>
        <tabs-item tab="Tab 3" key="3">Content of Tab Pane 3</tabs-item> 
        <tabs-item tab="Tab 1" key="1">Content of Tab Pane 1</tabs-item>
        <tabs-item tab="Tab 2" key="2">Content of Tab Pane 2</tabs-item>
    </tabs><br/>
    <br/>
    <br/>
    <br/>

    <tabs :default-key="defaultKey" :xchang="tabChangeFn" :line-width="1">
        <tabs-item tab="Tab 1" key="1">Content of Tab Pane 1</tabs-item>
        <tabs-item tab="Tab 2" key="2">Content of Tab Pane 2</tabs-item>
        <tabs-item tab="Tab 3" key="3">Content of Tab Pane 3</tabs-item> 
    </tabs>
</template>
<script>
import { Tabs, TabsItem } from 'vo-ui'
export default {
    components: {
        Tabs, TabsItem
    },
    data() {
        return {
            defaultKey: 0
        };
    },
    methods: {
        tabChangeFn(e) {
            console.log(e)
        }
    }
};
</script>
```

:::


> ## tab 切换组件配置

| 名称        | 说明          
| ------------- |:-------------|
| :xchang| tab 事件 |
| :default-key| 初始化在第几项(Number) |
| :line-width| 高，会动的线 |

