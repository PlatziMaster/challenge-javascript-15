(function maxSequence(array) {
  const result = [];
  for(j in array){
    let acum = 0;
    for(k=j;k<array.length;k++){
      acum = acum + array[k];
      result.push(acum);
      console.log(`current acum=${acum}`);      
    }
  }
  const max = Math.max(...result)
  const index = result.indexOf(max);
  const ini = Math.round(index/array.length)
  const residual = index%(array.length)

  console.log(`ini=${ini}\nresidual=${residual}`);  
  console.log(`max=${max}`);

  const sum = [];

  for (let k = ini; k <= residual+1; k++ ){
    sum.push(array[k]);
  }
  console.log(sum);
  return;
})([-2,6,9,9,-7,-3,10])

// module.exports = { maxSequence };
