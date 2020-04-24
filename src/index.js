/**
 * Find the max sum of sub sequence that maximin this sum.
 * @param {number[]} array 
 * @returns {number} max sum
 */
const maxSequence = (array) => {
  if (array.length === 0) return 0;

  let partialSums = [
    array.reduce((pre, cur) => pre + cur),
    maxSequence(array.slice(1)),
    maxSequence(array.slice(0, -1))
  ]

  return partialSums.reduce((pre, cur) => pre < cur ? cur : pre);
}

module.exports = { maxSequence };
