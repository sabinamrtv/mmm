function removeDuplicates(): void {
    const input = (document.getElementById('inputArray') as HTMLInputElement).value;

    if (!input) {
        alert("Пожалуйста, введите массив.");
        return;
    }

    // Преобразуем строку ввода в массив чисел
    const inputArray = input.split(',').map(item => item.trim()).map(Number);

    // Удаляем дубликаты с помощью Set
    const uniqueSet = new Set(inputArray);

    // Преобразуем Set обратно в массив
    const uniqueArray = Array.from(uniqueSet);

    // Отображаем результат
    const resultElement = document.getElementById('result')!;
    resultElement.textContent = `Массив без дубликатов: ${uniqueArray.join(', ')}`;
}
