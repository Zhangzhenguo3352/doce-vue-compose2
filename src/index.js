// 注册组件的地方

import KtButton from './components/kt-button.vue'
import Loading from './components/loading/index.vue'
import Spinner from './components/spinner/index.vue'
import { Animation, TAnimation} from '../examples/components/public-components/animation/index.js'

import ButtonComponent from '../examples/components/pc-and-docs/button'
import GridComponent from '../examples/components/public-components/grid'
import IconComponent from '../examples/components/pc-and-docs/icon'
import { xInput, lInput, TopTitleInput } from '../examples/components/pc-and-docs/input/index.js'
import { XCheckbox, CheckboxGroup} from '../examples/components/pc-and-docs/checkbox'
import { Tabs, TabsItem } from '../examples/components/public-components/button-tab/index.js'
import Card from '../examples/components/public-components/card'
import SwitchComponent from '../examples/components/public-components/switch'
import {Modal} from '../examples/components/public-components/modal'
import BackTop from '../examples/components/public-components/back-top'
import {Category, Bar3d} from '../examples/components/public-components/chart'
import Steps from '../examples/components/public-components/steps'

const components = [
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

]

export default function (Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};
