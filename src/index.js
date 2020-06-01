function maxSequence(array) {
  if(array.length > 0) {
    let maxSum = 0;
    let arrayMaxSum = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = 1; j < array.length + 1; j++) {
        if(array.slice(i,j).length > 0) {
          arrayMaxSum.push(array.slice(i,j));
        }
      }
    }
    for (let i = 0; i < arrayMaxSum.length; i++) {
      let suma = 0;
      arrayMaxSum[i].forEach (function(numero){
          suma += numero;
      });
      if(maxSum < suma) {
        maxSum = suma;
      }
    }
    return maxSum;
  } else {
    return 0;
  }
}

module.exports = { maxSequence };
