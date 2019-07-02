<template>
    <div class="inline-block">
        <label>
            <input type="checkbox" class="ant-checkbox-input" value="" ref="input" v-model="codes" :id="randomNumber" @change="checkboxFn"/>
            <div class="checkbox-icon">
                <span class="icon iconfont"></span>
            </div>
            <label class="title" :for="randomNumber" ><slot></slot></label>
        </label>
    </div>
</template>

<script>
import uuidv4 from 'uuid/v4'
export default {
    name: 'XCheckbox',
    data() {
        return {
            randomNumber: uuidv4(),
            codes:[],
        }
    },
    props: {
        xchange: {
            type: Function,
            default: null
        },
        checked: {
            type: Boolean,
            default: false
        }

    },
    mounted() {
        this.codes = this.checked
        if (this.xchange) {
            this.xchange(this.codes);
        }
    },
    methods: {
        checkboxFn(e) {
            if (this.xchange) {
                this.xchange(e.target.checked);
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../../../../public-font-icon/fonts/iconfont.css';

label{
    position: relative;
    input{
        position: absolute;
        top: 1px;
        left: 1px;
        z-index: -1;
        opacity: 0;
    }
    label.title{
        color: rgba(0,0,0,0.65);
        font-size: 14px;
        line-height: unset;
        cursor: pointer;
    }
}
.checkbox-icon{
    height: 16px;
    width: 16px;
    border-radius: 2px;
    cursor: pointer;
    display: inline-block;
    .iconfont{
        background: #fff;
    }
    .iconfont:before{
        content: "\e682";
        color: #ccc;
    }
}
input:checked+.checkbox-icon { 
    .iconfont:before{
        content: "\e600";
        color: #16b53d;
    }
}

</style>