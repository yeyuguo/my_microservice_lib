import { interfaceTimeResult } from '@/types'


/**时间格式化 
 * @param {number} timestamp 
 * @param {string} format 默认格式 'yyyy-mm-dd hh:MM:ss'
*/
export function formatTime(timestamp:number|string, format: string='yyyy-mm-dd hh:MM:ss'): string {
  timestamp = timestamp
  if(!timestamp) {
    return '----';
  }
  if ((timestamp + '').indexOf('.') >= 0) {
    timestamp = (timestamp + '').replace(/\./g,'/');
  }
  const date = new Date(+timestamp);
  const o:{[key:string]: any} = {
    'm+':date.getMonth() +1,
    'd+':date.getDate(),
    'h+':date.getHours(),
    'M+':date.getMinutes(),
    's+':date.getSeconds(),
    'q+':Math.floor((date.getMonth() +3) /3),
    S:date.getMilliseconds(),
  };
  let formatString = format;
  if (/(y+)/.test(format)) {
    formatString = format.replace(RegExp.$1,(`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
  }
  Object.keys(o).forEach((key) => {
    if (new RegExp(`(${key})`).test(format)) {
        formatString = formatString.replace(
          RegExp.$1,RegExp.$1.length === 1 
          ? o[key] 
          :(`00${o[key]}`).substr(`${o[key]}`.length)
        );
    }
  });
  return formatString;

}


/** 返回最近时间
 * @param {string} num  数量
 * @param {string} type  y+/m+/d+/h+/M+
 */
export function getLatest(num: number, type: string,):interfaceTimeResult{
  const nowTimestamp = +new Date()
  const MINS = 60 * 1000 // 分钟毫秒
  const HOUR = 60 * MINS // 小时毫秒
  const DAY = 60 * HOUR // 天毫秒
  const types = {
    'M+':MINS,
    'h+':HOUR,
    'd+':DAY,
    'm+':null,
    'y+':null,
  }
  let sumTimestapm:number = 0
  let startTimestamp = 0
  if(['M+', 'h+', 'd+'].includes(type)) {
    sumTimestapm = num * (<any>types)[type] 
    startTimestamp = nowTimestamp - sumTimestapm
  }else if(type === 'm+') {
    const _start = new Date()
    startTimestamp = _start.setMonth(_start.getMonth() - num)
  }else if(type === 'y+') {
    const _start = new Date()
    startTimestamp = (<any>_start).setYear(_start.getFullYear() - num)
  }
  return {
    start: startTimestamp,
    end: nowTimestamp
  }
}


// todo 最近 整天、整月、整年的计算
export function getLatestFull(){

}



interface countdown {
  time: {
    year:number,month: number,day: number,hour: number,minute: number,second:number,
  }
  isStop: Boolean
}
interface time {
  year:number,month: number,day: number,hour: number,minute: number,second:number,
}
/** 倒计时 
 * 需求: 1. 每秒状态; 2. 毫秒状态 3. 每多少时间执行函数; 4.获取当前倒计时是否停止;
 * 
*/
class CountDown {
  end: number;
  times: time;
  // times: time;
  constructor(end: number, format: string) {
    this.end = end
    this.times = {
      year: 0, month: 0, day: 0, hour: 0, minute: 0, second: 0
    }
  }
  /**
   * 倒计时计算 - 递归
   * 1. 可设置倒计时计算频率:   秒/毫秒/间隔时间
  */
  calculate() {
    const current = new Date()
  }
  // 获取公共时间差
  getTimeDiff() {}
  // 倒计时是否停止
  isStop() {
    return +new Date() >= this.end
  }
  // 是否过期
  isExpired() {
    return +new Date() > this.end
  }

  // todo 依赖注入解耦以下场景
  // 获取渲染字符
  getTimeDiffString(format:string) {}
  // 定时间隔执行
  runTaskInterval() {}
  // 定时器停止执行
  runTaskStop() {}

}
