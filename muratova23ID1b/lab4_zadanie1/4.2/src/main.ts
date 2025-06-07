function shannonEntropy(text: string): number {
    const frequency: Record<string, number> = {};
    const length = text.length;

    for (const char of text) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    let entropy = 0;

    for (const char in frequency) {
        const p = frequency[char] / length;
        entropy -= p * Math.log2(p);
    }

    return parseFloat(entropy.toFixed(2));
}

function calculate() {
    const input = (document.getElementById("inputText") as HTMLTextAreaElement).value;

    if (!input.trim()) {
        (document.getElementById("output") as HTMLElement).innerText = "Введите строку.";
        return;
    }

    const entropy = shannonEntropy(input);
    (document.getElementById("output") as HTMLElement).innerText = `Энтропия: ${entropy}`;
}
