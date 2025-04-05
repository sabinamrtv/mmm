function findMedian() {
    const input = (document.getElementById("numbers") as HTMLInputElement).value;
    const numbers = input.split(",").map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    if (numbers.length === 0) {
        document.getElementById("result")!.textContent = "Пожалуйста, введите хотя бы одно число.";
        return;
    }
    numbers.sort((a, b) => a - b);
    let median: number;

    const middle = Math.floor(numbers.length / 2);

    if (numbers.length % 2 === 0) {
        median = (numbers[middle - 1] + numbers[middle]) / 2;
    } else {
        median = numbers[middle];
    }
    const resultText = `Медиана: ${median}`;
    document.getElementById("result")!.textContent = resultText;
}
