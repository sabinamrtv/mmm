function findMedian(numbers: number[]): number {
    numbers.sort((a, b) => a - b);

    const length = numbers.length;

    if (length % 2 === 1) {
        return numbers[Math.floor(length / 2)];
    } else {
        const mid1 = numbers[length / 2 - 1];
        const mid2 = numbers[length / 2];
        return (mid1 + mid2) / 2;
    }
}

function handleButtonClick() {
    const inputElement = document.getElementById("userInput") as HTMLInputElement;
    const resultElement = document.getElementById("result") as HTMLParagraphElement;

    const inputString = inputElement.value.trim();
    if (!inputString) {
        resultElement.textContent = "Пожалуйста, введите хотя бы одно число.";
        return;
    }

    const numbers: number[] = inputString.split(" ")
        .map(num => parseFloat(num.trim()))
        .filter(num => !isNaN(num));

    if (numbers.length === 0) {
        resultElement.textContent = "Пожалуйста, введите только числа, разделённые пробелами.";
        return;
    }

    const median: number = findMedian(numbers);

    resultElement.textContent = `Медиана: ${median}`;
}

const submitButton = document.getElementById("submitButton") as HTMLButtonElement;
submitButton.addEventListener("click", handleButtonClick);
