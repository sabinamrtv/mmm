function countOccurrences() {
    const substring = (document.getElementById("substring") as HTMLInputElement).value;
    const text = (document.getElementById("text") as HTMLTextAreaElement).value;

    if (!substring || !text) {
        (document.getElementById("result") as HTMLElement).innerText = "Пожалуйста, заполните оба поля.";
        return;
    }

    const regex = new RegExp(substring, "g");
    const matches = text.match(regex);
    const count = matches ? matches.length : 0;

    (document.getElementById("result") as HTMLElement).innerText = `Количество вхождений: ${count}`;
}
