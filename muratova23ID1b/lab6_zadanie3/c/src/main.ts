// Функция для проверки валидности строки скобок
function isValid(input: string): boolean {
    const stack: string[] = [];
    const matchingBrackets: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of input) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Обработчик события для кнопки "Проверить"
document.getElementById("checkButton")!.addEventListener("click", () => {
    const inputString = (document.getElementById("inputString") as HTMLInputElement).value;
    const resultDiv = document.getElementById("result")!;

    const result = isValid(inputString);

    // Отображаем результат
    if (result) {
        resultDiv.textContent = "Строка валидна!";
        resultDiv.className = "result valid";
    } else {
        resultDiv.textContent = "Строка невалидна!";
        resultDiv.className = "result invalid";
    }
});
