function maxSequence(array) {
  if(array.length < 1){
    return 0
  };

  let maxResults  = [];

  for(let i = 0; i < array.length; i++){
    if(array[i] < 0){
      continue;
    }
    let maxSum = array[i];
    let currSum = array[i];
    for(let j = i+1; j < array.length; j++){
      currSum+=array[j]
      if(currSum > maxSum){
        maxSum = currSum;
      }
    }
    maxResults.push(maxSum);
  }
  return maxResults.reduce((a,b) => a > b ? a : b);
}

module.exports = { maxSequence };
