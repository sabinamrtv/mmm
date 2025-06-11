// Функция для проверки валидности строки скобок
function isValid(input: string): boolean {
  const stack: string[] = [];
  const matchingBrackets: { [key: string]: string } = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of input) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Пример использования
const inputString: string = "{[()]}";
const result: boolean = isValid(inputString);
console.log(`Строка "${inputString}" валидна? ${result}`);
