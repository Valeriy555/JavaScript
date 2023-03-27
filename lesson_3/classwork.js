// - створити функцію яка приймає масив та виводить його
console.log("--функція яка приймає масив та виводить його-")
document.write(' <hr/> <b> функція яка приймає масив та виводить його </b> <br/> ')
let array = ['fox', 'dog', 5, true, '55', 33, 'fly', false, 154, 'sun']

function arr(a) {
    console.log(a)
    document.write(a)
}

arr(array)

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
console.log("--функція яка приймає три числа та виводить найменьше-")
document.write(' <hr/> <b> функція яка приймає три числа та виводить найменьше </b> <br/> ')

function numMin(a, b, c) {

    if (a < b && a < c) {
        console.log(`${a} `)
        document.write(`${a} `)
        return a;
    } else if (b < a && b < c) {
        console.log(`${b} `)
        document.write(`${b} `)
        return b;
    } else if (c < a && c < b) {
        console.log(`${c} `)
        document.write(`${c} `)
        return c;
    }
}

let min = numMin(10, 5, 20)
document.write(`<br/> ${min} <br/>`)
numMin(17, 54, 36)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
console.log("--функція яка приймає три числа та виводить найменьше-")
document.write(' <hr/> <b> функція яка приймає три числа та виводить найменьше </b> <br/> ')

function numMax(a, b, c) {

    if (a > b && a > c) {
        console.log(`${a} `)
        document.write(`${a} `)
        return a;
    } else if (b > a && b > c) {
        console.log(`${b} `)
        document.write(`${b} `)
        return b;
    } else if (c > a && c > b) {
        console.log(`${c} `)
        document.write(`${c} `)
        return c;
    }
}

let max = numMax(10, 5, 20)
document.write(`<br/> ${max} <br/>`)
numMax(17, 54, 36)

// - створити функцію яка повертає найбільше число з масиву
console.log("--функція яка повертає найбільше число з масиву-")
document.write(' <hr/> <b> функція яка повертає найбільше число з масиву</b> <br/> ')

let number = [3, 2, 5, 4, 10, 6, 8, 7, 9]
document.write(`${number} <br/>`)

document.write(`${Math.max.apply(null, number)} - вивід через Math.max <br/> `);

function arrNum(number) {
    let max = number[0];
    for (let i = 0; i < number.length; i++) {
        let num = number[i];

        if (num > max)
            max = num
    }
    console.log(max);
    document.write(`${max} -вивід через функцію`)
}

arrNum(number)

// - створити функцію яка повертає найменьше число з масиву
console.log("--функція яка повертає найменьше число з масиву-")
document.write(' <hr/> <b> функція яка повертає найменьше число з масиву</b> <br/> ')

function arrNumMin(number) {
    let min = number[0];
    for (let i = 0; i < number.length; i++) {
        let num = number[i];

        if (num < min)
            min = num
    }
    return min

}

let res = arrNumMin(number)
console.log(res);
document.write(`${res} -вивід найменьшого числа через return `)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
console.log("--функція яка сумує значення елементів масиву та повертає його-")
document.write(' <hr/> <b> функція яка сумує значення елементів масиву та повертає його</b> <br/> ')

function addition(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += number[i];
    }
    return sum

}

let total = addition(number)
document.write(`${total}`)

console.log(total)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
console.log("--функція яка приймає масив чисел та повертає середнє арифметичне його значень-")
document.write(' <hr/> <b> функція яка приймає масив чисел та повертає середнє арифметичне його значень</b> <br/> ')

function average(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += number[i];
    }
    return sum / number.length;
}

let totalAver = average(number)
document.write(`${totalAver}`)

console.log(totalAver)

// - створити функцію яка заповнює масив рандомними числами
console.log("--функція яка заповнює масив рандомними числами-")
document.write(' <hr/> <b> функція яка заповнює масив рандомними числами</b> <br/> ')

let randomArr = [];

function random(ran) {
    for (let i = 0; i < 10; i++) {
        ran.push(Math.round(Math.random() * 100))
    }
    return ran
}

random(randomArr)
document.write(`${randomArr}`)
console.log(randomArr)

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
console.log("--функція яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів-")
document.write('<hr/><b> функція яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів</b><br/> ')

let users = [{name: 'Valera', age: 40}, {model: 'Mazda'}]
let arrKey = []

function objArr() {
    for (const userKey of users) {
        for (const key in userKey) {
            arrKey.push(key)
        }
    }
    return arrKey
}
objArr()
console.log(arrKey)
document.write(`${arrKey}`)

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
console.log("--функція яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів-")
document.write('<hr/><b> функція яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів</b><br/> ')
let arrValue = []
function valArr() {
    for(let key of users){
        for(let val in key){
            arrValue.push(key[val])
        }
    }
    return arrValue
}
valArr()
console.log(arrValue);
document.write(`${arrValue}`)



