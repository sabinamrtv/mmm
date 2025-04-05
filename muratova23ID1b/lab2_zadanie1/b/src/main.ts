// Функция для проверки високосного года
function isLeapYear(year: number): boolean {
    return (year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0);
}

// Функция для нахождения количества дней в месяце
function getDaysInMonth(month: number, year: number): number {
    const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return daysInMonth[month - 1];
}

document.getElementById('daysButton')?.addEventListener('click', () => {
    const month = parseInt((<HTMLInputElement>document.getElementById('monthInput')).value);
    const year = parseInt((<HTMLInputElement>document.getElementById('yearInput')).value);
    const daysOutput = document.getElementById('daysOutput');

    if (month > 1 && month <= 12) {
        const days = getDaysInMonth(month, year);
        daysOutput!.innerText = `В ${month}-м месяце ${year} года ${days} дней.`;
    } else if (month % 10 == 1 && month % 100 !== 11) {
        const days = getDaysInMonth(month, year);
        daysOutput!.innerText = `В ${month}-м месяце ${year} года ${days} день.`;
    } else {
        daysOutput!.innerText = 'Введите правильные значения для месяца и года!';
    }
});
