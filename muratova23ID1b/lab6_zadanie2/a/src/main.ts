// Функция для обработки входных данных и преобразования словаря
function processDictionary() {
  const inputData = (document.getElementById('inputData') as HTMLTextAreaElement).value.trim();

  if (!inputData) {
    alert("Пожалуйста, введите данные!");
    return;
  }

  try {
    const englishToLatinMap = parseInputData(inputData);
    const latinToEnglishMap = createLatinToEnglishDictionary(englishToLatinMap);
    const output = formatOutput(latinToEnglishMap);
    document.getElementById('output')!.textContent = output;
  } catch (error) {
    alert("Ошибка в формате данных. Пожалуйста, проверьте ввод.");
  }
}

// Функция для парсинга входных данных
function parseInputData(inputData: string): Map<string, string[]> {
  const englishToLatinMap = new Map<string, string[]>();

  const lines = inputData.split('\n').map(line => line.trim());

  for (const line of lines) {
    if (!line.includes(' - ')) {
      throw new Error('Неверный формат строки');
    }

    const [englishWord, latinWords] = line.split(' - ');

    // Проверяем, что латинские слова разделены запятыми
    const latinList = latinWords.split(', ').sort();
    englishToLatinMap.set(englishWord, latinList);
  }

  return englishToLatinMap;
}

// Функция для создания латинско-английского словаря
function createLatinToEnglishDictionary(englishToLatinMap: Map<string, string[]>): Map<string, string[]> {
  const latinToEnglishMap = new Map<string, string[]>();

  // Заполняем латинско-английский словарь
  for (const [englishWord, latinWords] of englishToLatinMap) {
    for (const latinWord of latinWords) {
      if (!latinToEnglishMap.has(latinWord)) {
        latinToEnglishMap.set(latinWord, []);
      }
      latinToEnglishMap.get(latinWord)!.push(englishWord);
    }
  }

  // Сортируем английские слова для каждого латинского слова
  for (const [latinWord, englishWords] of latinToEnglishMap) {
    latinToEnglishMap.set(latinWord, englishWords.sort());
  }

  return latinToEnglishMap;
}

// Функция для форматирования вывода латинско-английского словаря
function formatOutput(latinToEnglishMap: Map<string, string[]>): string {
  const sortedLatinWords = [...latinToEnglishMap.keys()].sort();  // Используем оператор распространения
  let result = '';

  for (const latinWord of sortedLatinWords) {
    const englishWords = latinToEnglishMap.get(latinWord)!;
    result += `${latinWord} - ${englishWords.join(', ')}\n`;
  }

  return result.trim();
}

