<template>
  <div id="app" style="height:100%">
    <div class="vux-drawer">
      <div class="main-">
        <!-- 头部开始 -->
        <header-component></header-component>
        <!-- 头部结束 -->
        <div style="padding-top: 46px;padding-bottom: 55px;">
          <transition
            name="vux-pop-in"
          >
            <router-view class="router-view"></router-view>
          </transition>
        </div>
        
      </div>
    </div>

  </div>

</template>

<script>
import HeaderComponent from '../components/h5/headerComponent'
export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>

<style lass="sass">
@import "./style/base.scss";
@import "./style/index.scss";

.router-view {
  width: 100%;
  top: 46px;
}

.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active
{
  /* 提前告诉浏览器 启动 GPU 加速 */
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  top: 46px;
  position: absolute;
  /* 元素不面向屏幕时是否可见 */
  backface-visibility: hidden;
  /* 景深  值越小越  近 */
  perspective: 1000;
}
/* 这个是 返回页面的动画 */
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

/* 这个是 进入页面的动画 */
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
