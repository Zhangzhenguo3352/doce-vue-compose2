# modal 组件

> 基础用法

:::demo ### 通过 `transition ` 方式实现动画

```html
<template>
    <div>
        <div class="inline-block">
            <button-component 
                @click.native="selectModal"
            >
                模态框默认
            </button-component>
            <modal 
                :show-modal="showModal" 
                :on-cancelfn="onCancelfn" 
                :on-okfn="onOk"
            >
            
                我是内容部分, 确认后1秒后关闭
            </modal>
        </div>
        <div class="inline-block">
            <button-component 
                @click.native="selectModal2"
            >
                模态框自定义
            </button-component>
            <modal 
                :show-modal="showModal2" 
                :on-cancelfn="onCancelfn2" 
                :on-okfn="onOk2"
                :footer="true"
                titles="我是标题"
                content="我是内容部分, 确认后1秒后关闭"
            >
            </modal>
        </div>

    </div>
</template>
<script>
import { ButtonComponent, Modal } from 'vo-ui'
export default {
    components: {
        ButtonComponent, Modal
    },
    data() {
      return {
        showModal: false,
        showModal2: false,
      }
    },
    methods: {
		selectModal() {
			this.showModal = !this.showModal
		},
		selectModal2() {
			this.showModal2 = !this.showModal2
		},
		onOk() { // modal 确定
			setTimeout(() => {
				this.showModal = false
			}, 1000)
		},
		onOk2() { // modal 确定
			setTimeout(() => {
				this.showModal2 = false
			}, 1000)
		},
		onCancelfn() { // 关闭 || 取消modal 组件
			this.showModal = false
		},
		onCancelfn2() { // 关闭 || 取消modal 组件
			this.showModal2 = false
		}

    }
}
</script>
<style lang="scss" scoped>
.inline-block{
    display: inline-block;
}
</style>

```

:::


> ## 开关配置

| 名称        | 说明          
| ------------- |:-------------|
| @click.native | switch 开关事件 |
| :show-modal | 模态框是否显现 |
| :on-cancelfn | 取消事件 |
| :on-okfn | 确认事件 |
| :footer | 底部确认和取消是否显现，默认显现 |
| titles | title 是否显现，不显现传false, 或传递要显现的内容 |
| content | 内容部分 |