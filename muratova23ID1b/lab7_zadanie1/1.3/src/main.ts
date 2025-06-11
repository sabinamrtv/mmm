function mostFrequentCharacter(s: string): [string, number] {
    const frequencyMap: { [key: string]: number } = {};

    // Подсчет частоты каждого символа в строке
    for (let char of s) {
        if (frequencyMap[char]) {
            frequencyMap[char]++;
        } else {
            frequencyMap[char] = 1;
        }
    }

    // Поиск самого часто встречающегося символа
    let maxChar = '';
    let maxCount = 0;

    for (let char in frequencyMap) {
        if (frequencyMap[char] > maxCount) {
            maxCount = frequencyMap[char];
            maxChar = char;
        }
    }

    return [maxChar, maxCount];
}

// Обработчик события для кнопки "Проверить"
document.getElementById("checkButton")!.addEventListener("click", () => {
    const inputString = (document.getElementById("inputString") as HTMLInputElement).value;
    const resultDiv = document.getElementById("result")!;

    const [maxChar, maxCount] = mostFrequentCharacter(inputString);

    // Отображаем результат
    resultDiv.textContent = `Самый часто встречающийся символ: "${maxChar}", Количество повторов: ${maxCount}`;
});
// Определение типа для заказа
interface Order {
    id: number;
    date: string;  // Дата в формате 'YYYY-MM-DD'
    amount: number; // Сумма заказа
}

// Пример массива заказов
const orders: Order[] = [
    { id: 1, date: '2020-02-01', amount: 150 },
    { id: 2, date: '2020-02-15', amount: 200 },
    { id: 3, date: '2020-03-10', amount: 300 },
    { id: 4, date: '2020-02-25', amount: 350 },
    { id: 5, date: '2020-02-20', amount: 120 },
    { id: 6, date: '2020-01-01', amount: 400 }
];

// Функция для расчета суммы заказов, сделанных в феврале 2020 года
function calculateFebruaryTotal(orders: Order[]): number {
    const targetMonth = '2020-02'; // Февраль 2020 года

    const filteredOrders = orders.filter(order => order.date.startsWith(targetMonth));

    return filteredOrders.reduce((total, order) => total + order.amount, 0);
}

// Обработчик события для кнопки "Рассчитать"
document.getElementById("calculateButton")!.addEventListener("click", () => {
    const resultDiv = document.getElementById("result")!;

    // Рассчитываем общую сумму заказов за февраль 2020
    const total = calculateFebruaryTotal(orders);

    // Отображаем результат
    resultDiv.textContent = `Общая сумма заказов за февраль 2020 года: ${total} руб.`;
});
