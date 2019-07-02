<template>
    <div>

      

     

      <!-- LazyLoad 懒加载组件  start-->
      <coms title="LazyLoad 懒加载组件">
        <lazy-load/>
      </coms>
      <!-- LazyLoad  end -->

      
    </div>
</template>
<script>
import Coms from './coms'

import ButtonComponent from '../../../components/pc-and-docs/button'
// import GridComponent from '../../../components/public-components/grid'
import IconComponent from '../../../components/pc-and-docs/icon'
import { xInput, lInput, TopTitleInput } from '../../../components/pc-and-docs/input'
// import { XCheckbox} from '../../../components/pc-and-docs/checkbox'
// import Tabs from '../../../components/public-components/button-tab/index.js'
import { Animation, TAnimation} from '../../../components/public-components/animation/index.js'
import Card from '../../../components/public-components/card'
import SwitchComponent from '../../../components/public-components/switch'
import BackTop from '../../../components/public-components/back-top'
import { Category, Bar3d } from '../../../components/public-components/chart/index.js'
import {bar3dData} from '../../../components/data'

import Steps from '../../../components/public-components/steps'
import { Modal } from '../../../components/public-components/modal/index.js'
import MaskComponent from '../../../components/public-components/mask'
import LazyLoad from '../../../components/public-components/lazy-load'
export default {
    name: 'checkbox',
    data() {
      return {
        listdata: ['cols','cols','cols','cols','cols','cols','cols','cols','cols'],
        cols: 4,
        iscods: true,  // true 代表是 pc-docs 文档工程中使用的
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
        checkedType: true,
        checkedAnimationType: true, // 动画组件是否全部 开始播放
        animatedOne: -1, // 动画组件是否无线循环
        tAnimationType: 'enter', // 动画是进入(enter)  还是  离开(leave),
        showOneselfTop: false, // true 使用自己定义的
        topSize: 100,
        title: '某个需求的柱状图',
        xAxisData: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
        seriesData: [{ // 2d 柱状图的 销量数据
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }],
        bar3dData,  // 给3d 图的数据
        items: [ // 步骤条组件
          {
            num: '一',
            text: '测试阶段1'
          },
          {
            num: '二',
            text: '测试阶段2'
          },
          {
            num: '三',
            text: '测试阶段3'
          }
        ],
        index: 0, // 步骤条开始时所在的位置

        showModal: false
      }
    },
    components: {
      Coms,
      ButtonComponent,
      // GridComponent,
      IconComponent,
      xInput,
      lInput,
      TopTitleInput,
      // XCheckbox,
      // CheckboxGroup: XCheckbox.CheckboxGroup,
      // Tabs,
      // TabsItem: Tabs.TabsItem,
      Animation,
      TAnimation,
      Card,
      SwitchComponent,
      BackTop,
      Category, // 2d 柱状图
      Bar3d, // 3d 柱状图
      Steps,  // 步骤条组价
      Modal,
      MaskComponent,
      LazyLoad, // 懒加载组件
      
    },
    methods: {
		xonChange(e) {
			this.checkboxType = e
		},
		// 初始化 数也放在它的身上
		xonChangeC(type, e) {
			console.log('e', e)
			let checkoutNumber = `checkout00${type}`
			this[checkoutNumber] = e.codes
		},
		tabChangeFn() {

		},
		// switch 开关事件
		switchChange(e) {
			this.checkedType = !e
		},
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
		},

		// 步骤条事件
		next () {
			if (this.index < 2) {
				this.index += 1
			} else {
				this.index = 0
			}
		},

		selectModal() {
			this.showModal = !this.showModal
		},
		onOk() { // modal 确定
			console.log('modal 确定')
			setTimeout(() => {
				this.showModal = false
			}, 1000)
		},
		onCancelfn() { // 关闭 || 取消modal 组件
			this.showModal = false
		}

    }
}
</script>

