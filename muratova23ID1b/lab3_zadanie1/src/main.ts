class Person {
    private name: string;
    private age: number;
  
    constructor();
    constructor(name: string, age: number);
    constructor(name?: string, age?: number) {
      this.name = name || "Без имени";
      this.age = age || 0;
    }
  
    get getName(): string {
      return this.name;
    }
  
    set setName(newName: string) {
      this.name = newName;
    }
  
    get getAge(): number {
      return this.age;
    }
  
    set setAge(newAge: number) {
      this.age = newAge;
    }
  
    toString(): string {
      return `Имя: ${this.name}, Возраст: ${this.age}`;
    }
  }
  
  const person1 = new Person();
  const person2 = new Person("Илюша", 21);
  const person3 = new Person("Антошка", 21);
  const person4 = new Person("Сабинка", 20);
  
  const personsOutput = document.getElementById("output-persons")!;
  personsOutput.innerText =
    "Список персонажей:\n" +
    person1.toString() + "\n" +
    person2.toString() + "\n" +
    person3.toString()
    person4.toString();