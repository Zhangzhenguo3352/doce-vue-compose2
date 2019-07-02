<template>
    <span class="icon iconfont" :class="`icon-${type}`" v-if="type"></span>
</template>
<script>
export default {
    name: 'IconComponent',
    props: {
        type: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../public-font-icon/fonts/iconfont.css';
.iconfont{
    font-size: 30px;
}
</style>