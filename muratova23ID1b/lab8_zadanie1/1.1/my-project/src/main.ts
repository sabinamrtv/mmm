// Функция для подсчета частоты символов в строке
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
document.querySelector<HTMLButtonElement>('#checkButton')!.addEventListener("click", () => {
  const inputString = (document.querySelector<HTMLInputElement>('#inputString') as HTMLInputElement).value;
  const resultDiv = document.querySelector<HTMLDivElement>('#result')!;

  const [maxChar, maxCount] = mostFrequentCharacter(inputString);

  // Отображаем результат
  resultDiv.textContent = `Самый часто встречающийся символ: "${maxChar}", Количество повторов: ${maxCount}`;
});
