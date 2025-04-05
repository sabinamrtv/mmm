// Задание 2. Определяем числовые типы данных и их максимальные/минимальные значения
function types_Fcn() {
  // Определяем переменные разных типов данных
  const str: string = "Hello, TypeScript"; // строка
  const num: number = 42; // число
  const bool: boolean = true; // логическое значение
  const arr: number[] = [1, 2, 3]; // массив чисел

  // Вывод типов переменных в консоль
  console.log("Тип переменной str:", typeof str);
  console.log("Тип переменной num:", typeof num);
  console.log("Тип переменной bool:", typeof bool);
  console.log("Тип переменной arr:", typeof arr);

  
  let maxInteger: number = Math.pow(2, 53) - 1; // Максимальное безопасное целое число: 2^53 - 1
  let minInteger: number = -Math.pow(2, 53) + 1; // Минимальное безопасное целое число: - (2^53 - 1)
  let maxFloat: number = Number.MAX_VALUE; // Максимальное значение для чисел с плавающей запятой
  let minFloat: number = Number.MIN_VALUE; // Минимальное положительное значение для чисел с плавающей запятой

  // Вывод типов переменных максимального и минимального значения числа в консоль
  console.log(`Максимальное безопасное целое число: ${maxInteger}`);
  console.log(`Минимальное безопасное целое число: ${minInteger}`);
  console.log(`Максимальное значение для чисел с плавающей запятой: ${maxFloat}`);
  console.log(`Минимальное положительное значение для чисел с плавающей запятой: ${minFloat}`);
}
types_Fcn();
