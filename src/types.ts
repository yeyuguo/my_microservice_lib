/** 公共对象类型 */
export type InterfaceObject = {
  [s: string]: any
}


// 接口的返回数据格式
export type InterfaceDataApiResult = {
  code: number | null,
  status: number | null,
  message: string | null | undefined,
  dataset: any
}