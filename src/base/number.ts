import { curry } from './fns'




/**
 * 价格截断 展示两位小数
 * 1. 整数展示两位小数
 * 2. 小数四舍五入
 * 3. TODO 无法转换成正常数字时 展示什么
 * 位运算符  https://www.jianshu.com/p/d2a8e5b9774e
 * IEEE754-2008 https://juejin.im/post/6844903834356023303
 * @param price
 * @param fractionDigits
 * @public
 */
 export function priceFix(price: number | string, fractionDigits = 2) {
  return (~~(+price * 10 ** fractionDigits).toPrecision(12) / 10 ** fractionDigits).toFixed(
    fractionDigits
  )
}




/** 计算中/英的长度, 包括标点符号, 中文算2个, 英文算1个
 * @param {String} data
 * @returns Number
 */
 export function countLenChar(data:string) {
  const trim = function(data:string) {
    // +表示匹配一次或多次，|表示或者，\s和\u00A0匹配空白字符，/^以……开头，$以……结尾，/g全局匹配,/i忽略大小写
    return (data || '').replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, '')
  }
  // 去除字符串的左右两边空格
  const _str = trim(data)
  const length = _str.length
  // 如果字符串长度为零，返回零
  if (!length) {
    return 0
  }
  // 匹配中文，match返回包含中文的数组
  const chinese = _str.match(/[\u4e00-\u9fa5]/g)
  // 计算字符个数
  return length + (chinese ? chinese.length : 0)
}


/*获取文本的长度，2个英文算一个长度
*/
export function countLenWord(str: string): number {
  var realLength: number = 0,
    len = str.length,
    charCode = -1,
    i;
  for (i = 0; i < len; i++) {
    charCode = str.charCodeAt(i);
    /*12288为全角空格，12289为全角句号，12290为全角句号，另外65248到65373区间的为中文全角符号*/
    if (
      (charCode >= 0 && charCode <= 128) ||
      (charCode >= 65248 && charCode <= 65373) ||
      charCode == 12288 ||
      charCode == 12289 ||
      charCode == 12290
    ) {
      realLength += 0.5;
    } else {
      realLength += 1;
    }
  }
  return Math.round(realLength);
}





/** 随机数的所有处理 
 * 参考地址
 * https://www.jianshu.com/p/755bc48467f1
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
export class random {
  constructor() {}

  /** 包含生成范围随机数 [min, max]
   * random: [0, 1)
   * @param {number} min 包含
   * @param {number} max 包含
   * @return {number}
  */
  getRangeRandomIntEqual(min:number, max:number):number {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
  }
  getIntRangeRandomIntNotEqual(min:number, max:number):number {
      return Math.floor(Math.random() * ((max-1) - (min+1))) + (min+1)
  }
  /** 生成范围随机数, [min, max) 
   * random: [0, 1)
   * @param {number} min 包含
   * @param {number} max 不包含
   * @return {number}
  */
  getRangeRandomLeftEqual(min:number, max:number):number {
      return min + (max - min) * Math.random()
  }
  
}


/** 生成范围随机数, min, max, type
* random: [0, 1)
* @param {number} min 包含 
* @param {number} max 不包含
* @param {string} type 类型  equal/notEqual/equalLeft
* @return {number}
*/

function _getRangeRandom(min:number, max:number, type: string):number {
  const instance = new random()
  switch(type) {
      case 'equal':
          return instance.getRangeRandomIntEqual(min, max)
          break;
      case 'notEqual':
          return instance.getIntRangeRandomIntNotEqual(min, max)
          break;
      case 'leftEqual':
          return instance.getRangeRandomLeftEqual(min, max)
          break;
  }
}

export const getRangeRandom = curry(_getRangeRandom, 3)