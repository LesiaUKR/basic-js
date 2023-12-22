function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    console.log("matrix[i]", matrix[i]);
    for (let j = 0; j < matrix[i].length; j++) {
console.log("j",j);
console.log("i",i);
      if (i === 0 || matrix[i - 1][j] !== 0) {
        console.log("matrix[i][j]", matrix[i][j]);
console.log("matrix[i][j]", matrix[i][j]);
        sum += matrix[i][j];
      }
    }
  }

  return sum;
}
console.log(
  getMatrixElementsSum([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ])
);