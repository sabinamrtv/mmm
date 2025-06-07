// Функция для вычисления максимальной площади
function maxArea(heights: number[]): number {
  let left = 0;
  let right = heights.length - 1;
  let maxArea = 0;

  while (left < right) {
    // Вычисляем текущую площадь
    const height = Math.min(heights[left], heights[right]);
    const width = right - left;
    const area = height * width;

    // Обновляем максимальную площадь, если найдено большее значение
    maxArea = Math.max(maxArea, area);

    // Сдвигаем указатель в сторону, где высота меньше
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

// Функция для отображения результатов на веб-странице
function displayMaxArea() {
  const input = (document.getElementById('inputArray') as HTMLInputElement).value;
  const heights = input.split(',').map(Number);

  if (heights.some(isNaN)) {
    alert('Пожалуйста, введите только числа, разделенные запятыми.');
    return;
  }

  const max = maxArea(heights);

  // Выводим максимальную площадь
  const outputElement = document.getElementById('output')!;
  outputElement.innerHTML = `Максимальная площадь: ${max}`;

  // Отображаем график
  drawChart(heights);
}

// Функция для рисования графика
function drawChart(heights: number[]): void {
  const canvas = document.getElementById('chartCanvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const width = canvas.width;
  const height = canvas.height;

  const scaleY = 30;  // Масштаб по оси Y для увеличения высоты столбиков

  ctx.clearRect(0, 0, width, height);  // Очищаем холст

  const barWidth = Math.max(width / heights.length, 4);  // Минимальная ширина столбиков 4px

  const maxHeight = Math.max(...heights);

  // Рисуем числа по оси Y (от 0 до maxHeight)
  ctx.fillStyle = 'black';
  for (let i = 0; i <= maxHeight; i++) {
    const y = height - i * scaleY;
    ctx.fillText(i.toString(), 10, y);
  }

  // Находим два столбика с максимальной площадью
  let left = 0;
  let right = heights.length - 1;
  let maxArea = 0;
  let maxLeft = left;
  let maxRight = right;

  while (left < right) {
    const currentHeight = Math.min(heights[left], heights[right]);
    const width = right - left;
    const area = currentHeight * width;

    if (area > maxArea) {
      maxArea = area;
      maxLeft = left;
      maxRight = right;
    }

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  // Рисуем столбцы
  for (let i = 0; i < heights.length; i++) {
    const x = i * barWidth + 30; // Смещение для отступа от оси Y
    const y = height - heights[i] * scaleY; // Масштабирование по оси Y
    const barHeight = heights[i] * scaleY;

    // Если это крайние столбики с максимальной площадью, красим их в красный
    if (i === maxLeft || i === maxRight) {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = 'blue';
    }

    ctx.fillRect(x, y, barWidth - 1, barHeight);  // Рисуем столбик

    // Закрашиваем область между столбиками голубым цветом (вода)
    if (i > maxLeft && i < maxRight) {
      const waterHeight = Math.min(heights[maxLeft], heights[maxRight]) * scaleY - heights[i] * scaleY;
      const waterY = height - heights[i] * scaleY - waterHeight;
      ctx.fillStyle = 'rgba(0, 191, 255, 0.5)';  // Голубой с прозрачностью
      ctx.fillRect(x, waterY, barWidth - 1, waterHeight);
    }
  }
}
