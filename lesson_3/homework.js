// 1 створити функцію яка обчислює та повертає площу прямокутника висотою

function rectangle (w,h){
    let result= w*h;
    return result;
}
let area = rectangle(10,5);
console.log(area);




// 2 створити функцію яка обчислює та повертає площу кола

function circle (π,r){
    let result= π*(r**2);
    return result;
}
let area1 = circle(3.14,7);
console.log(area1);


// 3 створити функцію яка обчислює та повертає площу циліндру

function cylinder(r, h) {
    let result = 2*3.14 * r * (r+h);
    return result;
}
let area2 = cylinder(5,12);
console.log(area2);


// 4 створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
//     а виводить найбільше (Math використовувати заборонено);

let arr=[1,3,5,8,6,4,12,10,2,7,9,11,-5]

console.log(GetValue(arr));

function GetValue(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min)
            min = arr[i];

        if (arr[i] > max)
            max = arr[i];
    }
    console.log(max);

    return min;
}



// 5 створити функцію яка  створює блок з текстом. Текст задати через аргумент

function createDiv(header) {
    console.log(`<div>${header}</div>`);
    document.write(`<div>${header}</div>`);
}
createDiv('some text');


// 6 створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createOful (header) {
    document.write(`<ul>
          <li>${header}</li>
          <li>${header}</li>
          <li>${header}</li>
    </ul>`);
}
createOful('some text');

// 7 створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createOfli (header,numOfli) {
    document.write(`<ul>`);

    for (let i = 0; i <numOfli; i++) {
        document.write(`<li>${header}</li>`);
    }

    document.write(`</ul>`);
}
createOfli('hello okten',3);

// 8 створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array=[1,3,5,'hello',true]
function createOf(array) {
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++) {
        const arr = array[i];
        document.write(`<li>${arr }</li>`);
    }
    document.write(`</ul>`);
}
createOf(array);
