// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
console.log("--функція яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив-")
document.write('<b> функція яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив</b><br/> ')

let arr = [1, 2, 3, 4,]
let arr_1 = [2, 3, 4, 5,]
let res = []; // 3, 5, 7 ,9

function sumIndex() {
    for (let i = 0; i < arr.length; ++i) {
        res.push((arr[i] + arr_1[i]));
    }
    return res;
}

sumIndex()
console.log(res);
document.write(`${res}`)

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

console.log("--додати в кінець массиву елементи циклом-")
document.write('<hr/><b> додати в кінець массиву елементи циклом</b><br/> ')

let mixArr = ['a', 'b', 'c']

for (let i = 1; i < 4; i++) {
    mixArr.push(i);
}
console.log(mixArr);
document.write(`${mixArr}`)

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
console.log("--- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1]--")
document.write('<hr/><b> - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1]</b><br/> ')

let arrN = [1, 2, 3];
console.log(arrN);

arrN.reverse();
console.log(arrN);
document.write(`${arrN}`);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
console.log("--- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.--")
document.write('<hr/><b> - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.</b><br/> ')

let arrP = [1, 2, 3];
console.log(arrP);
arrP.push(4, 5, 6);
console.log(arrP);
document.write(`${arrP}`);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
console.log("--- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.--")
document.write('<hr/><b> - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.</b><br/> ')

let arrU = [1, 2, 3];
console.log(arrU);
arrU.unshift(4, 5, 6);
console.log(arrU);
document.write(`${arrU}`);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
console.log("--- Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].--")
document.write('<hr/><b> - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5]..</b><br/> ')

let arrS = [1, 2, 3, 4, 5];
console.log(arrS);
arrS.splice(0, 3)
console.log(arrS);
document.write(`${arrS}`);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
console.log("--- Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].--")
document.write('<hr/><b> - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2]..</b><br/> ')

let arrSp = [1, 2, 3, 4, 5];
console.log(arrSp);
arrSp.splice(2, 3)
console.log(arrSp);
document.write(`${arrSp}`);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
console.log("--- Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1, 2, 3, 'a','b','c'].--")
document.write('<hr/><b> Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, a, b, c]. </b><br/> ')
let arrSpl = [1, 2, 3, 4, 5];
console.log(arrSpl);
arrSpl.splice(3, 2, 'a', 'b', 'c')
console.log(arrSpl);
document.write(`${arrSpl}`);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
console.log("--- масив з 10 чисел, вивести в консоль тільки парні значення  елементів--")
document.write('<hr/><b> масив з 10 чисел, вивести в консоль тільки парні значення  елементів </b><br/> ')
let arr10 = [2, 1, 32, 43, 5, 6, 74, 8, 83, 12]

for (let c = 0; c < arr10.length; c++) {
    let arr = arr10[c];
    if (arr % 2 === 0) {
        document.write(`${arr}, `)
        console.log(arr)
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
console.log("--- Створити 2й порожній масив. За допомогою циклу скопіювати значення одного масиву в інший --")
document.write('<hr/><b>  Створити 2й порожній масив. За допомогою циклу скопіювати значення одного масиву в інший </b><br/> ')

let arr10New = [];
for (let i = 0; i < arr10.length; i++) {
    arr10New.push(arr10[i]);
}
document.write(`${arr10New} `)
console.log(arr10New);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
console.log("--- За допомогою циклу for зібрати всі букви в слово --")
document.write('<hr/><b> За допомогою циклу for зібрати всі букви в слово </b><br/> ')
let wordArr = ['a', 'b', 'c']
// console.log(wordArr.join(''));
let wordFor = ''
for (let i = 0; i < wordArr.length; i++) {
    wordFor += wordArr[i];
}
console.log(`${wordFor}`)
document.write(`${wordFor}`)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

console.log("--- За допомогою циклу while зібрати всі букви в слово --")
document.write('<hr/><b> За допомогою циклу while зібрати всі букви в слово </b><br/> ')

let wordWhile = []
let i = 0;
while (i < wordArr.length) {
    wordWhile += wordArr[i];
    i++;
}
console.log(wordWhile)
document.write(`${wordWhile}`)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

console.log("--- За допомогою циклу for of зібрати всі букви в слово --")
document.write('<hr/><b> За допомогою циклу for of зібрати всі букви в слово </b><br/> ')
let wordOf = []
for (let i of wordArr) {
    wordOf +=i;
}
console.log(wordOf)
document.write(`${wordOf}`)

// -   функція Приймає масив [9,8,0,4] та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
console.log("--- Должен быть результат [ 8, 9, 0, 4 ] --")
document.write('<hr/><b> Должен быть результат [ 8, 9, 0, 4 ] </b><br/> ')

let array_1 = [9, 8, 0, 4]
function arrFun(i) {

  let temp = array_1[i];
    array_1[i] = array_1[i+1];
    array_1[i+1] = temp;

return temp
}
arrFun(0)
console.log(array_1)
document.write(`${array_1}`)



console.log("--- Должен быть результат [ 9 ,0, 8, 4 ] --")
document.write('<hr/><b> Должен быть результат [ 9 ,0, 8, 4 ] </b><br/> ')
let array_2 = [9, 8, 0, 4]
function arrFun_1(i) {
  let temp = array_2[i];
    array_2[i] = array_2[i+1];
    array_2[i+1] = temp;

  return temp
}
arrFun_1(1)
console.log(array_2)
document.write(`${array_2}`)

console.log("--- Должен быть результат [ 9, 8, 4, 0 ] --")
document.write('<hr/><b> Должен быть результат [ 9, 8, 4, 0 ] </b><br/> ')
let array_3 = [9, 8, 0, 4]
function arrFun_2(i) {

  let temp = array_3[i];
    array_3[i] = array_3[i+1];
    array_3[i+1] = temp;

  return temp
}
arrFun_2(2)
console.log(array_3)
document.write(`${array_3}`)