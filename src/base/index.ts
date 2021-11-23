// base 入口文件

// 时间
export { formatTime, getLatest } from './time'

// url 相关
export { getParam, toQuery, serialize, loadScript } from './url'

// 数字类型
export { priceFix, countLenChar, countLenWord, getRangeRandom, random } from './number'

// 和本地存储相关
export { Cookie } from './local'

// 事件相关
export { copy, stopBubble, stopDefault, toExcel, toCSV } from './events'

// 用户信息相关
export { getSoftName } from './user'

// 请求相关处理

// js 原生封装
export { typeOf } from './js-tools'


// 算数
export { Add, Sub, Mul, Div} from './math'


// 函数式
export { curry } from './fns'