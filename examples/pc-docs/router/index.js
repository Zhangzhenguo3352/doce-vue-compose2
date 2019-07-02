import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/animation',
      name: 'animation',
      component: r => require.ensure([], () => r(require('../docs/animation.md'))),
    },
    {
      path: '/button',
      name: 'button',
      component: r => require.ensure([], () => r(require('../docs/button.md')))
    },
    {
      path: '/loding',
      name: 'loding',
      component: r => require.ensure([], () => r(require('../docs/loding.md')))
    },
    {
      path: '/spinner',
      name: 'spinner',
      component: r => require.ensure([], () => r(require('../docs/spinner.md')))
    },
    {
      path: '/grid',
      name: 'grid',
      component: r => require.ensure([], () => r(require('../docs/grid.md')))
    },
    {
      path: '/icon',
      name: 'icon',
      component: r => require.ensure([], () => r(require('../docs/icon.md')))
    },
    {
      path: '/input',
      name: 'input',
      component: r => require.ensure([], () => r(require('../docs/input.md')))
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: r => require.ensure([], () => r(require('../docs/checkbox.md')))
    },
    {
      path: '/tab',
      name: 'tab',
      component: r => require.ensure([], () => r(require('../docs/tab.md')))
    },
    {
      path: '/card',
      name: 'card',
      component: r => require.ensure([], () => r(require('../docs/card.md')))
    },
    {
      path: '/switch',
      name: 'switch',
      component: r => require.ensure([], () => r(require('../docs/switch.md')))
    },
    {
      path: '/modal',
      name: 'modal',
      component: r => require.ensure([], () => r(require('../docs/modal.md')))
    },
    {
      path: '/back-top',
      name: 'back-top',
      component: r => require.ensure([], () => r(require('../docs/back-top.md')))
    },
    {
      path: '/chart',
      name: 'chart',
      component: r => require.ensure([], () => r(require('../docs/chart.md')))
    },
    {
      path: '/steps',
      name: 'steps',
      component: r => require.ensure([], () => r(require('../docs/steps.md')))
    },
    {
      path: '*',
      name: 'home',
      component: r => require.ensure([], () => r(require('../docs/home.md')))
    }
  ]
})
