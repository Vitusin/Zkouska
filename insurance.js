class Insurance {
    constructor(firstName, lastName, age, phone) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.phone = phone;
    }
  
    toString() {
      return `${this.firstName} ${this.lastName} (Věk: ${this.age}, Telefon: ${this.phone})`;
    }
  }
  