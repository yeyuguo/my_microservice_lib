/**
 * @public
 * 获取Cookie
 */
 export function getCookie(key: string) {
  const reg = new RegExp('\\b' + key + '=(\\S+)(\\b|;)')
  const r = reg.exec(document.cookie)
  return r ? r[1] : ''
}




// todo localStorage.get


// todo localStorage.set