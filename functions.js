
function fizzbuzz(){
  for (let i = 1; i <= 100; i++){
    var output ="";
         (((i % 3 == 0) && (i % 5 == 0)) && (output += `FizzBuzz`)) 
      || ((i % 3 == 0) && (output += `Fizz`)) 
      || ((i % 5 == 0) && (output += `Buzz`)) 
      || (((i % 3 != 0) && (i % 5 != 0)) && (output += i));

    console.log(output);
  } 
}

fizzbuzz();
