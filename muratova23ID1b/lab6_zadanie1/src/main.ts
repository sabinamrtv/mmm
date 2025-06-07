function perms(arr: number[]): number[][] {
  if (arr.length === 0) return [[]];
  let result: number[][] = [];
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let remaining = arr.slice(0, i).concat(arr.slice(i + 1));
    let permuted = perms(remaining);
    for (let perm of permuted) {
      result.push([current, ...perm]);
    }
  }
  return result;
}

function displayPermutations() {
  const input = <HTMLInputElement>document.getElementById("inputArray");
  const output = <HTMLDivElement>document.getElementById("output");
  const inputArr = input.value.split(',').map(num => parseInt(num.trim()));
  const permutations = perms(inputArr);

  output.innerHTML = `<h3>Перестановки:</h3><pre>${JSON.stringify(permutations, null, 2)}</pre>`;
}

document.getElementById("generate")!.addEventListener("click", displayPermutations);
