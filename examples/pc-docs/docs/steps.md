# steps 步骤条组件

> 基础用法

:::demo ### 通过 进度 条加加的 方式实现

```html
<template>
    <div>
      <div><steps :items="items" :activeIndex='index'/></div>
      <br>
      <div><button-component @click.native="next">下一步</button-component></div>
    </div>
</template>
<script>
import { Steps } from 'vo-ui'
export default {
	components: {
        Steps
    },
	data() {
		return {
			items: [{num: '一',text: '测试阶段1'},{num: '二',text: '测试阶段2'},{num: '三',text: '测试阶段3'}],
			index: 0
		}
	},
	methods: {
		next () {
			if (this.index < 2) {
				this.index += 1
			} else {
				this.index = 0
			}
		},
	}
}
</script>
```


:::


> ## 开关配置

| 名称        | 说明          
| ------------- |:-------------|
| :items="items" | 步骤条数据 |
| :activeIndex | 当前在第几项 |