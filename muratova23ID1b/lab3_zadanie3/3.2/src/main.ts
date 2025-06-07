class Engine {
    private power: number;

    constructor(power: number) {
        this.power = power;
    }

    getPower(): number {
        return this.power;
    }
}

class Passenger {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}

class Car {
    private model: string;
    private engine: Engine;
    private passenger1: Passenger | null = null;
    private passenger2: Passenger | null = null;

    constructor(model: string, engine: Engine) {
        this.model = model;
        this.engine = engine;
    }

    addPassenger(passenger: Passenger): string {
        if (!this.passenger1) {
            this.passenger1 = passenger;
            return `${passenger.getName()} добавлен как пассажир 1.`;
        } else if (!this.passenger2) {
            this.passenger2 = passenger;
            return `${passenger.getName()} добавлен как пассажир 2.`;
        } else {
            return `Места для пассажиров заняты.`;
        }
    }

    removePassenger(passenger: Passenger): string {
        if (this.passenger1 && this.passenger1.getName() === passenger.getName()) {
            this.passenger1 = null;
            return `${passenger.getName()} удалён из пассажиров.`;
        } else if (this.passenger2 && this.passenger2.getName() === passenger.getName()) {
            this.passenger2 = null;
            return `${passenger.getName()} удалён из пассажиров.`;
        } else {
            return `Пассажир ${passenger.getName()} не найден в машине.`;
        }
    }

    displayInfo(): string {
        const pass1 = this.passenger1 ? this.passenger1.getName() : "пусто";
        const pass2 = this.passenger2 ? this.passenger2.getName() : "пусто";

        return `Автомобиль: ${this.model}<br>Мощность двигателя: ${this.engine.getPower()} л.с.<br>Пассажир 1: ${pass1}<br>Пассажир 2: ${pass2}`;
    }
}


let car: Car;

function createCar() {
    const model = (document.getElementById("carModel") as HTMLInputElement).value;
    const power = parseInt((document.getElementById("enginePower") as HTMLInputElement).value);
    car = new Car(model, new Engine(power));
    showResult("Машина создана!");
    updateCarInfo();
}

function addPassenger() {
    const name = (document.getElementById("passengerName") as HTMLInputElement).value.trim();
    if (!name || !car) return;
    const passenger = new Passenger(name);
    const message = car.addPassenger(passenger);
    showResult(message);
    updateCarInfo();
}

function removePassenger() {
    const name = (document.getElementById("passengerName") as HTMLInputElement).value.trim();
    if (!name || !car) return;
    const passenger = new Passenger(name);
    const message = car.removePassenger(passenger);
    showResult(message);
    updateCarInfo();
}

function updateCarInfo() {
    const output = document.getElementById("output") as HTMLDivElement;
    output.innerHTML = car ? car.displayInfo() : "";
}

function showResult(message: string) {
    const status = document.getElementById("status") as HTMLDivElement;
    status.textContent = message;
}

(window as any).createCar = createCar;
(window as any).addPassenger = addPassenger;
(window as any).removePassenger = removePassenger;
