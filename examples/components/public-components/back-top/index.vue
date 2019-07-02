
<template>
    <div>
        <div id="goTop">
            <div class="goTop" v-show="goTopShow" @click="goTop" >
                <div class="icon-top" v-if="!showOneselfTop">
                    <icon-component type="fanhuidingbu1" ></icon-component>
                </div>
                <slot v-if="showOneselfTop"></slot>
            </div>
        </div>
    </div>
</template>

<script>
// https://www.cnblogs.com/li-you/p/7275239.html
import IconComponent from '../../pc-and-docs/icon'
export default {
    name: 'BackTop',
    components: {
        IconComponent
    },
    data() {
        return {
            scrollTop: '',
            goTopShow:false,
        }
    },
    props: {
        showOneselfTop: {
            type: Boolean,
            default: true
        },
        topSize: {
            type: Number,
            default: 200
        }
    },
    mounted() {
        this.getInitScrollTop()
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed(){
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        isMaxTopFn() {
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if(this.scrollTop>=this.topSize) {
                return true
            } else {
                return false
            }
        },
        getInitScrollTop() {
            if(this.isMaxTopFn()) {
                this.goTopShow=true
            } else {
                this.goTopShow=false
            }
        },
        handleScroll () {
            this.getInitScrollTop()
        },
        goTop(){
          let timer=null,_that=this;
          cancelAnimationFrame(timer)
          timer=requestAnimationFrame(function fn(){
            if(_that.scrollTop>0){
              _that.scrollTop-=50;
              document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop;
              timer=requestAnimationFrame(fn)
            }else {
              cancelAnimationFrame(timer);
              _that.goTopShow=false;
            }
          })
        }
    }
}
</script>

<style lang="scss" scoped>
.goTop{
    position: fixed;
    right: 20px;
    bottom: 50px;
    z-index: 99999999;
}
.icon-top{
    color: #fff;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background:rgba(0,0,0,.65);
    border-radius: 8px;
    display:flex;
    /*主轴居中对齐*/
    justify-content: center;
    /*侧轴居中对齐*/    
    align-items: center;  
}
.icon-top:hover{
    border-radius: 8px;
    background:rgba(0,0,0,.70);
}
</style>