function canPlay() {
    // Получаем элементы формы
    const dayOfWeek = document.getElementById("dayOfWeek") as HTMLSelectElement;
    const temperature = document.getElementById("temperature") as HTMLSelectElement;
    const weather = document.getElementById("weather") as HTMLSelectElement;
    const wind = document.getElementById("wind") as HTMLSelectElement;
    const humidity = document.getElementById("humidity") as HTMLSelectElement;
    const result = document.getElementById("result") as HTMLParagraphElement;
    
    const dayOfWeekValue = dayOfWeek.options[dayOfWeek.selectedIndex].text;
    const temperatureValue = temperature.options[temperature.selectedIndex].text;
    const weatherValue = weather.options[weather.selectedIndex].text;
    const windValue = wind.options[wind.selectedIndex].text;
    const humidityValue = humidity.options[humidity.selectedIndex].text;

    if (dayOfWeekValue !== "Воскресенье" && weatherValue === "Ясно" && windValue === "Ветра нет" && (temperatureValue === "Тепло" || temperatureValue === "Жарко") && humidityValue === "Низкая влажность") {
        result.textContent = "Да, можно играть в бадминтон! Жаль, что сегодня не воскресенье!";
    } else if (dayOfWeekValue === "Воскресенье" && weatherValue === "Ясно" && windValue === "Ветра нет" && (temperatureValue === "Тепло" || temperatureValue === "Жарко") && humidityValue === "Низкая влажность") {
        result.textContent = "Да, можно играть в бадминтон! Воскресенье отлично для этого подходит!";
    } else {
        result.textContent = "Нет, не стоит играть в бадминтон.";
    }
}
