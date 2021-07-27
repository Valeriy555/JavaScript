
// - Напишіть код,  який за допомоги
// document.getElementById або document.getElementsByClassName
// або document.getElementsByTagName :

//- отримує текст з параграфа з id "content"

const contentEl = document.getElementById('content');

console.log (contentEl.innerText);

//-  отримує текст з блоку з id "rules"

const rulesEl = document.getElementById('rules');

console.log(rulesEl.innerText);

// - замініть текст параграфа з id 'content' на будь-який інший

contentEl.innerText='Однако умные люди на то и умны, чтобы разбираться в запутанных вещах.'

// - замініть текст параграфа з id 'rules' на будь-який інший

rulesEl.innerText='Лучший способ оставаться последовательным — это меняться вместе с обстоятельствами.'

// - змініть кожному елементу колір фону на червоний

contentEl.style.backgroundColor = 'red'
rulesEl.style.backgroundColor= 'red'

const ulEl= document.getElementsByClassName ('fc_rules');

for (const ulElElement of ulEl) {
    ulElElement.style.backgroundColor = 'red'
}

// - змініть кожному елементу колір тексту на синій

contentEl.style.color = 'blue'
rulesEl.style.color= 'blue'

for (const ulElElement of ulEl) {
    ulElElement.style.color = 'blue'
}

// - отримати весь список класів елемента з id=rules
//    і вивести їх в console.log

console.log(rulesEl);

// - отримати всі елементи з класом fc_rules. визначити їм 2 події "клік",
//     одна вивдоить текст елементу, інша довільний текст

console.log(ulEl);


for (const ulElElement of ulEl) {
    ulElElement.onclick = () => console.log(ulElElement.textContent);
    ulElElement.onclick = () => console.log(ulElElement.innerHTML='Уже мозг взрывается!!!');
}



//  поміняти колір тексту у всіх елементів fc_rules на червоний

// (Я поменял цвет текста на зеленй, потому что до этого было задание поменять
// фон на красный и красный текст с красным фоном сливается и это не красиво!!!)
for (const ulElElement of ulEl) {
    ulElElement.style.color = 'green';
}