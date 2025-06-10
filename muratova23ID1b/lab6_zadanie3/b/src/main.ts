function processLanguages() {
    const inputData = (document.getElementById('inputData') as HTMLTextAreaElement).value.trim();

    if (!inputData) {
        alert("Пожалуйста, введите данные!");
        return;
    }

    const lines = inputData.split('\n').map(line => line.trim());

    const numStudents = parseInt(lines[0]); // Читаем количество школьников
    let allLanguages = new Set<string>(); // Множество всех языков, которые знает хотя бы один школьник
    let commonLanguages: Set<string> | null = null; // Множество языков, которые знают все школьники

    let lineIndex = 1;
    for (let i = 0; i < numStudents; i++) {
        const numLanguages = parseInt(lines[lineIndex]); // Читаем количество языков для текущего школьника
        const studentLanguages = new Set<string>();

        for (let j = 0; j < numLanguages; j++) {
            const language = lines[lineIndex + 1 + j];
            studentLanguages.add(language);
            allLanguages.add(language); // Добавляем язык в множество всех языков
        }

        if (commonLanguages === null) {
            // Для первого школьника все его языки — это и языки, которые знают все
            commonLanguages = new Set(studentLanguages);
        } else {
            // Пересекаем с текущим множеством языков
            commonLanguages = new Set([...commonLanguages].filter(language => studentLanguages.has(language)));
        }

        lineIndex += numLanguages + 1; // Переходим к следующему школьнику
    }

    // Сортируем и выводим результаты
    const sortedCommonLanguages = [...commonLanguages!].sort(); // Языки, которые знают все школьники
    const sortedAllLanguages = [...allLanguages].sort(); // Языки, которые знают хотя бы один школьник

    const output = document.getElementById('output')!;
    output.innerHTML = '';

    // Количество и языки, которые знают все
    output.innerHTML += `${sortedCommonLanguages.length}\n`;
    sortedCommonLanguages.forEach(language => output.innerHTML += `${language}\n`);

    // Количество и языки, которые знает хотя бы один школьник
    output.innerHTML += `${sortedAllLanguages.length}\n`;
    sortedAllLanguages.forEach(language => output.innerHTML += `${language}\n`);
}
