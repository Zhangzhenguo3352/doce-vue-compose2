<template>
  <div class="inline-block">
    <transition name="vux-dialog">
        <div class="modal" v-if="show">
            <div class="content">
                
                <div class="header" v-if="titles">
                    <div class="title-box">
                        <p>{{titles}}</p>
                    </div>
                    <div class="close" @click="onCancel"><icon-component type="guanbi"></icon-component></div>
                </div>
                <div class="middle" v-if="content">
                    {{content}}
                </div>
                <div class="middle" v-if="!content">
                    <slot></slot>
                </div>
                <div class="footer" v-if="footer">
                    <button-component @click.native="onOk">确认</button-component>
                    <button-component @click.native="onCancel">取消</button-component>   
                </div>
            </div>
        </div>
    </transition>
  </div>
</template>

<script>
import ButtonComponent from '../../../pc-and-docs/button'
import IconComponent from '../../../pc-and-docs/icon'
export default {
    name: 'MaskComponent',
    data() {
        return {
            Bok: true,
            html: ''
        }
    },
    components: {
        ButtonComponent,
        IconComponent
    },
    props: {
        show: {
            type: Boolean,
            default: false
        },
        titles: {
            type: [String, Boolean],
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        footer: {
            type: Boolean,
            default: true
        },
        onCancelfn: Function,
        onOkfn: Function
    },
    methods: {
        onOk() {
            
            if(this.onOkfn) {
                this.onOkfn()
            }
        },
        onCancel() {
            console.log('onCancel3', this.Bok )
            if(this.onCancelfn) {
                this.onCancelfn()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../../public-style/transition-opacity.scss';
@import '../../../public-style/transition-scale.scss';
.modal{
    width: 50%;
    padding: 20px;
    max-height: 50%;
    position: fixed;
    left:0;
    top: -20%;
    right: 0;
    bottom: 0%;
    margin:auto;
    z-index: 199999999;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.content{
    background-color: #fff;
    width: 70%;
    margin:20px;
    border-radius: 4px;    overflow: hidden;
    .header{
        position: relative;
        .title-box{
            padding: 16px 24px;
            color: rgba(0,0,0,0.65);
            background: #fff;
            border-bottom: 1px solid #e8e8e8;
            border-radius: 4px 4px 0 0;
            p{
                margin: 0;
                color: rgba(0,0,0,0.85);
                font-weight: 500;
                font-size: 16px;
                line-height: 22px;
                word-wrap: break-word;
            }
        }
    }
    .middle{
        padding: 24px;
        font-size: 14px;
        line-height: 1.5;
        word-wrap: break-word;
    }
    .footer{
        padding: 10px 16px;
        text-align: right;
        background: transparent;
        border-top: 1px solid #e8e8e8;
        border-radius: 0 0 4px 4px;
    }
    .close span{
        position: absolute;
        width: 30px;
        top: 0;
        right:0;
        bottom: 0;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: 300;
        padding-right: 6px;
    }
}


</style>
