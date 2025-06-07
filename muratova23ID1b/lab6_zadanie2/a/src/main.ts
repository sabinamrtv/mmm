// Функция для обработки входных данных и преобразования словаря
function processDictionary(): void {
  const inputData = (document.getElementById('inputData') as HTMLTextAreaElement).value.trim();
  if (!inputData) {
    alert("Пожалуйста, введите данные!");
    return;
  }

  const englishToLatinMap = parseInputData(inputData);
  const latinToEnglishMap = createLatinToEnglishDictionary(englishToLatinMap);
  const output = formatOutput(latinToEnglishMap);
  document.getElementById('output')!.textContent = output;
}

// Функция для парсинга входных данных
function parseInputData(inputData: string): Map<string, string[]> {
  const englishToLatinMap = new Map<string, string[]>();

  const lines = inputData.split('\n').map(line => line.trim());
  for (const line of lines) {
    const [englishWord, latinWords] = line.split(' - ');
    const latinList = latinWords.split(', ').sort();
    englishToLatinMap.set(englishWord, latinList);
  }

  return englishToLatinMap;
}

// Функция для создания латинско-английского словаря
function createLatinToEnglishDictionary(englishToLatinMap: Map<string, string[]>): Map<string, Set<string>> {
  const latinToEnglishMap = new Map<string, Set<string>>();

  // Заполняем латинско-английский словарь
  for (const [englishWord, latinWords] of englishToLatinMap) {
    for (const latinWord of latinWords) {
      if (!latinToEnglishMap.has(latinWord)) {
        latinToEnglishMap.set(latinWord, new Set());
      }
      latinToEnglishMap.get(latinWord)!.add(englishWord);
    }
  }

  // Сортируем английские слова в лексикографическом порядке
  for (const [latinWord, englishSet] of latinToEnglishMap) {
    latinToEnglishMap.set(latinWord, new Set(Array.from(englishSet).sort()));
  }

  return latinToEnglishMap;
}

// Функция для форматирования вывода
function formatOutput(latinToEnglishMap: Map<string, Set<string>>): string {
  const sortedLatinWords = Array.from(latinToEnglishMap.keys()).sort();
  let result = '';

  for (const latinWord of sortedLatinWords) {
    const englishWords = Array.from(latinToEnglishMap.get(latinWord)!);
    result += `${latinWord} - ${englishWords.join(', ')}\n`;
  }

  return result.trim();
}
