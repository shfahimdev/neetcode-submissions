class NumMatrix{
  constructor(matrix) {
    this.matrix = matrix;
  }
  sumRegion(srow, scol, frow, fcol) {
    let sum = 0;
    for(let i=scol; i <= fcol; i++) {
      for(let j=srow; j <= frow; j++) {
        sum += this.matrix[j][i];
      }
    }
    return sum;
  }
}