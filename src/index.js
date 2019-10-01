module.exports = function multiply(first, second) {
  first = first.split('').reverse();
  second = second.split('').reverse();

  const result = [];

  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      result[i + j] = (result[i + j] || 0) + first[i] * second[j];
    }
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] >= 10) {
      result[i + 1] = (result[i + 1] || 0) + Math.floor(result[i] / 10);
      result[i] = result[i] % 10;
    }
  }

  return result.reverse().join('');

  // your solution
}
