<template>
    <div class="ant-col gutter-row ant-col-md-6" style="padding-left: 7px; padding-right: 7px;">
        <div class="gutter-box">
            <div class="ant-card rubberBand ant-card-bordered">
                <div class="ant-card-body">
                    <div class="pa-m text-center">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Card',
    // props: {
    //     text: String
    // }
}
</script>

<style lang="scss" scoped>
.gutter-box {
    padding: 5px 0;
}
.ant-layout, .ant-layout * {
    box-sizing: border-box;
}
.ant-card-bordered {
    border: 1px solid #e8e8e8;
}
.ant-card {
    color: #000000;
    background: #fff;
    border-radius: 2px;
}
.ant-card {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    -webkit-font-feature-settings: 'tnum', "tnum";
    font-feature-settings: 'tnum', "tnum";
    position: relative;
    background: #fff;
    border-radius: 2px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}
.ant-card-body {
    padding: 24px;
    zoom: 1;
}
.ant-card-body::before, .ant-card-body::after {
    display: table;
    content: '';
}
*, *::before, *::after {
    box-sizing: border-box;
}
.pa-m {
    padding: 1rem !important;
}
.ant-layout, .ant-layout * {
    box-sizing: border-box;
}
h1, h2, h3, h4, h5, h6 {
    color: rgba(0, 0, 0, 0.85);
}
</style>