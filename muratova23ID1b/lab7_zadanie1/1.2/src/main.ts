interface Order {
    date: string;  // Дата в формате 'YYYY-MM-DD'
    amount: number; // Сумма заказа
}

// Пример массива заказов
const orders: Order[] = [
    { date: '2020-02-01', amount: 150 },
    { date: '2020-02-15', amount: 200 },
    { date: '2020-03-10', amount: 300 },
    { date: '2020-02-25', amount: 350 },
    { date: '2020-02-20', amount: 120 },
    { date: '2020-01-01', amount: 400 }
];

// Функция для расчета суммы заказов, сделанных в феврале 2020 года
function calculateFebruaryTotal(orders: Order[]): number {
    const targetMonth = '2020-02'; // Февраль 2020 года
    return orders.filter(order => order.date.startsWith(targetMonth)) // Фильтруем заказы по месяцу
        .reduce((total, order) => total + order.amount, 0); // Суммируем суммы
}

// Функция для отображения списка заказов на странице
function displayOrderList(): void {
    const orderListElement = document.getElementById("orderList")!;
    orderListElement.innerHTML = "";  // Очищаем текущий список

    // Добавляем все заказы в список
    orders.forEach(order => {
        const listItem = document.createElement("li");
        listItem.textContent = `Дата: ${order.date}, Сумма: ${order.amount} руб.`;
        orderListElement.appendChild(listItem);
    });
}

// Отображаем список заказов при загрузке страницы
displayOrderList();

// Обработчик события для кнопки "Рассчитать сумму заказов"
document.getElementById("calculateButton")!.addEventListener("click", () => {
    const resultDiv = document.getElementById("result")!;

    // Рассчитываем общую сумму заказов за февраль 2020
    const total = calculateFebruaryTotal(orders);

    // Отображаем результат
    resultDiv.textContent = `Общая сумма заказов за февраль 2020 года: ${total} руб.`;
});
