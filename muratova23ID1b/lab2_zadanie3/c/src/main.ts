function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
    let result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

function sortArray(): void {
    const inputElement = document.getElementById("inputArray") as HTMLInputElement;

    if (inputElement && inputElement.value) {
        const userInput = inputElement.value.trim();

        // Преобразуем введенные числа в массив
        const arr = userInput.split(",").map(num => parseInt(num.trim()));

        // Проверка на наличие некорректных данных
        if (arr.some(isNaN)) {
            document.getElementById("result")!.textContent = "Ошибка: введите корректные числа, разделенные запятыми.";
            return;
        }

        // Сортируем массив с помощью MergeSort
        const sortedArray = mergeSort(arr);

        // Выводим результат
        document.getElementById("result")!.textContent = `Отсортированный массив: ${sortedArray.join(", ")}`;
    } else {
        document.getElementById("result")!.textContent = "Ошибка: не удалось получить данные.";
    }
}
