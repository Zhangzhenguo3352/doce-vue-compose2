<template>
    <form id="a">
        <label class="field-title" v-if="labelTitle">{{labelTitle}}</label>
        <input title="message" :placeholder="placeholder" v-model="data" />
    </form>
    
</template>

<script>
export default {
    name: 'xInput',
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
        xInput: Function
    },
    watch: {
        data(e) {
            if(this.xInput) {
                this.xInput(e)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
input {
    background-color: rgb(241, 243, 244);
    border: none;
    border-radius: 4px;
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
    border: 1px solid #ccc;
}
</style>