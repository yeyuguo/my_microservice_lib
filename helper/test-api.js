//   document.getElementById('root').innerHTML = " This is a browser example where and api is called to transalate 'One' to '1' \n Results: wordtonum('One') === " + webpackNumbers.wordtonum('One');
console.log('utils: ', utils);
const { utilBase, utilApp } = utils

function printObj(object) {
  return JSON.stringify(object, null, 2)
}

console.log(' --------------------------------- 打印 uitlBase ----------- ')
console.log('utilBase.toQuery({a:1, b:2, c: "http://baidu.com"}): ', utilBase.toQuery({a:1, b:2, c: "http://baidu.com"}));
console.log('utilBase.getParam("www.baidu.com?a=1&b=2&c=http://baidu.com", "c"): ', utilBase.getParam("www.baidu.com?a=1&b=2&c=http://baidu.com", "c"));
console.log('utilBase.priceFix(32.234242): ', utilBase.priceFix(32.234242));
console.log('utilBase.priceFix(32.234242, 4): ', utilBase.priceFix(32.234242, 4));
utilBase.Cookie.set('a', '2')
utilBase.Cookie.set('b', 'https://www.baidu.com')
console.log('utilBase.Cookie.get("a"): ', utilBase.Cookie.get("a"));
console.log('utils.utilBase.Cookie.getObject(): ', printObj(utils.utilBase.Cookie.getObject()));
console.log('utilBase.copy("哈哈"): 请单击浏览器事件');
console.log('utilBase.countLenChar("abcde,fg"): ', utilBase.countLenChar("abcd.efg"));
console.log('utilBase.countLenWord("abcde,fg"): ', utilBase.countLenWord("abcd.efg"));
console.log('utilBase.countLenChar("我爱你,中国"): ', utilBase.countLenChar("我爱你,中国"));
console.log('utilBase.countLenWord("我爱你,中国"): ', utilBase.countLenWord("我爱你,中国"));
console.log('utilBase.getSoftName(): ', utilBase.getSoftName());
console.log('utilBase.serialize({a:1,b:2,c:"https://www.baidu.com"}): ', utilBase.serialize({a:1,b:2,c:"https://www.baidu.com"}));
console.log('utilBase.formatTime(1635000832622)', utilBase.formatTime(1635000832622));
console.log('utilBase.formatTime(1635000832622, "yyyy-mm-dd hh:MM:ss")', utilBase.formatTime(1635000832622, "yyyy-mm-dd hh:MM:ss"));
console.log('utilBase.formatTime(1602295200000, "yyyy/mm/dd hh/MM/ss")', utilBase.formatTime(1602295200000, "yyyy/mm/dd hh/MM/ss"));
console.log('utilBase.getLatest(10, "d+"): ', printObj(utilBase.getLatest(10, "d+")));
console.log('utilBase.getLatest(10, "m+"): ', printObj(utilBase.getLatest(10, "m+")));
console.log('utilBase.getLatest(10, "y+"): ', printObj(utilBase.getLatest(10, "y+")));

console.log('utilBase.Add(0.1, 0.2): ', utilBase.Add(0.1, 0.2));
console.log('utilBase.Sub(0.1, 0.2): ', utilBase.Sub(0.1, 0.2));
console.log('utilBase.Mul(0.1, 0.2): ', utilBase.Mul(0.1, 0.2));
console.log('utilBase.Div(0.1, 0.2): ', utilBase.Div(0.1, 0.2));
console.log('utilBase.curry(Math.max, 3)(31,33,32): ', utilBase.curry(Math.max, 3)(31,33,32));
// 倒计时 start
// const ct = new utilBase.CountDown({end: new Date('2022-02-14 12:30'),interval: 1000, intervalFn})
const ct = new utilBase.CountDown({
  isPrecision: true, 
  end: +new Date('2022-02-14 17:40'),
  interval: 1000, 
  intervalFn
})
function intervalFn(time){
  console.log('time: ', printObj(time));
}
ct.start()
console.log('ct.isExpired(): ', ct.isExpired());

const ct2 = new utilBase.CountDown({isPrecision: true, end: +new Date('2022-02-14 14:38'),interval: 2000, intervalFn: (time)=>{
  console.log('time2: ', printObj(time));
}})
// ct2.start()

// 倒计时 end

// utilBase.loadScript('https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.core.min.js', function(){
//   console.log('_.isEmpty: ', _.isEmpty(0));
// })
console.log(' --------------------------------- 打印 utilApp ----------- ')
console.log('utilApp: ', utilApp);

console.log('utilApp.getLatestDay(10, "yyyy-mm-dd hh:MM:ss"): ', printObj(utilApp.getLatestDay(10, "yyyy-mm-dd hh:MM:ss")));
console.log('utilApp.getLatestMonth(10, "yyyy-mm-dd hh:MM:ss"): ', printObj(utilApp.getLatestMonth(10, "yyyy-mm-dd hh:MM:ss")));
console.log('utilApp.getLatestYear(10, "yyyy-mm-dd hh:MM:ss"): ', printObj(utilApp.getLatestYear(10, "yyyy-mm-dd hh:MM:ss")));


