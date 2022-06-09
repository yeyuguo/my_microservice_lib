
import { InterfaceDataApiResult } from '@/types'


type CODETYPE = {
  codeSuccess?: number
  codeError?: number
  codeUnusual?: number  // 业务异常 code，例如登陆code
}


interface SETDATASETINTERFACE {
  success():InterfaceDataApiResult;
  error():InterfaceDataApiResult;
}

const CODECONST:CODETYPE = {
  codeSuccess: 200,
  codeError: 0,
  codeUnusual: 400,
}
/**
 * 设置返回的数据格式
 * TODO 更改为 Class 类实现，并提供单例
 * TODO 废弃
 * @param {string} - 数据属性 - data - [data={status,error:'',code}]
 * @param {number} [status] 无 status 字段直接删除 dataset 
 * @returns {string} json - json 字符串
 * @example
 * setDatset({error:'错误拉',code:404}) // "{"code":404,"status":0,"error":"错误拉"}"
 * setDatset({error:null,dataset:'hehe'}) // "{"code":200,"status":1,"dataset":"hehe"}"
 * setDatset({error:'err',dataset:null}) // "{"code":200,"status":0,"error":"err"}"
 */
export function setDataset (
  data: InterfaceDataApiResult | {dataset: any} | string, 
  message: string
):string {
  const result = data
  // 类型 InterfaceDataApiResult
  if((<InterfaceDataApiResult>data).dataset) {
    // if(data.status > 0) {
    //   return setDataset.success(data.dataset, data.message)
    // }else{
    //   return setDataset.error(data.message)
    // }
    // todo
    return ''
  }else{
    // 非类型 InterfaceDataApiResult 
    return setDataset.success(data, message)
  }
}

setDataset.success = function(data: string|any, message:string):string {
  let result = {
    code: CODECONST.codeSuccess,
    status: 0,
    dataset: data,
    message
  }
  return this.toJson(result)
}

setDataset.error = function (message: string):string {
  let result = {
    code: CODECONST.codeError,
    status: 0,
    message
  }
  return this.toJson(result)
}

setDataset.toJson = function(data:object):string {
  return JSON.stringify(data)
}


 



// TODO 测试
export class SetDataset {
  private CODECONST: CODETYPE // 不能让外部和子类调用
  constructor(codeDict: CODETYPE ) {
    this.CODECONST = codeDict || CODECONST
    
  }
  protected toJson(data:object):string {
    return JSON.stringify(data)
  }  
  success(data: string|any, message:string):string {
    let result = {
      code: this.CODECONST.codeSuccess,
      dataset: data,
      message
    }
    return this.toJson(result)
  }
  unusual(data: string|any, message:string):string {
    let result = {
      code: this.CODECONST.codeUnusual,
      dataset: data,
      message
    }
    return this.toJson(result)
  }
  error(message: string):string {
    let result = {
      code: this.CODECONST.codeError,
      message
    }
    return this.toJson(result)
  }
  
}