import { randomNumber, logger, arrayModule} from "./handleModule.js"; // dấu ngoặc nhọn có thể import nhiều module từ các file khác nhau cùng lúc, có thể import được tất cả các kiểu dữ liệu
// import { randomNumber as testRandom, logger as testLogger, arrayModule as testArray} from "./handleModule.js"; // đặt tên các module ở import
var random = randomNumber(1, 10);
console.log(random);
logger('thanh toan');
console.log(arrayModule);

import exportDefault from "./exportDefault.js"; // file exportDefault.js dùng export default để export nên import không dùng dấu ngoặc {}
// import exportDefault, {otherFunction} from "./exportDefault.js"; // có thể import đối tượng default và các đối tượng khác
exportDefault('tonii');

import * as allModule from "./allModule.js"; // import toàn bộ module của 1 file, dùng dấu * này sẽ import toàn bộ module dưới dạng object
for (var key in allModule) {
    console.log(allModule[key]);
}

//TIPS:
//--> phải thêm type="module" trong thẻ <script> ở file HTML
//--> 1 file có thể chứu nhiều import bình thường, nhưng chỉ có thể có 1 default export
//--> những module nào export (public) thì các file khác mới có thể import và sử dụng được, những file không import (private) thì ngược lại