function firstLettersFromString(str){
  str = str.split(" ");
  const newArray = str.map((letter) => {   
    letter = letter.split("");
    return letter[0];    
  });
  console.log(newArray);
}
firstLettersFromString("Каждый охотник желает знать, где сидит фазан.");
