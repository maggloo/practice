
let Square; 
let Row = '';
for (let i=0; i<= 7; i++){
  for (let j=0; j <= 3; j++){ 
    if (i % 2 == 0){
        Square = "\u2B1C" + "\u2B1B";
      } else {
        Square = "\u2B1B" + "\u2B1C";
      }
    Row += Square;
  }
  Row += "\n";
} 
console.log(Row);
