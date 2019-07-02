# Button 按钮

> 基础用法

:::demo 通过`plain`属性可以设置为朴素的按钮

```html
<template>
    <button-component>
        确认
    </button-component>
</template>
<script>
import { ButtonComponent } from 'vo-ui'
export default {
    components: {
        ButtonComponent
    }
};
</script>
```

:::

> ## 基础按钮

| 名称        | 说明          
| ------------- |:-------------|
| @click.native  | 按钮事件 |
