const LinearLeastSquares = require('linear-least-squares');

module.exports = function solveLeastSquares() {
  const startPoints = [
    [0.1, 0.01],
    [0.2, 0.04],
    [0.3, 0.09],
    [0.4, 0.16],
    [0.5, 0.25],
  ];
  const nextX = [0.5, 0.6, 0.7, 0.8, 0.9, 1.0];
  const nextY = [];
  const linearLeastSquares = new LinearLeastSquares(startPoints);
  const {b: a0, m: a1} = linearLeastSquares.compute_fit();

  for (const nextX1 of nextX) {
    nextY.push(a1 * nextX1 + a0);
  }

  printLeastSquares(a0, a1, nextX, nextY,);
}


function printLeastSquares(a0, a1, pointsX, pointsY) {
  console.log('Least Squares Method');
  console.log(`a0: ${a0}`);
  console.log(`a1: ${a1}`);
  console.log(`Trend equation: y = ${a1} * t + ${a0}`);

  for (let i = 0; i < pointsX.length; i++) {
    console.log(`X: ${pointsX[i]}; Y = ${pointsY[i]}`);
  }
}
