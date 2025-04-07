class Octagon {
    private _innerRadius: number;

    constructor(innerRadius: number) {
        this._innerRadius = innerRadius;
    }

    get innerRadius(): number {
        return this._innerRadius;
    }

    set innerRadius(radius: number) {
        if (radius <= 0) {
            console.log("Радиус должен быть положительным числом.");
        } else {
            this._innerRadius = radius;
        }
    }

    calculateArea(): number {
        const area = 2 * (1 + Math.sqrt(2)) * Math.pow(this._innerRadius, 2);
        return area;
    }

    calculatePerimeter(): number {
        const perimeter = 8 * this._innerRadius * (1 + Math.sqrt(2));
        return perimeter;
    }
}

const octagon = new Octagon(5);

function updateDisplay() {
    const areaElement = document.getElementById("area");
    const perimeterElement = document.getElementById("perimeter");

    if (areaElement && perimeterElement) {
        areaElement.textContent = `Площадь: ${octagon.calculateArea().toFixed(2)}`;
        perimeterElement.textContent = `Периметр: ${octagon.calculatePerimeter().toFixed(2)}`;
    }
}

const calculateButton = <HTMLButtonElement>document.getElementById("calculateButton");
calculateButton?.addEventListener("click", () => {
    const radiusInput = <HTMLInputElement>document.getElementById("radiusInput");
    const radius = parseFloat(radiusInput.value);
    octagon.innerRadius = radius;
    updateDisplay();
});

window.onload = updateDisplay;
