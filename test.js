// GLOBAL VARIABLES
// position of circle
var X = 40;
var Y = 40;
var R = 30;
var myCircles = [];

function main() {
    var canvas = document.getElementById('circle'); // makes canvas
    background(canvas);
    setInterval(function() { circle(canvas, 1); }, 100); 
}

function circle(canvas, velocity) {
    var ctx = canvas.getContext('2d'); // gets functions for drawing

    // MOVE OBJECT
    X += velocity;
    Y += velocity;

    // DRAWING
    ctx.beginPath();
    ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.fillStyle = "white";
    ctx.fill();
}

// CREATES BACKGROUND
function background(canvas) {
    var ctx = canvas.getContext('2d'); // gets functions for drawing
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
}

//var move = setInterval()