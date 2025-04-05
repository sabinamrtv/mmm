function sieveOfEratosthenes(n: number): number[] {
    let primes: boolean[] = [];
    for (let i = 0; i <= n; i++) {
        primes.push(true);
    }

    primes[0] = primes[1] = false;

    for (let i = 2; i * i <= n; i++) {
        if (primes[i]) {
            for (let j = i * i; j <= n; j += i) {
                primes[j] = false;
            }
        }
    }

    let result: number[] = [];
    for (let i = 2; i <= n; i++) {
        if (primes[i]) {
            result.push(i);
        }
    }
    return result;
}

function handleButtonClick() {
    const inputElement = document.getElementById("inputNumber") as HTMLInputElement;
    const resultElement = document.getElementById("result") as HTMLParagraphElement;

    const number = parseInt(inputElement.value);

    if (isNaN(number) || number < 2) {
        resultElement.textContent = "Пожалуйста, введите число больше 1.";
        return;
    }

    const primes = sieveOfEratosthenes(number);

    resultElement.textContent = `Простые числа до ${number}: ${primes.join(', ')}`;
}

const submitButton = document.getElementById("submitButton") as HTMLButtonElement;
submitButton.addEventListener("click", handleButtonClick);
