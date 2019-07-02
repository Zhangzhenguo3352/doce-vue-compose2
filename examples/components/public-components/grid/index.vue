<template>
    <div class="small-row" :class="{'interlacing-color': iscods}" ref="grid">
        <div class="have-border" 
            :class="`col-${cols}`" 
            v-for="(item, index) in listdata" 
            :key="index" 
            v-text="item"
        >
        <slot></slot>
        </div>                    
        <slot></slot>
    </div>    
</template>

<script>
export default {
    name: 'GridComponent',
    data() {
        return {
            index: -1,
            currentIndex: this.index,
            number: this.$children.length,
            itemWrapper: 0
        }
    },
    props: {
        listdata: Array,
        cols: { // 这个数据站几例
            type: Number,
            default: 1
        },
        iscods: { // 这个属性专门开发  文档时使用
            type: Boolean,
            default: false
        }

    },
    mounted() {
        if(this.iscods) { // 这些颜色是在 文档中 传递 参数 iscods="true" 时 使用的 
            setTimeout(() => {
                this.updateIndex()
            },20)
        }
    },
    methods: {
        //颜色对象
        getRandomColor(){
            this.r = Math.floor(Math.random()*255);
            this.g = Math.floor(Math.random()*255);
            this.b = Math.floor(Math.random()*255);
            return 'rgba('+ this.r +','+ this.g +','+ this.b +',0.8)';
        },
        updateIndex (callback) {
            
            var giveColor = document.querySelectorAll('.small-row > div');
            const randomColorOn = (giveColor) => {//参数1为获取的元素组，参数二为获取的颜色组
                for(var j = 0; j < giveColor.length; j++) {
                    giveColor[j].style.backgroundColor = this.getRandomColor();
                }
            }
            randomColorOn(giveColor);	
        
        }
    }
}
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;
    box-sizing: border-box;
}

.small-container{
    width: 100%;
}
.small-container,.small-row{
    box-sizing: border-box;
    color: #000;
}
.small-row::before,
.small-row::after{
    content: '';
    display: block;
    visibility: hidden;
    clear: both;
    zoom: 1;
}
[class*='col-']{
    float: left;
    padding: 1%;
}
.col-1{
    width: 8.33%;
}
.col-2{
    width: 16.66%;
}
.col-3{
    width: 25%;
}
.col-4{
    width: 33.33%;
}
.col-5{
    width: 41.66%;
}
.col-6{
    width: 50%;
}
.col-7{
    width: 58.33%;
}
.col-8{
    width: 66.66%;
}
.col-9{
    width: 75%;
}
.col-10{
    width: 83.33%;
}
.col-11{
    width: 91.66%;
}
.col-12{
    width: 100%;
}
</style>