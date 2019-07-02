<template>
    <div class="inline-block"> 
        <button type="button" role="switch" aria-checked="true" class="t-switch" :class="{'t-switch-checked': checkedType}" t-click-animating="false" @click="switchClick">
            <span class="t-switch-inner"></span>
            <div class="t-click-animating-node"></div>
        </button>
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: 'SwitchComponent',
    props: {
        checkedType: {
            type: Boolean,
            default: false
        },
        xchange: {
            type: Function,
            default: null
        },
        initData: {
            type: Function,
            default: null
        }
    },
    mounted() {
        if(this.initData) {
            this.initData(!this.checkedType)
        }
    },
    methods: {
        switchClick(e) {
            if(this.xchange) {
                this.xchange(this.checkedType)
            }
        }
    },
    // computed: {
    //     checkedtype() {
    //         return this.props.checkedtype
    //     }
    // }
}
</script>

<style lang="scss" scoped>

button, html [type="button"], [type="reset"], [type="submit"] {
    -webkit-appearance: button;
}
.t-switch-inner {
    color: #fff;
}
.t-switch-checked {
    background-color: #313653;
}
.t-switch {
    color: #000000;
    border-radius: 100px;
    border: 1px solid transparent;
    background-color: rgba(0, 0, 0, 0.25);
}
.t-switch-inner {
    display: block;
    margin-right: 6px;
    margin-left: 24px;
    color: #fff;
    font-size: 12px;
}
.t-switch {
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-varit: tabular-nums;
    line-height: 1.5;
    list-style: none;
    -webkit-font-feature-settings: 'tnum', "tnum";
    font-feature-settings: 'tnum', "tnum";
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    min-width: 44px;
    height: 22px;
    line-height: 20px;
    vertical-align: middle;
    background-color: rgba(0, 0, 0, 0.25);
    border: 1px solid transparent;
    border-radius: 100px;
    cursor: pointer;
    -webkit-transition: all 0.36s;
    transition: all 0.36s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
button {
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-align: start;
    font: 400 11px system-ui;
    outline:0 none !important;
}
[t-click-animating-without-extra-node]:after, .t-click-animating-node {
    border-radius: inherit;
    border: 0 solid #313653;
}
.t-layout, .t-layout * {
    box-sizing: border-box;
}
[t-click-animating-without-extra-node='true']::after, .t-click-animating-node {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    border-radius: inherit;
    box-shadow: 0 0 0 0 #1890ff;
    box-shadow: 0 0 0 0 #1890ff;
    box-shadow: 0 0 0 0 var(--td-wave-shadow-color);
    opacity: 0.2;
    -webkit-animation: fadeEffect 2s cubic-bezier(0.08, 0.82, 0.17, 1), waveEffect 0.4s cubic-bezier(0.08, 0.82, 0.17, 1);
    animation: fadeEffect 2s cubic-bezier(0.08, 0.82, 0.17, 1), waveEffect 0.4s cubic-bezier(0.08, 0.82, 0.17, 1);
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    content: '';
    pointer-events: none;
}

// 圆圈
.t-switch:after {
    box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
}
.t-switch-checked {
    background-color: #313653;
}
.t-switch-loading-icon, .t-switch:after {
    border-radius: 18px;
    background-color: #fff;
}
.t-switch-checked::after {
    left: 100%;
    margin-left: -1px;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
}
.t-switch-loading-icon, .t-switch::after {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 18px;
    height: 18px;
    background-color: #fff;
    border-radius: 18px;
    cursor: pointer;
    -webkit-transition: all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    transition: all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    content: ' ';
}
.t-switch-checked::after {
    left: 100%;
    margin-left: -1px;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
}
</style>