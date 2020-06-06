function maxSequenceRecursive(array) {
  if(array.length === 0) return [{ totalSum: 0, sequence: array.slice()}];
  
  const sum = (array) => array.reduce((count, number) => count + number);

  let sequences = [];
  sequences.push({ totalSum: sum(array), sequence: array.slice() });

  let actualSequence = sequences[0].sequence;

  const compare = (sequence1, sequence2) => {
    let sumSequence1 = sum(sequence1);
    let sumSequence2 = sum(sequence2);

    if(sumSequence1 > sumSequence2) {
      return { totalSum: sumSequence1, sequence: sequence1};
    }
    if(sumSequence1 < sumSequence2) {
      return { totalSum: sumSequence2, sequence: sequence2 };
    }
    return false;
  }

  while(actualSequence.length > 1) {
    let sequenceObj = compare(actualSequence.slice(1, actualSequence.length), actualSequence.slice(0, actualSequence.length - 1))

    if(sequenceObj) {
      sequences.push(sequenceObj);
      actualSequence = sequenceObj.sequence;
    } else {
      sequences.push(...maxSequenceRecursive(actualSequence.slice(1, actualSequence.length)))
      sequences.push(...maxSequenceRecursive(actualSequence.slice(0, actualSequence.length - 1)))
      actualSequence = [];
    }
  }

  return sequences;
}

function maxSequence(array) {
  let sequences = maxSequenceRecursive(array);

  let max = Math.max(...sequences.map(item => item.totalSum));
  return sequences.find(item => item.totalSum === max).totalSum;
}

module.exports = { maxSequence };