/**科里华 
 * 
*/
export function curry<F extends (...args: any[]) => any>(fn:F, paramsLen: number=fn.length, ...args:any):any {
  if(paramsLen <= args.length) {
    return fn(...args)
  }else{
    return curry.bind(null, fn, paramsLen, ...args);
  }
}

