module People {
  export class Person {
    _fullName: String;
    _firstName: String;
    _lastName: String;

    constructor (name) {
      this.processName(name);
    }
  
    processName (name:String) {
      if(!name) {
        name = "Anonymous";
      }
      this._fullName = Util.StringHelper.toTitleCase(name);
  
      var nameSplit = this._fullName.split(" ");
      this._firstName = nameSplit[0];
      this._lastName = typeof nameSplit[1] != "undefined" ? nameSplit[1] : "";
    }
  
    get name():String {
      return this._fullName;
    }
  
    set name(name:String) {
      this.processName(name);
    }
  
    get firstName():String {
      return this._firstName;
    }
  
    get lastName():String {
      return this._lastName;
    }
  }
  
  export class Driver extends Person {
    _car: String;

    constructor (name:String, car:String) {
      this._car = car;
  
      super(name);
    }
  
    get car():String {
      return this._car;
    }
  
    set car(car:String) {
      this._car = car;
    }
  
    drive() {
      return this.car ? this.car + " says brrr..." : "walking";
    }
  }
}
