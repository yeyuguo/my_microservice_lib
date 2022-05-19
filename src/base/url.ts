import { InterfaceObject } from "@/types";

/**
 * 获取url中的参数
 * @param {*} url
 * @param {*} key
 */
export function getParam<T>(url: string, key: string): T {
  let reg = new RegExp(`[?&]${key}=([^&#]+)`);
  let res: any | null[] = reg.exec(url);
  return res && res[1] ? res[1] : "";
}

/**
 * object转成 url query值
 * @param {*} obj
 * @param {*} prefix
 */
export function toQuery(obj: InterfaceObject): string {
  return Object.keys(obj)
    .reduce(
      (pre, cur) =>
        obj[cur] === undefined ? pre : `${pre}&${cur}=${obj[cur]}`,
      ""
    )
    .slice(1);
}

/** 序列化请求体 */
export function serialize(obj: { [i: number | string | symbol]: any }): string {
  let res = [];
  for (let i in obj) {
    res.push(`${i}=${encodeURIComponent(obj[i])}`);
  }
  return res.join("&");
}

/**
 * 添加script
 * @param url 请求的url
 * @param callback 请求成功后的callback
 */
export function loadScript(url: string, callback: () => {}) {
  try {
    let script:any = document.createElement("script");
    if (script.readyState) {
      // IE
      script.onreadystatechange = function () {
        if (
          script.readyState === "loaded" ||
          script.readyState === "complete"
        ) {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      // 其他浏览器
      script.onload = function () {
        callback();
      };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  } catch (error) {
    console.log("error: ", error);
  }
}




/** 不刷新页面，清除参数
 * todo 应用场景： 登陆回来有标识，需要删除url参数
 */