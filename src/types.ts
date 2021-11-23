/** 公共对象类型 */
export type InterfaceObject = {
  [s: string|number|symbol]: any
}


// 接口的返回数据格式
export type InterfaceDataApiResult = {
  code: number | null,
  status: number | null,
  message: string | null | undefined,
  dataset: any
}

/** 验证对象 key 是否有效 */
export function isValidKey(key: string | number | symbol, object: object): key is keyof typeof object {
  return key in object;
}



export interface interfaceTimeResult {
  start: number;
  end: number;
  startString?: string;
  endString?: string;
}

// todo 科里化的函数扩展