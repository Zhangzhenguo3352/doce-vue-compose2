// THIS FILE IS ONLY FOR IDE ENTRY CHECKING NOT FOR REAL USAGE

console.warn('VUX: 如果你看到这一行，说明 vux-loader 配置有问题或者代码书写规范的原因导致无法解析成按需引入组件，会导致打包体积过大。请升级到最新版本 vux-loader，建议开启 eslint(standard)。')

import Loading from './src/components/loading/index.vue'
import Spinner from './src/components/spinner/index.vue'

import KtButton from './src/components/kt-button.vue'
import { Animation, TAnimation} from './examples/components/public-components/animation/index.js'

import ButtonComponent from './examples/components/pc-and-docs/button'
import GridComponent from './examples/components/public-components/grid'
import IconComponent from './examples/components/pc-and-docs/icon'
import { xInput, lInput, TopTitleInput } from './examples/components/pc-and-docs/input/index.js'
import { XCheckbox, CheckboxGroup} from './examples/components/pc-and-docs/checkbox'
import { Tabs, TabsItem } from './examples/components/public-components/button-tab/index.js'
import Card from './examples/components/public-components/card'
import SwitchComponent from './examples/components/public-components/switch'
import {Modal} from './examples/components/public-components/modal'
import BackTop from './examples/components/public-components/back-top'
import {Category, Bar3d} from './examples/components/public-components/chart'
import Steps from './examples/components/public-components/steps'

export {
  KtButton,
  Loading,
  Spinner,
  Animation, TAnimation,
  ButtonComponent,
  GridComponent,
  IconComponent,
  xInput,
  lInput,
  TopTitleInput,
  XCheckbox, CheckboxGroup,
  Tabs, TabsItem,
  Card,
  SwitchComponent,
  Modal,
  BackTop,
  Category, Bar3d,
  Steps
}