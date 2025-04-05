// Функция для инициализации массива с флагами простоты чисел
function initializeArray(n: number): boolean[] {
    let primes: boolean[] = new Array(n + 1).fill(true); // Все числа считаем простыми
    primes[0] = primes[1] = false; // 0 и 1 не простые числа
    return primes;
}

// Функция для реализации алгоритма Эратосфена
function sieveOfEratosthenes(n: number): boolean[] {
    const primes = initializeArray(n);

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (primes[i]) { // Если i простое
            for (let j = i * i; j <= n; j += i) {
                primes[j] = false; // Отметить кратные числа как составные
            }
        }
    }
    return primes;
}

// Функция для получения списка простых чисел
function getPrimes(primes: boolean[], n: number): number[] {
    const result: number[] = [];
    for (let i = 2; i <= n; i++) {
        if (primes[i]) {
            result.push(i); // Добавляем простые числа в результат
        }
    }
    return result;
}

// Функция для отображения результатов на странице
function displayPrimes(n: number): void {
    const primes = sieveOfEratosthenes(n); // Находим простые числа
    const primesList = getPrimes(primes, n); // Собираем список простых чисел
    const output = document.getElementById('output') as HTMLParagraphElement;

    if (primesList.length > 0) {
        output.innerText = `Простые числа от 2 до ${n}: ${primesList.join(", ")}`;
    } else {
        output.innerText = 'Нет простых чисел для этого диапазона.';
    }
}

// Обработчик нажатия кнопки
document.getElementById('findButton')?.addEventListener('click', () => {
    const n = parseInt((<HTMLInputElement>document.getElementById('numberInput')).value);
    const output = document.getElementById('output') as HTMLParagraphElement;

    if (!isNaN(n) && n >= 2) {
        displayPrimes(n); // Выводим простые числа
    } else {
        output.innerText = 'Введите правильное число больше или равно 2.';
    }
});
