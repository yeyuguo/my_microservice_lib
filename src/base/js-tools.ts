import { isValidKey } from '@/types'

/**返回引用类型的具体类型 
 * 
*/
export function typeOf(obj:any): string|void {
  const toString = Object.prototype.toString;
  const map = {
      '[object Boolean]'  : 'boolean',
      '[object Number]'   : 'number',
      '[object String]'   : 'string',
      '[object Function]' : 'function',
      '[object Array]'    : 'array',
      '[object Date]'     : 'date',
      '[object RegExp]'   : 'regExp',
      '[object Undefined]': 'undefined',
      '[object Null]'     : 'null',
      '[object Object]'   : 'object',
  };
  const quoteType:string = toString.call(obj)
  if(isValidKey(quoteType, map)) {
    return  map[quoteType]
  }
}



/**是否空, 排除隐士转换
 * 
 */
export function isEmpty(data:any) {
  
}