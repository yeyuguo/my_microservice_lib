import { InterfaceObject  } from "@/types"



/**
 * 获取url中的参数
 * @param {*} url
 * @param {*} key
 */
export function getParam<T>(url:string, key:string):T {
  let reg = new RegExp(`[?&]${key}=([^&#]+)`)
  let res:any|null[] = reg.exec(url)
  return res && res[1] ? res[1] : ''
}


/**
 * object转query值
 * @param {*} obj
 * @param {*} prefix
 */
 export function toQuery(obj:InterfaceObject):string {
  return Object.keys(obj)
    .reduce(
      (pre, cur) =>
        obj[cur] === undefined ? pre : `${pre}&${cur}=${obj[cur]}`,
      ''
    )
    .slice(1)
}