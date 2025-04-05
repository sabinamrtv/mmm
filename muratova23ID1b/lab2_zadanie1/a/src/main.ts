// Функция для склонения слова "год"
function types_Fcn() {
    function getAgeString(age: number): string {
        if (age < 0) {
            return `Возраст не может быть отрицательным!`;
        }
        if (age % 10 == 1 && age % 100 !== 11) {
            return `${age} год`;
        } else if ((age % 10 == 2 || age % 10 == 3 || age % 10 == 4) && (age % 100 !== 12 && age % 100 !== 13 && age % 100 !== 14)) {
            return `${age} года`;
        } else {
            return `${age} лет`;
        }
    }

    document.getElementById('submitButton')?.addEventListener('click', () => {
        const age = parseInt((<HTMLInputElement>document.getElementById('ageInput')).value);
        const outputText = document.getElementById('outputText');
        outputText!.innerText = `Ваш возраст: ${getAgeString(age)}`;
    });
}
types_Fcn();