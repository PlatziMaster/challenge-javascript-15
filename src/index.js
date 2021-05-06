


const sequence = (array) => {

  let current = 0;
  let max = 0;
  let arraySeq = [];

  array.forEach(value => {

    current = Math.max(0, current + value);
    // (0, 0 + (-2) ) = 0
    //(0, 0 + 1) = 1
    //(0, 1+ 1) = 2

    max = Math.max(current, max);
    //(0, 0) = 0 
    //(1, 0) = 1
    //(2, 1) = 2
    arraySeq.push(max)
    console.log(arraySeq)

  });

  return max; // 0, 1, 2

}

const result = sequence([-2, 1, 1, 1, -2, 1, 1, 1, 1])
console.log(result)


module.exports = { sequence };
