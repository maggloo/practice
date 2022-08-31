function currentSums(numbers) {
let a = "";
let sumsArray = [];
let totalArray = [];
const sumWithInitial = numbers.reduce(
  (previousValue, currentValue) => {  
    a = `${a}+` + currentValue; 
    let sums = a.replace("+","");
    sumsArray.push(sums);
    total = previousValue + currentValue;  
    totalArray.push(total);
    return total;     
  },
0);
console.log(`[${sumsArray}] = [${totalArray}]`);
}

currentSums([2, 3, 5, 7, 11, 13, 17]);
