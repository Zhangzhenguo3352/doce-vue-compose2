<template>
    <div>
        <div 
            class="inline-block style style2"
            :class="style">
            
            <slot></slot>
        </div>
    </div>
</template>

<script>
// import x from ''
import uuidv4 from 'uuid/v4'
export default {
    name: 'TAnimation',
    data() {
        return {
            tStyleObject: {},
            style: '',
            _uuidv4: '',
            initLook: true
        }
    },
    props: {
        tStyle: {
            type: [Object, String],
            default: {}
        },
        initStyle: Object,
        tSwitch: {
            type: Boolean,
            default: false
        },
        tAnimationEvent: {
            type: String,
            default: 'enter'
        }
    },
    mounted() {
        
        this._uuidv4 = uuidv4()
    },
    watch: {
        tSwitch() {
            
            if(this.tSwitch ) {
                this.showAnimation('enter')
            } else {
                if(this.initLook) return this.initLook = false
                this.showAnimation('leave')
            }
        }
    },
    methods: {
        // 渲染 动画逻辑
        showAnimation(type) {
            let arr = Object.keys(this.tStyle)
            // var childList = document.querySelectorAll('.styleclass')
            // console.log(222, childList.length)
            // for(var i=0,len=childList.length;i<len;i++){
            //     document.querySelectorAll('.styleclass').removeChild();
            // }
            if(!arr.length) {
                this.tStyleObject = {}
            } else {
                const {time='1s', animationType= "linear"} = this.tStyle[this.tAnimationEvent]
                this.tStyleObject = this.replaceStr(this.createData(this.tStyle)())
                var head = document.getElementsByTagName('head')[0];
                var style = document.createElement('style');
                style.innerText = this.setStyleDataFn({tAnimationEvent: type, time, animationType});
                style.setAttribute("type", "text/css");
                style.setAttribute("class", "styleclass");
                head.append(style)
            }
        },

        // 递归创建空元素
        createData(data) {
            let obj = [data]
            let arr = []
            
            return () => {
                for(let i = 0 ; i < obj.length; i++) {
                    const item = obj[i]
                    const { enter, initStyle, leave } = item;
                    if(enter) {
                        for(let j in enter) {
                            if((j !== 'time') && (j !== 'animationType')) {
                                const _uuidv4 = `a${this._uuidv4}enter`
                                console.log('enter',enter.from)
                                
                                arr.push(this.assembleData(j ,enter[j] ,enter, _uuidv4))
                            }
                        }
                    }
                    if(leave) {
                        for(let j in leave) {
                            if((j !== 'time') && (j !== 'animationType')) {
                                const _uuidv4 = `a${this._uuidv4}leave`
                                arr.push(this.assembleData(j ,enter[j] ,leave, _uuidv4))    
                            }
                        }
                    }
                }
                return arr
            }
        },
        // 转成字符串
        replaceStr(str) {
            return str.join().replace(/\}\,/g, '}').replace(/(<br\s?\/?>)+/gi, '$1').replace(/(<br\s*\/?>)|(&nbsp;)|\s/gi,'').replace(/@keyframes/g, '@keyframes ').replace(/aaaaa/g, 'aaaaa ');
        },
        // 组装数据
        assembleData(i, d, data, uuidv4) {
            const key = Object.keys(data)
            let json = {}
            // data && delete data.time
            // data && delete data.animationType
            
            let str = ''
            str = `@keyframes ${uuidv4} {
                    0% {
                        ${this.strToJson(data.from)}
                    }
                    100% {
                        ${this.strToJson(data.to)}
                    }
                }`
            return str
        },
       
        // 组装 style 数据
        setStyleDataFn({tAnimationEvent, time, animationType}) {
            let style2 = (this.initStyle && Object.keys(this.initStyle).length) ? this.strToJson(this.initStyle) : null;
            let str = ''
            if(style2) {
                str = `${this.tStyleObject}.style{animation: a${this._uuidv4}${tAnimationEvent} ${time} ${animationType} 0s 1 alternate forwards}.style2{${style2}}`
            } else {
                str = `${this.tStyleObject}.style{animation: a${this._uuidv4}${tAnimationEvent} ${time} ${animationType} 1 alternate forwards}`
            }
            return str
        },
        // 对象转字符串
        strToJson(obj) {
            let str = ''
            for(let key in obj) {
                str+= `${key}:${obj[key]};`
            }
            return str
        },

        // 对 class 名字做处理
        classFn(str, setStyle) {
            var reg = /.style{[\s\S]*}/
            let newStr = ''
            let sss = ''
            return () => {
                newStr = str.replace(reg, (a,b) => {
                    let reg = /{[\s\S]*}/;
                    
                    return a.replace(reg, (x, y) => {
                        
                    var xxx = x.replace(/{/, '').replace(/}/, '')
                        
                        return `{${xxx};${setStyle}}`
                    })
                })
                return newStr
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>