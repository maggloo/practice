
let width = Number(prompt("Введите ширину."));
let length = Number(prompt("Введите длину."));
if ((width > 0) && (length )){
  if (width === length) {
   console.log("Это квадрат. Площадь равна " + (width * length) + '\n' + "Периметр равен " + 2 * (width + length));
  } else {
    console.log("Площадь равна " + (width * length) + '\n' + "Периметр равен " + 2 * (width + length));
  }
} else {
  console.log ("Ошибка.");
}

