
/** 修复不能按需加载
 * todo: 只要引用, 就会被打包
 */
export * as utilBase from './base/index'
export * as utilApp from './app/index'



// 测试代码
export function test() {
  console.log('运行成功2:  hello world!')
}
export function print() {
  function check(name: string) {
    return 'hello, ' + name
  }
  console.log('check("world"): ', check('world'))
}
