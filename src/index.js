function maxSequence(array) {
  if (array.length === 0) return 0

  const result = [];
  for(j in array){
    let acum = 0;
    for(k=j;k<array.length;k++){
      acum = acum + array[k];
      result.push(acum);
     
    }
  }
  const max = Math.max(...result)
  const index = result.indexOf(max);
  const ini = Math.round(index/array.length)
  const residual = index%(array.length)

 
 

  const sum = [];

  for (let k = ini; k <= residual+1; k++ ){
    sum.push(array[k]);
  }
 
  return max;
}

module.exports = { maxSequence };
