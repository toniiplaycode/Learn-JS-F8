// default export: khi file khác import mà không dùng dấu ngoặc nhọn {} để import các module thì default export lúc này sẽ được import
export default function logger2(log){
    console.log(log);
}

export function otherFunction(){
    console.log('this is a other function in exportDefault.js');
}