# animation 组件

> 基础用法

:::demo ### 通过`传参`的方式实现动画

```html
<template>
    <switch-component 
        :xchange="switchAnimationChange" 
        :init-data="switchInitDataAnim" 
        :checked-type="checkedAnimationType"></switch-component> {{checkedAnimationType}}
        <br/><br/><br/><br/><br/><br/>
    <animation
        :animated="checkedAnimationType" 
        :animated-one="animatedOne"
        :animated-one-enter-fn="animatedOneEnterFn"
        :animated-one-over-fn="animatedOneOverFn"
    >
    </animation><br/>

    <t-animation
        :t-style="{
        enter: {
            time: '0.5s',
            animationType: 'linear',
            from: {
                opacity: 0
            },
            to: {
                opacity: 1
            }
        },
        leave: {
            time: '1s',
            animationType: 'linear',
            from: {
                opacity: 1
            },
            to: {
                opacity: 0
            }
        }
        }"
        :init-style = "{
            opacity: 0,
            transition: 'opacity linear 0.2s'
        }"
        :t-switch="checkedAnimationType"
        :t-animation-event="tAnimationType"
    >
        <img src="static/logo.png" alt="logo">
    </t-animation>
</template>
<script>
import { Animation, TAnimation, SwitchComponent } from 'vo-ui'
export default {
    data() {
        return {
            checkedType: true,
            checkedAnimationType: true, // 动画组件是否全部 开始播放
            animatedOne: -1, // 动画组件是否无线循环
            tAnimationType: 'enter', // 动画是进入(enter)  还是  离开(leave)
        };
    },
    components: {
        Animation, TAnimation, SwitchComponent
    },
    methods: {
        // 初始化给的 开关数据
        switchInitData(e) {
            this.checkedType = e
        },
        // 动画事件
        switchAnimationChange(e) {
            this.checkedAnimationType = !e;
        },
        switchInitDataAnim(e) {
            this.checkedAnimationType = e
        },
        // 鼠标移入 某个动画元素
        animatedOneEnterFn(e) {
            this.animatedOne = e
        },
        // 鼠标移除 某个动画元素关闭动画
        animatedOneOverFn() {
            this.animatedOne = -1
        }
    }
};
</script>
```
:::

> ## 开关配置

| 名称        | 说明          
| ------------- |:-------------|
| switchAnimationChange     | 开关事件 |
| switchInitDataAnim      | 初始化开关状态，是否打开 |
| checkedAnimationType | 开关数据 |



> ## 动画默认

| 名称        | 说明          
| ------------- |:-------------|
| checkedAnimationType | 动画是否开始 |
| animatedOne | -1动画组件是否无线循环 |
| animatedOneEnterFn | 事件， 鼠标移入 某个动画元素 |
| animatedOneOverFn | 事件， 鼠标移除 某个动画元素关闭动画 |



> ## 动画可配置

| 名称        | 说明          
| ------------- |:-------------|
| :t-style | 给动画创建样式，必填 |
| :t-style  >  enter | 进入， 非必填|
| :t-style  >  leave | 离开， 非必填 |
| :init-style | 初始化动画样式设置 |
| :t-switch | 动画开关 |
| :t-animation-event | 动画是进入(enter)  还是  离开(leave) |