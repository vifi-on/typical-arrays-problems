
exports.min = function min (array) {
  if (!array || array.length === 0) return 0 

  const sortArr = array.sort((a, b) => a - b)
  const minNum = sortArr.shift()

  return minNum;
}

exports.max = function max (array) {
  if (!array || array.length === 0) return 0 

  const sortArr = array.sort((a, b) => a - b)
  const maxNum = sortArr.pop()

  return maxNum;
}

exports.avg = function avg (array) {
  if (!array || array.length === 0) return 0 

  const sumArr = array.reduce((a, b) => a + b, 0)
  const avgNum = sumArr / array.length

  return avgNum;
}
