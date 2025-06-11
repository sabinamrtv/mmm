// Функция для нахождения самого часто встречающегося символа и его повторений
function mostFrequentChar(s: string): [string, number] {
    const frequencyMap: { [key: string]: number } = {};

    // Подсчитываем частоту каждого символа
    for (const char of s) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    // Находим символ с максимальной частотой
    let mostFrequentChar = '';
    let maxCount = 0;

    for (const char in frequencyMap) {
        if (frequencyMap[char] > maxCount) {
            mostFrequentChar = char;
            maxCount = frequencyMap[char];
        }
    }

    return [mostFrequentChar, maxCount];
}

// Обработчик события для кнопки "Проверить"
document.getElementById("checkButton")!.addEventListener("click", () => {
    const inputString = (document.getElementById("inputString") as HTMLInputElement).value;
    const resultDiv = document.getElementById("result")!;

    const [char, count] = mostFrequentChar(inputString);

    // Отображаем результат
    resultDiv.textContent = `Самый часто встречающийся символ: '${char}', его количество: ${count}`;
    resultDiv.className = "result valid";
});
