# icon 组件

> 基础用法

:::demo ### 通过 `css focus` 的方式实现

```html
<template>
    <div>
        <div><x-input :x-input="xInput" placeholder="请输入内容"/></div>
        <div><l-input :l-input="lInput" placeholder="请输入内容"/></div>
        <div><top-title-input :g-input="gInput" placeholder="电话号码或电子邮件地址"/></div>
    </div>
</template>
<script>
import { xInput, lInput, TopTitleInput } from 'vo-ui'
export default {
    components: {
        xInput, lInput, TopTitleInput
    },
    data() {
        return {
            checkedType: true,
            checkedAnimationType: true, // 动画组件是否全部 开始播放
            animatedOne: -1, // 动画组件是否无线循环
            tAnimationType: 'enter', // 动画是进入(enter)  还是  离开(leave)
        };
    },
    methods: {
        xInput(e) {
            console.log(e)
        },
        lInput(e) {
            console.log(e)
        },
        gInput(e) {
            console.log(e)
        }
    }
};
</script>
```

:::


> ## input 配置

| 名称        | 说明          
| ------------- |:-------------|
| :x-input| 普通input 事件 |
| :l-input| 显形 input 事件 |
| :g-input| 谷歌input 事件 |
| placeholder| 提醒文字 |