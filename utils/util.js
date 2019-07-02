export function isObject(obj) {
    return typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length
}

export function noScrollbar() { //不包含滚动条
    return { 
        width : document.documentElement.clientWidth, 
        height: document.documentElement.clientHeight 
    }
}

export function haveScrollbar() { //包含滚动条
    if(window.innerWidth){ 
        return { 
            width : window.innerWidth, 
            height: window.innerHeight 
        } 
    }else if(document.documentElement.offsetWidth == document.documentElement.clientWidth){ 
        return { 
            width : document.documentElement.offsetWidth, 
            height: document.documentElement.offsetHeight 
        } 
    }else{ 
        return { 
            width : document.documentElement.clientWidth + getScrollWith(), 
            height: document.documentElement.clientHeight + getScrollWith() 
        } 
    }
}

// 锁住屏幕
export function lockClient() {
    let scrollWidthSize = haveScrollbar().width - noScrollbar().width;
    var browserName=navigator.userAgent.toLowerCase();  
    if(/msie/i.test(browserName) && !/opera/.test(browserName)) {
        document.getElementsByTagName('body')[0].style.cssText = `padding-right:${scrollWidthSize}px;overflow: hidden`
    } else {
        document.getElementsByTagName('body')[0].setAttribute('style', `padding-right:${scrollWidthSize}px;overflow: hidden` )
    }
}

// 解开屏幕
export function untieClient() {
    var browserName=navigator.userAgent.toLowerCase();  
    if(/msie/i.test(browserName) && !/opera/.test(browserName)) {
        document.getElementsByTagName('body')[0].style.cssText = ``
    } else {
        document.getElementsByTagName('body')[0].setAttribute('style', `` )
    }
}
