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

