function findPrimes(): void {
    let inputElement = document.getElementById("inputN") as HTMLInputElement;
    
    // Проверяем, что элемент найден и его значение валидно
    if (inputElement && inputElement.value) {
        let N = parseInt(inputElement.value);

        // Проверка на правильность ввода
        if (isNaN(N) || N < 2) {
            document.getElementById("result")!.textContent = "Ошибка: введите число больше или равно 2.";
            return;
        }

        // Создаем массив чисел от 2 до N
        let primes: number[] = [];
        for (let i = 2; i <= N; i++) {
            primes.push(i);
        }

        // Применяем решето Эратосфена
        for (let i = 2; i <= Math.sqrt(N); i++) {
            if (primes[i]) {
                for (let j = i * i; j <= N; j += i) {
                    primes[j] = 0;  // помечаем составные числа
                }
            }
        }

        // Фильтруем простые числа
        primes = primes.filter(num => num !== 0);

        // Выводим результат
        document.getElementById("result")!.textContent = `Простые числа: ${primes.join(", ")}`;
    } else {
        document.getElementById("result")!.textContent = "Ошибка: не удалось получить значение.";
    }
}
