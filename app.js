const solveLeastSquares = require('./LeastSquaresMethod');
const solveVantHoffEquation = require('./VantHoffEquation');

module.exports = function app() {
  solveLeastSquares();
  solveVantHoffEquation();
}
