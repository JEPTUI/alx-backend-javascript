class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getter for size
  get size() {
    return this._size;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // Define the casting behavior to Number
  valueOf() {
    return this._size;
  }

  // Define the casting behavior to String
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
