
// Первый способ:

/*
let month = Number(prompt("Введите номер месяца."));
if (month > 2 && month < 6) {
  console.log("Весна");
} else if (month > 5 && month < 9) {
  console.log("Лето");
} else if (month > 8 && month < 12) {
  console.log("Осень");
} else if ((month < 3 && month > 0) || month == 12) {
  console.log("Зима");
}
else {
  console.log("Введенное число не является номером месяца.")
}
 
*/

// Второй способ:

let month = Number(prompt("Введите номер месяца.")); 
(month > 2 && month < 6) && console.log("Это весна");
(month > 5 && month < 9) && console.log("Это лето");
(month > 8 && month < 12) && console.log("Это осень");
((month < 3 && month > 0) || month == 12) && console.log("Это зима");
(month > 12 || month < 1) && console.log("Введенное значение не является номером месяца.")
