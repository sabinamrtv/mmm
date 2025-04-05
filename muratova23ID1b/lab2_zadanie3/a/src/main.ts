function findMaxCount(): void {
    const input: string = (document.getElementById("inputNumbers") as HTMLInputElement).value;

    const numbers: number[] = input.split(" ").map(Number);
    if (numbers.length === 0 || numbers.some(isNaN)) {
        (document.getElementById("result") as HTMLParagraphElement).textContent = "Пожалуйста, введите только числа, разделённые пробелами.";
        return;
    }
    const maxNumber: number = Math.max(...numbers);
    const countMax: number = numbers.filter(num => num === maxNumber).length;

    (document.getElementById("result") as HTMLParagraphElement).textContent = `Максимальное число: ${maxNumber}. Оно встречается ${countMax} раз(а).`;
}
