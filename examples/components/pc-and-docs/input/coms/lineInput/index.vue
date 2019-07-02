<template>
    <div>
        <form id="edit-form" action="">
            <div id="title" class="field-container">
                <label class="field-title" v-if="labelTitle">{{labelTitle}}</label>
                <div class="input-container">
                    <input id="title-field" :placeholder="placeholder" class="field-input" type="text" autocomplete="off" tabindex="0" v-model="data">
                    <div class="underline"></div>
                </div>
            </div>
        </form> 
    </div>
</template>

<script>
export default {
    name: 'lInput',
    data() {
        return {
            data: ''
        }
    },
    props: {
        labelTitle: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: '请输入内容'
        },
        lInput: Function
    },
    watch: {
        data(e) {
            if(this.lInput) {
                this.lInput(e)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    body {
        overflow: hidden;
    }
    
    .input-container {
        position: relative;
    }
    
    input {
        background-color: rgb(241, 243, 244);
        border: none;
        caret-color: rgb(26, 115, 232);
        color: rgb(32, 33, 36);
        font-family: 'Roboto', arial, sans-serif;
        font-size: 13px;
        height: 32px;
        line-height: 24px;
        outline: none;
        padding-inline-end: 8px;
        padding-inline-start: 8px;
        width: calc(100% - 16px);
        border-bottom: 1px solid #ccc;
    }
    
    input::placeholder {
        // color: red;
    }
    
    .underline {
        border-bottom: 2px solid rgb(26, 115, 232);
        bottom: 0;
        box-sizing: border-box;
        left: 0;
        margin: auto;
        opacity: 0;
        position: absolute;
        right: 0;
        transition: opacity 120ms ease-out, width 0ms linear 180ms;
        width: 0;
    }
    
    input:focus+.underline {
        opacity: 1;
        transition: width 180ms ease-out, opacity 120ms ease-in;
        width: 100%;
    }
    
    .field-title.focused {
        color: rgb(26, 115, 232);
    }
</style>