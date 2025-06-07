// Функция для вычисления максимальной прибыли
function maxProfit(prices: number[]): number {
  let minPrice = prices[0]; // Изначально минимальная цена - первая цена
  let maxProfit = 0; // Изначально прибыль равна 0

  // Проходим по всем дням начиная с 1 (второй день)
  for (let i = 1; i < prices.length; i++) {
    // Вычисляем возможную прибыль на текущий день
    const profit = prices[i] - minPrice;
    maxProfit = Math.max(maxProfit, profit); // Обновляем максимальную прибыль

    // Обновляем минимальную цену, если находим более низкую
    minPrice = Math.min(minPrice, prices[i]);
  }

  return maxProfit;
}

// Функция для отображения результатов на веб-странице
function displayMaxProfit() {
  const input = (document.getElementById('inputArray') as HTMLInputElement).value;
  const prices = input.split(',').map(Number);

  if (prices.some(isNaN)) {
    alert('Пожалуйста, введите только числа, разделенные запятыми.');
    return;
  }

  const profit = maxProfit(prices);
  const outputElement = document.getElementById('output')!;
  outputElement.innerHTML = `Максимальная прибыль: ${profit}`;
}
