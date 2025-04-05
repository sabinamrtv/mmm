let canvas = document.getElementById('myCanvas') as
                 HTMLCanvasElement;

let context = canvas.getContext("2d");

let lastTime = 0;
function animate(currentTime: number): void {
    context.clearRect(0, 0, canvas.width, canvas.height);

    requestAnimationFrame(animate);

    const deltaTime = (currentTime - lastTime) / 1000; // Convert milliseconds to seconds
    lastTime = currentTime;

    for (let i=0; i< 26*2; i++) {
        context.fillStyle = "black";
        context.fillRect(i * 10, 512/2, 5, 5+100*Math.sin(lastTime/1000));
    }

    console.log(currentTime/1000);
}

animate(0);

console.log("End of script");
