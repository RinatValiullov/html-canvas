var canvas = document.querySelector('canvas');

wWidth = window.innerWidth;
wHeigth = window.innerHeight;

canvas.width = wWidth;
canvas.height = wHeigth;

var ctx = canvas.getContext('2d');


(function() {
    let requestAnimationFrame = window.requestAnimationFrame ||
                                window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame ||
                                window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();


function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = '#2233dd';
        ctx.stroke();
        ctx.lineWidth = 2;
        ctx.fill();
    }

    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
    
        this.x += this.dx;
    
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
    
        this.y += this.dy;

        this.draw();
    }
}

let arrayCircle = [];

for (let i = 0; i < 140; i++) {

    var radius = 70;
    var x = Math.random() * (innerWidth - 2 * radius) + radius;
    var y = Math.random() * (innerHeight - 2 * radius) + radius;
    var dx = (Math.random() - 0.5) * 2;
    var dy = (Math.random() - 0.5) * 2;
    arrayCircle.push(new Circle(x, y, dx, dy, radius));

}

function toRight() {
    
    requestAnimationFrame(toRight);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    
    for (let i = 0; i < arrayCircle.length; i++) {
        arrayCircle[i].update();
    }

}

toRight();