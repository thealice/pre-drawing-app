const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

window.addEventListener('resize', resizeCanvas);
function resizeCanvas () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();