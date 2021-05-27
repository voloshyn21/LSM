module.exports = function solveVantHoffEquation() {
  const w = 0.1;
  const q = 0.5;
  const vantHoffEquation = new VantHoffEquation(w, q);

  console.log(`\nVantHoffEquation\nW: ${w}\nQ: ${q}`);

  for (let x = 0; x <= 0.50; x += 0.001) {
    const t = x ** 2;

    vantHoffEquation.setX(x);
    vantHoffEquation.setT(t);
    vantHoffEquation.findY();
    vantHoffEquation.findNextW();
  }

  console.log(`W: ${vantHoffEquation.getW()}`);

  for (let x = 0.50; x <= 1; x += 0.1) {
    const t = x ** 2;

    vantHoffEquation.setX(x);
    vantHoffEquation.setT(t);
    vantHoffEquation.findY();

    console.log(`X: ${vantHoffEquation.getX()}; Y: ${vantHoffEquation.getY()}`);
  }
}

class VantHoffEquation {
  #x;
  #y;
  #t;
  #w;
  #q;

  constructor(w, q) {
    this.w = w;
    this.q = q;
  }

  getX() {
    return this.x;
  }

  setX(x) {
    this.x = x;
  }

  getY() {
    return this.y;
  }

  setT(t) {
    this.t = t;
  }

  getW() {
    return this.w;
  }

  findY() {
    this.y = this.x * this.w;
  }

  findNextW() {
    this.w += this.q * this.x * (this.t - this.y);
  }
}
