const cloneData = Symbol('cloneData');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const clonedCar = new this.constructor();
    // Copy the private data using the cloneData Symbol
    clonedCar[cloneData] = Object.assign({}, this);
    return clonedCar;
  }
}

export default Car;
