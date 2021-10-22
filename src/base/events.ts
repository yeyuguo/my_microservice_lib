
/** 复制文本，不用传递 dom 节点 */
function clipboard(window:any, document: any, navigator: any) {
  var textArea:any

  // 判断是不是ios端
  function isOS() {
    return navigator.userAgent.match(/ipad|iphone/i)
  }
  // 创建文本元素
  function createTextArea(text:string) {
    textArea = document.createElement('textArea')
    textArea.value = text
    document.body.appendChild(textArea)
  }
  // 选择内容
  function selectText() {
    var range, selection

    if (isOS()) {
      range = document.createRange()
      range.selectNodeContents(textArea)
      selection = window.getSelection()
      selection.removeAllRanges()
      selection.addRange(range)
      textArea.setSelectionRange(0, 999999)
    } else {
      textArea.select()
    }
  }

  // 复制到剪贴板
  function copyToClipboard(success:()=>{}, error:()=>{}) {
    try {
      if (document.execCommand('Copy')) {
        // alert('复制成功！')
        if (success) {
          success && success()
        } else {
          alert('复制成功！')
        }
      } else {
        // alert('复制失败！请手动复制！')
        if (error) {
          error && error()
        } else {
          alert('复制失败！请手动复制！')
        }
      }
    } catch (err) {
      console.log('err: ', err)
      if (error) {
        error && error()
      } else {
        alert('复制出错！请手动复制！')
      }
    }
    document.body.removeChild(textArea)
  }

  return function(text:string, success: ()=>{}, error: ()=>{}) {
    createTextArea(text)
    selectText()
    copyToClipboard(success, error)
  }
 
}




const clipboardCallback = clipboard(window, document, navigator)
/** 剪贴板 */
export function copy(
  text: string, 
  success: () =>{},
  error: ()=>{},
  ) {
    return clipboardCallback(text, success, error)
}

