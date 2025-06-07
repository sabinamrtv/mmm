const inputData = document.getElementById('inputData') as HTMLTextAreaElement;
const sortField = document.getElementById('sortField') as HTMLSelectElement;
const processBtn = document.getElementById('processBtn') as HTMLButtonElement;
const output = document.getElementById('output') as HTMLDivElement;

processBtn.addEventListener('click', () => {
  const input = inputData.value.trim();
  const sortBy = sortField.value;
  output.textContent = '';

  if (!input) {
    output.textContent = 'Пожалуйста, введите данные.';
    return;
  }

  // Разбиваем по '@'
  const readings = input.split('@');

  interface SensorData {
    id: string;
    temps: number[];
  }

  const sensors: Record<string, number[]> = {};

  for (const r of readings) {
    const rec = r.trim();
    if (rec.length < 3) continue;

    const id = rec.slice(0, 2);
    const tempStr = rec.slice(2);

    if (!/^\d{2}$/.test(id)) continue;
    if (!/^(-?\d+)$/.test(tempStr)) continue;

    const temp = parseInt(tempStr, 10);
    if (temp < -50 || temp > 50) continue;

    if (!sensors[id]) {
      sensors[id] = [];
    }
    sensors[id].push(temp);
  }

  const results: { id: string, avg: number }[] = [];

  for (const id in sensors) {
    const temps = sensors[id];
    const sum = temps.reduce((a, b) => a + b, 0);
    const avg = sum / temps.length;
    results.push({ id, avg });
  }

  if (results.length === 0) {
    output.textContent = 'Данные не найдены или неверный формат.';
    return;
  }

  if (sortBy === 'id') {
    results.sort((a, b) => parseInt(a.id) - parseInt(b.id));
  } else {
    results.sort((a, b) => a.avg - b.avg);
  }

  const outputText = results
    .map(r => `${parseInt(r.id)} ${r.avg.toFixed(1)}`)
    .join('\n');

  output.textContent = outputText;
});
