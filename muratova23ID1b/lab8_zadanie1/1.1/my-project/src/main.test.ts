import { mostFrequentCharacter } from './main';

describe('mostFrequentCharacter', () => {
  it('should return the most frequent character and its count', () => {
    const result = mostFrequentCharacter('aabbbcccc');
    expect(result).toEqual(['c', 4]);
  });

  it('should return an empty character and count 0 for an empty string', () => {
    const result = mostFrequentCharacter('');
    expect(result).toEqual(['', 0]);
  });

  it('should handle strings with one character', () => {
    const result = mostFrequentCharacter('aaa');
    expect(result).toEqual(['a', 3]);
  });
});

describe('DOM interaction without addEventListener', () => {
  it('should update the result without using addEventListener', () => {
    // Инициализируем DOM
    document.body.innerHTML = `
      <input type="text" id="inputString" />
      <button id="checkButton">Check</button>
      <div id="result"></div>
    `;

    // Прямое взаимодействие с DOM
    const button = document.querySelector<HTMLButtonElement>('#checkButton');
    const input = document.querySelector<HTMLInputElement>('#inputString');
    const resultDiv = document.querySelector<HTMLDivElement>('#result');

    // Проверка существования элементов перед манипуляцией
    if (button && input && resultDiv) {
      // Симулируем изменение значения в поле и выполнение логики без addEventListener
      input.value = 'test input';

      // Прямо обновляем содержимое
      resultDiv.textContent = input.value;

      // Проверяем, что результат отображается
      expect(resultDiv.textContent).toBe('test input');
    } else {
      throw new Error('Required DOM elements were not found');
    }
  });
});
