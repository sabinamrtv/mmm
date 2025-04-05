function findMaxCount(): number {
    const inputElement = document.getElementById("inputNumbers") as HTMLInputElement;
    const inputString = inputElement: number;
    const numbers: number[] = inputString.split(" ")
        .map(num => parseFloat(num.trim()))
        .filter(num => !isNaN(num));

    if (numbers.length === 0) {
        const resultElement = document.getElementById("result") as HTMLParagraphElement;
        resultElement.textContent = "Пожалуйста, введите только числа, разделённые пробелами.";
        return;
    }

    const maxNumber = Math.max(...numbers);
    const countMax = numbers.filter(num => num === maxNumber).length;
    const resultElement = document.getElementById("result") as HTMLParagraphElement;

    resultElement.textContent = `Максимальное число: ${maxNumber}. Совпадений: ${countMax}.`;
}
