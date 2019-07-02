# checkbox 组件

> 基础用法

:::demo ### 通过 `input 中 type="checkbox"` 方式实现

```html
<template>
    <x-checkbox :xchange="xonChange" :checked="false">点击文字就是点击了 复选框</x-checkbox> {{checkboxType}} <br/>
    <checkbox-group 
        :checkboxgroupdata="checkboxgroupdata" 
        :checkboxselected="['Apple','Apple', 'Orange', 'Apple', 'Pear']"
        :selectarray="(e) => xonChangeC(1, e)"
        :xchange="(e) => xonChangeC(1, e)">
    </checkbox-group>  <span>{{checkout001}}</span> <br/>

    <checkbox-group 
        :checkboxgroupdata="checkObj" 
        :checkboxselected="[{ label: 'Pear', value: 'Pear' }]" 
        :selectarray="(e) => xonChangeC(2, e)"
        :xchange="(e) => xonChangeC(2, e)">
    </checkbox-group> <span>{{checkout002}}</span> <br/>
    <checkbox-group 
        :checkboxgroupdata="checkObj" 
        :checkboxselected="['Apple', 'Pear']" 
        :disabled="true" 
        :selectarray="(e) => xonChangeC(3, e)"
        :xchange="(e) => xonChangeC(3, e)">
    </checkbox-group> <span>{{checkout003}}</span> <br/>
    <checkbox-group 
        :checkboxgroupdata="checkObj" 
        :checkboxselected="['Apple', 'Pear']" 
        :selectarray="(e) => xonChangeC(4, e)"
        :xchange="(e) => xonChangeC(4, e)">
    </checkbox-group> <span>{{checkout004}}</span> <br/>
</template>
<script>
import { XCheckbox, CheckboxGroup } from 'vo-ui'
export default {
    components: {
        XCheckbox, CheckboxGroup
    },
    data() {
        return {
            checkboxType: '',
            checkboxgroupdata: ['Apple', 'Pear', 'Orange'],
            checkObj: [
            { label: 'Apple', value: 'Apple' ,  disabled: true},
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange' }
            ],
            checkout001: [],
            checkout002: [],
            checkout003: [],
            checkout004: [],
        };
    },
    methods: {
        xonChange(e) {
            this.checkboxType = e
        },
        // 初始化 数据也放在它的身上
        xonChangeC(type, e) {
            console.log('e', e)
            let checkoutNumber = `checkout00${type}`
            this[checkoutNumber] = e.codes
        }
    }
};
</script>
```


:::



> ## 简单复选框 配置

| 名称        | 说明          
| ------------- |:-------------|
| :xchange| 复选框事件 事件 |
| :checked| 是否选中 |


> ## 复杂复选框 配置， 支持数组中传  字符串、对象

| 名称        | 说明          
| ------------- |:-------------|
| :xchange| 复选框事件 事件 |
| :checkboxgroupdata| 给复选框数据 |
| :checkboxselected| 默认选中项，必须和传递的数据 完全相同 |
| :selectarray| 回显，初始化 数据放在它的身上 |
| :xchange| 给变复选框事件 |