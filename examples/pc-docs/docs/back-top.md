
# BackTop 返回顶部组件

> 基础用法

:::demo ### 通过 `比较高度距离` 显示或隐藏， 通过 `定时器减减` 减到顶部 关闭定时器 方式实现

```html
<template>
    <back-top 
        :show-oneself-top="showOneselfTop" 
        :top-size="topSize"
    >
        <div class="center">
			<icon-component type="fanhuidingbu1" ></icon-component>
			<p>自定义</p>
		<div>
    </back-top>
</template>
<script>
import { BackTop, IconComponent } from 'vo-ui'
export default {
    data() {
      return {
        showOneselfTop: false, // true 使用自己定义的
        topSize: 0, // 距离顶部多大时显现返回按钮
      }
	},
	components: {
        BackTop, IconComponent
    },
}
</script>
<style scoped>
.center{
    display: flex;
    justify-content: center;
    align-items: center;
	flex-direction: column;
}
</style>

```

:::

> ## 开关配置

| 名称        | 说明          
| ------------- |:-------------|
| :show-oneself-top | true 使用定义, 需要在里面自己添加节点 |
| :top-size | 距离顶部多大时显现返回按钮 |