function moveZeros(array) {

  const newArray = array.sort(function(a, b) {
    if (parseFloat(b) == 0) {
      return -1;
    }
    return 0;
  })
  console.log(newArray);
}
