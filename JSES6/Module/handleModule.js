export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

export function logger(log){
    console.log(log);
}

export var arrayModule = [1, 2, 3]; 

// export { // đặt tên các module ở export
//   randomNumber as testRandom,
//   logger as testLogger,
//   arrayModule as testArray
// }

