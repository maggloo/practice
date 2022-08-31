
function changeArray(array){
  
  if (array.length % 2 == 0){  
      let i = array.length / 2;
      let array1 = array.splice(0, i);
      console.log(array.concat(array1)); 
  }
  else {
      let i = Math.floor(array.length / 2);
      let array1 = array.splice(0, i);
      let array2 = array.splice(-i,);    
      console.log(array2.concat(array.concat(array1))); 
  }
  
}

changeArray([ 1, 2, 3, 4, 5 ]);
