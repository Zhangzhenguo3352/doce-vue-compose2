<template>
    <a href="javascript:" 
        class="vux-tab-item"
        :style="style"
        :class="[currentSelected ? activeClass : '', {
            'vux-tab-selected': currentSelected,
            'vux-tab-disabled': disabled 
        }]"
        @click="onItemClick"
    >
        <slot></slot>
    </a>
</template>

<script>
import { childMixin } from '../mixins'
export default {
    name: 'TabsItem',
    mixins: [childMixin],
    props: {
        
        activeClass: String,
        disabled: Boolean,
        defaultActiveKey:Number,
        badgeBackground: {
        type: String,
            default: '#f74c31'
        },
        badgeColor: {
            type: String,
            default: '#fff'
        },
        badgeLabel: String
    },
    computed: {
        // classes () {
        //     return {
        //         'vux-button-group-current': this.currentIndex === this.$parent.currentIndex,
        //         'vux-button-tab-item-first': this.currentIndex === 0,
        //         'vux-button-tab-item-last': this.currentIndex === this.$parent.$children.length - 1,
        //         'vux-button-tab-item-middle': this.currentIndex > 0 && this.currentIndex !== this.$parent.$children.length - 1
        //     }
        // },
        // style () {
        //     if (this.$parent.height) {
        //         return {
        //             height: `${this.$parent.height}px`,
        //             lineHeight: `${this.$parent.height}px`
        //         }
        //     }
        // }
        style () {
            return {
                borderWidth: this.$parent.lineWidth + 'px',
                borderColor: this.$parent.activeColor,
                color: this.currentSelected ? this.$parent.activeColor : this.disabled ? this.$parent.disabledColor : this.$parent.defaultColor,
                border: this.$parent.animate ? 'none' : 'auto'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.button-tab-item{
        flex: 1;
    width: 100%;
    height: 100%;
}
.t-button-group > a.button-tab-item-first {
    border-top-left-radius: 32px;
    border-bottom-left-radius: 32px;
}
.vux-tab.scrollable  .vux-tab-item {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 22%;
    flex: 0 0 22%;
}
.vux-tab.scrollable .vux-tab-item {
    box-sizing: border-box;
    background: -webkit-linear-gradient(top, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) bottom left no-repeat;
    background: linear-gradient(180deg, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) bottom left no-repeat;
    background-size: 100% 1px;
    font-size: 14px;
    text-align: center;
    line-height: 44px;
    color: #666;
}

.vux-tab .vux-tab-item {
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: -webkit-linear-gradient(top, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) bottom left no-repeat;
    background: linear-gradient(180deg, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) bottom left no-repeat;
    background-size: 100% 1px;
    font-size: 14px;
    text-align: center;
    line-height: 44px;
    color: #666;
}
// .t-button-group > a {
//     display: block;
//     position: relative;
//     -webkit-box-flex: 1;
//     -webkit-flex: 1;
//     flex: 1;
//     width: 100%;
//     height: 30px;
//     padding: 0;
//     font-size: 14px;
//     line-height: 31px;
//     text-align: center;
//     color: #999;
//     white-space: nowrap;
//     background: #fdfdfd;
//     -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
// }
</style>
