// Функция для вычисления квадратного корня методом Герона
function calculateSquareRoot(): number {
    const inputElement = document.getElementById('numberInput') as HTMLInputElement;
    const number = parseFloat(inputElement.value); // Получаем введенное значение и преобразуем в число
    const resultElement = document.getElementById('result') as HTMLParagraphElement;

    // Проверка на корректность введенного числа
    if (isNaN(number) || number < 0) {
        resultElement.textContent = 'Введите положительное число!';
        return;
    }

    let nach_shislo = number / 2; // Начальное предположение
    const tochnost = 0.000001; // Точность

    // Итерационная формула Герона
    while (Math.abs(nach_shislo * nach_shislo - number) > tochnost) {
        nach_shislo = (nach_shislo + number / nach_shislo) / 2;
    }

    // Выводим результат
    resultElement.textContent = `Квадратный корень числа ${number} равен ${nach_shislo.toFixed(6)}.`;
}

// Обработчик события для кнопки
document.getElementById('calculateButton')?.addEventListener('click', calculateSquareRoot);

