function filteredArray(startArray) {

  const result = startArray.filter((num) => {
    if ((num % 1 == 0) && (num > 0)) {
      return num;
    }
  });
  console.log(result);
}

filteredArray([-1, 2, 3.5, -12, 4, 1.25, 16]);
