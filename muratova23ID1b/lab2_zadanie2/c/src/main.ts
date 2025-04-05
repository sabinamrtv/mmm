function drawPyramid() {
    let heightInput = document.getElementById("height") as HTMLInputElement;
    let canvas = document.getElementById("canvas") as HTMLCanvasElement;
    let ctx = canvas.getContext("2d");

    let h = Number(heightInput.value);
    if (h < 1) {
        alert("Введите число");
        return;
    }

    ctx.fillStyle = "black";

    let x = canvas.width / 2;
    let y = 30;
    let sx = 20;
    let sy = 25;

    for (let i = 0; i < h; i++) {
        let yy = y + i * sy;
        let n = i + 1;
        let off = (n - 1) * sx / 2;

        for (let j = 0; j < n; j++) {
            let xx = x - off + j * sx;
            ctx.beginPath();
            ctx.arc(xx, yy, 3, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}
