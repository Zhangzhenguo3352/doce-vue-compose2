<template>
    <div class="checkboxGroup-box">
        <label v-for="(item, index) in checkboxgroupdata" :key="index" class="box-lay">
            <input type="checkbox" 
                class="ant-checkbox-input" 
                :ref="`${item}`" 
                :id="`${randomNumber}${index}`" 
                v-model="codes[index]"
                :disabled="disabled? true: (isObject(item)? JSON.stringify(item.disabled): false)"
                @change="(e) => checkboxFn(e, {item, index})"
            />
            <div class="checkbox-icon" :class="{'active':isClick ? codes[index] : checkedFn(item, index), 'opacity60': disabled? true: (isObject(item)? JSON.stringify(item.disabled): false)}" >
                <span class="icon iconfont"></span>
            </div>
            <label class="title" :for="`${randomNumber}${index}`" :class="{ 'opacity60': disabled ? true : (isObject(item)? JSON.stringify(item.disabled): false)}">{{isObject(item) ? item.value : item}}<slot></slot></label>
        </label>
    </div>
    
</template>

<script>
import uuidv4 from 'uuid/v4'
import { isObject } from '../../../../../../utils/util.js'
export default {
    name: 'CheckboxGroup',
    data() {
        return {
            randomNumber: uuidv4(),
            codes:[],
            checked: true,
            isObject,
            json: {},
            jsonAll: {},
            objectStr: {},
            arrAll: {},
            objectStrAll: {},
            submitObjectData: {},
            submitStringData: {},
            isClick: false
        }
    },
    props: {

        checkboxgroupdata: {
            type: [Array, Object],
            default: () => []
        },
        checkboxselected: {
            type: [Array, Object, String],
            default: () => []
        },
        disabled: {
            type: [Boolean],
            default: false
        },
        xchange: {
            type: Function,
            default: null
        },
         selectarray: { // 初始化组件选中了哪些数据
            type: Function,
            default: null
        },

    },
    mounted() {
        this.codes = Object.values(this.submitObjectData)
        if(this.selectarray) {
            this.selectarray({codes: this.codes.map(item => item? item: false), callbackData: this.propsToData()})
        }
    },
    methods: {
        checkboxFn(e, data) {
            const { item, index } = data
            this.isClick = true
            if (this.xchange) {
                let data = this.propsToData();
                data.item = item;
                data.index= index
                this.xchange({codes: this.codes.map(item => item? item: false), callbackData: this.propsToData()});
            }
        },

        // 给外界的数据
        propsToData() {
            let dataType = this.checkboxgroupdata && this.checkboxgroupdata[0];
            let type = this.checkboxselected && this.checkboxselected[0]
            let callbackD = ''
            if(dataType === 'string') {
                callbackD = this.arrAll
            } else if(isObject(dataType) && typeof(type) === 'string'){
                callbackD = this.objectStrAll
            } else {
                callbackD = this.jsonAll
            }
            
            return callbackD
        },
        // 默认项选中
        checkedFn(item,index) {
            
            let obj = this.checkboxselected;
            if(typeof(item) === 'string' ) {
                this.submitObjectData[index] = this.isArrayFn('string', index)
                return this.isArrayFn('string', index)
                
            } else if( isObject(item) ) {
                if(typeof(obj[0]) === 'string') {
                    this.submitObjectData[index] = this.isArrayFn('objectAndString', index)
                    return this.isArrayFn('objectAndString', index)
                } else {
                    this.submitObjectData[index] = this.isArrayFn('', index)
                    return this.isArrayFn('', index)
                }
            } else {
                throw new Error("传的类型不正确 'checkboxgroupdata'  期望是一个数组");
            }
            
        },
        dataTypeFn({dataType, A, B, index}) {
            return this.selectStringFn({dataType, A, B, index})
        },

        isArrayFn(dataType, index) {
            let selectNumber = this.checkboxselected; // 默认选中的元素
            let checkoutData = this.checkboxgroupdata; // 复选框数据
            if(selectNumber.length > checkoutData.length) { // 默认选中的元素大于   给的数据
                return this.dataTypeFn({dataType, A: selectNumber, B: checkoutData, index})
            } else { // 给的数据大于   要选中的
                return this.dataTypeFn({dataType, A: checkoutData, B: selectNumber, index})
            }
        },
        selectStringFn({dataType, A, B, index}) {
            let arr = []
            for(let i = 0; i < A.length; i++) {
                if( dataType === 'string') {
                    arr.push( A[i]=== B[i])
                    let obj = {
                        D: this.arrAll,
                        i,
                        A,
                        B,
                        index,
                        leftData: A[i],
                        rightData: B[i]
                    }
                    this.callbackData(obj)
                } else if(dataType === 'objectAndString') {
                    if(!this.objectStr[index]) {
                        this.objectStr[index] = (A[index] && A[index].value) === (B[i])
                        let obj = {
                            D: this.objectStrAll,
                            i,
                            A,
                            B,
                            index,
                            leftData: A[index] && A[index].value,
                            rightData: (B[i])
                        }
                        this.callbackData(obj)
                    }
                } else {
                    if(!this.json[index]) {
                        let obj = {
                            D: this.jsonAll,
                            i,
                            A,
                            B,
                            index,
                            leftData: A[index] && JSON.stringify(A[index]),
                            rightData: (B[i] && JSON.stringify(B[i]))
                        }
                        this.callbackData(obj)
                    }
                }
            }
            // console.log('data', this.jsonAll, index)
            if(dataType === 'string') {
                return arr[index]
            } else if(dataType === 'objectAndString'){
                return Object.values(this.objectStr)[index]
            } else {
                return Object.values(this.json)[index]
            }
        },
        // 组装要返回的数据
        callbackData({D, i, A, B, index, leftData, rightData}) {
            if(!D.rawData) D.rawData = {} // 原始数据
            if(!D.array) D.array = {} // 数组数据
            if(!D.matchData) D.matchData = {} // 要匹配的数据
            if(!D.index) D.index = {} // 要匹配的数据
            D.rawData[index] = leftData
            D.array[index] = leftData === rightData
            D.matchData[index] = rightData
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../../../../public-font-icon/fonts/iconfont.css';
.checkboxGroup-box{
    display: inline-block;
}
label.box-lay{
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
.checkbox-icon.active{
    .iconfont:before{
        content: "\e600";
        color: #16b53d;
    }
}
.opacity60{
    cursor: not-allowed!important;
    .iconfont:before{
        content: "\e682";
        color: rgba(150, 121, 96, 0.35)!important;
        background-color: rgba(216, 199, 199, 0.35)!important;
    }
}
input:checked+.checkbox-icon { 
    .iconfont:before{
        content: "\e600";
        color: #16b53d;
    }
}

</style>