import { isValidKey, InterfaceObject } from '@/types'



/*Cookie 相关 */
export const Cookie = {
  get: function (name:string):string |null{
    var arr,
      reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if ((arr = document.cookie.match(reg))) {
      return unescape(arr[2]);
    } else {
      return null;
    }
  },
  // document.cookie 设置完成不一定会返回值
  set: function (
    name: string,
    value: string,
    time: string,
    domain: string,
    path: string
  ): void {
    var str = name + "=" + encodeURIComponent(value);
    if (time) {
      var date = new Date(time).toUTCString();
      str += ";expires=" + date;
    }
    str = domain ? str + ";domain=" + domain : str;
    str = path ? str + ";path=" + path : str;
    document.cookie = str;
  },
  //删除一个cookie，必须域名和path都跟已有的cookie相同
  del: function (name:string, domain:string, path:string):void {
    var date = new Date("1970-01-01");
    var str = name + "=null;expires=" + date.toUTCString();
    str = domain ? str + ";domain=" + domain : str;
    str = path ? str + ";path=" + path : str;
    document.cookie = str;
  },
  // 返回cookie 的序列化
  getObject: function (): InterfaceObject{
    var arr = document.cookie.split(";");
    console.log('arr: ', arr);
    var jsonStr = "{";
    for (var i = 0; i < arr.length; i++) {
      var cookie = arr[i].split("=");
      jsonStr +=
        '"' +
        cookie[0].replace(/\s+/g, "") +
        '":"' +
        // 修复 value 里有字符有双引号之类
        encodeURIComponent(cookie[1]) +
        '",';
    }
    jsonStr = jsonStr.slice(0, -1);
    jsonStr += "}";
    return JSON.parse(jsonStr);
  },
};

// todo localStorage.get

// todo localStorage.set
