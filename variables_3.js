let num = prompt("Введите число");
let numOddEven, numFloat, numPosNeg;

if (isNaN(parseInt((num)))) {
    console.log("Ошибка.")
} else {

  
if ((num % 2 == 0) && (num % 1 == 0)) {
  numOddEven = "Четное";
} else {
  numOddEven = "Нечетное";
} 

if (num % 1 == 0){
  numFloat = "Целое";
} else {
  numFloat = "Дробное";
} 

if (num == 0) { 
  numPosNeg = "Не положительное и не отрицательное (Ноль)";
} else if (num > 0){
  numPosNeg = "Положительное"; 
} else if (num < 0) {
  numPosNeg = "Отрицательное";
}

console.log (`Введенное число:
${numOddEven}, 
${numFloat},
${numPosNeg}.`);

}
