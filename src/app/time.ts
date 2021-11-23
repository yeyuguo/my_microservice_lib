import { formatTime, getLatest } from '@/base/time'
import { interfaceTimeResult } from '@/types'


/** 返回一天的中文时间段
 * @param {Date} time 日期实例
 */
export function getDayZone(time: Date): string|undefined {
  let hour=time.getHours();
  if(hour<6){
      return "凌晨";
  }
  if(hour<11){
      return "上午";
  }
  if(hour<13){
      return "中午";
  }
  if(hour<16){
      return "下午";
  }
  if(hour<18){
      return "傍晚";
  }
  if(hour<24){
      return "晚上";
  }
}


export function getLatestHour(num: number, format: string):interfaceTimeResult{
  const result = getLatest(num, 'h+')
  // todo 代码复用
  const { start, end } = result
  if(format) {
    result.startString = formatTime(start, format)
    result.endString = formatTime(end, format)
  }
  return result
}

export function getLatestDay(num: number, format: string):interfaceTimeResult{
  const result = getLatest(num, 'd+')
  // todo 代码复用
  const { start, end } = result
  if(format) {
    result.startString = formatTime(start, format)
    result.endString = formatTime(end, format)
  }
  return result
}

export function getLatestMonth(num: number, format: string):interfaceTimeResult{
  const result = getLatest(num, 'm+')
  // todo 代码复用
  const { start, end } = result
  if(format) {
    result.startString = formatTime(start, format)
    result.endString = formatTime(end, format)
  }
  return result
}


export function getLatestYear(num: number, format: string):interfaceTimeResult{
  const result = getLatest(num, 'y+')
  // todo 代码复用
  const { start, end } = result
  if(format) {
    result.startString = formatTime(start, format)
    result.endString = formatTime(end, format)
  }
  return result
}


