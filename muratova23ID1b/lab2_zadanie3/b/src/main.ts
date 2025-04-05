function findMedian(): void {
    const inputElement = document.getElementById("inputNumbers") as HTMLInputElement;
    const inputValue = inputElement.value;

    // Преобразуем введенную строку в массив чисел
    const numbers: number[] = inputValue.split(",").map(num => parseFloat(num.trim()));

    // Проверяем, что введены корректные числа
    if (numbers.some(isNaN)) {
        document.getElementById("result")!.textContent = "Ошибка: введите только числа, разделенные запятыми.";
        return;
    }

    // Находим медиану
    const median = calculateMedian(numbers);

    // Выводим результат
    document.getElementById("result")!.textContent = "Медиана: " + median;
}

function calculateMedian(arr: number[]): number {
    // Сортируем массив
    arr.sort((a, b) => a - b);

    const middle = Math.floor(arr.length / 2);

    // Если количество элементов нечетное, возвращаем среднее значение
    if (arr.length % 2 === 1) {
        return arr[middle];
    }

    // Если количество элементов четное, возвращаем среднее значение двух центральных чисел
    return (arr[middle - 1] + arr[middle]) / 2;
}
