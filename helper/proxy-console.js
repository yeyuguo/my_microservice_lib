function documentStyle(result) {
  try{
    throw new Error()
  }catch(e) {
    // todo 代码执行位置
    console.warning('e: ', e);
    // const loc = e.stack.replace(/Error\n/).split(/\n/)[1].replace(/^\s+|\s+$/, "");
    // <div>(${loc})</div>
    if (!document) return;
    document.write(
      `<span style="color: aqua;">行号 ${(documentStyle.consoleIndex += 1)} ------ 自制打印机 -----------</span>
      <p>${result}</p>
      `
    );
  }
}
documentStyle.consoleIndex = 0;

//  简单工厂模式 - 创建对象
function createFactoryProxy(source, handler) {
  // todo 扩展成为单例
  const resultTmp = {};
  var proxyInst = new Proxy(source, {
    set(target, property, value, receiver) {
      // console.log('property: ', property);
      // const result = eval(`${value}`);
      if (Reflect.has(resultTmp, property)) {
        throw new Error("已经设置代理属性, 不能再次设置");
      } else {
        Reflect.defineProperty(resultTmp, property, {
          get() {
            if (typeof value === "function") {
              return new Proxy(value, {
                // 函数执行时, 做 try catch 处理
                apply(funTarget, context, arguemntsList) {
                  try {
                    if(['log', 'warning'].includes(property)) {
                      // let result = []
                      // arguemntsList.forEach(item=>{
                      //   let _result
                      //   try {
                      //     _result = eval(`${item}`);
                      //   }catch(e) {
                      //     _result = `${item}`
                      //   }
                      //   result.push(_result)
                      // })
                      // result = result.join(', ')

                      let result
                      try {
                        // 函数
                        result = eval(`${arguemntsList}`);
                      }catch(e) {
                        // 字符和解析字符
                        result = `${arguemntsList}`
                      }
                      documentStyle(result);
                    }
                    Reflect.apply(value, context, arguemntsList);
                  } catch (error) {
                    console.error('error: ', error);
                    // console.log('全局处理报错, 后续函数继续执行 error: ', error);
                  }
                },
              });
            } else {
              return value;
            }
          }
        });
      }
    },
    get(target, property, receiver) {
      // documentStyle(value);
      try {
        const result = Reflect.get(resultTmp, property);
        if (!result) {
          throw new Error(`属性 ${property} 不存在`);
        }
        return result;
      } catch (error) {
        // console.log('error: ', error);
        return function () {};
      }
    },
    ...handler,
  });
  return proxyInst;
}

// 代理对象
function ProxyObject(source, handler) {
  const proxyObj = createFactoryProxy({}, handler);
  for (const [key, value] of Object.entries(source)) {
    proxyObj[key] = source[key];
  }
  return proxyObj;
}

console = ProxyObject(console);
// function test1() {
//   var a = 1,
//     b = 3;
//   return a + b;
// }
// function test21() {
//   var a = 1,
//     b = 3;
//   return a * b + 10;
// }
// console.log("console.log(123): ", console.log(test1()));
// console.log("console.log(123): ", console.log(test21()));
