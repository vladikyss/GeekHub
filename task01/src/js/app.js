var switchCondition = new Function(
    'number',
    'i',
    'let str = `switch(${number}){`; for(let j = 1; j <= i; j++){str+=`case ${j}:console.log(${j}, "Верное число");break;`;} str+= `default: break;}`;eval(str); '
);
var ifCondition = new Function(
    'number',
    'i',
    'let str =``; for (let j = 1; j <= i; j++) { str += `if(${number} == ${j}){console.log(${j},"Верное число")} else `} str+= `{}`; eval(str)'
);

var range = 9;
var number = 10;
console.time('Час витрачений за допомогою switch: ');
for (let i = 1; i <= range; i++) {
    switchCondition(number, i);
}
console.timeEnd('Час витрачений за допомогою switch: ');

console.log('---------------------------------------');

console.time('Час витрачений за допомогою if: ');
for (let i = 1; i <= range; i++) {
    ifCondition(number, i);
}
console.timeEnd('Час витрачений за допомогою if: ');
