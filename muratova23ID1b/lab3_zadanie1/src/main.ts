class Person {
  private _name: string;
  private _age: number;

  constructor(name: string = "Unknown", age: number = 0) {
    this._name = name;
    this._age = age;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get age(): number {
    return this._age;
  }

  set age(age: number) {
    if (age < 0) {
      console.log("Возраст не может быть отрицательным.");
    } else {
      this._age = age;
    }
  }

  displayInfo(): void {
    console.log(`Имя: ${this._name}, Возраст: ${this._age}`);
  }
}

const person1 = new Person("Илья", 30);
const person2 = new Person("Антон", 25);
const person3 = new Person();

person1.age = 20;
person2.name = "Сабина";

person1.displayInfo();
person2.displayInfo();
person3.displayInfo(); 
