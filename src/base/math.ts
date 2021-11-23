
interface interfaceMath {
    arg1: number|string,
    arg2: number|string,
    d: number|string
}

/*
函数，加法函数，用来得到精确的加法结果  
说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
参数：arg1：第一个加数；arg2第二个加数；d要保留的小数位数（可以不传此参数，如果不传则不处理小数位数）
调用：Calc.Add(arg1,arg2,d)  
返回值：两数相加的结果
*/
export function Add<T extends number, U extends number>(arg1: T|string, arg2:T|string, d:U|string): number{
    arg1 = arg1.toString();
    arg2 = arg2.toString();
    const arg1Arr = arg1.split('.');
    const arg2Arr = arg2.split('.');
    const d1 = arg1Arr.length == 2 ? arg1Arr[1] : '';
    const d2 = arg2Arr.length == 2 ? arg2Arr[1] : '';
    const maxLen = Math.max(d1.length, d2.length);
    const m = Math.pow(10, maxLen);
    const result:any = Number(((+arg1 * m + (+arg2) * m) / m).toFixed(maxLen));
    return typeof d === 'number' ? Number((result).toFixed(d)) : result;
}
/*
函数：减法函数，用来得到精确的减法结果  
说明：函数返回较为精确的减法结果。 
参数：arg1：第一个加数；arg2第二个加数；d要保留的小数位数（可以不传此参数，如果不传则不处理小数位数
调用：Calc.Sub(arg1,arg2)  
返回值：两数相减的结果
*/
export const Sub = (arg1:number|string, arg2:number|string, d:number|string) => Add(arg1, -Number(arg2), d);
/*
函数：乘法函数，用来得到精确的乘法结果  
说明：函数返回较为精确的乘法结果。 
参数：arg1：第一个乘数；arg2第二个乘数；d要保留的小数位数（可以不传此参数，如果不传则不处理小数位数)
调用：Calc.Mul(arg1,arg2)  
返回值：两数相乘的结果
*/
export const Mul = (arg1:number|string, arg2:number|string, d:number|string) => {
    arg1 = arg1.toString();
    arg2 = arg2.toString();
    const arg1Arr = arg1.split('.');
    const arg2Arr = arg2.split('.');
    const d1 = arg1Arr.length == 2 ? arg1Arr[1] : '';
    const d2 = arg2Arr.length == 2 ? arg2Arr[1] : '';
    const m = d1.length + d2.length;
    const result = Number(arg1.replace('.', '')) * Number(arg2.replace('.', '')) / Math.pow(10, m);
    return typeof d === 'number' ? Number((result).toFixed(d)) : result;
}
/*
函数：除法函数，用来得到精确的除法结果  
说明：函数返回较为精确的除法结果。 
参数：arg1：除数；arg2被除数；d要保留的小数位数（可以不传此参数，如果不传则不处理小数位数)
调用：Calc.Div(arg1,arg2)  
返回值：arg1除于arg2的结果
*/
export const Div = (arg1:number|string, arg2:number|string, d:number|string) => {
    arg1 = arg1.toString();
    arg2 = arg2.toString();
    const arg1Arr = arg1.split('.');
    const arg2Arr = arg2.split('.');
    const d1 = arg1Arr.length == 2 ? arg1Arr[1] : '';
    const d2 = arg2Arr.length == 2 ? arg2Arr[1] : '';
    const m = d1.length - d2.length;
    const result = Number(arg1.replace('.', '')) / Number(arg2.replace('.', '')) * Math.pow(10, m);
    return typeof d === 'number' ? Number((result).toFixed(d)) : result;
}


