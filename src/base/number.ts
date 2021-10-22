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