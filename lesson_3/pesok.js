// let arr = [9, 8, 0, 4]
//
// let array = [9, 8, 0, 4]
// function arrFun_2(i) {
//
//   let temp = array[i];
//   array[i] = array[i+1];
//   array[i+1] = temp;
//
//   return array
// }
// // arrFun_2(2)
//
// console.log("--- Должен быть результат [ 8, 9, 0, 4 ] --")
// let arr_1 = arrFun_2(0);
// // let  arr_1 = array.slice();
// console.log(arr_1)
//
// console.log("--- Должен быть результат [ 9 ,0, 8, 4 ] --")
// let arr_2 = arrFun_2(1);
//
// console.log(arr_2)


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100


console.log("---EXAMPLE: [1,0,6,0,3] => [1,6,3,0,0]--")
document.write('<hr/><b> EXAMPLE:[1,0,6,0,3] => [1,6,3,0,0]</b><br/> ')

let arrTrail = [1,0,6,0,3]
function trailingZeros() {
  for (let i = 0; i < arrTrail.length; i++) {
    if (arrTrail[i] === 0) {
      arrTrail.push(0);
      arrTrail.splice(i, 1);
    }
  }
  return arrTrail;
}
trailingZeros()
console.log(arrTrail);
document.write(`${arrTrail}`)

console.log("---EXAMPLE: [0,1,2,3,4] => [1,2,3,4,0]--")
document.write('<hr/><b>EXAMPLE: [0,1,2,3,4] => [1,2,3,4,0]</b><br/> ')

let arrTrail_1 = [0,1,2,3,4,0]
function trailingZeros_1() {
  for (let i of arrTrail_1) {
    if (arrTrail_1[i] === 0) {
      arrTrail_1.push(0);
      arrTrail_1.splice(i, 1);
    }
  }
  return arrTrail_1;
}
trailingZeros_1()
console.log(arrTrail_1);
document.write(`${arrTrail_1}`)

console.log("---EXAMPLE: [0,0,1,0]   => [1,0,0,0]--")
document.write('<hr/><b>EXAMPLE: [0,0,1,0]   => [1,0,0,0]</b><br/> ')

let arrTrail_2 = [0,0,1,0]
function trailingZeros_2() {
  for (let i of arrTrail_2 ) {
    if (arrTrail_2[i]===0){

      arrTrail_2.splice(i,1)
      arrTrail_2.push(0);
    }
  }
  return arrTrail_2
}
trailingZeros_2()
console.log(arrTrail_2);
document.write(`${arrTrail_2}`)

// console.log("---******************--")
// document.write('<hr/><b>*******************</b><br/> ')


// let arr = [0,0,1,0]
// function moveZeros() {
//   let upperBound = arr.length;
//   for (let i = 0; i < upperBound; i++) {
//     if (arr[i] === 0) {
//       arr.push(0);
//       arr.splice(i, 1);
//       upperBound--;
//       i--;
//     }
//   }
//   return arr;
// }
//   moveZeros()
//
// console.log(arr);
// document.write(`${arr}`)