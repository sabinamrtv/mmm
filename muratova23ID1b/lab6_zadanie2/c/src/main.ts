// Классическая версия (рекурсивная без оптимизаций)
function fibonacciClassic(n: number): number {
    if (n <= 1) return n;
    return fibonacciClassic(n - 1) + fibonacciClassic(n - 2);
}

// Оптимизированная версия с кешированием (мемоизация)
const fibCache: number[] = [];
function fibonacciOptimized(n: number): number {
    if (n <= 1) return n;
    if (fibCache[n] !== undefined) return fibCache[n];
    fibCache[n] = fibonacciOptimized(n - 1) + fibonacciOptimized(n - 2);
    return fibCache[n];
}

// Функция для сравнения времени выполнения двух алгоритмов
function compareFibCalculations() {
    const inputNumber = Number((document.getElementById('inputNumber') as HTMLInputElement).value);

    // Классический алгоритм
    const startClassic = performance.now();
    const resultClassic = fibonacciClassic(inputNumber);
    const endClassic = performance.now();
    const timeClassic = endClassic - startClassic;

    // Оптимизированный алгоритм
    const startOptimized = performance.now();
    const resultOptimized = fibonacciOptimized(inputNumber);
    const endOptimized = performance.now();
    const timeOptimized = endOptimized - startOptimized;

    // Вывод результатов на экран
    const output = document.getElementById('output')!;
    output.innerHTML = `
        Результат (классический): ${resultClassic} <br>
        Время (классический): ${timeClassic.toFixed(4)} ms <br><br>
        Результат (оптимизированный): ${resultOptimized} <br>
        Время (оптимизированный): ${timeOptimized.toFixed(4)} ms <br>
    `;
}
