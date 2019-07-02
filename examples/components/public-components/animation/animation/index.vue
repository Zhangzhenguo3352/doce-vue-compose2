<template>
    <div class="inline-block">
         <!-- @mouseleave="() => animatedOneOver()" -->
        <grid-component :iscods="iscods" >
              <Card 
                class="col-2 have-border" 
                v-for="(item, i) in animations"
                :key="i"
                :class="`${item} ${animated || (animatedOne === i) ? 'animated' : ''} ${animated || (animatedOne === i) ? 'infinite' : ''}` "
                @mouseenter.native="() => animatedOneEnterFn(i)"
                @mouseleave.native="() => animatedOneOver()"
                >
                {{item}}
            </Card> 
        </grid-component>
    </div>
</template>

<script>

import GridComponent from '../../grid'
import Card from '../../card'
export default {
    name: 'Animation',
    data() {
        return {
            iscods: false,  // true 代表是 pc-docs 文档工程中使用的
            animations: [ 
                'bounce', 'flash', 'rubberBand', 'shake', 'headShake',
                // 'swing', 'tada', 'wobble', 'jello', 'bounceIn', 'bounceInDown',
                // 'bounceInLeft', 'bounceInRight', 'bounceOut', 'bounceOutDown', 'bounceOutLeft',
                // 'bounceOutLeft', 'bounceOutUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft',
                // 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeOut',
                // 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig',
                // 'fadeOutUp', 'fadeOutUpBig', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY',
                // 'lightSpeedIn', 'lightSpeedOut', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft',
                // 'rotateInUpRight', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight',
                // 'hinge', 'jackInTheBox', 'rollIn', 'rollOut','zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp',
                // 'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp', 'slideInDown',
                // 'slideInLeft', 'slideInRight', 'slideInUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'
            ]
        }
    },
    props: {
        animated: {
            type: Boolean,
            default: false,
        },
        animatedOne: {
            type: Number,
            default: -1
        },
        animatedOneEnterFn: {
            type: Function,
            default: null
        },
        animatedOneOverFn: {
            type: Function,
            default: null
        }
    },
    components: {
        GridComponent,
        Card,
        
    },

    methods: {
        animatedOneEnte(i) {
            if(this.animatedOneEnterFn) {
                this.animatedOneEnterFn(i)
            }
        },
        animatedOneOver() {
            if(this.animatedOneOverFn) {
                this.animatedOneOverFn()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./animate.css"
</style>