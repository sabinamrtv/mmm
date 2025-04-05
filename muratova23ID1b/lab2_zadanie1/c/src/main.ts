function canPlay() {
    const dayOfWeek = (document.getElementById("dayOfWeek") as HTMLSelectElement).value;
    const temperature = (document.getElementById("temperature") as HTMLSelectElement).value;
    const weather = (document.getElementById("weather") as HTMLSelectElement).value;
    const wind = (document.getElementById("wind") as HTMLSelectElement).value;
    const humidity = (document.getElementById("humidity") as HTMLSelectElement).value;
    const result = document.getElementById("result") as HTMLParagraphElement;

    // Проверка, можно ли играть в бадминтон в зависимости от факторов
    if (dayOfWeek !== "sunday" && weather === "clear" && wind === "no" && (temperature === "warm" || temperature === "hot") && humidity === "low") {
        result.textContent = "Да, можно играть в бадминтон! Жаль, что сегодня не воскресенье!(";
    } else if (dayOfWeek == "sunday" && weather === "clear" && wind === "no" && (temperature === "warm" || temperature === "hot") && humidity === "low") {
        result.textContent = "Да, можно играть в бадминтон! Воскресенье отлично для этого подходит!)";
    } else {
        result.textContent = "Нет, не стоит играть в бадминтон.";
    }
}
