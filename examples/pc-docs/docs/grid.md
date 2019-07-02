# grid 组件

> 基础用法

:::demo ### 通过 `xx%` 的方式实现

```html
<template>
     <grid-component :listdata="[]" :iscods="iscods">
        <div class="col-1 have-border">A</div>                    
        <div class="col-1 have-border">A</div>                    
        <div class="col-1 have-border">A</div>                    
        <div class="col-1 have-border">A</div>                    
        <div class="col-1 have-border">A</div>                    
        <div class="col-1 have-border">A</div>                    
        <div class="col-1 have-border">A</div>                    
        <div class="col-1 have-border">A</div>                    
        <div class="col-1 have-border">A</div>                    
        <div class="col-1 have-border">A</div>                    
        <div class="col-1 have-border">A</div>                    
        <div class="col-1 have-border">A</div>                    
    </grid-component>

    <br/>
    <br/>

    <grid-component :listdata="listdata" :iscods="iscods" :cols="cols"></grid-component>

    <br/>
    <br/>

    <grid-component :iscods="iscods">
        <div class="col-3 have-border">A</div>                    
        <div class="col-3 have-border">A</div>                    
        <div class="col-3 have-border">A</div> 
        <div class="col-3 have-border">A</div>                    
    </grid-component>
</template>
<script>
import { GridComponent } from 'vo-ui'
export default {
    components: {
        GridComponent
    },
    data() {
        return {
            listdata: ['cols','cols','cols','cols','cols','cols','cols','cols','cols','cols','cols','cols'],
            cols: 4,
            iscods: true,  // true 代表是 pc-docs 文档工程中使用的
        };
    }
};
</script>
```


:::


> ## 栅格配置

| 名称        | 说明          
| ------------- |:-------------|
| :listdata | 数组， 给 栅格数据 |
| :iscods | true 代表是 pc-docs 文档工程中使用的（带有随机颜色） |
| :cols | 动态渲染时栅格将12份平均分成几份 |
| col-3 | 12份， 按照 12/3 = 4 |