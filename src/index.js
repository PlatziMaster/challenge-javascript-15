function maxSequence(array) {
  let maxSum = 0
  let tempSum = 0

  for (const item of array) {
    tempSum += item;
    maxSum = Math.max(maxSum, tempSum);
    if (tempSum < 0) tempSum = 0;
  }

  return maxSum;
}

module.exports = { maxSequence };
