/** 判断当前用户微信或QQ环境
 * todo 待丰富其他设备通用的
 * @param {Object} ua
 * @return {Boolean}
*/
export function getSoftName(ua = navigator.userAgent) {
    if(ua.toLowerCase().indexOf('micromessenger') > -1) {
        return 'weixin'
    } else if(!!ua.match(/QQ/i)) {
        return 'qq'
    } else if(!!ua.match(/iPhone/i)) {
        return 'apple'
    } else if(!!ua.match(/Android/i)) {
        return 'android'
    }
}






/** 生成唯一值
 *  使用 window的 crypto 生成
 * @return {String}
 */
export function UUIDGenerator () {
    return ("" + [1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (item:any) => {
        return (item ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> item / 4).toString(16)
    })
};

