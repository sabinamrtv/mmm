// Функция для обработки данных и создания словаря покупателей
function processData(): void {
    const inputData = (document.getElementById('inputData') as HTMLTextAreaElement).value.trim();

    if (!inputData) {
        alert("Пожалуйста, введите данные!");
        return;
    }

    try {
        const salesData = parseInputData(inputData);
        const result = formatOutput(salesData);
        document.getElementById('output')!.textContent = result;
    } catch (error) {
        alert("Ошибка в формате данных. Пожалуйста, проверьте ввод.");
    }
}

// Функция для парсинга входных данных
function parseInputData(inputData: string): Map<string, Map<string, number>> {
    const salesData = new Map<string, Map<string, number>>();

    const lines = inputData.split('\n').map(line => line.trim());

    for (const line of lines) {
        const [customer, product, quantityStr] = line.split(' ');
        const quantity = parseInt(quantityStr);

        if (!salesData.has(customer)) {
            salesData.set(customer, new Map());
        }

        const customerData = salesData.get(customer)!;
        if (!customerData.has(product)) {
            customerData.set(product, 0);
        }

        customerData.set(product, customerData.get(product)! + quantity);
    }

    return salesData;
}

// Функция для форматирования вывода
function formatOutput(salesData: Map<string, Map<string, number>>): string {
    const sortedCustomers = Array.from(salesData.keys()).sort();
    let result = '';

    for (const customer of sortedCustomers) {
        result += `${customer}:\n`;

        const customerData = salesData.get(customer)!;
        const sortedProducts = Array.from(customerData.keys()).sort();

        for (const product of sortedProducts) {
            result += `${product} ${customerData.get(product)}\n`;
        }

        result += '\n';
    }

    return result.trim();
}
