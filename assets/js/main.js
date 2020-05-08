const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

canvas.addEventListener('mousedown', start);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stop);

window.addEventListener('resize', resizeCanvas);
function resizeCanvas () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();