function maxSequence(array) {

  if (array.length === 0) {
    return 0
  }

  const sum = numbers => {
    return numbers.reduce((count, item) => {
      return count + item;
    }, 0)
  }

  let maxSum = Math.min(...array);

  const checkArray = arr => {
    for (let i = 1; i <= arr.length; i++) {
      if (maxSum < sum(arr.slice(0, i))) {
        maxSum = sum(arr.slice(0, i))
      }
    }
  }

  let arr = array;

  while (arr.length > 0) {
    checkArray(arr);
    arr.shift();
  }

  return maxSum;

}

module.exports = { maxSequence };
