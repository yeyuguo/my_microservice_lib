//   document.getElementById('root').innerHTML = " This is a browser example where and api is called to transalate 'One' to '1' \n Results: wordtonum('One') === " + webpackNumbers.wordtonum('One');
console.log('utils: ', utils);
const { utilBase, uitlApp } = utils


console.log(' --------------------------------- 打印 uitlBase ----------- ')
console.log('utilBase.toQuery({a:1, b:2, c: "http://baidu.com"}): ', utilBase.toQuery({a:1, b:2, c: "http://baidu.com"}));
console.log('utilBase.getParam("www.baidu.com?a=1&b=2&c=http://baidu.com", "c"): ', utilBase.getParam("www.baidu.com?a=1&b=2&c=http://baidu.com", "c"));
console.log('utilBase.priceFix(32.234242): ', utilBase.priceFix(32.234242));
console.log('utilBase.priceFix(32.234242, 4): ', utilBase.priceFix(32.234242, 4));
document.cookie = "a=3"
console.log('utilBase.getCookie("a"): ', utilBase.getCookie("a"));
console.log('utilBase.copy("哈哈"): 请单击浏览器事件');

console.log(' --------------------------------- 打印 uitlApp ----------- ')