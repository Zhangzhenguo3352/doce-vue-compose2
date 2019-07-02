<template>
  <div class="inline-block">
    <transition name="t-mask">
        <div class="mask" v-if="show"></div>
    </transition>
  </div>
</template>

<script>
import { lockClient, untieClient } from '../../../../utils/util'
export default {
    name: 'MaskComponent',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        show() {
            if(this.show) {
                lockClient()
            } else {
                untieClient()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../public-style/transition-opacity.scss';
.mask{
    width: 100vw;
    height: 100vh;
    background-color: rgba(142, 133, 133, .7);;
    position: fixed;
    left:0;
    top: 0;
    z-index: 99999999;
}


</style>
