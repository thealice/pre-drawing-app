const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

canvas.addEventListener('mousedown', start);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stop);

function start (e) {
    isDrawing = true;
    draw(e);
}

function draw ({clientX: x, clientY: y}) {
    if (!isDrawing) return; // if not drawing, do nothing
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#171717";

    // DEV ED tutorial: https://www.youtube.com/c/dev_ed
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

function stop () {
    isDrawing = false;
    ctx.beginPath();
}

window.addEventListener('resize', resizeCanvas);
function resizeCanvas () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();