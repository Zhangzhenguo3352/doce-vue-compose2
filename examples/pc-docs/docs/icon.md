# icon 组件

> 基础用法

:::demo ### 通过 `字体图标库` 实现 

```html
<template>
    <grid-component>
        <div class="col-1 have-border"><icon-component type="xiangzuo"></icon-component></div>                    
        <div class="col-1 have-border"><icon-component type="xiangyou"></icon-component></div>                    
        <div class="col-1 have-border"><icon-component type="xiangyoujiantou"></icon-component></div>                    
        <div class="col-1 have-border"><icon-component type="xiangzuojiantou"></icon-component></div>                    
        <div class="col-1 have-border"><icon-component type="guanbi1"></icon-component></div>                    
        <div class="col-1 have-border"><icon-component type="paiming"></icon-component></div>                    
        <div class="col-1 have-border"><icon-component type="wode-"></icon-component></div>                    
        <div class="col-1 have-border"><icon-component type="xuanchuan"></icon-component></div>                    
        <div class="col-1 have-border"><icon-component type="shouye-"></icon-component></div>                    
        <div class="col-1 have-border"><icon-component type="shanchu"></icon-component></div>                    
        <div class="col-1 have-border"><icon-component type="shuaxin"></icon-component></div>                    
        <div class="col-1 have-border"><icon-component type="yingyongguanli"></icon-component></div> 

        <icon-component :type="item" :key="index" v-for="(item, index) in data" class="col-1 have-border"></icon-component>
    </grid-component>
</template>
<script>
import { GridComponent, IconComponent } from 'vo-ui'
export default {
    components: {
        GridComponent, IconComponent
    },
    data() {
        return {
            data: [
                "yanzhengma-","fuxuankuang","shezhi-tongyong","tianjia-tongyong-2","icon-comment","weishoucang-","aixin",
                "jingyin","zixun-","rili","icon-role","shezhi-tongyong","tuihuobaozhang","huodongyouxian","tianmaopaidui",
                "shengriliwu","jisutuikuan","kefuyouxian","chaozhijifen","tianmaohaoquan","liebiao","chongzhi","leqi","bingxiang",
                "kafei","yaopin","hanbao","kouhong","bangqiu","Txu","nvbao","shafa","naiping","tushu","shouji1","xiai","gouwucheman",
                "huangguan","chuzu","zuanshi","guanbi3","jingxuanshichang","zhubaoshipin","jiayongdianqi","shipin","muyingwanju",
                "shumashouji","xiebao","nvzhuangneiyi","huwaiyundong","huazhuangpin","qichepeijian","jiafangjiashi","jujia","yiyaobaojian",
                "bangzhuzhongxin","lab","like","location","banknote","jian","jia","bubble","bulb","calendar","camera","clip","clock","cloud","cup",
                "data","diamond","display","eye","paixu","xiangzuo1","xiangshang","xiangyou1","duihua","jian1","jia1","cuowu","zhengque",
                "liebiao2","xiangshang1","xiangxia","gouwucheman1","gouwuchekong","yingyongzhongxin","juzuo","juzhong","hengpai","zuoshang",
                "xiangshang2","youshang","xiangxia1","youxia","xiangzuo2","4fanhuidingbucheng","fanhuidingbu","fanhuidingbu1","shengdanfanhuidingbu",
                "fanhuidingbu5","fanhuidingbu11","control101","001caozuo_fanhuidingbu","fanhuidingbu6","fanhuidingbu7"
            ]
        };
    }
};
</script>
```

:::

> ## 字体图标配置

| 名称        | 说明          
| ------------- |:-------------|
| type="xxx"| 显现不同图标 |
```
"yanzhengma-","fuxuankuang","shezhi-tongyong","tianjia-tongyong-2","icon-comment","weishoucang-","aixin",
"jingyin","zixun-","rili","icon-role","shezhi-tongyong","tuihuobaozhang","huodongyouxian","tianmaopaidui",
"shengriliwu","jisutuikuan","kefuyouxian","chaozhijifen","tianmaohaoquan","liebiao","chongzhi","leqi","bingxiang",
"kafei","yaopin","hanbao","kouhong","bangqiu","Txu","nvbao","shafa","naiping","tushu","shouji1","xiai","gouwucheman",
"huangguan","chuzu","zuanshi","guanbi3","jingxuanshichang","zhubaoshipin","jiayongdianqi","shipin","muyingwanju",
"shumashouji","xiebao","nvzhuangneiyi","huwaiyundong","huazhuangpin","qichepeijian","jiafangjiashi","jujia","yiyaobaojian",
"bangzhuzhongxin","lab","like","location","banknote","jian","jia","bubble","bulb","calendar","camera","clip","clock","cloud","cup",
"data","diamond","display","eye","paixu","xiangzuo1","xiangshang","xiangyou1","duihua","jian1","jia1","cuowu","zhengque",
"liebiao2","xiangshang1","xiangxia","gouwucheman1","gouwuchekong","yingyongzhongxin","juzuo","juzhong","hengpai","zuoshang",
"xiangshang2","youshang","xiangxia1","youxia","xiangzuo2","4fanhuidingbucheng","fanhuidingbu","fanhuidingbu1","shengdanfanhuidingbu",
"fanhuidingbu5","fanhuidingbu11","control101","001caozuo_fanhuidingbu","fanhuidingbu6","fanhuidingbu7"
```


