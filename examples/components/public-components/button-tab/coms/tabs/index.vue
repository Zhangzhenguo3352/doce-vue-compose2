<template>
    <div class="vux-tab-wrap" :class="barPosition === 'top' ? 'vux-tab-bar-top' : ''">
        <div class="vux-tab-container">
            <div 
                class="vux-tab" 
                :class="[{'vux-tab-no-animate': animate},{ scrollable }]"
                ref="nav">
                <slot></slot>
                <div
                    class="vux-tab-ink-bar"
                    :class="barClass"
                    :style="barStyle">
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import { parentMinxin } from '../mixins'
export default {
    name: 'Tabs',
    mixins: [parentMinxin],
    data() {
        return {
            direction: 'forward',
            right: '100%',
            hasReady: false
        }
    },
    props: {
        lineWidth: {
            type: Number,
            default: 3
        },
        defaultKey: Number,
        height: Number,
        scrollThreshold: {
            type: Number,
            default: 4
        },
        
        barPosition: {
            type: String,
            default: 'bottom',
            validator (val) {
                return ['bottom', 'top'].indexOf(val) !== -1
            }
        },
        xchang: Function
    },
    mounted() {
        // this.updateIndex((i) => {
        //     console.log('this.index', i)
        // })
        this.$nextTick(() => {
            setTimeout(() => {
                this.hasReady = true
                this.currentIndex = this.defaultKey 
            }, 0)
        })
    },
    computed: {
        barLeft () {
            if (this.hasReady) {
                const nav = this.$refs.nav
                const count = this.scrollable ? (nav.offsetWidth / this.$children[this.currentIndex || 0].$el.getBoundingClientRect().width) : this.number
                return `${this.currentIndex * (100 / count)}%`
            }
        },
        barRight () {
            if (this.hasReady) {
                const nav = this.$refs.nav
                const count = this.scrollable ? (nav.offsetWidth / this.$children[this.currentIndex || 0].$el.getBoundingClientRect().width) : this.number
                return `${(count - this.currentIndex - 1) * (100 / count)}%`
            }
        },
        barClass () {
            return {
                'vux-tab-ink-bar-transition-forward': this.direction === 'forward',
                'vux-tab-ink-bar-transition-backward': this.direction === 'backward'
            }
        },
        scrollable () {
            return this.number > this.scrollThreshold
        },
        // end
        barStyle () {
            
            const commonStyle = {
                left: this.barLeft,
                right: this.barRight,
                display: 'block',
                height: this.lineWidth + 'px',
                transition: !this.hasReady ? 'none' : null
            }
            
            if (!this.customBarWidth) {
                commonStyle.background = this.barActiveColor || this.activeColor
            } else {
                commonStyle.background = 'transparent' // when=prop:custom-bar-width
            }
            return commonStyle
        },
    },
    watch: {
        currentIndex (newIndex, oldIndex) {
            this.direction = newIndex > oldIndex ? 'forward' : 'backward'
            if(this.xchang) {
                this.xchang(newIndex, oldIndex)
            }
            this.hasReady && this.scrollToActiveTab()
        }
    },
    methods: {
        scrollToActiveTab () {
            if (!this.scrollable || !this.$children || !this.$children.length) {
                return
            }
            const currentIndexTab = this.$children[this.currentIndex].$el
            let count = 0
            // scroll animation
            const step = () => {
                const scrollDuration = 15
                const nav = this.$refs.nav
                nav.scrollLeft += (currentIndexTab.offsetLeft - (nav.offsetWidth - currentIndexTab.offsetWidth) / 2 - nav.scrollLeft) / scrollDuration
                if (++count < scrollDuration) {
                    window.requestAnimationFrame(step)
                }
            }
            window.requestAnimationFrame(step)
        }
    }

}
</script>

<style lang="less">
.t-button-group {
    display: flex;
    position: relative;
}
.vux-tab-wrap {
    position: relative;
    padding-top: 44px;
}

.vux-tab-container {
    height: 44px;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
}
@prefixClass: vux-tab;
@easing-in-out: cubic-bezier(0.35, 0, 0.25, 1);
@effect-duration: .3s;

.@{prefixClass} {

  &-ink-bar {
    position: absolute;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: red;
    text-align: center;

    &-transition-forward {
      transition: right @effect-duration @easing-in-out,
      left @effect-duration @easing-in-out @effect-duration * 0.3;
    }
    &-transition-backward {
      transition: right @effect-duration @easing-in-out @effect-duration * 0.3,
      left @effect-duration @easing-in-out;
    }
  }

}
.vux-tab-ink-bar {
  bottom: 0px;
  position: absolute;
}
.vux-tab {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    background-color: #fff;
    height: 44px;
    position: relative;
}
.scrollable {
  overflow-y: hidden;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 17px;
  box-sizing: content-box;
}

.scrollable::-webkit-scrollbar {
  display: none;
}

.scrollable .vux-tab-ink-bar {
  bottom: 17px;
  position: absolute;
}

.scrollable .vux-tab-item {
  flex: 0 0 22%!important;
}
</style>
